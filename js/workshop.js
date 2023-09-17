function page_save() {
	if (localStorage.getItem("local_lan") == "en") {
		document.getElementById("lan_head_text").innerText = "Workshop";
		document.getElementById("build_top_text").innerText = "Craft and upgrade weapons of war to strengthen your army!";
		document.getElementById("ballistax_text").innerText = "Ballista x";
		document.getElementById("onagerx_text").innerText = "Onager x";
		document.getElementById("cannonx_text").innerText = "Cannon x";
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

function troop1_info() {
	document.getElementById("troops_info").style.animation = "troop_info1 0.4s";
	document.getElementById("troops_info_bg").style.display = "flex";
	document.getElementById("troops_info").style.display = "block";
	
	document.getElementById("troops_text").innerText = "Ballista";

    $(document).ready(function(){
		
		var jsonData_ballista = JSON.stringify(ballista);
		var data_ballista = JSON.parse(jsonData_ballista);
		
		/* info */
		
		if (data_ballista[Number(localStorage.getItem("ballista_level"))].Age == 1) {
			document.getElementById("age_t").innerText = "Dark (1)";
		} else if (data_ballista[Number(localStorage.getItem("ballista_level"))].Age == 2) {
			document.getElementById("age_t").innerText = "Feudal (2)";
		} else if (data_ballista[Number(localStorage.getItem("ballista_level"))].Age == 3) {
			document.getElementById("age_t").innerText = "Castle (3)";
		} else if (data_ballista[Number(localStorage.getItem("ballista_level"))].Age == 4) {
			document.getElementById("age_t").innerText = "Imperial (4)";
		} else if (data_ballista[Number(localStorage.getItem("ballista_level"))].Age == 5) {
			document.getElementById("age_t").innerText = "New (5)";
		}
		document.getElementById("type_t").innerText = data_ballista[Number(localStorage.getItem("ballista_level"))].Type;
		document.getElementById("class_t").innerText = data_ballista[Number(localStorage.getItem("ballista_level"))].Class;
		
		/* produce */
		
		document.getElementById("p_food").innerText = data_ballista[Number(localStorage.getItem("ballista_level"))].Pfood;
		document.getElementById("p_wood").innerText = data_ballista[Number(localStorage.getItem("ballista_level"))].Pwood;
		document.getElementById("p_gold").innerText = data_ballista[Number(localStorage.getItem("ballista_level"))].Pgold;
		document.getElementById("p_diamond").innerText = data_ballista[Number(localStorage.getItem("ballista_level"))].Pdiamond;
		document.getElementById("p_time").innerText = data_ballista[Number(localStorage.getItem("ballista_level"))].Ptime;
		
		if (data_ballista[Number(localStorage.getItem("ballista_level"))].Pfood == null) {
			document.getElementById("produce_d1").style.display = "none";
			document.getElementById("produce_d2").style.display = "none";
		}
		
		/* upgrade */
		
		document.getElementById("u_gold").innerText = data_ballista[Number(localStorage.getItem("ballista_level"))].Ugold;
		document.getElementById("u_xp").innerText = data_ballista[Number(localStorage.getItem("ballista_level"))].Uxp;
		document.getElementById("u_time").innerText = data_ballista[Number(localStorage.getItem("ballista_level"))].Utime;
		
		/* abilities */
		
		document.getElementById("abilities_text").innerText = data_ballista[Number(localStorage.getItem("ballista_level"))].Atitle;
		document.getElementById("a1_title").innerText = data_ballista[Number(localStorage.getItem("ballista_level"))].A1text;
		document.getElementById("a1_text").innerText = data_ballista[Number(localStorage.getItem("ballista_level"))].A1;
		document.getElementById("a2_title").innerText = data_ballista[Number(localStorage.getItem("ballista_level"))].A2text;
		document.getElementById("a2_text").innerText = data_ballista[Number(localStorage.getItem("ballista_level"))].A2;
		document.getElementById("a3_title").innerText = data_ballista[Number(localStorage.getItem("ballista_level"))].A3text;
		document.getElementById("a3_text").innerText = data_ballista[Number(localStorage.getItem("ballista_level"))].A3;
		
		if (data_ballista[Number(localStorage.getItem("ballista_level"))].A2text == null) {
			document.getElementById("abilities_2").style.display = "none";
			document.getElementById("abilities_3").style.display = "none";
		} else if (data_ballista[Number(localStorage.getItem("ballista_level"))].A2text != null && data_ballista[Number(localStorage.getItem("ballista_level"))].A3text == null) {
			document.getElementById("abilities_3").style.display = "none";
		}
		
    });
}

function troop2_info() {
	document.getElementById("troops_info").style.animation = "troop_info1 0.4s";
	document.getElementById("troops_info_bg").style.display = "flex";
	document.getElementById("troops_info").style.display = "block";
	
	document.getElementById("troops_text").innerText = "Onager";

    $(document).ready(function(){
		
		var jsonData_onager = JSON.stringify(onager);
		var data_onager = JSON.parse(jsonData_onager);
		
		/* info */
		
		if (data_onager[Number(localStorage.getItem("onager_level"))].Age == 1) {
			document.getElementById("age_t").innerText = "Dark (1)";
		} else if (data_onager[Number(localStorage.getItem("onager_level"))].Age == 2) {
			document.getElementById("age_t").innerText = "Feudal (2)";
		} else if (data_onager[Number(localStorage.getItem("onager_level"))].Age == 3) {
			document.getElementById("age_t").innerText = "Castle (3)";
		} else if (data_onager[Number(localStorage.getItem("onager_level"))].Age == 4) {
			document.getElementById("age_t").innerText = "Imperial (4)";
		} else if (data_onager[Number(localStorage.getItem("onager_level"))].Age == 5) {
			document.getElementById("age_t").innerText = "New (5)";
		}
		document.getElementById("type_t").innerText = data_onager[Number(localStorage.getItem("onager_level"))].Type;
		document.getElementById("class_t").innerText = data_onager[Number(localStorage.getItem("onager_level"))].Class;
		
		/* produce */
		
		document.getElementById("p_food").innerText = data_onager[Number(localStorage.getItem("onager_level"))].Pfood;
		document.getElementById("p_wood").innerText = data_onager[Number(localStorage.getItem("onager_level"))].Pwood;
		document.getElementById("p_gold").innerText = data_onager[Number(localStorage.getItem("onager_level"))].Pgold;
		document.getElementById("p_diamond").innerText = data_onager[Number(localStorage.getItem("onager_level"))].Pdiamond;
		document.getElementById("p_time").innerText = data_onager[Number(localStorage.getItem("onager_level"))].Ptime;
		
		if (data_onager[Number(localStorage.getItem("onager_level"))].Pfood == null) {
			document.getElementById("produce_d1").style.display = "none";
			document.getElementById("produce_d2").style.display = "none";
		}
		
		/* upgrade */
		
		document.getElementById("u_gold").innerText = data_onager[Number(localStorage.getItem("onager_level"))].Ugold;
		document.getElementById("u_xp").innerText = data_onager[Number(localStorage.getItem("onager_level"))].Uxp;
		document.getElementById("u_time").innerText = data_onager[Number(localStorage.getItem("onager_level"))].Utime;
		
		/* abilities */
		
		document.getElementById("abilities_text").innerText = data_onager[Number(localStorage.getItem("onager_level"))].Atitle;
		document.getElementById("a1_title").innerText = data_onager[Number(localStorage.getItem("onager_level"))].A1text;
		document.getElementById("a1_text").innerText = data_onager[Number(localStorage.getItem("onager_level"))].A1;
		document.getElementById("a2_title").innerText = data_onager[Number(localStorage.getItem("onager_level"))].A2text;
		document.getElementById("a2_text").innerText = data_onager[Number(localStorage.getItem("onager_level"))].A2;
		document.getElementById("a3_title").innerText = data_onager[Number(localStorage.getItem("onager_level"))].A3text;
		document.getElementById("a3_text").innerText = data_onager[Number(localStorage.getItem("onager_level"))].A3;
		
		if (data_onager[Number(localStorage.getItem("onager_level"))].A2text == null) {
			document.getElementById("abilities_2").style.display = "none";
			document.getElementById("abilities_3").style.display = "none";
		} else if (data_onager[Number(localStorage.getItem("onager_level"))].A2text != null && data_onager[Number(localStorage.getItem("onager_level"))].A3text == null) {
			document.getElementById("abilities_3").style.display = "none";
		}
		
    });
}

function troop3_info() {
	document.getElementById("troops_info").style.animation = "troop_info1 0.4s";
	document.getElementById("troops_info_bg").style.display = "flex";
	document.getElementById("troops_info").style.display = "block";
	
	document.getElementById("troops_text").innerText = "Cannon";

    $(document).ready(function(){
		
		var jsonData_cannon = JSON.stringify(cannon);
		var data_cannon = JSON.parse(jsonData_cannon);
		
		/* info */
		
		if (data_cannon[Number(localStorage.getItem("cannon_level"))].Age == 1) {
			document.getElementById("age_t").innerText = "Dark (1)";
		} else if (data_cannon[Number(localStorage.getItem("cannon_level"))].Age == 2) {
			document.getElementById("age_t").innerText = "Feudal (2)";
		} else if (data_cannon[Number(localStorage.getItem("cannon_level"))].Age == 3) {
			document.getElementById("age_t").innerText = "Castle (3)";
		} else if (data_cannon[Number(localStorage.getItem("cannon_level"))].Age == 4) {
			document.getElementById("age_t").innerText = "Imperial (4)";
		} else if (data_cannon[Number(localStorage.getItem("cannon_level"))].Age == 5) {
			document.getElementById("age_t").innerText = "New (5)";
		}
		document.getElementById("type_t").innerText = data_cannon[Number(localStorage.getItem("cannon_level"))].Type;
		document.getElementById("class_t").innerText = data_cannon[Number(localStorage.getItem("cannon_level"))].Class;
		
		/* produce */
		
		document.getElementById("p_food").innerText = data_cannon[Number(localStorage.getItem("cannon_level"))].Pfood;
		document.getElementById("p_wood").innerText = data_cannon[Number(localStorage.getItem("cannon_level"))].Pwood;
		document.getElementById("p_gold").innerText = data_cannon[Number(localStorage.getItem("cannon_level"))].Pgold;
		document.getElementById("p_diamond").innerText = data_cannon[Number(localStorage.getItem("cannon_level"))].Pdiamond;
		document.getElementById("p_time").innerText = data_cannon[Number(localStorage.getItem("cannon_level"))].Ptime;
		
		if (data_cannon[Number(localStorage.getItem("cannon_level"))].Pfood == null) {
			document.getElementById("produce_d1").style.display = "none";
			document.getElementById("produce_d2").style.display = "none";
		}
		
		/* upgrade */
		
		document.getElementById("u_gold").innerText = data_cannon[Number(localStorage.getItem("cannon_level"))].Ugold;
		document.getElementById("u_xp").innerText = data_cannon[Number(localStorage.getItem("cannon_level"))].Uxp;
		document.getElementById("u_time").innerText = data_cannon[Number(localStorage.getItem("cannon_level"))].Utime;
		
		/* abilities */
		
		document.getElementById("abilities_text").innerText = data_cannon[Number(localStorage.getItem("cannon_level"))].Atitle;
		document.getElementById("a1_title").innerText = data_cannon[Number(localStorage.getItem("cannon_level"))].A1text;
		document.getElementById("a1_text").innerText = data_cannon[Number(localStorage.getItem("cannon_level"))].A1;
		document.getElementById("a2_title").innerText = data_cannon[Number(localStorage.getItem("cannon_level"))].A2text;
		document.getElementById("a2_text").innerText = data_cannon[Number(localStorage.getItem("cannon_level"))].A2;
		document.getElementById("a3_title").innerText = data_cannon[Number(localStorage.getItem("cannon_level"))].A3text;
		document.getElementById("a3_text").innerText = data_cannon[Number(localStorage.getItem("cannon_level"))].A3;
		
		if (data_cannon[Number(localStorage.getItem("cannon_level"))].A2text == null) {
			document.getElementById("abilities_2").style.display = "none";
			document.getElementById("abilities_3").style.display = "none";
		} else if (data_cannon[Number(localStorage.getItem("cannon_level"))].A2text != null && data_cannon[Number(localStorage.getItem("cannon_level"))].A3text == null) {
			document.getElementById("abilities_3").style.display = "none";
		}
		
    });
}

/* ballista up and produce */

function ballista_produce() {
	
	var c_value = document.getElementById("ballista_input").value;
	var cost_value = Math.floor(Number(c_value) * 500);
	
	if (c_value != null && c_value > 0) {
	
	if (Number(cost_value) <= Number(localStorage.getItem("gold")) && Number(cost_value) <= Number(localStorage.getItem("wood"))) {
			
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + Math.floor(280 * Number(document.getElementById("ballista_input").value)));
		var ms_time = now.getTime();
		localStorage.setItem("ballista_produce_time", ms_time);
		
		localStorage.setItem("ballista_produce_price", Math.floor(500 * Number(document.getElementById("ballista_input").value)));
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + Math.floor(500 * Number(document.getElementById("ballista_input").value))));
		
		localStorage.setItem("wood_cash", Math.floor(Number(localStorage.getItem("wood_cash")) + Math.floor(500 * Number(document.getElementById("ballista_input").value))));
		
		localStorage.setItem("ballista_producer", "on");
		
		localStorage.setItem("ballista_trained", Number(document.getElementById("ballista_input").value))
		
		location.reload();
			
	}
	
	}
	
}

