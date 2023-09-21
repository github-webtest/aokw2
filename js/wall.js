function page_save() {
	if (localStorage.getItem("local_lan") == "en") {
		document.getElementById("lan_head_text").innerText = "Wall";
		document.getElementById("build_top_text").innerText = "Fortify the wall to protect the kingdom center!";
		document.getElementById("building_capacity_text").innerText = "Building capacity: ";
		document.getElementById("defense_bonus_text").innerText = "Defense Bonus: ";
		document.getElementById("wallx_text").innerText = "Wall";
		document.getElementById("watchtowerx_text").innerText = "Watchtower x";
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

function build1_info() {
	document.getElementById("troops_info").style.animation = "troop_info1 0.4s";
	document.getElementById("troops_info_bg").style.display = "flex";
	document.getElementById("troops_info").style.display = "block";
	
	document.getElementById("troops_text").innerText = "Wall";

    $(document).ready(function(){
		
		var jsonData_wall = JSON.stringify(wall);
		var data_wall = JSON.parse(jsonData_wall);
		
		/* info */
		
		if (data_wall[Number(localStorage.getItem("wall_level"))].Age == 1) {
			document.getElementById("age_t").innerText = "Dark (1)";
		} else if (data_wall[Number(localStorage.getItem("wall_level"))].Age == 2) {
			document.getElementById("age_t").innerText = "Feudal (2)";
		} else if (data_wall[Number(localStorage.getItem("wall_level"))].Age == 3) {
			document.getElementById("age_t").innerText = "Castle (3)";
		} else if (data_wall[Number(localStorage.getItem("wall_level"))].Age == 4) {
			document.getElementById("age_t").innerText = "Imperial (4)";
		} else if (data_wall[Number(localStorage.getItem("wall_level"))].Age == 5) {
			document.getElementById("age_t").innerText = "New (5)";
		}
		document.getElementById("type_t").innerText = data_wall[Number(localStorage.getItem("wall_level"))].Type;
		document.getElementById("class_t").innerText = data_wall[Number(localStorage.getItem("wall_level"))].Class;
		
		/* produce */
		
		document.getElementById("p_food").innerText = data_wall[Number(localStorage.getItem("wall_level"))].Pfood;
		document.getElementById("p_wood").innerText = data_wall[Number(localStorage.getItem("wall_level"))].Pwood;
		document.getElementById("p_gold").innerText = data_wall[Number(localStorage.getItem("wall_level"))].Pgold;
		document.getElementById("p_diamond").innerText = data_wall[Number(localStorage.getItem("wall_level"))].Pdiamond;
		document.getElementById("p_time").innerText = data_wall[Number(localStorage.getItem("wall_level"))].Ptime;
		
		if (data_wall[Number(localStorage.getItem("wall_level"))].Pfood == null) {
			document.getElementById("produce_d1").style.display = "none";
			document.getElementById("produce_d2").style.display = "none";
		}
		
		/* upgrade */
		
		document.getElementById("u_gold").innerText = data_wall[Number(localStorage.getItem("wall_level"))].Ugold;
		document.getElementById("u_xp").innerText = data_wall[Number(localStorage.getItem("wall_level"))].Uxp;
		document.getElementById("u_time").innerText = data_wall[Number(localStorage.getItem("wall_level"))].Utime;
		
		/* abilities */
		
		document.getElementById("abilities_text").innerText = data_wall[Number(localStorage.getItem("wall_level"))].Atitle;
		document.getElementById("a1_title").innerText = data_wall[Number(localStorage.getItem("wall_level"))].A1text;
		document.getElementById("a1_text").innerText = data_wall[Number(localStorage.getItem("wall_level"))].A1;
		document.getElementById("a2_title").innerText = data_wall[Number(localStorage.getItem("wall_level"))].A2text;
		document.getElementById("a2_text").innerText = data_wall[Number(localStorage.getItem("wall_level"))].A2;
		document.getElementById("a3_title").innerText = data_wall[Number(localStorage.getItem("wall_level"))].A3text;
		document.getElementById("a3_text").innerText = data_wall[Number(localStorage.getItem("wall_level"))].A3;
		
		if (data_wall[Number(localStorage.getItem("wall_level"))].A2text == null) {
			document.getElementById("abilities_2").style.display = "none";
			document.getElementById("abilities_3").style.display = "none";
		} else if (data_wall[Number(localStorage.getItem("wall_level"))].A2text != null && data_wall[Number(localStorage.getItem("wall_level"))].A3text == null) {
			document.getElementById("abilities_3").style.display = "none";
		}
		
    });
}

function build2_info() {
	document.getElementById("troops_info").style.animation = "troop_info1 0.4s";
	document.getElementById("troops_info_bg").style.display = "flex";
	document.getElementById("troops_info").style.display = "block";
	
	document.getElementById("troops_text").innerText = "Watchtower";

    $(document).ready(function(){
		
		var jsonData_watchtower = JSON.stringify(watchtower);
		var data_watchtower = JSON.parse(jsonData_watchtower);
		
		/* info */
		
		if (data_watchtower[Number(localStorage.getItem("watchtower_level"))].Age == 1) {
			document.getElementById("age_t").innerText = "Dark (1)";
		} else if (data_watchtower[Number(localStorage.getItem("watchtower_level"))].Age == 2) {
			document.getElementById("age_t").innerText = "Feudal (2)";
		} else if (data_watchtower[Number(localStorage.getItem("watchtower_level"))].Age == 3) {
			document.getElementById("age_t").innerText = "Castle (3)";
		} else if (data_watchtower[Number(localStorage.getItem("watchtower_level"))].Age == 4) {
			document.getElementById("age_t").innerText = "Imperial (4)";
		} else if (data_watchtower[Number(localStorage.getItem("watchtower_level"))].Age == 5) {
			document.getElementById("age_t").innerText = "New (5)";
		}
		document.getElementById("type_t").innerText = data_watchtower[Number(localStorage.getItem("watchtower_level"))].Type;
		document.getElementById("class_t").innerText = data_watchtower[Number(localStorage.getItem("watchtower_level"))].Class;
		
		/* produce */
		
		document.getElementById("p_food").innerText = data_watchtower[Number(localStorage.getItem("watchtower_level"))].Pfood;
		document.getElementById("p_wood").innerText = data_watchtower[Number(localStorage.getItem("watchtower_level"))].Pwood;
		document.getElementById("p_gold").innerText = data_watchtower[Number(localStorage.getItem("watchtower_level"))].Pgold;
		document.getElementById("p_diamond").innerText = data_watchtower[Number(localStorage.getItem("watchtower_level"))].Pdiamond;
		document.getElementById("p_time").innerText = data_watchtower[Number(localStorage.getItem("watchtower_level"))].Ptime;
		
		if (data_watchtower[Number(localStorage.getItem("watchtower_level"))].Pfood == null) {
			document.getElementById("produce_d1").style.display = "none";
			document.getElementById("produce_d2").style.display = "none";
		}
		
		/* upgrade */
		
		document.getElementById("u_gold").innerText = data_watchtower[Number(localStorage.getItem("watchtower_level"))].Ugold;
		document.getElementById("u_xp").innerText = data_watchtower[Number(localStorage.getItem("watchtower_level"))].Uxp;
		document.getElementById("u_time").innerText = data_watchtower[Number(localStorage.getItem("watchtower_level"))].Utime;
		
		/* abilities */
		
		document.getElementById("abilities_text").innerText = data_watchtower[Number(localStorage.getItem("watchtower_level"))].Atitle;
		document.getElementById("a1_title").innerText = data_watchtower[Number(localStorage.getItem("watchtower_level"))].A1text;
		document.getElementById("a1_text").innerText = data_watchtower[Number(localStorage.getItem("watchtower_level"))].A1;
		document.getElementById("a2_title").innerText = data_watchtower[Number(localStorage.getItem("watchtower_level"))].A2text;
		document.getElementById("a2_text").innerText = data_watchtower[Number(localStorage.getItem("watchtower_level"))].A2;
		document.getElementById("a3_title").innerText = data_watchtower[Number(localStorage.getItem("watchtower_level"))].A3text;
		document.getElementById("a3_text").innerText = data_watchtower[Number(localStorage.getItem("watchtower_level"))].A3;
		
		if (data_watchtower[Number(localStorage.getItem("watchtower_level"))].A2text == null) {
			document.getElementById("abilities_2").style.display = "none";
			document.getElementById("abilities_3").style.display = "none";
		} else if (data_watchtower[Number(localStorage.getItem("watchtower_level"))].A2text != null && data_watchtower[Number(localStorage.getItem("watchtower_level"))].A3text == null) {
			document.getElementById("abilities_3").style.display = "none";
		}
		
    });
}

/* wall up */

function wall_up() {
	
	if (Number(localStorage.getItem("wall_level")) == 0 && Number(localStorage.getItem("gold")) >= 160) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 20);
		var ms_time = now.getTime();
		localStorage.setItem("wall_up_time", ms_time);
		
		localStorage.setItem("wall_up_price", 160);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 160));
		
		localStorage.setItem("wall_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("wall_level")) == 1 && Number(localStorage.getItem("gold")) >= 240) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 40);
		var ms_time = now.getTime();
		localStorage.setItem("wall_up_time", ms_time);
		
		localStorage.setItem("wall_up_price", 240);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 240));
		
		localStorage.setItem("wall_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("wall_level")) == 2 && Number(localStorage.getItem("gold")) >= 480) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 80);
		var ms_time = now.getTime();
		localStorage.setItem("wall_up_time", ms_time);
		
		localStorage.setItem("wall_up_price", 480);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 480));
		
		localStorage.setItem("wall_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("wall_level")) == 3 && Number(localStorage.getItem("gold")) >= 1000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 160);
		var ms_time = now.getTime();
		localStorage.setItem("wall_up_time", ms_time);
		
		localStorage.setItem("wall_up_price", 1000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 1000));
		
		localStorage.setItem("wall_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("wall_level")) == 4 && Number(localStorage.getItem("gold")) >= 1600) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 320);
		var ms_time = now.getTime();
		localStorage.setItem("wall_up_time", ms_time);
		
		localStorage.setItem("wall_up_price", 1600);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 1600));
		
		localStorage.setItem("wall_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("wall_level")) == 5 && Number(localStorage.getItem("gold")) >= 2800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1220);
		var ms_time = now.getTime();
		localStorage.setItem("wall_up_time", ms_time);
		
		localStorage.setItem("wall_up_price", 2800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 2800));
		
		localStorage.setItem("wall_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("wall_level")) == 6 && Number(localStorage.getItem("gold")) >= 4000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1840);
		var ms_time = now.getTime();
		localStorage.setItem("wall_up_time", ms_time);
		
		localStorage.setItem("wall_up_price", 4000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 4000));
		
		localStorage.setItem("wall_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("wall_level")) == 7 && Number(localStorage.getItem("gold")) >= 5800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 2720);
		var ms_time = now.getTime();
		localStorage.setItem("wall_up_time", ms_time);
		
		localStorage.setItem("wall_up_price", 5800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 5800));
		
		localStorage.setItem("wall_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("wall_level")) == 8 && Number(localStorage.getItem("gold")) >= 7200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 4540);
		var ms_time = now.getTime();
		localStorage.setItem("wall_up_time", ms_time);
		
		localStorage.setItem("wall_up_price", 7200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 7200));
		
		localStorage.setItem("wall_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("wall_level")) == 9 && Number(localStorage.getItem("gold")) >= 8800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 6620);
		var ms_time = now.getTime();
		localStorage.setItem("wall_up_time", ms_time);
		
		localStorage.setItem("wall_up_price", 8800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 8800));
		
		localStorage.setItem("wall_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("wall_level")) == 10 && Number(localStorage.getItem("gold")) >= 12000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 14740);
		var ms_time = now.getTime();
		localStorage.setItem("wall_up_time", ms_time);
		
		localStorage.setItem("wall_up_price", 12000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 12000));
		
		localStorage.setItem("wall_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("wall_level")) == 11 && Number(localStorage.getItem("gold")) >= 14400) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 19220);
		var ms_time = now.getTime();
		localStorage.setItem("wall_up_time", ms_time);
		
		localStorage.setItem("wall_up_price", 14400);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 14400));
		
		localStorage.setItem("wall_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("wall_level")) == 12 && Number(localStorage.getItem("gold")) >= 16800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 24340);
		var ms_time = now.getTime();
		localStorage.setItem("wall_up_time", ms_time);
		
		localStorage.setItem("wall_up_price", 16800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 16800));
		
		localStorage.setItem("wall_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("wall_level")) == 13 && Number(localStorage.getItem("gold")) >= 19600) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 29720);
		var ms_time = now.getTime();
		localStorage.setItem("wall_up_time", ms_time);
		
		localStorage.setItem("wall_up_price", 19600);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 19600));
		
		localStorage.setItem("wall_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("wall_level")) == 14 && Number(localStorage.getItem("gold")) >= 22800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 35740);
		var ms_time = now.getTime();
		localStorage.setItem("wall_up_time", ms_time);
		
		localStorage.setItem("wall_up_price", 22800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 22800));
		
		localStorage.setItem("wall_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("wall_level")) == 15 && Number(localStorage.getItem("gold")) >= 25500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 64820);
		var ms_time = now.getTime();
		localStorage.setItem("wall_up_time", ms_time);
		
		localStorage.setItem("wall_up_price", 25500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 25500));
		
		localStorage.setItem("wall_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("wall_level")) == 16 && Number(localStorage.getItem("gold")) >= 28800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 73240);
		var ms_time = now.getTime();
		localStorage.setItem("wall_up_time", ms_time);
		
		localStorage.setItem("wall_up_price", 28800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 28800));
		
		localStorage.setItem("wall_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("wall_level")) == 17 && Number(localStorage.getItem("gold")) >= 34500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 82510);
		var ms_time = now.getTime();
		localStorage.setItem("wall_up_time", ms_time);
		
		localStorage.setItem("wall_up_price", 34500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 34500));
		
		localStorage.setItem("wall_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("wall_level")) == 18 && Number(localStorage.getItem("gold")) >= 45300) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 91840);
		var ms_time = now.getTime();
		localStorage.setItem("wall_up_time", ms_time);
		
		localStorage.setItem("wall_up_price", 45300);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 45300));
		
		localStorage.setItem("wall_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("wall_level")) == 19 && Number(localStorage.getItem("gold")) >= 60150) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 103520);
		var ms_time = now.getTime();
		localStorage.setItem("wall_up_time", ms_time);
		
		localStorage.setItem("wall_up_price", 60150);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 60150));
		
		localStorage.setItem("wall_upper", "on");
		
		location.reload();
		
	}
	
}

