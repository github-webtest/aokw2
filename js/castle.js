function page_save() {
	if (localStorage.getItem("local_lan") == "en") {
		document.getElementById("lan_head_text").innerText = "Castle";
		document.getElementById("build_top_text").innerText = "Produce elite warriors for your army and fortify the castle to protect your kingdom center!";
		document.getElementById("defense_bonus_text").innerText = "Defense Bonus: ";
		document.getElementById("castlex_text").innerText = "Castle";
		document.getElementById("knightx_text").innerText = "Knight x";
		document.getElementById("imperial_spearmanx_text").innerText = "Imperial Spearman x";
		document.getElementById("t_info").innerText = "Info";
		document.getElementById("t_age").innerText = "Age";
		document.getElementById("t_type").innerText = "Type";
		document.getElementById("t_class").innerText = "Class";
		document.getElementById("t_cost").innerText = "Cost";
		document.getElementById("produce_text").innerText = "Produce";
		document.getElementById("upgrade_text").innerText = "Upgrade";
		document.getElementById("t_abilities").innerText = "Abilities";
	}
	
	document.getElementById("loading").style.display = "none";
}

/* Castle */

function build_info() {
	document.getElementById("troops_info").style.animation = "troop_info1 0.4s";
	document.getElementById("troops_info_bg").style.display = "flex";
	document.getElementById("troops_info").style.display = "block";
	
	document.getElementById("troops_text").innerText = "Castle";

    $(document).ready(function(){
		
		var jsonData_castle = JSON.stringify(castle);
		var data_castle = JSON.parse(jsonData_castle);
		
		/* info */
		
		if (data_castle[Number(localStorage.getItem("castle_level"))].Age == 1) {
			document.getElementById("age_t").innerText = "Dark (1)";
		} else if (data_castle[Number(localStorage.getItem("castle_level"))].Age == 2) {
			document.getElementById("age_t").innerText = "Feudal (2)";
		} else if (data_castle[Number(localStorage.getItem("castle_level"))].Age == 3) {
			document.getElementById("age_t").innerText = "Castle (3)";
		} else if (data_castle[Number(localStorage.getItem("castle_level"))].Age == 4) {
			document.getElementById("age_t").innerText = "Imperial (4)";
		} else if (data_castle[Number(localStorage.getItem("castle_level"))].Age == 5) {
			document.getElementById("age_t").innerText = "New (5)";
		}
		document.getElementById("type_t").innerText = data_castle[Number(localStorage.getItem("castle_level"))].Type;
		document.getElementById("class_t").innerText = data_castle[Number(localStorage.getItem("castle_level"))].Class;
		
		/* produce */
		
		document.getElementById("p_food").innerText = data_castle[Number(localStorage.getItem("castle_level"))].Pfood;
		document.getElementById("p_wood").innerText = data_castle[Number(localStorage.getItem("castle_level"))].Pwood;
		document.getElementById("p_gold").innerText = data_castle[Number(localStorage.getItem("castle_level"))].Pgold;
		document.getElementById("p_diamond").innerText = data_castle[Number(localStorage.getItem("castle_level"))].Pdiamond;
		document.getElementById("p_time").innerText = data_castle[Number(localStorage.getItem("castle_level"))].Ptime;
		
		if (data_castle[Number(localStorage.getItem("castle_level"))].Pfood == null) {
			document.getElementById("produce_d1").style.display = "none";
			document.getElementById("produce_d2").style.display = "none";
		}
		
		/* upgrade */
		
		document.getElementById("u_gold").innerText = data_castle[Number(localStorage.getItem("castle_level"))].Ugold;
		document.getElementById("u_xp").innerText = data_castle[Number(localStorage.getItem("castle_level"))].Uxp;
		document.getElementById("u_time").innerText = data_castle[Number(localStorage.getItem("castle_level"))].Utime;
		
		/* abilities */
		
		document.getElementById("abilities_text").innerText = data_castle[Number(localStorage.getItem("castle_level"))].Atitle;
		document.getElementById("a1_title").innerText = data_castle[Number(localStorage.getItem("castle_level"))].A1text;
		document.getElementById("a1_text").innerText = data_castle[Number(localStorage.getItem("castle_level"))].A1;
		document.getElementById("a2_title").innerText = data_castle[Number(localStorage.getItem("castle_level"))].A2text;
		document.getElementById("a2_text").innerText = data_castle[Number(localStorage.getItem("castle_level"))].A2;
		document.getElementById("a3_title").innerText = data_castle[Number(localStorage.getItem("castle_level"))].A3text;
		document.getElementById("a3_text").innerText = data_castle[Number(localStorage.getItem("castle_level"))].A3;
		
		if (data_castle[Number(localStorage.getItem("castle_level"))].A2text == null) {
			document.getElementById("abilities_2").style.display = "none";
			document.getElementById("abilities_3").style.display = "none";
		} else if (data_castle[Number(localStorage.getItem("castle_level"))].A2text != null && data_castle[Number(localStorage.getItem("castle_level"))].A3text == null) {
			document.getElementById("abilities_3").style.display = "none";
		}
		
    });
}

function troop1_info() {
	document.getElementById("troops_info").style.animation = "troop_info1 0.4s";
	document.getElementById("troops_info_bg").style.display = "flex";
	document.getElementById("troops_info").style.display = "block";
	
	document.getElementById("troops_text").innerText = "Knight";

    $(document).ready(function(){
		
		var jsonData_knight = JSON.stringify(knight);
		var data_knight = JSON.parse(jsonData_knight);
		
		/* info */
		
		if (data_knight[Number(localStorage.getItem("knight_level"))].Age == 1) {
			document.getElementById("age_t").innerText = "Dark (1)";
		} else if (data_knight[Number(localStorage.getItem("knight_level"))].Age == 2) {
			document.getElementById("age_t").innerText = "Feudal (2)";
		} else if (data_knight[Number(localStorage.getItem("knight_level"))].Age == 3) {
			document.getElementById("age_t").innerText = "Castle (3)";
		} else if (data_knight[Number(localStorage.getItem("knight_level"))].Age == 4) {
			document.getElementById("age_t").innerText = "Imperial (4)";
		} else if (data_knight[Number(localStorage.getItem("knight_level"))].Age == 5) {
			document.getElementById("age_t").innerText = "New (5)";
		}
		document.getElementById("type_t").innerText = data_knight[Number(localStorage.getItem("knight_level"))].Type;
		document.getElementById("class_t").innerText = data_knight[Number(localStorage.getItem("knight_level"))].Class;
		
		/* produce */
		
		document.getElementById("p_food").innerText = data_knight[Number(localStorage.getItem("knight_level"))].Pfood;
		document.getElementById("p_wood").innerText = data_knight[Number(localStorage.getItem("knight_level"))].Pwood;
		document.getElementById("p_gold").innerText = data_knight[Number(localStorage.getItem("knight_level"))].Pgold;
		document.getElementById("p_diamond").innerText = data_knight[Number(localStorage.getItem("knight_level"))].Pdiamond;
		document.getElementById("p_time").innerText = data_knight[Number(localStorage.getItem("knight_level"))].Ptime;
		
		if (data_knight[Number(localStorage.getItem("knight_level"))].Pfood == null) {
			document.getElementById("produce_d1").style.display = "none";
			document.getElementById("produce_d2").style.display = "none";
		} else {
			document.getElementById("produce_d1").style.display = "block";
			document.getElementById("produce_d2").style.display = "block";
		}
		
		/* upgrade */
		
		document.getElementById("u_gold").innerText = data_knight[Number(localStorage.getItem("knight_level"))].Ugold;
		document.getElementById("u_xp").innerText = data_knight[Number(localStorage.getItem("knight_level"))].Uxp;
		document.getElementById("u_time").innerText = data_knight[Number(localStorage.getItem("knight_level"))].Utime;
		
		/* abilities */
		
		document.getElementById("abilities_text").innerText = data_knight[Number(localStorage.getItem("knight_level"))].Atitle;
		document.getElementById("a1_title").innerText = data_knight[Number(localStorage.getItem("knight_level"))].A1text;
		document.getElementById("a1_text").innerText = data_knight[Number(localStorage.getItem("knight_level"))].A1;
		document.getElementById("a2_title").innerText = data_knight[Number(localStorage.getItem("knight_level"))].A2text;
		document.getElementById("a2_text").innerText = data_knight[Number(localStorage.getItem("knight_level"))].A2;
		document.getElementById("a3_title").innerText = data_knight[Number(localStorage.getItem("knight_level"))].A3text;
		document.getElementById("a3_text").innerText = data_knight[Number(localStorage.getItem("knight_level"))].A3;
		
		if (data_knight[Number(localStorage.getItem("knight_level"))].A2text == null) {
			document.getElementById("abilities_2").style.display = "none";
			document.getElementById("abilities_3").style.display = "none";
		} else if (data_knight[Number(localStorage.getItem("knight_level"))].A2text != null && data_knight[Number(localStorage.getItem("knight_level"))].A3text == null) {
			document.getElementById("abilities_3").style.display = "none";
		} else {
			document.getElementById("abilities_2").style.display = "block";
			document.getElementById("abilities_3").style.display = "block";
		}
		
    });
}

