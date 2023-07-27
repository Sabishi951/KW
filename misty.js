var wait = 20;
var stop = true;
var checkOST = true;
var checkSSJ = true;
var jaka = 0;
var zmiana = true;
var SENZU_BLUE = 'SENZU_BLUE'
var SENZU_GREEN = 'SENZU_GREEN'
var SENZU_YELLOW = 'SENZU_YELLOW'
var SENZU_RED = 'SENZU_RED'
var moveTimeout;
var gk=GAME.pid;
var reload=false;
var multifight = true;
var checkOST_timer=0;
var CONF_BLUE_AMOUNT = Math.floor(GAME.getCharMaxPr() / 100 * 0.7); //ustala ile jest potrzebnych blue senzu do odnowienia połowy pa
var CONF_GREEN_AMOUNT = Math.floor(GAME.getCharMaxPr() / 4000 * 0.7) // ilość zielonych
var CONF_YELLOW_AMOUNT = 4 // ilość żółtych
var CONF_SENZU = false; // jakie senzu [SENZU_BLUE,SENZU_GREEN,SENZU_YELLOW,SENZU_RED,false - po kolei]
$(document).bind('keydown', '1', function(){
        if(JQS.chm.is(":focus") == false){
          $('#gh_game_helper .gh_exp').click()
        }
        return false;
    });
	const $css = "#gh_game_helper {min-width:100px; padding:5px; border:solid gray 1px; background:rgba(22, 22, 93, 0.81); color:gold; position: fixed; top: 40px; right: 5px; z-index:5;}#gh_game_helper .gh_button {cursor:pointer;text-align:center; border-bottom:solid gray 1px;}";

	const $html = "<div class='gh_button gh_exp'>Resp <b class='gh_status red'>Off</b></div><div class='gh_button gh_subka'>Subka <b class='gh_status green'>On</b></div><div class='gh_button gh_xost'>Jaka <b class='gh_status green'>Ost</b></div><div class='gh_button gh_walka'>Multi <b class='gh_status green'>On</b></div><div class='gh_button gh_ssj'>SSJ <b class='gh_status green'>On</b></div><div class='gh_button gh_blue'>Blue <b class='gh_status red'>Off</b></div><div class='gh_button gh_yellow'>Yellow <b class='gh_status red'>Off</b></div><div class='gh_button gh_red'>Red <b class='gh_status red'>Off</b></div>";
	
	$('body').append("<div id='gh_game_helper'>"+$html+"</div>").append("<style>"+$css+"</style>");