function ballista_produce_cancel() {
	
	localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) - Number(localStorage.getItem("ballista_produce_price"))));
	localStorage.setItem("wood_cash", Math.floor(Number(localStorage.getItem("wood_cash")) - Number(localStorage.getItem("ballista_produce_price"))));
	
	localStorage.removeItem("ballista_upper");
	localStorage.removeItem("ballista_up_time");
	localStorage.removeItem("ballista_producer");
	localStorage.removeItem("ballista_produce_time");
	localStorage.removeItem("onager_upper");
	localStorage.removeItem("onager_up_time");
	localStorage.removeItem("onager_producer");
	localStorage.removeItem("onager_produce_time");
	localStorage.removeItem("cannon_upper");
	localStorage.removeItem("cannon_up_time");
	localStorage.removeItem("cannon_producer");
	localStorage.removeItem("cannon_produce_time");
	
	location.reload();
	
}

setInterval(function(){
	
	if (localStorage.getItem("ballista_producer") == "on") {
		
		document.getElementById("build_right1").style.display = "none";
		document.getElementById("build_right2").style.display = "none";
		document.getElementById("build_right3").style.display = "none";
		document.getElementById("build_producer1").style.display = "block";
		document.getElementById("build_producer2").style.display = "block";
		document.getElementById("build_producer3").style.display = "block";
		
		document.getElementById("build_produce_board2").style.display = "none";
		document.getElementById("build_produce_board3").style.display = "none";
		
		var bp_ms = Math.floor(Number(localStorage.getItem("ballista_produce_time")) - Date.now());
		var bp_s = Math.floor(bp_ms / 1000);
		var bp_m = Math.floor(bp_s / 60);
		bp_s = bp_s % 60;
		var bp_h = Math.floor(bp_m / 60);
		bp_m = bp_m % 60;
		var bp_d = Math.floor(bp_h / 24);
		bp_h = bp_h % 24;
		
		bp_d = bp_d.toString().padStart(2, "0");
		bp_h = bp_h.toString().padStart(2, "0");
		bp_m = bp_m.toString().padStart(2, "0");
		bp_s = bp_s.toString().padStart(2, "0");
		
		document.getElementById("ballista_produce_d").innerText = bp_d;
		document.getElementById("ballista_produce_h").innerText = bp_h;
		document.getElementById("ballista_produce_m").innerText = bp_m;
		document.getElementById("ballista_produce_s").innerText = bp_s;
		
		if (Math.floor(Number(localStorage.getItem("ballista_produce_time")) - Date.now()) < 0) {
		
		localStorage.removeItem("ballista_producer");
		localStorage.removeItem("ballista_produce_time");
		
		document.getElementById("build_right1").style.display = "block";
		document.getElementById("build_right2").style.display = "block";
		document.getElementById("build_right3").style.display = "block";
		document.getElementById("build_producer1").style.display = "none";
		document.getElementById("build_producer2").style.display = "none";
		document.getElementById("build_producer3").style.display = "none";
		
		localStorage.setItem("ballista_have", Math.floor(Number(localStorage.getItem("ballista_have")) + Number(localStorage.getItem("ballista_trained"))));
		
		localStorage.removeItem("ballista_trained");
		
		location.reload();
		}
		
		
	}
	
	
}, 10);

