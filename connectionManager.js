class KwsConnectionManager {
    constructor() {
        this.isRunning = false;
        this.handleLoginProcess();
    }
    setReconnectionCookie(reset = false) {
        const d = new Date();
        d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
        let expires = "expires="+d.toUTCString();
        var cookieValue = reset ? '' : GAME.char_id;
        document.cookie = "kwsreccharid" + "=" + cookieValue + ";" + expires + ";path=/" + ";domain=kosmiczni.pl";
        document.cookie = "kwsreccharid" + "=" + cookieValue + ";" + expires + ";path=/";
      }
      
      getReconnectionCookie() {
        let name = "kwsreccharid" + "=";
        let ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return '';
      }

      redirectToMain() {
        console.log("KWS: redirect to main page after disconnect");
        this.isRunning = false;
        GAME.redirect(locals.main_url,0);
      }

      logout() {
        console.log("KWS: logout after disconnect");
        setTimeout(GAME.emitOrder({a:1}), 1000);
        setTimeout(this.redirectToMain, 2000);
      }

      login(disconnectedCharacterId) {
        console.log("KWS: reconnecting to disconnected charID = %s", disconnectedCharacterId);
        GAME.emitOrder({ a: 2, char_id: disconnectedCharacterId });
        this.setReconnectionCookie(true);
        this.isRunning = false;
      }

      clickFirstLogin() {
        console.log("KWS: attempt to login first step...");
        $("#cg_login_button1").eq(0).click();
        setTimeout(this.clickSecondLogin, 15000);
      }

      clickSecondLogin() {
        console.log("KWS: attempt to login second step...");
        $("#cg_login_button2").eq(0).click();
        this.isRunning = false;
      }

      handleDisconnect() {
        this.isRunning = true;
        this.setReconnectionCookie();
        this.logout();
      }

      handleLoginProcess() {
        this.isRunning = true;
        console.log("KWS: connection monitor check...");
        var disconnectedCharacterId = this.getReconnectionCookie();
        if (disconnectedCharacterId != '') {
          console.log("KWS: attempt to login...");
          var allCharacters = [...$("li[data-option=select_char]")];
          if (allCharacters.length != 0) {
            this.login(disconnectedCharacterId);
          } else if ($("#server_choose").is(":visible")) {
            setTimeout(this.clickSecondLogin, 30000);
            //this.clickSecondLogin();
          } else {
            setTimeout(this.clickFirstLogin(), 30000);
            //this.clickFirstLogin();
          }
        } else {
          console.log("KWS: no login needed...");
          this.isRunning = false;
        }
      }
}

var kwsConnectionMonitor = undefined;

if (kwsConnectionMonitorVerifier) {
    clearInterval(kwsConnectionMonitorVerifier);
    kwsConnectionMonitorVerifier = undefined;
}

function verifyConnectionManager() {
    if(typeof kwsConnectionMonitor === 'undefined') {
      kwsConnectionMonitor = new KwsConnectionManager();
    } else {
      // console.log("KWS: connection monitor detected");
      var disconnectedCharacterId = kwsConnectionMonitor.getReconnectionCookie();
      if (disconnectedCharacterId != '') {
        if (kwsConnectionMonitor.isRunning) {
          console.log("KWS: connection monitor is running something, please wait!");
        } else {
          kwsConnectionMonitor.handleLoginProcess();
        }
      } else {
        //console.log("KWS: no need for connection manager, all good!");
      }
    }
}

var kwsConnectionMonitorVerifier = setInterval(verifyConnectionManager, 5000);

if (typeof GAME != 'undefined') {
  GAME.dcHandler = function(){
    if(GAME.is_disconnected > 0)
    {
      console.log("dcHandler",GAME.is_disconnected);
      GAME.is_disconnected--;
      if(GAME.is_disconnected <=0)
      {
        GAME.load_stop();
        kwsConnectionMonitor.handleDisconnect();
        if(GAME.pid>0){
          GAME.pid=0;
          GAME.komunikat(LNG.error2+'<br /><button class="option newBtn" data-option="logout">'+LNG.lab135+'</button>');
          $('#game_win').hide();
          option_bind();
        }
      }
    }
  }
}	