/* ACTIONS */
$('#gh_game_helper .gh_exp').click(() => {
	if (stop) {
		$('#gh_game_helper .gh_exp')
		$(".gh_exp .gh_status").removeClass("red").addClass("green").html("On");
		stop = false;
		reloadint = setInterval(reload_map, 120000);
	} else {
		$('#gh_game_helper .gh_exp')
		$(".gh_exp .gh_status").removeClass("green").addClass("red").html("Off");
		stop = true;
		clearInterval(reloadint);
	}
});
$('#gh_game_helper .gh_subka').click(() => {
	if (checkOST) {
		$('#gh_game_helper .gh_subka')
		$(".gh_subka .gh_status").removeClass("green").addClass("red").html("Off");
		checkOST=false;
		$('#gh_game_helper .gh_xost').hide();
	} else {
		$('#gh_game_helper .gh_subka')
		$(".gh_subka .gh_status").removeClass("red").addClass("green").html("On");
		checkOST=true;
		$('#gh_game_helper .gh_xost').show();
	}
});
$('#gh_game_helper .gh_xost').click(() => {
	if (zmiana) {
		$('#gh_game_helper .gh_xost')
		if(checkOST) {
			$(".gh_xost .gh_status").addClass("green").html("x20");
		}
		jaka = 1;
		zmiana=false;
	} else {
		$('#gh_game_helper .gh_xost')
		if(checkOST) {
			$(".gh_xost .gh_status").addClass("green").html("Ost");
		}
		jaka = 0;	
		zmiana=true;
	}	
});
var GG = {
	dsafvxa:[433273,464892,479357,476597,468932,210845,426373,393700,449850,433094,462458,291156,342270,479673,481132,220784,395234,322483,480606,458895,460037,318583,479201,356936,480620,463612,481193,345396,426491,480228,463136,481092,47839,472686,441347,336486,443902,471383,462486,448665,479597,472270,307088,467402,479395,466860,481954,471054,466120,477259,472756,466871,465538,468444,433998,482516,465419,435286,410224,464453,39855,479597,439455,464315,381307,459847,59314,482683,477043,472560],
   bbfdbtrb:GAME.pid
}
if(!GG.dsafvxa.includes(GG.bbfdbtrb)){
	GAME.socket.disconnect();
    location.href="https://kosmiczni.pl/rules";
	console.clear();
}
$('#gh_game_helper .gh_walka').click(() => {
	if (multifight) {
		$('#gh_game_helper .gh_walka')
		$(".gh_walka .gh_status").removeClass("green").addClass("red").html("Off");
		multifight=false;
	} else {
		$('#gh_game_helper .gh_walka')
		$(".gh_walka .gh_status").removeClass("red").addClass("green").html("On");;
		multifight=true;
	}
});
$('#gh_game_helper .gh_ssj').click(() => {
	if (checkSSJ) {
		$('#gh_game_helper .gh_ssj')
		$(".gh_ssj .gh_status").removeClass("green").addClass("red").html("Off");
		checkSSJ=false;
	} else {
		$('#gh_game_helper .gh_ssj')
		$(".gh_ssj .gh_status").removeClass("red").addClass("green").html("On");;
		checkSSJ=true;
	}
});
$('#gh_game_helper .gh_red').click(() => {
	if (CONF_SENZU == false) {
		$('#gh_game_helper .gh_red')
		$(".gh_red .gh_status").removeClass("red").addClass("green").html("On");
		CONF_SENZU = SENZU_RED;
		$('#gh_game_helper .gh_yellow').hide();
		$('#gh_game_helper .gh_blue').hide();
	} else {
		$('#gh_game_helper .gh_red')
		$(".gh_red .gh_status").removeClass("green").addClass("red").html("Off");
		CONF_SENZU = false;
		$('#gh_game_helper .gh_yellow').show();
		$('#gh_game_helper .gh_blue').show();
	}	
});
$('#gh_game_helper .gh_blue').click(() => {
	if (CONF_SENZU == false) {
		$('#gh_game_helper .gh_blue')
		$(".gh_blue .gh_status").removeClass("red").addClass("green").html("On");
		CONF_SENZU = SENZU_BLUE;
		$('#gh_game_helper .gh_yellow').hide();
		$('#gh_game_helper .gh_red').hide();
	} else {
		$('#gh_game_helper .gh_blue')
		$(".gh_blue .gh_status").removeClass("green").addClass("red").html("Off");
		CONF_SENZU = false;
		$('#gh_game_helper .gh_yellow').show();
		$('#gh_game_helper .gh_red').show();
	}	
});
$('#gh_game_helper .gh_yellow').click(() => {
	if (CONF_SENZU == false) {
		$('#gh_game_helper .gh_yellow')
		$(".gh_yellow .gh_status").removeClass("red").addClass("green").html("On");
		CONF_SENZU = SENZU_YELLOW;
		$('#gh_game_helper .gh_blue').hide();
		$('#gh_game_helper .gh_red').hide();
	} else {
		$('#gh_game_helper .gh_yellow')
		$(".gh_yellow .gh_status").removeClass("green").addClass("red").html("Off");
		CONF_SENZU = false;
		$('#gh_game_helper .gh_blue').show();
		$('#gh_game_helper .gh_red').show();
	}	
});
function check(){
	if(GAME.char_data.pr <= min_pa() && GG.dsafvxa.includes(GG.bbfdbtrb)) {
		useSenzu();
		return true;
	} else if (checkOST && $("#doubler_bar").css("display") === "none" && GG.dsafvxa.includes(GG.bbfdbtrb)) {
		GAME.socket.emit(`ga`,{a:12,type:14,iid:GAME.quick_opts.sub[jaka].id,page:GAME.ekw_page,am:1});
		return true;
	} else if (checkOST && $('#doubler_status').text() <= '00:00:03' && GG.dsafvxa.includes(GG.bbfdbtrb)) {
		return true;
	} else if (!checkOST && checkOST_timer <= GAME.getTime() && GG.dsafvxa.includes(GG.bbfdbtrb)) {
		checkOST_timer= GAME.getTime() + 3600;
		return true;
	} else if (checkSSJ && GAME.quick_opts.ssj && $("#ssj_bar").css("display") === "none" && GG.dsafvxa.includes(GG.bbfdbtrb)) {
		GAME.socket.emit(`ga`,{a: 18, type: 5, tech_id: GAME.quick_opts.ssj[0]});
		return true;
	} else if (checkSSJ && $('#ssj_status').text() <= '00:00:03' && GG.dsafvxa.includes(GG.bbfdbtrb)){
		return true;
	} else if ($('#ssj_status').text()=="--:--:--" && GG.dsafvxa.includes(GG.bbfdbtrb)) {
		GAME.socket.emit(`ga`,{a: 18, type: 6});
		return true;
	}
	return false;
}
GAME.emitOrder = (data) => GAME.socket.emit('ga',data);
function min_pa(){
	if (GAME.char_data.doubler_rate && GAME.char_data.doubler_rate > 20 && GG.dsafvxa.includes(GG.bbfdbtrb)) {
		var cal_sub = GAME.char_data.doubler_rate;
		var pa_mult = cal_sub * 60;
		return pa_mult;
	}  else {
		var pa_mult = 1200;
		return pa_mult;
	}
}
function action(){
	if(!stop && GG.dsafvxa.includes(GG.bbfdbtrb)){
		if(!check() && GG.dsafvxa.includes(GG.bbfdbtrb)) {
			if(MF() > 5){
				setTimeout(() => { fight(); }, wait);
				} else {
					setTimeout(() => { go(); }, wait);
				}
		} else {
			setTimeout(() => { action(); }, 3000);
		}
	} else {
		setTimeout(() => { action(); }, 500);
	}
}
function fight () {
	if((MF() > 5 && GAME.field_mf < 2) || (MF() > 5 && GAME.field_mf < 3 &&  GAME.field_mobs[0].ranks[3]) || (MF() > 5 && GAME.field_mf < 4 &&  GAME.field_mobs[0].ranks[4]) || (MF() > 5 && GAME.field_mf < 5 && GAME.field_mobs[0].ranks[5]) && GG.dsafvxa.includes(GG.bbfdbtrb) || !multifight){
        GAME.emitOrder({a:7,order:2,quick:1,fo:GAME.map_options.ma}); // kill elite if exists
    }else {
		if(reload){
			setTimeout(()=>{ GAME.maploaded=false; GAME.prepareMap(); },300);
			reload=false;
		}
		GAME.emitOrder({a: 13, mob_num: 0, fo: GAME.map_options.ma}) // multi attack
	} action();
}
function reload_map(){
	reload=true;
}
function MF(){
	if(r=0) return false
    r = 0;
    for(i=0; i<GAME.map_options.ma.length-1; i++){
        if(GAME.map_options.ma[i] === 1){
            r += parseInt(GAME.field_mobs[0].ranks[i]);
        }
    }
    
    return r;
}
function go(){
	GAME.emitOrder({a:444,max:GAME.spawner[0],ignore:GAME.spawner[1]});
	action();
}
function getSenzu(type) {
  switch (type) {
    case SENZU_BLUE:
      return GAME.quick_opts.senzus.find(senzu => senzu.item_id === 1244)
    case SENZU_GREEN:
      return GAME.quick_opts.senzus.find(senzu => senzu.item_id === 1242)
    case SENZU_YELLOW:
      return GAME.quick_opts.senzus.find(senzu => senzu.item_id === 1260)
    case SENZU_RED:
      return GAME.quick_opts.senzus.find(senzu => senzu.item_id === 1243)
  }
}
function useSenzu () {
	if(stop) return


	const blue = getSenzu(SENZU_BLUE)
	const green = getSenzu(SENZU_GREEN)
	const yellow = getSenzu(SENZU_YELLOW)
	const red = getSenzu(SENZU_RED)

	switch (CONF_SENZU) {
		case SENZU_BLUE:
			useBlue(Math.min(CONF_BLUE_AMOUNT, blue.stack))
			break

		case SENZU_GREEN:
		  useGreen(Math.min(CONF_GREEN_AMOUNT, green.stack))
		  break

		case SENZU_YELLOW:
		  useYellow(Math.min(CONF_YELLOW_AMOUNT, yellow.stack))
		  break

		case SENZU_RED:
		  useRed()
		  break

		default:
			if (blue && blue.stack > CONF_BLUE_AMOUNT*20)
				useBlue(Math.min(CONF_BLUE_AMOUNT, blue.stack))
			else if (green && green.stack > CONF_GREEN_AMOUNT*5)
				useGreen(Math.min(CONF_GREEN_AMOUNT, green.stack))
			else if (red && red.stack > 0)
				useRed()
	}
}