function troop2_info() {
	document.getElementById("troops_info").style.animation = "troop_info1 0.4s";
	document.getElementById("troops_info_bg").style.display = "flex";
	document.getElementById("troops_info").style.display = "block";
	
	document.getElementById("troops_text").innerText = "Imperial Spearman";

    $(document).ready(function(){
		
		var jsonData_imperial_spearman = JSON.stringify(imperial_spearman);
		var data_imperial_spearman = JSON.parse(jsonData_imperial_spearman);
		
		/* info */
		
		if (data_imperial_spearman[Number(localStorage.getItem("imperial_spearman_level"))].Age == 1) {
			document.getElementById("age_t").innerText = "Dark (1)";
		} else if (data_imperial_spearman[Number(localStorage.getItem("imperial_spearman_level"))].Age == 2) {
			document.getElementById("age_t").innerText = "Feudal (2)";
		} else if (data_imperial_spearman[Number(localStorage.getItem("imperial_spearman_level"))].Age == 3) {
			document.getElementById("age_t").innerText = "Castle (3)";
		} else if (data_imperial_spearman[Number(localStorage.getItem("imperial_spearman_level"))].Age == 4) {
			document.getElementById("age_t").innerText = "Imperial (4)";
		} else if (data_imperial_spearman[Number(localStorage.getItem("imperial_spearman_level"))].Age == 5) {
			document.getElementById("age_t").innerText = "New (5)";
		}
		document.getElementById("type_t").innerText = data_imperial_spearman[Number(localStorage.getItem("imperial_spearman_level"))].Type;
		document.getElementById("class_t").innerText = data_imperial_spearman[Number(localStorage.getItem("imperial_spearman_level"))].Class;
		
		/* produce */
		
		document.getElementById("p_food").innerText = data_imperial_spearman[Number(localStorage.getItem("imperial_spearman_level"))].Pfood;
		document.getElementById("p_wood").innerText = data_imperial_spearman[Number(localStorage.getItem("imperial_spearman_level"))].Pwood;
		document.getElementById("p_gold").innerText = data_imperial_spearman[Number(localStorage.getItem("imperial_spearman_level"))].Pgold;
		document.getElementById("p_diamond").innerText = data_imperial_spearman[Number(localStorage.getItem("imperial_spearman_level"))].Pdiamond;
		document.getElementById("p_time").innerText = data_imperial_spearman[Number(localStorage.getItem("imperial_spearman_level"))].Ptime;
		
		if (data_imperial_spearman[Number(localStorage.getItem("imperial_spearman_level"))].Pfood == null) {
			document.getElementById("produce_d1").style.display = "none";
			document.getElementById("produce_d2").style.display = "none";
		} else {
			document.getElementById("produce_d1").style.display = "block";
			document.getElementById("produce_d2").style.display = "block";
		}
		
		/* upgrade */
		
		document.getElementById("u_gold").innerText = data_imperial_spearman[Number(localStorage.getItem("imperial_spearman_level"))].Ugold;
		document.getElementById("u_xp").innerText = data_imperial_spearman[Number(localStorage.getItem("imperial_spearman_level"))].Uxp;
		document.getElementById("u_time").innerText = data_imperial_spearman[Number(localStorage.getItem("imperial_spearman_level"))].Utime;
		
		/* abilities */
		
		document.getElementById("abilities_text").innerText = data_imperial_spearman[Number(localStorage.getItem("imperial_spearman_level"))].Atitle;
		document.getElementById("a1_title").innerText = data_imperial_spearman[Number(localStorage.getItem("imperial_spearman_level"))].A1text;
		document.getElementById("a1_text").innerText = data_imperial_spearman[Number(localStorage.getItem("imperial_spearman_level"))].A1;
		document.getElementById("a2_title").innerText = data_imperial_spearman[Number(localStorage.getItem("imperial_spearman_level"))].A2text;
		document.getElementById("a2_text").innerText = data_imperial_spearman[Number(localStorage.getItem("imperial_spearman_level"))].A2;
		document.getElementById("a3_title").innerText = data_imperial_spearman[Number(localStorage.getItem("imperial_spearman_level"))].A3text;
		document.getElementById("a3_text").innerText = data_imperial_spearman[Number(localStorage.getItem("imperial_spearman_level"))].A3;
		
		if (data_imperial_spearman[Number(localStorage.getItem("imperial_spearman_level"))].A2text == null) {
			document.getElementById("abilities_2").style.display = "none";
			document.getElementById("abilities_3").style.display = "none";
		} else if (data_imperial_spearman[Number(localStorage.getItem("imperial_spearman_level"))].A2text != null && data_imperial_spearman[Number(localStorage.getItem("imperial_spearman_level"))].A3text == null) {
			document.getElementById("abilities_3").style.display = "none";
		} else {
			document.getElementById("abilities_2").style.display = "block";
			document.getElementById("abilities_3").style.display = "block";
		}
		
    });
}

/* castle up */

function castle_up() {
	
	if (Number(localStorage.getItem("castle_level")) == 0 && Number(localStorage.getItem("gold")) >= 160) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 20);
		var ms_time = now.getTime();
		localStorage.setItem("castle_up_time", ms_time);
		
		localStorage.setItem("castle_up_price", 160);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 160));
		
		localStorage.setItem("castle_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("castle_level")) == 1 && Number(localStorage.getItem("gold")) >= 240) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 40);
		var ms_time = now.getTime();
		localStorage.setItem("castle_up_time", ms_time);
		
		localStorage.setItem("castle_up_price", 240);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 240));
		
		localStorage.setItem("castle_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("castle_level")) == 2 && Number(localStorage.getItem("gold")) >= 480) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 80);
		var ms_time = now.getTime();
		localStorage.setItem("castle_up_time", ms_time);
		
		localStorage.setItem("castle_up_price", 480);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 480));
		
		localStorage.setItem("castle_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("castle_level")) == 3 && Number(localStorage.getItem("gold")) >= 1000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 160);
		var ms_time = now.getTime();
		localStorage.setItem("castle_up_time", ms_time);
		
		localStorage.setItem("castle_up_price", 1000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 1000));
		
		localStorage.setItem("castle_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("castle_level")) == 4 && Number(localStorage.getItem("gold")) >= 1600) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 320);
		var ms_time = now.getTime();
		localStorage.setItem("castle_up_time", ms_time);
		
		localStorage.setItem("castle_up_price", 1600);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 1600));
		
		localStorage.setItem("castle_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("castle_level")) == 5 && Number(localStorage.getItem("gold")) >= 2800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1220);
		var ms_time = now.getTime();
		localStorage.setItem("castle_up_time", ms_time);
		
		localStorage.setItem("castle_up_price", 2800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 2800));
		
		localStorage.setItem("castle_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("castle_level")) == 6 && Number(localStorage.getItem("gold")) >= 4000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1840);
		var ms_time = now.getTime();
		localStorage.setItem("castle_up_time", ms_time);
		
		localStorage.setItem("castle_up_price", 4000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 4000));
		
		localStorage.setItem("castle_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("castle_level")) == 7 && Number(localStorage.getItem("gold")) >= 5800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 2720);
		var ms_time = now.getTime();
		localStorage.setItem("castle_up_time", ms_time);
		
		localStorage.setItem("castle_up_price", 5800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 5800));
		
		localStorage.setItem("castle_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("castle_level")) == 8 && Number(localStorage.getItem("gold")) >= 7200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 4540);
		var ms_time = now.getTime();
		localStorage.setItem("castle_up_time", ms_time);
		
		localStorage.setItem("castle_up_price", 7200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 7200));
		
		localStorage.setItem("castle_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("castle_level")) == 9 && Number(localStorage.getItem("gold")) >= 8800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 6620);
		var ms_time = now.getTime();
		localStorage.setItem("castle_up_time", ms_time);
		
		localStorage.setItem("castle_up_price", 8800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 8800));
		
		localStorage.setItem("castle_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("castle_level")) == 10 && Number(localStorage.getItem("gold")) >= 12000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 14740);
		var ms_time = now.getTime();
		localStorage.setItem("castle_up_time", ms_time);
		
		localStorage.setItem("castle_up_price", 12000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 12000));
		
		localStorage.setItem("castle_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("castle_level")) == 11 && Number(localStorage.getItem("gold")) >= 14400) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 19220);
		var ms_time = now.getTime();
		localStorage.setItem("castle_up_time", ms_time);
		
		localStorage.setItem("castle_up_price", 14400);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 14400));
		
		localStorage.setItem("castle_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("castle_level")) == 12 && Number(localStorage.getItem("gold")) >= 16800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 24340);
		var ms_time = now.getTime();
		localStorage.setItem("castle_up_time", ms_time);
		
		localStorage.setItem("castle_up_price", 16800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 16800));
		
		localStorage.setItem("castle_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("castle_level")) == 13 && Number(localStorage.getItem("gold")) >= 19600) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 29720);
		var ms_time = now.getTime();
		localStorage.setItem("castle_up_time", ms_time);
		
		localStorage.setItem("castle_up_price", 19600);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 19600));
		
		localStorage.setItem("castle_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("castle_level")) == 14 && Number(localStorage.getItem("gold")) >= 22800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 35740);
		var ms_time = now.getTime();
		localStorage.setItem("castle_up_time", ms_time);
		
		localStorage.setItem("castle_up_price", 22800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 22800));
		
		localStorage.setItem("castle_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("castle_level")) == 15 && Number(localStorage.getItem("gold")) >= 25500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 64820);
		var ms_time = now.getTime();
		localStorage.setItem("castle_up_time", ms_time);
		
		localStorage.setItem("castle_up_price", 25500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 25500));
		
		localStorage.setItem("castle_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("castle_level")) == 16 && Number(localStorage.getItem("gold")) >= 28800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 73240);
		var ms_time = now.getTime();
		localStorage.setItem("castle_up_time", ms_time);
		
		localStorage.setItem("castle_up_price", 28800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 28800));
		
		localStorage.setItem("castle_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("castle_level")) == 17 && Number(localStorage.getItem("gold")) >= 34500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 82510);
		var ms_time = now.getTime();
		localStorage.setItem("castle_up_time", ms_time);
		
		localStorage.setItem("castle_up_price", 34500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 34500));
		
		localStorage.setItem("castle_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("castle_level")) == 18 && Number(localStorage.getItem("gold")) >= 45300) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 91840);
		var ms_time = now.getTime();
		localStorage.setItem("castle_up_time", ms_time);
		
		localStorage.setItem("castle_up_price", 45300);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 45300));
		
		localStorage.setItem("castle_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("castle_level")) == 19 && Number(localStorage.getItem("gold")) >= 60150) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 103520);
		var ms_time = now.getTime();
		localStorage.setItem("castle_up_time", ms_time);
		
		localStorage.setItem("castle_up_price", 60150);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 60150));
		
		localStorage.setItem("castle_upper", "on");
		
		location.reload();
		
	}
	
}

function castle_up_cancel() {
	
	localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) - Number(localStorage.getItem("castle_up_price"))));
	
	localStorage.removeItem("castle_upper");
	localStorage.removeItem("castle_up_time");
	localStorage.removeItem("knight_upper");
	localStorage.removeItem("knight_up_time");
	localStorage.removeItem("imperial_spearman_upper");
	localStorage.removeItem("imperial_spearman_up_time");
	localStorage.removeItem("knight_producer");
	localStorage.removeItem("knight_produce_time");
	localStorage.removeItem("imperial_spearman_producer");
	localStorage.removeItem("imperial_spearman_produce_time");
	
	location.reload();
	
}