function ballista_up() {
	
	if (Number(localStorage.getItem("ballista_level")) == 0 && Number(localStorage.getItem("gold")) >= 80) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 20);
		var ms_time = now.getTime();
		localStorage.setItem("ballista_up_time", ms_time);
		
		localStorage.setItem("ballista_up_price", 80);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 80));
		
		localStorage.setItem("ballista_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("ballista_level")) == 1 && Number(localStorage.getItem("gold")) >= 120) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 40);
		var ms_time = now.getTime();
		localStorage.setItem("ballista_up_time", ms_time);
		
		localStorage.setItem("ballista_up_price", 120);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 120));
		
		localStorage.setItem("ballista_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("ballista_level")) == 2 && Number(localStorage.getItem("gold")) >= 240) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 80);
		var ms_time = now.getTime();
		localStorage.setItem("ballista_up_time", ms_time);
		
		localStorage.setItem("ballista_up_price", 240);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 240));
		
		localStorage.setItem("ballista_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("ballista_level")) == 3 && Number(localStorage.getItem("gold")) >= 500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 160);
		var ms_time = now.getTime();
		localStorage.setItem("ballista_up_time", ms_time);
		
		localStorage.setItem("ballista_up_price", 500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 500));
		
		localStorage.setItem("ballista_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("ballista_level")) == 4 && Number(localStorage.getItem("gold")) >= 800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 320);
		var ms_time = now.getTime();
		localStorage.setItem("ballista_up_time", ms_time);
		
		localStorage.setItem("ballista_up_price", 800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 800));
		
		localStorage.setItem("ballista_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("ballista_level")) == 5 && Number(localStorage.getItem("gold")) >= 1400) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1220);
		var ms_time = now.getTime();
		localStorage.setItem("ballista_up_time", ms_time);
		
		localStorage.setItem("ballista_up_price", 1400);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 1400));
		
		localStorage.setItem("ballista_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("ballista_level")) == 6 && Number(localStorage.getItem("gold")) >= 2000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1840);
		var ms_time = now.getTime();
		localStorage.setItem("ballista_up_time", ms_time);
		
		localStorage.setItem("ballista_up_price", 2000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 2000));
		
		localStorage.setItem("ballista_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("ballista_level")) == 7 && Number(localStorage.getItem("gold")) >= 2900) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 2720);
		var ms_time = now.getTime();
		localStorage.setItem("ballista_up_time", ms_time);
		
		localStorage.setItem("ballista_up_price", 2900);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 2900));
		
		localStorage.setItem("ballista_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("ballista_level")) == 8 && Number(localStorage.getItem("gold")) >= 3900) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 4540);
		var ms_time = now.getTime();
		localStorage.setItem("ballista_up_time", ms_time);
		
		localStorage.setItem("ballista_up_price", 3900);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 3900));
		
		localStorage.setItem("ballista_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("ballista_level")) == 9 && Number(localStorage.getItem("gold")) >= 5000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 6620);
		var ms_time = now.getTime();
		localStorage.setItem("ballista_up_time", ms_time);
		
		localStorage.setItem("ballista_up_price", 5000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 5000));
		
		localStorage.setItem("ballista_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("ballista_level")) == 10 && Number(localStorage.getItem("gold")) >= 8000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 14740);
		var ms_time = now.getTime();
		localStorage.setItem("ballista_up_time", ms_time);
		
		localStorage.setItem("ballista_up_price", 8000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 8000));
		
		localStorage.setItem("ballista_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("ballista_level")) == 11 && Number(localStorage.getItem("gold")) >= 12000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 19220);
		var ms_time = now.getTime();
		localStorage.setItem("ballista_up_time", ms_time);
		
		localStorage.setItem("ballista_up_price", 12000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 12000));
		
		localStorage.setItem("ballista_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("ballista_level")) == 12 && Number(localStorage.getItem("gold")) >= 18000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 24340);
		var ms_time = now.getTime();
		localStorage.setItem("ballista_up_time", ms_time);
		
		localStorage.setItem("ballista_up_price", 18000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 18000));
		
		localStorage.setItem("ballista_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("ballista_level")) == 13 && Number(localStorage.getItem("gold")) >= 24000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 29720);
		var ms_time = now.getTime();
		localStorage.setItem("ballista_up_time", ms_time);
		
		localStorage.setItem("ballista_up_price", 24000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 24000));
		
		localStorage.setItem("ballista_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("ballista_level")) == 14 && Number(localStorage.getItem("gold")) >= 30000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 35740);
		var ms_time = now.getTime();
		localStorage.setItem("ballista_up_time", ms_time);
		
		localStorage.setItem("ballista_up_price", 30000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 30000));
		
		localStorage.setItem("ballista_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("ballista_level")) == 15 && Number(localStorage.getItem("gold")) >= 38000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 64820);
		var ms_time = now.getTime();
		localStorage.setItem("ballista_up_time", ms_time);
		
		localStorage.setItem("ballista_up_price", 38000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 38000));
		
		localStorage.setItem("ballista_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("ballista_level")) == 16 && Number(localStorage.getItem("gold")) >= 46000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 73240);
		var ms_time = now.getTime();
		localStorage.setItem("ballista_up_time", ms_time);
		
		localStorage.setItem("ballista_up_price", 46000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 46000));
		
		localStorage.setItem("ballista_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("ballista_level")) == 17 && Number(localStorage.getItem("gold")) >= 56000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 82510);
		var ms_time = now.getTime();
		localStorage.setItem("ballista_up_time", ms_time);
		
		localStorage.setItem("ballista_up_price", 56000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 56000));
		
		localStorage.setItem("ballista_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("ballista_level")) == 18 && Number(localStorage.getItem("gold")) >= 66000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 91840);
		var ms_time = now.getTime();
		localStorage.setItem("ballista_up_time", ms_time);
		
		localStorage.setItem("ballista_up_price", 66000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 66000));
		
		localStorage.setItem("ballista_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("ballista_level")) == 19 && Number(localStorage.getItem("gold")) >= 78000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 103520);
		var ms_time = now.getTime();
		localStorage.setItem("ballista_up_time", ms_time);
		
		localStorage.setItem("ballista_up_price", 78000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 78000));
		
		localStorage.setItem("ballista_upper", "on");
		
		location.reload();
		
	}
	
}

