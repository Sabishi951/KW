if (typeof GAME === 'undefined') {} else {
    function pvp_option_bind(){
        $('.poption').off('click').on('click',function(){
            var th=$(this);
            if(th.is(':disabled')) return false;
            th.tooltip('hide');
            var option=th.data('option');
            switch(option){
                case 'show_player':
                    GAME.emitOrder({a:34,type:0,char_id:th.data('char_id')});
                break;
                case 'show_clan':
                    var klan_id=parseInt(th.data('klan_id'));
                    GAME.emitOrder({a:40,klan_id:klan_id});
                break;
                case 'pvp_attack':
                    GAME.emitOrder({a:24,char_id:th.data('char_id'),quick:th.data('quick')});
                break;
                case 'gpvp_attack':
                    GAME.emitOrder({a:24,type:1,char_id:th.data('char_id'),quick:th.data('quick')});
                break;
                case 'load_more_players':
                    GAME.emitOrder({a:3,type:1,start:th.data('start_from'),vo:GAME.map_options.vo});
                    $('.more_players').remove();
                break;
            }
        });
    }
    
    let Pog = setInterval(() => {
            clearInterval(Pog);

            function createPanel() {
                const css = ` #main_Panel { background: rgba(0,0,0,0.9); position: fixed; top: 250px; left: 80%; z-index: 9999; width: 150px; padding: 1px; border-radius: 5px; border-style: solid; border-width: 7px 8px 7px 7px; display:block; user-select: none; color: #333333; } #main_Panel .sekcja { position: absolute; top: -27px; left: -7px; background: rgba(0,0,0,0.9); filter: hue-rotate(196deg); background-size: 100% 100%; width: 150px; cursor: all-scroll; } #main_Panel .gh_button {cursor:pointer;text-align:center; border-bottom:solid gray 1px; color: white;} `;
                const csspvp = ` #pvp_Panel { background: rgba(0,0,0,0.9); position: fixed; top: 450px; left: 80%; z-index: 9999; width: 150px; padding: 1px; border-radius: 5px; border-style: solid; border-width: 7px 8px 7px 7px; display:block; user-select: none; color: #333333; } #pvp_Panel .sekcja { position: absolute; top: -27px; left: -7px; background: rgba(0,0,0,0.9); filter: hue-rotate(196deg); background-size: 100% 100%; width: 150px; cursor: all-scroll; } #pvp_Panel .pvp_button {cursor:pointer;text-align:center; border-bottom:solid gray 1px; color: white;} #pvp_Panel .gamee_input{text-align:center; border-bottom:solid gray 1px; color: white;} #pvp_Panel .gamee_input input::placeholder {color: #4b4b4b;} #pvp_Panel .gameee_input{text-align:center; border-bottom:solid gray 1px; color: white;} #pvp_Panel .gameee_input input::placeholder {color: #4b4b4b;}`;
                const cssresp = ` #resp_Panel { background: rgba(0,0,0,0.9); position: fixed; top: 450px; left: 80%; z-index: 9999; width: 150px; padding: 1px; border-radius: 5px; border-style: solid; border-width: 7px 8px 7px 7px; display:block; user-select: none; color: #333333; } #resp_Panel .sekcja { position: absolute; top: -27px; left: -7px; background: rgba(0,0,0,0.9); filter: hue-rotate(196deg); background-size: 100% 100%; width: 150px; cursor: all-scroll; } #resp_Panel .resp_button {cursor:pointer;text-align:center; border-bottom:solid gray 1px; color: white;} `;
                const csscode = ` #code_Panel { background: rgba(0,0,0,0.9); position: fixed; top: 450px; left: 80%; z-index: 9999; width: 180px; padding: 1px; border-radius: 5px; border-style: solid; border-width: 7px 8px 7px 7px; display:block; user-select: none; color: #333333; } #code_Panel .sekcja { position: absolute; top: -27px; left: -7px; background: rgba(0,0,0,0.9); filter: hue-rotate(196deg); background-size: 100% 100%; width: 180px; cursor: all-scroll; } #code_Panel .code_button {cursor:pointer;text-align:center; border-bottom:solid gray 1px; color: white;} `;
                const cssres = ` #res_Panel { background: rgba(0,0,0,0.9); position: fixed; top: 450px; left: 65%; z-index: 9999; width: 150px; padding: 1px; border-radius: 5px; border-style: solid; border-width: 7px 8px 7px 7px; display:block; user-select: none; color: #333333; } #res_Panel .sekcja { position: absolute; top: -27px; left: -7px; background: rgba(0,0,0,0.9); filter: hue-rotate(196deg); background-size: 100% 100%; width: 150px; cursor: all-scroll; } #res_Panel .res_button {cursor:pointer;text-align:center; border-bottom:solid gray 1px; color: white;} #res_Panel ul {margin-left:-30px; color:white; margin:7px 0px 5px 0px; padding: 0px; text-align: center;} `;
                const csslpvm = ` #lpvm_Panel { background: rgba(0,0,0,0.9); position: fixed; top: 650px; left: 80%; z-index: 9999; width: 150px; padding: 1px; border-radius: 5px; border-style: solid; border-width: 7px 8px 7px 7px; display:block; user-select: none; color: #333333; } #lpvm_Panel .sekcja { position: absolute; top: -27px; left: -7px; background: rgba(0,0,0,0.9); filter: hue-rotate(196deg); background-size: 100% 100%; width: 150px; cursor: all-scroll; } #lpvm_Panel .lpvm_button {cursor:pointer;text-align:center; border-bottom:solid gray 1px; color: white;} #lpvm_Panel .pvm_killed {cursor:pointer;text-align:center; border-LGtom:solid gray 1px;text-align:center; color:white;} #lpvm_Panel .gamee_input{text-align:center; border-bottom:solid gray 1px; color: white;} `;
                const html = ` <div id="main_Panel"> <div class="sekcja panel_dragg">ALL FOR ONE</div> <div class='gh_button gh_resp'>PVM<b class='gh_status red'>Off</b></div> <div class='gh_button gh_pvp'>PVP<b class='gh_status red'>Off</b></div> <div class='gh_button gh_lpvm'>Listy<b class='gh_status red'>Off</b></div> <div class='gh_button gh_res'>Zbierajka<b class='gh_status red'>Off</b></div> <div class='gh_button gh_code'>Kody<b class='gh_status red'>Off</b></div> </div> `;
                const PVP_panel = ` <div id="pvp_Panel"> <div class="sekcja pvp_dragg">PVP</div> <div class='pvp_button pvp_pvp'>PVP<b class='pvp_status red'>Off</b></div> <div class='pvp_button pvp_Code'>Kody<b class='pvp_status green'>On</b></div> <div class='pvp_button pvp_rb_avoid'>Unikaj borny<b class='pvp_status red'>Off</b></div> <div class='pvp_button pvp_WI'>Wojny Imp<b class='pvp_status green'>On</b></div> <div class='pvp_button pvp_WK'>Wojny Klanowe<b class='pvp_status green'>On</b></div> <div class='pvp_button pvp_buff_imp'>Bufy IMP<b class='pvp_status red'>Off</b></div> <div class='pvp_button pvp_buff_clan'>Bufy KLAN<b class='pvp_status red'>Off</b></div> <div class='gamee_input'><input style='width:120px; margin-left:-2px; background:grey;text-align:center;font-size:16;' type='text' placeholder="Lista wojen" name='pvp_capt' value='' /></div> <div class='gameee_input'><input style='width:120px; margin-left:-2px; background:grey;text-align:center;font-size:16;' type='text' placeholder="Szybkość 10-100" name='speed_capt' value='50' /></div> </div> `;
                const RESP_panel = ` <div id="resp_Panel"> <div class="sekcja resp_dragg">SPAWN MOBKóW</div> <div class="resp_button resp_resp">RESP<b class="resp_status red">Off</b></div> <div class="resp_button resp_code">Kody<b class="resp_status green">On</b></div> <div class="resp_button resp_sub">Subka<b class="resp_status green">On</b></div> <div class="resp_button resp_ost">Jaka<b class="resp_status green">Ost</b></div> <div class="resp_button resp_multi">Multiwalka<b class="resp_status green">On</b></div> <div class="resp_button resp_ssj">SSJ<b class="resp_status green">On</b></div> <div class="resp_button resp_buff_imp">Bufki IMP<b class="resp_status red">Off</b></div> <div class="resp_button resp_buff_clan">Bufki KLAN<b class="resp_status red">Off</b></div> <div class="resp_button resp_blue">BLUE<b class="resp_status red">Off</b></div> <div class="resp_button resp_green">GREEN<b class="resp_status red">Off</b></div> <div class="resp_button resp_purple">PURPLE<b class="resp_status red">Off</b></div> <div class="resp_button resp_yellow">YELLOW<b class="resp_status red">Off</b></div> <div class="resp_button resp_red">RED<b class="resp_status red">Off</b></div> <div class="resp_button resp_magic">Wyciąg<b class="resp_status red">Off</b></div> <div class="resp_button resp_bless">BŁOGO<b class="resp_status red">Off</b></div> <div class="resp_button resp_bh1">SMOK<b class="resp_status red">Off</b></div> <div class="resp_button resp_bh2">5% EXP<b class="resp_status red">Off</b></div> <div class="resp_button resp_bh3">5% MOC<b class="resp_status red">Off</b></div> <div class="resp_button resp_bh4">150K MAX<b class="resp_status red">Off</b></div> <div class="resp_button resp_bh5">5% MOC<b class="resp_status red">Off</b></div> <div class="resp_button resp_bh6">5% PSK<b class="resp_status red">Off</b></div> <div class="resp_button resp_bh7">200% EXP<b class="resp_status red">Off</b></div> <div class="resp_button resp_bh8">500 LVL<b class="resp_status red">Off</b></div> <div class="resp_button resp_bh9">500% EXP<b class="resp_status red">Off</b></div> <div class="resp_button resp_bh10">25% MOC<b class="resp_status red">Off</b></div> <div class="resp_button resp_on">Włącz All<b class="resp_status green">On</b></div> <div class="resp_button resp_off">Wyłącz All<b class="resp_status red">Off</b></div> <div class="resp_button resp_bh11">100% Limit<b class="resp_status red">Off</b></div> <div class="resp_button resp_bh14">100% Limit<b class="resp_status red">Off</b></div> <div class="resp_button resp_bh12">200% Przyrost<b class="resp_status red">Off</b></div> <div class="resp_button resp_bh13">300% Przyrost<b class="resp_status red">Off</b></div> <div class="resp_button resp_bh15">5% kod<b class="resp_status red">Off</b></div> <div class="resp_button resp_bh16">5 Min cd pvp <b class="resp_status red">Off</b></div> <div class="resp_button resp_bh17">15% szybsze zbieranie<b class="resp_status red">Off</b></div> <div class="resp_button resp_bh18">15% więcej szansy na zebranie<b class="resp_status red">Off</b></div> </div> `;
                const CODE_panel = ` <div id="code_Panel"> <div class="sekcja code_dragg">Kody</div> <div class="code_button code_code">KODY<b class="code_status red">Off</b></div> <div class="code_button code_acc">Konto<b class="code_status red">Off</b></div> <div class="code_button code_zast">Zastępstwa<b class="code_status red">Off</b></div> <div class="code_button code_bh1">Błogo 250% tren<b class="code_status red">Off</b></div> <div class="code_button code_bh2">Błogo 5% kod<b class="code_status red">Off</b></div> <label class='select_input'><select id='bot_what_to_train'><option value='1'>Siła</option><option value='2'>Szybkość</option><option value='3'>Wytrzymałość</option><option value='4'>Siła Woli</option><option value='5'>Energia Ki</option><option value='6'>Wtajemniczenie</option></select></label> <label class='select_input'><select id='bot_what_to_traintime'><option value='1'>1 godz.</option><option value='2'>2 godz.</option><option value='3'>3 godz.</option><option value='4'>4 godz.</option><option value='5'>5 godz.</option><option value='6'>6 godz.</option><option value='7'>7 godz.</option><option value='8'>8 godz.</option><option value='9'>9 godz.</option><option value='10'>10 godz.</option><option value='11'>11 godz.</option><option value='12'>12 godz.</option></label> </div> `;
                const RES_panel = ` <div id="res_Panel"> <div class="sekcja res_dragg">SUROWCE</div> <div class="res_button res_res">ZBIERAJ<b class="res_status red">Off</b></div> <div class="bt_cool" style="text-align:center; color:white;"></div> <ul></ul> </div> `;
                const LPVM_panel = ` <div id="lpvm_Panel"> <div class="sekcja lpvm_dragg">LISTY GOŃCZE</div> <div class='pvm_killed'>Wykonane listy: <b>0</b></div> <div class="lpvm_button lpvm_lpvm">START<b class="lpvm_status red">Off</b></div> <div class="lpvm_button lpvm_g">G-Born<b class="lpvm_status red">Off</b></div> <div class="lpvm_button lpvm_u">U-Born<b class="lpvm_status red">Off</b></div> <div class="lpvm_button lpvm_s">S-Born<b class="lpvm_status red">Off</b></div> <div class="lpvm_button lpvm_h">H-Born<b class="lpvm_status red">Off</b></div> <div class="lpvm_button lpvm_limit">Limit<b class="lpvm_status red">Off</b></div> <div class='gamee_input'><input style='width:120px; margin-left:-2px; background:grey;text-align:center;font-size:16;' type='text' placeholder="Enter text" name='lpvm_capt' value='60' /></div> </div> `;
                $("body").append(`<style>${css}</style>${html}`);
                $("body").append(`<style>${csspvp}</style>${PVP_panel}`);
                $("body").append(`<style>${cssresp}</style>${RESP_panel}`);
                $("body").append(`<style>${csscode}</style>${CODE_panel}`);
                $("body").append(`<style>${cssres}</style>${RES_panel}`);
                $("body").append(`<style>${csslpvm}</style>${LPVM_panel}`);
                $("#pvp_Panel").hide();
                $("#resp_Panel").hide();
                $("#code_Panel").hide();
                $("#res_Panel").hide();
                $("#lpvm_Panel").hide();
                $("#main_Panel").draggable({
                    handle: ".panel_dragg"
                });
                $("#pvp_Panel").draggable({
                    handle: ".pvp_dragg"
                });
                $("#resp_Panel").draggable({
                    handle: ".resp_dragg"
                });
                $("#res_Panel").draggable({
                    handle: ".res_dragg"
                });
                $("#lpvm_Panel").draggable({
                    handle: ".lpvm_dragg"
                });
                $("#code_Panel").draggable({
                    handle: ".code_dragg"
                });
                $('#main_Panel .gh_pvp').click(() => {
                    if ($(".gh_pvp .gh_status").hasClass("red")) {
                        $(".gh_pvp .gh_status").removeClass("red").addClass("green").html("On");
                        $("#pvp_Panel").show();
                    } else {
                        $(".gh_pvp .gh_status").removeClass("green").addClass("red").html("Off");
                        $("#pvp_Panel").hide();
                        $(".pvp_pvp .pvp_status").removeClass("green").addClass("red").html("Off");
                        PVP.stop = true;
                    }
                });
                $('#main_Panel .gh_resp').click(() => {
                    if ($(".gh_resp .gh_status").hasClass("red")) {
                        $(".gh_resp .gh_status").removeClass("red").addClass("green").html("On");
                        $("#resp_Panel").show();
                    } else {
                        $(".gh_resp .gh_status").removeClass("green").addClass("red").html("Off");
                        $("#resp_Panel").hide();
                        RESP.stop = true;
                        $(".resp_resp .resp_status").removeClass("green").addClass("red").html("Off");
                    }
                });
                $('#main_Panel .gh_res').click(() => {
                    if ($(".gh_res .gh_status").hasClass("red")) {
                        $(".gh_res .gh_status").removeClass("red").addClass("green").html("On");
                        $("#res_Panel").show();
                    } else {
                        $(".gh_res .gh_status").removeClass("green").addClass("red").html("Off");
                        $("#res_Panel").hide();
                        RES.stop = true;
                        $(".res_res .res_status").removeClass("green").addClass("red").html("Off");
                    }
                });
                $('#main_Panel .gh_lpvm').click(() => {
                    if ($(".gh_lpvm .gh_status").hasClass("red")) {
                        $(".gh_lpvm .gh_status").removeClass("red").addClass("green").html("On");
                        $("#lpvm_Panel").show();
                    } else {
                        $(".gh_lpvm .gh_status").removeClass("green").addClass("red").html("Off");
                        $("#lpvm_Panel").hide();
                        LPVM.Stop = true;
                        $(".lpvm_lpvm .lpvm_status").removeClass("green").addClass("red").html("Off");
                    }
                });
                $('#main_Panel .gh_code').click(() => {
                    if ($(".gh_code .gh_status").hasClass("red")) {
                        $(".gh_code .gh_status").removeClass("red").addClass("green").html("On");
                        $("#code_Panel").show();
                    } else {
                        $(".gh_code .gh_status").removeClass("green").addClass("red").html("Off");
                        $("#code_Panel").hide();
                        CODE.stop = true;
                        $(".code_code .code_status").removeClass("green").addClass("red").html("Off");
                    }
                });
                $('#pvp_Panel .pvp_pvp').click(() => {
                    if (PVP.stop) {
                        $(".pvp_pvp .pvp_status").removeClass("red").addClass("green").html("On");
                        PVP.stop = false;
                        PVP.start();
                        RESP.stop = true;
                        RES.stop = true;
                        LPVM.Stop = true;
                        CODE.stop = true;
                        $(".code_code .code_status").removeClass("green").addClass("red").html("Off");
                        $(".lpvm_lpvm .lpvm_status").removeClass("green").addClass("red").html("Off");
                        $(".res_res .res_status").removeClass("green").addClass("red").html("Off");
                        $(".resp_resp .resp_status").removeClass("green").addClass("red").html("Off");
                    } else {
                        $(".pvp_pvp .pvp_status").removeClass("green").addClass("red").html("Off");
                        PVP.stop = true;
                    }
                });
                $('#pvp_Panel .pvp_rb_avoid').click(() => {
                    if (PVP.higherRebornAvoid) {
                        $(".pvp_rb_avoid .pvp_status").removeClass("green").addClass("red").html("Off");
                        PVP.higherRebornAvoid = false;
                    } else {
                        $(".pvp_rb_avoid .pvp_status").removeClass("red").addClass("green").html("On");
                        PVP.higherRebornAvoid = true;
                    }
                });
                $('#pvp_Panel .pvp_Code').click(() => {
                    if (PVP.code) {
                        $(".pvp_Code .pvp_status").removeClass("green").addClass("red").html("Off");
                        PVP.code = false;
                    } else {
                        $(".pvp_Code .pvp_status").removeClass("red").addClass("green").html("On");
                        PVP.code = true;
                    }
                });
                $('#pvp_Panel .pvp_WI').click(() => {
                    if (PVP.wi) {
                        $(".pvp_WI .pvp_status").removeClass("green").addClass("red").html("Off");
                        PVP.wi = false;
                    } else {
                        $(".pvp_WI .pvp_status").removeClass("red").addClass("green").html("On");
                        PVP.wi = true;
                    }
                });
                $('#pvp_Panel .pvp_buff_imp').click(() => {
                    if (PVP.buff_imp) {
                        $(".pvp_buff_imp .pvp_status").removeClass("green").addClass("red").html("Off");
                        PVP.buff_imp = false;
                    } else {
                        $(".pvp_buff_imp .pvp_status").removeClass("red").addClass("green").html("On");
                        PVP.buff_imp = true;
                    }
                });
                $('#pvp_Panel .pvp_buff_clan').click(() => {
                    if (PVP.buff_clan) {
                        $(".pvp_buff_clan .pvp_status").removeClass("green").addClass("red").html("Off");
                        PVP.buff_clan = false;
                    } else {
                        $(".pvp_buff_clan .pvp_status").removeClass("red").addClass("green").html("On");
                        PVP.buff_clan = true;
                    }
                });
                $('#pvp_Panel .pvp_WK').click(() => {
                    if (PVP.wk) {
                        $(".pvp_WK .pvp_status").removeClass("green").addClass("red").html("Off");
                        PVP.wk = false;
                    } else {
                        $(".pvp_WK .pvp_status").removeClass("red").addClass("green").html("On");
                        PVP.wk = true;
                    }
                });
                $("#pvp_Panel input[name=pvp_capt]").val(PVP.clan_list);
                $("#pvp_Panel input[name=speed_capt]").val(PVP.speed);
                $(document).bind('keydown', '1', function() {
                    if (JQS.chm.is(":focus") == false) {
                        if ($(".gh_resp .gh_status").hasClass("green")) {
                            $('#resp_Panel .resp_resp').click();
                        }
                    }
                    return false;
                });
                $('#resp_Panel .resp_bh1').hide();
                $('#resp_Panel .resp_bh2').hide();
                $('#resp_Panel .resp_bh3').hide();
                $('#resp_Panel .resp_bh4').hide();
                $('#resp_Panel .resp_bh5').hide();
                $('#resp_Panel .resp_bh6').hide();
                $('#resp_Panel .resp_bh7').hide();
                $('#resp_Panel .resp_bh8').hide();
                $('#resp_Panel .resp_bh9').hide();
                $('#resp_Panel .resp_bh10').hide();
                $('#resp_Panel .resp_on').hide();
                $('#resp_Panel .resp_off').hide();
                $('#resp_Panel .resp_resp').click(() => {
                    if (RESP.stop && GAME.field_mobs) {
                        $(".resp_resp .resp_status").removeClass("red").addClass("green").html("On");
                        RESP.stop = false;
                        RESP.action();
                        RESP.reloadint = setInterval(RESP.reload_map, 60000);
                        PVP.stop = true;
                        LPVM.Stop = true;
                        CODE.stop = true;
                        RESP.loc = GAME.char_data.loc;
                        $(".code_code .code_status").removeClass("green").addClass("red").html("Off");
                        $(".lpvm_lpvm .lpvm_status").removeClass("green").addClass("red").html("Off");
                        $(".pvp_pvp .pvp_status").removeClass("green").addClass("red").html("Off");
                    } else {
                        $(".resp_resp .resp_status").removeClass("green").addClass("red").html("Off");
                        RESP.stop = true;
                        clearInterval(RESP.reloadint);
                    }
                });
                $('#resp_Panel .resp_bless').click(() => {
                    if (RESP.bless) {
                        $(".resp_bless .resp_status").removeClass("green").addClass("red").html("Off");
                        RESP.bless = false;
                        $('#resp_Panel .resp_bh1').hide();
                        $('#resp_Panel .resp_bh2').hide();
                        $('#resp_Panel .resp_bh3').hide();
                        $('#resp_Panel .resp_bh4').hide();
                        $('#resp_Panel .resp_bh5').hide();
                        $('#resp_Panel .resp_bh6').hide();
                        $('#resp_Panel .resp_bh7').hide();
                        $('#resp_Panel .resp_bh8').hide();
                        $('#resp_Panel .resp_bh9').hide();
                        $('#resp_Panel .resp_bh10').hide();
                        $('#resp_Panel .resp_on').hide();
                        $('#resp_Panel .resp_off').hide();
                    } else {
                        $(".resp_bless .resp_status").removeClass("red").addClass("green").html("On");
                        RESP.bless = true;
                        $('#resp_Panel .resp_bh1').show();
                        $('#resp_Panel .resp_bh2').show();
                        $('#resp_Panel .resp_bh3').show();
                        $('#resp_Panel .resp_bh4').show();
                        $('#resp_Panel .resp_bh5').show();
                        $('#resp_Panel .resp_bh6').show();
                        $('#resp_Panel .resp_bh7').show();
                        $('#resp_Panel .resp_bh8').show();
                        $('#resp_Panel .resp_bh9').show();
                        $('#resp_Panel .resp_bh10').show();
                        $('#resp_Panel .resp_on').show();
                        $('#resp_Panel .resp_off').show();
                    }
                });
                $('#resp_Panel .resp_code').click(() => {
                    if (RESP.code) {
                        $(".resp_code .resp_status").removeClass("green").addClass("red").html("Off");
                        RESP.code = false;
                    } else {
                        $(".resp_code .resp_status").removeClass("red").addClass("green").html("On");
                        RESP.code = true;
                    }
                });
                $('#resp_Panel .resp_sub').click(() => {
                    if (RESP.checkOST) {
                        $(".resp_sub .resp_status").removeClass("green").addClass("red").html("Off");
                        RESP.checkOST = false;
                        $('#resp_Panel .resp_ost').hide();
                    } else {
                        $(".resp_sub .resp_status").removeClass("red").addClass("green").html("On");
                        RESP.checkOST = true;
                        $('#resp_Panel .resp_ost').show();
                    }
                });
                $('#resp_Panel .resp_ost').click(() => {
                    if (RESP.zmiana) {
                        $(".resp_ost .resp_status").html("Ost");
                        RESP.zmiana = false;
                        RESP.jaka = 0;
                    } else {
                        $(".resp_ost .resp_status").html("x20");
                        RESP.zmiana = true;
                        RESP.jaka = 1;
                    }
                });
                $('#resp_Panel .resp_multi').click(() => {
                    if (RESP.multifight) {
                        $(".resp_multi .resp_status").removeClass("green").addClass("red").html("Off");
                        RESP.multifight = false;
                    } else {
                        $(".resp_multi .resp_status").removeClass("red").addClass("green").html("On");
                        RESP.multifight = true;
                    }
                });
                $('#resp_Panel .resp_ssj').click(() => {
                    if (RESP.checkSSJ) {
                        $(".resp_ssj .resp_status").removeClass("green").addClass("red").html("Off");
                        RESP.checkSSJ = false;
                    } else {
                        $(".resp_ssj .resp_status").removeClass("red").addClass("green").html("On");
                        RESP.checkSSJ = true;
                    }
                });
                $('#resp_Panel .resp_red').click(() => {
                    if (RESP.CONF_SENZU == false) {
                        $(".resp_red .resp_status").removeClass("red").addClass("green").html("On");
                        RESP.CONF_SENZU = RESP.SENZU_RED;
                        $('#resp_Panel .resp_blue').hide();
                        $('#resp_Panel .resp_green').hide();
                        $('#resp_Panel .resp_purple').hide();
                        $('#resp_Panel .resp_yellow').hide();
                        $('#resp_Panel .resp_magic').hide();
                    } else {
                        $(".resp_red .resp_status").removeClass("green").addClass("red").html("Off");
                        RESP.CONF_SENZU = false;
                        $('#resp_Panel .resp_blue').show();
                        $('#resp_Panel .resp_green').show();
                        $('#resp_Panel .resp_purple').show();
                        $('#resp_Panel .resp_yellow').show();
                        $('#resp_Panel .resp_magic').show();
                    }
                });
                $('#resp_Panel .resp_blue').click(() => {
                    if (RESP.CONF_SENZU == false) {
                        $(".resp_blue .resp_status").removeClass("red").addClass("green").html("On");
                        RESP.CONF_SENZU = RESP.SENZU_BLUE;
                        $('#resp_Panel .resp_red').hide();
                        $('#resp_Panel .resp_green').hide();
                        $('#resp_Panel .resp_purple').hide();
                        $('#resp_Panel .resp_yellow').hide();
                        $('#resp_Panel .resp_magic').hide();
                    } else {
                        $(".resp_blue .resp_status").removeClass("green").addClass("red").html("Off");
                        RESP.CONF_SENZU = false;
                        $('#resp_Panel .resp_red').show();
                        $('#resp_Panel .resp_green').show();
                        $('#resp_Panel .resp_purple').show();
                        $('#resp_Panel .resp_yellow').show();
                        $('#resp_Panel .resp_magic').show();
                    }
                });
                $('#resp_Panel .resp_green').click(() => {
                    if (RESP.CONF_SENZU == false) {
                        $(".resp_green .resp_status").removeClass("red").addClass("green").html("On");
                        RESP.CONF_SENZU = RESP.SENZU_GREEN;
                        $('#resp_Panel .resp_red').hide();
                        $('#resp_Panel .resp_blue').hide();
                        $('#resp_Panel .resp_purple').hide();
                        $('#resp_Panel .resp_yellow').hide();
                        $('#resp_Panel .resp_magic').hide();
                    } else {
                        $(".resp_green .resp_status").removeClass("green").addClass("red").html("Off");
                        RESP.CONF_SENZU = false;
                        $('#resp_Panel .resp_red').show();
                        $('#resp_Panel .resp_blue').show();
                        $('#resp_Panel .resp_purple').show();
                        $('#resp_Panel .resp_yellow').show();
                        $('#resp_Panel .resp_magic').show();
                    }
                });
                $('#resp_Panel .resp_purple').click(() => {
                    if (RESP.CONF_SENZU == false) {
                        $(".resp_purple .resp_status").removeClass("red").addClass("green").html("On");
                        RESP.CONF_SENZU = RESP.SENZU_PURPLE;
                        $('#resp_Panel .resp_red').hide();
                        $('#resp_Panel .resp_blue').hide();
                        $('#resp_Panel .resp_green').hide();
                        $('#resp_Panel .resp_yellow').hide();
                        $('#resp_Panel .resp_magic').hide();
                    } else {
                        $(".resp_purple .resp_status").removeClass("green").addClass("red").html("Off");
                        RESP.CONF_SENZU = false;
                        $('#resp_Panel .resp_red').show();
                        $('#resp_Panel .resp_blue').show();
                        $('#resp_Panel .resp_green').show();
                        $('#resp_Panel .resp_yellow').show();
                        $('#resp_Panel .resp_magic').show();
                    }
                });
                $('#resp_Panel .resp_yellow').click(() => {
                    if (RESP.CONF_SENZU == false) {
                        $(".resp_yellow .resp_status").removeClass("red").addClass("green").html("On");
                        RESP.CONF_SENZU = RESP.SENZU_YELLOW;
                        $('#resp_Panel .resp_red').hide();
                        $('#resp_Panel .resp_blue').hide();
                        $('#resp_Panel .resp_green').hide();
                        $('#resp_Panel .resp_purple').hide();
                        $('#resp_Panel .resp_magic').hide();
                    } else {
                        $(".resp_yellow .resp_status").removeClass("green").addClass("red").html("Off");
                        RESP.CONF_SENZU = false;
                        $('#resp_Panel .resp_red').show();
                        $('#resp_Panel .resp_blue').show();
                        $('#resp_Panel .resp_green').show();
                        $('#resp_Panel .resp_purple').show();
                        $('#resp_Panel .resp_magic').show();
                    }
                });
                $('#resp_Panel .resp_magic').click(() => {
                    if (RESP.CONF_SENZU == false) {
                        $(".resp_magic .resp_status").removeClass("red").addClass("green").html("On");
                        RESP.CONF_SENZU = RESP.SENZU_MAGIC;
                        $('#resp_Panel .resp_red').hide();
                        $('#resp_Panel .resp_blue').hide();
                        $('#resp_Panel .resp_green').hide();
                        $('#resp_Panel .resp_purple').hide();
                        $('#resp_Panel .resp_yellow').hide();
                    } else {
                        $(".resp_magic .resp_status").removeClass("green").addClass("red").html("Off");
                        RESP.CONF_SENZU = false;
                        $('#resp_Panel .resp_red').show();
                        $('#resp_Panel .resp_blue').show();
                        $('#resp_Panel .resp_green').show();
                        $('#resp_Panel .resp_purple').show();
                        $('#resp_Panel .resp_yellow').show();
                    }
                });
                $('#resp_Panel .resp_on').click(() => {
                    $(".resp_bh1 .resp_status").removeClass("red").addClass("green").html("On");
                    $(".resp_bh2 .resp_status").removeClass("red").addClass("green").html("On");
                    $(".resp_bh3 .resp_status").removeClass("red").addClass("green").html("On");
                    $(".resp_bh4 .resp_status").removeClass("red").addClass("green").html("On");
                    $(".resp_bh5 .resp_status").removeClass("red").addClass("green").html("On");
                    $(".resp_bh6 .resp_status").removeClass("red").addClass("green").html("On");
                    $(".resp_bh7 .resp_status").removeClass("red").addClass("green").html("On");
                    $(".resp_bh8 .resp_status").removeClass("red").addClass("green").html("On");
                    $(".resp_bh9 .resp_status").removeClass("red").addClass("green").html("On");
                    $(".resp_bh10 .resp_status").removeClass("red").addClass("green").html("On");
                    RESP.b1 = true;
                    RESP.b2 = true;
                    RESP.b3 = true;
                    RESP.b4 = true;
                    RESP.b5 = true;
                    RESP.b6 = true;
                    RESP.b7 = true;
                    RESP.b8 = true;
                    RESP.b9 = true;
                    RESP.b10 = true;
                });
                $('#resp_Panel .resp_off').click(() => {
                    $(".resp_bh1 .resp_status").removeClass("green").addClass("red").html("Off");
                    $(".resp_bh2 .resp_status").removeClass("green").addClass("red").html("Off");
                    $(".resp_bh3 .resp_status").removeClass("green").addClass("red").html("Off");
                    $(".resp_bh4 .resp_status").removeClass("green").addClass("red").html("Off");
                    $(".resp_bh5 .resp_status").removeClass("green").addClass("red").html("Off");
                    $(".resp_bh6 .resp_status").removeClass("green").addClass("red").html("Off");
                    $(".resp_bh7 .resp_status").removeClass("green").addClass("red").html("Off");
                    $(".resp_bh8 .resp_status").removeClass("green").addClass("red").html("Off");
                    $(".resp_bh9 .resp_status").removeClass("green").addClass("red").html("Off");
                    $(".resp_bh10 .resp_status").removeClass("green").addClass("red").html("Off");
                    RESP.b1 = false;
                    RESP.b2 = false;
                    RESP.b3 = false;
                    RESP.b4 = false;
                    RESP.b5 = false;
                    RESP.b6 = false;
                    RESP.b7 = false;
                    RESP.b8 = false;
                    RESP.b9 = false;
                    RESP.b10 = false;
                });
                $('#resp_Panel .resp_buff_imp').click(() => {
                    if (RESP.buff_imp) {
                        $(".resp_buff_imp .resp_status").removeClass("green").addClass("red").html("Off");
                        RESP.buff_imp = false;
                    } else {
                        $(".resp_buff_imp .resp_status").removeClass("red").addClass("green").html("On");
                        RESP.buff_imp = true;
                    }
                });
                $('#resp_Panel .resp_buff_clan').click(() => {
                    if (RESP.buff_clan) {
                        $(".resp_buff_clan .resp_status").removeClass("green").addClass("red").html("Off");
                        RESP.buff_clan = false;
                    } else {
                        $(".resp_buff_clan .resp_status").removeClass("red").addClass("green").html("On");
                        RESP.buff_clan = true;
                    }
                });
                $('#resp_Panel .resp_bh1').click(() => {
                    if (RESP.b1) {
                        $(".resp_bh1 .resp_status").removeClass("green").addClass("red").html("Off");
                        RESP.b1 = false;
                    } else {
                        $(".resp_bh1 .resp_status").removeClass("red").addClass("green").html("On");
                        RESP.b1 = true;
                    }
                });
                $('#resp_Panel .resp_bh2').click(() => {
                    if (RESP.b2) {
                        $(".resp_bh2 .resp_status").removeClass("green").addClass("red").html("Off");
                        RESP.b2 = false;
                    } else {
                        $(".resp_bh2 .resp_status").removeClass("red").addClass("green").html("On");
                        RESP.b2 = true;
                    }
                });
                $('#resp_Panel .resp_bh3').click(() => {
                    if (RESP.b3) {
                        $(".resp_bh3 .resp_status").removeClass("green").addClass("red").html("Off");
                        RESP.b3 = false;
                    } else {
                        $(".resp_bh3 .resp_status").removeClass("red").addClass("green").html("On");
                        RESP.b3 = true;
                    }
                });
                $('#resp_Panel .resp_bh4').click(() => {
                    if (RESP.b4) {
                        $(".resp_bh4 .resp_status").removeClass("green").addClass("red").html("Off");
                        RESP.b4 = false;
                    } else {
                        $(".resp_bh4 .resp_status").removeClass("red").addClass("green").html("On");
                        RESP.b4 = true;
                    }
                });
                $('#resp_Panel .resp_bh5').click(() => {
                    if (RESP.b5) {
                        $(".resp_bh5 .resp_status").removeClass("green").addClass("red").html("Off");
                        RESP.b5 = false;
                    } else {
                        $(".resp_bh5 .resp_status").removeClass("red").addClass("green").html("On");
                        RESP.b5 = true;
                    }
                });
                $('#resp_Panel .resp_bh6').click(() => {
                    if (RESP.b6) {
                        $(".resp_bh6 .resp_status").removeClass("green").addClass("red").html("Off");
                        RESP.b6 = false;
                    } else {
                        $(".resp_bh6 .resp_status").removeClass("red").addClass("green").html("On");
                        RESP.b6 = true;
                    }
                });
                $('#resp_Panel .resp_bh7').click(() => {
                    if (RESP.b7) {
                        $(".resp_bh7 .resp_status").removeClass("green").addClass("red").html("Off");
                        RESP.b7 = false;
                    } else {
                        $(".resp_bh7 .resp_status").removeClass("red").addClass("green").html("On");
                        RESP.b7 = true;
                    }
                });
                $('#resp_Panel .resp_bh8').click(() => {
                    if (RESP.b8) {
                        $(".resp_bh8 .resp_status").removeClass("green").addClass("red").html("Off");
                        RESP.b8 = false;
                    } else {
                        $(".resp_bh8 .resp_status").removeClass("red").addClass("green").html("On");
                        RESP.b8 = true;
                    }
                });
                $('#resp_Panel .resp_bh9').click(() => {
                    if (RESP.b9) {
                        $(".resp_bh9 .resp_status").removeClass("green").addClass("red").html("Off");
                        RESP.b9 = false;
                    } else {
                        $(".resp_bh9 .resp_status").removeClass("red").addClass("green").html("On");
                        RESP.b9 = true;
                    }
                });
                $('#resp_Panel .resp_bh10').click(() => {
                    if (RESP.b10) {
                        $(".resp_bh10 .resp_status").removeClass("green").addClass("red").html("Off");
                        RESP.b10 = false;
                    } else {
                        $(".resp_bh10 .resp_status").removeClass("red").addClass("green").html("On");
                        RESP.b10 = true;
                    }
                });
                $('#resp_Panel .resp_bh11').click(() => {
                    if (RESP.b11) {
                        $(".resp_bh11 .resp_status").removeClass("green").addClass("red").html("Off");
                        RESP.b11 = false;
                    } else {
                        $(".resp_bh11 .resp_status").removeClass("red").addClass("green").html("On");
                        RESP.b11 = true;
                    }
                });
                $('#resp_Panel .resp_bh12').click(() => {
                    if (RESP.b12) {
                        $(".resp_bh12 .resp_status").removeClass("green").addClass("red").html("Off");
                        RESP.b12 = false;
                    } else {
                        $(".resp_bh12 .resp_status").removeClass("red").addClass("green").html("On");
                        RESP.b12 = true;
                    }
                });
                $('#resp_Panel .resp_bh13').click(() => {
                    if (RESP.b13) {
                        $(".resp_bh13 .resp_status").removeClass("green").addClass("red").html("Off");
                        RESP.b13 = false;
                    } else {
                        $(".resp_bh13 .resp_status").removeClass("red").addClass("green").html("On");
                        RESP.b13 = true;
                    }
                });
                $('#resp_Panel .resp_bh14').click(() => {
                    if (RESP.b14) {
                        $(".resp_bh14 .resp_status").removeClass("green").addClass("red").html("Off");
                        RESP.b14 = false;
                    } else {
                        $(".resp_bh14 .resp_status").removeClass("red").addClass("green").html("On");
                        RESP.b14 = true;
                    }
                });
                $('#resp_Panel .resp_bh15').click(() => {
                    if (RESP.b15) {
                        $(".resp_bh15 .resp_status").removeClass("green").addClass("red").html("Off");
                        RESP.b15 = false;
                    } else {
                        $(".resp_bh15 .resp_status").removeClass("red").addClass("green").html("On");
                        RESP.b15 = true;
                    }
                });
                $('#resp_Panel .resp_bh16').click(() => {
                    if (RESP.b16) {
                        $(".resp_bh16 .resp_status").removeClass("green").addClass("red").html("Off");
                        RESP.b16 = false;
                    } else {
                        $(".resp_bh16 .resp_status").removeClass("red").addClass("green").html("On");
                        RESP.b16 = true;
                    }
                });
                $('#resp_Panel .resp_bh17').click(() => {
                    if (RESP.b17) {
                        $(".resp_bh17 .resp_status").removeClass("green").addClass("red").html("Off");
                        RESP.b17 = false;
                    } else {
                        $(".resp_bh17 .resp_status").removeClass("red").addClass("green").html("On");
                        RESP.b17 = true;
                    }
                });
                $('#resp_Panel .resp_bh18').click(() => {
                    if (RESP.b18) {
                        $(".resp_bh18 .resp_status").removeClass("green").addClass("red").html("Off");
                        RESP.b18 = false;
                    } else {
                        $(".resp_bh18 .resp_status").removeClass("red").addClass("green").html("On");
                        RESP.b18 = true;
                    }
                });
                $('#lpvm_Panel .lpvm_lpvm').click(() => {
                    if (LPVM.Stop) {
                        $(".lpvm_lpvm .lpvm_status").removeClass("red").addClass("green").html("On");
                        LPVM.Stop = false;
                        LPVM.Start();
                        RESP.stop = true;
                        RES.stop = true;
                        PVP.stop = true;
                        CODE.stop = true;
                        $(".code_code .code_status").removeClass("green").addClass("red").html("Off");
                        $(".pvp_pvp .pvp_status").removeClass("green").addClass("red").html("Off");
                        $(".res_res .res_status").removeClass("green").addClass("red").html("Off");
                        $(".resp_resp .resp_status").removeClass("green").addClass("red").html("Off");
                    } else {
                        $(".lpvm_lpvm .lpvm_status").removeClass("green").addClass("red").html("Off");
                        LPVM.Stop = true;
                    }
                });
                $('#lpvm_Panel .pvm_killed').click(() => {
                    LPVM.pvm_killed = 0;
                    LPVM.UpdateKilledCounter(LPVM.pvm_killed);
                });
                $('#lpvm_Panel .lpvm_g').click(() => {
                    if ($(".lpvm_g .lpvm_status").hasClass("red")) {
                        $(".lpvm_g .lpvm_status").removeClass("red").addClass("green").html("On");
                        LPVM.Born = 2;
                        $('#lpvm_Panel .lpvm_u').hide();
                        $('#lpvm_Panel .lpvm_s').hide();
                        $('#lpvm_Panel .lpvm_h').hide();
                    } else {
                        $(".lpvm_g .lpvm_status").removeClass("green").addClass("red").html("Off");
                        $('#lpvm_Panel .lpvm_u').show();
                        $('#lpvm_Panel .lpvm_s').show();
                        $('#lpvm_Panel .lpvm_h').show();
                        $(".lpvm_lpvm .lpvm_status").removeClass("green").addClass("red").html("Off");
                        LPVM.Stop = true;
                    }
                });
                $('#lpvm_Panel .lpvm_u').click(() => {
                    if ($(".lpvm_u .lpvm_status").hasClass("red")) {
                        $(".lpvm_u .lpvm_status").removeClass("red").addClass("green").html("On");
                        LPVM.Born = 3;
                        $('#lpvm_Panel .lpvm_g').hide();
                        $('#lpvm_Panel .lpvm_s').hide();
                        $('#lpvm_Panel .lpvm_h').hide();
                    } else {
                        $(".lpvm_u .lpvm_status").removeClass("green").addClass("red").html("Off");
                        $('#lpvm_Panel .lpvm_g').show();
                        $('#lpvm_Panel .lpvm_s').show();
                        $('#lpvm_Panel .lpvm_h').show();
                        $(".lpvm_lpvm .lpvm_status").removeClass("green").addClass("red").html("Off");
                        LPVM.Stop = true;
                    }
                });
                $('#lpvm_Panel .lpvm_s').click(() => {
                    if ($(".lpvm_s .lpvm_status").hasClass("red")) {
                        $(".lpvm_s .lpvm_status").removeClass("red").addClass("green").html("On");
                        LPVM.Born = 4;
                        $('#lpvm_Panel .lpvm_g').hide();
                        $('#lpvm_Panel .lpvm_u').hide();
                        $('#lpvm_Panel .lpvm_h').hide();
                    } else {
                        $(".lpvm_s .lpvm_status").removeClass("green").addClass("red").html("Off");
                        $('#lpvm_Panel .lpvm_g').show();
                        $('#lpvm_Panel .lpvm_u').show();
                        $('#lpvm_Panel .lpvm_h').show();
                        $(".lpvm_lpvm .lpvm_status").removeClass("green").addClass("red").html("Off");
                        LPVM.Stop = true;
                    }
                });
                $('#lpvm_Panel .lpvm_h').click(() => {
                    if ($(".lpvm_h .lpvm_status").hasClass("red")) {
                        $(".lpvm_h .lpvm_status").removeClass("red").addClass("green").html("On");
                        LPVM.Born = 5;
                        $('#lpvm_Panel .lpvm_g').hide();
                        $('#lpvm_Panel .lpvm_u').hide();
                        $('#lpvm_Panel .lpvm_s').hide();
                    } else {
                        $(".lpvm_h .lpvm_status").removeClass("green").addClass("red").html("Off");
                        $('#lpvm_Panel .lpvm_g').show();
                        $('#lpvm_Panel .lpvm_u').show();
                        $('#lpvm_Panel .lpvm_s').show();
                        $(".lpvm_lpvm .lpvm_status").removeClass("green").addClass("red").html("Off");
                        LPVM.Stop = true;
                    }
                });
                $('#lpvm_Panel .lpvm_limit').click(() => {
                    if (LPVM.limit) {
                        $(".lpvm_limit .lpvm_status").removeClass("green").addClass("red").html("Off");
                        LPVM.limit = false;
                    } else {
                        $(".lpvm_limit .lpvm_status").removeClass("red").addClass("green").html("On");
                        LPVM.limit = true;
                    }
                });
                $('#res_Panel .res_res').click(() => {
                    if (RES.stop && Object.entries(GAME.map_mines.mine_data).length > 0) {
                        $(".res_res .res_status").removeClass("red").addClass("green").html("On");
                        RES.stop = false;
                        RES.Start();
                        PVP.stop = true;
                        LPVM.Stop = true;
                        CODE.stop = true;
                        RES.loc = GAME.char_data.loc;
                        $(".code_code .code_status").removeClass("green").addClass("red").html("Off");
                        $(".lpvm_lpvm .lpvm_status").removeClass("green").addClass("red").html("Off");
                        $(".pvp_pvp .pvp_status").removeClass("green").addClass("red").html("Off");
                    } else {
                        $(".res_res .res_status").removeClass("green").addClass("red").html("Off");
                        RES.stop = true;
                        $(".bt_cool").html("");
                        clearTimeout(RES.cdt);
                    }
                });
                $("body").on("click", "#res_Panel .select_mine", function() {
                    if (RES.stop) {
                        RES.refresh_mines = true;
                        RES.mined_id = [];
                        $('.select_mine').prop('checked', false);
                        $(this).prop('checked', true);
                        $('#res_Panel .select_mine:checked').each(function() {
                            id = parseInt($(this).val());
                            RES.mined_id.push(id);
                        });
                    } else {
                        $(this).click();
                        GAME.komunikat("Zatrzymaj najpierw skrypt!");
                    }
                });
                $('#code_Panel .code_code').click(() => {
                    if (CODE.stop) {
                        $(".code_code .code_status").removeClass("red").addClass("green").html("On");
                        CODE.stop = false;
                        CODE.start();
                        GAME.socket.emit('ga', {
                            a: 12,
                            page: 10,
                            used: 1
                        });
                        RESP.stop = true;
                        RES.stop = true;
                        LPVM.Stop = true;
                        PVP.stop = true;
                        $(".pvp_pvp .pvp_status").removeClass("green").addClass("red").html("Off");
                        $(".lpvm_lpvm .lpvm_status").removeClass("green").addClass("red").html("Off");
                        $(".res_res .res_status").removeClass("green").addClass("red").html("Off");
                        $(".resp_resp .resp_status").removeClass("green").addClass("red").html("Off");
                    } else {
                        $(".code_code .code_status").removeClass("green").addClass("red").html("Off");
                        CODE.stop = true;
                    }
                });
                $('#code_Panel .code_acc').click(() => {
                    if (CODE.acc) {
                        $(".code_acc .code_status").removeClass("green").addClass("red").html("Off");
                        CODE.acc = false;
                    } else {
                        $(".code_acc .code_status").removeClass("red").addClass("green").html("On");
                        $(".code_bh1 .code_status").removeClass("green").addClass("red").html("Off");
                        $(".code_bh2 .code_status").removeClass("green").addClass("red").html("Off");
                        CODE.acc = true;
                        CODE.b1 = false;
                        CODE.b2 = false;
                    }
                });
                $('#code_Panel .code_zast').click(() => {
                    if (CODE.zast) {
                        $(".code_zast .code_status").removeClass("green").addClass("red").html("Off");
                        CODE.zast = false;
                    } else {
                        $(".code_zast .code_status").removeClass("red").addClass("green").html("On");
                        $(".code_bh1 .code_status").removeClass("green").addClass("red").html("Off");
                        $(".code_bh2 .code_status").removeClass("green").addClass("red").html("Off");
                        CODE.zast = true;
                        CODE.b1 = false;
                        CODE.b2 = false;
                    }
                });
                $('#code_Panel .code_bh1').click(() => {
                    if (CODE.b1) {
                        $(".code_bh1 .code_status").removeClass("green").addClass("red").html("Off");
                        CODE.b1 = false;
                    } else {
                        $(".code_bh1 .code_status").removeClass("red").addClass("green").html("On");
                        $(".code_acc .code_status").removeClass("green").addClass("red").html("Off");
                        $(".code_zast .code_status").removeClass("green").addClass("red").html("Off");
                        CODE.b1 = true;
                        CODE.acc = false;
                        CODE.zast = false;
                    }
                });
                $('#code_Panel .code_bh2').click(() => {
                    if (CODE.b2) {
                        $(".code_bh2 .code_status").removeClass("green").addClass("red").html("Off");
                        CODE.b2 = false;
                    } else {
                        $(".code_bh2 .code_status").removeClass("red").addClass("green").html("On");
                        $(".code_acc .code_status").removeClass("green").addClass("red").html("Off");
                        $(".code_zast .code_status").removeClass("green").addClass("red").html("Off");
                        CODE.b2 = true;
                        CODE.acc = false;
                        CODE.zast = false;
                    }
                });
                $('#bot_what_to_train').change((e) => {
                    CODE.what_to_train = parseInt($(e.target).val());
                });
                $('#bot_what_to_traintime').change((e) => {
                    CODE.what_to_traintime = parseInt($(e.target).val());
                });
                $('#lpvm_Panel .gamee_input').change((e) => {
                    LPVM.limit2 = parseInt($(e.target).val());
                });
                $('#lpvm_Panel .gamee_input').change((e) => {
                    LPVM.limit2 = parseInt($(e.target).val());
                });
                $('#pvp_Panel .gameee_input').change((e) => {
                    PVP.WSP = parseInt($(e.target).val());
                    PVP.save_speed();
                });
                $('#pvp_Panel .gamee_input').change((e) => {
                    PVP.war = $(e.target).val();
                    PVP.save_clan_list();
                });
            }(function() {
                let a;

                function f() {
                    if (!a) a = Object.keys(GAME).find(z => GAME[z] && GAME[z]['1_1']);
                    return a;
                }
                Object.defineProperty(GAME, 'mapcell', {
                    get: function() {
                        return GAME[f()];
                    }
                });
            })();
            GAME.emit = function(order, data, force) {
                if (!this.is_loading || force) {
                    this.load_start();
                    this.socket.emit(order, data);
                } else if (this.debug) console.log('failed order', order, data);
            };
            GAME.emitOrder = function(data, force = false) {
                this.emit('ga', data, force);
            };
            GAME.initiate = function() {
                $('#player_login').text(this.login);
                $('#game_win').show();
                if (this.char_id == 0 && this.pid > 0) {
                    this.emitOrder({
                        a: 1
                    });
                }
                var len = this.servers.length,
                    con = '';
                for (var i = 0; i < len; i++) {
                    con += '<option value="' + this.servers[i] + '">' + LNG['server' + this.servers[i]] + '</option>';
                }
                $('#available_servers').html(con);
                $('#available_servers option[value=' + this.server + ']').prop('selected', true);
            };
            var PVP = {
                stop: true,
                wi: true,
                code: true,
                wk: true,
                higherRebornAvoid: false,
                caseNumber: 0,
                wait: 10,
                wait2: 80,
                czekajpvp: 160,
                WSP: 50,
                licznik: 0,
                dogory: false,
                loc: 0,
                adimp: false,
                g: 1,
                tele: false,
                tabb: [],
                x: 1,
                y: 1,
                war: false,
                buff_imp: false,
                buff_clan: false
            };
            PVP.checkkkk = () => {
                let imp = $("#leader_player").find("[data-option=show_player]").attr("data-char_id");
                let emp = GAME.char_data.empire;
                let buff = $(".emp_buff .pull-right").find("button").attr("data-option") == "activate_emp_buff";
                let buff_id = $(".emp_buff .pull-right").find("button").attr("data-buff");
                let who_win = $("#gne_satus").text().includes("ZŁO");
                let abut = $("#clan_buffs").find(`button[data-option="activate_war_buff"]`);
                let isDisabled = $("#clan_buffs").find(`button[data-option="activate_war_buff"]`).parents("tr").hasClass("disabled");
                if (GAME.quick_opts.ssj && $("#ssj_bar").css("display") === "none" && PVP.code) {
                    setTimeout(() => {
                        GAME.socket.emit('ga', {
                            a: 18,
                            type: 5,
                            tech_id: GAME.quick_opts.ssj[0]
                        });
                    }, 1500);
                    return true;
                } else if ($('#ssj_status').text() == "--:--:--" && PVP.code && GAME.quick_opts.ssj) {
                    setTimeout(() => {
                        GAME.socket.emit('ga', {
                            a: 18,
                            type: 6
                        });
                    }, 1500);
                    return true;
                } else if ($('#ssj_status').text() <= '00:00:05' && PVP.code && GAME.quick_opts.ssj) {
                    return true;
                } else if ($("#train_uptime").find('.timer').length == 0 && !GAME.is_training && PVP.code) {
                    GAME.socket.emit('ga', {
                        a: 8,
                        type: 2,
                        stat: 1,
                        duration: 1
                    });
                    setTimeout(() => {
                        GAME.socket.emit('ga', {
                            a: 8,
                            type: 5,
                            apud: 'vzaaa'
                        });
                    }, 1600);
                    return true;
                } else if (GAME.is_training && $("#train_uptime").find('.timer').length == 1 && PVP.code) {
                    setTimeout(() => {
                        GAME.socket.emit('ga', {
                            a: 8,
                            type: 3
                        });
                    }, 1600);
                    return true;
                } else if (GAME.is_training && PVP.code) {
                    GAME.socket.emit('ga', {
                        a: 8,
                        type: 3
                    });
                    return true;
                } else if (imp == GAME.char_id && PVP.buff_imp && buff && buff_id < 4) {
                    GAME.socket.emit('ga', {
                        a: 50,
                        type: 6,
                        buff: buff_id
                    });
                    return true;
                } else if (imp == GAME.char_id && PVP.buff_imp && buff && buff_id < 7 && ((emp == 1 || emp == 3) && who_win)) {
                    GAME.socket.emit('ga', {
                        a: 50,
                        type: 6,
                        buff: buff_id
                    });
                    return true;
                } else if (imp == GAME.char_id && PVP.buff_imp && buff && buff_id < 7 && ((emp == 2 || emp == 4) && !who_win)) {
                    GAME.socket.emit('ga', {
                        a: 50,
                        type: 6,
                        buff: buff_id
                    });
                    return true;
                } else if ((PVP.buff_clan || PVP.buff_imp) && $("#server_time").text() > '00:05:00' && $("#server_time").text() < '01:00:00' && typeof this.loaded == 'undefined') {
                    this.loaded = true;
                    setTimeout(() => {
                        GAME.socket.emit('ga', {
                            a: 50,
                            type: 0,
                            empire: GAME.char_data.empire
                        });
                    }, 300);
                    setTimeout(() => {
                        GAME.emitOrder({
                            a: 39,
                            type: 0
                        });
                    }, 600);
                    setTimeout(() => {
                        GAME.emitOrder({
                            a: 39,
                            type: 23
                        });
                    }, 900);
                    return true;
                } else if (PVP.buff_clan && GAME.klan_data != undefined && abut.length && !isDisabled) {
                    $(" .newBtn.activate_all_clan_buffs").click();
                    return true;
                }
                return false;
            };
            PVP.start = () => {
                if (!PVP.stop && !GAME.is_loading) {
                    if ($("#player_list_con").find("[data-option=load_more_players]").length != 0) {
                        $("#player_list_con").find("[data-option=load_more_players]").click();
                    }
                    PVP.action();
                } else if (GAME.is_loading) {
                    window.setTimeout(PVP.start, PVP.wait / PVP.WSPP());
                } else {}
            };
            PVP.action = () => {
                switch (PVP.caseNumber) {
                    case 0:
                        PVP.caseNumber++;
                        PVP.check_position_x();
                        break;
                    case 1:
                        PVP.caseNumber++;
                        PVP.check_position_y();
                        break;
                    case 2:
                        PVP.caseNumber++;
                        PVP.check();
                        break;
                    case 3:
                        PVP.caseNumber++;
                        PVP.check_players();
                        break;
                    case 4:
                        PVP.caseNumber++;
                        PVP.kill_players();
                        break;
                    case 5:
                        PVP.caseNumber++;
                        PVP.check_players2();
                        break;
                    case 6:
                        PVP.caseNumber++;
                        PVP.wojny1();
                        break;
                    case 7:
                        PVP.caseNumber++;
                        PVP.check_location();
                        break;
                    case 8:
                        PVP.caseNumber++;
                        PVP.check2();
                        break;
                    case 9:
                        PVP.caseNumber++;
                        PVP.check_players2();
                        break;
                    case 10:
                        PVP.caseNumber++;
                        PVP.dec_wars();
                        break;
                    case 11:
                        PVP.caseNumber = 0;
                        PVP.go();
                    default:
                }
            };
            PVP.check_position_x = () => {
                PVP.x = GAME.char_data.x;
                window.setTimeout(PVP.start, 5);
            };
            PVP.check_position_y = () => {
                PVP.y = GAME.char_data.y;
                window.setTimeout(PVP.start, 5);
            };
            PVP.check_players = () => {
                if ($("#player_list_con").find("[data-option=load_more_players]").length != 0) {
                    $("#player_list_con").find("[data-option=load_more_players]").click();
                }
                if (0 < $("#player_list_con .player").length) {
                    PVP.y = GAME.char_data.y;
                    if (document.getElementById("player_list_con").children[0].children[1].childElementCount == 3) {
                        PVP.tabb = $("#player_list_con .player").eq(0).find(".timer").text();
                        if (PVP.tabb <= '00:01:30' && PVP.y == 2 && PVP.tabb != '' || PVP.tabb <= '00:00:25' && PVP.tabb != '') {
                            window.setTimeout(PVP.check_players, PVP.czekajpvp / PVP.WSPP() * 4);
                        } else {
                            window.setTimeout(PVP.start, PVP.czekajpvp / PVP.WSPP() / 2);
                        }
                    } else {
                        window.setTimeout(PVP.start, PVP.czekajpvp / PVP.WSPP() / 2);
                    }
                } else {
                    window.setTimeout(PVP.start, PVP.wait / PVP.WSPP() * 2);
                }
                PVP.licznik = 1;
            };
            PVP.check_players2 = () => {
                var enemy = $("#player_list_con").find(".player button" + "[data-quick=1]" + ":not(.initial_hide_forced)");
                PVP.kill_players1();
                window.setTimeout(PVP.start, PVP.czekajpvp / PVP.WSPP() * (enemy.length) * 2);
                PVP.licznik = 1;
            };
            PVP.kill_players = () => {
                var enemy = $("#player_list_con").find(".player button" + "[data-quick=1]" + ":not(.initial_hide_forced)");
                if ($("#player_list_con").find("[data-option=load_more_players]").length == 1) {
                    $("#player_list_con").find("[data-option=load_more_players]").click();
                    window.setTimeout(PVP.kill_players, PVP.czekajpvp / PVP.WSPP());
                } else if (enemy.length == 0) {
                    PVP.kill_players1();
                    window.setTimeout(PVP.start, PVP.czekajpvp / PVP.WSPP() * (enemy.length) * 2);
                } else if (PVP.licznik < $("#player_list_con .player").length) {
                    if ($("#player_list_con .player").eq(PVP.licznik).find("[data-quick=1]").attr("data-option").includes("gxxx")) {
                        GAME.socket.emit('ga', {
                            a: 24,
                            type: 1,
                            char_id: $("#player_list_con .player").eq(PVP.licznik).find("[data-quick=1]").attr("data-char_id"),
                            quick: 1
                        });
                        PVP.licznik++;
                        window.setTimeout(PVP.kill_players, PVP.czekajpvp / PVP.WSPP());
                    } else {
                        GAME.socket.emit('ga', {
                            a: 24,
                            char_id: $("#player_list_con .player").eq(PVP.licznik).find("[data-quick=1]").attr("data-char_id"),
                            quick: 1
                        });
                        PVP.licznik++;
                        window.setTimeout(PVP.kill_players, PVP.czekajpvp / PVP.WSPP());
                    }
                } else {
                    window.setTimeout(PVP.start, PVP.wait / PVP.WSPP());
                    PVP.licznik = 0;
                    kom_clear();
                }
            };
            PVP.kill_players1 = () => {
                if (!JQS.chm.is(":focus")) {
                    var enemy = $("#player_list_con").find(".player button" + "[data-quick=1]" + ":not(.initial_hide_forced)");
                    var bbb = $("#player_list_con").find(".player button" + "[data-option=gpvp_attack]" + "[data-quick=1]" + ":not(.initial_hide_forced)");
                    var bbbb = parseInt(bbb.attr("data-char_id"));
                    if ($("#player_list_con").find("[data-option=load_more_players]").length == 1) {
                        $("#player_list_con").find("[data-option=load_more_players]").click();
                        window.setTimeout(PVP.kill_players1, 50);
                    } else if (bbb.length > 0) {
                        GAME.socket.emit('ga', {
                            a: 24,
                            type: 1,
                            char_id: bbbb,
                            quick: 1
                        });
                        window.setTimeout(PVP.kill_players1, 110);
                    } else if (enemy.length > 0) {
                        enemy.eq(0).click();
                        window.setTimeout(PVP.kill_players1, 110);
                    } else {
                        kom_clear();
                    }
                }
            };
            PVP.check_imp = () => {
                var tab = [];
                for (var i = 0; i < 3; i++) {
                    tab[i] = parseInt($("#empire_heroes .activity").eq(i).find("[data-option=show_player]").attr("data-char_id"));
                }
                return tab;
            };
            PVP.check_imp2 = () => {
                var tab = [];
                for (var i = 0; i < 3; i++) {
                    tab[i] = parseInt($("#empire_efrags .activity").eq(i).find("[data-option=show_player]").attr("data-char_id"));
                }
                return tab;
            };
            PVP.wojny1 = () => {
                if (PVP.wi) {
                    var aimp = $("#e_admiral_player").find("[data-option=show_player]").attr("data-char_id");
                    var imp = $("#leader_player").find("[data-option=show_player]").attr("data-char_id");
                    if (!PVP.adimp) {
                        GAME.socket.emit('ga', {
                            a: 50,
                            type: 0,
                            empire: GAME.char_data.empire
                        });
                        PVP.adimp = true;
                        window.setTimeout(PVP.wojny1, 500);
                    } else if (!GAME.emp_enemies.includes(1) && ![GAME.char_data.empire].includes(1) && (PVP.check_imp().includes(GAME.char_id) || PVP.check_imp2().includes(GAME.char_id) || imp == GAME.char_id || aimp == GAME.char_id)) {
                        GAME.socket.emit('ga', {
                            a: 50,
                            type: 7,
                            target: 1
                        });
                        window.setTimeout(PVP.wojny1, 500);
                    } else if (!GAME.emp_enemies.includes(2) && ![GAME.char_data.empire].includes(2) && (PVP.check_imp().includes(GAME.char_id) || PVP.check_imp2().includes(GAME.char_id) || imp == GAME.char_id || aimp == GAME.char_id)) {
                        GAME.socket.emit('ga', {
                            a: 50,
                            type: 7,
                            target: 2
                        });
                        window.setTimeout(PVP.wojny1, 500);
                    } else if (!GAME.emp_enemies.includes(3) && ![GAME.char_data.empire].includes(3) && (PVP.check_imp().includes(GAME.char_id) || PVP.check_imp2().includes(GAME.char_id) || imp == GAME.char_id || aimp == GAME.char_id)) {
                        GAME.socket.emit('ga', {
                            a: 50,
                            type: 7,
                            target: 3
                        });
                        window.setTimeout(PVP.wojny1, 500);
                    } else if (!GAME.emp_enemies.includes(4) && ![GAME.char_data.empire].includes(4) && (PVP.check_imp().includes(GAME.char_id) || PVP.check_imp2().includes(GAME.char_id) || imp == GAME.char_id || aimp == GAME.char_id)) {
                        GAME.socket.emit('ga', {
                            a: 50,
                            type: 7,
                            target: 4
                        });
                        window.setTimeout(PVP.wojny1, 500);
                    } else {
                        window.setTimeout(PVP.start, PVP.wait / PVP.WSPP());
                    }
                } else {
                    window.setTimeout(PVP.start, PVP.wait / PVP.WSPP());
                }
            };
            PVP.zejdz = () => {
                GAME.socket.emit('ga', {
                    a: 16
                });
                window.setTimeout(PVP.teleport, 2000);
            };
            PVP.go = () => {
                var x = GAME.char_data.x;
                var y = GAME.char_data.y;
                if (x == 14 && y == 14 && PVP.loc === 1) {
                    PVP.zejdz();
                    PVP.g = 2;
                    PVP.tele = true;
                } else if (x == 14 && y == 14 && PVP.loc === 2) {
                    PVP.zejdz();
                    PVP.g = 3;
                    PVP.tele = true;
                } else if (x == 14 && y == 14 && PVP.loc === 3) {
                    PVP.zejdz();
                    PVP.g = 4;
                    PVP.tele = true;
                } else if (x == 14 && y == 14 && PVP.loc === 4) {
                    PVP.zejdz();
                    PVP.g = 1;
                    PVP.tele = true;
                } else if (PVP.loc === 7) {
                    PVP.zejdz();
                    PVP.tele = true;
                } else if (x == 8 && y == 4 && PVP.loc == 4 || x == 8 && y == 6 && PVP.loc == 4 || x == 12 && y == 7 && PVP.loc == 1 || x == 12 && y == 9 && PVP.loc == 1 || x == 4 && y == 8 && PVP.loc == 1 || x == 4 && y == 10 && PVP.loc == 1 || x == 7 && y == 13 && PVP.loc == 3 || x == 8 && y == 5 && PVP.loc == 2 || x == 8 && y == 7 && PVP.loc == 2 || x == 3 && y == 9 && PVP.loc == 5) {
                    PVP.go_down();
                } else if (x == 8 && y == 5 && PVP.loc == 4 || x == 8 && y == 7 && PVP.loc == 4) {
                    PVP.go_left();
                } else if (x == 5 && y == 11 && PVP.loc == 1 || x == 5 && y == 10 && PVP.loc == 1 || x == 5 && y == 9 && PVP.loc == 1 || x == 5 && y == 8 && PVP.loc == 1) {
                    PVP.go_up();
                } else if (x == 8 && y == 6 && PVP.loc == 2 || x == 8 && y == 8 && PVP.loc == 2) {
                    PVP.go_right();
                } else if (x == 2 && y == 11 && PVP.loc == 3) {
                    PVP.cofanie();
                } else if (x == 7 && y == 7 && PVP.loc == 6 && PVP.dogory || x == 9 && y == 7 && PVP.loc == 6 && PVP.dogory) {
                    PVP.prawodol();
                } else if (x == 8 && y == 8 && PVP.loc == 6 && PVP.dogory || x == 10 && y == 8 && PVP.loc == 6 && PVP.dogory) {
                    PVP.prawogora();
                } else if (x < 14 && y % 2 == 0 && PVP.loc < 5 || x < 15 && y % 2 !== 0 && PVP.loc == 6 || x < 11 && y % 2 == 0 && PVP.loc == 5) {
                    PVP.go_right();
                } else if (y % 2 !== 0 && x > 2 && PVP.loc < 6 || x > 1 && y % 2 == 0 && PVP.loc == 6 || x == 2 && PVP.loc == 6) {
                    PVP.go_left();
                } else if (x == 14 || x == 2 && PVP.loc < 5 || x == 15 && PVP.loc == 6 || x == 1 || x == 11 && PVP.loc == 5 || x == 2 && PVP.loc == 5) {
                    PVP.go_down();
                } else {
                    window.setTimeout(PVP.start, PVP.wait / PVP.WSPP());
                }
            };
            PVP.teleport = () => {
                if (PVP.tele) {
                    GAME.socket.emit('ga', {
                        a: 50,
                        type: 5,
                        e: PVP.g
                    });
                    window.setTimeout(PVP.start, 2000);
                    PVP.tele = false;
                } else {
                    window.setTimeout(PVP.start, PVP.wait / PVP.WSPP());
                }
            };
            PVP.check_location = () => {
                if (GAME.char_data.loc == 351) {
                    PVP.loc = 4;
                    window.setTimeout(PVP.start, PVP.wait / PVP.WSPP());
                } else if (GAME.char_data.loc == 350) {
                    PVP.loc = 3;
                    window.setTimeout(PVP.start, PVP.wait / PVP.WSPP());
                } else if (GAME.char_data.loc == 349) {
                    PVP.loc = 2;
                    window.setTimeout(PVP.start, PVP.wait / PVP.WSPP());
                } else if (GAME.char_data.loc == 348) {
                    PVP.loc = 1;
                    window.setTimeout(PVP.start, PVP.wait / PVP.WSPP());
                } else {
                    PVP.loc = 7;
                    window.setTimeout(PVP.start, PVP.wait / PVP.WSPP());
                }
            };
            PVP.cofanie = () => {
                PVP.x = GAME.char_data.x;
                if (PVP.x >= 7) {
                    PVP.go_down();
                } else {
                    GAME.emitOrder({
                        a: 4,
                        dir: 7,
                        vo: GAME.map_options.vo
                    });
                    window.setTimeout(PVP.cofanie, 150);
                }
            };
            PVP.prawodol = () => {
                GAME.emitOrder({
                    a: 4,
                    dir: 3,
                    vo: GAME.map_options.vo
                });
                window.setTimeout(PVP.start, PVP.wait2 / PVP.WSPP());
            };
            PVP.prawogora = () => {
                GAME.emitOrder({
                    a: 4,
                    dir: 5,
                    vo: GAME.map_options.vo
                });
                window.setTimeout(PVP.start, PVP.wait2 / PVP.WSPP());
            };
            PVP.go_up = () => {
                GAME.emitOrder({
                    a: 4,
                    dir: 2,
                    vo: GAME.map_options.vo
                });
                window.setTimeout(PVP.start, PVP.wait2 / PVP.WSPP());
            };
            PVP.go_down = () => {
                GAME.emitOrder({
                    a: 4,
                    dir: 1,
                    vo: GAME.map_options.vo
                });
                window.setTimeout(PVP.start, PVP.wait2 / PVP.WSPP());
            };
            PVP.go_left = () => {
                GAME.emitOrder({
                    a: 4,
                    dir: 8,
                    vo: GAME.map_options.vo
                });
                window.setTimeout(PVP.start, PVP.wait2 / PVP.WSPP());
            };
            PVP.go_right = () => {
                GAME.emitOrder({
                    a: 4,
                    dir: 7,
                    vo: GAME.map_options.vo
                });
                window.setTimeout(PVP.start, PVP.wait2 / PVP.WSPP());
            };
            PVP.check = () => {
                if ($("#ewar_list").text().includes("--:--:--")) {
                    window.setTimeout(PVP.check, 300);
                } else {
                    window.setTimeout(PVP.start, PVP.wait / PVP.WSPP());
                }
            };
            PVP.check2 = () => {
                if (PVP.checkkkk()) {
                    window.setTimeout(PVP.check2, 1800);
                } else {
                    window.setTimeout(PVP.start, PVP.wait / PVP.WSPP());
                }
            };
            PVP.clan_list = () => {
                var list = localStorage.getItem('clan_list');
                if (list === undefined) {
                    list = "";
                }
                return list;
            };
            PVP.save_clan_list = () => {
                localStorage.setItem('clan_list', PVP.war);
            };
            PVP.dec_wars = () => {
                var wars = $("#pvp_Panel input[name=pvp_capt]").val();
                var count = wars ? wars.split(";").length : 0;
                if (count > 0 && PVP.wk && GAME.char_data.klan_id != 0 && GAME.char_data.klan_rent == 0 && GAME.clan_wars.length < count) {
                    GAME.socket.emit('ga', {
                        a: 39,
                        type: 24,
                        shorts: wars
                    });
                    window.setTimeout(PVP.start, PVP.wait / PVP.WSPP());
                } else {
                    window.setTimeout(PVP.start, PVP.wait / PVP.WSPP());
                }
            };
            PVP.speed = () => {
                var list = localStorage.getItem('pvp_speed');
                PVP.WSP = parseInt(list);
                if (list === undefined) {
                    list = "";
                }
                return list;
            };
            PVP.save_speed = () => {
                localStorage.setItem('pvp_speed', PVP.WSP);
            };
            PVP.WSPP = () => {
                var speed = PVP.WSP;
                if (speed < 10) speed = 10;
                if (speed > 100) speed = 100;
                if ($("#pvp_Panel input[name=speed_capt]").val() == '') speed = 50;
                return speed / 50;
            };
            GAME.parseListPlayer = function (entry, pvp_master) {
                var res = '';
                if (entry.data) {
                    var pd = entry.data;
                    if (PVP.higherRebornAvoid && pd.reborn > GAME.char_data.reborn && pd.reborn > 3){return res;}
                    var qb = '';
                    var klan = '', erank = '';
                    if (pd.klan_id) {
                        var cls = '';
                        if (this.clan_enemies.indexOf(pd.klan_id) != -1) cls = 'enemy';
                        klan = '<b class="poption player_clan ' + cls + '" data-option="show_clan" data-klan_id="' + pd.klan_id + '">' + pd.klan_short + ' <img src="' + pd.emblem + '" /></b>';
                    }
                    var cls = '';
                    if (entry.cd) {
                        qb += this.showTimer(entry.cd - this.getTime(), 'data-special="10" data-pd="' + pd.id + '"', ' playercd' + pd.id + '');
                        cls = 'initial_hide_forced playericons' + pd.id;
                    }
                    if (pd.empire) {
                        var cls2 = '';
                        if (this.emp_enemies.indexOf(pd.empire) != -1) {
                            if (this.emp_enemies_t[pd.empire] == 1) cls2 = 'war';
                            else if (this.empire_locations.indexOf(this.char_data.loc) != -1) cls2 = 'war';
                        }
                        if (!pd.glory_rank) pd.glory_rank = 1;
                        erank = '<img src="/gfx/empire/ranks/' + pd.empire + '/' + pd.glory_rank + '.png" class="glory_rank ' + cls2 + '" />';
                    }
                    qb += '<button class="poption map_bicon ' + cls + '" data-option="pvp_attack" data-char_id="' + pd.id + '"><i class="ca"></i></button>';
                    if (pvp_master) qb += '<button class="poption map_bicon ' + cls + '" data-option="pvp_attack" data-char_id="' + pd.id + '" data-quick="1"><i class="qa"></i></button>';
                    res += '<div class="player"><div class="belka">' + erank + '<strong class="player_rank' + pd.ranga + ' poption" data-option="show_player" data-char_id="' + pd.id + '">' + pd.name + '</strong> <span>' + this.rebPref(pd.reborn) + pd.level + '</span> ' + klan + '</div><div id="pvp_opts_' + pd.id + '" class="right_btns">' + qb + '</div></div>';
                }
                else if (entry.more) {
                    res += '<div class="more_players"><button class="poption" data-option="load_more_players" data-start_from="' + entry.next_from + '">+' + entry.more + '</button></div>';
                }
                return res;
            };
            GAME.parsePlayerShadow = function (data, pvp_master) {
                var entry = data.data;
                var res = '';
                if (entry.data) {
                    var pd = entry.data;
                    if ( PVP.higherRebornAvoid && pd.reborn > GAME.char_data.reborn && pd.reborn > 3){return res;}
                    pd.empire = entry.empire;
                    var qb = '';
                    var erank = '';
                    var cls = '';
                    if (data.cd) {
                        qb += this.showTimer(data.cd - this.getTime(), 'data-special="10" data-pd="' + pd.id + '"', ' playercd' + pd.id + '');
                        cls = 'initial_hide_forced playericons' + pd.id;
                    }
                    if (pd.empire) {
                        var cls2 = '';
                        if (this.emp_enemies.indexOf(pd.empire) != -1) {
                            if (this.emp_enemies_t[pd.empire] == 1) cls2 = 'war';
                            else if (this.empire_locations.indexOf(this.char_data.loc) != -1) cls2 = 'war';
                        }
                        if (!pd.glory_rank) pd.glory_rank = 1;
                        erank = '<img src="/gfx/empire/ranks/' + pd.empire + '/' + pd.glory_rank + '.png" class="glory_rank ' + cls2 + '" />';
                    }
                    qb += '<button class="poption map_bicon ' + cls + '" data-option="gpvp_attack" data-char_id="' + pd.id + '"><i class="ca"></i></button>';
                    if (pvp_master) qb += '<button class="poption map_bicon ' + cls + '" data-option="gpvp_attack" data-char_id="' + pd.id + '" data-quick="1"><i class="qa"></i></button>';
                    res += '<div class="player"><div class="belka">' + erank + '<strong class="player_rank' + pd.ranga + ' poption" data-option="show_player" data-char_id="' + pd.id + '">' + pd.name + ' - ' + LNG.lab348 + '</strong> <span>' + this.rebPref(pd.reborn) + pd.level + '</span> </div><div id="gpvp_opts_' + pd.id + '" class="right_btns">' + qb + '</div></div>';
                }
                else if (entry.more) {
                    res += '<div class="more_players"><button class="poption" data-option="load_more_players" data-start_from="' + entry.next_from + '">+' + entry.more + '</button></div>';
                }
                return res;
            };
            var RESP = {
                wait: 60,
                stop: true,
                checkOST: true,
                checkSSJ: true,
                jaka: 0,
                zmiana: false,
                multifight: true,
                reload: false,
                SENZU_BLUE: 'SENZU_BLUE',
                SENZU_GREEN: 'SENZU_GREEN',
                SENZU_YELLOW: 'SENZU_YELLOW',
                SENZU_RED: 'SENZU_RED',
                SENZU_MAGIC: 'SENZU_MAGIC',
                SENZU_PURPLE: 'SENZU_PURPLE',
                CONF_BLUE_AMOUNT: () => {
                    return Math.floor(GAME.getCharMaxPr() / 100 * 0.9999)
                },
                CONF_BLUE_AMOUNT1: Math.floor(GAME.getCharMaxPr() / 100 * 0.9999),
                CONF_PURPLE_AMOUNT: 30,
                CONF_GREEN_AMOUNT: () => {
                    return Math.floor(GAME.getCharMaxPr() / 2000 * 0.9999)
                },
                CONF_GREEN_AMOUNT1: Math.floor(GAME.getCharMaxPr() / 2000 * 0.9999),
                CONF_YELLOW_AMOUNT: 6,
                CONF_SENZU: false,
                bless: false,
                checkOST_timer: 0,
                code: true,
                b1: false,
                b2: false,
                b3: false,
                b4: false,
                b5: false,
                b6: false,
                b7: false,
                b8: false,
                b9: false,
                b10: false,
                b11: false,
                b12: false,
                b13: false,
                b14: false,
                b15: false,
                b16: false,
                b17: false,
                b18: false,
                buff_imp: false,
                buff_clan: false,
                loc: GAME.char_data.loc
            };
            RESP.check = () => {
                let imp = $("#leader_player").find("[data-option=show_player]").attr("data-char_id");
                let emp = GAME.char_data.empire;
                let buff = $(".emp_buff .pull-right").find("button").attr("data-option") == "activate_emp_buff";
                let buff_id = $(".emp_buff .pull-right").find("button").attr("data-buff");
                let who_win = $("#gne_satus").text().includes("ZŁO");
                let abut = $("#clan_buffs").find(`button[data-option="activate_war_buff"]`);
                let isDisabled = $("#clan_buffs").find(`button[data-option="activate_war_buff"]`).parents("tr").hasClass("disabled");
                if (GAME.char_data.pr <= RESP.min_pa()) {
                    RESP.useSenzu();
                    return true;
                } else if (RESP.checkOST && $("#doubler_bar").css("display") === "none") {
                    GAME.socket.emit(`ga`, {
                        a: 12,
                        type: 14,
                        iid: GAME.quick_opts.sub[RESP.jaka].id,
                        page: GAME.ekw_page,
                        am: 1
                    });
                    return true;
                } else if (RESP.checkOST && $('#doubler_status').text() <= '00:00:03') {
                    return true;
                } else if ((!RESP.checkOST && RESP.checkOST_timer <= GAME.getTime()) || (RESP.jaka == 1 && RESP.checkOST_timer <= GAME.getTime())) {
                    RESP.checkOST_timer = GAME.getTime() + 60;
                    return true;
                } else if (RESP.checkSSJ && GAME.quick_opts.ssj && $("#ssj_bar").css("display") === "none") {
                    GAME.socket.emit(`ga`, {
                        a: 18,
                        type: 5,
                        tech_id: GAME.quick_opts.ssj[0]
                    });
                    return true;
                } else if (RESP.checkSSJ && $('#ssj_status').text() <= '00:00:03' && GAME.quick_opts.ssj) {
                    return true;
                } else if ($('#ssj_status').text() == "--:--:--" && GAME.quick_opts.ssj) {
                    GAME.socket.emit(`ga`, {
                        a: 18,
                        type: 6
                    });
                    return true;
                } else if ($("#train_uptime").find('.timer').length == 0 && !GAME.is_training && RESP.code) {
                    GAME.socket.emit('ga', {
                        a: 8,
                        type: 2,
                        stat: 1,
                        duration: 1
                    });
                    setTimeout(() => {
                        GAME.socket.emit('ga', {
                            a: 8,
                            type: 5,
                            apud: 'vzaaa'
                        });
                    }, 1600);
                    return true;
                } else if (GAME.is_training && $("#train_uptime").find('.timer').length == 0 && RESP.code) {
                    GAME.socket.emit('ga', {
                        a: 8,
                        type: 5,
                        apud: 'vzaaa'
                    });
                    return true;
                } else if (GAME.is_training && $("#train_uptime").find('.timer').length == 1 && RESP.code) {
                    GAME.socket.emit('ga', {
                        a: 8,
                        type: 3
                    });
                    return true;
                } else if (GAME.is_training && RESP.code) {
                    GAME.socket.emit('ga', {
                        a: 8,
                        type: 3
                    });
                    return true;
                } else if (imp == GAME.char_id && RESP.buff_imp && buff && buff_id < 4) {
                    GAME.socket.emit('ga', {
                        a: 50,
                        type: 6,
                        buff: buff_id
                    });
                    return true;
                } else if (imp == GAME.char_id && RESP.buff_imp && buff && buff_id < 7 && ((emp == 1 || emp == 3) && who_win)) {
                    GAME.socket.emit('ga', {
                        a: 50,
                        type: 6,
                        buff: buff_id
                    });
                    return true;
                } else if (imp == GAME.char_id && RESP.buff_imp && buff && buff_id < 7 && ((emp == 2 || emp == 4) && !who_win)) {
                    GAME.socket.emit('ga', {
                        a: 50,
                        type: 6,
                        buff: buff_id
                    });
                    return true;
                } else if ((RESP.buff_clan || RESP.buff_imp) && $("#server_time").text() > '00:05:00' && $("#server_time").text() < '01:00:00' && typeof this.loaded == 'undefined') {
                    this.loaded = true;
                    setTimeout(() => {
                        GAME.socket.emit('ga', {
                            a: 50,
                            type: 0,
                            empire: GAME.char_data.empire
                        });
                    }, 300);
                    setTimeout(() => {
                        GAME.emitOrder({
                            a: 39,
                            type: 0
                        });
                    }, 600);
                    setTimeout(() => {
                        GAME.emitOrder({
                            a: 39,
                            type: 23
                        });
                    }, 900);
                    return true;
                } else if (RESP.buff_clan && GAME.klan_data != undefined && abut.length && !isDisabled) {
                    $(" .newBtn.activate_all_clan_buffs").click();
                    return true;
                }
                return false;
            };
            RESP.min_pa = () => {
                if (GAME.char_data.doubler_rate && GAME.char_data.doubler_rate > 19) {
                    var cal_sub = GAME.char_data.doubler_rate;
                    var spawner = GAME.spawner[0];
                    var pa_mult = cal_sub * RESP.MF() + parseInt(spawner);
                    return pa_mult;
                } else {
                    var spawner = GAME.spawner[0];
                    var pa_mult = parseInt(spawner);
                    return pa_mult;
                }
            };
            RESP.action = () => {
                if (!RESP.stop) {
                    if (!RESP.check() && !RESP.check_bless()) {
                        setTimeout(() => {
                            if (RESP.MF() > 0) {
                                RESP.fight();
                            } else {
                                RESP.go();
                            }
                        }, RESP.wait);
                    } else {
                        setTimeout(() => {
                            RESP.action();
                            kom_clear();
                        }, 1700);
                    }
                }
            };
            RESP.fight = () => {
                if (RESP.reload) {
                    setTimeout(() => {
                        GAME.maploaded = false;
                        GAME.prepareMap();
                    }, 300);
                    RESP.reload = false;
                }
                if ((RESP.MF() > 0 && GAME.field_mf[GAME.field_mob_id - 1] < 0) && GAME.field_mobs[GAME.field_mob_id - 1].ranks[0] || (RESP.MF() > 0 && GAME.field_mf[GAME.field_mob_id - 1] < 1 && GAME.field_mobs[GAME.field_mob_id - 1].ranks[1]) || (RESP.MF() > 0 && GAME.field_mf[GAME.field_mob_id - 1] < 2 && GAME.field_mobs[GAME.field_mob_id - 1].ranks[2]) || (RESP.MF() > 0 && GAME.field_mf[GAME.field_mob_id - 1] < 3 && GAME.field_mobs[GAME.field_mob_id - 1].ranks[3]) || (RESP.MF() > 0 && GAME.field_mf[GAME.field_mob_id - 1] < 4 && GAME.field_mobs[GAME.field_mob_id - 1].ranks[4]) || (RESP.MF() > 0 && GAME.field_mf[GAME.field_mob_id - 1] < 5 && GAME.field_mobs[GAME.field_mob_id - 1].ranks[5]) || !RESP.multifight) {
                    GAME.socket.emit('ga', {
                        a: 7,
                        order: 2,
                        quick: 1,
                        fo: GAME.map_options.ma
                    });
                } else if (RESP.MF2() > 0) {
                    GAME.socket.emit('ga', {
                        a: 13,
                        mob_num: GAME.field_mob_id,
                        fo: GAME.map_options.ma
                    })
                } else {
                    GAME.socket.emit('ga', {
                        a: 444,
                        max: GAME.spawner[0],
                        ignore: GAME.spawner[1]
                    });
                }
                RESP.action();
            };
            RESP.reload_map = () => {
                RESP.reload = true;
            };
            RESP.MF = () => {
                var r = 0;
                if (GAME.field_mobs) {
                    for (i = 0; i < GAME.map_options.ma.length; i++) {
                        if (GAME.map_options.ma[i] === 1) {
                            r += parseInt(GAME.field_mobs[0].ranks[i]);
                            if (GAME.field_mobs[1]) {
                                r += parseInt(GAME.field_mobs[1].ranks[i]);
                            }
                            if (GAME.field_mobs[2]) {
                                r += parseInt(GAME.field_mobs[2].ranks[i]);
                            }
                            if (GAME.field_mobs[3]) {
                                r += parseInt(GAME.field_mobs[3].ranks[i]);
                            }
                        }
                    }
                }
                return r;
            };
            RESP.MF2 = () => {
                var r = 0;
                for (i = 0; i < GAME.map_options.ma.length; i++) {
                    if (GAME.field_mob_id < GAME.field_mobs.length && "ranks" in GAME.field_mobs[GAME.field_mob_id] && GAME.map_options.ma[i] === 1) {
                        r += parseInt(GAME.field_mobs[GAME.field_mob_id].ranks[i]);
                    }
                }
                return r;
            };
            RESP.go = () => {
                GAME.socket.emit('ga', {
                    a: 444,
                    max: GAME.spawner[0],
                    ignore: GAME.spawner[1]
                });
                RESP.action();
            };
            RESP.check_bless = () => {
                var błogo1 = $("#ekw_page_items").find("div[data-base_item_id=1801]").attr("data-item_id");
                var błogo2 = $("#ekw_page_items").find("div[data-base_item_id=1628]").attr("data-item_id");
                var błogo3 = $("#ekw_page_items").find("div[data-base_item_id=1630]").attr("data-item_id");
                var błogo4 = $("#ekw_page_items").find("div[data-base_item_id=1796]").attr("data-item_id");
                var błogo5 = $("#ekw_page_items").find("div[data-base_item_id=1794]").attr("data-item_id");
                var błogo6 = $("#ekw_page_items").find("div[data-base_item_id=1792]").attr("data-item_id");
                var błogo7 = $("#ekw_page_items").find("div[data-base_item_id=1790]").attr("data-item_id");
                var błogo8 = $("#ekw_page_items").find("div[data-base_item_id=1745]").attr("data-item_id");
                var błogo9 = $("#ekw_page_items").find("div[data-base_item_id=1608]").attr("data-item_id");
                var błogo10 = $("#ekw_page_items").find("div[data-base_item_id=1559]").attr("data-item_id");
                var błogo11 = $("#ekw_page_items").find("div[data-base_item_id=1795]").attr("data-item_id");
                var błogo12 = $("#ekw_page_items").find("div[data-base_item_id=1793]").attr("data-item_id");
                var błogo13 = $("#ekw_page_items").find("div[data-base_item_id=1753]").attr("data-item_id");
                var błogo14 = $("#ekw_page_items").find("div[data-base_item_id=1752]").attr("data-item_id");
                var błogo15 = $("#ekw_page_items").find("div[data-base_item_id=1751]").attr("data-item_id");
                var błogo16 = $("#ekw_page_items").find("div[data-base_item_id=1742]").attr("data-item_id");
                var błogo17 = $("#ekw_page_items").find("div[data-base_item_id=1747]").attr("data-item_id");
                var błogo18 = $("#ekw_page_items").find("div[data-base_item_id=1746]").attr("data-item_id");
                if (GAME.ekw_page != 10) {
                    GAME.ekw_page = 10;
                    GAME.socket.emit('ga', {
                        a: 12,
                        page: 10,
                        used: 1
                    });
                    return true;
                } else if (($("#char_buffs").find("[data-buff=100]").length != 1 || $("#char_buffs").find("[data-buff=100]").find(".timer").text() <= '00:00:04') && RESP.b1 && błogo1 && RESP.bless) {
                    GAME.socket.emit('ga', {
                        a: 12,
                        type: 14,
                        iid: parseInt(błogo1),
                        page: 10
                    });
                    return true;
                } else if (($("#char_buffs").find("[data-buff=53]").length != 1 || $("#char_buffs").find("[data-buff=53]").find(".timer").text() <= '00:00:04') && RESP.b2 && błogo2 && RESP.bless) {
                    GAME.socket.emit('ga', {
                        a: 12,
                        type: 14,
                        iid: parseInt(błogo2),
                        page: 10
                    });
                    return true;
                } else if (($("#char_buffs").find("[data-buff=55]").length != 1 || $("#char_buffs").find("[data-buff=55]").find(".timer").text() <= '00:00:04') && RESP.b3 && błogo3 && RESP.bless) {
                    GAME.socket.emit('ga', {
                        a: 12,
                        type: 14,
                        iid: parseInt(błogo3),
                        page: 10
                    });
                    return true;
                } else if (($("#char_buffs").find("[data-buff=96]").length != 1 || $("#char_buffs").find("[data-buff=96]").find(".timer").text() <= '00:00:04') && RESP.b4 && błogo4 && RESP.bless) {
                    GAME.socket.emit('ga', {
                        a: 12,
                        type: 14,
                        iid: parseInt(błogo4),
                        page: 10
                    });
                    return true;
                } else if (($("#char_buffs").find("[data-buff=94]").length != 1 || $("#char_buffs").find("[data-buff=94]").find(".timer").text() <= '00:00:04') && RESP.b5 && błogo5 && RESP.bless) {
                    GAME.socket.emit('ga', {
                        a: 12,
                        type: 14,
                        iid: parseInt(błogo5),
                        page: 10
                    });
                    return true;
                } else if (($("#char_buffs").find("[data-buff=92]").length != 1 || $("#char_buffs").find("[data-buff=92]").find(".timer").text() <= '00:00:04') && RESP.b6 && błogo6 && RESP.bless) {
                    GAME.socket.emit('ga', {
                        a: 12,
                        type: 14,
                        iid: parseInt(błogo6),
                        page: 10
                    });
                    return true;
                } else if (($("#char_buffs").find("[data-buff=90]").length != 1 || $("#char_buffs").find("[data-buff=90]").find(".timer").text() <= '00:00:04') && RESP.b7 && błogo7 && RESP.bless) {
                    GAME.socket.emit('ga', {
                        a: 12,
                        type: 14,
                        iid: parseInt(błogo7),
                        page: 10
                    });
                    return true;
                } else if (($("#char_buffs").find("[data-buff=74]").length != 1 || $("#char_buffs").find("[data-buff=74]").find(".timer").text() <= '00:00:04') && RESP.b8 && błogo8 && RESP.bless) {
                    GAME.socket.emit('ga', {
                        a: 12,
                        type: 14,
                        iid: parseInt(błogo8),
                        page: 10
                    });
                    return true;
                } else if (($("#char_buffs").find("[data-buff=52]").length != 1 || $("#char_buffs").find("[data-buff=52]").find(".timer").text() <= '00:00:04') && RESP.b9 && błogo9 && RESP.bless) {
                    GAME.socket.emit('ga', {
                        a: 12,
                        type: 14,
                        iid: parseInt(błogo9),
                        page: 10
                    });
                    return true;
                } else if (($("#char_buffs").find("[data-buff=50]").length != 1 || $("#char_buffs").find("[data-buff=50]").find(".timer").text() <= '00:00:04') && RESP.b10 && błogo10 && RESP.bless) {
                    GAME.socket.emit('ga', {
                        a: 12,
                        type: 14,
                        iid: parseInt(błogo10),
                        page: 10
                    });
                    return true;
                } else if (($("#char_buffs").find("[data-buff=95]").length != 1 || $("#char_buffs").find("[data-buff=95]").find(".timer").text() <= '00:00:04') && RESP.b11 && błogo11) {
                    GAME.socket.emit('ga', {
                        a: 12,
                        type: 14,
                        iid: parseInt(błogo11),
                        page: 10
                    });
                    return true;
                } else if (($("#char_buffs").find("[data-buff=93]").length != 1 || $("#char_buffs").find("[data-buff=93]").find(".timer").text() <= '00:00:04') && RESP.b12 && błogo12) {
                    GAME.socket.emit('ga', {
                        a: 12,
                        type: 14,
                        iid: parseInt(błogo12),
                        page: 10
                    });
                    return true;
                } else if (($("#char_buffs").find("[data-buff=82]").length != 1 || $("#char_buffs").find("[data-buff=82]").find(".timer").text() <= '00:00:04') && RESP.b13 && błogo13) {
                    GAME.socket.emit('ga', {
                        a: 12,
                        type: 14,
                        iid: parseInt(błogo13),
                        page: 10
                    });
                    return true;
                } else if (($("#char_buffs").find("[data-buff=81]").length != 1 || $("#char_buffs").find("[data-buff=81]").find(".timer").text() <= '00:00:04') && RESP.b14 && błogo14) {
                    GAME.socket.emit('ga', {
                        a: 12,
                        type: 14,
                        iid: parseInt(błogo14),
                        page: 10
                    });
                    return true;
                } else if (($("#char_buffs").find("[data-buff=80]").length != 1 || $("#char_buffs").find("[data-buff=80]").find(".timer").text() <= '00:00:04') && RESP.b15 && błogo15) {
                    GAME.socket.emit('ga', {
                        a: 12,
                        type: 14,
                        iid: parseInt(błogo15),
                        page: 10
                    });
                    return true;
                } else if (($("#char_buffs").find("[data-buff=71]").length != 1 || $("#char_buffs").find("[data-buff=71]").find(".timer").text() <= '00:00:04') && RESP.b16 && błogo16) {
                    GAME.socket.emit('ga', {
                        a: 12,
                        type: 14,
                        iid: parseInt(błogo16),
                        page: 10
                    });
                    return true;
                } else if (($("#char_buffs").find("[data-buff=76]").length != 1 || $("#char_buffs").find("[data-buff=76]").find(".timer").text() <= '00:00:04') && RESP.b17 && błogo17) {
                    GAME.socket.emit('ga', {
                        a: 12,
                        type: 14,
                        iid: parseInt(błogo17),
                        page: 10
                    });
                    return true;
                } else if (($("#char_buffs").find("[data-buff=75]").length != 1 || $("#char_buffs").find("[data-buff=75]").find(".timer").text() <= '00:00:04') && RESP.b18 && błogo18) {
                    GAME.socket.emit('ga', {
                        a: 12,
                        type: 14,
                        iid: parseInt(błogo18),
                        page: 10
                    });
                    return true;
                }
                return false;
            };
            RESP.getSenzu = (type) => {
                switch (type) {
                    case RESP.SENZU_BLUE:
                        return GAME.quick_opts.senzus.find(senzu => senzu.item_id === 1244);
                    case RESP.SENZU_PURPLE:
                        return GAME.quick_opts.senzus.find(senzu => senzu.item_id === 1259);
                    case RESP.SENZU_MAGIC:
                        return GAME.quick_opts.senzus.find(senzu => senzu.item_id === 1309);
                    case RESP.SENZU_GREEN:
                        return GAME.quick_opts.senzus.find(senzu => senzu.item_id === 1242);
                    case RESP.SENZU_YELLOW:
                        return GAME.quick_opts.senzus.find(senzu => senzu.item_id === 1260);
                    case RESP.SENZU_RED:
                        return GAME.quick_opts.senzus.find(senzu => senzu.item_id === 1243);
                }
            };
            RESP.useSenzu = () => {
                if (RESP.stop) return;
                const blue = RESP.getSenzu(RESP.SENZU_BLUE);
                const purple = RESP.getSenzu(RESP.SENZU_PURPLE);
                const magic = RESP.getSenzu(RESP.SENZU_MAGIC);
                const green = RESP.getSenzu(RESP.SENZU_GREEN);
                const yellow = RESP.getSenzu(RESP.SENZU_YELLOW);
                const red = RESP.getSenzu(RESP.SENZU_RED);
                switch (RESP.CONF_SENZU) {
                    case RESP.SENZU_BLUE:
                        RESP.useBlue(Math.min(RESP.CONF_BLUE_AMOUNT(), blue.stack, RESP.CONF_BLUE_AMOUNT1));
                        break;
                    case RESP.SENZU_PURPLE:
                        RESP.usePurple(Math.min(RESP.CONF_PURPLE_AMOUNT, purple.stack));
                        break;
                    case RESP.SENZU_MAGIC:
                        RESP.useMagic();
                        break;
                    case RESP.SENZU_GREEN:
                        RESP.useGreen(Math.min(RESP.CONF_GREEN_AMOUNT(), green.stack, RESP.CONF_GREEN_AMOUNT1));
                        break;
                    case RESP.SENZU_YELLOW:
                        RESP.useYellow(Math.min(RESP.CONF_YELLOW_AMOUNT, yellow.stack));
                        break;
                    case RESP.SENZU_RED:
                        RESP.useRed();
                        break;
                    default:
                        if (blue && blue.stack > RESP.CONF_BLUE_AMOUNT() * 20) RESP.useBlue(Math.min(RESP.CONF_BLUE_AMOUNT(), blue.stack, RESP.CONF_BLUE_AMOUNT1));
                        else if (green && green.stack > RESP.CONF_GREEN_AMOUNT() * 5) RESP.useGreen(Math.min(RESP.CONF_GREEN_AMOUNT(), green.stack, RESP.CONF_GREEN_AMOUNT1));
                        else if (red && red.stack > 0) RESP.useRed();
                }
            };
            RESP.useBlue = (amount = RESP.CONF_BLUE_AMOUNT()) => {
                const blue = RESP.getSenzu(RESP.SENZU_BLUE);
                if (!blue) {
                    return;
                }
                GAME.socket.emit('ga', {
                    a: 12,
                    type: 14,
                    iid: blue.id,
                    page: GAME.ekw_page,
                    am: amount
                });
            };
            RESP.useGreen = (amount = RESP.CONF_GREEN_AMOUNT()) => {
                const green = RESP.getSenzu(RESP.SENZU_GREEN);
                if (!green) {
                    return;
                }
                GAME.socket.emit('ga', {
                    a: 12,
                    type: 14,
                    iid: green.id,
                    page: GAME.ekw_page,
                    am: amount
                });
            };
            RESP.usePurple = (amount = RESP.CONF_PURPLE_AMOUNT) => {
                const purple = RESP.getSenzu(RESP.SENZU_PURPLE);
                if (!purple) {
                    return;
                }
                GAME.socket.emit('ga', {
                    a: 12,
                    type: 14,
                    iid: purple.id,
                    page: GAME.ekw_page,
                    am: amount
                });
            };
            RESP.useYellow = (amount = RESP.CONF_YELLOW_AMOUNT) => {
                const yellow = RESP.getSenzu(RESP.SENZU_YELLOW);
                if (!yellow) {
                    return;
                }
                GAME.socket.emit('ga', {
                    a: 12,
                    type: 14,
                    iid: yellow.id,
                    page: GAME.ekw_page,
                    am: amount
                });
            };
            RESP.useRed = () => {
                const red = RESP.getSenzu(RESP.SENZU_RED);
                if (!red) {
                    return;
                }
                GAME.socket.emit('ga', {
                    a: 12,
                    type: 14,
                    iid: red.id,
                    page: GAME.ekw_page,
                    am: 1
                });
            };
            RESP.useMagic = () => {
                const magic = RESP.getSenzu(RESP.SENZU_MAGIC);
                if (!magic) {
                    return;
                }
                GAME.socket.emit('ga', {
                    a: 12,
                    type: 14,
                    iid: magic.id,
                    page: GAME.ekw_page,
                    am: 1
                });
            };
            var LPVM = {
                Stop: true,
                Matrix: [],
                Map: 0,
                Path: [],
                Born: 2,
                pvm_killed: 0,
                limit: false,
                Killed: false,
                wait: 70,
                limit2: 60
            };
            LPVM.UpdateKilledCounter = function(num) {
                $("#lpvm_Panel .pvm_killed b").text(num);
            };
            LPVM.Start = function() {
                LPVM.LoadPVM();
            };
            LPVM.CreateMatrix = function() {
                LPVM.Matrix = [];
                LPVM.Map = GAME.mapcell;
                for (var i = 0; i < parseInt(GAME.map.max_y); i++) {
                    LPVM.Matrix[i] = [];
                    for (var j = 0; j < parseInt(GAME.map.max_x); j++) {
                        if (LPVM.Map[parseInt(j + 1) + '_' + parseInt(i + 1)].m == 1) {
                            LPVM.Matrix[i][j] = 1;
                        } else {
                            LPVM.Matrix[i][j] = 0
                        }
                    }
                }
            };
            LPVM.LoadPVM = function() {
                GAME.socket.emit('ga', {
                    a: 32,
                    type: 0
                });
            };
            LPVM.KillWanted = function() {
                if (document.getElementById("special_list_con").childElementCount) {
                    LPVM.Killed = true;
                    GAME.socket.emit('ga', {
                        a: 32,
                        type: 1,
                        wanted_id: LPVM.Born,
                        quick: 1
                    });
                }
            };
            LPVM.Collect = function() {
                GAME.socket.emit('ga', {
                    a: 32,
                    type: 2,
                    wanted: LPVM.Born
                });
                LPVM.pvm_killed++;
                LPVM.UpdateKilledCounter(LPVM.pvm_killed);
            };
            LPVM.Teleport = function() {
                var loc = parseInt($("#wanted_list .green.option").eq(LPVM.Born).attr("data-loc"));
                if ((LPVM.pvm_killed >= parseInt(LPVM.limit2)) && LPVM.limit) {
                    $(".lpvm_lpvm .lpvm_status").removeClass("green").addClass("red").html("Off");
                    LPVM.Stop = true;
                } else if (GAME.char_data != loc) {
                    GAME.socket.emit('ga', {
                        a: 12,
                        type: 18,
                        loc: loc
                    });
                    setTimeout(3000);
                } else {
                    LPVM.Go();
                }
            };
            LPVM.Go = function() {
                LPVM.CreateMatrix();
                LPVM.Finder.setGrid(LPVM.Matrix);
                PathID = LPVM.Finder.findPath(GAME.char_data.x - 1, GAME.char_data.y - 1, parseInt(GAME.map_wanteds.x) - 1, parseInt(GAME.map_wanteds.y) - 1, function(path) {
                    if (path === null) {} else {
                        if (path[0].x == GAME.char_data.x - 1 && path[0].y == GAME.char_data.y - 1) {
                            path.shift();
                        }
                        LPVM.Path = path;
                        setTimeout(function() {
                            LPVM.Move();
                        }, LPVM.wait);
                    }
                });
                LPVM.Finder.calculate();
            };
            LPVM.Move = function() {
                if (!LPVM.Stop) {
                    if (LPVM.Path[0].x > GAME.char_data.x - 1 && LPVM.Path[0].y == GAME.char_data.y - 1) {
                        GAME.socket.emit('ga', {
                            a: 4,
                            dir: 7,
                            vo: GAME.map_options.vo
                        });
                    } else if (LPVM.Path[0].x < GAME.char_data.x - 1 && LPVM.Path[0].y == GAME.char_data.y - 1) {
                        GAME.socket.emit('ga', {
                            a: 4,
                            dir: 8,
                            vo: GAME.map_options.vo
                        });
                    } else if (LPVM.Path[0].x == GAME.char_data.x - 1 && LPVM.Path[0].y > GAME.char_data.y - 1) {
                        GAME.socket.emit('ga', {
                            a: 4,
                            dir: 1,
                            vo: GAME.map_options.vo
                        });
                    } else if (LPVM.Path[0].x == GAME.char_data.x - 1 && LPVM.Path[0].y < GAME.char_data.y - 1) {
                        GAME.socket.emit('ga', {
                            a: 4,
                            dir: 2,
                            vo: GAME.map_options.vo
                        });
                    } else if (LPVM.Path[0].x > GAME.char_data.x - 1 && LPVM.Path[0].y > GAME.char_data.y - 1) {
                        GAME.socket.emit('ga', {
                            a: 4,
                            dir: 3,
                            vo: GAME.map_options.vo
                        });
                    } else if (LPVM.Path[0].x < GAME.char_data.x - 1 && LPVM.Path[0].y < GAME.char_data.y - 1) {
                        GAME.socket.emit('ga', {
                            a: 4,
                            dir: 6,
                            vo: GAME.map_options.vo
                        });
                    } else if (LPVM.Path[0].x > GAME.char_data.x - 1 && LPVM.Path[0].y < GAME.char_data.y - 1) {
                        GAME.socket.emit('ga', {
                            a: 4,
                            dir: 5,
                            vo: GAME.map_options.vo
                        });
                    } else if (LPVM.Path[0].x < GAME.char_data.x - 1 && LPVM.Path[0].y > GAME.char_data.y - 1) {
                        GAME.socket.emit('ga', {
                            a: 4,
                            dir: 4,
                            vo: GAME.map_options.vo
                        });
                    } else {
                        LPVM.Go();
                    }
                }
            };
            LPVM.Next = function() {
                if (LPVM.Path.length - 1 > 0) {
                    LPVM.Path.shift();
                    setTimeout(function() {
                        LPVM.Move();
                    }, LPVM.wait);
                } else {
                    setTimeout(function() {
                        LPVM.KillWanted();
                    }, 500);
                }
            };
            LPVM.HandleSockets = function(res) {
                if (!LPVM.Stop && res.a === 4 && res.char_id === GAME.char_id) {
                    LPVM.Next();
                } else if (!LPVM.Stop && res.a === 32 && res.e == 0) {
                    if ($('button[data-wanted="' + LPVM.Born + '"]').html()) {
                        setTimeout(function() {
                            GAME.socket.emit('ga', {
                                a: 32,
                                type: 2,
                                wanted: LPVM.Born
                            });
                        }, 150);
                    } else {
                        setTimeout(function() {
                            LPVM.Teleport();
                        }, 150);
                    }
                } else if (!LPVM.Stop && LPVM.Killed && res.a === 602 && !res.res.wanted) {
                    LPVM.Killed = false;
                    setTimeout(function() {
                        LPVM.Collect();
                    }, 150);
                } else if (!LPVM.Stop && res.a === 32 && res.e == 2) {
                    setTimeout(function() {
                        LPVM.Teleport();
                    }, 150);
                } else if (!LPVM.Stop && res.a === 12) {
                    if ("show_map" in res) {
                        if (GAME.char_data.x == GAME.map_wanteds.x && GAME.char_data.y == GAME.map_wanteds.y) {
                            setTimeout(function() {
                                LPVM.KillWanted();
                            }, 500);
                        } else {
                            setTimeout(function() {
                                LPVM.Go();
                            }, 1000);
                        }
                    } else {
                        setTimeout(() => {
                            GAME.socket.emit('ga', {
                                a: 32,
                                type: 0
                            });
                        }, 100);
                    }
                } else if (!LPVM.stop && res.a === undefined) {
                    setTimeout(() => {
                        LPVM.Go();
                    }, 500);
                }
            };
            GAME.socket.on('gr', function(msg) {
                LPVM.HandleSockets(msg);
            });
            LPVM.LoadES = function() {
                esjs = document.createElement('script');
                esjs.src = 'https://cdn.jsdelivr.net/npm/easystarjs@0.4.3/bin/easystar-0.4.3.min.js';
                esjs.onload = () => {
                    LPVM.Finder = new EasyStar.js();
                    LPVM.Finder.enableDiagonals();
                    LPVM.Finder.setAcceptableTiles([1]);
                    $("#BOT_control").show();
                };
                document.head.append(esjs);
            }();
            var RES = {
                stop: true,
                last_loc: 0,
                mapcell: false,
                matrix: [],
                steps: [],
                steps_clone: [],
                path: [],
                processing: false,
                mines: [],
                last_mine: 0,
                speed: 100,
                mined_id: [],
                refresh_mines: true,
                first_mine: [],
                loc: GAME.char_data.loc
            };
            RES.emitOrder = function(data) {
                if (!this.processing) {
                    this.processing = true;
                    GAME.socket.emit('ga', data);
                }
            };
            RES.Start = function() {
                if (this.last_loc != GAME.char_data.loc) {
                    this.CreateMatrix();
                    this.last_loc = GAME.char_data.loc;
                }
                if (this.refresh_mines) {
                    this.getMinesPos();
                    this.refresh_mines = false;
                }
                this.steps_clone = this.steps.slice();
                if (this.steps_clone[0][0] == GAME.char_data.x && this.steps_clone[0][1] == GAME.char_data.y) {
                    this.steps_clone.shift();
                }
                this.finder.setGrid(this.matrix);
                setTimeout(function() {
                    RES.Action();
                }, 120);
            };
            RES.Action = function() {
                RES.stop = false;
                if (!this.processing) {
                    this.Go();
                } else {
                    setTimeout(function() {
                        RES.Action();
                    }, 1200);
                }
            };
            RES.GetCooldown = function() {
                if (Object.entries(GAME.map_mines.mine_data).length > 0 && GAME.map_mines.coords[parseInt(GAME.char_data.x) + "_" + parseInt(GAME.char_data.y)][0][2] > 0) {
                    cd = GAME.map_mines.coords[parseInt(GAME.char_data.x) + "_" + parseInt(GAME.char_data.y)][0][2] - GAME.getTime();
                    cd += 5;
                    r = cd * 1000;
                    $(".bt_cool").html(GAME.showTimer(r / 1000));
                } else {
                    r = 1000;
                }
                return r;
            };
            RES.getMinesPos = function() {
                coords = Object.entries(GAME.map_mines.coords);
                var mines = [];
                for (i = 0; i < coords.length; i++) {
                    if (this.mined_id.includes(coords[i][1][0][1])) {
                        mines.push(coords[i]);
                    }
                }
                this.prepareMines(mines);
            };
            RES.prepareMines = function(mines) {
                this.steps = [];
                for (i = 0; i < mines.length; i++) {
                    pos = mines[i][0].split("_");
                    if (i == 0) {
                        RES.first_mine = [parseInt(pos[0]), parseInt(pos[1])];
                    }
                    this.steps.push([parseInt(pos[0]), parseInt(pos[1])]);
                    this.mines[pos[0] + "_" + pos[1]] = mines[i][1][0][0];
                    if (i == 0) {
                        this.last_mine = pos[0] + "_" + pos[1];
                    }
                }
                this.steps.push(RES.first_mine);
            };
            RES.listMines = function() {
                html = "";
                mdt = Object.entries(GAME.map_mines.mine_data);
                for (i = 0; i < mdt.length; i++) {
                    if (i == 0) {
                        RES.mined_id.push(mdt[i][1].id);
                        html += "<div style='margin-bottom:5px; border-bottom:solid gray 1px; padding:3px;'><input class='select_mine' type='checkbox' checked='true' value='" + mdt[i][1].id + "' " + ((mdt.length == 1) ? "disabled" : '') + "> " + mdt[i][1].name + "</div>";
                    } else {
                        html += "<div style='margin-bottom:5px; border-bottom:solid gray 1px; padding:3px;'><input class='select_mine' type='checkbox' value='" + mdt[i][1].id + "'> " + mdt[i][1].name + "</div>";
                    }
                }
                $("#res_Panel ul").html(html);
                if (mdt.length == 0) {
                    $("#res_Panel ul").html("Brak zasobów");
                }
            };
            RES.FindMapcell = function() {
                this.mapcell = Object.keys(GAME).find(z => GAME[z] && GAME[z]['1_1']);
                return this.mapcell;
            };
            RES.CreateMatrix = function() {
                for (var i = 0; i < parseInt(GAME.map.max_y); i++) {
                    this.matrix[i] = [];
                    for (var j = 0; j < parseInt(GAME.map.max_x); j++) {
                        if (GAME.mapcell[parseInt(j + 1) + '_' + parseInt(i + 1)].m == 1) {
                            this.matrix[i][j] = 1;
                        } else {
                            this.matrix[i][j] = 0
                        }
                    }
                }
            };
            RES.Mine = function() {
                GAME.socket.emit('ga', {
                    a: 22,
                    type: 8,
                    mid: RES.mines[parseInt(GAME.char_data.x) + "_" + parseInt(GAME.char_data.y)]
                });
            };
            RES.Go = function() {
                if (this.steps_clone.length > 0) {
                    this.finder.findPath(GAME.char_data.x - 1, GAME.char_data.y - 1, this.steps_clone[0][0] - 1, this.steps_clone[0][1] - 1, function(path) {
                        if (path === null) {} else {
                            RES.path = path;
                            if (RES.steps_clone.length > 0) {
                                RES.path.shift();
                                cur = [GAME.char_data.x, GAME.char_data.y];
                                setTimeout(() => {
                                    if (!RES.stop && RES.mines[parseInt(GAME.char_data.x) + "_" + parseInt(GAME.char_data.y)] && $("button[data-mid='" + RES.mines[parseInt(GAME.char_data.x) + "_" + parseInt(GAME.char_data.y)] + "']").length == 1 && RES.steps.some(r => r.length == cur.length && r.every((value, index) => cur[index] == value))) {
                                        setTimeout(function() {
                                            RES.Mine();
                                        }, RES.speed);
                                    } else if (!RES.stop) {
                                        setTimeout(function() {
                                            RES.Move();
                                        }, RES.speed);
                                    }
                                }, 1200);
                            }
                        }
                    });
                    this.finder.calculate();
                } else if (!RES.stop && (GAME.char_data.x + "_" + GAME.char_data.y) == this.last_mine) {
                    setTimeout(function() {
                        RES.Mine();
                    }, 1200);
                    this.cdt = setTimeout(function() {
                        if (!RES.stop) {
                            GAME.loadMapJson(function() {
                                GAME.socket.emit('ga', {
                                    a: 3,
                                    vo: GAME.map_options.vo
                                }, 1);
                            });
                            setTimeout(function() {
                                RES.Start();
                            }, 2400);
                            $(".bt_cool").html("");
                        }
                    }, this.GetCooldown());
                }
            };
            RES.Move = function() {
                if (!RES.stop) {
                    if (this.path[0].x > GAME.char_data.x - 1 && this.path[0].y == GAME.char_data.y - 1) {
                        GAME.socket.emit('ga', {
                            a: 4,
                            dir: 7,
                            vo: GAME.map_options.vo
                        });
                    } else if (this.path[0].x < GAME.char_data.x - 1 && this.path[0].y == GAME.char_data.y - 1) {
                        GAME.socket.emit('ga', {
                            a: 4,
                            dir: 8,
                            vo: GAME.map_options.vo
                        });
                    } else if (this.path[0].x == GAME.char_data.x - 1 && this.path[0].y > GAME.char_data.y - 1) {
                        GAME.socket.emit('ga', {
                            a: 4,
                            dir: 1,
                            vo: GAME.map_options.vo
                        });
                    } else if (this.path[0].x == GAME.char_data.x - 1 && this.path[0].y < GAME.char_data.y - 1) {
                        GAME.socket.emit('ga', {
                            a: 4,
                            dir: 2,
                            vo: GAME.map_options.vo
                        });
                    } else if (this.path[0].x > GAME.char_data.x - 1 && this.path[0].y > GAME.char_data.y - 1) {
                        GAME.socket.emit('ga', {
                            a: 4,
                            dir: 3,
                            vo: GAME.map_options.vo
                        });
                    } else if (this.path[0].x < GAME.char_data.x - 1 && this.path[0].y < GAME.char_data.y - 1) {
                        GAME.socket.emit('ga', {
                            a: 4,
                            dir: 6,
                            vo: GAME.map_options.vo
                        });
                    } else if (this.path[0].x > GAME.char_data.x - 1 && this.path[0].y < GAME.char_data.y - 1) {
                        GAME.socket.emit('ga', {
                            a: 4,
                            dir: 5,
                            vo: GAME.map_options.vo
                        });
                    } else if (this.path[0].x < GAME.char_data.x - 1 && this.path[0].y > GAME.char_data.y - 1) {
                        GAME.socket.emit('ga', {
                            a: 4,
                            dir: 4,
                            vo: GAME.map_options.vo
                        });
                    } else {
                        this.Go();
                    }
                }
            };
            RES.Next = function() {
                if (this.path.length - 1 > 0) {
                    this.path.shift();
                    setTimeout(function() {
                        RES.Move();
                    }, this.speed);
                } else {
                    if (this.steps_clone.length > 0) {
                        this.steps_clone.shift();
                        this.Go();
                    }
                }
            };
            RES.HandleResponse = function(res) {
                if (RES.stop && res.a === 3 && PVP.stop && LPVM.Stop && RESP.stop && CODE.stop) {
                    this.listMines();
                    this.getMinesPos();
                }
                if (res.a === 3 && RES.loc != GAME.char_data.loc) {
                    RES.stop = true;
                    $(".res_res .res_status").removeClass("green").addClass("red").html("Off");
                    $(".bt_cool").html("");
                    clearTimeout(RES.cdt);
                }
                if (res.a === 3 && RESP.loc != GAME.char_data.loc) {
                    RESP.stop = true;
                    $(".resp_resp .resp_status").removeClass("green").addClass("red").html("Off");
                }
                this.processing = false;
                if (!RES.stop && res.a === 4 && res.char_id === GAME.char_id) {
                    RES.Next();
                } else if (!RES.stop && res.done && res.a === 22) {
                    $("button[data-option='start_mine']").remove();
                    RES.Go();
                }
            };
            GAME.socket.on('gr', function(res) {
                RES.HandleResponse(res);
            });
            RES.LoadES = function() {
                esjs = document.createElement('script');
                esjs.src = 'https://cdn.jsdelivr.net/npm/easystarjs@0.4.3/bin/easystar-0.4.3.min.js';
                esjs.onload = () => {
                    RES.finder = new EasyStar.js();
                    RES.finder.enableDiagonals();
                    RES.finder.setAcceptableTiles([1]);
                };
                document.head.append(esjs);
            }();
            setTimeout(() => {
                if (GAME.maploaded) {
                    RES.listMines();
                }
            }, 500);
            var CODE = {
                char: document.getElementById("char_list_con").children[0].attributes[2].value,
                what_to_train: 1,
                what_to_traintime: 1,
                whatNow: 0,
                licznik: 0,
                licznik2: 0,
                stop: true,
                wait: 2000,
                checkSSJ: true,
                acc: false,
                zast: false,
                b1: false,
                b2: false
            };
            CODE.start = () => {
                if (!CODE.stop) {
                    switch (CODE.whatNow) {
                        case 0:
                            CODE.whatNow++;
                            CODE.use_char();
                            break;
                        case 1:
                            CODE.whatNow++;
                            CODE.checkTR();
                            break;
                        case 2:
                            CODE.whatNow++;
                            CODE.tren();
                            break;
                        case 3:
                            CODE.whatNow++;
                            CODE.kodyy();
                            break;
                        case 4:
                            CODE.whatNow = 0;
                            CODE.out();
                            break;
                        default:
                    }
                }
            };
            CODE.get_char_acc = () => {
                var len = GAME.player_chars;
                var tabela = [];
                for (var i = 0; i < len; i++) {
                    tabela[i] = parseInt($("#char_list_con")[0].children[i].attributes[2].value);
                }
                return tabela;
            };
            CODE.get_char_zast = () => {
                var len = $("#zast_list_con li").length;
                var tabela = [];
                for (var i = 0; i < len; i++) {
                    tabela[i] = document.getElementById("zast_list_con").children[i].attributes[2].value;
                }
                return tabela;
            };
            CODE.use_char = () => {
                var length = CODE.get_char_acc().length;
                var length2 = CODE.get_char_zast().length;
                if (CODE.licznik < length && CODE.acc) {
                    GAME.socket.emit('ga', {
                        a: 2,
                        char_id: CODE.get_char_acc()[CODE.licznik]
                    });
                    CODE.licznik++;
                    window.setTimeout(CODE.start, CODE.wait);
                } else if (CODE.licznik2 < length2 && CODE.zast) {
                    GAME.socket.emit('ga', {
                        a: 2,
                        char_id: CODE.get_char_zast()[CODE.licznik2],
                        type: 1
                    });
                    CODE.licznik2++;
                    window.setTimeout(CODE.start, CODE.wait);
                } else {
                    CODE.licznik = 0;
                    CODE.licznik2 = 0;
                    window.setTimeout(CODE.start, CODE.wait);
                }
            };
            CODE.kodyy = () => {
                let błogo2 = $("#ekw_page_items").find("div[data-base_item_id=1751]").attr("data-item_id");
                if (GAME.ekw_page != 10 && !CODE.acc && !CODE.zast) {
                    GAME.ekw_page = 10;
                    GAME.socket.emit('ga', {
                        a: 12,
                        page: 10,
                        used: 1
                    });
                    window.setTimeout(CODE.kodyy, CODE.wait);
                } else if ($("#char_buffs").find("[data-buff=80]").length != 1 && $("#train_uptime").find('.timer').length == 0 && błogo2 && CODE.b2 && !CODE.acc && !CODE.zast && !CODE.stop) {
                    GAME.socket.emit('ga', {
                        a: 12,
                        type: 14,
                        iid: parseInt(błogo2),
                        page: 10
                    });
                    window.setTimeout(CODE.kodyy, CODE.wait);
                } else if ($("#train_uptime").find('.timer').length == 0) {
                    GAME.socket.emit('ga', {
                        a: 8,
                        type: 5,
                        apud: 'vzaaa'
                    });
                    window.setTimeout(CODE.start, CODE.wait);
                } else {
                    window.setTimeout(CODE.start, CODE.wait);
                }
            };
            CODE.out = () => {
                if (CODE.acc || CODE.zast) {
                    GAME.socket.emit('ga', {
                        a: 5
                    });
                    window.setTimeout(CODE.start, CODE.wait);
                } else {
                    window.setTimeout(CODE.start, CODE.wait);
                }
            };
            CODE.checkTR = () => {
                if (CODE.checkSSJ && GAME.quick_opts.ssj) {
                    if ($("#ssj_bar")[0].attributes[2].value == "display: none;") {
                        GAME.socket.emit('ga', {
                            a: 18,
                            type: 5,
                            tech_id: GAME.quick_opts.ssj[0]
                        });
                        window.setTimeout(CODE.start, CODE.wait);
                    } else if ($('#ssj_status').text() == "--:--:--") {
                        GAME.socket.emit('ga', {
                            a: 18,
                            type: 6
                        });
                        window.setTimeout(CODE.checkTR, CODE.wait);
                    } else window.setTimeout(CODE.start, CODE.wait);
                } else window.setTimeout(CODE.start, CODE.wait);
            };
            CODE.tren = () => {
                let błogo1 = $("#ekw_page_items").find("div[data-base_item_id=1629]").attr("data-item_id");
                if (GAME.is_training) {
                    window.setTimeout(CODE.start, CODE.wait);
                } else if (GAME.ekw_page != 10 && !CODE.acc && !CODE.zast) {
                    GAME.ekw_page = 10;
                    GAME.socket.emit('ga', {
                        a: 12,
                        page: 10,
                        used: 1
                    });
                    window.setTimeout(CODE.tren, CODE.wait);
                } else if ($("#char_buffs").find("[data-buff=54]").length != 1 && !GAME.is_training && błogo1 && CODE.b1 && !CODE.acc && !CODE.zast && !CODE.stop) {
                    GAME.socket.emit('ga', {
                        a: 12,
                        type: 14,
                        iid: parseInt(błogo1),
                        page: 10
                    });
                    window.setTimeout(CODE.tren, CODE.wait);
                } else {
                    GAME.socket.emit('ga', {
                        a: 8,
                        type: 2,
                        stat: CODE.what_to_train,
                        duration: CODE.what_to_traintime
                    });
                    window.setTimeout(CODE.start, CODE.wait);
                }
            };
            createPanel();
            setTimeout(() => {
                GAME.socket.emit('ga', {
                    a: 50,
                    type: 0,
                    empire: GAME.char_data.empire
                });
            }, 300);
            setTimeout(() => {
                GAME.emitOrder({
                    a: 39,
                    type: 0
                });
            }, 600);
            setTimeout(() => {
                GAME.emitOrder({
                    a: 39,
                    type: 23
                });
            }, 900);
    }, 50);
}