setInterval(function(){
	
	if (localStorage.getItem("castle_upper") == "on") {
		
		document.getElementById("build_right1").style.display = "none";
		document.getElementById("build_right2").style.display = "none";
		document.getElementById("build_right3").style.display = "none";
		document.getElementById("build_upper1").style.display = "block";
		document.getElementById("build_upper2").style.display = "block";
		document.getElementById("build_upper3").style.display = "block";
		
		document.getElementById("build_up_board2").style.display = "none";
		document.getElementById("build_up_board3").style.display = "none";
		
		var c_ms = Math.floor(Number(localStorage.getItem("castle_up_time")) - Date.now());
		var c_s = Math.floor(c_ms / 1000);
		var c_m = Math.floor(c_s / 60);
		c_s = c_s % 60;
		var c_h = Math.floor(c_m / 60);
		c_m = c_m % 60;
		var c_d = Math.floor(c_h / 24);
		c_h = c_h % 24;
		
		c_d = c_d.toString().padStart(2, "0");
		c_h = c_h.toString().padStart(2, "0");
		c_m = c_m.toString().padStart(2, "0");
		c_s = c_s.toString().padStart(2, "0");
		
		document.getElementById("castle_up_d").innerText = c_d;
		document.getElementById("castle_up_h").innerText = c_h;
		document.getElementById("castle_up_m").innerText = c_m;
		document.getElementById("castle_up_s").innerText = c_s;
		
		if (Math.floor(Number(localStorage.getItem("castle_up_time")) - Date.now()) < 0) {
		
		localStorage.removeItem("castle_upper");
		localStorage.removeItem("castle_up_time");
		
		document.getElementById("build_right1").style.display = "block";
		document.getElementById("build_right2").style.display = "block";
		document.getElementById("build_right3").style.display = "block";
		document.getElementById("build_upper1").style.display = "none";
		document.getElementById("build_upper2").style.display = "none";
		document.getElementById("build_upper3").style.display = "none";
		
		localStorage.setItem("castle_level", Math.floor(Number(localStorage.getItem("castle_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 50));
		
		location.reload();
		}
		
		
	}
	
	
}, 10);

setInterval(function(){
	
	document.getElementById("castle_level").innerText = localStorage.getItem("castle_level");
	if (Number(localStorage.getItem("castle_level")) != 20) {
	document.getElementById("castle_next_level").innerText = Math.floor(Number(localStorage.getItem("castle_level")) + 1);
	} else if (Number(localStorage.getItem("castle_level")) == 20) {
		document.getElementById("castle_next_level").innerText = "Max";
	}
	
}, 10);

function castle_up_speed_up() {
	if (Number(localStorage.getItem("diamond")) >= 50) {
		
		localStorage.setItem("diamond_cash", Math.floor(Number(localStorage.getItem("diamond_cash")) + 50));
		
		localStorage.setItem("castle_level", Math.floor(Number(localStorage.getItem("castle_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 50));
		
		localStorage.removeItem("castle_upper");
		localStorage.removeItem("castle_up_time");
		
		location.reload();
		
	}
}

/* knight up and produce */

function knight_produce() {
	
	var c_value = document.getElementById("knight_input").value;
	var cost_value = Math.floor(Number(c_value) * 2);
	
	if (c_value != null && c_value > 0) {
	
	if (Number(cost_value) <= Number(localStorage.getItem("diamond"))) {
			
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + Math.floor(120 * Number(document.getElementById("knight_input").value)));
		var ms_time = now.getTime();
		localStorage.setItem("knight_produce_time", ms_time);
		
		localStorage.setItem("knight_produce_price", Math.floor(2 * Number(document.getElementById("knight_input").value)));
		
		localStorage.setItem("diamond_cash", Math.floor(Number(localStorage.getItem("diamond_cash")) + Math.floor(2 * Number(document.getElementById("knight_input").value))));
		
		localStorage.setItem("knight_producer", "on");
		
		localStorage.setItem("knight_trained", Number(document.getElementById("knight_input").value))
		
		location.reload();
			
	}
	
	}
	
}

function knight_produce_cancel() {
	
	localStorage.setItem("diamond_cash", Math.floor(Number(localStorage.getItem("diamond_cash")) - Number(localStorage.getItem("knight_produce_price"))));
	
	localStorage.removeItem("castle_upper");
	localStorage.removeItem("castle_up_time");
	localStorage.removeItem("knight_upper");
	localStorage.removeItem("knight_up_time");
	localStorage.removeItem("imperial_spearman_upper");
	localStorage.removeItem("imperial_spearman_up_time");
	localStorage.removeItem("knight_producer");
	localStorage.removeItem("knight_produce_time");
	localStorage.removeItem("imperial_spearman_producer");
	localStorage.removeItem("imperial_spearman_produce_time");
	
	location.reload();
	
}

setInterval(function(){
	
	if (localStorage.getItem("knight_producer") == "on") {
		
		document.getElementById("build_right1").style.display = "none";
		document.getElementById("build_right2").style.display = "none";
		document.getElementById("build_right3").style.display = "none";
		document.getElementById("build_upper1").style.display = "block";
		document.getElementById("build_producer2").style.display = "block";
		document.getElementById("build_producer3").style.display = "block";
		
		document.getElementById("build_up_board1").style.display = "none";
		document.getElementById("build_produce_board3").style.display = "none";
		
		var kp_ms = Math.floor(Number(localStorage.getItem("knight_produce_time")) - Date.now());
		var kp_s = Math.floor(kp_ms / 1000);
		var kp_m = Math.floor(kp_s / 60);
		kp_s = kp_s % 60;
		var kp_h = Math.floor(kp_m / 60);
		kp_m = kp_m % 60;
		var kp_d = Math.floor(kp_h / 24);
		kp_h = kp_h % 24;
		
		kp_d = kp_d.toString().padStart(2, "0");
		kp_h = kp_h.toString().padStart(2, "0");
		kp_m = kp_m.toString().padStart(2, "0");
		kp_s = kp_s.toString().padStart(2, "0");
		
		document.getElementById("knight_produce_d").innerText = kp_d;
		document.getElementById("knight_produce_h").innerText = kp_h;
		document.getElementById("knight_produce_m").innerText = kp_m;
		document.getElementById("knight_produce_s").innerText = kp_s;
		
		if (Math.floor(Number(localStorage.getItem("knight_produce_time")) - Date.now()) < 0) {
		
		localStorage.removeItem("knight_producer");
		localStorage.removeItem("knight_produce_time");
		
		document.getElementById("build_right1").style.display = "block";
		document.getElementById("build_right2").style.display = "block";
		document.getElementById("build_right3").style.display = "block";
		document.getElementById("build_upper1").style.display = "none";
		document.getElementById("build_producer2").style.display = "none";
		document.getElementById("build_producer3").style.display = "none";
		
		localStorage.setItem("knight_have", Math.floor(Number(localStorage.getItem("knight_have")) + Number(localStorage.getItem("knight_trained"))));
		localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) + Number(localStorage.getItem("knight_trained"))));
	    localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) + Number(localStorage.getItem("knight_trained"))));
		
		localStorage.removeItem("knight_trained");
		
		location.reload();
		}
		
		
	}
	
	
}, 10);

function knight_up() {
	
	if (Number(localStorage.getItem("knight_level")) == 0 && Number(localStorage.getItem("gold")) >= 80) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 20);
		var ms_time = now.getTime();
		localStorage.setItem("knight_up_time", ms_time);
		
		localStorage.setItem("knight_up_price", 80);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 80));
		
		localStorage.setItem("knight_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("knight_level")) == 1 && Number(localStorage.getItem("gold")) >= 120) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 40);
		var ms_time = now.getTime();
		localStorage.setItem("knight_up_time", ms_time);
		
		localStorage.setItem("knight_up_price", 120);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 120));
		
		localStorage.setItem("knight_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("knight_level")) == 2 && Number(localStorage.getItem("gold")) >= 240) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 80);
		var ms_time = now.getTime();
		localStorage.setItem("knight_up_time", ms_time);
		
		localStorage.setItem("knight_up_price", 240);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 240));
		
		localStorage.setItem("knight_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("knight_level")) == 3 && Number(localStorage.getItem("gold")) >= 500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 160);
		var ms_time = now.getTime();
		localStorage.setItem("knight_up_time", ms_time);
		
		localStorage.setItem("knight_up_price", 500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 500));
		
		localStorage.setItem("knight_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("knight_level")) == 4 && Number(localStorage.getItem("gold")) >= 800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 320);
		var ms_time = now.getTime();
		localStorage.setItem("knight_up_time", ms_time);
		
		localStorage.setItem("knight_up_price", 800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 800));
		
		localStorage.setItem("knight_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("knight_level")) == 5 && Number(localStorage.getItem("gold")) >= 1400) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1220);
		var ms_time = now.getTime();
		localStorage.setItem("knight_up_time", ms_time);
		
		localStorage.setItem("knight_up_price", 1400);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 1400));
		
		localStorage.setItem("knight_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("knight_level")) == 6 && Number(localStorage.getItem("gold")) >= 2000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1840);
		var ms_time = now.getTime();
		localStorage.setItem("knight_up_time", ms_time);
		
		localStorage.setItem("knight_up_price", 2000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 2000));
		
		localStorage.setItem("knight_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("knight_level")) == 7 && Number(localStorage.getItem("gold")) >= 2900) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 2720);
		var ms_time = now.getTime();
		localStorage.setItem("knight_up_time", ms_time);
		
		localStorage.setItem("knight_up_price", 2900);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 2900));
		
		localStorage.setItem("knight_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("knight_level")) == 8 && Number(localStorage.getItem("gold")) >= 3600) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 4540);
		var ms_time = now.getTime();
		localStorage.setItem("knight_up_time", ms_time);
		
		localStorage.setItem("knight_up_price", 3600);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 3600));
		
		localStorage.setItem("knight_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("knight_level")) == 9 && Number(localStorage.getItem("gold")) >= 4400) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 6620);
		var ms_time = now.getTime();
		localStorage.setItem("knight_up_time", ms_time);
		
		localStorage.setItem("knight_up_price", 4400);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 4400));
		
		localStorage.setItem("knight_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("knight_level")) == 10 && Number(localStorage.getItem("gold")) >= 6000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 14740);
		var ms_time = now.getTime();
		localStorage.setItem("knight_up_time", ms_time);
		
		localStorage.setItem("knight_up_price", 6000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 6000));
		
		localStorage.setItem("knight_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("knight_level")) == 11 && Number(localStorage.getItem("gold")) >= 7200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 19220);
		var ms_time = now.getTime();
		localStorage.setItem("knight_up_time", ms_time);
		
		localStorage.setItem("knight_up_price", 7200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 7200));
		
		localStorage.setItem("knight_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("knight_level")) == 12 && Number(localStorage.getItem("gold")) >= 8400) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 24340);
		var ms_time = now.getTime();
		localStorage.setItem("knight_up_time", ms_time);
		
		localStorage.setItem("knight_up_price", 8400);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 8400));
		
		localStorage.setItem("knight_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("knight_level")) == 13 && Number(localStorage.getItem("gold")) >= 9800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 29720);
		var ms_time = now.getTime();
		localStorage.setItem("knight_up_time", ms_time);
		
		localStorage.setItem("knight_up_price", 9800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 9800));
		
		localStorage.setItem("knight_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("knight_level")) == 14 && Number(localStorage.getItem("gold")) >= 11400) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 35740);
		var ms_time = now.getTime();
		localStorage.setItem("knight_up_time", ms_time);
		
		localStorage.setItem("knight_up_price", 11400);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 11400));
		
		localStorage.setItem("knight_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("knight_level")) == 15 && Number(localStorage.getItem("gold")) >= 17000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 64820);
		var ms_time = now.getTime();
		localStorage.setItem("knight_up_time", ms_time);
		
		localStorage.setItem("knight_up_price", 17000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 17000));
		
		localStorage.setItem("knight_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("knight_level")) == 16 && Number(localStorage.getItem("gold")) >= 19200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 73240);
		var ms_time = now.getTime();
		localStorage.setItem("knight_up_time", ms_time);
		
		localStorage.setItem("knight_up_price", 19200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 19200));
		
		localStorage.setItem("knight_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("knight_level")) == 17 && Number(localStorage.getItem("gold")) >= 23000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 82510);
		var ms_time = now.getTime();
		localStorage.setItem("knight_up_time", ms_time);
		
		localStorage.setItem("knight_up_price", 23000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 23000));
		
		localStorage.setItem("knight_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("knight_level")) == 18 && Number(localStorage.getItem("gold")) >= 30200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 91840);
		var ms_time = now.getTime();
		localStorage.setItem("knight_up_time", ms_time);
		
		localStorage.setItem("knight_up_price", 30200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 30200));
		
		localStorage.setItem("knight_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("knight_level")) == 19 && Number(localStorage.getItem("gold")) >= 40100) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 103520);
		var ms_time = now.getTime();
		localStorage.setItem("knight_up_time", ms_time);
		
		localStorage.setItem("knight_up_price", 40100);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 40100));
		
		localStorage.setItem("knight_upper", "on");
		
		location.reload();
		
	}
	
}

