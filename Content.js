	$(document).bind('keydown', '0', function(){
        if(JQS.chm.is(":focus") == false){
          GAME.komunikat("Legenda: Klawisz 1- start/stop, 2-tp PP, 3-błogo, 4-odbieranie vip, N-zegarki, B-pvp, X-opcja dalej, zamykanie raportów/komunikatów, zbieranie" + "<br>" +" 06.01-poprawa klawisza B jak i skryptów pvp kosztem braku możliwości samodzielnego atakowania" + "<br>" + "01.01 - dodanie wojen klanowych na s19, dodanie automatycznego odbierania nagrody za coddzienne logowanie" + "<br>" +"10.12 - dalsze poprawki postępu zadań, od teraz zapamiętuje stan postępu zadań w pamięci lokalnej(po schwoaniu i zresetowaniu strony dalej będzie schowane), cofnięcie zmian na głębi" + "<br>" + "06.12 - poprawa postępu zadań, poprawki omijania fragów na głębi " + "<br>" + "04.12 - poprawiono omijanie fragów w skrypcie na planetarne ")
        }
        return false;
    });

GAME.emitOrder = (data) => GAME.socket.emit('ga',data);
var tabela99=[433273,464892,479357,476597,468932,210845,426373,393700,449850,433094,462458,291156,342270,479673,481132,220784,395234,322483,480606,458895,460037,318583,479201,356936,480620,463612,481193,345396,426491,480228,463136,481092,47839,472686,441347,336486,443902,471383,462486,448665,479597,472270,307088,467402,479395,466860,481954,471054,466120,477259,472756];
    var freeAssist = document.createElement('button');
    freeAssist.innerHTML = "ASYSTUJ WSZYSTKIM ZA DARMO"
    freeAssist.className = "newBtn option"

$("[data-option='clan_assist_all']").parent().append(freeAssist)
    freeAssist.onclick = function () { 
      let total = $.makeArray($(".btn_small_gold.option[data-option='clan_assist']:visible"))
      let interval = setInterval( function() {
        let el = total.pop()
        console.log(el)

        if(!el) return clearInterval(interval)
        GAME.emitOrder({a:39,type:55,tid:$(el).data('tid'),target:$(el).data('target')})
      }, 50)
    }
$(document).bind('keydown', '3', function(){
        if(JQS.chm.is(":focus") == false){
			GAME.socket.emit('ga',{a:14,type:3});
			setTimeout(() => { 
          var arr = $.map($('.use_buff:checked'), function(e,i) {
					return +e.value;
				});
var btype = $('input[name="bless_type"]:checked').val();
GAME.socket.emit('ga',{a:14,type:5,buffs:arr,players:$('#bless_players').val(),btype:btype});
}, 500); 
        }
        return false;
    });
	$(document).bind('keydown', '2', function(){
        if(JQS.chm.is(":focus") == false){
           GAME.socket.emit('ga',{a:15,type:13});
        }
        return false;
    });
 var checkkkk=true;
	$(document).bind('keydown', '4', function(){
        if(JQS.chm.is(":focus") == false){
          checkkkk=true;
		vip();
        }
        return false;
    }); 