function ballista_up_cancel() {
	
	localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) - Number(localStorage.getItem("ballista_up_price"))));
	
	localStorage.removeItem("ballista_upper");
	localStorage.removeItem("ballista_up_time");
	localStorage.removeItem("ballista_producer");
	localStorage.removeItem("ballista_produce_time");
	localStorage.removeItem("onager_upper");
	localStorage.removeItem("onager_up_time");
	localStorage.removeItem("onager_producer");
	localStorage.removeItem("onager_produce_time");
	localStorage.removeItem("cannon_upper");
	localStorage.removeItem("cannon_up_time");
	localStorage.removeItem("cannon_producer");
	localStorage.removeItem("cannon_produce_time");
	
	location.reload();
	
}

setInterval(function(){
	
	if (localStorage.getItem("ballista_upper") == "on") {
		
		document.getElementById("build_right1").style.display = "none";
		document.getElementById("build_right2").style.display = "none";
		document.getElementById("build_right3").style.display = "none";
		document.getElementById("build_upper1").style.display = "block";
		document.getElementById("build_upper2").style.display = "block";
		document.getElementById("build_upper3").style.display = "block";
		
		document.getElementById("build_up_board2").style.display = "none";
		document.getElementById("build_up_board3").style.display = "none";
		
		var b_ms = Math.floor(Number(localStorage.getItem("ballista_up_time")) - Date.now());
		var b_s = Math.floor(b_ms / 1000);
		var b_m = Math.floor(b_s / 60);
		b_s = b_s % 60;
		var b_h = Math.floor(b_m / 60);
		b_m = b_m % 60;
		var b_d = Math.floor(b_h / 24);
		b_h = b_h % 24;
		
		b_d = b_d.toString().padStart(2, "0");
		b_h = b_h.toString().padStart(2, "0");
		b_m = b_m.toString().padStart(2, "0");
		b_s = b_s.toString().padStart(2, "0");
		
		document.getElementById("ballista_up_d").innerText = b_d;
		document.getElementById("ballista_up_h").innerText = b_h;
		document.getElementById("ballista_up_m").innerText = b_m;
		document.getElementById("ballista_up_s").innerText = b_s;
		
		if (Math.floor(Number(localStorage.getItem("ballista_up_time")) - Date.now()) < 0) {
		
		localStorage.removeItem("ballista_upper");
		localStorage.removeItem("ballista_up_time");
		
		document.getElementById("build_right1").style.display = "block";
		document.getElementById("build_right2").style.display = "block";
		document.getElementById("build_right3").style.display = "block";
		document.getElementById("build_upper1").style.display = "none";
		document.getElementById("build_upper2").style.display = "none";
		document.getElementById("build_upper3").style.display = "none";
		
		localStorage.setItem("ballista_level", Math.floor(Number(localStorage.getItem("ballista_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 40));
		
		location.reload();
		}
		
		
	}
	
	
}, 10);

function ballista_up_speed_up() {
	if (Number(localStorage.getItem("diamond")) >= 50) {
		
		localStorage.setItem("diamond_cash", Math.floor(Number(localStorage.getItem("diamond_cash")) + 50));
		
		localStorage.setItem("ballista_level", Math.floor(Number(localStorage.getItem("ballista_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 40));
		
		localStorage.removeItem("ballista_upper");
		localStorage.removeItem("ballista_up_time");
		
		location.reload();
		
	}
}

setInterval(function(){
	
	document.getElementById("ballista_level").innerText = localStorage.getItem("ballista_level");
	if (Number(localStorage.getItem("ballista_level")) != 20) {
	document.getElementById("ballista_next_level").innerText = Math.floor(Number(localStorage.getItem("ballista_level")) + 1);
	} else if (Number(localStorage.getItem("ballista_level")) == 20) {
		document.getElementById("ballista_next_level").innerText = "Max";
	}
	var result1 = Math.floor(Number(localStorage.getItem("gold")) / 500);
	var result2 = Math.floor(Number(localStorage.getItem("wood")) / 500);
	var result3 = Math.min(result1, result2);
	document.getElementById("max_ballista").innerText = Math.floor(result3);
	document.getElementById("ballista_trained_amount").innerText = Number(localStorage.getItem("ballista_trained"));
	document.getElementById("total_ballista").innerText = Number(localStorage.getItem("ballista_have"));
	
}, 10);

/* onager up and produce */

function onager_produce() {
	
	var c_value = document.getElementById("onager_input").value;
	var cost_value = Math.floor(Number(c_value) * 500);
	
	if (c_value != null && c_value > 0) {
	
	if (Number(cost_value) <= Number(localStorage.getItem("gold")) && Number(cost_value) <= Number(localStorage.getItem("wood"))) {
			
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + Math.floor(280 * Number(document.getElementById("onager_input").value)));
		var ms_time = now.getTime();
		localStorage.setItem("onager_produce_time", ms_time);
		
		localStorage.setItem("onager_produce_price", Math.floor(500 * Number(document.getElementById("onager_input").value)));
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + Math.floor(500 * Number(document.getElementById("onager_input").value))));
		
		localStorage.setItem("wood_cash", Math.floor(Number(localStorage.getItem("wood_cash")) + Math.floor(500 * Number(document.getElementById("onager_input").value))));
		
		localStorage.setItem("onager_producer", "on");
		
		localStorage.setItem("onager_trained", Number(document.getElementById("onager_input").value))
		
		location.reload();
			
	}
	
	}
	
}

function onager_produce_cancel() {
	
	localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) - Number(localStorage.getItem("onager_produce_price"))));
	localStorage.setItem("wood_cash", Math.floor(Number(localStorage.getItem("wood_cash")) - Number(localStorage.getItem("onager_produce_price"))));
	
	localStorage.removeItem("ballista_upper");
	localStorage.removeItem("ballista_up_time");
	localStorage.removeItem("ballista_producer");
	localStorage.removeItem("ballista_produce_time");
	localStorage.removeItem("onager_upper");
	localStorage.removeItem("onager_up_time");
	localStorage.removeItem("onager_producer");
	localStorage.removeItem("onager_produce_time");
	localStorage.removeItem("cannon_upper");
	localStorage.removeItem("cannon_up_time");
	localStorage.removeItem("cannon_producer");
	localStorage.removeItem("cannon_produce_time");
	
	location.reload();
	
}

setInterval(function(){
	
	if (localStorage.getItem("onager_producer") == "on") {
		
		document.getElementById("build_right1").style.display = "none";
		document.getElementById("build_right2").style.display = "none";
		document.getElementById("build_right3").style.display = "none";
		document.getElementById("build_producer1").style.display = "block";
		document.getElementById("build_producer2").style.display = "block";
		document.getElementById("build_producer3").style.display = "block";
		
		document.getElementById("build_produce_board1").style.display = "none";
		document.getElementById("build_produce_board3").style.display = "none";
		
		var op_ms = Math.floor(Number(localStorage.getItem("onager_produce_time")) - Date.now());
		var op_s = Math.floor(op_ms / 1000);
		var op_m = Math.floor(op_s / 60);
		op_s = op_s % 60;
		var op_h = Math.floor(op_m / 60);
		op_m = op_m % 60;
		var op_d = Math.floor(op_h / 24);
		op_h = op_h % 24;
		
		op_d = op_d.toString().padStart(2, "0");
		op_h = op_h.toString().padStart(2, "0");
		op_m = op_m.toString().padStart(2, "0");
		op_s = op_s.toString().padStart(2, "0");
		
		document.getElementById("onager_produce_d").innerText = op_d;
		document.getElementById("onager_produce_h").innerText = op_h;
		document.getElementById("onager_produce_m").innerText = op_m;
		document.getElementById("onager_produce_s").innerText = op_s;
		
		if (Math.floor(Number(localStorage.getItem("onager_produce_time")) - Date.now()) < 0) {
		
		localStorage.removeItem("onager_producer");
		localStorage.removeItem("onager_produce_time");
		
		document.getElementById("build_right1").style.display = "block";
		document.getElementById("build_right2").style.display = "block";
		document.getElementById("build_right3").style.display = "block";
		document.getElementById("build_producer1").style.display = "none";
		document.getElementById("build_producer2").style.display = "none";
		document.getElementById("build_producer3").style.display = "none";
		
		localStorage.setItem("onager_have", Math.floor(Number(localStorage.getItem("onager_have")) + Number(localStorage.getItem("onager_trained"))));
		
		localStorage.removeItem("onager_trained");
		
		location.reload();
		}
		
		
	}
	
	
}, 10);

function onager_up() {
	
	if (Number(localStorage.getItem("onager_level")) == 0 && Number(localStorage.getItem("gold")) >= 80) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 20);
		var ms_time = now.getTime();
		localStorage.setItem("onager_up_time", ms_time);
		
		localStorage.setItem("onager_up_price", 80);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 80));
		
		localStorage.setItem("onager_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("onager_level")) == 1 && Number(localStorage.getItem("gold")) >= 120) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 40);
		var ms_time = now.getTime();
		localStorage.setItem("onager_up_time", ms_time);
		
		localStorage.setItem("onager_up_price", 120);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 120));
		
		localStorage.setItem("onager_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("onager_level")) == 2 && Number(localStorage.getItem("gold")) >= 240) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 80);
		var ms_time = now.getTime();
		localStorage.setItem("onager_up_time", ms_time);
		
		localStorage.setItem("onager_up_price", 240);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 240));
		
		localStorage.setItem("onager_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("onager_level")) == 3 && Number(localStorage.getItem("gold")) >= 500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 160);
		var ms_time = now.getTime();
		localStorage.setItem("onager_up_time", ms_time);
		
		localStorage.setItem("onager_up_price", 500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 500));
		
		localStorage.setItem("onager_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("onager_level")) == 4 && Number(localStorage.getItem("gold")) >= 800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 320);
		var ms_time = now.getTime();
		localStorage.setItem("onager_up_time", ms_time);
		
		localStorage.setItem("onager_up_price", 800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 800));
		
		localStorage.setItem("onager_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("onager_level")) == 5 && Number(localStorage.getItem("gold")) >= 1400) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1220);
		var ms_time = now.getTime();
		localStorage.setItem("onager_up_time", ms_time);
		
		localStorage.setItem("onager_up_price", 1400);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 1400));
		
		localStorage.setItem("onager_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("onager_level")) == 6 && Number(localStorage.getItem("gold")) >= 2000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1840);
		var ms_time = now.getTime();
		localStorage.setItem("onager_up_time", ms_time);
		
		localStorage.setItem("onager_up_price", 2000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 2000));
		
		localStorage.setItem("onager_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("onager_level")) == 7 && Number(localStorage.getItem("gold")) >= 2900) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 2720);
		var ms_time = now.getTime();
		localStorage.setItem("onager_up_time", ms_time);
		
		localStorage.setItem("onager_up_price", 2900);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 2900));
		
		localStorage.setItem("onager_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("onager_level")) == 8 && Number(localStorage.getItem("gold")) >= 3900) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 4540);
		var ms_time = now.getTime();
		localStorage.setItem("onager_up_time", ms_time);
		
		localStorage.setItem("onager_up_price", 3900);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 3900));
		
		localStorage.setItem("onager_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("onager_level")) == 9 && Number(localStorage.getItem("gold")) >= 5000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 6620);
		var ms_time = now.getTime();
		localStorage.setItem("onager_up_time", ms_time);
		
		localStorage.setItem("onager_up_price", 5000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 5000));
		
		localStorage.setItem("onager_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("onager_level")) == 10 && Number(localStorage.getItem("gold")) >= 8000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 14740);
		var ms_time = now.getTime();
		localStorage.setItem("onager_up_time", ms_time);
		
		localStorage.setItem("onager_up_price", 8000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 8000));
		
		localStorage.setItem("onager_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("onager_level")) == 11 && Number(localStorage.getItem("gold")) >= 12000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 19220);
		var ms_time = now.getTime();
		localStorage.setItem("onager_up_time", ms_time);
		
		localStorage.setItem("onager_up_price", 12000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 12000));
		
		localStorage.setItem("onager_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("onager_level")) == 12 && Number(localStorage.getItem("gold")) >= 18000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 24340);
		var ms_time = now.getTime();
		localStorage.setItem("onager_up_time", ms_time);
		
		localStorage.setItem("onager_up_price", 18000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 18000));
		
		localStorage.setItem("onager_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("onager_level")) == 13 && Number(localStorage.getItem("gold")) >= 24000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 29720);
		var ms_time = now.getTime();
		localStorage.setItem("onager_up_time", ms_time);
		
		localStorage.setItem("onager_up_price", 24000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 24000));
		
		localStorage.setItem("onager_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("onager_level")) == 14 && Number(localStorage.getItem("gold")) >= 30000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 35740);
		var ms_time = now.getTime();
		localStorage.setItem("onager_up_time", ms_time);
		
		localStorage.setItem("onager_up_price", 30000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 30000));
		
		localStorage.setItem("onager_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("onager_level")) == 15 && Number(localStorage.getItem("gold")) >= 38000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 64820);
		var ms_time = now.getTime();
		localStorage.setItem("onager_up_time", ms_time);
		
		localStorage.setItem("onager_up_price", 38000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 38000));
		
		localStorage.setItem("onager_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("onager_level")) == 16 && Number(localStorage.getItem("gold")) >= 46000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 73240);
		var ms_time = now.getTime();
		localStorage.setItem("onager_up_time", ms_time);
		
		localStorage.setItem("onager_up_price", 46000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 46000));
		
		localStorage.setItem("onager_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("onager_level")) == 17 && Number(localStorage.getItem("gold")) >= 56000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 82510);
		var ms_time = now.getTime();
		localStorage.setItem("onager_up_time", ms_time);
		
		localStorage.setItem("onager_up_price", 56000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 56000));
		
		localStorage.setItem("onager_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("onager_level")) == 18 && Number(localStorage.getItem("gold")) >= 66000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 91840);
		var ms_time = now.getTime();
		localStorage.setItem("onager_up_time", ms_time);
		
		localStorage.setItem("onager_up_price", 66000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 66000));
		
		localStorage.setItem("onager_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("onager_level")) == 19 && Number(localStorage.getItem("gold")) >= 78000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 103520);
		var ms_time = now.getTime();
		localStorage.setItem("onager_up_time", ms_time);
		
		localStorage.setItem("onager_up_price", 78000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 78000));
		
		localStorage.setItem("onager_upper", "on");
		
		location.reload();
		
	}
	
}