function wall_up_cancel() {
	
	localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) - Number(localStorage.getItem("wall_up_price"))));
	
	localStorage.removeItem("wall_upper");
	localStorage.removeItem("wall_up_time");
	localStorage.removeItem("watchtower_upper");
	localStorage.removeItem("watchtower_up_time");
	localStorage.removeItem("watchtower_producer");
	localStorage.removeItem("watchtower_produce_time");
	
	location.reload();
	
}

setInterval(function(){
	
	if (localStorage.getItem("wall_upper") == "on") {
		
		document.getElementById("build_right1").style.display = "none";
		document.getElementById("build_right2").style.display = "none";
		document.getElementById("build_upper1").style.display = "block";
		document.getElementById("build_upper2").style.display = "block";
		
		document.getElementById("build_up_board2").style.display = "none";
		
		var w_ms = Math.floor(Number(localStorage.getItem("wall_up_time")) - Date.now());
		var w_s = Math.floor(w_ms / 1000);
		var w_m = Math.floor(w_s / 60);
		w_s = w_s % 60;
		var w_h = Math.floor(w_m / 60);
		w_m = w_m % 60;
		var w_d = Math.floor(w_h / 24);
		w_h = w_h % 24;
		
		w_d = w_d.toString().padStart(2, "0");
		w_h = w_h.toString().padStart(2, "0");
		w_m = w_m.toString().padStart(2, "0");
		w_s = w_s.toString().padStart(2, "0");
		
		document.getElementById("wall_up_d").innerText = w_d;
		document.getElementById("wall_up_h").innerText = w_h;
		document.getElementById("wall_up_m").innerText = w_m;
		document.getElementById("wall_up_s").innerText = w_s;
		
		if (Math.floor(Number(localStorage.getItem("wall_up_time")) - Date.now()) < 0) {
		
		localStorage.removeItem("wall_upper");
		localStorage.removeItem("wall_up_time");
		
		document.getElementById("build_right1").style.display = "block";
		document.getElementById("build_right2").style.display = "block";
		document.getElementById("build_upper1").style.display = "none";
		document.getElementById("build_upper2").style.display = "none";
		
		localStorage.setItem("wall_level", Math.floor(Number(localStorage.getItem("wall_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 50));
		
		location.reload();
		}
		
		
	}
	
	
}, 10);

setInterval(function(){
	
	document.getElementById("wall_level").innerText = localStorage.getItem("wall_level");
	if (Number(localStorage.getItem("wall_level")) != 20) {
	document.getElementById("wall_next_level").innerText = Math.floor(Number(localStorage.getItem("wall_level")) + 1);
	} else if (Number(localStorage.getItem("wall_level")) == 20) {
		document.getElementById("wall_next_level").innerText = "Max";
	}
	
}, 10);

function wall_up_speed_up() {
	if (Number(localStorage.getItem("diamond")) >= 50) {
		
		localStorage.setItem("diamond_cash", Math.floor(Number(localStorage.getItem("diamond_cash")) + 50));
		
		localStorage.setItem("wall_level", Math.floor(Number(localStorage.getItem("wall_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 50));
		
		localStorage.removeItem("wall_upper");
		localStorage.removeItem("wall_up_time");
		
		location.reload();
		
	}
}

/* watchtower up and produce */

function watchtower_produce() {
	
	var c_value = document.getElementById("watchtower_input").value;
	var cost_value_food = Math.floor(Number(c_value) * 1500);
	var cost_value_wood = Math.floor(Number(c_value) * 2500);
	var cost_value_gold = Math.floor(Number(c_value) * 1000);
	
	if (c_value != null && c_value > 0 && Number(localStorage.getItem("watchtower_have")) < 50 && c_value <= Math.floor(50 - Number(localStorage.getItem("watchtower_have")))) {
	
	if (Number(cost_value_gold) <= Number(localStorage.getItem("gold")) && Number(cost_value_food) <= Number(localStorage.getItem("food")) && Number(cost_value_wood) <= Number(localStorage.getItem("wood"))) {
			
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + Math.floor(300 * Number(document.getElementById("watchtower_input").value)));
		var ms_time = now.getTime();
		localStorage.setItem("watchtower_produce_time", ms_time);
		
		localStorage.setItem("watchtower_produce_price_f", Math.floor(1500 * Number(document.getElementById("watchtower_input").value)));
		localStorage.setItem("watchtower_produce_price_w", Math.floor(2500 * Number(document.getElementById("watchtower_input").value)));
		localStorage.setItem("watchtower_produce_price_g", Math.floor(1000 * Number(document.getElementById("watchtower_input").value)));
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + Math.floor(1000 * Number(document.getElementById("watchtower_input").value))));
			
		localStorage.setItem("food_cash", Math.floor(Number(localStorage.getItem("food_cash")) + Math.floor(1500 * Number(document.getElementById("watchtower_input").value))));
		
		localStorage.setItem("wood_cash", Math.floor(Number(localStorage.getItem("wood_cash")) + Math.floor(2500 * Number(document.getElementById("watchtower_input").value))));
		
		localStorage.setItem("watchtower_producer", "on");
		
		localStorage.setItem("watchtower_trained", Number(document.getElementById("watchtower_input").value))
		
		location.reload();
			
	}
	
	}
	
}

function watchtower_produce_cancel() {
	
	localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) - Number(localStorage.getItem("watchtower_produce_price_g"))));
	localStorage.setItem("food_cash", Math.floor(Number(localStorage.getItem("food_cash")) - Number(localStorage.getItem("watchtower_produce_price_f"))));
	localStorage.setItem("wood_cash", Math.floor(Number(localStorage.getItem("wood_cash")) - Number(localStorage.getItem("watchtower_produce_price_w"))));
	
	localStorage.removeItem("wall_upper");
	localStorage.removeItem("wall_up_time");
	localStorage.removeItem("watchtower_upper");
	localStorage.removeItem("watchtower_up_time");
	localStorage.removeItem("watchtower_producer");
	localStorage.removeItem("watchtower_produce_time");
	
	location.reload();
	
}

setInterval(function(){
	
	if (localStorage.getItem("watchtower_producer") == "on") {
		
		document.getElementById("build_right1").style.display = "none";
		document.getElementById("build_right2").style.display = "none";
		document.getElementById("build_upper1").style.display = "block";
		document.getElementById("build_producer2").style.display = "block";
		
		document.getElementById("build_up_board1").style.display = "none";
		
		var wtp_ms = Math.floor(Number(localStorage.getItem("watchtower_produce_time")) - Date.now());
		var wtp_s = Math.floor(wtp_ms / 1000);
		var wtp_m = Math.floor(wtp_s / 60);
		wtp_s = wtp_s % 60;
		var wtp_h = Math.floor(wtp_m / 60);
		wtp_m = wtp_m % 60;
		var wtp_d = Math.floor(wtp_h / 24);
		wtp_h = wtp_h % 24;
		
		wtp_d = wtp_d.toString().padStart(2, "0");
		wtp_h = wtp_h.toString().padStart(2, "0");
		wtp_m = wtp_m.toString().padStart(2, "0");
		wtp_s = wtp_s.toString().padStart(2, "0");
		
		document.getElementById("watchtower_produce_d").innerText = wtp_d;
		document.getElementById("watchtower_produce_h").innerText = wtp_h;
		document.getElementById("watchtower_produce_m").innerText = wtp_m;
		document.getElementById("watchtower_produce_s").innerText = wtp_s;
		
		if (Math.floor(Number(localStorage.getItem("watchtower_produce_time")) - Date.now()) < 0) {
		
		localStorage.removeItem("watchtower_producer");
		localStorage.removeItem("watchtower_produce_time");
		
		document.getElementById("build_right1").style.display = "block";
		document.getElementById("build_right2").style.display = "block";
		document.getElementById("build_upper1").style.display = "none";
		document.getElementById("build_producer1").style.display = "none";
		
		localStorage.setItem("watchtower_have", Math.floor(Number(localStorage.getItem("watchtower_have")) + Number(localStorage.getItem("watchtower_trained"))));
		
		localStorage.removeItem("watchtower_trained");
		
		location.reload();
		}
		
		
	}
	
	
}, 10);

function watchtower_produce_speed_up() {
	
	if (Number(localStorage.getItem("diamond")) >= Number(localStorage.getItem("watchtower_trained"))) {
		
	localStorage.setItem("diamond_cash", Math.floor(Number(localStorage.getItem("diamond_cash")) + Number(localStorage.getItem("watchtower_trained"))));
		
	localStorage.setItem("watchtower_have", Math.floor(Number(localStorage.getItem("watchtower_have")) + Number(localStorage.getItem("watchtower_trained"))));
		
	localStorage.removeItem("watchtower_trained");
	localStorage.removeItem("watchtower_producer");
	localStorage.removeItem("watchtower_produce_time");
	
	location.reload();
	
	}
	
}

setInterval(function() {
	var result1 = Math.floor(Number(localStorage.getItem("gold")) / 1000);
	var result2 = Math.floor(Number(localStorage.getItem("food")) / 1500);
	var result3 = Math.floor(Number(localStorage.getItem("wood")) / 2500);
	var result4 = Math.min(result1, result2, result3);
	if (result4 <= 50 && result4 <= Math.floor(50 - Number(localStorage.getItem("watchtower_have")))) {
	document.getElementById("max_watchtower").innerText = Math.floor(result4);
	} else if (Number(localStorage.getItem("watchtower_have")) >= 50) {
		document.getElementById("max_watchtower").innerText = "0";
	} else if (result4 > Math.floor(50 - Number(localStorage.getItem("watchtower_have")))) {
		document.getElementById("max_watchtower").innerText = Math.floor(50 - Number(localStorage.getItem("watchtower_have")));
	}
}, 10);

setInterval(function(){
	
	document.getElementById("watchtower_level").innerText = Number(localStorage.getItem("watchtower_level"));
	if (Number(localStorage.getItem("watchtower_level")) != 20) {
	document.getElementById("watchtower_next_level").innerText = Math.floor(Number(localStorage.getItem("watchtower_level")) + 1);
	} else if (Number(localStorage.getItem("watchtower_level")) == 20) {
		document.getElementById("watchtower_next_level").innerText = "Max";
	}
	document.getElementById("total_watchtower").innerText = Number(localStorage.getItem("watchtower_have"));
	document.getElementById("watchtower_trained_amount").innerText = Number(localStorage.getItem("watchtower_trained"));
	document.getElementById("watchtower_produce_speed_up_cost").innerText = Number(localStorage.getItem("watchtower_trained"));
	
}, 10);

function watchtower_up() {
	
	if (Number(localStorage.getItem("watchtower_level")) == 0 && Number(localStorage.getItem("gold")) >= 80) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 20);
		var ms_time = now.getTime();
		localStorage.setItem("watchtower_up_time", ms_time);
		
		localStorage.setItem("watchtower_up_price", 80);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 80));
		
		localStorage.setItem("watchtower_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("watchtower_level")) == 1 && Number(localStorage.getItem("gold")) >= 120) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 40);
		var ms_time = now.getTime();
		localStorage.setItem("watchtower_up_time", ms_time);
		
		localStorage.setItem("watchtower_up_price", 120);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 120));
		
		localStorage.setItem("watchtower_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("watchtower_level")) == 2 && Number(localStorage.getItem("gold")) >= 240) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 80);
		var ms_time = now.getTime();
		localStorage.setItem("watchtower_up_time", ms_time);
		
		localStorage.setItem("watchtower_up_price", 240);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 240));
		
		localStorage.setItem("watchtower_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("watchtower_level")) == 3 && Number(localStorage.getItem("gold")) >= 500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 160);
		var ms_time = now.getTime();
		localStorage.setItem("watchtower_up_time", ms_time);
		
		localStorage.setItem("watchtower_up_price", 500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 500));
		
		localStorage.setItem("watchtower_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("watchtower_level")) == 4 && Number(localStorage.getItem("gold")) >= 800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 320);
		var ms_time = now.getTime();
		localStorage.setItem("watchtower_up_time", ms_time);
		
		localStorage.setItem("watchtower_up_price", 800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 800));
		
		localStorage.setItem("watchtower_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("watchtower_level")) == 5 && Number(localStorage.getItem("gold")) >= 1400) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1220);
		var ms_time = now.getTime();
		localStorage.setItem("watchtower_up_time", ms_time);
		
		localStorage.setItem("watchtower_up_price", 1400);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 1400));
		
		localStorage.setItem("watchtower_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("watchtower_level")) == 6 && Number(localStorage.getItem("gold")) >= 2000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1840);
		var ms_time = now.getTime();
		localStorage.setItem("watchtower_up_time", ms_time);
		
		localStorage.setItem("watchtower_up_price", 2000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 2000));
		
		localStorage.setItem("watchtower_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("watchtower_level")) == 7 && Number(localStorage.getItem("gold")) >= 2900) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 2720);
		var ms_time = now.getTime();
		localStorage.setItem("watchtower_up_time", ms_time);
		
		localStorage.setItem("watchtower_up_price", 2900);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 2900));
		
		localStorage.setItem("watchtower_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("watchtower_level")) == 8 && Number(localStorage.getItem("gold")) >= 3600) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 4540);
		var ms_time = now.getTime();
		localStorage.setItem("watchtower_up_time", ms_time);
		
		localStorage.setItem("watchtower_up_price", 3600);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 3600));
		
		localStorage.setItem("watchtower_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("watchtower_level")) == 9 && Number(localStorage.getItem("gold")) >= 4400) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 6620);
		var ms_time = now.getTime();
		localStorage.setItem("watchtower_up_time", ms_time);
		
		localStorage.setItem("watchtower_up_price", 4400);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 4400));
		
		localStorage.setItem("watchtower_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("watchtower_level")) == 10 && Number(localStorage.getItem("gold")) >= 6000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 14740);
		var ms_time = now.getTime();
		localStorage.setItem("watchtower_up_time", ms_time);
		
		localStorage.setItem("watchtower_up_price", 6000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 6000));
		
		localStorage.setItem("watchtower_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("watchtower_level")) == 11 && Number(localStorage.getItem("gold")) >= 7200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 19220);
		var ms_time = now.getTime();
		localStorage.setItem("watchtower_up_time", ms_time);
		
		localStorage.setItem("watchtower_up_price", 7200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 7200));
		
		localStorage.setItem("watchtower_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("watchtower_level")) == 12 && Number(localStorage.getItem("gold")) >= 8400) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 24340);
		var ms_time = now.getTime();
		localStorage.setItem("watchtower_up_time", ms_time);
		
		localStorage.setItem("watchtower_up_price", 8400);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 8400));
		
		localStorage.setItem("watchtower_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("watchtower_level")) == 13 && Number(localStorage.getItem("gold")) >= 12000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 29720);
		var ms_time = now.getTime();
		localStorage.setItem("watchtower_up_time", ms_time);
		
		localStorage.setItem("watchtower_up_price", 12000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 12000));
		
		localStorage.setItem("watchtower_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("watchtower_level")) == 14 && Number(localStorage.getItem("gold")) >= 15200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 35740);
		var ms_time = now.getTime();
		localStorage.setItem("watchtower_up_time", ms_time);
		
		localStorage.setItem("watchtower_up_price", 15200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 15200));
		
		localStorage.setItem("watchtower_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("watchtower_level")) == 15 && Number(localStorage.getItem("gold")) >= 17000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 64820);
		var ms_time = now.getTime();
		localStorage.setItem("watchtower_up_time", ms_time);
		
		localStorage.setItem("watchtower_up_price", 17000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 17000));
		
		localStorage.setItem("watchtower_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("watchtower_level")) == 16 && Number(localStorage.getItem("gold")) >= 19200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 73240);
		var ms_time = now.getTime();
		localStorage.setItem("watchtower_up_time", ms_time);
		
		localStorage.setItem("watchtower_up_price", 19200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 19200));
		
		localStorage.setItem("watchtower_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("watchtower_level")) == 17 && Number(localStorage.getItem("gold")) >= 23000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 82510);
		var ms_time = now.getTime();
		localStorage.setItem("watchtower_up_time", ms_time);
		
		localStorage.setItem("watchtower_up_price", 23000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 23000));
		
		localStorage.setItem("watchtower_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("watchtower_level")) == 18 && Number(localStorage.getItem("gold")) >= 30200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 91840);
		var ms_time = now.getTime();
		localStorage.setItem("watchtower_up_time", ms_time);
		
		localStorage.setItem("watchtower_up_price", 30200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 30200));
		
		localStorage.setItem("watchtower_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("watchtower_level")) == 19 && Number(localStorage.getItem("gold")) >= 40100) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 103520);
		var ms_time = now.getTime();
		localStorage.setItem("watchtower_up_time", ms_time);
		
		localStorage.setItem("watchtower_up_price", 40100);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 40100));
		
		localStorage.setItem("watchtower_upper", "on");
		
		location.reload();
		
	}
	
}