GAME.komunikat = function(kom){
	if(this.koms.indexOf(kom)==-1){
		if(this.komc=30) this.komc=30;
		var ind=this.koms.push(kom)-1;
		JQS.kcc.append('<div class="kom" style="top:'+this.komc+'%"><div class="close_kom" data-ind="'+ind+'"><b>X</b></div><div class="content">'+kom+'</div></div>');
		this.komc++;
		kom_close_bind();
	}
}
GAME.questAction = function(){
    if(this.quest_action){
         GAME.socket.emit('ga',{a:22,type:7,id:GAME.quest_action_qid,cnt:GAME.quest_action_max});
    }
}
	

      GAME.parseQuickOpts = function(){
      var opts='';
      if(this.quick_opts.tutorial){
        this.tutorials=this.quick_opts.tutorial;
        opts+='<img id="open_tuts" src="/gfx/layout/helper.png" class="qlink2 option" data-option="open_tuts" data-toggle="tooltip" data-original-title="<div class=tt>'+LNG.lab358+'</div>" />';
        $.getJSON('/json/tutorial.json', function(json){
          GAME.tutorial_data=json.tuts;
          GAME.checkTutorial();
        });
      }
      
      if(this.quick_opts.private_planet) opts+='<div class="option qlink priv" data-option="private_teleport" data-toggle="tooltip" data-original-title="<div class=tt>'+LNG.lab138+'</div>"></div>';
      if(this.quick_opts.teleport) opts+='<div class="option qlink tele" data-option="use_teleport" data-toggle="tooltip" data-original-title="<div class=tt>'+LNG.lab140+'</div>"></div>';
      if(this.quick_opts.travel) opts+='<div class="option qlink trav" data-option="use_travel" data-toggle="tooltip" data-original-title="<div class=tt>'+LNG.lab141+'</div>"></div>';
      if(this.quick_opts.ssj) opts+='<div class="option qlink ssj'+this.quick_opts.ssj[1]+'" data-option="use_transform" data-tech="'+this.quick_opts.ssj[0]+'"data-toggle="tooltip" data-original-title="<div class=tt>'+LNG.lab139+'</div>"></div>';
      if(this.quick_opts.online_reward) opts+='<div class="option qlink dail" data-option="daily_reward" data-toggle="tooltip" data-original-title="<div class=tt>'+LNG.lab176+'</div>"></div>';
      if(this.quick_opts.bless) opts+='<div class="select_page qlink bles" data-page="game_buffs" data-toggle="tooltip" data-original-title="<div class=tt>'+LNG.lab188+'</div>"></div>';
      if(this.quick_opts.sub&&this.quick_opts.sub.length) opts+='<div class="option qlink subs" data-option="quick_use_subs" data-toggle="tooltip" data-original-title="<div class=tt>'+LNG.lab189+'</div>"></div>';
      if(this.quick_opts.senzus&&this.quick_opts.senzus.length){
        opts+='<div class="option qlink senz" data-option="quick_use_senzu" data-toggle="tooltip" data-original-title="<div class=tt>'+LNG.lab190+'</div>"></div>';
      }
      if(this.quick_opts.empire) opts+='<div class="select_page qlink emp'+this.quick_opts.empire+'" data-page="game_empire" data-toggle="tooltip" data-original-title="<div class=tt>'+LNG['empire'+this.quick_opts.empire]+'</div>"></div>';
      opts+='<div class="clan_planet_fast option qlink priv" onClick="GAME.emitOrder({a:39,type:32});" data-toggle="tooltip" data-original-title="<div class=tt>Planeta Klanowa</div>"></div>';
      $('#quick_bar').html(opts);
      option_bind();
      tooltip_bind();
      page_bind();
    } 
  


    function upgrade_item(){
      var iid=parseInt(GAME.dragged_item.sel.data('item_id'));
      var max=GAME.dragged_item.stack;
      var kom;
      if(parseInt(GAME.dragged_item.sel.data('class')) == 12) {
        kom='<div>'+LNG.lab40+'<br /><img src="'+GAME.dragged_item.img+'" /><div class="game_input small"><input id="upg_am" type="text" value="1" /></div><button class="set_max btn_small_gold" data-target="#upg_am" data-max="'+max+'">MAX</button><br />Na jaki +<div class="game_input small"><input id="super_desired_lvl" type="text" value="1"></div></br>Ile subek<div class="game_input small"><input id="super_subs" type="text" value="1"></div><br /><button class="option btn_small_gold" onclick="upgrading('+GAME.dragged_item.sel.data('base_item_id')+')">osa :)</button></div></br>'+LNG.lab36+': <b id="upg_succes_chance">??</b>%<br />'+LNG.lab41+': <b id="upg_sub_left"></b><br /><button class="option btn_small_gold" data-option="upg2_item">OK</button></div>';
      } else {
        kom='<div>'+LNG.lab40+'<br /><img src="'+GAME.dragged_item.img+'" /><div class="game_input small"><input id="upg_am" type="text" value="1" /></div><button class="set_max btn_small_gold" data-target="#upg_am" data-max="'+max+'">MAX</button><br /><br />'+LNG.lab36+': <b id="upg_succes_chance">??</b>%<br />'+LNG.lab41+': <b id="upg_sub_left"></b><br /><button class="option btn_small_gold" data-option="upg2_item">OK</button></div>';
      }
     GAME.komunikat(kom);
      setmaxBind()
      option_bind();
      GAME.emitOrder({a:12,type:9,iid:iid});
    }

    function upgrading(item_id, level, subs){
     var level = parseInt($("#super_desired_lvl").val());
     var subs = parseInt($("#super_subs").val());
     var inter = setInterval(
      function() {
        var $el = $("[data-base_item_id=" + item_id + "]")
        var el_id = $el.data('item_id')  
        if($el.data('upgrade') < level & subs > 0){
          GAME.emitOrder({a:12,type:10,iid:el_id,page:GAME.ekw_page,am:parseInt($('#upg_am').val())});
          subs --;
        } else {
          clearInterval(inter)
        }
      }, 200)
  }