function onager_up_cancel() {
	
	localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) - Number(localStorage.getItem("onager_up_price"))));
	
	localStorage.removeItem("ballista_upper");
	localStorage.removeItem("ballista_up_time");
	localStorage.removeItem("ballista_producer");
	localStorage.removeItem("ballista_produce_time");
	localStorage.removeItem("onager_upper");
	localStorage.removeItem("onager_up_time");
	localStorage.removeItem("onager_producer");
	localStorage.removeItem("onager_produce_time");
	localStorage.removeItem("cannon_upper");
	localStorage.removeItem("cannon_up_time");
	localStorage.removeItem("cannon_producer");
	localStorage.removeItem("cannon_produce_time");
	
	location.reload();
	
}

setInterval(function(){
	
	if (localStorage.getItem("onager_upper") == "on") {
		
		document.getElementById("build_right1").style.display = "none";
		document.getElementById("build_right2").style.display = "none";
		document.getElementById("build_right3").style.display = "none";
		document.getElementById("build_upper1").style.display = "block";
		document.getElementById("build_upper2").style.display = "block";
		document.getElementById("build_upper3").style.display = "block";
		
		document.getElementById("build_up_board1").style.display = "none";
		document.getElementById("build_up_board3").style.display = "none";
		
		var o_ms = Math.floor(Number(localStorage.getItem("onager_up_time")) - Date.now());
		var o_s = Math.floor(o_ms / 1000);
		var o_m = Math.floor(o_s / 60);
		o_s = o_s % 60;
		var o_h = Math.floor(o_m / 60);
		o_m = o_m % 60;
		var o_d = Math.floor(o_h / 24);
		o_h = o_h % 24;
		
		o_d = o_d.toString().padStart(2, "0");
		o_h = o_h.toString().padStart(2, "0");
		o_m = o_m.toString().padStart(2, "0");
		o_s = o_s.toString().padStart(2, "0");
		
		document.getElementById("onager_up_d").innerText = o_d;
		document.getElementById("onager_up_h").innerText = o_h;
		document.getElementById("onager_up_m").innerText = o_m;
		document.getElementById("onager_up_s").innerText = o_s;
		
		if (Math.floor(Number(localStorage.getItem("onager_up_time")) - Date.now()) < 0) {
		
		localStorage.removeItem("onager_upper");
		localStorage.removeItem("onager_up_time");
		
		document.getElementById("build_right1").style.display = "block";
		document.getElementById("build_right2").style.display = "block";
		document.getElementById("build_right3").style.display = "block";
		document.getElementById("build_upper1").style.display = "none";
		document.getElementById("build_upper2").style.display = "none";
		document.getElementById("build_upper3").style.display = "none";
		
		localStorage.setItem("onager_level", Math.floor(Number(localStorage.getItem("onager_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 40));
		
		location.reload();
		}
		
		
	}
	
	
}, 10);

function onager_up_speed_up() {
	if (Number(localStorage.getItem("diamond")) >= 50) {
		
		localStorage.setItem("diamond_cash", Math.floor(Number(localStorage.getItem("diamond_cash")) + 50));
		
		localStorage.setItem("onager_level", Math.floor(Number(localStorage.getItem("onager_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 40));
		
		localStorage.removeItem("onager_upper");
		localStorage.removeItem("onager_up_time");
		
		location.reload();
		
	}
}

setInterval(function(){
	
	document.getElementById("onager_level").innerText = localStorage.getItem("onager_level");
	if (Number(localStorage.getItem("onager_level")) != 20) {
	document.getElementById("onager_next_level").innerText = Math.floor(Number(localStorage.getItem("onager_level")) + 1);
	} else if (Number(localStorage.getItem("onager_level")) == 20) {
		document.getElementById("onager_next_level").innerText = "Max";
	}
	var result1 = Math.floor(Number(localStorage.getItem("gold")) / 500);
	var result2 = Math.floor(Number(localStorage.getItem("wood")) / 500);
	var result3 = Math.min(result1, result2);
	document.getElementById("max_onager").innerText = Math.floor(result3);
	document.getElementById("onager_trained_amount").innerText = Number(localStorage.getItem("onager_trained"));
	document.getElementById("total_onager").innerText = Number(localStorage.getItem("onager_have"));
	
}, 10);

/* cannon up and produce */

function cannon_produce() {
	
	var c_value = document.getElementById("cannon_input").value;
	var cost_value = Math.floor(Number(c_value) * 750);
	
	if (c_value != null && c_value > 0) {
	
	if (Number(cost_value) <= Number(localStorage.getItem("gold")) && Number(cost_value) <= Number(localStorage.getItem("wood"))) {
			
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + Math.floor(340 * Number(document.getElementById("cannon_input").value)));
		var ms_time = now.getTime();
		localStorage.setItem("cannon_produce_time", ms_time);
		
		localStorage.setItem("cannon_produce_price", Math.floor(750 * Number(document.getElementById("cannon_input").value)));
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + Math.floor(750 * Number(document.getElementById("cannon_input").value))));
		
		localStorage.setItem("wood_cash", Math.floor(Number(localStorage.getItem("wood_cash")) + Math.floor(750 * Number(document.getElementById("cannon_input").value))));
		
		localStorage.setItem("cannon_producer", "on");
		
		localStorage.setItem("cannon_trained", Number(document.getElementById("cannon_input").value))
		
		location.reload();
			
	}
	
	}
	
}

function cannon_produce_cancel() {
	
	localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) - Number(localStorage.getItem("cannon_produce_price"))));
	localStorage.setItem("wood_cash", Math.floor(Number(localStorage.getItem("wood_cash")) - Number(localStorage.getItem("cannon_produce_price"))));
	
	localStorage.removeItem("ballista_upper");
	localStorage.removeItem("ballista_up_time");
	localStorage.removeItem("ballista_producer");
	localStorage.removeItem("ballista_produce_time");
	localStorage.removeItem("onager_upper");
	localStorage.removeItem("onager_up_time");
	localStorage.removeItem("onager_producer");
	localStorage.removeItem("onager_produce_time");
	localStorage.removeItem("cannon_upper");
	localStorage.removeItem("cannon_up_time");
	localStorage.removeItem("cannon_producer");
	localStorage.removeItem("cannon_produce_time");
	
	location.reload();
	
}

setInterval(function(){
	
	if (localStorage.getItem("cannon_producer") == "on") {
		
		document.getElementById("build_right1").style.display = "none";
		document.getElementById("build_right2").style.display = "none";
		document.getElementById("build_right3").style.display = "none";
		document.getElementById("build_producer1").style.display = "block";
		document.getElementById("build_producer2").style.display = "block";
		document.getElementById("build_producer3").style.display = "block";
		
		document.getElementById("build_produce_board1").style.display = "none";
		document.getElementById("build_produce_board2").style.display = "none";
		
		var cp_ms = Math.floor(Number(localStorage.getItem("cannon_produce_time")) - Date.now());
		var cp_s = Math.floor(cp_ms / 1000);
		var cp_m = Math.floor(cp_s / 60);
		cp_s = cp_s % 60;
		var cp_h = Math.floor(cp_m / 60);
		cp_m = cp_m % 60;
		var cp_d = Math.floor(cp_h / 24);
		cp_h = cp_h % 24;
		
		cp_d = cp_d.toString().padStart(2, "0");
		cp_h = cp_h.toString().padStart(2, "0");
		cp_m = cp_m.toString().padStart(2, "0");
		cp_s = cp_s.toString().padStart(2, "0");
		
		document.getElementById("cannon_produce_d").innerText = cp_d;
		document.getElementById("cannon_produce_h").innerText = cp_h;
		document.getElementById("cannon_produce_m").innerText = cp_m;
		document.getElementById("cannon_produce_s").innerText = cp_s;
		
		if (Math.floor(Number(localStorage.getItem("cannon_produce_time")) - Date.now()) < 0) {
		
		localStorage.removeItem("cannon_producer");
		localStorage.removeItem("cannon_produce_time");
		
		document.getElementById("build_right1").style.display = "block";
		document.getElementById("build_right2").style.display = "block";
		document.getElementById("build_right3").style.display = "block";
		document.getElementById("build_producer1").style.display = "none";
		document.getElementById("build_producer2").style.display = "none";
		document.getElementById("build_producer3").style.display = "none";
		
		localStorage.setItem("cannon_have", Math.floor(Number(localStorage.getItem("cannon_have")) + Number(localStorage.getItem("cannon_trained"))));
		
		localStorage.removeItem("cannon_trained");
		
		location.reload();
		}
		
		
	}
	
	
}, 10);

function cannon_up() {
	
	if (Number(localStorage.getItem("cannon_level")) == 0 && Number(localStorage.getItem("gold")) >= 80) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 20);
		var ms_time = now.getTime();
		localStorage.setItem("cannon_up_time", ms_time);
		
		localStorage.setItem("cannon_up_price", 80);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 80));
		
		localStorage.setItem("cannon_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cannon_level")) == 1 && Number(localStorage.getItem("gold")) >= 120) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 40);
		var ms_time = now.getTime();
		localStorage.setItem("cannon_up_time", ms_time);
		
		localStorage.setItem("cannon_up_price", 120);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 120));
		
		localStorage.setItem("cannon_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cannon_level")) == 2 && Number(localStorage.getItem("gold")) >= 240) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 80);
		var ms_time = now.getTime();
		localStorage.setItem("cannon_up_time", ms_time);
		
		localStorage.setItem("cannon_up_price", 240);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 240));
		
		localStorage.setItem("cannon_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cannon_level")) == 3 && Number(localStorage.getItem("gold")) >= 500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 160);
		var ms_time = now.getTime();
		localStorage.setItem("cannon_up_time", ms_time);
		
		localStorage.setItem("cannon_up_price", 500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 500));
		
		localStorage.setItem("cannon_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cannon_level")) == 4 && Number(localStorage.getItem("gold")) >= 800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 320);
		var ms_time = now.getTime();
		localStorage.setItem("cannon_up_time", ms_time);
		
		localStorage.setItem("cannon_up_price", 800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 800));
		
		localStorage.setItem("cannon_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cannon_level")) == 5 && Number(localStorage.getItem("gold")) >= 1400) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1220);
		var ms_time = now.getTime();
		localStorage.setItem("cannon_up_time", ms_time);
		
		localStorage.setItem("cannon_up_price", 1400);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 1400));
		
		localStorage.setItem("cannon_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cannon_level")) == 6 && Number(localStorage.getItem("gold")) >= 2000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1840);
		var ms_time = now.getTime();
		localStorage.setItem("cannon_up_time", ms_time);
		
		localStorage.setItem("cannon_up_price", 2000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 2000));
		
		localStorage.setItem("cannon_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cannon_level")) == 7 && Number(localStorage.getItem("gold")) >= 2900) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 2720);
		var ms_time = now.getTime();
		localStorage.setItem("cannon_up_time", ms_time);
		
		localStorage.setItem("cannon_up_price", 2900);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 2900));
		
		localStorage.setItem("cannon_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cannon_level")) == 8 && Number(localStorage.getItem("gold")) >= 3900) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 4540);
		var ms_time = now.getTime();
		localStorage.setItem("cannon_up_time", ms_time);
		
		localStorage.setItem("cannon_up_price", 3900);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 3900));
		
		localStorage.setItem("cannon_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cannon_level")) == 9 && Number(localStorage.getItem("gold")) >= 5000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 6620);
		var ms_time = now.getTime();
		localStorage.setItem("cannon_up_time", ms_time);
		
		localStorage.setItem("cannon_up_price", 5000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 5000));
		
		localStorage.setItem("cannon_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cannon_level")) == 10 && Number(localStorage.getItem("gold")) >= 8000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 14740);
		var ms_time = now.getTime();
		localStorage.setItem("cannon_up_time", ms_time);
		
		localStorage.setItem("cannon_up_price", 8000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 8000));
		
		localStorage.setItem("cannon_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cannon_level")) == 11 && Number(localStorage.getItem("gold")) >= 12000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 19220);
		var ms_time = now.getTime();
		localStorage.setItem("cannon_up_time", ms_time);
		
		localStorage.setItem("cannon_up_price", 12000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 12000));
		
		localStorage.setItem("cannon_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cannon_level")) == 12 && Number(localStorage.getItem("gold")) >= 18000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 24340);
		var ms_time = now.getTime();
		localStorage.setItem("cannon_up_time", ms_time);
		
		localStorage.setItem("cannon_up_price", 18000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 18000));
		
		localStorage.setItem("cannon_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cannon_level")) == 13 && Number(localStorage.getItem("gold")) >= 24000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 29720);
		var ms_time = now.getTime();
		localStorage.setItem("cannon_up_time", ms_time);
		
		localStorage.setItem("cannon_up_price", 24000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 24000));
		
		localStorage.setItem("cannon_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cannon_level")) == 14 && Number(localStorage.getItem("gold")) >= 30000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 35740);
		var ms_time = now.getTime();
		localStorage.setItem("cannon_up_time", ms_time);
		
		localStorage.setItem("cannon_up_price", 30000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 30000));
		
		localStorage.setItem("cannon_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cannon_level")) == 15 && Number(localStorage.getItem("gold")) >= 38000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 64820);
		var ms_time = now.getTime();
		localStorage.setItem("cannon_up_time", ms_time);
		
		localStorage.setItem("cannon_up_price", 38000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 38000));
		
		localStorage.setItem("cannon_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cannon_level")) == 16 && Number(localStorage.getItem("gold")) >= 46000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 73240);
		var ms_time = now.getTime();
		localStorage.setItem("cannon_up_time", ms_time);
		
		localStorage.setItem("cannon_up_price", 46000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 46000));
		
		localStorage.setItem("cannon_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cannon_level")) == 17 && Number(localStorage.getItem("gold")) >= 56000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 82510);
		var ms_time = now.getTime();
		localStorage.setItem("cannon_up_time", ms_time);
		
		localStorage.setItem("cannon_up_price", 56000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 56000));
		
		localStorage.setItem("cannon_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cannon_level")) == 18 && Number(localStorage.getItem("gold")) >= 66000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 91840);
		var ms_time = now.getTime();
		localStorage.setItem("cannon_up_time", ms_time);
		
		localStorage.setItem("cannon_up_price", 66000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 66000));
		
		localStorage.setItem("cannon_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cannon_level")) == 19 && Number(localStorage.getItem("gold")) >= 78000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 103520);
		var ms_time = now.getTime();
		localStorage.setItem("cannon_up_time", ms_time);
		
		localStorage.setItem("cannon_up_price", 78000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 78000));
		
		localStorage.setItem("cannon_upper", "on");
		
		location.reload();
		
	}
	
}

