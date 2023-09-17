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
	} else if (Number(localStorage.getItem("watchtower_have")) == 50) {
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

/* money */

function money(){
	
  var currentTime = new Date().getTime();
  
  var diamond = Math.floor((currentTime - localStorage.getItem("diamond_timer")) / 3600000);
  var timer_diamond = Math.floor(Number(diamond) * Number(localStorage.getItem("plus_diamond")));
  var diamond_reward = Math.floor(Number(timer_diamond) + 1000000 - Number(localStorage.getItem("diamond_cash")) + Number(localStorage.getItem("last_diamond_cash")));
  localStorage.setItem("diamond", diamond_reward);
  
  var gold = Math.floor((currentTime - localStorage.getItem("gold_timer")) / 3600000);
  var timer_gold = Math.floor(Number(gold) * Number(localStorage.getItem("plus_gold")));
  var gold_reward = Math.floor(Number(timer_gold) + 10000000 - Number(localStorage.getItem("gold_cash")) + Number(localStorage.getItem("last_gold_cash")));
  localStorage.setItem("gold", gold_reward);
  
  var food = Math.floor((currentTime - localStorage.getItem("food_timer")) / 3600000);
  var timer_food = Math.floor(Number(food) * Number(localStorage.getItem("plus_food")));
  var food_reward = Math.floor(Number(timer_food) + 10000000 - Number(localStorage.getItem("food_cash")) + Number(localStorage.getItem("last_food_cash")));
  localStorage.setItem("food", food_reward);
  
  var wood = Math.floor((currentTime - localStorage.getItem("wood_timer")) / 3600000);
  var timer_wood = Math.floor(Number(wood) * Number(localStorage.getItem("plus_wood")));
  var wood_reward = Math.floor(Number(timer_wood) + 10000000 - Number(localStorage.getItem("wood_cash")) + Number(localStorage.getItem("last_wood_cash")));
  localStorage.setItem("wood", wood_reward);
  
}

setInterval(money, 20);

/* input only num */

function inputonlynumber(input) {
    let numbers = input.value;
      
    let onlynumber = /^[0-9]*$/;
  
    if (!onlynumber.test(numbers)) {
        input.value = numbers.replace(/[^0-9]/g, '');
    }
}