function knight_up_cancel() {
	
	localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) - Number(localStorage.getItem("knight_up_price"))));
	
	localStorage.removeItem("castle_upper");
	localStorage.removeItem("castle_up_time");
	localStorage.removeItem("knight_upper");
	localStorage.removeItem("knight_up_time");
	localStorage.removeItem("imperial_spearman_upper");
	localStorage.removeItem("imperial_spearman_up_time");
	localStorage.removeItem("knight_producer");
	localStorage.removeItem("knight_produce_time");
	localStorage.removeItem("imperial_spearman_producer");
	localStorage.removeItem("imperial_spearman_produce_time");
	
	location.reload();
	
}

setInterval(function(){
	
	if (localStorage.getItem("knight_upper") == "on") {
		
		document.getElementById("build_right1").style.display = "none";
		document.getElementById("build_right2").style.display = "none";
		document.getElementById("build_right3").style.display = "none";
		document.getElementById("build_upper1").style.display = "block";
		document.getElementById("build_upper2").style.display = "block";
		document.getElementById("build_upper3").style.display = "block";
		
		document.getElementById("build_up_board1").style.display = "none";
		document.getElementById("build_up_board2").style.display = "block";
		document.getElementById("build_up_board3").style.display = "none";
		
		var k_ms = Math.floor(Number(localStorage.getItem("knight_up_time")) - Date.now());
		var k_s = Math.floor(k_ms / 1000);
		var k_m = Math.floor(k_s / 60);
		k_s = k_s % 60;
		var k_h = Math.floor(k_m / 60);
		k_m = k_m % 60;
		var k_d = Math.floor(k_h / 24);
		k_h = k_h % 24;
		
		k_d = k_d.toString().padStart(2, "0");
		k_h = k_h.toString().padStart(2, "0");
		k_m = k_m.toString().padStart(2, "0");
		k_s = k_s.toString().padStart(2, "0");
		
		document.getElementById("knight_up_d").innerText = k_d;
		document.getElementById("knight_up_h").innerText = k_h;
		document.getElementById("knight_up_m").innerText = k_m;
		document.getElementById("knight_up_s").innerText = k_s;
		
		if (Math.floor(Number(localStorage.getItem("knight_up_time")) - Date.now()) < 0) {
		
		localStorage.removeItem("knight_upper");
		localStorage.removeItem("knight_up_time");
		
		document.getElementById("build_right1").style.display = "block";
		document.getElementById("build_right2").style.display = "block";
		document.getElementById("build_right3").style.display = "block";
		document.getElementById("build_upper1").style.display = "none";
		document.getElementById("build_upper2").style.display = "none";
		document.getElementById("build_upper3").style.display = "none";
		
		localStorage.setItem("knight_level", Math.floor(Number(localStorage.getItem("knight_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 6));
		
		location.reload();
		}
		
		
	}
	
	
}, 10);

setInterval(function(){
	
	document.getElementById("knight_level").innerText = localStorage.getItem("knight_level");
	if (Number(localStorage.getItem("knight_level")) != 20) {
	document.getElementById("knight_next_level").innerText = Math.floor(Number(localStorage.getItem("knight_level")) + 1);
	} else if (Number(localStorage.getItem("knight_level")) == 20) {
		document.getElementById("knight_next_level").innerText = "Max";
	}
	document.getElementById("max_knight").innerText = Math.floor(Number(localStorage.getItem("diamond")) / 2);
	document.getElementById("knight_trained_amount").innerText = Number(localStorage.getItem("knight_trained"));
	document.getElementById("knight_produce_speed_up_cost").innerText = Number(localStorage.getItem("knight_trained"));
	document.getElementById("total_knight").innerText = Number(localStorage.getItem("knight_have"));
	
}, 10);

function knight_up_speed_up() {
	if (Number(localStorage.getItem("diamond")) >= 50) {
		
		localStorage.setItem("diamond_cash", Math.floor(Number(localStorage.getItem("diamond_cash")) + 50));
		
		localStorage.setItem("knight_level", Math.floor(Number(localStorage.getItem("knight_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 6));
		
		localStorage.removeItem("knight_upper");
		localStorage.removeItem("knight_up_time");
		
		location.reload();
		
	}
}

function knight_produce_speed_up() {
	
	if (Number(localStorage.getItem("diamond")) >= Number(localStorage.getItem("knight_trained"))) {
		
	localStorage.setItem("diamond_cash", Math.floor(Number(localStorage.getItem("diamond_cash")) + Number(localStorage.getItem("knight_trained"))));
		
	localStorage.setItem("knight_have", Math.floor(Number(localStorage.getItem("knight_have")) + Number(localStorage.getItem("knight_trained"))));
	localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) + Number(localStorage.getItem("knight_trained"))));
	localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) + Number(localStorage.getItem("knight_trained"))));
	
	localStorage.removeItem("knight_producer");
	localStorage.removeItem("knight_produce_time");
		
	localStorage.removeItem("knight_trained");
	
	location.reload();
	
	}
	
}

/* imperial spearman up and produce */

function imperial_spearman_produce() {
	
	var c_value = document.getElementById("imperial_spearman_input").value;
	var cost_value = Math.floor(Number(c_value) * 200);
	
	if (c_value != null && c_value > 0) {
	
	if (Number(cost_value) <= Number(localStorage.getItem("gold")) && Number(cost_value) <= Number(localStorage.getItem("food"))) {
			
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + Math.floor(160 * Number(document.getElementById("imperial_spearman_input").value)));
		var ms_time = now.getTime();
		localStorage.setItem("imperial_spearman_produce_time", ms_time);
		
		localStorage.setItem("imperial_spearman_produce_price", Math.floor(200 * Number(document.getElementById("imperial_spearman_input").value)));
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + Math.floor(200 * Number(document.getElementById("imperial_spearman_input").value))));
			
		localStorage.setItem("food_cash", Math.floor(Number(localStorage.getItem("food_cash")) + Math.floor(200 * Number(document.getElementById("imperial_spearman_input").value))));
		
		localStorage.setItem("imperial_spearman_producer", "on");
		
		localStorage.setItem("imperial_spearman_trained", Number(document.getElementById("imperial_spearman_input").value))
		
		location.reload();
			
	}
	
	}
	
}

function imperial_spearman_produce_cancel() {
	
	localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) - Number(localStorage.getItem("imperial_spearman_produce_price"))));
	localStorage.setItem("food_cash", Math.floor(Number(localStorage.getItem("food_cash")) - Number(localStorage.getItem("imperial_spearman_produce_price"))));
	
	localStorage.removeItem("castle_upper");
	localStorage.removeItem("castle_up_time");
	localStorage.removeItem("knight_upper");
	localStorage.removeItem("knight_up_time");
	localStorage.removeItem("imperial_spearman_upper");
	localStorage.removeItem("imperial_spearman_up_time");
	localStorage.removeItem("knight_producer");
	localStorage.removeItem("knight_produce_time");
	localStorage.removeItem("imperial_spearman_producer");
	localStorage.removeItem("imperial_spearman_produce_time");
	
	location.reload();
	
}