function kill_players1(){
	var aaa = $("#player_list_con").find(".player button"+"[data-option=pvp_attack]"+"[data-quick=1]"+":not(.initial_hide_forced)");
	var aaaa = parseInt(aaa.attr("data-char_id"));
	var bbb = $("#player_list_con").find(".player button"+"[data-option=gpvp_attack]"+"[data-quick=1]"+":not(.initial_hide_forced)");
	var bbbb = parseInt(bbb.attr("data-char_id"));
	if($("#player_list_con").find("[data-option=load_more_players]").length==1){
		$("#player_list_con").find("[data-option=load_more_players]").click();
		window.setTimeout(kill_players1,100);
	} else if (aaa.length > 0){
		GAME.emitOrder({a:24,char_id:aaaa,quick:1});
		window.setTimeout(kill_players1,110)
	} else if (bbb.length > 0) {
		GAME.emitOrder({a:24,type:1,char_id:bbbb,quick:1});
		window.setTimeout(kill_players1,110)
	} else{
		kom_clear();
	}
}
$(document).bind('keydown', 'b', function(){
        if(JQS.chm.is(":focus") == false){
           kill_players1();
        }
        return false;
    });
	
$(document).bind('keydown', 'x', function(){
        if(JQS.chm.is(":focus") == false){
			var mine_id=$( "#field_opts_con" ).find("[data-option=start_mine]").attr("data-mid");
			var quest_idd1=$( "#quest_con" ).find("[data-option=quest_duel]").attr("data-qid");
          var quest_idd = $( "#quest_con" ).find("[data-option=finish_quest]").attr("data-qb_id");
if($( "#quest_con" ).find("[data-option=finish_quest]").length==1){
GAME.socket.emit('ga',{a:22,type:2,button:1,id:quest_idd});
}
if($( "#quest_con" ).find("[data-option=finish_quest]").prevObject[0].outerText.includes("Substancji") && $( "#quest_con" ).find("[data-option=finish_quest]").length==3){
GAME.socket.emit('ga',{a:22,type:2,button:3,id:quest_idd});
}
if($( "#quest_con" ).find("[data-option=finish_quest]").prevObject[0].outerText.includes("Nuda") && $( "#quest_con" ).find("[data-option=finish_quest]").length==3){
GAME.socket.emit('ga',{a:22,type:2,button:2,id:quest_idd});
}
if(mine_id){
	GAME.socket.emit('ga',{a:22,type:8,mid:mine_id});
}
if(quest_idd1){
GAME.socket.emit('ga',{a:22,type:6,id:quest_idd1});
}
GAME.socket.emit('ga',{a:22,type:1});
setTimeout(() => { $('#fight_view').fadeOut(); }, 500);
kom_clear();
        }
        return false;
    }); 
$(document).bind('keydown', 'n', function(){
        if(JQS.chm.is(":focus") == false){
			GAME.socket.emit('ga',{a:12,page:1,used:1}); //ŁADUJE STRONĘ EKWIPUNKU
          kompresory();
        }
        return false;
    });