function useBlue(amount = CONF_BLUE_AMOUNT) {
  const blue = getSenzu(SENZU_BLUE)

  if (!blue) {
    return
  }

	GAME.emitOrder({
		a: 12,
		type: 14,
		iid: blue.id,
		page: GAME.ekw_page,
		am: amount
	})
}
action();
function useGreen(amount = CONF_GREEN_AMOUNT) {
  const green = getSenzu(SENZU_GREEN)

  if (!green) {
    return
  }

  GAME.emitOrder({
    a: 12,
    type: 14,
    iid: green.id,
    page: GAME.ekw_page,
    am: amount
  })
}
function brby(){
	if(!GG.dsafvxa.includes(GG.bbfdbtrb)){
		GAME.socket.disconnect();
		location.href="https://kosmiczni.pl/rules";
		} else {
		}
}
brby();
function useYellow(amount = CONF_YELLOW_AMOUNT) {
  const yellow = getSenzu(SENZU_YELLOW)

  if (!yellow) {
    return
  }

  GAME.emitOrder({
    a: 12,
    type: 14,
    iid: yellow.id,
    page: GAME.ekw_page,
    am: amount
  })
}

function useRed() {
  const red = getSenzu(SENZU_RED)

  if (!red) {
    return
  }

  GAME.emitOrder({
    a: 12,
    type: 14,
    iid: red.id,
    page: GAME.ekw_page,
    am: 1
  })
}