setInterval(function(){
	
	if (localStorage.getItem("imperial_spearman_producer") == "on") {
		
		document.getElementById("build_right1").style.display = "none";
		document.getElementById("build_right2").style.display = "none";
		document.getElementById("build_right3").style.display = "none";
		document.getElementById("build_upper1").style.display = "block";
		document.getElementById("build_producer2").style.display = "block";
		document.getElementById("build_producer3").style.display = "block";
		
		document.getElementById("build_up_board1").style.display = "none";
		document.getElementById("build_produce_board2").style.display = "none";
		
		var isp_ms = Math.floor(Number(localStorage.getItem("imperial_spearman_produce_time")) - Date.now());
		var isp_s = Math.floor(isp_ms / 1000);
		var isp_m = Math.floor(isp_s / 60);
		isp_s = isp_s % 60;
		var isp_h = Math.floor(isp_m / 60);
		isp_m = isp_m % 60;
		var isp_d = Math.floor(isp_h / 24);
		isp_h = isp_h % 24;
		
		isp_d = isp_d.toString().padStart(2, "0");
		isp_h = isp_h.toString().padStart(2, "0");
		isp_m = isp_m.toString().padStart(2, "0");
		isp_s = isp_s.toString().padStart(2, "0");
		
		document.getElementById("imperial_spearman_produce_d").innerText = isp_d;
		document.getElementById("imperial_spearman_produce_h").innerText = isp_h;
		document.getElementById("imperial_spearman_produce_m").innerText = isp_m;
		document.getElementById("imperial_spearman_produce_s").innerText = isp_s;
		
		if (Math.floor(Number(localStorage.getItem("imperial_spearman_produce_time")) - Date.now()) < 0) {
		
		localStorage.removeItem("imperial_spearman_producer");
		localStorage.removeItem("imperial_spearman_produce_time");
		
		document.getElementById("build_right1").style.display = "block";
		document.getElementById("build_right2").style.display = "block";
		document.getElementById("build_right3").style.display = "block";
		document.getElementById("build_upper1").style.display = "none";
		document.getElementById("build_producer2").style.display = "none";
		document.getElementById("build_producer3").style.display = "none";
		
		localStorage.setItem("imperial_spearman_have", Math.floor(Number(localStorage.getItem("imperial_spearman_have")) + Number(localStorage.getItem("imperial_spearman_trained"))));
		localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) + Number(localStorage.getItem("imperial_spearman_trained"))));
	    localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) + Number(localStorage.getItem("imperial_spearman_trained"))));
		
		localStorage.removeItem("imperial_spearman_trained");
		
		location.reload();
		}
		
		
	}
	
	
}, 10);

function imperial_spearman_up() {
	
	if (Number(localStorage.getItem("imperial_spearman_level")) == 0 && Number(localStorage.getItem("gold")) >= 80) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 20);
		var ms_time = now.getTime();
		localStorage.setItem("imperial_spearman_up_time", ms_time);
		
		localStorage.setItem("imperial_spearman_up_price", 80);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 80));
		
		localStorage.setItem("imperial_spearman_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("imperial_spearman_level")) == 1 && Number(localStorage.getItem("gold")) >= 120) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 40);
		var ms_time = now.getTime();
		localStorage.setItem("imperial_spearman_up_time", ms_time);
		
		localStorage.setItem("imperial_spearman_up_price", 120);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 120));
		
		localStorage.setItem("imperial_spearman_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("imperial_spearman_level")) == 2 && Number(localStorage.getItem("gold")) >= 240) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 80);
		var ms_time = now.getTime();
		localStorage.setItem("imperial_spearman_up_time", ms_time);
		
		localStorage.setItem("imperial_spearman_up_price", 240);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 240));
		
		localStorage.setItem("imperial_spearman_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("imperial_spearman_level")) == 3 && Number(localStorage.getItem("gold")) >= 500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 160);
		var ms_time = now.getTime();
		localStorage.setItem("imperial_spearman_up_time", ms_time);
		
		localStorage.setItem("imperial_spearman_up_price", 500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 500));
		
		localStorage.setItem("imperial_spearman_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("imperial_spearman_level")) == 4 && Number(localStorage.getItem("gold")) >= 800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 320);
		var ms_time = now.getTime();
		localStorage.setItem("imperial_spearman_up_time", ms_time);
		
		localStorage.setItem("imperial_spearman_up_price", 800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 800));
		
		localStorage.setItem("imperial_spearman_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("imperial_spearman_level")) == 5 && Number(localStorage.getItem("gold")) >= 1400) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1220);
		var ms_time = now.getTime();
		localStorage.setItem("imperial_spearman_up_time", ms_time);
		
		localStorage.setItem("imperial_spearman_up_price", 1400);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 1400));
		
		localStorage.setItem("imperial_spearman_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("imperial_spearman_level")) == 6 && Number(localStorage.getItem("gold")) >= 2000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1840);
		var ms_time = now.getTime();
		localStorage.setItem("imperial_spearman_up_time", ms_time);
		
		localStorage.setItem("imperial_spearman_up_price", 2000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 2000));
		
		localStorage.setItem("imperial_spearman_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("imperial_spearman_level")) == 7 && Number(localStorage.getItem("gold")) >= 2900) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 2720);
		var ms_time = now.getTime();
		localStorage.setItem("imperial_spearman_up_time", ms_time);
		
		localStorage.setItem("imperial_spearman_up_price", 2900);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 2900));
		
		localStorage.setItem("imperial_spearman_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("imperial_spearman_level")) == 8 && Number(localStorage.getItem("gold")) >= 3600) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 4540);
		var ms_time = now.getTime();
		localStorage.setItem("imperial_spearman_up_time", ms_time);
		
		localStorage.setItem("imperial_spearman_up_price", 3600);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 3600));
		
		localStorage.setItem("imperial_spearman_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("imperial_spearman_level")) == 9 && Number(localStorage.getItem("gold")) >= 4400) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 6620);
		var ms_time = now.getTime();
		localStorage.setItem("imperial_spearman_up_time", ms_time);
		
		localStorage.setItem("imperial_spearman_up_price", 4400);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 4400));
		
		localStorage.setItem("imperial_spearman_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("imperial_spearman_level")) == 10 && Number(localStorage.getItem("gold")) >= 6000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 14740);
		var ms_time = now.getTime();
		localStorage.setItem("imperial_spearman_up_time", ms_time);
		
		localStorage.setItem("imperial_spearman_up_price", 6000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 6000));
		
		localStorage.setItem("imperial_spearman_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("imperial_spearman_level")) == 11 && Number(localStorage.getItem("gold")) >= 7200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 19220);
		var ms_time = now.getTime();
		localStorage.setItem("imperial_spearman_up_time", ms_time);
		
		localStorage.setItem("imperial_spearman_up_price", 7200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 7200));
		
		localStorage.setItem("imperial_spearman_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("imperial_spearman_level")) == 12 && Number(localStorage.getItem("gold")) >= 8400) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 24340);
		var ms_time = now.getTime();
		localStorage.setItem("imperial_spearman_up_time", ms_time);
		
		localStorage.setItem("imperial_spearman_up_price", 8400);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 8400));
		
		localStorage.setItem("imperial_spearman_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("imperial_spearman_level")) == 13 && Number(localStorage.getItem("gold")) >= 9800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 29720);
		var ms_time = now.getTime();
		localStorage.setItem("imperial_spearman_up_time", ms_time);
		
		localStorage.setItem("imperial_spearman_up_price", 9800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 9800));
		
		localStorage.setItem("imperial_spearman_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("imperial_spearman_level")) == 14 && Number(localStorage.getItem("gold")) >= 11400) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 35740);
		var ms_time = now.getTime();
		localStorage.setItem("imperial_spearman_up_time", ms_time);
		
		localStorage.setItem("imperial_spearman_up_price", 11400);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 11400));
		
		localStorage.setItem("imperial_spearman_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("imperial_spearman_level")) == 15 && Number(localStorage.getItem("gold")) >= 17000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 64820);
		var ms_time = now.getTime();
		localStorage.setItem("imperial_spearman_up_time", ms_time);
		
		localStorage.setItem("imperial_spearman_up_price", 17000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 17000));
		
		localStorage.setItem("imperial_spearman_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("imperial_spearman_level")) == 16 && Number(localStorage.getItem("gold")) >= 19200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 73240);
		var ms_time = now.getTime();
		localStorage.setItem("imperial_spearman_up_time", ms_time);
		
		localStorage.setItem("imperial_spearman_up_price", 19200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 19200));
		
		localStorage.setItem("imperial_spearman_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("imperial_spearman_level")) == 17 && Number(localStorage.getItem("gold")) >= 23000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 82510);
		var ms_time = now.getTime();
		localStorage.setItem("imperial_spearman_up_time", ms_time);
		
		localStorage.setItem("imperial_spearman_up_price", 23000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 23000));
		
		localStorage.setItem("imperial_spearman_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("imperial_spearman_level")) == 18 && Number(localStorage.getItem("gold")) >= 30200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 91840);
		var ms_time = now.getTime();
		localStorage.setItem("imperial_spearman_up_time", ms_time);
		
		localStorage.setItem("imperial_spearman_up_price", 30200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 30200));
		
		localStorage.setItem("imperial_spearman_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("imperial_spearman_level")) == 19 && Number(localStorage.getItem("gold")) >= 40100) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 103520);
		var ms_time = now.getTime();
		localStorage.setItem("imperial_spearman_up_time", ms_time);
		
		localStorage.setItem("imperial_spearman_up_price", 40100);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 40100));
		
		localStorage.setItem("imperial_spearman_upper", "on");
		
		location.reload();
		
	}
	
}

function imperial_spearman_up_cancel() {
	
	localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) - Number(localStorage.getItem("imperial_spearman_up_price"))));
	
	localStorage.removeItem("castle_upper");
	localStorage.removeItem("castle_up_time");
	localStorage.removeItem("knight_upper");
	localStorage.removeItem("knight_up_time");
	localStorage.removeItem("imperial_spearman_upper");
	localStorage.removeItem("imperial_spearman_up_time");
	localStorage.removeItem("knight_producer");
	localStorage.removeItem("knight_produce_time");
	localStorage.removeItem("imperial_spearman_producer");
	localStorage.removeItem("imperial_spearman_produce_time");
	
	location.reload();
	
}