function watchtower_up_cancel() {
	
	localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) - Number(localStorage.getItem("watchtower_up_price"))));
	
	localStorage.removeItem("wall_upper");
	localStorage.removeItem("wall_up_time");
	localStorage.removeItem("watchtower_upper");
	localStorage.removeItem("watchtower_up_time");
	localStorage.removeItem("watchtower_producer");
	localStorage.removeItem("watchtower_produce_time");
	
	location.reload();
	
}

setInterval(function(){
	
	if (localStorage.getItem("watchtower_upper") == "on") {
		
		document.getElementById("build_right1").style.display = "none";
		document.getElementById("build_right2").style.display = "none";
		document.getElementById("build_upper1").style.display = "block";
		document.getElementById("build_upper2").style.display = "block";
		
		document.getElementById("build_up_board1").style.display = "none";
		
		var wt_ms = Math.floor(Number(localStorage.getItem("watchtower_up_time")) - Date.now());
		var wt_s = Math.floor(wt_ms / 1000);
		var wt_m = Math.floor(wt_s / 60);
		wt_s = wt_s % 60;
		var wt_h = Math.floor(wt_m / 60);
		wt_m = wt_m % 60;
		var wt_d = Math.floor(wt_h / 24);
		wt_h = wt_h % 24;
		
		wt_d = wt_d.toString().padStart(2, "0");
		wt_h = wt_h.toString().padStart(2, "0");
		wt_m = wt_m.toString().padStart(2, "0");
		wt_s = wt_s.toString().padStart(2, "0");
		
		document.getElementById("watchtower_up_d").innerText = wt_d;
		document.getElementById("watchtower_up_h").innerText = wt_h;
		document.getElementById("watchtower_up_m").innerText = wt_m;
		document.getElementById("watchtower_up_s").innerText = wt_s;
		
		if (Math.floor(Number(localStorage.getItem("watchtower_up_time")) - Date.now()) < 0) {
		
		localStorage.removeItem("watchtower_upper");
		localStorage.removeItem("watchtower_up_time");
		
		document.getElementById("build_right1").style.display = "block";
		document.getElementById("build_right2").style.display = "block";
		document.getElementById("build_upper1").style.display = "none";
		document.getElementById("build_upper2").style.display = "none";
		
		localStorage.setItem("watchtower_level", Math.floor(Number(localStorage.getItem("watchtower_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 40));
		
		location.reload();
		}
		
		
	}
	
	
}, 10);

function watchtower_up_speed_up() {
	if (Number(localStorage.getItem("diamond")) >= 50) {
		
		localStorage.setItem("diamond_cash", Math.floor(Number(localStorage.getItem("diamond_cash")) + 50));
		
		localStorage.setItem("watchtower_level", Math.floor(Number(localStorage.getItem("watchtower_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 40));
		
		localStorage.removeItem("watchtower_upper");
		localStorage.removeItem("watchtower_up_time");
		
		location.reload();
		
	}
}

/* defense bonus */

setInterval(function(){
	
	var results = (localStorage.getItem("castle_level") * 2) + (localStorage.getItem("wall_level") * 2) + ((Number(localStorage.getItem("watchtower_level")) * 0.1 + 1) * localStorage.getItem("watchtower_have"));
	results = Math.round(results * 100) / 100;
	localStorage.setItem("defense_bonus", results);
	document.getElementById("defense_bonus").innerText = Number(localStorage.getItem("defense_bonus"));
	
}, 10);

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
			
			var current = Date.now();
	        var elapsedTime = Math.floor((current - localStorage.getItem("food_timer")) / 3600000);
	        var food_t = Math.floor(Number(elapsedTime) * ((((Number(localStorage.getItem("plus_food")) * (Number(localStorage.getItem("farming_level")) + 100 + Number(localStorage.getItem("farmer_b_f")))) / 100) - Number(localStorage.getItem("minus_food")))));
	        var plusplus = Math.floor(Number(localStorage.getItem("last_food_cash")) + Number(food_t));
	        localStorage.setItem("last_food_cash", plusplus);
	        localStorage.setItem("food_timer", current);
		
		    localStorage.setItem("farming_level", Math.floor(Number(localStorage.getItem("farming_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
			}
		 }
		
		} else if (localStorage.getItem("lumbering_upper") == "on") {
        
		 if (localStorage.getItem("lumbering_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("lumbering_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("lumbering_upper");
		    localStorage.removeItem("lumbering_up_time");
			
			var current = Date.now();
	        var elapsedTime = Math.floor((current - localStorage.getItem("wood_timer")) / 3600000);
	        var wood_t = Math.floor(Number(elapsedTime) * (((Number(localStorage.getItem("plus_wood")) * (Number(localStorage.getItem("lumbering_level")) + 100 + Number(localStorage.getItem("woodcutter_b_f")))) / 100)));
	        var plusplus = Math.floor(Number(localStorage.getItem("last_wood_cash")) + Number(wood_t));
	        localStorage.setItem("last_wood_cash", plusplus);
	        localStorage.setItem("wood_timer", current);
		
		    localStorage.setItem("lumbering_level", Math.floor(Number(localStorage.getItem("lumbering_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
			}
		 }
		
		} else if (localStorage.getItem("mining_upper") == "on") {
			
		 if (localStorage.getItem("mining_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("mining_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("mining_upper");
		    localStorage.removeItem("mining_up_time");
			
			var current = Date.now();
	        var elapsedTime = Math.floor((current - localStorage.getItem("gold_timer")) / 3600000);
	        var gold_t = Math.floor(Number(elapsedTime) * (((Number(localStorage.getItem("plus_gold")) * (Number(localStorage.getItem("mining_level")) + 100 + Number(localStorage.getItem("gold_miner_b_f")))) / 100)));
	        var plusplus = Math.floor(Number(localStorage.getItem("last_gold_cash")) + Number(gold_t));
	        localStorage.setItem("last_gold_cash", plusplus);
	        localStorage.setItem("gold_timer", current);
		
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
		    var food_t = Math.floor(Number(elapsedTime) * ((((Number(localStorage.getItem("plus_food")) * (Number(localStorage.getItem("farming_level")) + 100 + Number(localStorage.getItem("farmer_b_f")))) / 100) - Number(localStorage.getItem("minus_food"))) - 3 * Number(localStorage.getItem("farmer_have"))));
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
	        var food_t = Math.floor(Number(elapsedTime) * ((((Number(localStorage.getItem("plus_food")) * (Number(localStorage.getItem("farming_level")) + 100 + Number(localStorage.getItem("farmer_b_f")))) / 100) - Number(localStorage.getItem("minus_food"))) - (Number(localStorage.getItem("farmer_trained")) * 30 + (Number(localStorage.getItem("farmer_trained")) * (Number(localStorage.getItem("farmer_level")) * 3)))));
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
		    var wood_t = Math.floor(Number(elapsedTime) * (((Number(localStorage.getItem("plus_wood")) * (Number(localStorage.getItem("lumbering_level")) + 100 + Number(localStorage.getItem("woodcutter_b_f")))) / 100) - 2 * Number(localStorage.getItem("woodcutter_have"))));
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
	        var wood_t = Math.floor(Number(elapsedTime) * (((Number(localStorage.getItem("plus_wood")) * (Number(localStorage.getItem("lumbering_level")) + 100 + Number(localStorage.getItem("woodcutter_b_f")))) / 100) - (Number(localStorage.getItem("woodcutter_trained")) * 20 + (Number(localStorage.getItem("woodcutter_trained")) * (Number(localStorage.getItem("woodcutter_level")) * 2)))));
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
		    var gold_t = Math.floor(Number(elapsedTime) * (((Number(localStorage.getItem("plus_gold")) * (Number(localStorage.getItem("mining_level")) + 100 + Number(localStorage.getItem("gold_miner_b_f")))) / 100) - 1 * Number(localStorage.getItem("gold_miner_have"))));
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
	        var gold_t = Math.floor(Number(elapsedTime) * (((Number(localStorage.getItem("plus_gold")) * (Number(localStorage.getItem("mining_level")) + 100 + Number(localStorage.getItem("gold_miner_b_f")))) / 100) - (Number(localStorage.getItem("gold_miner_trained")) * 10 + (Number(localStorage.getItem("gold_miner_trained")) * (Number(localStorage.getItem("gold_miner_level")) * 1)))));
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

/* boost */

setInterval(function() {
	if (localStorage.getItem("farmer_boost") == "on" || localStorage.getItem("woodcutter_boost") == "on" || localStorage.getItem("gold_miner_boost") == "on") {
		
		if (localStorage.getItem("farmer_boost") == "on") {
			
		if (localStorage.getItem("farmer_boost_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("farmer_boost_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("farmer_boost");
		    localStorage.removeItem("farmer_boost_time");
			
			var current = Date.now();
	        var elapsedTime = Math.floor((current - localStorage.getItem("food_timer")) / 3600000);
	        var food_t = Math.floor(Number(elapsedTime) * ((((Number(localStorage.getItem("plus_food")) * (Number(localStorage.getItem("farming_level")) + 100 + Number(localStorage.getItem("farmer_b_f")))) / 100) - Number(localStorage.getItem("minus_food")))));
	        var plusplus = Math.floor(Number(localStorage.getItem("last_food_cash")) + Number(food_t));
	        localStorage.setItem("last_food_cash", plusplus);
	        localStorage.setItem("food_timer", current);
		
		    localStorage.setItem("farmer_b_f", 0);
			
			location.reload();
		
			}
		 }
		
		} else if (localStorage.getItem("woodcutter_boost") == "on") {
			
		  if (localStorage.getItem("woodcutter_boost_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("woodcutter_boost_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("woodcutter_boost");
		    localStorage.removeItem("woodcutter_boost_time");
			
			var current = Date.now();
	        var elapsedTime = Math.floor((current - localStorage.getItem("wood_timer")) / 3600000);
	        var wood_t = Math.floor(Number(elapsedTime) * (((Number(localStorage.getItem("plus_wood")) * (Number(localStorage.getItem("lumbering_level")) + 100 + Number(localStorage.getItem("woodcutter_b_f")))) / 100)));
	        var plusplus = Math.floor(Number(localStorage.getItem("last_wood_cash")) + Number(wood_t));
	        localStorage.setItem("last_wood_cash", plusplus);
	        localStorage.setItem("wood_timer", current);
			
			localStorage.setItem("woodcutter_b_f", 0);
			
			location.reload();
		
			}
		 }
		
		} else if (localStorage.getItem("gold_miner_boost") == "on") {
			
		 if (localStorage.getItem("gold_miner_boost_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("gold_miner_boost_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("gold_miner_boost");
		    localStorage.removeItem("gold_miner_boost_time");
			
			var current = Date.now();
	        var elapsedTime = Math.floor((current - localStorage.getItem("gold_timer")) / 3600000);
	        var gold_t = Math.floor(Number(elapsedTime) * (((Number(localStorage.getItem("plus_gold")) * (Number(localStorage.getItem("mining_level")) + 100 + Number(localStorage.getItem("gold_miner_b_f")))) / 100)));
	        var plusplus = Math.floor(Number(localStorage.getItem("last_gold_cash")) + Number(gold_t));
	        localStorage.setItem("last_gold_cash", plusplus);
	        localStorage.setItem("gold_timer", current);
			
			localStorage.setItem("gold_miner_b_f", 0);
			
			location.reload();
		
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
  var timer_gold = Math.floor(Number(gold) * ((Number(localStorage.getItem("plus_gold")) * (Number(localStorage.getItem("mining_level")) + 100 + Number(localStorage.getItem("gold_miner_b_f")))) / 100));
  var gold_reward = Math.floor(Number(timer_gold) + 10000000 - Number(localStorage.getItem("gold_cash")) + Number(localStorage.getItem("last_gold_cash")));
  localStorage.setItem("gold", gold_reward);
  
  var food = Math.floor((currentTime - localStorage.getItem("food_timer")) / 3600000);
  var timer_food = Math.floor(Number(food) * (((Number(localStorage.getItem("plus_food")) * (Number(localStorage.getItem("farming_level")) + 100 + Number(localStorage.getItem("farmer_b_f")))) / 100) - Number(localStorage.getItem("minus_food"))));
  var food_reward = Math.floor(Number(timer_food) + 10000000 - Number(localStorage.getItem("food_cash")) + Number(localStorage.getItem("last_food_cash")));
  localStorage.setItem("food", food_reward);
  
  var wood = Math.floor((currentTime - localStorage.getItem("wood_timer")) / 3600000);
  var timer_wood = Math.floor(Number(wood) * ((Number(localStorage.getItem("plus_wood")) * (Number(localStorage.getItem("lumbering_level")) + 100 + Number(localStorage.getItem("woodcutter_b_f")))) / 100));
  var wood_reward = Math.floor(Number(timer_wood) + 10000000 - Number(localStorage.getItem("wood_cash")) + Number(localStorage.getItem("last_wood_cash")));
  localStorage.setItem("wood", wood_reward);
  
}

setInterval(money, 10);

/* input only num */

function inputonlynumber(input) {
    let numbers = input.value;
      
    let onlynumber = /^[0-9]*$/;
  
    if (!onlynumber.test(numbers)) {
        input.value = numbers.replace(/[^0-9]/g, '');
    }
}