function kompresory() {
	var kompresor_id = 	$( "#ekw_page_items" ).find("div[data-base_item_id=1618]").attr("data-item_id");
 var quest_id = $( "#quest_con" ).find("[data-option=compress_items]").attr("data-qb_id");
    GAME.emitOrder({
        a: 22,
        type: 10,
        item_id: parseInt(kompresor_id),
        qb_id: parseInt(quest_id)

    });
 
}
GAME.getEmpDetails = function(petd){
    if (petd.active == 1){
    en=petd.energy;
    id=petd.id;}
    var res='<div class=ptt>';
    var nextp=this.employe_exp(petd.level+1);
	res+='<img src=/gfx/employee/'+petd.type+'.png width=100 align=left /><b>'+petd.name+'</b><br /><b>'+LNG['emptyp'+petd.type]+'</b> - <b class=item'+petd.class+'>'+LNG['item_class'+petd.class]+'</b><br />'+LNG.lab1+': <b>'+this.dots(petd.level)+'</b><br />EXP: <b>'+this.dots(petd.exp)+' / '+this.dots(nextp)+'</b><br /><br /><b class=orange>'+LNG.lab286+'</b><br />';
	res+=LNG.lab313+': <b>'+petd.energy+'</b> / <b>'+petd.maxenergy+'</b><br />';
	if (petd.qualified) res+='<b class=green>'+LNG.lab314+'</b><br />';
	res+='</div>';
	return res;
}
function vip(){
	GAME.socket.emit('ga',{a:54,type:0});
	var lvl=$( "#monthly_vip_rewards" ).find("[class='vip_cat  option']").attr("data-level");
	var lvl1=$( "#general_vip_rewards" ).find("[class='vip_cat  option']").attr("data-level");
	if(GAME.char_data.gvip_score>=0 && checkkkk){
		GAME.socket.emit('ga',{a:54,type:0});
		checkkkk=false;
		window.setTimeout(vip,100);
	} else if($( "#monthly_vip_rewards" ).find("[class='vip_cat  option']").length!=0){
		GAME.socket.emit('ga',{a:54,type:1,vip:0,level:lvl});
		window.setTimeout(vip,100);
	} else if($( "#general_vip_rewards" ).find("[class='vip_cat  option']").length!=0){
		GAME.socket.emit('ga',{a:54,type:1,vip:1,level:lvl1});
		window.setTimeout(vip,100);
	} else {
		GAME.komunikat("Odebrano wszystkie możliwe nagrody z Vipa!!!")
	}
}
$("#bless_type_2").click();
GAME.abbreviateNumber = function(number, decPlaces=2) {
    // 2 decimal places => 100, 3 => 1000, etc
    decPlaces = Math.pow(10,decPlaces);

    // Enumerate number abbreviations
    var abbrev = ["K", "M", "Mld","B","Bld","T","Quad","Quin","Sext","Sep","Oct","Non","Dec","Und","Duo","Tre","Quat","Quind","Sexd","Sept","Octo","Nove","Vigi"];

    // Go through the array backwards, so we do the largest first
    for (var i=abbrev.length-1; i>=0; i--) {

        // Convert array index to "1000", "1000000", etc
        var size = Math.pow(10,(i+1)*3);

        // If the number is bigger or equal do the abbreviation
        if(size <= number) {
             // Here, we multiply by decPlaces, round, and then divide by decPlaces.
             // This gives us nice rounding to a particular decimal place.
             number = Math.floor(number*decPlaces/size)/decPlaces;

             // Handle special case where we round up to the next abbreviation
             if((number == 1000) && (i < abbrev.length - 1)) {
                 number = 1;
                 i++;
             }

             // Add the letter for the abbreviation
             number += ' '+abbrev[i];

             // We are done... stop
             break;
        }
    }
    return number;
}
   $( "body" ).on( "click", "#quest_track_con", function(){
            if (!localStorage.getItem('hide_tracker')) {
                localStorage.setItem('hide_tracker',true);
                $(".qtrack").hide();
            } else {
                localStorage.removeItem('hide_tracker');
                $(".qtrack").show();
            }
        });