setInterval(function(){
	
	if (localStorage.getItem("imperial_spearman_upper") == "on") {
		
		document.getElementById("build_right1").style.display = "none";
		document.getElementById("build_right2").style.display = "none";
		document.getElementById("build_right3").style.display = "none";
		document.getElementById("build_upper1").style.display = "block";
		document.getElementById("build_upper2").style.display = "block";
		document.getElementById("build_upper3").style.display = "block";
		
		document.getElementById("build_up_board1").style.display = "none";
		document.getElementById("build_up_board2").style.display = "none";
		
		var is_ms = Math.floor(Number(localStorage.getItem("imperial_spearman_up_time")) - Date.now());
		var is_s = Math.floor(is_ms / 1000);
		var is_m = Math.floor(is_s / 60);
		is_s = is_s % 60;
		var is_h = Math.floor(is_m / 60);
		is_m = is_m % 60;
		var is_d = Math.floor(is_h / 24);
		is_h = is_h % 24;
		
		is_d = is_d.toString().padStart(2, "0");
		is_h = is_h.toString().padStart(2, "0");
		is_m = is_m.toString().padStart(2, "0");
		is_s = is_s.toString().padStart(2, "0");
		
		document.getElementById("imperial_spearman_up_d").innerText = is_d;
		document.getElementById("imperial_spearman_up_h").innerText = is_h;
		document.getElementById("imperial_spearman_up_m").innerText = is_m;
		document.getElementById("imperial_spearman_up_s").innerText = is_s;
		
		if (Math.floor(Number(localStorage.getItem("imperial_spearman_up_time")) - Date.now()) < 0) {
		
		localStorage.removeItem("imperial_spearman_upper");
		localStorage.removeItem("imperial_spearman_up_time");
		
		document.getElementById("build_right1").style.display = "block";
		document.getElementById("build_right2").style.display = "block";
		document.getElementById("build_right3").style.display = "block";
		document.getElementById("build_upper1").style.display = "none";
		document.getElementById("build_upper2").style.display = "none";
		document.getElementById("build_upper3").style.display = "none";
		
		localStorage.setItem("imperial_spearman_level", Math.floor(Number(localStorage.getItem("imperial_spearman_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 6));
		
		location.reload();
		}
		
		
	}
	
	
}, 10);

setInterval(function(){
	
	document.getElementById("imperial_spearman_level").innerText = Number(localStorage.getItem("imperial_spearman_level"));
	if (Number(localStorage.getItem("imperial_spearman_level")) != 20) {
	document.getElementById("imperial_spearman_next_level").innerText = Math.floor(Number(localStorage.getItem("imperial_spearman_level")) + 1);
	} else if (Number(localStorage.getItem("imperial_spearman_level")) == 20) {
		document.getElementById("imperial_spearman_next_level").innerText = "Max";
	}
	var result1 = Math.floor(Number(localStorage.getItem("gold")) / 200);
	var result2 = Math.floor(Number(localStorage.getItem("food")) / 200);
	var result3 = Math.min(result1, result2);
	document.getElementById("max_imperial_spearman").innerText = Math.floor(result3);
	document.getElementById("total_imperial_spearman").innerText = Number(localStorage.getItem("imperial_spearman_have"));
	document.getElementById("imperial_spearman_trained_amount").innerText = Number(localStorage.getItem("imperial_spearman_trained"));
	document.getElementById("imperial_spearman_produce_speed_up_cost").innerText = Number(localStorage.getItem("imperial_spearman_trained"));
	
}, 10);

function imperial_spearman_up_speed_up() {
	if (Number(localStorage.getItem("diamond")) >= 50) {
		
		localStorage.setItem("diamond_cash", Math.floor(Number(localStorage.getItem("diamond_cash")) + 50));
		
		localStorage.setItem("imperial_spearman_level", Math.floor(Number(localStorage.getItem("imperial_spearman_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 6));
		
		localStorage.removeItem("imperial_spearman_upper");
		localStorage.removeItem("imperial_spearman_up_time");
		
		location.reload();
		
	}
}

function imperial_spearman_produce_speed_up() {
	
	if (Number(localStorage.getItem("diamond")) >= Number(localStorage.getItem("imperial_spearman_trained"))) {
		
	localStorage.setItem("diamond_cash", Math.floor(Number(localStorage.getItem("diamond_cash")) + Number(localStorage.getItem("imperial_spearman_trained"))));
		
	localStorage.setItem("imperial_spearman_have", Math.floor(Number(localStorage.getItem("imperial_spearman_have")) + Number(localStorage.getItem("imperial_spearman_trained"))));
	localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) + Number(localStorage.getItem("imperial_spearman_trained"))));
	localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) + Number(localStorage.getItem("imperial_spearman_trained"))));
		
	localStorage.removeItem("imperial_spearman_trained");
	localStorage.removeItem("imperial_spearman_producer");
	localStorage.removeItem("imperial_spearman_produce_time");
	
	location.reload();
	
	}
	
}

setInterval(function() {
	
	if (Number(localStorage.getItem("age")) < 4) {
		document.getElementById("build_right3").style.display = "none";
	}
	
}, 5);

/* academy */

setInterval(function(){
	
	if (localStorage.getItem("farming_upper") == "on" || localStorage.getItem("lumbering_upper") == "on" || localStorage.getItem("mining_upper") == "on" || localStorage.getItem("blacksmithing_upper") == "on" || localStorage.getItem("riding_upper") == "on" || localStorage.getItem("geometry_upper") == "on" || localStorage.getItem("cartography_upper") == "on" || localStorage.getItem("spying_upper") == "on" || localStorage.getItem("masonry_upper") == "on") {
		
		if (localStorage.getItem("farming_upper") == "on") {
			
         if (localStorage.getItem("farming_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("farming_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("farming_upper");
		    localStorage.removeItem("farming_up_time");
		
		    localStorage.setItem("farming_level", Math.floor(Number(localStorage.getItem("farming_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
			}
		 }
		
		} else if (localStorage.getItem("lumbering_upper") == "on") {
        
		 if (localStorage.getItem("lumbering_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("lumbering_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("lumbering_upper");
		    localStorage.removeItem("lumbering_up_time");
		
		    localStorage.setItem("lumbering_level", Math.floor(Number(localStorage.getItem("lumbering_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
			}
		 }
		
		} else if (localStorage.getItem("mining_upper") == "on") {
			
		 if (localStorage.getItem("mining_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("mining_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("mining_upper");
		    localStorage.removeItem("mining_up_time");
		
		    localStorage.setItem("mining_level", Math.floor(Number(localStorage.getItem("mining_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
			}
		 }
		
		} else if (localStorage.getItem("blacksmithing_upper") == "on") {
			
		 if (localStorage.getItem("blacksmithing_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("blacksmithing_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("blacksmithing_upper");
		    localStorage.removeItem("blacksmithing_up_time");
		
		    localStorage.setItem("blacksmithing_level", Math.floor(Number(localStorage.getItem("blacksmithing_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
			}
		 }
		
		} else if (localStorage.getItem("riding_upper") == "on") {
			
		 if (localStorage.getItem("riding_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("riding_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("riding_upper");
		    localStorage.removeItem("riding_up_time");
		
		    localStorage.setItem("riding_level", Math.floor(Number(localStorage.getItem("riding_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
			}
		 }
		
		} else if (localStorage.getItem("geometry_upper") == "on") {
			
		 if (localStorage.getItem("geometry_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("geometry_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("geometry_upper");
		    localStorage.removeItem("geometry_up_time");
		
		    localStorage.setItem("geometry_level", Math.floor(Number(localStorage.getItem("geometry_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
			}
		 }
		
		} else if (localStorage.getItem("cartography_upper") == "on") {
			
		 if (localStorage.getItem("cartography_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("cartography_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("cartography_upper");
		    localStorage.removeItem("cartography_up_time");
		
		    localStorage.setItem("cartography_level", Math.floor(Number(localStorage.getItem("cartography_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
			}
		 }
		
		} else if (localStorage.getItem("spying_upper") == "on") {
			
		 if (localStorage.getItem("spying_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("spying_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("spying_upper");
		    localStorage.removeItem("spying_up_time");
		
		    localStorage.setItem("spying_level", Math.floor(Number(localStorage.getItem("spying_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
			}
		 }
		
		} else if (localStorage.getItem("masonry_upper") == "on") {
			
		 if (localStorage.getItem("masonry_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("masonry_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("masonry_upper");
		    localStorage.removeItem("masonry_up_time");
		
		    localStorage.setItem("masonry_level", Math.floor(Number(localStorage.getItem("masonry_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
			}
		 }
		
		}
		
	}
	
}, 10);

/* wall */

setInterval(function() {
	if (localStorage.getItem("wall_upper") == "on" || localStorage.getItem("watchtower_upper") == "on" || localStorage.getItem("watchtower_producer") == "on") {
		
		if (localStorage.getItem("wall_upper") == "on") {
			
		 if (localStorage.getItem("wall_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("wall_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("wall_upper");
		    localStorage.removeItem("wall_up_time");
		
		    localStorage.setItem("wall_level", Math.floor(Number(localStorage.getItem("wall_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 50));
		
			}
		 }
		
		} else if (localStorage.getItem("watchtower_upper") == "on") {
			
		 if (localStorage.getItem("watchtower_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("watchtower_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("watchtower_upper");
		    localStorage.removeItem("watchtower_up_time");
		
		    localStorage.setItem("watchtower_level", Math.floor(Number(localStorage.getItem("watchtower_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 40));
		
			}
		 }
		
		} else if (localStorage.getItem("watchtower_producer") == "on") {
			
		 if (localStorage.getItem("watchtower_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("watchtower_produce_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("watchtower_producer");
		    localStorage.removeItem("watchtower_produce_time");
		
		    localStorage.setItem("watchtower_have", Math.floor(Number(localStorage.getItem("watchtower_have")) + Number(localStorage.getItem("watchtower_trained"))));
		
			}
		 }
		
		}
		
	}

}, 10);

/* workshop */

setInterval(function() {
	if (localStorage.getItem("ballista_upper") == "on" || localStorage.getItem("ballista_producer") == "on" || localStorage.getItem("onager_upper") == "on" || localStorage.getItem("onager_producer") == "on" || localStorage.getItem("cannon_upper") == "on" || localStorage.getItem("cannon_producer") == "on") {
		
		if (localStorage.getItem("ballista_upper") == "on") {
			
		 if (localStorage.getItem("ballista_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("ballista_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("ballista_upper");
		    localStorage.removeItem("ballista_up_time");
		
		    localStorage.setItem("ballista_level", Math.floor(Number(localStorage.getItem("ballista_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 40));
		
			}
		 }
		
		} else if (localStorage.getItem("ballista_producer") == "on") {
			
		 if (localStorage.getItem("ballista_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("ballista_produce_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("ballista_producer");
		    localStorage.removeItem("ballista_produce_time");
		
		    localStorage.setItem("ballista_have", Math.floor(Number(localStorage.getItem("ballista_have")) + Number(localStorage.getItem("ballista_trained"))));
			localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) + Number(localStorage.getItem("ballista_trained"))));
			localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) + Number(localStorage.getItem("ballista_trained"))));
		
			}
		 }
		
		} else if (localStorage.getItem("onager_upper") == "on") {
			
	     if (localStorage.getItem("onager_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("onager_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("onager_upper");
		    localStorage.removeItem("onager_up_time");
		
		    localStorage.setItem("onager_level", Math.floor(Number(localStorage.getItem("onager_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 40));
		
			}
		 }
		
		} else if (localStorage.getItem("onager_producer") == "on") {
			
		 if (localStorage.getItem("onager_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("onager_produce_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("onager_producer");
		    localStorage.removeItem("onager_produce_time");
		
		    localStorage.setItem("onager_have", Math.floor(Number(localStorage.getItem("onager_have")) + Number(localStorage.getItem("onager_trained"))));
			localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) + Number(localStorage.getItem("onager_trained"))));
			localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) + Number(localStorage.getItem("onager_trained"))));
		
			}
		 }
		
		} else if (localStorage.getItem("cannon_upper") == "on") {
			
		 if (localStorage.getItem("cannon_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("cannon_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("cannon_upper");
		    localStorage.removeItem("cannon_up_time");
		
		    localStorage.setItem("cannon_level", Math.floor(Number(localStorage.getItem("cannon_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 40));
		
			}
		 }
		
		} else if (localStorage.getItem("cannon_producer") == "on") {
			
		 if (localStorage.getItem("cannon_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("cannon_produce_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("cannon_producer");
		    localStorage.removeItem("cannon_produce_time");
		
		    localStorage.setItem("cannon_have", Math.floor(Number(localStorage.getItem("cannon_have")) + Number(localStorage.getItem("cannon_trained"))));
			localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) + Number(localStorage.getItem("cannon_trained"))));
			localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) + Number(localStorage.getItem("cannon_trained"))));
		
			}
		 }
		
		}
		
	}

}, 10);

/* market */

setInterval(function() {
	if (localStorage.getItem("trade_cart_upper") == "on" || localStorage.getItem("trade_cart_producer") == "on") {
		
		if (localStorage.getItem("trade_cart_upper") == "on") {
			
		 if (localStorage.getItem("trade_cart_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("trade_cart_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("trade_cart_upper");
		    localStorage.removeItem("trade_cart_up_time");
		
		    localStorage.setItem("trade_cart_level", Math.floor(Number(localStorage.getItem("trade_cart_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 50));
		
			}
		 }
		
		} else if (localStorage.getItem("trade_cart_producer") == "on") {
			
		 if (localStorage.getItem("trade_cart_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("trade_cart_produce_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("trade_cart_producer");
		    localStorage.removeItem("trade_cart_produce_time");
		
		    localStorage.setItem("trade_cart_have", Math.floor(Number(localStorage.getItem("trade_cart_have")) + Number(localStorage.getItem("trade_cart_trained"))));
		
			}
		 }
		
		}
		
	}
	
}, 10);

/* barracks */

setInterval(function() {
	if (localStorage.getItem("spearman_upper") == "on" || localStorage.getItem("spearman_producer") == "on" || localStorage.getItem("archer_upper") == "on" || localStorage.getItem("archer_producer") == "on" || localStorage.getItem("spy_upper") == "on" || localStorage.getItem("spy_producer") == "on" || localStorage.getItem("cataphract_upper") == "on" || localStorage.getItem("cataphract_producer") == "on" || localStorage.getItem("swordsmen_upper") == "on" || localStorage.getItem("swordsmen_producer") == "on" || localStorage.getItem("crossbowmen_upper") == "on" || localStorage.getItem("crossbowmen_producer") == "on" || localStorage.getItem("arquebusiers_upper") == "on" || localStorage.getItem("arquebusiers_producer") == "on") {
		
		if (localStorage.getItem("spearman_upper") == "on") {
			
		 if (localStorage.getItem("spearman_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("spearman_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("spearman_upper");
		    localStorage.removeItem("spearman_up_time");
		
		    localStorage.setItem("spearman_level", Math.floor(Number(localStorage.getItem("spearman_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 4));
		
			}
		 }
		
		} else if (localStorage.getItem("spearman_producer") == "on") {
			
		 if (localStorage.getItem("spearman_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("spearman_produce_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("spearman_producer");
		    localStorage.removeItem("spearman_produce_time");
		
		    localStorage.setItem("spearman_have", Math.floor(Number(localStorage.getItem("spearman_have")) + Number(localStorage.getItem("spearman_trained"))));
			localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) + Number(localStorage.getItem("spearman_trained"))));
			localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) + Number(localStorage.getItem("spearman_trained"))));
		
			}
		 }
		
		} else if (localStorage.getItem("archer_upper") == "on") {
			
		 if (localStorage.getItem("archer_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("archer_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("archer_upper");
		    localStorage.removeItem("archer_up_time");
		
		    localStorage.setItem("archer_level", Math.floor(Number(localStorage.getItem("archer_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 4));
		
			}
		 }
		
		} else if (localStorage.getItem("archer_producer") == "on") {
			
		 if (localStorage.getItem("archer_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("archer_produce_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("archer_producer");
		    localStorage.removeItem("archer_produce_time");
		
		    localStorage.setItem("archer_have", Math.floor(Number(localStorage.getItem("archer_have")) + Number(localStorage.getItem("archer_trained"))));
			localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) + Number(localStorage.getItem("archer_trained"))));
			localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) + Number(localStorage.getItem("archer_trained"))));
		
			}
		 }
		
		} else if (localStorage.getItem("spy_upper") == "on") {
			
		 if (localStorage.getItem("spy_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("spy_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("spy_upper");
		    localStorage.removeItem("spy_up_time");
		
		    localStorage.setItem("spy_level", Math.floor(Number(localStorage.getItem("spy_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 4));
		
			}
		 }
		
		} else if (localStorage.getItem("spy_producer") == "on") {
			
		 if (localStorage.getItem("spy_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("spy_produce_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("spy_producer");
		    localStorage.removeItem("spy_produce_time");
		
		    localStorage.setItem("spy_have", Math.floor(Number(localStorage.getItem("spy_have")) + Number(localStorage.getItem("spy_trained"))));
			localStorage.setItem("total_k_c_spy", Math.floor(Number(localStorage.getItem("total_k_c_spy")) + Number(localStorage.getItem("spy_trained"))));
			localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) + Number(localStorage.getItem("spy_trained"))));
		
			}
		 }
		
		} else if (localStorage.getItem("cataphract_upper") == "on") {
			
		 if (localStorage.getItem("cataphract_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("cataphract_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("cataphract_upper");
		    localStorage.removeItem("cataphract_up_time");
		
		    localStorage.setItem("cataphract_level", Math.floor(Number(localStorage.getItem("cataphract_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 4));
		
			}
		 }
		
		} else if (localStorage.getItem("cataphract_producer") == "on") {
			
		 if (localStorage.getItem("cataphract_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("cataphract_produce_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("cataphract_producer");
		    localStorage.removeItem("cataphract_produce_time");
		
		    localStorage.setItem("cataphract_have", Math.floor(Number(localStorage.getItem("cataphract_have")) + Number(localStorage.getItem("cataphract_trained"))));
			localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) + Number(localStorage.getItem("cataphract_trained"))));
			localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) + Number(localStorage.getItem("cataphract_trained"))));
		
			}
		 }
		
		} else if (localStorage.getItem("swordsmen_upper") == "on") {
			
		 if (localStorage.getItem("swordsmen_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("swordsmen_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("swordsmen_upper");
		    localStorage.removeItem("swordsmen_up_time");
		
		    localStorage.setItem("swordsmen_level", Math.floor(Number(localStorage.getItem("swordsmen_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 4));
		
			}
		 }
		
		} else if (localStorage.getItem("swordsmen_producer") == "on") {
			
		 if (localStorage.getItem("swordsmen_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("swordsmen_produce_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("swordsmen_producer");
		    localStorage.removeItem("swordsmen_produce_time");
		
		    localStorage.setItem("swordsmen_have", Math.floor(Number(localStorage.getItem("swordsmen_have")) + Number(localStorage.getItem("swordsmen_trained"))));
			localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) + Number(localStorage.getItem("swordsmen_trained"))));
			localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) + Number(localStorage.getItem("swordsmen_trained"))));
		
			}
		 }
		
		} else if (localStorage.getItem("crossbowmen_upper") == "on") {
			
		 if (localStorage.getItem("crossbowmen_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("crossbowmen_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("crossbowmen_upper");
		    localStorage.removeItem("crossbowmen_up_time");
		
		    localStorage.setItem("crossbowmen_level", Math.floor(Number(localStorage.getItem("crossbowmen_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 4));
		
			}
		 }
		
		} else if (localStorage.getItem("crossbowmen_producer") == "on") {
			
		 if (localStorage.getItem("crossbowmen_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("crossbowmen_produce_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("crossbowmen_producer");
		    localStorage.removeItem("crossbowmen_produce_time");
		
		    localStorage.setItem("crossbowmen_have", Math.floor(Number(localStorage.getItem("crossbowmen_have")) + Number(localStorage.getItem("crossbowmen_trained"))));
			localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) + Number(localStorage.getItem("crossbowmen_trained"))));
			localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) + Number(localStorage.getItem("crossbowmen_trained"))));
		
			}
		 }
		
		} else if (localStorage.getItem("arquebusiers_upper") == "on") {
			
		 if (localStorage.getItem("arquebusiers_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("arquebusiers_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("arquebusiers_upper");
		    localStorage.removeItem("arquebusiers_up_time");
		
		    localStorage.setItem("arquebusiers_level", Math.floor(Number(localStorage.getItem("arquebusiers_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 4));
		
			}
		 }
		
		} else if (localStorage.getItem("arquebusiers_producer") == "on") {
			
		 if (localStorage.getItem("arquebusiers_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("arquebusiers_produce_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("arquebusiers_producer");
		    localStorage.removeItem("arquebusiers_produce_time");
		
		    localStorage.setItem("arquebusiers_have", Math.floor(Number(localStorage.getItem("arquebusiers_have")) + Number(localStorage.getItem("arquebusiers_trained"))));
			localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) + Number(localStorage.getItem("arquebusiers_trained"))));
			localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) + Number(localStorage.getItem("arquebusiers_trained"))));
		
			}
		 }
		
		}
		
	}
	
}, 10);

/* village */

setInterval(function() {
	if (localStorage.getItem("farmer_upper") == "on" || localStorage.getItem("farmer_producer") == "on" || localStorage.getItem("woodcutter_upper") == "on" || localStorage.getItem("woodcutter_producer") == "on" || localStorage.getItem("gold_miner_upper") == "on" || localStorage.getItem("gold_miner_producer") == "on") {
		
		if (localStorage.getItem("farmer_upper") == "on") {
			
		 if (localStorage.getItem("farmer_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("farmer_up_time")) - Date.now()) < 0) {
				
			localStorage.setItem("farmer_level", Math.floor(Number(localStorage.getItem("farmer_level")) + 1));
			
		    var p_food = Math.floor(((Number(localStorage.getItem("farmer_level")) * 3) * Number(localStorage.getItem("farmer_have"))) + (30 * Number(localStorage.getItem("farmer_have"))) + 100);
		    localStorage.setItem("plus_food", p_food);
			
		    var current = Date.now();
		    var elapsedTime = Math.floor((current - localStorage.getItem("food_timer")) / 3600000);
		    var food_t = Math.floor(Number(elapsedTime) * (Number(localStorage.getItem("plus_food")) - 3 * Number(localStorage.getItem("farmer_have"))));
		    var plusplus = Math.floor(Number(localStorage.getItem("last_food_cash")) + Number(food_t));
		    localStorage.setItem("last_food_cash", plusplus);
		    localStorage.setItem("food_timer", current);
		
		    localStorage.removeItem("farmer_upper");
		    localStorage.removeItem("farmer_up_time");
		
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 4));
		
			}
		 }
		
		} else if (localStorage.getItem("farmer_producer") == "on") {
			
		 if (localStorage.getItem("farmer_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("farmer_produce_time")) - Date.now()) < 0) {
				
			localStorage.setItem("farmer_have", Math.floor(Number(localStorage.getItem("farmer_have")) + Number(localStorage.getItem("farmer_trained"))));
			
			var p_food = Math.floor(((Number(localStorage.getItem("farmer_level")) * 3) * Number(localStorage.getItem("farmer_have"))) + (30 * Number(localStorage.getItem("farmer_have"))) + 100);
		    localStorage.setItem("plus_food", p_food);
			
		    var current = Date.now();
	        var elapsedTime = Math.floor((current - localStorage.getItem("food_timer")) / 3600000);
	        var food_t = Math.floor(Number(elapsedTime) * (Number(localStorage.getItem("plus_food")) - (Number(localStorage.getItem("farmer_trained")) * 30 + (Number(localStorage.getItem("farmer_trained")) * (Number(localStorage.getItem("farmer_level")) * 3)))));
	        var plusplus = Math.floor(Number(localStorage.getItem("last_food_cash")) + Number(food_t));
	        localStorage.setItem("last_food_cash", plusplus);
	        localStorage.setItem("food_timer", current);
		
		    localStorage.removeItem("farmer_producer");
		    localStorage.removeItem("farmer_produce_time");
		
			}
		 }
		
		} else if (localStorage.getItem("woodcutter_upper") == "on") {
			
		 if (localStorage.getItem("woodcutter_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("woodcutter_up_time")) - Date.now()) < 0) {
				
			localStorage.setItem("woodcutter_level", Math.floor(Number(localStorage.getItem("woodcutter_level")) + 1));
			
		    var p_wood = Math.floor(((Number(localStorage.getItem("woodcutter_level")) * 2) * Number(localStorage.getItem("woodcutter_have"))) + (20 * Number(localStorage.getItem("woodcutter_have"))));
		    localStorage.setItem("plus_wood", p_wood);
			
		    var current = Date.now();
		    var elapsedTime = Math.floor((current - localStorage.getItem("wood_timer")) / 3600000);
		    var wood_t = Math.floor(Number(elapsedTime) * (Number(localStorage.getItem("plus_wood")) - 2 * Number(localStorage.getItem("woodcutter_have"))));
		    var plusplus = Math.floor(Number(localStorage.getItem("last_wood_cash")) + Number(wood_t));
		    localStorage.setItem("last_wood_cash", plusplus);
		    localStorage.setItem("wood_timer", current);
		
		    localStorage.removeItem("woodcutter_upper");
		    localStorage.removeItem("woodcutter_up_time");
		
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 4));
		
			}
		 }
		
		} else if (localStorage.getItem("woodcutter_producer") == "on") {
			
		 if (localStorage.getItem("woodcutter_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("woodcutter_produce_time")) - Date.now()) < 0) {
				
			localStorage.setItem("woodcutter_have", Math.floor(Number(localStorage.getItem("woodcutter_have")) + Number(localStorage.getItem("woodcutter_trained"))));
			
	        var p_wood = Math.floor(((Number(localStorage.getItem("woodcutter_level")) * 2) * Number(localStorage.getItem("woodcutter_have"))) + (20 * Number(localStorage.getItem("woodcutter_have"))));
		    localStorage.setItem("plus_wood", p_wood);
			
		    var current = Date.now();
	        var elapsedTime = Math.floor((current - localStorage.getItem("wood_timer")) / 3600000);
	        var wood_t = Math.floor(Number(elapsedTime) * (Number(localStorage.getItem("plus_wood")) - (Number(localStorage.getItem("woodcutter_trained")) * 20 + (Number(localStorage.getItem("woodcutter_trained")) * (Number(localStorage.getItem("woodcutter_level")) * 2)))));
	        var plusplus = Math.floor(Number(localStorage.getItem("last_wood_cash")) + Number(wood_t));
	        localStorage.setItem("last_wood_cash", plusplus);
	        localStorage.setItem("wood_timer", current);
		
		    localStorage.removeItem("woodcutter_producer");
		    localStorage.removeItem("woodcutter_produce_time");
		
			}
		 }
		
		} else if (localStorage.getItem("gold_miner_upper") == "on") {
			
		 if (localStorage.getItem("gold_miner_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("gold_miner_up_time")) - Date.now()) < 0) {
				
			localStorage.setItem("gold_miner_level", Math.floor(Number(localStorage.getItem("gold_miner_level")) + 1));
			
		    var p_gold = Math.floor(((Number(localStorage.getItem("gold_miner_level")) * 1) * Number(localStorage.getItem("gold_miner_have"))) + (10 * Number(localStorage.getItem("gold_miner_have"))));
		    localStorage.setItem("plus_gold", p_gold);
		 	
		    var current = Date.now();
		    var elapsedTime = Math.floor((current - localStorage.getItem("gold_timer")) / 3600000);
		    var gold_t = Math.floor(Number(elapsedTime) * (Number(localStorage.getItem("plus_gold")) - 1 * Number(localStorage.getItem("gold_miner_have"))));
		    var plusplus = Math.floor(Number(localStorage.getItem("last_gold_cash")) + Number(gold_t));
		    localStorage.setItem("last_gold_cash", plusplus);
		    localStorage.setItem("gold_timer", current);
		
		    localStorage.removeItem("gold_miner_upper");
		    localStorage.removeItem("gold_miner_up_time");
		
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 4));
		
			}
		 }
		
		} else if (localStorage.getItem("gold_miner_producer") == "on") {
			
		 if (localStorage.getItem("gold_miner_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("gold_miner_produce_time")) - Date.now()) < 0) {
				
			localStorage.setItem("gold_miner_have", Math.floor(Number(localStorage.getItem("gold_miner_have")) + Number(localStorage.getItem("gold_miner_trained"))));
			
	        var p_gold = Math.floor(((Number(localStorage.getItem("gold_miner_level")) * 1) * Number(localStorage.getItem("gold_miner_have"))) + (10 * Number(localStorage.getItem("gold_miner_have"))));
		    localStorage.setItem("plus_gold", p_gold);
		 	
		    var current = Date.now();
	        var elapsedTime = Math.floor((current - localStorage.getItem("gold_timer")) / 3600000);
	        var gold_t = Math.floor(Number(elapsedTime) * (Number(localStorage.getItem("plus_gold")) - (Number(localStorage.getItem("gold_miner_trained")) * 10 + (Number(localStorage.getItem("gold_miner_trained")) * (Number(localStorage.getItem("gold_miner_level")) * 1)))));
	        var plusplus = Math.floor(Number(localStorage.getItem("last_gold_cash")) + Number(gold_t));
	        localStorage.setItem("last_gold_cash", plusplus);
	        localStorage.setItem("gold_timer", current);
		
		    localStorage.removeItem("gold_miner_producer");
		    localStorage.removeItem("gold_miner_produce_time");
		
			}
		 }
		
		}
		
	}
	
}, 10);

/* money */

function money(){
	
  var currentTime = new Date().getTime();
  
  var diamond = Math.floor((currentTime - localStorage.getItem("diamond_timer")) / 3600000);
  var timer_diamond = Math.floor(Number(diamond) * Number(localStorage.getItem("plus_diamond")));
  var diamond_reward = Math.floor(Number(timer_diamond) + 1000000 - Number(localStorage.getItem("diamond_cash")) + Number(localStorage.getItem("last_diamond_cash")));
  localStorage.setItem("diamond", diamond_reward);
  
  var gold = Math.floor((currentTime - localStorage.getItem("gold_timer")) / 3600000);
  var timer_gold = Math.floor(Number(gold) * ((Number(localStorage.getItem("plus_gold")) * (Number(localStorage.getItem("mining_level")) + 100)) / 100));
  var gold_reward = Math.floor(Number(timer_gold) + 10000000 - Number(localStorage.getItem("gold_cash")) + Number(localStorage.getItem("last_gold_cash")));
  localStorage.setItem("gold", gold_reward);
  
  var food = Math.floor((currentTime - localStorage.getItem("food_timer")) / 3600000);
  var timer_food = Math.floor(Number(food) * (((Number(localStorage.getItem("plus_food")) * (Number(localStorage.getItem("farming_level")) + 100)) / 100) - Number(localStorage.getItem("minus_food"))));
  var food_reward = Math.floor(Number(timer_food) + 10000000 - Number(localStorage.getItem("food_cash")) + Number(localStorage.getItem("last_food_cash")));
  localStorage.setItem("food", food_reward);
  
  var wood = Math.floor((currentTime - localStorage.getItem("wood_timer")) / 3600000);
  var timer_wood = Math.floor(Number(wood) * ((Number(localStorage.getItem("plus_wood")) * (Number(localStorage.getItem("lumbering_level")) + 100)) / 100));
  var wood_reward = Math.floor(Number(timer_wood) + 10000000 - Number(localStorage.getItem("wood_cash")) + Number(localStorage.getItem("last_wood_cash")));
  localStorage.setItem("wood", wood_reward);
  
}

setInterval(money, 10);

/* defense bonus */

setInterval(function(){
	
	var results = (localStorage.getItem("castle_level") * 2) + (localStorage.getItem("wall_level") * 2) + ((Number(localStorage.getItem("watchtower_level")) * 0.1 + 1) * localStorage.getItem("watchtower_have"));
	results = Math.round(results * 100) / 100;
	localStorage.setItem("defense_bonus", results);
	document.getElementById("defense_bonus").innerText = Number(localStorage.getItem("defense_bonus"));
	
}, 10);

/* input only num */

function inputonlynumber(input) {
    let numbers = input.value;
      
    let onlynumber = /^[0-9]*$/;
  
    if (!onlynumber.test(numbers)) {
        input.value = numbers.replace(/[^0-9]/g, '');
    }
}