function cannon_up_cancel() {
	
	localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) - Number(localStorage.getItem("cannon_up_price"))));
	
	localStorage.removeItem("ballista_upper");
	localStorage.removeItem("ballista_up_time");
	localStorage.removeItem("ballista_producer");
	localStorage.removeItem("ballista_produce_time");
	localStorage.removeItem("onager_upper");
	localStorage.removeItem("onager_up_time");
	localStorage.removeItem("onager_producer");
	localStorage.removeItem("onager_produce_time");
	localStorage.removeItem("cannon_upper");
	localStorage.removeItem("cannon_up_time");
	localStorage.removeItem("cannon_producer");
	localStorage.removeItem("cannon_produce_time");
	
	location.reload();
	
}

setInterval(function(){
	
	if (localStorage.getItem("cannon_upper") == "on") {
		
		document.getElementById("build_right1").style.display = "none";
		document.getElementById("build_right2").style.display = "none";
		document.getElementById("build_right3").style.display = "none";
		document.getElementById("build_upper1").style.display = "block";
		document.getElementById("build_upper2").style.display = "block";
		document.getElementById("build_upper3").style.display = "block";
		
		document.getElementById("build_up_board1").style.display = "none";
		document.getElementById("build_up_board2").style.display = "none";
		
		var c_ms = Math.floor(Number(localStorage.getItem("cannon_up_time")) - Date.now());
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
		
		document.getElementById("cannon_up_d").innerText = c_d;
		document.getElementById("cannon_up_h").innerText = c_h;
		document.getElementById("cannon_up_m").innerText = c_m;
		document.getElementById("cannon_up_s").innerText = c_s;
		
		if (Math.floor(Number(localStorage.getItem("cannon_up_time")) - Date.now()) < 0) {
		
		localStorage.removeItem("cannon_upper");
		localStorage.removeItem("cannon_up_time");
		
		document.getElementById("build_right1").style.display = "block";
		document.getElementById("build_right2").style.display = "block";
		document.getElementById("build_right3").style.display = "block";
		document.getElementById("build_upper1").style.display = "none";
		document.getElementById("build_upper2").style.display = "none";
		document.getElementById("build_upper3").style.display = "none";
		
		localStorage.setItem("cannon_level", Math.floor(Number(localStorage.getItem("cannon_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 40));
		
		location.reload();
		}
		
		
	}
	
	
}, 10);

function cannon_up_speed_up() {
	if (Number(localStorage.getItem("diamond")) >= 50) {
		
		localStorage.setItem("diamond_cash", Math.floor(Number(localStorage.getItem("diamond_cash")) + 50));
		
		localStorage.setItem("cannon_level", Math.floor(Number(localStorage.getItem("cannon_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 40));
		
		localStorage.removeItem("cannon_upper");
		localStorage.removeItem("cannon_up_time");
		
		location.reload();
		
	}
}

setInterval(function(){
	
	document.getElementById("cannon_level").innerText = localStorage.getItem("cannon_level");
	if (Number(localStorage.getItem("cannon_level")) != 20) {
	document.getElementById("cannon_next_level").innerText = Math.floor(Number(localStorage.getItem("cannon_level")) + 1);
	} else if (Number(localStorage.getItem("cannon_level")) == 20) {
		document.getElementById("cannon_next_level").innerText = "Max";
	}
	var result1 = Math.floor(Number(localStorage.getItem("gold")) / 750);
	var result2 = Math.floor(Number(localStorage.getItem("wood")) / 750);
	var result3 = Math.min(result1, result2);
	document.getElementById("max_cannon").innerText = Math.floor(result3);
	document.getElementById("cannon_trained_amount").innerText = Number(localStorage.getItem("cannon_trained"));
	document.getElementById("total_cannon").innerText = Number(localStorage.getItem("cannon_have"));
	
}, 10);

setInterval(function() {
	
	if (Number(localStorage.getItem("age")) < 3) {
		document.getElementById("build_right2").style.display = "none";
		document.getElementById("build_right3").style.display = "none";
	} else if (Number(localStorage.getItem("age")) < 5) {
		document.getElementById("build_right3").style.display = "none";
	}
	
}, 5);

/* Money */

function money(){
	
  var currentTime = new Date().getTime();
  
  var diamond = Math.floor((currentTime - localStorage.getItem("diamond_timer")) / 3600000);
  var timer_diamond = Math.floor(Number(diamond) * Number(localStorage.getItem("plus_diamond")));
  var diamond_reward = Math.floor(Number(timer_diamond) + 100000 - Number(localStorage.getItem("diamond_cash")) + Number(localStorage.getItem("last_diamond_cash")));
  localStorage.setItem("diamond", diamond_reward);
  
  var gold = Math.floor((currentTime - localStorage.getItem("gold_timer")) / 3600000);
  var timer_gold = Math.floor(Number(gold) * Number(localStorage.getItem("plus_gold")));
  var gold_reward = Math.floor(Number(timer_gold) + 10000 - Number(localStorage.getItem("gold_cash")) + Number(localStorage.getItem("last_gold_cash")));
  localStorage.setItem("gold", gold_reward);
  
  var food = Math.floor((currentTime - localStorage.getItem("food_timer")) / 3600000);
  var timer_food = Math.floor(Number(food) * Number(localStorage.getItem("plus_food")));
  var food_reward = Math.floor(Number(timer_food) + 10000 - Number(localStorage.getItem("food_cash")) + Number(localStorage.getItem("last_food_cash")));
  localStorage.setItem("food", food_reward);
  
  var wood = Math.floor((currentTime - localStorage.getItem("wood_timer")) / 3600000);
  var timer_wood = Math.floor(Number(wood) * Number(localStorage.getItem("plus_wood")));
  var wood_reward = Math.floor(Number(timer_wood) + 10000 - Number(localStorage.getItem("wood_cash")) + Number(localStorage.getItem("last_wood_cash")));
  localStorage.setItem("wood", wood_reward);
  
}

setInterval(money, 20);

/* defense bonus */

setInterval(function(){
	
	var results = (localStorage.getItem("castle_level") * 2) + (localStorage.getItem("wall_level") * 2) + ((Number(localStorage.getItem("watchtower_level")) * 0.1 + 1) * localStorage.getItem("watchtower_have"));
	results = Math.round(results * 100) / 100;
	localStorage.setItem("defense_bonus", results);
	
}, 10);

/* input only num */

function inputonlynumber(input) {
    let numbers = input.value;
      
    let onlynumber = /^[0-9]*$/;
  
    if (!onlynumber.test(numbers)) {
        input.value = numbers.replace(/[^0-9]/g, '');
    }
}