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
		localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) + Number(localStorage.getItem("ballista_trained"))));
        localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) + Number(localStorage.getItem("ballista_trained"))));
		
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
		localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) + Number(localStorage.getItem("onager_trained"))));
        localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) + Number(localStorage.getItem("onager_trained"))));
		
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
		localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) + Number(localStorage.getItem("cannon_trained"))));
        localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) + Number(localStorage.getItem("cannon_trained"))));
		
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
	if (Number(localStorage.getItem("cannon_level")) != 5) {
	document.getElementById("cannon_next_level").innerText = Math.floor(Number(localStorage.getItem("cannon_level")) + 1);
	} else if (Number(localStorage.getItem("cannon_level")) == 5) {
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

/* Castle */

setInterval(function(){
	if (localStorage.getItem("castle_upper") == "on" || localStorage.getItem("knight_upper") == "on" || localStorage.getItem("imperial_spearman_upper") == "on" || localStorage.getItem("imperial_spearman_producer") == "on" || localStorage.getItem("knight_producer") == "on") {
		
		if (localStorage.getItem("castle_upper") == "on") {
			
		 if (localStorage.getItem("castle_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("castle_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("castle_upper");
		    localStorage.removeItem("castle_up_time");
		
		    localStorage.setItem("castle_level", Math.floor(Number(localStorage.getItem("castle_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 50));
		
			}
		 }
		
		} else if (localStorage.getItem("knight_upper") == "on") {
			
		 if (localStorage.getItem("knight_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("knight_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("knight_upper");
		    localStorage.removeItem("knight_up_time");
		
		    localStorage.setItem("knight_level", Math.floor(Number(localStorage.getItem("knight_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 6));
		
			}
		 }
		
		} else if (localStorage.getItem("imperial_spearman_upper") == "on") {
			
		 if (localStorage.getItem("imperial_spearman_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("imperial_spearman_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("imperial_spearman_upper");
		    localStorage.removeItem("imperial_spearman_up_time");
		
		    localStorage.setItem("imperial_spearman_level", Math.floor(Number(localStorage.getItem("imperial_spearman_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 6));
		
			}
		 }
		
		} else if (localStorage.getItem("imperial_spearman_producer") == "on") {
			
		 if (localStorage.getItem("imperial_spearman_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("imperial_spearman_produce_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("imperial_spearman_producer");
		    localStorage.removeItem("imperial_spearman_produce_time");
		
		    localStorage.setItem("imperial_spearman_have", Math.floor(Number(localStorage.getItem("imperial_spearman_have")) + Number(localStorage.getItem("imperial_spearman_trained"))));
			localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) + Number(localStorage.getItem("imperial_spearman_trained"))));
			localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) + Number(localStorage.getItem("imperial_spearman_trained"))));
			
			localStorage.removeItem("imperial_spearman_trained");
	
			}
		 }
		
		} else if (localStorage.getItem("knight_producer") == "on") {
		
		 if (localStorage.getItem("knight_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("knight_produce_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("knight_producer");
		    localStorage.removeItem("knight_produce_time");
		
		    localStorage.setItem("knight_have", Math.floor(Number(localStorage.getItem("knight_have")) + Number(localStorage.getItem("knight_trained"))));
			localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) + Number(localStorage.getItem("knight_trained"))));
			localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) + Number(localStorage.getItem("knight_trained"))));
			
			localStorage.removeItem("knight_trained");
		
			}
		 }
		
		}
		
	}
}, 10);

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
	
}, 10);

/* input only num */

function inputonlynumber(input) {
    let numbers = input.value;
      
    let onlynumber = /^[0-9]*$/;
  
    if (!onlynumber.test(numbers)) {
        input.value = numbers.replace(/[^0-9]/g, '');
    }
}