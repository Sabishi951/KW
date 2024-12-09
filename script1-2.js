var checked = false;

if (typeof GAME === 'undefined') { } else {
    let Pog = setInterval(() => {
        if (!GAME.pid) { } else {
            clearInterval(Pog);
            checked = true;
        }
    }, 50);

    let Pgg = setInterval(() => {
        clearInterval(Pgg);
        Array.from(document.getElementsByTagName('script')).forEach(script => {
            const scriptContent = script.innerHTML;
            const regex = /const\s+([a-zA-Z0-9_]+)\s*=\s*(io\([^\)]+\));/g;
            let match;
            while ((match = regex.exec(scriptContent)) !== null) {
                if (eval(match[1])['io']) {GAME.socket = eval(match[1]); return;}
            }
        });

        class kwsv3 {
            constructor(charactersManager) {
                this.charactersManager = charactersManager;
                this.isLogged((data) => {
                    Object.defineProperty(GAME, 'pid', {
                        writable: false
                    });
                    Object.defineProperty(GAME, 'login', {
                        writable: false
                    });
                });
                this.isCheckingTournaments = false;
                this.tournamentCategory = undefined;
                this.newTournamentID = undefined;
                this.tourSigned = false;
                this.firstTournamentPageLoaded = false;
                this.settings = this.getSettings();
                this.createCSS();
                this.createMinimapSettings();
                if ($("#top_bar .adv").length) $("#top_bar .adv").remove();
                this.sortClanPlanets();
                this.loadRiddles((data) => {
                    this.riddles = data;
                });
                this.addToCSS(`.kom {background: url(/gfx/layout/tloPilot.png); background-size: cover; border-image: url(/gfx/layout/mapborder.png) 7 8 7 7 fill; border-style: solid; border-width: 7px 8px 7px 7px; box-shadow: none;}.kom .close_kom b {background: url(/gfx/layout/tloPilot.png);}.exchange_win {overflow-y: auto;overflow-x: hidden;padding-right: 10px;box-sizing: border-box;}.exchange_win::-webkit-scrollbar {width: 13px;}.exchange_win::-webkit-scrollbar-track {background: #f0f0f0;border-radius: 10px;}.exchange_win::-webkit-scrollbar-thumb {background: #c0c0c0;border-radius: 10px;border: 2px solid transparent;background-clip: content-box;}.exchange_win {scrollbar-width: thin;scrollbar-color: #c0c0c0 #f0f0f0;}`);
                this.addToCSS(`#emp_list .petopt_btns .newBtn{margin:0px 3px 3px 0px;} .newBtn.do_all_instances{color:#e5d029;}`);
                this.addToCSS(`#quick_bar{z-index:4;} .qlink.kws_active_icon{animation-name:kws_active_icon;animation-duration:1s;animation-iteration-count:infinite;}@keyframes kws_active_icon { 0% { filter: hue-rotate(168deg); } 50% { filter:hue-rotate(40deg); } 100% { filter: hue-rotate(168deg); } } .sideIcons{ width:29px; height:29px; left:-37px; background-size:contain; } .autoExpeCodes{background:#12121294; border:1px solid rgb(87, 87, 114); border-radius:5px 0px 0px 5px; position:absolute; top:-100px; left:-97px; padding:5px; display:none; color:#ffe500c7; user-select:none;} .manage_autoExpeditions:hover + .autoExpeCodes, .autoExpeCodes:hover{ display:flex; } .autoExpeCodes .newCheckbox{margin: 0 auto; display: block;} `);
                this.addToCSS(`#secondary_char_stats .instance{margin-top:10px; cursor:pointer; width:100px;} #secondary_char_stats .activities{margin-top:-5px; cursor:pointer; width:100px;} #secondary_char_stats ul {margin-top:-18px; margin-left:-18px;} .ico.a11{background:url("https://raw.githubusercontent.com/KWSforAll/KWSforAll/main/instances.png"); background-repeat: no-repeat; background-size: inherit; background-position: center;} .ico.a12{background-image: url(https://raw.githubusercontent.com/KWSforAll/KWSforAll/main/activity.png); background-repeat: no-repeat; background-size: inherit; background-position: center;}`); 
                this.addToCSS(`.ssj_uio{background:url("https://i.imgur.com/EcfEUcG.png");}`);
                this.addToCSS(`#quick_allTransformations { position:absolute; top:33px; z-index:1; background:rgb(0 0 0 / 59%); display:none; flex-direction: column-reverse; padding:5px 5px 0px 5px; border-radius:5px; box-shadow:0px 0px 5px 0px rgb(32 96 185);} .show_qat:hover + #quick_allTransformations, #quick_allTransformations:hover { display:flex; } #quick_allTransformations .option { display:block; margin:0px 0px 5px 0px; }`);
                this.addToCSS(`#player_list_con .glory_rank.war{animation:none !important;background-color:rgb(22 83 106);box-shadow:0px 0px 7px 0px rgb(0 253 255);} .player_clan.enemy img{animation:none !important;box-shadow:0px 0px 10px 1px rgb(0 253 255);}`);
                this.addToCSS(`.better_chat_loading{filter:sepia(1) hue-rotate(270deg);} .better_chat_loading:hover{filter:sepia(1) hue-rotate(90deg);} .chat_icon.load:hover{background:url(/gfx/layout/ikonyChat.png) -90px 0px !important;}`);
                this.addToCSS(`#upg_menu button[data-page="game_buffs"]{display:block !important;}`);
                this.addToCSS(`.qtrack{width:400px;} #drag_con.scroll .qtrack{width:383px;} #quest_track_con #drag_tracker{user-select:none;} #quest_track_con .sep2{height:14px;} #quest_track_con .sep3{height:14px;}`);
                this.addToCSS(`.option.ls.spawner{ position:absolute; top:60px; right:40px; background-size: 100% 100%; border: solid #6f6f6f 1px; }`);
                this.addToCSS(`#kws_minimap_settings{ margin:10px 0px 0px 0px; border-top:solid white 1px; padding-top:10px; } #field_sett #field_options{ height:407px; } #minimap_con{ ${this.minimap.side == 1 ? `left: -4px; right: unset;` : this.minimap.side == 2 ? `left: -210px; right: unset;` : ""} opacity: ${this.minimap.opacity / 100} } #minimap_range{ width:150px; display:inline-block; vertical-align:middle;} .smin_butt{background: #31313a69 !important; border: solid #ffffff4d 1px !important; width:auto !important; height:32px !important; line-height: 30px; display: inline-block; text-align: center; font-family: 'Play', sans-serif; font-size: 13px; font-weight: Bold; color: #fff; text-decoration: none; text-transform: uppercase; border: none; padding: 0 10px; border-radius: 5px; cursor: pointer; text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; margin-top:2px; float:none !important;} .smin_input{background: #040e13; height: 31px; border: solid #ffffff4d 1px !important; display: inline-block; text-align:center; font-size: 13px; color: #305779; font-family: 'Play', sans-serif; vertical-align: middle;border-radius: 5px;}`);
                this.addToCSS(`#kws_locInfo{background:url("/gfx/layout/tloPilot.png");position: absolute;top: 220px;z-index: 2;width: 204px;padding: 5px;border-radius: 5px;border-image: url(/gfx/layout/mapborder.png) 7 8 7 7 fill;border-style: solid;border-width: 7px 8px 7px 7px; display:${this.minimap.loc_info == 0 ? `none` : `block`}} #kws_locInfo .sekcja{position:absolute;top:-20px;left:0px;background:url("https://i.imgur.com/Mi3kUpg.png");background-size:100% 100%;width:190px;}`);
                this.addToCSS(`.kws_top_bar{float:left !important; position: absolute; z-index: -1;} .kws_top_bar_section{color:white;padding:3px 5px 3px 5px;border-radius:5px;margin-right:8px;user-select:none;}`);
                this.addToCSS(`.go_to_emp_con{ position:absolute; top:33px; z-index:1; background:rgb(0 0 0 / 59%); display:none; flex-direction: column-reverse; padding:5px 5px 0px 5px; border-radius:5px; box-shadow:0px 0px 5px 0px rgb(32 96 185);} .empPos:hover + .go_to_emp_con, .go_to_emp_con:hover { display:flex; } .go_to_emp_con .qlink { display:block; margin:0px 0px 5px 0px; }`);
                this.addToCSS(`#ekw_sets_buy button, div[data-option="change_ekw_set"]{height:20px !important; line-height:19px !important; margin-top:9px !important;}`);
                this.addToCSS(`#page_game_camp .ekw_slot.smaller img{ width: 64px; } #page_game_camp div[data-item_id="1923"].smaller img { width: 32px; position: absolute; margin-top: -64px; margin-left: 34px; }`);
                this.addToCSS(`#kws_spawn{ background: rgba(0,0,0,0.9); position: fixed; top: 120px;left: 5px; z-index: 9999; width: 200px; padding: 1px; border-radius: 5px; border-style: solid; border-width: 7px 8px 7px 7px; display:block; user-select: none; color: #333333; } #kws_spawn .sekcja { position: absolute; top: -27px; left: -7px; background: rgba(0,0,0,0.9); filter: hue-rotate(150deg); background-size: 100% 100%; width: 200px; cursor: all-scroll; } #kws_spawn .spawn_row{border-bottom:solid gray 1px; color: white; font-size: 13px; display: flex; padding:4px;}`);
                $("#map_canvas_container").append(`<div id="kws_spawn"> <div class="sekcja"><img src="/gfx/layout/war.png" class="spawn_switch">USTAWIENIA SPAWNU</div><div id="kws_spawn2" style="">${this.spawnList()}</div>`);
                this.addToCSS(`.spawn_switch{cursor:pointer;}`);
                this.addToCSS(`.quest_roll1{position:absolute; width:50px; height:50px; background:url('/gfx/layout/dice.png') 0 0; top:-25px; left:25px; cursor:pointer; filter:drop-shadow(0px 0px 10px lime)} .quest_roll2{position:absolute; width:50px; height:50px; background:url('/gfx/layout/dice.png') 0 0; top:-25px; left:75px; cursor:pointer; filter:drop-shadow(0px 0px 10px #00fdff)} .quest_roll3{position:absolute; width:50px; height:50px; background:url('/gfx/layout/dice.png') 0 0; top:-25px; left:125px; cursor:pointer; filter:drop-shadow(0px 0px 10px #ff0000)} .quest_roll:hover{background:url('/gfx/layout/dice.png') 0 -45px;} .quest_roll1:hover{background:url('/gfx/layout/dice.png') 0 -45px;} .quest_roll2:hover{background:url('/gfx/layout/dice.png') 0 -45px;} .quest_roll3:hover{background:url('/gfx/layout/dice.png') 0 -45px;}`);
                this.addToCSS(`#lastmap_bar { top: 115px !important; }`);
                this.addToCSS(`button#changeProfileNext { position: absolute; top: 85px; right: 16px; background: linear-gradient(0deg, rgba(252,238,54,1) 0%, rgba(247,121,12,1) 100%); border: 2px solid #973804; border-radius: 5px; width: 52px; }`);
                this.addToCSS(`button#changeProfileNext:hover {
                    background: linear-gradient(0deg, rgba(247,121,12,1) 0%, rgba(252,238,54,1) 100%);
                    border: 0px solid #973804;
                }`);
                this.addToCSS(`button#changeProfilePrev { position: absolute; top: 85px; right: 75px; background: linear-gradient(0deg, rgba(252,238,54,1) 0%, rgba(247,121,12,1) 100%); border: 2px solid #973804; border-radius: 5px; width: 52px; }`);
                this.addToCSS(`button#changeProfilePrev:hover {
                    background: linear-gradient(0deg, rgba(247,121,12,1) 0%, rgba(252,238,54,1) 100%);
                    border: 0px solid #973804;
                }`);
                this.addToCSS(`.kws_additional_top_bar{float:left !important; position: absolute; z-index: -1; display: none} .kws_additional_top_bar_section{color:white;padding:3px 5px 3px 5px;border-radius:5px;margin-right:8px;user-select:none;}`);
                $("#top_bar").append(`<div class="kws_top_bar"></div>`);
                $("#top_bar").append(`<div class="kws_additional_top_bar"></div>`);
                $("#bless_type_2").click();
                $(`.channel_opts .option.chat_icon.load`).addClass('better_chat_loading').removeAttr('id').removeAttr('data-option');
                $("#clan_inner_planets h3").eq(0).append(`<button id="poka_telep" style="margin-left:5px;" class="newBtn">pokaĹź / ukryj salÄ telep</button>`);
                $(`<button class="newBtn free_assist_for_all" style="margin-right:5px;">Asystuj wszystkim za darmo</button>`).insertBefore(`button[data-option="clan_assist_all"]`);
                $(`<button class="gold_button auto_bless">AUTOMAT</button>`).insertBefore(`button[data-option="grant_buff"]`);
                $(`<button class="gold_button auto_know">AUTOMATY</button>`).insertBefore('button[data-option="show_know2"]');
                $("#clan_inner_wars h3").eq(0).append(` <button class="newBtn activate_all_clan_buffs">Aktywuj wszystkie buffy</button>`);
                $(`#minimap_con`).append(`<div id="kws_locInfo"><div class="sekcja">INFORMACJE O LOKACJI</div><div class="content"></div></div>`);
                $("#sett_page_local div").eq(0).prepend(`<b class="green">ZmieĹ tĹo strony </b><div class="game_input"><input id="new_website_bg" style="width:370px;" type="text"></div><button class="option newBtn kws_change_website_bg" style="margin-left:5px;">ZmieĹ</button><button class="option newBtn kws_reset_website_bg" style="margin-left:5px;">Reset</button><br><br>`);
                $('.MoveIcon[data-option="mob_spawner_go"]').after('<div class="MoveIcon bigg option" data-option="map_multi_pvp" data-toggle="tooltip" data-original-title="<div class=tt>Multiwalka PvP<br />Klawisz skrĂłtu:<b class=orange>B</b></div>"><img src="https://i.imgur.com/QPQBcFp.png"></div>');
                $('.MoveIcon[data-option="map_multi_pvp"]').after('<div class="MoveIcon bigg option" data-option="map_quest_skip" data-toggle="tooltip" data-original-title="<div class=tt>Opcja Dalej w otwartym zadaniu jeĹli jest jedna. Atakuje bosy w zadaniach i zamyka raport z walki. W zadaniu nuda wybiera opcjÄ na zabicie mobkĂłw. W zadaniu subki wybiera opcjÄ za 100k. Zamyka komunikaty. Zbiera zasĂłb na ktĂłrym stoimy.<br />Klawisz skrĂłtu:<b class=orange>X</b></div>"><img src="https://i.imgur.com/wuK91VF.png"></div>');
                $('.MoveIcon[data-option="map_quest_skip"]').after('<div class="MoveIcon bigg option" data-option="map_quest_skip_time" data-toggle="tooltip" data-original-title="<div class=tt>UĹźywanie zegarkĂłw w zadaniach<br />Klawisz skrĂłtu:<b class=orange>N</b></div>"><img src="https://i.imgur.com/9YCvJKe.png"></div>');
                $('.MoveIcon[data-option="map_quest_skip_time"]').after('<div class="MoveIcon bigg option" data-option="map_alternative_pilot" data-toggle="tooltip" data-original-title="<div class=tt>Ukryje pilota, pokazuje innÄ klawiaturÄ<br />Klawisz skrĂłtu:<b class=orange>=</b></div>"><img src="https://up.be3.ovh/upload/1709400449.png"></div>');
                $("#changeProfile").before('<button id="changeProfilePrev" class="btn_small_gold" data-option="prevChar">Prev</button>');
                $("#changeProfile").after('<button id="changeProfileNext" class="btn_small_gold" data-option="nextChar">Next</button>');
                this.auto_abyss_interval = false;
                this.auto_arena = false;
                this.additionalTopBarVisible = false;
                this.baselinePower = undefined;
                this.baselineLevel = undefined;
                setInterval(() => {
                    if ('char_data' in GAME) {
                        this.updateTopBar();
                    }
                }, 1000);
                this.setWebsiteBackground();
                this.bindClickHandlers();
                GAME.socket.on('gr', (res) => {
                    this.handleSockets(res);
                });
            }
            isLogged(cb) {
                let waitForID = setInterval(() => {
                    if (GAME.pid) {
                        clearInterval(waitForID);
                        cb(GAME.pid);
                    }
                }, 200);
            }
            loadRiddles(cb) {
                fetch(`https://raw.githubusercontent.com/KWSforAll/KWSforAll/mains/riddles.json`).then(res => res.json()).then((out) => {
                    cb(out)
                }).catch(err => {
                    throw err
                });
            }
            solveRiddle(r_id) {
                let riddle = this.riddles.find((r) => r.id == r_id);
                if (riddle) {
                    $("input[id=quest_riddle]").val(riddle.answer);
                } else {
                    //console.log('riddle id: ', r_id)
		}
            }
            getSettings() {
                let settings = JSON.parse(localStorage.getItem("kws_settings"));
                let settings_sample = {
                    hide_tracker: false,
                    aeCodes: false
                };
                if (settings) {
                    for (const key of Object.keys(settings_sample)) {
                        if (settings[key] === undefined) {
                            settings[key] = settings_sample[key];
                        }
                    }
                    localStorage.setItem("kws_settings", JSON.stringify(settings));
                    return settings;
                } else {
                    localStorage.setItem("kws_settings", JSON.stringify(settings_sample));
                    return settings_sample;
                }
            }
            updateSettings() {
                localStorage.setItem('kws_settings', JSON.stringify(this.settings));
            }
            goEmpPos() {
                let imp_pos = $(".empPos").position();
                $(".go_to_emp_con").css("left", imp_pos.left - 5);
            }
            listQts() {
                let trans = this.parseSSJqts(GAME.char_data.race);
                let html = ``;
                for (let i = 0; i < trans.length && trans[i][0] !== GAME.quick_opts.ssj[0]; i++) {
                    html += `<div class="option qlink ${trans[i][1]}" data-option="use_transform" data-tech="${trans[i][0]}"></div>`;
                }
                if ($(".show_qat").length) {
                    let ssj_pos = $(".show_qat").position();
                    $("#quick_allTransformations").css("left", ssj_pos.left - 5);
                }
                $("#quick_allTransformations").html(html);
                option_bind();
            }
            parseSSJqts(race) {
                switch (race) {
                    case 0:
                        return [
                            [19, "ssj1"],
                            [25, "ssj2"],
                            [26, "ssj3"],
                            [30, "ssj4"],
                            [39, "ssj5"],
                            [72, "ssja"],
                            [81, "ssjb"],
                            [116, "ssj_uio"]
                        ];
                    case 1:
                        return [
                            [46, "ssj1"],
                            [50, "ssj2"],
                            [53, "ssj3"],
                            [55, "ssj4"],
                            [39, "ssj5"],
                            [72, "ssja"],
                            [81, "ssjb"],
                            [116, "ssj_uio"]
                        ];
                    case 2:
                        return [
                            [63, "ssj1"],
                            [64, "ssj2"],
                            [66, "ssjm"],
                            [39, "ssj5"],
                            [72, "ssja"],
                            [81, "ssjb"],
                            [116, "ssj_uio"]
                        ];
                    case 3:
                        return [
                            [78, "ssj1"],
                            [76, "ssj2"],
                            [79, "ssj3"],
                            [39, "ssj5"],
                            [72, "ssja"],
                            [81, "ssjb"],
                            [116, "ssj_uio"]
                        ];
                    case 4:
                        return [
                            [92, "ssj1"],
                            [93, "ssj2"],
                            [99, "ssj3"],
                            [100, "ssj4"],
                            [39, "ssj5"],
                            [72, "ssja"],
                            [81, "ssjb"],
                            [116, "ssj_uio"]
                        ];
                    case 5:
                        return [
                            [101, "ssj1"],
                            [102, "ssj2"],
                            [103, "ssj3"],
                            [110, "ssj4"],
                            [39, "ssj5"],
                            [72, "ssja"],
                            [81, "ssjb"],
                            [116, "ssj_uio"]
                        ];
                    case 6:
                        return [
                            [121, "ssj1"],
                            [122, "ssj2"],
                            [123, "ssj3"],
                            [124, "ssj4"],
                            [39, "ssj5"],
                            [72, "ssja"],
                            [81, "ssjb"],
                            [116, "ssj_uio"]
                        ];
                    case 7:
                        return [
                            [127, "ssj1"],
                            [128, "ssj2"],
                            [129, "ssj3"],
                            [132, "ssj4"],
                            [39, "ssj5"],
                            [72, "ssja"],
                            [81, "ssjb"],
                            [116, "ssj_uio"]
                        ];
                    default:
                        return [];
                }
            }
            manageAutoExpeditions() {
                let expedNmbr = GAME.char_data.bonus16 < GAME.getTime() ? 1 : 2;
                if (!this.autoExpeditions) {
                    this.autoExpeditions = true;
                    this.autoExpeditionsInterval = setInterval(() => {
                        let opponents = $("#arena_players").find(`.player button[data-option="arena_attack"][data-quick="1"]:not(.initial_hide_forced)`);
                        let opponent = parseInt(opponents.attr("data-index"));
                        setTimeout(() => {
                            GAME.parseTimed();
                        }, 100);
                        if (this.settings.aeCodes && $("#train_uptime").find('.timer').length == 0 && !GAME.is_training && $("#timed_label").text().includes("Wyprawa") && GAME.char_tables.timed_actions[0] != undefined) {
                            GAME.socket.emit('ga', {
                                a: 8,
                                type: 3
                            });
                        } else if (this.settings.aeCodes && $("#train_uptime").find('.timer').length == 0 && !GAME.is_training) {
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
                            }, 1500);
                        } else if (this.settings.aeCodes && GAME.is_training && $("#train_uptime").find('.timer').length == 1) {
                            GAME.socket.emit('ga', {
                                a: 8,
                                type: 3
                            });
                        } else if (this.auto_arena && !isNaN(opponent)) { } else if (GAME.char_tables.timed_actions[0] == undefined || GAME.char_tables.timed_actions[1] == undefined && GAME.char_data.bonus16 > GAME.getTime()) {
                            GAME.socket.emit('ga', {
                                a: 10,
                                type: 2,
                                ct: 0
                            });
                            kom_clear();
                        } else { }
                    }, 4000);
                    $(".qlink.manage_autoExpeditions").addClass("kws_active_icon");
                } else {
                    this.autoExpeditions = false;
                    clearInterval(this.autoExpeditionsInterval);
                    $(".qlink.manage_autoExpeditions").removeClass("kws_active_icon");
                }
            }
            manageAutoAbyss() {
                GAME.socket.emit('ga', {
                    a: 59,
                    type: 0
                });
                setTimeout(() => {
                    if (GAME.quick_opts.ssj && $("#ssj_bar").css("display") == "none") {
                        GAME.socket.emit('ga', {
                            a: 18,
                            type: 5,
                            tech_id: GAME.quick_opts.ssj[0]
                        });
                    } else if ($('#ssj_status').text() == "--:--:--") {
                        GAME.socket.emit('ga', {
                            a: 18,
                            type: 6
                        });
                    }
                }, 1000);
                if ($("#ss_cd_still").css("display") == "none") {
                    setTimeout(() => {
                        GAME.socket.emit('ga', {
                            a: 59,
                            type: 1
                        });
                    }, 1000);
                    setTimeout(() => {
                        $('#fight_view').fadeOut();
                    }, 2000);
                    setTimeout(() => {
                        if ((GAME.char_data.reborn == 4 || GAME.char_data.reborn == 5) && GAME.char_data.alt_transform_expiry < GAME.getTime()) {
                            GAME.socket.emit('ga', {
                                a: 18,
                                type: 8,
                                tech_id: 134
                            });
                        }
                    }, 3000);
                }
            }
            manageAutoArena() {
                if (this.auto_arena) {
                    GAME.socket.emit('ga', {
                        a: 46,
                        type: 0
                    });
                    setTimeout(() => {
                        this.attackAutoArena();
                    }, 1000);
                } else {
                    this.stopAutoArena();
                }
            }
            attackAutoArena() {
                let opponents = $("#arena_players").find(`.player button[data-option="arena_attack"][data-quick="1"]:not(.initial_hide_forced)`);
                let opponent = parseInt(opponents.attr("data-index"));
                if (this.auto_arena) {
                    if (opponents.length > 0 && GAME.timed == 0) {
                        GAME.socket.emit('ga', {
                            a: 46,
                            type: 1,
                            index: opponent,
                            quick: 1
                        });
                        setTimeout(() => {
                            this.attackAutoArena();
                        }, 500);
                    } else {
                        setTimeout(() => {
                            this.manageAutoArena();
                        }, 5000);
                    }
                } else {
                    this.stopAutoArena();
                }
            }
            stopAutoArena() {
                this.auto_arena = false;
                $(".qlink.manage_auto_arena").removeClass("kws_active_icon");
            }
            freeAssist() {
                let fafa_el = $(`button[data-option="clan_assist"]:visible`);
                if (fafa_el.length > 0) {
                    let fafa_tid = parseInt(fafa_el.eq(0).attr("data-tid"));
                    let fafa_target = parseInt(fafa_el.eq(0).attr("data-target"));
                    GAME.socket.emit('ga', {
                        a: 39,
                        type: 55,
                        tid: fafa_tid,
                        target: fafa_target
                    });
                    fafa_el.eq(0).hide();
                    setTimeout(() => {
                        this.freeAssist();
                    }, 2100);
                } else {
                    GAME.socket.emit('ga', {
                        a: 39,
                        type: 54
                    });
                    GAME.komunikat("Asystowano wszystkim!");
                }
            }
            autobless() {
                let arr = $.map($('.use_buff:checked'), function (e, i) { return +e.value; });
                let btype = $('input[name="bless_type"]:checked').val();
                GAME.socket.emit('ga', {
                  a: 14,
                  type: 5,
                  buffs: arr,
                  players: $('#bless_players').val(),
                  btype: btype
                });
                function komunikat() {
                    kom_clear();
                  }
                  setTimeout(() => {
                    komunikat();
                }, 1000);
            }
            activateAllClanBuffs() {
                let abut = $("#clan_buffs").find(`button[data-option="activate_war_buff"]`);
                let isDisabled = $("#clan_buffs").find(`button[data-option="activate_war_buff"]`).parents("tr").hasClass("disabled");
                let cpbt = $("#clan_planet_buffs").html();
                let acpbut = $("#has_clan_planet").find(`button[data-option="activate_prp_buff"]`);
                if (abut.length && !isDisabled) {
                    GAME.socket.emit('ga', {
                        a: 39,
                        type: 26
                    });
                    setTimeout(() => {
                        this.activateAllClanBuffs();
                    }, 200);
                } else if (cpbt == 0) {
                    GAME.socket.emit('ga', {
                        a: 39,
                        type: 28
                    });
                    setTimeout(() => {
                        this.activateAllClanBuffs();
                    }, 200);
                } else if (acpbut.length && $("#clan_planet_buffs .red").eq(0).text() == 0) {
                    GAME.socket.emit('ga', {
                        a: 39,
                        type: 29
                    });
                    setTimeout(() => {
                        this.activateAllClanBuffs();
                    }, 200);
                } else {
                    GAME.komunikat("Wszystkie buffy zostaĹy aktywowane!");
                }
            }
            findWorker(worker, cb) {
                let waitForWorker = setInterval(() => {
                    let el = $(`button[data-emp="${worker.id}"]button[data-option="emp_job"]`);
                    let emp_local = parseInt(el.attr("data-emp_local"));
                    if (el.length) {
                        this.workers_info[emp_local] = worker;
                        clearInterval(waitForWorker);
                        cb(el);
                    }
                }, 100);
            }
            doAllInstances(worker, page2 = false) {
                let worker_info = this.workers_info[worker.local];
                let instance_number = this.instanceNumber();
                let kom = $(".kom").text();
                if (instance_number) {
                    if (kom.includes("magicznych esencji") || kom.includes("Magicznych Esencji")) { } else if (worker_info.energy > 0) {
                        GAME.socket.emit('ga', {
                            a: 44,
                            type: 8,
                            emp: worker.id,
                            inst: instance_number
                        });
                        setTimeout(() => {
                            this.doAllInstances(worker)
                        }, 250);
                    } else if (worker_info.energy == 0) {
                        GAME.socket.emit('ga', {
                            a: 44,
                            type: 9,
                            emp: worker_info.id
                        });
                        setTimeout(() => {
                            this.doAllInstances(worker)
                        }, 250);
                    }
                } else {
                    GAME.komunikat("Wszystkie instancje zostaĹy wykonane!");
                }
            }
            instanceNumber() {
                if (GAME.char_data.icd_1 < 2) {
                    return 1;
                } else if (GAME.char_data.icd_2 < 2) {
                    return 2;
                } else if (GAME.char_data.icd_3 < 2) {
                    return 3;
                } else if (GAME.char_data.icd_4 < 2) {
                    return 4;
                } else if (GAME.char_data.icd_5 < 2) {
                    return 5;
                } else if (GAME.char_data.icd_6 < 2) {
                    return 6;
                } else {
                    return false;
                }
            }
            createMinimapSettings() {
                this.manageMinimapSettings("load");
                this.manageMapSize("load");
                this.managePilot();
                $("#field_sett #field_options").append(`<br style='clear:both;'><div id="kws_minimap_settings"> <b class='orange'>Ukryj pilota kontroli postaci: </b><div class="select_input"><select id="kws_hidePilot"><option value="1" ${this.hidePilot == 1 ? "selected" : ""}>tak</option><option value="0" ${this.hidePilot == 0 ? "selected" : ""}>Nie</option></select></div> <b class='orange'>Minimapa wyĹwietlana ze strony: </b><div class="select_input"><select id="minimap_side"><option value="0" ${this.minimap.side == 0 ? "selected" : ""}>Prawej</option><option value="1" ${this.minimap.side == 1 ? "selected" : ""}>Lewej</option><option value="2" ${this.minimap.side == 2 ? "selected" : ""}>L - Poza</option></select></div> <b class='orange'>PrzeĹşroczystoĹÄ minimapy: </b><input id="minimap_range" type="range" value="${this.minimap.opacity}" min="10" max="100" step="1"> <b class='orange'>Dodatkowe informacje o lokacji: </b><div class="select_input"><select id="kws_sh_locInfo"><option value="1" ${this.minimap.loc_info == 1 ? "selected" : ""}>PokaĹź</option><option value="0" ${this.minimap.loc_info == 0 ? "selected" : ""}>Ukryj</option></select></div> <b class='orange'>Rozmiar mapy: </b>X: <input name="kws_map_width" class="smin_input" style="width:30px;" type="text" value="${this.mapsize.x}" placeholder="13"> Y: <input name="kws_map_height" class="smin_input" style="width:30px;" type="text" value="${this.mapsize.y}" placeholder="13"><button class="smin_butt kws_mapsize_change" style="margin-left:5px;">ZmieĹ</button><button class="smin_butt kws_mapsize_reset" style="margin-left:5px;">Reset</button> </div>`);
            }
            manageMinimapSettings(act) {
                if (act == "load") {
                    this.minimap = JSON.parse(localStorage.getItem('kws_minimap'));
                    if (this.minimap == undefined) {
                        this.minimap = {
                            side: 0,
                            opacity: 100,
                            loc_info: 0
                        };
                        localStorage.setItem('kws_minimap', JSON.stringify(this.minimap));
                    }
                } else if (act == "save") {
                    localStorage.setItem('kws_minimap', JSON.stringify(this.minimap));
                }
            }
            parseMapInfo(quests, where) {
                let mapInfo = Object.values(quests).filter(this.filterQuests);
                let mapSK = Object.keys(GAME.map_balls) ? Object.keys(GAME.map_balls).length : 0;
                $(`#kws_locInfo .content`).html(`Zadania: ${mapInfo.length}<br>SK: ${mapSK}`);
            }
            filterQuests(quest) {
                let steps = quest.length;
                if (steps > 0 && quest[steps - 1] && quest[steps - 1].end != 1) {
                    return quest;
                }
            }
            setWebsiteBackground() {
                if (localStorage.getItem('kws_wbg')) {
                    $("body").css({
                        "background": "#02070D",
                        "background-image": `url(${localStorage.getItem('kws_wbg')})`,
                        "background-size": "cover",
                        "background-attachment": "fixed"
                    });
                    $("#new_website_bg").val(localStorage.getItem('kws_wbg'));
                    $("footer").addClass("hide_before");
                }
            }
            manageWebsiteBackground(act, url) {
                if (act == "set") {
                    if (url.length > 5) {
                        localStorage.setItem('kws_wbg', url);
                        $("body").css({
                            "background": "#02070D",
                            "background-image": `url(${url})`,
                            "background-size": "cover",
                            "background-attachment": "fixed"
                        });
                        $("footer").addClass("hide_before");
                    }
                } else if (act == "reset") {
                    localStorage.removeItem("kws_wbg");
                    $("#new_website_bg").val("");
                    $("body").css({
                        "background": "#02070D",
                        "background-image": `url(/gfx/layout/bg.jpg)`,
                        "background-size": "cover",
                        "background-attachment": "fixed"
                    });
                    $("footer").removeClass("hide_before");
                }
            }
            changeMapSize(rx = 13, ry = 13) {
                rx = Math.floor(rx);
                ry = Math.floor(ry);
                GAME.map.cX = rx * 40;
                GAME.map.cY = ry * 40;
                GAME.map.rX = rx;
                GAME.map.rY = ry;
                if (GAME.map.initiated) {
                    GAME.loadMapJson(function () {
                        GAME.socket.emit('ga', {
                            a: 3,
                            vo: GAME.map_options.vo
                        }, 1);
                    });
                }
                if (rx > 13) {
                    let pgm_w = 963 + (rx - 13) * 40;
                    $("#page_game_map").css("width", pgm_w);
                } else {
                    $("#page_game_map").css("width", "963px");
                }
                $("#map_canvas_container").css({
                    "width": `${GAME.map.cX + 14}px`,
                    "height": `${GAME.map.cY + 14}px`
                });
            }
            manageMapSize(act, size = [13, 13]) {
                if (act == "load") {
                    this.mapsize = JSON.parse(localStorage.getItem('kws_mapsize'));
                    if (this.mapsize == undefined) {
                        this.mapsize = {
                            x: 13,
                            y: 13
                        };
                        localStorage.setItem('kws_mapsize', JSON.stringify(this.mapsize));
                    } else if (this.mapsize.x != 13 || this.mapsize.y != 13) {
                        this.changeMapSize(this.mapsize.x, this.mapsize.y);
                    }
                } else if (act == "change") {
                    this.changeMapSize(size[0], size[1]);
                    this.mapsize.x = size[0];
                    this.mapsize.y = size[1];
                    localStorage.setItem('kws_mapsize', JSON.stringify(this.mapsize));
                } else {
                    this.changeMapSize();
                    this.mapsize.x = 13;
                    this.mapsize.y = 13;
                    $(`input[name="kws_map_width"]`).val(13);
                    $(`input[name="kws_map_height"]`).val(13);
                    localStorage.setItem('kws_mapsize', JSON.stringify(this.mapsize));
                }
            }
            managePilot(act = false, val = 0) {
                if (act == "set") {
                    localStorage.setItem('kws_pilot', val);
                    this.hidePilot = val;
                    this.managePilot();
                } else {
                    this.hidePilot = localStorage.getItem('kws_pilot');
                    if (this.hidePilot == undefined) {
                        localStorage.setItem('kws_pilot', 0);
                        this.hidePilot = 0;
                    }
                    if (this.hidePilot == 1) {
                        $("#map_pilot").hide();
                    } else {
                        $("#map_pilot").show();
                    }
                }
            }
            sortClanPlanets() {
                let x = 72;
                let y = -11;
                let pl_sup = 1;
                let pl_sup_css = `#clan_planets.galactic{height:650px !important; width:658px !important;} #clan_planets_simple .tablen1{min-width:295px;}`;
                for (let i = 1; i <= 20; i++) {
                    pl_sup_css += `.planet_pos.pos_${i}{left:${x}px !important; top:${y}px !important;}`;
                    x += 220;
                    y -= 50;
                    if (pl_sup >= 3) {
                        x = 72;
                        y += 90;
                        pl_sup = 0;
                    }
                    pl_sup++;
                }
                this.addToCSS(pl_sup_css);
            }
            getTitlesList(cb) {
                GAME.socket.emit('ga', {
                    a: 42,
                    type: 9
                });
                JQS.ldr.finish().fadeIn();
                let wait_for_titles = setInterval(() => {
                    let html = $("#char_titles").html();
                    if (html.length) {
                        clearInterval(wait_for_titles);
                        cb(html);
                    }
                }, 100);
            }
            updateTopBar() {
                let sk_status;
                let instances = [];
                let currentLevel = GAME.char_data.level;
                let currentTime = Date.now();
                let levelsGained = currentLevel - GAME.startLevel;
                let levelsPerHour = levelsGained / ((currentTime - GAME.startTime) / 1000 / 60 / 60);
                let lvlh = levelsPerHour.toFixed(2);
                if ($(`#mdbp_${GAME.char_data.reborn}`).find('.timer').length) {
                    sk_status = $(`#mdbp_${GAME.char_data.reborn}`).find('.timer').text();
                } else {
                    sk_status = "AKTYWNE";
                }
                let train_upgr = $("#train_uptime").find('.timer').text();
                if (train_upgr.length == 0 || train_upgr == "00:00:00") {
                    train_upgr = "AKTYWNE";
                }
                if ('char_data' in GAME) {
                    instances = [GAME.char_data.icd_1, GAME.char_data.icd_2, GAME.char_data.icd_3, GAME.char_data.icd_4, GAME.char_data.icd_5, GAME.char_data.icd_6];
                }
                let sum_instances = instances.reduce(function (a, b) {
                    return a + b;
                }, 0);
                let activity = $('#char_activity').text();
                let received = $("#act_prizes").find("div.act_prize.disabled").length;
                let is_trader = new Date();
                let trader = `<span class='kws_top_bar_section trader_info' style='cursor:pointer;'>HANDLARZ</span> `;
                let soulCards_current = $(".sc_sets_all.current").html();
                let soulCards_one = `<span class='kws_top_bar_section soul_cards_one' style='cursor:pointer;color:${soulCards_current == "I" ? "red" : "white"}'>KD1</span>`;
                let soulCards_two = `<span class='kws_top_bar_section soul_cards_two' style='cursor:pointer;color:${soulCards_current == "II" ? "red" : "white"}'>KD2</span>`;
                let soulCards_three = `<span class='kws_top_bar_section soul_cards_three' style='cursor:pointer;color:${soulCards_current == "III" ? "red" : "white"}'>KD3</span>`;
                let soulCards_four = `<span class='kws_top_bar_section soul_cards_four' style='cursor:pointer;color:${soulCards_current == "IV" ? "red" : "white"}'>KD4</span>`;
                let soulCards_five = `<span class='kws_top_bar_section soul_cards_five' style='cursor:pointer;color:${soulCards_current == "V" ? "red" : "white"}'>KD5</span>`;
                let additionalStats = `<span class='kws_top_bar_section additional_stats' style='cursor:pointer;color:${this.additionalTopBarVisible ? "orange" : "white"}'>STATY</span>`;
                let instance = `${sum_instances}/12`;
                $("#secondary_char_stats .instance ul").html(instance);
                let activities = `${activity}/185 (${received}/5)`;
                $("#secondary_char_stats .activities ul").html(activities);
                let innerHTML = ` <span class='kws_top_bar_section sk_info' style='cursor:pointer;'>SK: <span style="color:${sk_status == "AKTYWNE" ? "lime" : "white"};">${sk_status}</span></span> <span class='kws_top_bar_section train_upgr_info' style='cursor:pointer;'>KODY: <span style="color:${train_upgr == "AKTYWNE" ? "lime" : "white"};">${train_upgr}</span></span><span class='kws_top_bar_section lvl' style='cursor:pointer;'>LVL: <span>${lvlh}/H</span></span><span class='kws_top_bar_section pvp' style='cursor:pointer;'>PVP: <span>${pvp_count}</span></span><span class='kws_top_bar_section arena' style='cursor:pointer;'>ARENA: <span>${arena_count}</span></span> ${is_trader.getDay() == 6 ? trader : ''} [${soulCards_one}| ${soulCards_two}| ${soulCards_three}| ${soulCards_four}| ${soulCards_five}]  ${additionalStats} <span class='kws_top_bar_section version' style='cursor:pointer;'>Wersja: <span>${version}</span></span> `;
                $(".kws_top_bar").html(innerHTML);
                if (this.baselinePower == undefined) {
                    this.baselinePower = GAME.char_data.moc;
                }
                if (this.baselineLevel == undefined) {
                    this.baselineLevel = GAME.char_data.level;
                }
                let calculated_power = GAME.dots(GAME.char_data.moc - this.baselinePower);//(GAME.char_data.moc - this.baselinePower).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                let calculatedPowerReset = `<span class='kws_top_bar_section additional_stats_reset' style='cursor:pointer;color:"white"'>RESET</span>`;
                let futureStats = this.prepareFutureStatsData();
                let calculated_levels = GAME.dots(GAME.char_data.level - this.baselineLevel);
                $(".kws_additional_top_bar").html(` <span class='kws_additional_top_bar_section pvm_power' style='cursor:pointer;'>ZDOBYTA MOC: <span style="color:lime;">${calculated_power}</span></span> <span class='kws_additional_top_bar_section future_stats' style='cursor:pointer;'>${futureStats}</span><span class='kws_additional_top_bar_section lvlsGained' style='cursor:pointer;'>ZDOBYTE LVL: <span>${calculated_levels}</span></span><span class='kws_additional_top_bar_section psk' style='cursor:pointer;'>PSK: ${GAME.dots(GAME.char_data.minor_ball)}</span> ${calculatedPowerReset}`);
                this.adjustCurrentCharacterId();
                this.checkTournamentsSigning();
            }
            collectActivities() {
                let received = $("#act_prizes").find("div.act_prize.disabled").length;
                let activity = parseInt($('#char_activity').text());
                let p = [25, 50, 75, 100, 150];
                for (let i = 0; i <= 5; i++) {
                    if (received < 5 && activity >= p[i]) {
                        let actPrize = $(`#act_prizes button[data-ind=${i}]`).closest(".act_prize");
                        if (!actPrize.hasClass("disabled")) {
                            GAME.socket.emit('ga', {
                                a: 49,
                                type: 1,
                                ind: i
                            });
                        }
                    }
                }
            }
            markDaily() {
                let daily = ["ZADANIE PVM", "Zadanie PvP", "ROZWĂJ PLANETY", "ZADANIE IMPERIUM", "ZADANIE KLANOWE", "NAJLEPSZY KUCHA...", "REPUTACJA", "SYMBOL WYMIARĂW", "WYMIANA CHI", "ERMITA", "Nuda", "DOSTAWCA", "BOSKA MOC", "ROZGRZEWKA", "BOSKI ULEPSZACZ", "CZAS PODRĂĹťNIKĂ...", "STRAĹťNIK PORZÄD...", "CODZIENNY INSTY...", "HIPER SCALACZ", "DZIWNY MEDYK"];
                daily = daily.map(item => item.trim().toLowerCase());
                let markedQuests = [];
                const questWithSep3 = document.querySelector('.sep3');
                const lastSep3Element = $('.sep3').last().closest('.qtrack');
                $('#quest_track_con .qtrack b').each(function () {
                    let zawartoscB = $(this).text().trim().toLowerCase();
                    if (daily.includes(zawartoscB) && !$(this).closest('.qtrack').find('.sep3').length) {
                        if (!markedQuests.includes(zawartoscB)) {
                            $(this).css("color", "#63aaff");
                            if (!$(this).closest('.qtrack').hasClass('cloned')) {
                                if (questWithSep3) {
                                    lastSep3Element.after($(this).closest('.qtrack').clone());
                                } else {
                                    $('#drag_con').prepend($(this).closest('.qtrack').clone());
                                }
                                $(this).closest('.qtrack').addClass('cloned');
                            }
                            $(this).closest('.qtrack').remove();
                            markedQuests.push(zawartoscB);
                        }
                    }
                });
            
                const currentLocation = String(GAME.char_data.loc).toLowerCase();
                $('[id^="track_quest_"]').each(function () {
                    const questLoc = $(this).attr("data-loc").toLowerCase();
                    let zawartoscB = $(this).find('b').first().text().trim().toLowerCase();
                    if (questLoc === currentLocation && !$(this).find('.sep3').length) {
                        if (!markedQuests.includes(zawartoscB)) {
                            $(this).find('b').first().css("color", "yellow");
                            if (!$(this).closest('.qtrack').hasClass('cloned')) {
                                if (questWithSep3) {
                                    lastSep3Element.after($(this).closest('.qtrack').clone());
                                } else {
                                    $('#drag_con').prepend($(this).closest('.qtrack').clone());
                                }
                                $(this).closest('.qtrack').addClass('cloned');
                            }
                            $(this).closest('.qtrack').remove();
                            markedQuests.push(zawartoscB);
                        }
                    }
                });
            }
            
            
            wojny2() {
                var aimp = $("#e_admiral_player").find("[data-option=show_player]").attr("data-char_id");
                var imp = $("#leader_player").find("[data-option=show_player]").attr("data-char_id");
                if (!adimp) {
                    setTimeout(() => {
                        GAME.socket.emit('ga', {
                            a: 50,
                            type: 0,
                            empire: GAME.char_data.empire
                        });
                    }, 100);
                    adimp = true;
                    setTimeout(() => {
                        this.wojny2();
                    }, 300);
                } else if (!GAME.emp_enemies.includes(1) && ![GAME.char_data.empire].includes(1) && (kws.check_imp().includes(GAME.char_id) || kws.check_imp2().includes(GAME.char_id) || imp == GAME.char_id || aimp == GAME.char_id)) {
                    GAME.socket.emit('ga', {
                        a: 50,
                        type: 7,
                        target: 1
                    });
                    setTimeout(() => {
                        this.wojny2();
                    }, 300);
                } else if (!GAME.emp_enemies.includes(2) && ![GAME.char_data.empire].includes(2) && (kws.check_imp().includes(GAME.char_id) || kws.check_imp2().includes(GAME.char_id) || imp == GAME.char_id || aimp == GAME.char_id)) {
                    GAME.socket.emit('ga', {
                        a: 50,
                        type: 7,
                        target: 2
                    });
                    setTimeout(() => {
                        this.wojny2();
                    }, 300);
                } else if (!GAME.emp_enemies.includes(3) && ![GAME.char_data.empire].includes(3) && (kws.check_imp().includes(GAME.char_id) || kws.check_imp2().includes(GAME.char_id) || imp == GAME.char_id || aimp == GAME.char_id)) {
                    GAME.socket.emit('ga', {
                        a: 50,
                        type: 7,
                        target: 3
                    });
                    setTimeout(() => {
                        this.wojny2();
                    }, 300);
                } else if (!GAME.emp_enemies.includes(4) && ![GAME.char_data.empire].includes(4) && (kws.check_imp().includes(GAME.char_id) || kws.check_imp2().includes(GAME.char_id) || imp == GAME.char_id || aimp == GAME.char_id)) {
                    GAME.socket.emit('ga', {
                        a: 50,
                        type: 7,
                        target: 4
                    });
                    setTimeout(() => {
                        this.wojny2();
                    }, 300);
                } else { }
            }
            check_imp() {
                var tab = [];
                for (var i = 0; i < 3; i++) {
                    tab[i] = parseInt($("#empire_heroes .activity").eq(i).find("[data-option=show_player]").attr("data-char_id"));
                }
                return tab;
            }
            check_imp2() {
                var tab = [];
                for (var i = 0; i < 3; i++) {
                    tab[i] = parseInt($("#empire_efrags .activity").eq(i).find("[data-option=show_player]").attr("data-char_id"));
                }
                return tab;
            }
            vip() {
                var month = $("#monthly_vip_rewards").find(".vip_cat.option" + ":not(.disabled)" + ":not(.received)");
                var general = $("#general_vip_rewards").find(".vip_cat.option" + ":not(.disabled)" + ":not(.received)");
                if (month.length) {
                    var id = parseInt(month.attr("data-vip"));
                    var lvl = parseInt(month.attr("data-level"));
                    GAME.socket.emit('ga', {
                        a: 54,
                        type: 1,
                        vip: id,
                        level: lvl
                    });
                    setTimeout(() => {
                        this.vip();
                    }, 500);
                } else if (general.length) {
                    var id = parseInt(general.attr("data-vip"));
                    var lvl = parseInt(general.attr("data-level"));
                    GAME.socket.emit('ga', {
                        a: 54,
                        type: 1,
                        vip: id,
                        level: lvl
                    });
                    setTimeout(() => {
                        this.vip();
                    }, 500);
                } else {
                    GAME.komunikat("Odebrano wszystkie moĹźliwe nagrody z Vipa!!!");
                }
            }
            bless() {
                GAME.socket.emit('ga', {
                    a: 14,
                    type: 3
                });
                setTimeout(() => {
                    var arr = $.map($('.use_buff:checked'), function (e, i) {
                        return +e.value;
                    });
                    var btype = $('input[name="bless_type"]:checked').val();
                    GAME.socket.emit('ga', {
                        a: 14,
                        type: 5,
                        buffs: arr,
                        players: $('#bless_players').val(),
                        btype: btype
                    });
                }, 500);
            }
            questProceed() {
                if (JQS.qcc.is(":visible")) {
                    if ($("button[data-option=finish_quest]").length === 1) {
                        let qb_id = $("button[data-option=finish_quest]").attr("data-qb_id");
                        GAME.socket.emit('ga', {
                            a: 22,
                            type: 2,
                            button: 1,
                            id: qb_id
                        });
                    } else if ($("button[data-option=quest_riddle]").is(":visible")) {
                        let qb_id = $("button[data-option=quest_riddle]").attr("data-qid");
                        GAME.socket.emit('ga', {
                            a: 22,
                            type: 7,
                            id: qb_id,
                            ans: $('#quest_riddle').val()
                        });
                    } else if ($("button[data-option=quest_duel]").is(":visible")) {
                        let fb_id = $("button[data-option=quest_duel]").attr("data-qid");
                        GAME.socket.emit('ga', {
                            a: 22,
                            type: 6,
                            id: fb_id
                        });
                    } else if ($(".quest_win .sekcja").text().toLowerCase() === "nuda" && $("button[data-option=finish_quest]").length === 3) {
                        let qb_id = $("button[data-option=finish_quest]").attr("data-qb_id");
                        GAME.socket.emit('ga', {
                            a: 22,
                            type: 2,
                            button: 2,
                            id: qb_id
                        });
                    } else if ($(".quest_win .sekcja").text().toLowerCase() === "zadanie substancji" && $("button[data-option=finish_quest]").length === 3) {
                        let qb_id = $("button[data-option=finish_quest]").attr("data-qb_id");
                        GAME.socket.emit('ga', {
                            a: 22,
                            type: 2,
                            button: 3,
                            id: qb_id
                        });
                    } else if ($("button[data-option=finish_quest]").length === 2 && $("button[data-option=finish_quest]").eq(1).html() === "Mam doĹÄ tej studni") {
                        let qb_id = $("button[data-option=finish_quest]").eq(1).attr("data-qb_id");
                        GAME.socket.emit('ga', {
                            a: 22,
                            type: 2,
                            button: 2,
                            id: qb_id
                        });
                    } else if ($("#field_opts_con .sekcja").html() == "Zasoby") {
                        let qb_id = $("#field_opts_con .field_option").find("[data-option=start_mine]").attr("data-mid");
                        GAME.socket.emit('ga', {
                            a: 22,
                            type: 8,
                            mid: qb_id
                        });
                    }
                    setTimeout(() => {
                        $('#fight_view').fadeOut();
                    }, 500);
                    kom_clear();
                } else if ($("button[data-option=start_mine]").length >= 1) {
                    let mineID = parseInt($("button[data-option=start_mine]").attr("data-mid"));
                    GAME.socket.emit('ga', {
                        a: 22,
                        type: 8,
                        mid: mineID
                    });
                }
            }
            pvpKill() {
                if (!JQS.chm.is(":focus")) {
                    let opponents = $("#player_list_con").find(".player button" + "[data-quick=1]" + ":not(.initial_hide_forced)");
                    if ($("button[data-option='load_more_players']").is(":visible")) {
                        $("button[data-option='load_more_players']").click();
                        setTimeout(() => {
                            this.pvpKill();
                        }, 110);
                    } else if (opponents.length > 0) {
                        opponents.eq(0).click();
                        setTimeout(() => {
                            this.pvpKill();
                        }, 110);
                    }
                }
            }
            useCompressor() {
                if (JQS.qcc.is(":visible")) {
                    let compressors_button = $("#quest_con button[data-option=compress_items]");
                    let quest_id = compressors_button.attr("data-qb_id");
                    if (compressors_button.length === 1 && GAME.compress_items[0].stack > 0) {
                        GAME.socket.emit('ga', {
                            a: 22,
                            type: 10,
                            item_id: GAME.compress_items[0].id,
                            qb_id: quest_id
                        });
                    }
                }
            }
            arena_count() {
                arena_count++;
                $(".kws_top_bar_section.arena").html(`ARENA: ${arena_count}`);
            }
            pvp_count() {
                pvp_count++;
                $(".kws_top_bar_section.pvp").html(`PVP: ${pvp_count}`);
            }
            check_act() {
                let recived = $("#act_prizes").find("div.act_prize.disabled").length;
                let points = $('#char_activity').text();
                if (points >= 25 && recived < 1) {
                    return true;
                } else if (points >= 50 && recived < 2) {
                    return true;
                } else if (points >= 75 && recived < 3) {
                    return true;
                } else if (points >= 100 && recived < 4) {
                    return true;
                } else if (points >= 150 && recived < 5) {
                    return true;
                } else {
                    return false;
                }
            }
            spawnList() {
                let mob = "";
                for (var i = 0; i < 6; i++) {
                    mob += `<div class="spawn_row"><div class="newCheckbox"><input id="kws_spawner_ignore_${i}" type="checkbox" class="kws_spawner_check" name="ignoreMobs" value="${i}" ${(GAME.spawner && GAME.spawner[1][i] ? 'checked' : '')} /><label for="kws_spawner_ignore_${i}"></label></div>${LNG.lab457}&nbsp;<b>${LNG['mob_rank' + i]}</b></div>`;
                }
                mob += `<div class="spawn_row" style="flex-direction: column;align-items: center;"><div>UĹźyte PA na spawn</div><div class="game_input small"><input id="kws_pa_max" name="usePaToSpawn" type="text" value="1000"></div></div>`;
                return mob;
            }
            updatePaToSpawn(pats) {
                let pa = parseInt(pats);
                if (!pa || pa <= 0 || pa > 1000 || pa != pats) {
                    pa = 1000;
                    $("#kws_spawn input[name=usePaToSpawn]").val(pa);
                }
                GAME.spawner[0] = pa;
            }
            calcLVL(exp) {
                let lvls_gained = 0;
                let clvl = GAME.char_data.level;
                let cexp = GAME.char_data.exp + exp;
                let next = GAME.nextLevelExp(clvl, GAME.char_data.reborn);
                if (GAME.char_data.reborn >= 2) {
                    while (cexp >= next && clvl < 100000) {
                        clvl++;
                        lvls_gained++;
                        cexp -= next;
                        next = GAME.nextLevelExp(clvl, GAME.char_data.reborn);
                    }
                } else {
                    while (cexp >= next && clvl < 1250) {
                        clvl++;
                        lvls_gained++;
                        next = GAME.nextLevelExp(clvl, GAME.char_data.reborn);
                    }
                }
                return `<b class="orange">[~${lvls_gained} lvl'i]</b>`;
            }
            handleSockets(res) {
                //console.log("KWA_HANDLE_SOCKETS: res.a == %s", res.a);
                switch (res.a) {
                    case 7: //?? PvP fight result?
                        if (!this.stopped) {
                            if("result" in res && res.result && "reward" in res.result && res.result.reward && "arena_exp" in res.result.reward && res.result.reward.arena_exp && res.result.result === 1) {
                                this.arena_count();
                            } else if ("result" in res && res.result && "reward" in res.result && res.result.reward && "empire_war" in res.result.reward && res.result.reward.empire_war && res.result.result === 1) {
                                this.pvp_count();
                            } else {
                                break;
                            }
                        } else {
                            break;
                        }
                    case 57: //Tournament related
                        if(res.tours) {
                            if (res.a === 57 && res.tours) {
                                const foundCatObject = res.tours.find(tour => tour.cat === this.tournamentCategory);
                                if (foundCatObject) {
                                    this.newTournamentID = foundCatObject.id;
                                }
                            }
                        } else {
                            break;
                        }
                    default:
                        //console.log("KWA_HANDLE_SOCKETS: unhandeled response");
                        break;
                }
            }
            createCSS() {
                $("head").append(`<style id="kwsCSS"></style>`);
            }
            addToCSS(data) {
                $(`#kwsCSS`).append(data);
            }
            bindClickHandlers() {
                $("body").on("click", ".free_assist_for_all", () => {
                    this.freeAssist();
                });
                //AutomaticBless
                let isAutoBlessActive = false;
                let blessInterval = null;
                $("body").on("click", '.auto_bless', () => {
                    if (isAutoBlessActive) {
                        clearInterval(blessInterval);
                        blessInterval = null;
                        isAutoBlessActive = false;
                        console.log("Automatyczne bĹogosĹawienie zostaĹo wyĹÄczone.");
                      } else {
                        blessInterval = setInterval(this.autobless, 11000);
                        isAutoBlessActive = true;
                        console.log("Automatyczne bĹogosĹawienie zostaĹo wĹÄczone.");
                      }
                });
                //AutomaticKnowladge 
                let knowStatus = false;
                let mbornInterval = null;
                let gohanInterval = null;
                $("body").on("click", '.auto_know', () => {
                    if (!knowStatus) {
                        GAME.komunikat2("KtĂłrej wiedzy chcesz siÄ uczyÄ?");
                        let komunikatElement = document.querySelector('#kom_con .kom');
                        if (komunikatElement) {
                            if (!komunikatElement.querySelector('.gohan') && !komunikatElement.querySelector('.mborn')) {
                                komunikatElement.innerHTML += `
                                    <button class="newBtn gohan">Wiedza Gohan</button>
                                    <button class="newBtn mborn">Wiedza MBorn</button>`;
                            }
                            let closeKomElement = document.querySelector("#kom_con > div > div.close_kom");
                            if (closeKomElement && !closeKomElement.hasAttribute("data-close-handler")) {
                                closeKomElement.setAttribute("data-close-handler", "true");
                                closeKomElement.addEventListener("click", () => {kom_clear();});
                            }
                        } else {
                            console.error('Element .game-komunikat nie istnieje!');
                        }
                    } else if (knowStatus) {
                        knowStatus = false;
                        if (mbornInterval) { clearInterval(mbornInterval); }
                        if (gohanInterval) { clearInterval(gohanInterval); }
                        GAME.komunikat("ZaprzestaĹeĹ robienia Wiedzy.");
                    }
                });
                
                $("body").on("click", '.mborn', () => {
                    knowStatus = true;
                    GAME.socket.emit('ga',{a:9,type:3,nid:382});
                    mbornInterval = setInterval(wiedza_M, 60000);
                    function wiedza_M(){
                        if(knowStatus) {
                            if (GAME.char_tables.timed_actions[0] == undefined || GAME.char_tables.timed_actions[1] == undefined && GAME.char_data.bonus16 > GAME.getTime()) {
                                GAME.socket.emit('ga', {a: 9, type: 3, nid:382});
                                kom_clear();
                            } else{
                                console.log("Yasoen: wiedza trwa.")
                            }
                        }
                    }
                });
                $("body").on("click", '.gohan', () => {
                    knowStatus = true;
                    GAME.socket.emit('ga',{a:9,type:3,nid:288});
                    gohanInterval = setInterval(wiedza_gohan, 60000);
                    function wiedza_gohan(){
                        if(knowStatus) {
                            if (GAME.char_tables.timed_actions[0] == undefined || GAME.char_tables.timed_actions[1] == undefined && GAME.char_data.bonus16 > GAME.getTime()) {
                                GAME.socket.emit('ga', {a: 9, type: 3, nid:288});
                                kom_clear();
                            } else{
                                console.log("Yasoen: wiedza trwa.")
                            }
                        }
                    }
                });
                //
                    $("body").on("click", ".activate_all_clan_buffs", () => {
                    this.activateAllClanBuffs();
                });
                $("body").on("click", ".do_all_instances", (event) => {
                    let worker = {};
                    worker.id = parseInt($(event.target).attr("data-emp"));
                    worker.local = parseInt($(event.target).attr("data-emp_local"));
                    this.doAllInstances(worker);
                });
                $("#poka_telep").click(() => {
                    GAME.socket.emit('ga', {
                        a: 39,
                        type: 35
                    });
                    GAME.socket.emit('ga', {
                        a: 39,
                        type: 33
                    });
                    if ($("#clan_inner_stelep").css("display") == "none") {
                        $("#clan_inner_stelep").css("cssText", `display:block;position:absolute;padding:10px;border:solid #003e60 2px;background:rgb(5 21 36 / 97%);z-index:9999;border-radius:5px;margin-top:85px;`);
                    } else {
                        $("#clan_inner_stelep").attr("style", "display:none;");
                    }
                });
                $("body").on("click", "#changeProfile", () => {
                    this.resetAFO();
                });
                $("body").on("click", "#changeProfilePrev", () => {
                    this.goToPreviousChar();
                    this.resetCalculatedPower();
                });
                $("body").on("click", "#changeProfileNext", () => {
                    this.goToNextChar();
                    this.resetCalculatedPower();
                });
                $("body").on("click", `button[data-page="stelep"].cps`, () => {
                    $("#clan_inner_stelep").attr("style", "");
                }).on("click", `button[data-option="clan_tp_go"]`, () => {
                    if ($("#clan_inner_stelep").css("padding") == "10px") {
                        GAME.socket.emit('ga', {
                            a: 39,
                            type: 33
                        });
                    }
                }).on("click", `button[data-option="invade_planet"]`, () => {
                    if ($("#clan_inner_stelep").css("padding") == "10px") {
                        GAME.socket.emit('ga', {
                            a: 39,
                            type: 33
                        });
                    }
                });
                $("body").on("click", `.better_chat_loading`, () => {
                    if (GAME.chat_data[GAME.chat_channel].messages.length == 0) {
                        GAME.socket.emit('ga', {
                            a: 600,
                            channel: GAME.chat_channel,
                            lm: GAME.chat_data[GAME.chat_channel].last_message
                        });
                    } else {
                        GAME.socket.emit('ga', {
                            a: 600,
                            channel: GAME.chat_channel,
                            lm: GAME.chat_data[GAME.chat_channel].messages[0].time
                        });
                    }
                });
                $("body").on("click", `div[tp_data=go_teleport]`, (th) => {
                    const selectedText = window.getSelection().toString().trim();
                    if (!selectedText) {
                        let loc = parseInt($(th.target).closest(".qtrack").attr("data-loc"));
                        GAME.socket.emit('ga', {
                            a: 12,
                            type: 18,
                            loc: loc
                        });
                    }
                });
                $("body").on("click", `.kws_top_bar_section.sk_info`, () => {
                    GAME.page_switch('game_balls');
                });
                $("body").on("click", `.kws_top_bar_section.trader_info`, () => {
                    GAME.page_switch('game_events');
                });
                $("body").on("click", `.kws_top_bar_section.soul_cards_one`, () => {
                    GAME.socket.emit('ga', {
                        a: 58,
                        type: 7,
                        set: 0
                    });
                });
                $("body").on("click", `.kws_top_bar_section.soul_cards_two`, () => {
                    GAME.socket.emit('ga', {
                        a: 58,
                        type: 7,
                        set: 1
                    });
                });
                $("body").on("click", `.kws_top_bar_section.soul_cards_three`, () => {
                    GAME.socket.emit('ga', {
                        a: 58,
                        type: 7,
                        set: 2
                    });
                });
                $("body").on("click", `.kws_top_bar_section.soul_cards_four`, () => {
                    GAME.socket.emit('ga', {
                        a: 58,
                        type: 7,
                        set: 3
                    });
                });
                $("body").on("click", `.kws_top_bar_section.soul_cards_five`, () => {
                    GAME.socket.emit('ga', {
                        a: 58,
                        type: 7,
                        set: 4
                    });
                });
                $("body").on("click", `.kws_top_bar_section.additional_stats`, () => {
                    this.handleAdditionalTopBarVisibility();
                });
                $("body").on("click", `.kws_additional_top_bar_section.additional_stats_reset`, () => {
                    this.resetCalculatedPower();
                });
                $("body").on("click", `.kws_top_bar_section.train_upgr_info`, () => {
                    GAME.page_switch('game_train');
                });
                $('#drag_tracker').off('click').on('click', () => {
                    if (!this.settings.hide_tracker) {
                        $('#drag_con').hide();
                        this.settings.hide_tracker = true;
                    } else {
                        $('#drag_con').show();
                        this.settings.hide_tracker = false;
                    }
                    this.updateSettings();
                });
                $("body").on("click", ".qlink.get_titles_list", () => {
                    this.getTitlesList((html) => {
                        JQS.ldr.finish().fadeOut();
                        GAME.komunikat2(`<table id="char_titles" class="fast_titles_table" style="margin:0 auto;">${html}</table>`);
                        option_bind();
                        tooltip_bind();
                    });
                });
                $("body").on("click", ".fast_titles_table .option", () => {
                    setTimeout(() => {
                        GAME.maploaded = false;
                        GAME.prepareMap();
                    }, 300);
                });
                $("body").on("click", `.qlink.manage_auto_abyss`, () => {
                    if (!this.auto_abyss) {
                        this.auto_abyss = true;
                        $(".qlink.manage_auto_abyss").addClass("kws_active_icon");
                        this.auto_abyss_interval = setInterval(() => {
                            this.manageAutoAbyss();
                        }, 5000);
                    } else {
                        this.auto_abyss = false;
                        $(".qlink.manage_auto_abyss").removeClass("kws_active_icon");
                        clearInterval(this.auto_abyss_interval);
                    }
                });
                $("body").on("click", `.qlink.manage_auto_arena`, () => {
                    if (!this.auto_arena) {
                        this.auto_arena = true;
                        $(".qlink.manage_auto_arena").addClass("kws_active_icon");
                        this.manageAutoArena();
                    } else {
                        this.stopAutoArena();
                    }
                });
                $("body").on("click", `.qlink.manage_autoExpeditions`, () => {
                    this.manageAutoExpeditions();
                });
                $("body").on("click", `#secondary_char_stats .activities`, (event) => {
                    GAME.socket.emit('ga', {
                        a: 49,
                        type: 0
                    });
                    setTimeout(() => {
                        this.collectActivities();
                    }, 1000);
                });
                $("body").on("click", `#secondary_char_stats .instance`, () => {
                    GAME.socket.emit('ga', {
                        a: 44,
                        type: 0
                    });
                    setTimeout(() => {
                        $("#page_game_emp .newBtn.do_all_instances").eq(0).click();
                    }, 1000);
                });
                $("body").on("click", `#page_game_ekw .ekw_bck .ekw_slot`, (e) => {
                    let slot = $(e.target).closest(".ekw_slot").attr("id");
                    let slot_number = slot.replace(/[^0-9]/g, "");
                    GAME.socket.emit('ga', {
                        a: 12,
                        type: 4,
                        slot: slot_number,
                        page: GAME.ekw_page,
                        page2: GAME.ekw_page2
                    });
                });
                $("body").on("change", "#minimap_side", (el) => {
                    let value = parseInt($(el.target).val());
                    if (value == 0) {
                        $("#minimap_con").css({
                            "right": "-5px",
                            "left": "unset"
                        });
                    } else if (value == 1) {
                        $("#minimap_con").css({
                            "left": "-4px",
                            "right": "unset"
                        });
                    } else if (value == 2) {
                        $("#minimap_con").css({
                            "left": "-210px",
                            "right": "unset"
                        });
                    }
                    this.minimap.side = value;
                    this.manageMinimapSettings("save");
                });
                $("#minimap_range").on("input", (el) => {
                    let value = parseInt($(el.target).val());
                    $("#minimap_con").css({
                        "opacity": value / 100
                    });
                    this.minimap.opacity = value;
                    this.manageMinimapSettings("save");
                }).mouseup((el) => {
                    let value = parseInt($(el.target).val());
                    $("#minimap_con").css({
                        "opacity": value / 100
                    });
                });
                $("body").on("change", "#kws_sh_locInfo", (el) => {
                    let value = parseInt($(el.target).val());
                    if (value == 1) {
                        $("#kws_locInfo").css({
                            "display": "block"
                        });
                    } else {
                        $("#kws_locInfo").css({
                            "display": "none"
                        });
                    }
                    this.minimap.loc_info = value;
                    this.manageMinimapSettings("save");
                });
                $("body").on("change", "#kws_hidePilot", (el) => {
                    let value = parseInt($(el.target).val());
                    this.managePilot("set", value);
                });
                $("body").on("click", `.kws_mapsize_change`, () => {
                    let width = parseInt($(`input[name="kws_map_width"]`).val());
                    let height = parseInt($(`input[name="kws_map_height"]`).val());
                    if (width && height) {
                        this.manageMapSize("change", [width, height]);
                    }
                });
                $("body").on("click", `.kws_mapsize_reset`, () => {
                    this.manageMapSize("reset")
                });
                $("body").on("click", `.kws_change_website_bg`, () => {
                    let url = $("#new_website_bg").val();
                    this.manageWebsiteBackground("set", url);
                });
                $("body").on("click", `.kws_reset_website_bg`, () => {
                    this.manageWebsiteBackground("reset");
                });
                $("body").on("click", `[data-option="map_multi_pvp"]`, () => {
                    this.pvpKill();
                });
                $("body").on("click", `[data-option="map_quest_skip"]`, () => {
                    this.questProceed();
                    kom_clear();
                });
                $("body").on("click", `[data-option="map_quest_skip_time"]`, () => {
                    this.useCompressor();
                });
                $("body").on("click", `[data-option="map_alternative_pilot"]`, () => {
                    this.createAlternativePilot();
                });
                $(document).keydown((event) => {
                    if (!$("input, textarea").is(":focus")) {
                        if (event.key === "x" || event.key === "X") {
                            this.questProceed();
                            kom_clear();
                        } else if (event.key === "b" || event.key === "B") {
                            this.pvpKill();
                        } else if (event.key === "n" || event.key === "N") {
                            this.useCompressor();
                        } else if (event.key === "2") {
                            GAME.socket.emit('ga', {
                                a: 15,
                                type: 13
                            });
                        } else if (event.key === "3") {
                            GAME.socket.emit('ga', {
                                a: 39,
                                type: 32
                            });
                        } else if (event.key === "4") {
                            this.bless();
                        } else if (event.key === "5") {
                            setTimeout(() => {
                                GAME.socket.emit('ga', {
                                    a: 54,
                                    type: 0
                                });
                            }, 300);
                            setTimeout(() => {
                                this.vip();
                            }, 600);
                            GAME.socket.emit('ga', {
                                a: 15,
                                type: 7
                            });
                        } else if (event.key === "6") {
                            GAME.socket.emit('ga', {
                                a: 39,
                                type: 46,
                                rent: 3
                            });
                        } else if (event.key === "7") {
                            GAME.socket.emit('ga', {
                                a: 10,
                                type: 2,
                                ct: 0
                            });
                        } else if (event.key === "8") {
                            let set = $("#ekw_sets").find(".option.ek_sets_all" + ":not(.current)").attr("data-set");
                            if (set != undefined) {
                                GAME.socket.emit('ga', {
                                    a: 64,
                                    type: 2,
                                    set: set
                                });
                            }
                        } else if (event.key === "=") {
                            this.createAlternativePilot();
                        } else if (event.key === ",") {
                            this.goToPreviousChar();
                        } else if (event.key === ".") {
                            this.goToNextChar();
                        } else if (event.key === "9" && JQS.qcc.is(":visible")) { }
                    }
                });
                $("body").on("click", ".qlink.load_afo", () => {
                    if (typeof this.afo_is_loaded == 'undefined') {
                        this.afo_is_loaded = true;
                        $.get("https://raw.githubusercontent.com/Sabishi951/KW/refs/heads/main/uncodedeeee.js", (data) => {
                            $("body").append(`<script>${data}<\/script>`);
                        }).fail(() => {
                            GAME.komunikat("WystÄpiĹ bĹÄd w Ĺadowaniu skryptu, odĹwieĹź stronÄ i sprĂłbuj ponownie!");
                        });
                    } else {
                        GAME.komunikat("WystÄpiĹ bĹÄd w Ĺadowaniu skryptu, odĹwieĹź stronÄ i sprĂłbuj ponownie!");
                    }
                });

                $("body").on("click", ".qlink.go_to_emp", (el) => {
                    let emp = parseInt($(el.target).attr("emp"));
                    GAME.socket.emit('ga', {
                        a: 50,
                        type: 5,
                        e: emp
                    });
                });
                $("#kws_spawn").draggable({
                    handle: ".sekcja"
                });
                $('.spawn_switch').on('click', function () {
                    $("#kws_spawn2").toggle();
                });
                $("#kws_spawn input[type=checkbox], input[type=text]").change((chb) => {
                    switch ($(chb.target).attr("name")) {
                        case "ignoreMobs":
                            GAME.spawner[1] = $('#kws_spawn input[name="ignoreMobs"]').map((index, element) => {
                                return element.checked ? 1 : 0;
                            }).get();
                            break;
                        case "usePaToSpawn":
                            this.updatePaToSpawn($(chb.target).val());
                            break;
                    }
                });
                $("#secondary_char_stats").append(` <div class="instance" data-toggle="tooltip" data-original-title="<div class=tt>Instancje <br /><span class=&quot;red&quot;><b>Kliknij by wykonaÄ instancje</b></span></div>" class=""><i class="ico a11"></i> <span> <ul><ul/></span></div> <div class="activities" data-toggle="tooltip" data-original-title="<div class=tt>AktywnoĹci <br /><span class=&quot;red&quot;><b>Kliknij by odebraÄ aktywnoĹci</b></span></div>" class=""><i class="ico a12"></i> <span> <ul><ul/></span></div>`);
                $("body").on('change', '.autoExpeCodes input[type=checkbox]', (el) => {
                    let name = $(el.target).attr("name");
                    if (name === 'aeCodes') {
                        this.settings.aeCodes = $(el.target).is(':checked') ? true : false;
                    }
                    this.updateSettings();
                });
                $("body").on("click", `.quest_roll1.option`, () => {
                    var id = parseInt($(".quest_roll.option").attr("data-qb_id"));
                    if (roll1) {
                        roll1 = false;
                    } else {
                        roll1 = true;
                        GAME.socket.emit('ga', {
                            a: 22,
                            type: 1,
                            id: id
                        });
                    }
                });
                $("body").on("click", `.quest_roll2.option`, () => {
                    var id = parseInt($(".quest_roll.option").attr("data-qb_id"));
                    if (roll2) {
                        roll2 = false
                    } else {
                        roll2 = true;
                        GAME.socket.emit('ga', {
                            a: 22,
                            type: 1,
                            id: id
                        });
                    }
                });
                $("body").on("click", `.quest_roll3.option`, () => {
                    var id = parseInt($(".quest_roll.option").attr("data-qb_id"));
                    if (roll3) {
                        roll3 = false;
                    } else {
                        roll3 = true;
                        GAME.socket.emit('ga', {
                            a: 22,
                            type: 1,
                            id: id
                        });
                    }
                });
            }
            prepareFutureStatsData() {
                let staty = GAME.char_data;
                if(staty.reborn==0){
                    var moc=staty.sila+staty.szyb+staty.wytrz+staty.swoli+staty.ki;
                    var fb=Math.round(moc/10000000,3);
                    return `${LNG.lab166} : <span class="orange">${GAME.dots(fb)}</span>`;
                }
                if(staty.reborn==1){
                    var expm=Math.round(staty.exp/5000),mocm=Math.round(staty.moc/10);
                    var fb=expm+mocm;
                    return `${LNG.lab167} : <span class="orange" id="future_wspol">${GAME.dots(fb)}</span> [${LNG.lab217}: <span class="green">${GAME.dots(mocm)}</span>, ${LNG.lab218}: <span class="green">${GAME.dots(expm)}</span>]`;
                }
                if(staty.reborn==2){
                    var ps=0;
                    var moc=staty.sila+staty.szyb+staty.wytrz+staty.swoli+staty.ki;
                    var mocm=Math.round(moc/100000000000);
                    if(mocm>1000) mocm=1000;
                    ps+=mocm;
                    var wsplm=Math.round(staty.reborn_bonus/100);
                    if(wsplm>1000) wsplm=1000;
                    ps+=wsplm;
                    var fb=Math.round(staty.god/10000);
                    return `${LNG.lab168} : <span class="orange">${GAME.dots(fb)}</span> ${LNG.lab220} : <span class="orange">${GAME.dots(ps)}</span> [${LNG.lab217}: <span class="green">${GAME.dots(mocm)}</span>, ${LNG.lab219}: <span class="green">${GAME.dots(wsplm)}</span>]`;
                }
                if(staty.reborn==3){
                    var gki=1000;
                    var wtam=Math.floor(staty.wta/100000000000);
                    gki+=wtam;
                    var moc=staty.sila+staty.szyb+staty.wytrz+staty.swoli+staty.ki;
                    var mocm1=Math.round(moc/10000000000000);
                    gki+=mocm1;
                    if(gki>1000000) gki=1000000;
                    var ps=10;
                    var levm=Math.floor(staty.level/200);
                    ps+=levm;
                    var moc=staty.sila+staty.szyb+staty.wytrz+staty.swoli+staty.ki+staty.wta;
                    var mocm2=Math.floor(moc/10000000000000000);
                    ps+=mocm2;
                    if(ps>150) ps=150;
                    return `${LNG.lab169} : <span class="orange">${GAME.dots(gki)}</span> [1000 + ${LNG.lab217}: <span class="green">${GAME.dots(mocm1)}</span>, ${LNG.lab221}: <span class="green">${GAME.dots(wtam)}</span>] ${LNG.lab170} : <span class="orange">${GAME.dots(ps)}</span> [10+ ${LNG.lab217}: <span class="green">${GAME.dots(mocm2)}</span>, ${LNG.lab222}: <span class="green">${GAME.dots(levm)}</span>]`;
                }
                if(staty.reborn==4){
                    var ins=10;
                    var wtam=Math.floor(staty.wta/1000000000000);
                    ins+=wtam;
                    var gkid=staty.gki/1000;
                    ins+=gkid;
                    if(ins>100000) ins=100000;
                    return `${LNG.lab434} : <span class="orange">${GAME.dots(ins)}</span> [10 + ${LNG.lab435}: <span class="green">${GAME.dots(gkid)}</span>, ${LNG.lab221}: <span class="green">${GAME.dots(wtam)}</span>]`;
                }
            }
            handleAdditionalTopBarVisibility() {
                if(this.additionalTopBarVisible) {
                    this.hideAdditionalTopBar();
                    this.additionalTopBarVisible = false;
                } else {
                    this.showAdditionalTopBar();
                    this.additionalTopBarVisible = true;
                }
            }
            resetCalculatedPower() {
                this.baselinePower = undefined;
                this.baselineLevel = undefined;
            }
            showAdditionalTopBar() {
                $("#game_win")[0].style.marginTop = '30px';
                $("#top_bar")[0].style.height = '60px';
                $(".kws_additional_top_bar")[0].style.marginTop = '30px';
                $(".kws_additional_top_bar")[0].style.display = 'block';
            }
            hideAdditionalTopBar() {
                $(".kws_additional_top_bar")[0].style.display = 'none';
                $("#top_bar")[0].style.height = '30px';
                $("#game_win")[0].style.marginTop = '0px';
            }
            findTournamentCategory() {
                for (var type = 2; type <= 2; type++) {
                    for (var cat = 1; cat <= 69; cat++) {
                        if (GAME.isYourTourCat(type, cat, GAME.char_data.reborn, GAME.char_data.level)) {
                            this.tournamentCategory = cat;
                        }
                    }
                }
            }
            checkTournamentsSigning() {
                if(this.isCheckingTournaments) { /*console.log("KWA_TOURNAMENTS: currently handling tournaments sign");*/ return; }
                this.isCheckingTournaments = true;
                var currentServerTime = new Date(GAME.getTime()*1000);
                var currentServerHour = currentServerTime.getHours();
                var currentServerMinute = currentServerTime.getMinutes();
                //console.log("KWA_TOURNAMENTS: Check tournaments sign");
                if(currentServerHour > 20 || currentServerHour < 18) {
                    //console.log("KWA_TOURNAMENTS: Wrong hours, reset values");
                    this.tourSigned = false;
                    this.tournamentCategory = undefined;
                    this.newTournamentID = undefined;
                    this.isCheckingTournaments = false;
                } else if (!this.tourSigned) {
                    //console.log("KWA_TOURNAMENTS: not signed");
                    if ((currentServerHour == 18 && currentServerMinute > 9) || (currentServerHour > 18 && currentServerHour < 21)) {
                        //console.log("KWA_TOURNAMENTS: correct time");
                        this.tourSigned = true;
                        this.findTournamentCategory();
                        //console.log("KWA_TOURNAMENTS: tournament category fetched");
                        setTimeout(() => {
                            //console.log("KWA_TOURNAMENTS: fetch tournaments IDs");
                            if (this.tournamentCategory <= 54) {
                                GAME.emitOrder({a: 57, type: 0, type2: 0, page: 1});
                            } else {
                                GAME.emitOrder({a: 57, type: 0, type2: 0, page: 2});
                            }
                        }, 500);
                        setTimeout(() => { /*console.log("KWA_TOURNAMENTS: sign in player");*/GAME.emitOrder({a: 57, type: 1, tid: this.newTournamentID}); }, 1000);
                        setTimeout(() => { /*console.log("KWA_TOURNAMENTS: sign in all pets");*/GAME.emitOrder({a: 57, type: 4}); }, 1500);
                        setTimeout(() => { /*console.log("KWA_TOURNAMENTS: clear popups");*/kom_clear(); }, 2000);
                        setTimeout(() => { this.setTimerForTournamentsReset(); }, 5000);
                    } else {
                        this.isCheckingTournaments = false;
                    }
                }
            }
            setTimerForTournamentsReset() {
               //console.log("KWA_TOURNAMENTS: reset isCheckingTournaments flag");
                this.isCheckingTournaments = false;
            }
            createAlternativePilot() {
                document.getElementById('map_pilot').style.width = '512px';
                var customStyles = document.createElement('style');
                customStyles.type = 'text/css';
                customStyles.innerHTML = `
                    .qtrack {
                        width: 410px !important;
                        font-size: 12px !important;
                    }
                    .qtrack strong {
                        font-size: 12px !important;
                    }
                    .adv {
                        display: none !important;
                    }
                    .kom {
                        background: url(/gfx/layout/tloPilot.png) !important;
                        background-size: cover !important;
                        border-image: url(/gfx/layout/mapborder.png) 7 8 7 7 fill !important;
                        border-style: solid !important;
                        border-width: 7px 8px 7px 7px !important;
                        box-shadow: none !important;
                    }
                    .kom .close_kom b {
                        background: url(/gfx/layout/tloPilot.png) !important;
                    }
                    #war_container {
                        position: absolute !important;
                        left: 10px !important;
                        top: 565px !important;
                    }
                    #quest_con {
                        margin-top: -295px !important;
                        left: -510px !important;
                      }
                `;
                $("head").append(customStyles);
                var kwsHidePilotElement = document.getElementById('kws_hidePilot');
                var mapPilotElement = document.getElementById('map_pilot');
                if (kwsHidePilotElement) {
                    kwsHidePilotElement.value = '1';
                    var changeEvent = new Event('change');
                    kwsHidePilotElement.dispatchEvent(changeEvent);
                    if (kwsHidePilotElement.value === '1' && mapPilotElement) {
                        mapPilotElement.style.display = 'none';
                    }
                    var clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true, button: 0 });
                    kwsHidePilotElement.dispatchEvent(clickEvent);
                } else {
                    console.error('Element o ID "kws_hidePilot" nie zostaĹ znaleziony.');
                }
                var minimap = document.querySelector('#minimap_canvas');
                var gridCanvas = document.querySelector('#minimap_grid_canvas');
                var minimapLay = document.querySelector('.minimap_lay');
                var kwsLocInfo = document.querySelector('#kws_locInfo');

                if (minimap) {
                    minimap.style.left = '-15px';
                    minimap.style.top = '813px';
                }

                if (gridCanvas) {
                    gridCanvas.style.left = '-15px';
                    gridCanvas.style.top = '813px';
                }

                if (minimapLay) {
                    minimapLay.style.left = '-30px';
                    minimapLay.style.top = '802px';
                }

                if (kwsLocInfo) {
                   // kwsLocInfo.style.left = '-235px';
                   // kwsLocInfo.style.top = '860px';
		  kwsLocInfo.style.left = '-35px';
		  kwsLocInfo.style.top = '1030px';                   
                }

                $('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
                $('#map_canvas_container').append("<div style='position:absolute; top:530px; left:144px; z-index:999;'><button 		 id='klawiszw' style='width: 70px; height: 70px; border-radius: 5px; border: 2px solid white; padding: 5px; background-color: black; color: white; cursor: pointer; font-size: 50px;'>&#8593;</button></div>");
                $('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
                $('#map_canvas_container').append("<div style='position:absolute; top:530px; left:65px; z-index:999;'><button id='klawiszq' style='width: 70px; height: 70px; border-radius: 5px; border: 2px solid white; padding: 5px; background-color: black; color: white; cursor: pointer; font-size: 50px;'>Q</button></div>");
                $('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
                $('#map_canvas_container').append("<div style='position:absolute; top:530px; left:225px; z-index:999;'><button id='klawisze' style='width: 70px; height: 70px; border-radius: 5px; border: 2px solid white; padding: 5px; background-color: black; color: white; cursor: pointer; font-size: 50px;'>E</button></div>");
                $('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
                $('#map_canvas_container').append("<div style='position:absolute; top:607px; left:144px; z-index:999;'><button id='klawiszs' style='width: 70px; height: 70px; border-radius: 5px; border: 2px solid white; padding: 5px; background-color: black; color: white; cursor: pointer; font-size: 50px;'>&#8595;</button></div>");
                $('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
                $('#map_canvas_container').append("<div style='position:absolute; top:607px; left:65px; z-index:999;'><button id='klawisza' style='width: 70px; height: 70px; border-radius: 5px; border: 2px solid white; padding: 5px; background-color: black; color: white; cursor: pointer; font-size: 50px;'>&#8592;</button></div>");
                $('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
                $('#map_canvas_container').append("<div style='position:absolute; top:607px; left:225px; z-index:999;'><button id='klawiszd' style='width: 70px; height: 70px; border-radius: 5px; border: 2px solid white; padding: 5px; background-color: black; color: white; cursor: pointer; font-size: 50px;'>&#8594;</button></div>");
                $('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
                $('#map_canvas_container').append("<div style='position:absolute; top:684px; left:145px; z-index:999;'><button id='klawiszx' style='width: 70px; height: 70px; border-radius: 5px; border: 2px solid white; padding: 5px; background-color: black; color: white; cursor: pointer; font-size: 50px;'>x</button></div>");
                $('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
                $('#map_canvas_container').append("<div style='position:absolute; top:684px; left:65px; z-index:999;'><button id='klawiszz' style='width: 70px; height: 70px; border-radius: 5px; border: 2px solid white; padding: 5px; background-color: black; color: white; cursor: pointer; font-size: 50px;'>Z</button></div>");
                $('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
                $('#map_canvas_container').append("<div style='position:absolute; top:684px; left:225px; z-index:999;'><button id='klawiszc' style='width: 70px; height: 70px; border-radius: 5px; border: 2px solid white; padding: 5px; background-color: black; color: white; cursor: pointer; font-size: 50px;'>C</button></div>");
                $('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
                $('#map_canvas_container').append("<div style='position:absolute; top:761px; left:100px; z-index:999;'><button id='klawiszr' style='width: 70px; height: 70px; border-radius: 5px; border: 2px solid white; padding: 5px; background-color: black; color: white; cursor: pointer; font-size: 50px;'>R</button></div>");
                $('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');                 
                $('#map_canvas_container').append("<div style='position:absolute; top:761px; left:11px; z-index:999;'><button id='klawiszy' style='width: 70px; height: 70px; border-radius: 5px; border: 2px solid white; padding: 5px; background-color: black; color: white; cursor: pointer; font-size: 50px;'>Y</button></div>");                 
                $('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
                $('#map_canvas_container').append("<div style='position:absolute; top:761px; left:189px; z-index:999;'><button id='klawiszv' style='width: 70px; height: 70px; border-radius: 5px; border: 2px solid white; padding: 5px; background-color: black; color: white; cursor: pointer; font-size: 50px;'>V</button></div>");
                $('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
                // dodanie obrazka do kontenera
                $('#map_canvas_container').append("<div style='position:absolute; top:530px; left:310px; z-index:999;'><button id='klawiszqx3' style='width: 60px; height: 60px; border-radius: 5px; border: 2px solid white; padding: 5px; background-color: black; color: white; cursor: pointer; font-size: 16px;'>Qx5</button></div>");
                $('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
                $('#map_canvas_container').append("<div style='position:absolute; top:530px; left:373px; z-index:999;'><button id='klawiszwx3' style='width: 60px; height: 60px; border-radius: 5px; border: 2px solid white; padding: 5px; background-color: black; color: white; cursor: pointer; font-size: 16px;;'>&#8593;x5</button></div>");
                $('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
                $('#map_canvas_container').append("<div style='position:absolute; top:530px; left:436px; z-index:999;'><button id='klawiszex3' style='width: 60px; height: 60px; border-radius: 5px; border: 2px solid white; padding: 5px; background-color: black; color: white; cursor: pointer; font-size: 16px;'>Ex5</button></div>");
                $('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
                $('#map_canvas_container').append("<div style='position:absolute; top:595px; left:310px; z-index:999;'><button id='klawiszax3' style='width: 60px; height:60px; border-radius: 5px; border: 2px solid white; padding: 5px; background-color: black; color: white; cursor: pointer; font-size: 16px;'>&#8592;x5</button></div>");
                $('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
                $('#map_canvas_container').append("<div style='position:absolute; top:595px; left:373px; z-index:999;'><button id='klawiszsx3' style='width: 60px; height: 60px; border-radius: 5px; border: 2px solid white; padding: 5px; background-color: black; color: white; cursor: pointer; font-size: 16px;'>x5&#8595;</button></div>");
                $('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
                $('#map_canvas_container').append("<div style='position:absolute; top:595px; left:436px; z-index:999;'><button id='klawiszdx3' style='width:60px; height: 60px; border-radius: 5px; border: 2px solid white; padding: 5px; background-color: black; color: white; cursor: pointer; font-size: 16px;'>&#8594;x5</button></div>");
                $('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
                $('#map_canvas_container').append("<div style='position:absolute; top:660px; left:310px; z-index:999;'><button id='klawiszzx3' style='width: 60px; height: 60px; border-radius: 5px; border: 2px solid white; padding: 5px; background-color: black; color: white; cursor: pointer; font-size: 16px;'>Zx5</button></div>");
                $('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
                $('#map_canvas_container').append("<div style='position:absolute; top:660px; left:436px; z-index:999;'><button id='klawiszcx3' style='width: 60px; height: 60px; border-radius: 5px; border: 2px solid white; padding: 5px; background-color: black; color: white; cursor: pointer; font-size: 16px;'>Cx5</button></div>");
                $('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
                $('#map_canvas_container').append("<div style='position:absolute; top:730px; left:373px; z-index:999;'><button id='klawiszvx3' style='width: 60px; height: 60px; border-radius: 5px; border: 2px solid white; padding: 5px; background-color: black; color: white; cursor: pointer; font-size: 16px;'>Vx5</button></div>");
                $('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
                $('#map_canvas_container').append("<div style='position:absolute; top:730px; left:310px; z-index:999;'><button id='klawiszb5' style='width:60px; height: 60px; border-radius: 5px; border: 2px solid white; padding: 5px; background-color: black; color: white; cursor: pointer; font-size: 16px;'>B</button></div>");
                $('#map_canvas_container').append("<div style='position:absolute; top:730px; left:436px; z-index:999;'><button id='klawiszn' style='width: 60px; height: 60px; border-radius: 5px; border: 2px solid white; padding: 5px; background-color: black; color: white; cursor: pointer; font-size: 16px;'>N</button></div>");
	$('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
	$('#map_canvas_container').append("<div style='position:absolute; top:851px; left:89px; z-index:999;'><button id='klawisz1' style='width: 50px; height: 50px; border-radius: 5px; border: 2px solid white; padding: 5px; background-color: black; color: white; cursor: pointer; font-size: 20px;'>1</button></div>");	
	$('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
	$('#map_canvas_container').append("<div style='position:absolute; top:851px; left:149px; z-index:999;'><button id='klawisz2' style='width: 50px; height: 50px; border-radius: 5px; border: 2px solid white; padding: 5px; background-color: black; color: white; cursor: pointer; font-size: 20px;'>2</button></div>");
	$('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
	$('#map_canvas_container').append("<div style='position:absolute; top:851px; left:209px; z-index:999;'><button id='klawisz3' style='width: 50px; height: 50px; border-radius: 5px; border: 2px solid white; padding: 5px; background-color: black; color: white; cursor: pointer; font-size: 20px;'>3</button></div>");	
	$('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
	$('#map_canvas_container').append("<div style='position:absolute; top:911px; left:89px; z-index:999;'><button id='klawisz4' style='width: 50px; height: 50px; border-radius: 5px; border: 2px solid white; padding: 5px; background-color: black; color: white; cursor: pointer; font-size: 20px;'>4</button></div>");
	$('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
	$('#map_canvas_container').append("<div style='position:absolute; top:911px; left:149px; z-index:999;'><button id='klawisz5' style='width: 50px; height: 50px; border-radius: 5px; border: 2px solid white; padding: 5px; background-color: black; color: white; cursor: pointer; font-size: 20px;'>5</button></div>");	
	$('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
	$('#map_canvas_container').append("<div style='position:absolute; top:911px; left:209px; z-index:999;'><button id='klawisz6' style='width: 50px; height: 50px; border-radius: 5px; border: 2px solid white; padding: 5px; background-color: black; color: white; cursor: pointer; font-size: 20px;'>6</button></div>");	
	$('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
	$('#map_canvas_container').append("<div style='position:absolute; top:971px; left:89px; z-index:999;'><button id='klawisz7' style='width: 50px; height: 50px; border-radius: 5px; border: 2px solid white; padding: 5px; background-color: black; color: white; cursor: pointer; font-size: 20px;'>7</button></div>");	
	$('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
	$('#map_canvas_container').append("<div style='position:absolute; top:971px; left:149px; z-index:999;'><button id='klawisz8' style='width: 50px; height: 50px; border-radius: 5px; border: 2px solid white; padding: 5px; background-color: black; color: white; cursor: pointer; font-size: 20px;'>8</button></div>");
	$('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
	$('#map_canvas_container').append("<div style='position:absolute; top:971px; left:209px; z-index:999;'><button id='klawisz9' style='width: 50px; height: 50px; border-radius: 5px; border: 2px solid white; padding: 5px; background-color: black; color: white; cursor: pointer; font-size: 20px;'>9</button></div>");
	$('.clearfix').append('<div id="map_canvas_container" style="position:absolute; top:731px; left:59px; "></div>');
	$('#map_canvas_container').append("<div style='position:absolute; top:1031px; left:89px; z-index:999;'><button id='klawiszspacja' style='width: 150px; height: 50px; border-radius: 5px; border: 2px solid white; padding: 5px; background-color: black; color: white; cursor: pointer; font-size: 20px;'>----------------</button></div>");									
                this.bindAlternativePilotButtons();
            }
            bindAlternativePilotButtons() {
			$('#klawiszspacja').click(() => {
			    const originalCreateAlternativePilot = createAlternativePilot;
			    function createAlternativePilot() {
			    }

			    delete window.createAlternativePilot;

			    $('#klawiszw, #klawiszy, #klawisz1, #klawisz2, #klawisz3, #klawisz4, #klawisz5, #klawisz6, #klawisz7, #klawisz8, #klawisz9, #klawiszq, #klawisze, #klawiszs, #klawisza, #klawiszd, #klawiszx, #klawiszz, #klawiszc, #klawiszr, #klawiszy, #klawiszv, #klawiszqx3, #klawiszwx3, #klawiszex3, #klawiszax3, #klawiszsx3, #klawiszdx3, #klawiszzx3, #klawiszcx3, #klawiszvx3, #klawiszb5, #klawiszspacja, #klawiszn').remove();

			    var kwsHidePilotElement = document.getElementById('kws_hidePilot');
			    var mapPilotElement = document.getElementById('map_pilot');
			    if (kwsHidePilotElement) {
				kwsHidePilotElement.value = '0';
				var changeEvent = new Event('change');
				kwsHidePilotElement.dispatchEvent(changeEvent);
				if (kwsHidePilotElement.value === '0' && mapPilotElement) {
				    mapPilotElement.style.display = 'block';
				}
				var clickEvent = new MouseEvent('click', { bubbles: true, cancelable: true, button: 0 });
				kwsHidePilotElement.dispatchEvent(clickEvent);
			    }
			    createAlternativePilot = originalCreateAlternativePilot;
			});
      
                $('#klawiszw').click(() => {
                    GAME.map_move(2) // klawisz 'w'
                });
 		  $('#klawisz1').click(() => {
		  var keyEvent = jQuery.Event('keydown');
		  keyEvent.which = 49;  // Kod klawisza '1'
		  $(document).trigger(keyEvent);
		});	
		$('#klawisz2').click(() => {
		    GAME.socket.emit('ga', {
			a: 15,
			type: 13
		    });
		});

		$('#klawisz3').click(() => {
		    GAME.socket.emit('ga', {
			a: 39,
			type: 32
		    });
		});

		$('#klawisz4').click(() => {
		    this.bless();
		});

		$('#klawisz5').click(() => {
		    setTimeout(() => {
			GAME.socket.emit('ga', {
			    a: 54,
			    type: 0
			});
		    }, 300);
		    setTimeout(() => {
			this.vip();
		    }, 600);
		    GAME.socket.emit('ga', {
			a: 15,
			type: 7
		    });
		});

		$('#klawisz6').click(() => {
		    GAME.socket.emit('ga', {
			a: 39,
			type: 46,
			rent: 3
		    });
		});

		$('#klawisz7').click(() => {
		    GAME.socket.emit('ga', {
			a: 10,
			type: 2,
			ct: 0
		    });
		});

		$('#klawisz8').click(() => {
		    let set = $("#ekw_sets").find(".option.ek_sets_all" + ":not(.current)").attr("data-set");
		    if (set != undefined) {
			GAME.socket.emit('ga', {
			    a: 64,
			    type: 2,
			    set: set
			});
		    }
		});

		$('#klawisz9').click(() => {
		    var keyEvent = jQuery.Event('keydown');
		    keyEvent.which = 57;  // Kod klawisza '9'
		    $(document).trigger(keyEvent);
		});
            
                $('#klawiszq').click(() => {
                    GAME.map_move(6) //klawisz 'q'
                });
                $('#klawisze').click(() => {
                    GAME.map_move(5)// klawisz 'e'
                });
                $('#klawiszs').click(() => {
                    GAME.map_move(1) //klawisz 's'
                });
                $('#klawisza').click(() => {
                    GAME.map_move(8) //Klawisz 'a'
                });
                $('#klawiszd').click(() => {
                    GAME.map_move(7)//klawisz 'd'
                });
                $('#klawiszx').click(() => {
                    this.questProceed();
                    kom_clear();
                    GAME.executeIx();
                });
                $('#klawiszz').click(() => {
                    GAME.map_move(4)//klawisz 'z'
                });
                $('#klawiszc').click(() => {
                    GAME.map_move(3)//klawisz 'c'
                });
                $('#klawiszr').click(() => {
                    GAME.emitOrder({ a: 13, mob_num: GAME.field_mob_id, fo: GAME.map_options.ma })//klawisz 'r'
                });
                $('#klawiszy').click(() => { 
                    GAME.emitOrder({a:444,max:GAME.spawner[0],ignore:GAME.spawner[1]})//klawisz 'y' 
                }); 
                $('#klawiszv').click(() => {
                    GAME.emitOrder({ a: 7, order: 2, quick: 1, fo: GAME.map_options.ma })// klawisz 'v'
                });
                $('#klawiszqx3').click(() => {
                    for (let i = 0; i < 5; i++) {
                        setTimeout(() => {
                            GAME.map_move(6)
                        }, i * 130);
                    }
                });
                $('#klawiszwx3').click(() => {
                    for (let i = 0; i < 5; i++) {
                        setTimeout(() => {
                            GAME.map_move(2) // klawisz 'w' x 3
                        }, i * 130);
                    }
                });
                $('#klawiszex3').click(() => {
                    for (let i = 0; i < 5; i++) {
                        setTimeout(() => {
                            GAME.map_move(5)
                        }, i * 130);
                    }
                });
                $('#klawiszax3').click(() => {
                    for (let i = 0; i < 5; i++) {
                        setTimeout(() => {
                            GAME.map_move(8)
                        }, i * 130);
                    }
                });
                $('#klawiszsx3').click(() => {
                    for (let i = 0; i < 5; i++) {
                        setTimeout(() => {
                            GAME.map_move(1)
                        }, i * 130);
                    }
                });
                $('#klawiszdx3').click(() => {
                    for (let i = 0; i < 5; i++) {
                        setTimeout(() => {
                            GAME.map_move(7)
                        }, i * 130);
                    }
                });
                $('#klawiszzx3').click(() => {
                    for (let i = 0; i < 5; i++) {
                        setTimeout(() => {
                            GAME.map_move(4)
                        }, i * 130);
                    }
                });
                $('#klawiszcx3').click(() => {
                    for (let i = 0; i < 5; i++) {
                        setTimeout(() => {
                            GAME.map_move(3)
                        }, i * 130);
                    }
                });
                $('#klawiszvx3').click(() => {
                    for (let i = 0; i < 5; i++) {
                        setTimeout(() => {
                            GAME.emitOrder({ a: 7, order: 2, quick: 1, fo: GAME.map_options.ma })
                        }, i * 130);
                    }
                });
                $('#klawiszb5').click(() => {
                    this.pvpKill();
                });
                $('#klawiszn').click(() => {
                    this.useCompressor()
                });
            }
            goToNextChar() {
                this.resetAFO();
                var charId = this.charactersManager.getNextCharId();
                GAME.emitOrder({ a: 2, char_id: charId });
            }
            goToPreviousChar() {
                this.resetAFO();
                var charId = this.charactersManager.getPreviousCharId();
                GAME.emitOrder({ a: 2, char_id: charId });
            }
            adjustCurrentCharacterId() {
                var thisCharId = GAME.char_id;
                if (thisCharId != this.charactersManager.currentCharacterId) {
                    this.charactersManager.setCurrentCharacterId(thisCharId);
                }
            }
            resetAFO() {
                //console.log("KWA_RESET_AFO: reset AFO values");
                if ($("#resp_Panel .resp_status").eq(0).hasClass("green")) {
                    $("#resp_Panel .resp_button.resp_resp").click();
                }
                if ($("#pvp_Panel .pvp_status").eq(0).hasClass("green")) {
                    $("#pvp_Panel .pvp_button.pvp_pvp").click();
                }
                if ($("#lpvm_Panel .lpvm_status").eq(0).hasClass("green")) {
                    $("#lpvm_Panel .lpvm_button.lpvm_lpvm").click();
                }
                if ($("#res_Panel .res_status").eq(0).hasClass("green")) {
                    $("#res_Panel .res_button.res_res").click();
                }
                if ($(".manage_autoExpeditions").eq(0).hasClass("kws_active_icon")) {
                    $(".manage_autoExpeditions").click();
                }
                setTimeout(() => {
                    //console.log("KWA_RESET_AFO: reset tournaments values");
                    this.tourSigned = false;
                    this.tournamentCategory = undefined;
                    this.newTournamentID = undefined;
                    this.isCheckingTournaments = false;
                }, 1000);
            }
        }
        const kws = new kwsv3(kwsLocalCharacters);
        GAME.komunikat2 = function (kom) {
            if (this.koms.indexOf(kom) == -1) {
                if (this.komc > 50) this.komc = 40;
                var ind = this.koms.push(kom) - 1;
                JQS.kcc.append(`<div class="kom" style="top:130px; width:480px;"><div class="close_kom" data-ind="${ind}"><b>X</b></div><div class="content">${kom}</div></div>`);
                this.komc++;
                kom_close_bind();
            }
        }
        GAME.cached_data = function () {
            var pos = $('#char_buffs').offset();
            pos.left -= 75;
            pos.top -= 75;
            this.char_buffs_pos = pos;
            if (GAME.char_id != 0 && GAME.quick_opts.online_reward) {
                setTimeout(() => {
                    GAME.socket.emit('ga', {
                        a: 26,
                        type: 1
                    });
                    setTimeout(() => {
                        $('#daily_reward').fadeOut();
                        kom_clear();
                    }, 400);
                }, 1800);
            }
            setTimeout(() => {
                if (GAME.emp_wars.length < 3 && GAME.quick_opts.empire) {
                    setTimeout(() => {
                        kws.wojny2();
                    }, 300);
                }
            }, 1500);
            GAME.startLevel = GAME.char_data.level;
            GAME.startTime = Date.now();
            setTimeout(() => {
                if (GAME.char_data.planetary == 0) {
                    setTimeout(() => {
                        GAME.socket.emit('ga', {
                            a: 39,
                            type: 34
                        });
                    }, 300);
                }
            }, 1200);
            const emitCalls = [{
                a: 33,
                type: 0
            }, {
                a: 49,
                type: 0
            }, {
                a: 29,
                type: 0
            },];
            let cd = [300, 600, 900];
            emitCalls.forEach((data, i) => {
                setTimeout(() => {
                    GAME.socket.emit('ga', data);
                }, cd[i]);
            });
            $('#train_uptime').html(GAME.showTimer(GAME.char_data.train_ucd - GAME.getTime()));
            setTimeout(() => {
                if (kws.check_act()) {
                    $("#secondary_char_stats .activities").click();
                }
            }, 1200);
            GAME.parseQuickOpts(1);
            kws.workers_info = [false, false];
            arena_count = 0;
            pvp_count = 0;
            setTimeout(() => {
                if ((GAME.char_data.reborn == 4 || GAME.char_data.reborn == 5) && GAME.char_data.alt_transform_expiry < GAME.getTime()) {
                    GAME.socket.emit('ga', {
                        a: 18,
                        type: 8,
                        tech_id: 134
                    });
                }
            }, 5300);
        }
        GAME.parseQuickOpts = function (newq_bar = false) {
            var opts = '';
            if (this.quick_opts.tutorial) {
                this.tutorials = this.quick_opts.tutorial;
                opts += `<img id="open_tuts" src="/gfx/layout/helper.png" class="qlink2 option" data-option="open_tuts" data-toggle="tooltip" data-original-title="<div class=tt>${LNG.lab358}</div>" />`;
                $.getJSON('/json/tutorial.json', function (json) {
                    GAME.tutorial_data = json.tuts;
                    GAME.checkTutorial();
                });
            }
            if (this.quick_opts.private_planet) opts += `<div class="option qlink priv" data-option="private_teleport" data-toggle="tooltip" data-original-title="<div class=tt>${LNG.lab138}</div>"></div>`;
            if (this.quick_opts.teleport) opts += `<div class="option qlink tele" data-option="use_teleport" data-toggle="tooltip" data-original-title="<div class=tt>${LNG.lab140}</div>"></div>`;
            if (this.quick_opts.travel) opts += `<div class="option qlink trav" data-option="use_travel" data-toggle="tooltip" data-original-title="<div class=tt>${LNG.lab141}</div>"></div>`;
            if (this.quick_opts.ssj) {
                opts += `<div class="option qlink ssj${this.quick_opts.ssj[0] == "116" ? "_uio" : this.quick_opts.ssj[1]} show_qat" data-option="use_transform" data-tech="${this.quick_opts.ssj[0]}"data-toggle="tooltip" data-original-title="<div class=tt>${LNG.lab139}</div>"></div>`;
                opts += `<div id="quick_allTransformations"></div>`;
            }
            if (this.quick_opts.online_reward) opts += `<div class="option qlink dail" data-option="daily_reward" data-toggle="tooltip" data-original-title="<div class=tt>${LNG.lab176}</div>"></div>`;
            if (this.quick_opts.bless) opts += `<div class="select_page qlink bles" data-page="game_buffs" data-toggle="tooltip" data-original-title="<div class=tt>${LNG.lab188}</div>"></div>`;
            if (this.quick_opts.sub && this.quick_opts.sub.length) opts += `<div class="option qlink subs" data-option="quick_use_subs" data-toggle="tooltip" data-original-title="<div class=tt>${LNG.lab189}</div>"></div>`;
            if (this.quick_opts.senzus && this.quick_opts.senzus.length) {
                opts += `<div class="option qlink senz" data-option="quick_use_senzu" data-toggle="tooltip" data-original-title="<div class=tt>${LNG.lab190}</div>"></div>`;
            }
            if (this.quick_opts.empire) {
                opts += `<div class="select_page qlink emp${this.quick_opts.empire} empPos" data-page="game_empire" data-toggle="tooltip" data-original-title="<div class=tt>${LNG['empire' + this.quick_opts.empire]}</div>"></div>`;
                opts += `<div class="go_to_emp_con"> <div class="qlink go_to_emp emp1" style="filter:hue-rotate(168deg);" emp="1" data-toggle="tooltip" data-original-title="<div class=tt>WejdĹş na siedzibÄ</div>"></div> <div class="qlink go_to_emp emp2" style="filter:hue-rotate(168deg);" emp="2" data-toggle="tooltip" data-original-title="<div class=tt>WejdĹş na siedzibÄ</div>"></div> <div class="qlink go_to_emp emp3" style="filter:hue-rotate(168deg);" emp="3" data-toggle="tooltip" data-original-title="<div class=tt>WejdĹş na siedzibÄ</div>"></div> <div class="qlink go_to_emp emp4" style="filter:hue-rotate(168deg);" emp="4" data-toggle="tooltip" data-original-title="<div class=tt>WejdĹş na siedzibÄ</div>"></div> </div>`;
            }
            if (newq_bar || GAME.char_id) {
                opts += '<br>';
                if (GAME.clan_laws) {
                    opts += `<div class="option qlink priv" style="filter:hue-rotate(168deg);" data-option="clan_planet_travel" data-toggle="tooltip" data-original-title="<div class=tt>Planeta klanowa</div>"></div>`;
                }
                if (GAME.char_data.klan_rent == 0) {
                    opts += `<div class="qlink get_titles_list" style="filter:hue-rotate(168deg);background-image: url('https://i.imgur.com/0eQCqBl.png');" data-toggle="tooltip" data-original-title="<div class=tt>ZmieĹ tytuĹ</div>"></div>`;
                }
                opts += `<div class="qlink load_afo" style="filter:hue-rotate(168deg);background-image: url('https://i.imgur.com/P8sJgQz.png');" data-toggle="tooltip" data-original-title="<div class=tt>ZaĹaduj AFO</div>"></div>`;
                opts += `<div class="qlink sideIcons manage_auto_abyss${kws.auto_abyss ? ' kws_active_icon' : ''}" style="filter:hue-rotate(168deg);background-image: url('https://i.imgur.com/j5eQv2B.png');display:block;top:-136px;position:absolute;" data-toggle="tooltip" data-original-title="<div class=tt>[WĹÄcz / WyĹÄcz] Atakowanie OtchĹani</div>"></div>`;
                opts += `<div class="qlink sideIcons manage_auto_arena${kws.auto_arena ? ' kws_active_icon' : ''}" style="filter:hue-rotate(168deg);background-image: url('https://i.imgur.com/rAroNzD.png');display:block;top:-104px;position:absolute;" data-toggle="tooltip" data-original-title="<div class=tt>[WĹÄcz / WyĹÄcz] Atakowanie na Arenie</div>"></div>`;
                opts += `<div class="qlink sideIcons manage_autoExpeditions${kws.autoExpeditions ? ' kws_active_icon' : ''}" style="filter:hue-rotate(168deg);background-image: url('https://i.imgur.com/uSMzLBb.png');display:block;top:-72px;position:absolute;" data-toggle="tooltip" data-original-title="<div class=tt>[WĹÄcz / WyĹÄcz] Automatyczne Wyprawy</div>"></div>`;
                opts += ` <div class="autoExpeCodes"> <div style="padding-left:8px;"> <label for="aeCodes" style="cursor:pointer;">KODY</label> <div class="newCheckbox"><input type="checkbox" id="aeCodes" name="aeCodes" ${kws.settings.aeCodes ? "checked" : ""} /><label for="aeCodes"></label></div> </div> </div>`;
            }
            $('#quick_bar').html(opts);
            if (GAME.char_id && GAME.char_data.klan_rent === 0) {
                kws.listQts();
                if ("empire" in GAME.quick_opts) {
                    kws.goEmpPos();
                }
            }
            option_bind();
            tooltip_bind();
            page_bind();
        }
        GAME.parseTracker = function (track) {
            GAME.socket.emit('ga', {
                a: 22,
                type: 3
            });
            track.sort((a, b) => a.want.type - b.want.type);
            var con = '';
            let zwykle_html_dsa = '';
            let codzienne_html_dsa = '';
            let main_quest = ``;
            var any = false;
            if (track && track.length) {
                var len = track.length;
                for (var i = 0; i < len; i++) {
                    any = true;
                    var qn = track[i].header;
                    if (qn.length > 15) qn = qn.slice(0, 15) + '...';
                    let attroqq = $(`#page_game_qb #qb_list #quest_log_tr${track[i].qb_id}`).find(`.qb_right:contains("[ Codzienne ]")`).length;
                    if (track[i].m == 1) {
                        main_quest += `<div id="track_quest_${track[i].qb_id}" class="qtrack option" data-option="go_teleport" data-loc="${track[i].loc}"><div class="sep3"></div><b style="color:orange;">${qn}</b> ${this.quest_want(track[i].want, track[i].qb_id)}</div>`;
                    } else if (attroqq == 1) {
                        codzienne_html_dsa += `<div id="track_quest_${track[i].qb_id}" class="qtrack option" data-option="go_teleport" data-loc="${track[i].loc}"><div class="sep2"></div><b style="color:#63aaff;" >${qn}</b> ${this.quest_want(track[i].want, track[i].qb_id)}</div>`;
                    } else {
                        zwykle_html_dsa += `<div id="track_quest_${track[i].qb_id}" class="qtrack option" data-option="go_teleport" data-loc="${track[i].loc}"><div class="sep2"></div><b>${qn}</b> ${this.quest_want(track[i].want, track[i].qb_id)}</div>`;
                    }
                }
            }
            if (any) {
                con += codzienne_html_dsa;
                con += zwykle_html_dsa;
                $('#drag_con').html(`${main_quest}${con}`);
                $('#drag_con').removeClass('scroll');
                $('#quest_track_con').show();
                if (!kws.settings.hide_tracker) {
                    $('#drag_con').show();
                } else {
                    $('#drag_con').hide();
                }
            } else {
                $('#quest_track_con').hide();
            }
            kws.markDaily();
        }
        GAME.getEmpDetails = function (petd) {
            kws.findWorker(petd, (el) => {
                let emp_local = parseInt(el.attr("data-emp_local"));
                el.after(`<button class="newBtn do_all_instances" data-emp="${petd.id}" data-emp_local="${emp_local}">Wykonaj wszystkie instancje</button>`);
            });
            var res = '<div class=ptt>';
            var nextp = this.employe_exp(petd.level + 1);
            res += '<img src=/gfx/employee/' + petd.type + '.png width=100 align=left /><b>' + petd.name + '</b><br /><b>' + LNG['emptyp' + petd.type] + '</b> - <b class=item' + petd.class + '>' + LNG['item_class' + petd.class] + '</b><br />' + LNG.lab1 + ': <b>' + this.dots(petd.level) + '</b><br />EXP: <b>' + this.dots(petd.exp) + ' / ' + this.dots(nextp) + '</b><br /><br /><b class=orange>' + LNG.lab286 + '</b><br />';
            res += LNG.lab313 + ': <b>' + petd.energy + '</b> / <b>' + petd.maxenergy + '</b><br />';
            if (petd.qualified) res += '<b class=green>' + LNG.lab314 + '</b><br />';
            res += '</div>';
            return res;
        }
        GAME.abbreviateNumber = function (number, decPlaces = 2) {
            decPlaces = Math.pow(10, decPlaces);
            var abbrev = ["K", "M", "Mld", "B", "Bld", "T", "Quad", "Quin", "Sext", "Sep", "Oct", "Non", "Dec", "Und", "Duo", "Tre", "Quat", "Quind", "Sexd", "Sept", "Octo", "Nove", "Vigi"];
            for (var i = abbrev.length - 1; i >= 0; i--) {
                var size = Math.pow(10, (i + 1) * 3);
                if (size <= number) {
                    number = Math.floor(number * decPlaces / size) / decPlaces;
                    if ((number == 1000) && (i < abbrev.length - 1)) {
                        number = 1;
                        i++;
                    }
                    number += ' ' + abbrev[i];
                    break;
                }
            }
            return number;
        }
        GAME.questAction = () => {
            if (GAME.quest_action && GAME.quest_action_count < GAME.quest_action_max) {
                GAME.socket.emit('ga', {
                    a: 22,
                    type: 7,
                    id: GAME.quest_action_qid,
                    cnt: GAME.quest_action_max
                });
            }
            setTimeout(() => {
                kws.markDaily();
            }, 100);
        }
        GAME.parseQuest = function (res) {
            var quest = res.q_step;
            var con = '<div class="quest_win diff' + quest.difficulty + '"><div class="sekcja">' + quest.header + '</div><div class="option closeicon" data-option="close_quest"></div><div class="quest_desc scroll"><span class="qtitle">&raquo; ' + quest.title + '</span><hr />' + this.parseContent(quest.content).replaceAll('&player', '<b class="orange">' + this.char_data.name + '</b>').replaceAll('&Player', '<b class="orange">' + this.char_data.name + '</b>') + '</div>';
            var qrdy = true;
            var conf = '';
            if (quest.want) {
                var extr = '';
                var extr1 = '';
                var extr2 = '';
                var extr3 = '';
                if (quest.difficulty > 0) {
                    var ratio = this.getDiffQuestRatio(1, quest.difficulty);
                    if (ratio < 1) extr = '<span class="green"> - ' + (100 - ratio * 100) + '% </span>';
                    else extr = '<span class="red"> + ' + (ratio * 100 - 100) + '% </span>';
                }
                if (quest.can_roll) {
                    extr += '<div class="quest_roll option" data-option="quest_roll" data-qb_id="' + quest.qb_id + '" data-toggle="tooltip" data-original-title="<div class=tt>Losuj innÄ trudnoĹÄ zadania<br />Koszt: 1 Kostka do Gry</div>"></div>';
                    extr1 += '<div class="quest_roll1 option" data-option="quest_roll1" data-qb_id="' + quest.qb_id + '" data-toggle="tooltip" data-original-title="<div class=tt>Losuj -50%<br />Koszt: 1 Kostka do Gry</div>"></div>';
                    extr2 += '<div class="quest_roll2 option" data-option="quest_roll2" data-qb_id="' + quest.qb_id + '" data-toggle="tooltip" data-original-title="<div class=tt>Losuj 150% lub 200%<br />Koszt: 1 Kostka do Gry</div>"></div>';
                    extr3 += '<div class="quest_roll3 option" data-option="quest_roll3" data-qb_id="' + quest.qb_id + '" data-toggle="tooltip" data-original-title="<div class=tt>Losuj 200%<br />Koszt: 1 Kostka do Gry</div>"></div>';
                }
                con += '<div class="quest_desc">';
                qrdy = quest.want.is_met;
                con += '<div><b>' + LNG.lab18 + '</b>:<br />' + this.quest_want(quest.want, quest.qb_id, 1, quest.difficulty) + ' ' + extr + ' ' + extr1 + ' ' + extr2 + ' ' + extr3 + '</div>';
                if (quest.time_limit) {
                    con += '<div>' + LNG.lab145 + ': ' + this.showTimer(quest.want.tl - this.getTime()) + '<button class="newBtn option" data-option="quest_try_again" data-qb_id="' + quest.qb_id + '">' + LNG.lab146 + '</button></div>';
                }
                con += '</div>';
            }
            if (quest.prize) {
                var extr = '';
                if (quest.difficulty > 0) {
                    con += '<div class="quest_desc disabled"><b>' + LNG.lab452 + '</b>:<br />' + this.quest_prize(quest.prize) + '</div>';
                    var ratio = this.getDiffQuestRatio(0, quest.difficulty);
                    if (ratio < 1) extr = '<span class="red"> - ' + (100 - ratio * 100) + '% </span>';
                    else extr = '<span class="green"> + ' + (ratio * 100 - 100) + '% </span>';
                    var ratio2 = this.getDiffQuestRatio(2, quest.difficulty);
                    if (ratio2 > 0) extr += '<span class="orange"> ' + ratio2 + '% szansy na MagicznÄ RudÄ</span>';
                    if (quest.prize.type == 7 || quest.prize.type == 52 || quest.prize.type == 57) quest.prize.amount = parseInt(quest.prize.amount * ratio);
                    else quest.prize.id = parseInt(quest.prize.id * ratio);
                    if (quest.prize.hasOwnProperty("exp")) quest.prize.exp = parseInt(quest.prize.exp * ratio);
                    if (quest.prize.hasOwnProperty("add")) quest.prize.add = parseInt(quest.prize.add * ratio);
                    con += '<div class="quest_desc"><b>' + LNG.lab21 + '</b>:<br />' + this.quest_prize(quest.prize) + ' ' + extr + '</div>';
                } else {
                    con += `<div class="quest_desc"><b>${LNG.lab21}</b>:<br />${this.quest_prize(quest.prize)} ${quest.prize.type === 40 ? kws.calcLVL(quest.prize.exp) : ""}</div>`;
                }
                if (quest.prize.type >= 99) conf = 'data-confirm="1"';
            }
            if (qrdy) {
                con += '<button class="option ans" data-option="finish_quest" ' + conf + ' data-button="1" data-qb_id="' + quest.qb_id + '">' + quest.buttton1 + '</button>';
                if (quest.buttton2) con += '<button class="option ans" data-option="finish_quest" data-button="2" data-qb_id="' + quest.qb_id + '">' + quest.buttton2 + '</button>';
                if (quest.buttton3) con += '<button class="option ans" data-option="finish_quest" data-button="3" data-qb_id="' + quest.qb_id + '">' + quest.buttton3 + '</button>';
            }
            con += '</div>';
            JQS.qcc.html(con).show();
            option_bind();
            qaction_bind();
            main_ekw_item_bind();
            tooltip_bind();
            if (res.q_step.want.riddle) {
                kws.solveRiddle(res.q_step.want.riddle);
            }
            setTimeout(() => {
                if (quest.difficulty != 6 && quest.difficulty != 5 && roll2 && JQS.qcc.is(":visible")) {
                    GAME.socket.emit('ga', {
                        a: 22,
                        type: 12,
                        id: quest.qb_id
                    });
                } else {
                    roll2 = false;
                }
            }, 300);
            setTimeout(() => {
                if (quest.difficulty != 6 && roll3 && JQS.qcc.is(":visible")) {
                    GAME.socket.emit('ga', {
                        a: 22,
                        type: 12,
                        id: quest.qb_id
                    });
                } else {
                    roll3 = false;
                }
            }, 300);
            setTimeout(() => {
                if (quest.difficulty != 1 && roll1 && JQS.qcc.is(":visible")) {
                    GAME.socket.emit('ga', {
                        a: 22,
                        type: 12,
                        id: quest.qb_id
                    });
                } else {
                    roll1 = false;
                }
            }, 300);
        };
        GAME.endQuest = function (quest_end) {
            JQS.qcc.hide();
            $('#field_q_' + quest_end).fadeOut();
            for (var ind in this.map_quests) {
                if (this.map_quests.hasOwnProperty(ind)) {
                    var len = this.map_quests[ind].length;
                    for (var i = 0; i < len; i++) {
                        if (this.map_quests[ind][i].qb_id == quest_end) {
                            this.map_quests[ind][i].end = 1;
                        }
                    }
                }
            }
            if (GAME.map_quests) {
                kws.parseMapInfo(GAME.map_quests, "GAME.endQuest");
            }
        };
        GAME.moveQuest = function (quest_move) {
            if (this.char_data.loc == quest_move.loc) {
                JQS.qcc.hide();
                $('#field_q_' + quest_move.qb_id).fadeOut();
                for (var ind in this.map_quests) {
                    if (this.map_quests.hasOwnProperty(ind)) {
                        var len = this.map_quests[ind].length;
                        for (var i = 0; i < len; i++) {
                            if (this.map_quests[ind][i].qb_id == quest_move.qb_id) {
                                this.map_quests[ind][i].move = {
                                    new_x: quest_move.x,
                                    new_y: quest_move.y,
                                    start: this.getmTime(),
                                    duration: 300
                                };
                            }
                        }
                    }
                }
                if (GAME.map_quests) {
                    kws.parseMapInfo(GAME.map_quests, "GAME.moveQuest");
                }
            } else this.endQuest(quest_move.qb_id);
        };
	GAME.parseLocBons_o = GAME.parseLocBons;
        GAME.parseLocBons = function (loc_data) {
            kws.parseMapInfo(GAME.map_quests, "GAME.parseLocBons");
            //var bons = '';
            //if (loc_data.bonus_tren) bons += '<img src="/gfx/icons/loc_bon/tren.png" data-toggle="tooltip" data-original-title="<div class=tt><b>' + loc_data.bonus_tren + '</b>' + LNG.item_stat15 + '</div>" />';
            //if (loc_data.bonus_exp) bons += '<img src="/gfx/icons/loc_bon/exp.png" data-toggle="tooltip" data-original-title="<div class=tt><b>' + loc_data.bonus_exp + '</b>' + LNG.item_stat16 + '</div>" />';
            //if (loc_data.bonus_mocc) bons += '<img src="/gfx/icons/loc_bon/mc.png" data-toggle="tooltip" data-original-title="<div class=tt><b>' + loc_data.bonus_mocc + '</b>' + LNG.item_stat53 + '</div>" />';
            //if (loc_data.bonus_mocv) bons += '<img src="/gfx/icons/loc_bon/mv.png" data-toggle="tooltip" data-original-title="<div class=tt><b>' + loc_data.bonus_mocv + '</b>' + LNG.item_stat54 + '</div>" />';
            //if (loc_data.bonus_legend) bons += '<img src="/gfx/icons/loc_bon/l.png" data-toggle="tooltip" data-original-title="<div class=tt><b>' + loc_data.bonus_legend + '</b>' + LNG.item_stat74 + '</div>" />';
            //if (loc_data.bonus_psk) bons += '<img src="/gfx/icons/loc_bon/p.png" data-toggle="tooltip" data-original-title="<div class=tt><b>' + loc_data.bonus_psk + '</b>' + LNG.item_stat67 + '</div>" />';
            //if (loc_data.bonus_senzu) bons += '<img src="/gfx/icons/loc_bon/s.png" data-toggle="tooltip" data-original-title="<div class=tt><b>' + loc_data.bonus_senzu + '</b>' + LNG.item_stat78 + '</div>" />';
            return GAME.parseLocBons_o(loc_data); //bons;
        };
        GAME.emit = function (order, data, force) {
            if (!this.is_loading || force) {
                this.load_start();
                this.socket.emit(order, data);
            } else if (this.debug) console.log('failed order', order, data);
        };
        GAME.emitOrder = function (data, force = false) {
            this.emit('ga', data, force);
        };
        GAME.initiate = function () {
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
        const kulka = new ballManager();
        const ekwipunek = new ekwipunekMenager();
        let adimp = false;
        let arena_count = 0;
        let pvp_count = 0;
        let roll2 = false;
        let roll1 = false;
        let roll3 = false;
        let version = '3.7.1';
    }
    )
}