$('#drag_tracker').on('click').on('click',function() {
	if($('#drag_con').hasClass('scroll'))
	{
		$('#drag_con').removeClass('scroll');
	}
});
GAME.parseTracker = function(track){
	var con='';
	var any=false;
	if(track&&track.length){
		var len=track.length;
		//con+='<div class="sekcja" id="drag_tracker">'+LNG.lab181+'</div><div id="drag_con" class="scroll">';
		for(var i=0;i<len;i++){
			any=true;
			var qn=track[i].header;
			if(qn.length>15) qn=qn.slice(0,15)+'...';
			con+='<div id="track_quest_'+track[i].qb_id+'" class="qtrack"><div class="sep'+(track[i].m==1?3:2)+'"></div><b>'+qn+'</b> '+this.quest_want(track[i].want,track[i].qb_id)+'</div>';
		}
	}
	
	//con+='</div><div class="clr"></div>';
$('#drag_con').html(con);
$('#drag_con').removeClass('scroll');
    if (window.localStorage.getItem('hide_tracker')) $(".qtrack").hide();
}
GAME.cached_data = function(){
	var pos=$('#char_buffs').offset();
	pos.left-=75;
	pos.top-=75;
	this.char_buffs_pos=pos;
	  if(GAME.char_id !=0 && GAME.quick_opts.online_reward){
     setTimeout(() => {
      GAME.socket.emit('ga',{a:26,type:1});
      setTimeout(() => { $('#daily_reward').fadeOut(); kom_clear();  }, 400);
       }, 2000);
  }
}
GAME.parseListPlayer = function(entry,pvp_master){
	var res='';
	if(entry.data){
		var pd=entry.data;
		var qb='';
		var klan='',erank='';
		if(pd.klan_id){
			var cls='';
			if(this.clan_enemies.indexOf(pd.klan_id)!=-1) cls='enemy';
			klan='<b class="poption player_clan '+cls+'" data-option="show_clan" data-klan_id="'+pd.klan_id+'">'+pd.klan_short+' <img src="'+pd.emblem+'" /></b>';
		}
		var cls='';
		if(entry.cd){
			qb+=this.showTimer(entry.cd-this.getTime(),'data-special="10" data-pd="'+pd.id+'"',' playercd'+pd.id+'');
			cls='initial_hide_forced playericons'+pd.id;
		}
		if(pd.empire){
			var cls2='';
			if(this.emp_enemies.indexOf(pd.empire)!=-1){
				if(this.emp_enemies_t[pd.empire]==1) cls2='war';
				else if(this.empire_locations.indexOf(this.char_data.loc)!=-1) cls2='war';
			}
			if(!pd.glory_rank) pd.glory_rank=1;
			erank='<img src="/gfx/empire/ranks/'+pd.empire+'/'+pd.glory_rank+'.png" class="glory_rank '+cls2+'" />';
		}
		qb+='<button class="poption map_bicon '+cls+'" data-option="pvp_attack" data-char_id="'+pd.id+'"><i class="ca"></i></button>';
		if(pvp_master) qb+='<button class="poption map_bicon '+cls+'" data-option="pvp_attack" data-char_id="'+pd.id+'" data-quick="1"><i class="qa"></i></button>';
		res+='<div class="player"><div class="belka">'+erank+'<strong class="player_rank'+pd.ranga+' poption" data-option="show_player" data-char_id="'+pd.id+'">'+pd.name+'</strong> <span>'+this.rebPref(pd.reborn)+pd.level+'</span> '+klan+'</div><div id="pvp_opts_'+pd.id+'" class="right_btns">'+qb+'</div></div>';
	}
	else if(entry.more){
		res+='<div class="more_players"><button class="poption" data-option="load_more_players" data-start_from="'+entry.next_from+'">+'+entry.more+'</button></div>';
	}
	return res;
}
GAME.parsePlayerShadow = function(data,pvp_master){
	var entry=data.data;
	var res='';
	if(entry.data){
		var pd=entry.data;
		pd.empire=entry.empire;
		var qb='';
		var erank='';
		var cls='';
		if(data.cd){
			qb+=this.showTimer(data.cd-this.getTime(),'data-special="10" data-pd="'+pd.id+'"',' playercd'+pd.id+'');
			cls='initial_hide_forced playericons'+pd.id;
		}
		if(pd.empire){
			var cls2='';
			if(this.emp_enemies.indexOf(pd.empire)!=-1){
				if(this.emp_enemies_t[pd.empire]==1) cls2='war';
				else if(this.empire_locations.indexOf(this.char_data.loc)!=-1) cls2='war';
			}
			if(!pd.glory_rank) pd.glory_rank=1;
			erank='<img src="/gfx/empire/ranks/'+pd.empire+'/'+pd.glory_rank+'.png" class="glory_rank '+cls2+'" />';
		}
		qb+='<button class="poption map_bicon '+cls+'" data-option="gpvp_attack" data-char_id="'+pd.id+'"><i class="ca"></i></button>';
		if(pvp_master) qb+='<button class="poption map_bicon '+cls+'" data-option="gpvp_attack" data-char_id="'+pd.id+'" data-quick="1"><i class="qa"></i></button>';
		res+='<div class="player"><div class="belka">'+erank+'<strong class="player_rank'+pd.ranga+' poption" data-option="show_player" data-char_id="'+pd.id+'">'+pd.name+' - '+LNG.lab348+'</strong> <span>'+this.rebPref(pd.reborn)+pd.level+'</span> </div><div id="gpvp_opts_'+pd.id+'" class="right_btns">'+qb+'</div></div>';
	}
	else if(entry.more){
		res+='<div class="more_players"><button class="poption" data-option="load_more_players" data-start_from="'+entry.next_from+'">+'+entry.more+'</button></div>';
	}
	return res;
}
GAME.komunikat("Od teraz lista zmian pod klawiszem 0" + "<br>" + "Ręczne atakowanie nie działa, od tego jest klawisz B")
