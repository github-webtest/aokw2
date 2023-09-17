function page_save() {
	if (localStorage.getItem("local_lan") == "en") {
		document.getElementById("lan_head_text").innerText = "Village";
		document.getElementById("build_top_text").innerText = "Produce resources and upgrade the economy of the kingdom thanks to the villagers!";
		document.getElementById("building_capacity_text").innerText = "Building Capacity: ";
		document.getElementById("farmerx_text").innerText = "Farmer x";
		document.getElementById("woodcutterx_text").innerText = "Woodcutter x";
		document.getElementById("gold_minerx_text").innerText = "Gold Miner x";
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
	
	document.getElementById("troops_text").innerText = "Farmer";

    $(document).ready(function(){
		
		var jsonData_farmer = JSON.stringify(farmer);
		var data_farmer = JSON.parse(jsonData_farmer);
		
		/* info */
		
		if (data_farmer[Number(localStorage.getItem("farmer_level"))].Age == 1) {
			document.getElementById("age_t").innerText = "Dark (1)";
		} else if (data_farmer[Number(localStorage.getItem("farmer_level"))].Age == 2) {
			document.getElementById("age_t").innerText = "Feudal (2)";
		} else if (data_farmer[Number(localStorage.getItem("farmer_level"))].Age == 3) {
			document.getElementById("age_t").innerText = "Castle (3)";
		} else if (data_farmer[Number(localStorage.getItem("farmer_level"))].Age == 4) {
			document.getElementById("age_t").innerText = "Imperial (4)";
		} else if (data_farmer[Number(localStorage.getItem("farmer_level"))].Age == 5) {
			document.getElementById("age_t").innerText = "New (5)";
		}
		document.getElementById("type_t").innerText = data_farmer[Number(localStorage.getItem("farmer_level"))].Type;
		document.getElementById("class_t").innerText = data_farmer[Number(localStorage.getItem("farmer_level"))].Class;
		
		/* produce */
		
		document.getElementById("p_food").innerText = data_farmer[Number(localStorage.getItem("farmer_level"))].Pfood;
		document.getElementById("p_wood").innerText = data_farmer[Number(localStorage.getItem("farmer_level"))].Pwood;
		document.getElementById("p_gold").innerText = data_farmer[Number(localStorage.getItem("farmer_level"))].Pgold;
		document.getElementById("p_diamond").innerText = data_farmer[Number(localStorage.getItem("farmer_level"))].Pdiamond;
		document.getElementById("p_time").innerText = data_farmer[Number(localStorage.getItem("farmer_level"))].Ptime;
		
		if (data_farmer[Number(localStorage.getItem("farmer_level"))].Pfood == null) {
			document.getElementById("produce_d1").style.display = "none";
			document.getElementById("produce_d2").style.display = "none";
		}
		
		/* upgrade */
		
		document.getElementById("u_gold").innerText = data_farmer[Number(localStorage.getItem("farmer_level"))].Ugold;
		document.getElementById("u_xp").innerText = data_farmer[Number(localStorage.getItem("farmer_level"))].Uxp;
		document.getElementById("u_time").innerText = data_farmer[Number(localStorage.getItem("farmer_level"))].Utime;
		
		/* abilities */
		
		document.getElementById("abilities_text").innerText = data_farmer[Number(localStorage.getItem("farmer_level"))].Atitle;
		document.getElementById("a1_title").innerText = data_farmer[Number(localStorage.getItem("farmer_level"))].A1text;
		document.getElementById("a1_text").innerText = data_farmer[Number(localStorage.getItem("farmer_level"))].A1;
		document.getElementById("a2_title").innerText = data_farmer[Number(localStorage.getItem("farmer_level"))].A2text;
		document.getElementById("a2_text").innerText = data_farmer[Number(localStorage.getItem("farmer_level"))].A2;
		document.getElementById("a3_title").innerText = data_farmer[Number(localStorage.getItem("farmer_level"))].A3text;
		document.getElementById("a3_text").innerText = data_farmer[Number(localStorage.getItem("farmer_level"))].A3;
		
		if (data_farmer[Number(localStorage.getItem("farmer_level"))].A2text == null) {
			document.getElementById("abilities_2").style.display = "none";
			document.getElementById("abilities_3").style.display = "none";
		} else if (data_farmer[Number(localStorage.getItem("farmer_level"))].A2text != null && data_farmer[Number(localStorage.getItem("farmer_level"))].A3text == null) {
			document.getElementById("abilities_3").style.display = "none";
		}
		
    });
}

function build2_info() {
	document.getElementById("troops_info").style.animation = "troop_info1 0.4s";
	document.getElementById("troops_info_bg").style.display = "flex";
	document.getElementById("troops_info").style.display = "block";
	
	document.getElementById("troops_text").innerText = "Woodcutter";

    $(document).ready(function(){
		
		var jsonData_woodcutter = JSON.stringify(woodcutter);
		var data_woodcutter = JSON.parse(jsonData_woodcutter);
		
		/* info */
		
		if (data_woodcutter[Number(localStorage.getItem("woodcutter_level"))].Age == 1) {
			document.getElementById("age_t").innerText = "Dark (1)";
		} else if (data_woodcutter[Number(localStorage.getItem("woodcutter_level"))].Age == 2) {
			document.getElementById("age_t").innerText = "Feudal (2)";
		} else if (data_woodcutter[Number(localStorage.getItem("woodcutter_level"))].Age == 3) {
			document.getElementById("age_t").innerText = "Castle (3)";
		} else if (data_woodcutter[Number(localStorage.getItem("woodcutter_level"))].Age == 4) {
			document.getElementById("age_t").innerText = "Imperial (4)";
		} else if (data_woodcutter[Number(localStorage.getItem("woodcutter_level"))].Age == 5) {
			document.getElementById("age_t").innerText = "New (5)";
		}
		document.getElementById("type_t").innerText = data_woodcutter[Number(localStorage.getItem("woodcutter_level"))].Type;
		document.getElementById("class_t").innerText = data_woodcutter[Number(localStorage.getItem("woodcutter_level"))].Class;
		
		/* produce */
		
		document.getElementById("p_food").innerText = data_woodcutter[Number(localStorage.getItem("woodcutter_level"))].Pfood;
		document.getElementById("p_wood").innerText = data_woodcutter[Number(localStorage.getItem("woodcutter_level"))].Pwood;
		document.getElementById("p_gold").innerText = data_woodcutter[Number(localStorage.getItem("woodcutter_level"))].Pgold;
		document.getElementById("p_diamond").innerText = data_woodcutter[Number(localStorage.getItem("woodcutter_level"))].Pdiamond;
		document.getElementById("p_time").innerText = data_woodcutter[Number(localStorage.getItem("woodcutter_level"))].Ptime;
		
		if (data_woodcutter[Number(localStorage.getItem("woodcutter_level"))].Pfood == null) {
			document.getElementById("produce_d1").style.display = "none";
			document.getElementById("produce_d2").style.display = "none";
		}
		
		/* upgrade */
		
		document.getElementById("u_gold").innerText = data_woodcutter[Number(localStorage.getItem("woodcutter_level"))].Ugold;
		document.getElementById("u_xp").innerText = data_woodcutter[Number(localStorage.getItem("woodcutter_level"))].Uxp;
		document.getElementById("u_time").innerText = data_woodcutter[Number(localStorage.getItem("woodcutter_level"))].Utime;
		
		/* abilities */
		
		document.getElementById("abilities_text").innerText = data_woodcutter[Number(localStorage.getItem("woodcutter_level"))].Atitle;
		document.getElementById("a1_title").innerText = data_woodcutter[Number(localStorage.getItem("woodcutter_level"))].A1text;
		document.getElementById("a1_text").innerText = data_woodcutter[Number(localStorage.getItem("woodcutter_level"))].A1;
		document.getElementById("a2_title").innerText = data_woodcutter[Number(localStorage.getItem("woodcutter_level"))].A2text;
		document.getElementById("a2_text").innerText = data_woodcutter[Number(localStorage.getItem("woodcutter_level"))].A2;
		document.getElementById("a3_title").innerText = data_woodcutter[Number(localStorage.getItem("woodcutter_level"))].A3text;
		document.getElementById("a3_text").innerText = data_woodcutter[Number(localStorage.getItem("woodcutter_level"))].A3;
		
		if (data_woodcutter[Number(localStorage.getItem("woodcutter_level"))].A2text == null) {
			document.getElementById("abilities_2").style.display = "none";
			document.getElementById("abilities_3").style.display = "none";
		} else if (data_woodcutter[Number(localStorage.getItem("woodcutter_level"))].A2text != null && data_woodcutter[Number(localStorage.getItem("woodcutter_level"))].A3text == null) {
			document.getElementById("abilities_3").style.display = "none";
		}
		
    });
}

function build3_info() {
	document.getElementById("troops_info").style.animation = "troop_info1 0.4s";
	document.getElementById("troops_info_bg").style.display = "flex";
	document.getElementById("troops_info").style.display = "block";
	
	document.getElementById("troops_text").innerText = "Gold Miner";

    $(document).ready(function(){
		
		var jsonData_gold_miner = JSON.stringify(gold_miner);
		var data_gold_miner = JSON.parse(jsonData_gold_miner);
		
		/* info */
		
		if (data_gold_miner[Number(localStorage.getItem("gold_miner_level"))].Age == 1) {
			document.getElementById("age_t").innerText = "Dark (1)";
		} else if (data_gold_miner[Number(localStorage.getItem("gold_miner_level"))].Age == 2) {
			document.getElementById("age_t").innerText = "Feudal (2)";
		} else if (data_gold_miner[Number(localStorage.getItem("gold_miner_level"))].Age == 3) {
			document.getElementById("age_t").innerText = "Castle (3)";
		} else if (data_gold_miner[Number(localStorage.getItem("gold_miner_level"))].Age == 4) {
			document.getElementById("age_t").innerText = "Imperial (4)";
		} else if (data_gold_miner[Number(localStorage.getItem("gold_miner_level"))].Age == 5) {
			document.getElementById("age_t").innerText = "New (5)";
		}
		document.getElementById("type_t").innerText = data_gold_miner[Number(localStorage.getItem("gold_miner_level"))].Type;
		document.getElementById("class_t").innerText = data_gold_miner[Number(localStorage.getItem("gold_miner_level"))].Class;
		
		/* produce */
		
		document.getElementById("p_food").innerText = data_gold_miner[Number(localStorage.getItem("gold_miner_level"))].Pfood;
		document.getElementById("p_wood").innerText = data_gold_miner[Number(localStorage.getItem("gold_miner_level"))].Pwood;
		document.getElementById("p_gold").innerText = data_gold_miner[Number(localStorage.getItem("gold_miner_level"))].Pgold;
		document.getElementById("p_diamond").innerText = data_gold_miner[Number(localStorage.getItem("gold_miner_level"))].Pdiamond;
		document.getElementById("p_time").innerText = data_gold_miner[Number(localStorage.getItem("gold_miner_level"))].Ptime;
		
		if (data_gold_miner[Number(localStorage.getItem("gold_miner_level"))].Pfood == null) {
			document.getElementById("produce_d1").style.display = "none";
			document.getElementById("produce_d2").style.display = "none";
		}
		
		/* upgrade */
		
		document.getElementById("u_gold").innerText = data_gold_miner[Number(localStorage.getItem("gold_miner_level"))].Ugold;
		document.getElementById("u_xp").innerText = data_gold_miner[Number(localStorage.getItem("gold_miner_level"))].Uxp;
		document.getElementById("u_time").innerText = data_gold_miner[Number(localStorage.getItem("gold_miner_level"))].Utime;
		
		/* abilities */
		
		document.getElementById("abilities_text").innerText = data_gold_miner[Number(localStorage.getItem("gold_miner_level"))].Atitle;
		document.getElementById("a1_title").innerText = data_gold_miner[Number(localStorage.getItem("gold_miner_level"))].A1text;
		document.getElementById("a1_text").innerText = data_gold_miner[Number(localStorage.getItem("gold_miner_level"))].A1;
		document.getElementById("a2_title").innerText = data_gold_miner[Number(localStorage.getItem("gold_miner_level"))].A2text;
		document.getElementById("a2_text").innerText = data_gold_miner[Number(localStorage.getItem("gold_miner_level"))].A2;
		document.getElementById("a3_title").innerText = data_gold_miner[Number(localStorage.getItem("gold_miner_level"))].A3text;
		document.getElementById("a3_text").innerText = data_gold_miner[Number(localStorage.getItem("gold_miner_level"))].A3;
		
		if (data_gold_miner[Number(localStorage.getItem("gold_miner_level"))].A2text == null) {
			document.getElementById("abilities_2").style.display = "none";
			document.getElementById("abilities_3").style.display = "none";
		} else if (data_gold_miner[Number(localStorage.getItem("gold_miner_level"))].A2text != null && data_gold_miner[Number(localStorage.getItem("gold_miner_level"))].A3text == null) {
			document.getElementById("abilities_3").style.display = "none";
		}
		
    });
}

/* farmer up and produce */

function farmer_produce() {
	
	var c_value = document.getElementById("farmer_input").value;
	var cost_value = Math.floor(Number(c_value) * 50);
	
	if (c_value != null && c_value > 0 && Math.floor(Number(localStorage.getItem("farmer_have")) + Number(localStorage.getItem("woodcutter_have")) + Number(localStorage.getItem("gold_miner_have"))) < 200 && c_value <= Math.floor(200 - Number(localStorage.getItem("farmer_have")) + Number(localStorage.getItem("woodcutter_have")) + Number(localStorage.getItem("gold_miner_have")))) {
	
	if (Number(cost_value) <= Number(localStorage.getItem("food"))) {
				
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + Math.floor(20 * Number(document.getElementById("farmer_input").value)));
		var ms_time = now.getTime();
		localStorage.setItem("farmer_produce_time", ms_time);
		
		localStorage.setItem("farmer_produce_price", Math.floor(50 * Number(document.getElementById("farmer_input").value)));
			
		localStorage.setItem("food_cash", Math.floor(Number(localStorage.getItem("food_cash")) + Math.floor(50 * Number(document.getElementById("farmer_input").value))));
		
		localStorage.setItem("farmer_producer", "on");
		
		localStorage.setItem("farmer_trained", Number(document.getElementById("farmer_input").value));
		
		location.reload();
			
	}
	
	}
	
}

function farmer_produce_cancel() {
	
	localStorage.setItem("food_cash", Math.floor(Number(localStorage.getItem("food_cash")) - Number(localStorage.getItem("farmer_produce_price"))));
	
	localStorage.removeItem("farmer_producer");
	localStorage.removeItem("farmer_produce_time");
	
	location.reload();
	
}

setInterval(function(){
	
	if (localStorage.getItem("farmer_producer") == "on") {
		
		document.getElementById("build_right1").style.display = "none";
		document.getElementById("build_right2").style.display = "none";
		document.getElementById("build_right3").style.display = "none";
		document.getElementById("build_producer1").style.display = "block";
		document.getElementById("build_producer2").style.display = "block";
		document.getElementById("build_producer3").style.display = "block";
		
		document.getElementById("build_produce_board2").style.display = "none";
		document.getElementById("build_produce_board3").style.display = "none";
		
		var fp_ms = Math.floor(Number(localStorage.getItem("farmer_produce_time")) - Date.now());
		var fp_s = Math.floor(fp_ms / 1000);
		var fp_m = Math.floor(fp_s / 60);
		fp_s = fp_s % 60;
		var fp_h = Math.floor(fp_m / 60);
		fp_m = fp_m % 60;
		var fp_d = Math.floor(fp_h / 24);
		fp_h = fp_h % 24;
		
		fp_d = fp_d.toString().padStart(2, "0");
		fp_h = fp_h.toString().padStart(2, "0");
		fp_m = fp_m.toString().padStart(2, "0");
		fp_s = fp_s.toString().padStart(2, "0");
		
		document.getElementById("farmer_produce_d").innerText = fp_d;
		document.getElementById("farmer_produce_h").innerText = fp_h;
		document.getElementById("farmer_produce_m").innerText = fp_m;
		document.getElementById("farmer_produce_s").innerText = fp_s;
		
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
		
		document.getElementById("build_right1").style.display = "block";
		document.getElementById("build_right2").style.display = "block";
		document.getElementById("build_right3").style.display = "block";
		document.getElementById("build_producer1").style.display = "none";
		document.getElementById("build_producer2").style.display = "none";
		document.getElementById("build_producer3").style.display = "none";
		
		localStorage.removeItem("farmer_trained");
		
		location.reload();
		}
		
		
	}
	
	
}, 10);

function farmer_up() {
	
	if (Number(localStorage.getItem("farmer_level")) == 0 && Number(localStorage.getItem("gold")) >= 40) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 10);
		var ms_time = now.getTime();
		localStorage.setItem("farmer_up_time", ms_time);
		
		localStorage.setItem("farmer_up_price", 40);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 40));
		
		localStorage.setItem("farmer_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("farmer_level")) == 1 && Number(localStorage.getItem("gold")) >= 80) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 30);
		var ms_time = now.getTime();
		localStorage.setItem("farmer_up_time", ms_time);
		
		localStorage.setItem("farmer_up_price", 80);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 80));
		
		localStorage.setItem("farmer_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("farmer_level")) == 2 && Number(localStorage.getItem("gold")) >= 130) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 75);
		var ms_time = now.getTime();
		localStorage.setItem("farmer_up_time", ms_time);
		
		localStorage.setItem("farmer_up_price", 130);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 130));
		
		localStorage.setItem("farmer_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("farmer_level")) == 3 && Number(localStorage.getItem("gold")) >= 180) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 150);
		var ms_time = now.getTime();
		localStorage.setItem("farmer_up_time", ms_time);
		
		localStorage.setItem("farmer_up_price", 180);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 180));
		
		localStorage.setItem("farmer_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("farmer_level")) == 4 && Number(localStorage.getItem("gold")) >= 340) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 180);
		var ms_time = now.getTime();
		localStorage.setItem("farmer_up_time", ms_time);
		
		localStorage.setItem("farmer_up_price", 340);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 340));
		
		localStorage.setItem("farmer_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("farmer_level")) == 5 && Number(localStorage.getItem("gold")) >= 580) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 300);
		var ms_time = now.getTime();
		localStorage.setItem("farmer_up_time", ms_time);
		
		localStorage.setItem("farmer_up_price", 580);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 580));
		
		localStorage.setItem("farmer_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("farmer_level")) == 6 && Number(localStorage.getItem("gold")) >= 800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 370);
		var ms_time = now.getTime();
		localStorage.setItem("farmer_up_time", ms_time);
		
		localStorage.setItem("farmer_up_price", 800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 800));
		
		localStorage.setItem("farmer_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("farmer_level")) == 7 && Number(localStorage.getItem("gold")) >= 1220) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 480);
		var ms_time = now.getTime();
		localStorage.setItem("farmer_up_time", ms_time);
		
		localStorage.setItem("farmer_up_price", 1220);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 1220));
		
		localStorage.setItem("farmer_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("farmer_level")) == 8 && Number(localStorage.getItem("gold")) >= 1600) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 600);
		var ms_time = now.getTime();
		localStorage.setItem("farmer_up_time", ms_time);
		
		localStorage.setItem("farmer_up_price", 1600);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 1600));
		
		localStorage.setItem("farmer_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("farmer_level")) == 9 && Number(localStorage.getItem("gold")) >= 2065) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 730);
		var ms_time = now.getTime();
		localStorage.setItem("farmer_up_time", ms_time);
		
		localStorage.setItem("farmer_up_price", 2065);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 2065));
		
		localStorage.setItem("farmer_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("farmer_level")) == 10 && Number(localStorage.getItem("gold")) >= 2270) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 900);
		var ms_time = now.getTime();
		localStorage.setItem("farmer_up_time", ms_time);
		
		localStorage.setItem("farmer_up_price", 2270);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 2270));
		
		localStorage.setItem("farmer_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("farmer_level")) == 11 && Number(localStorage.getItem("gold")) >= 3070) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1280);
		var ms_time = now.getTime();
		localStorage.setItem("farmer_up_time", ms_time);
		
		localStorage.setItem("farmer_up_price", 3070);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 3070));
		
		localStorage.setItem("farmer_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("farmer_level")) == 12 && Number(localStorage.getItem("gold")) >= 4000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1660);
		var ms_time = now.getTime();
		localStorage.setItem("farmer_up_time", ms_time);
		
		localStorage.setItem("farmer_up_price", 4000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 4000));
		
		localStorage.setItem("farmer_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("farmer_level")) == 13 && Number(localStorage.getItem("gold")) >= 5060) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 2120);
		var ms_time = now.getTime();
		localStorage.setItem("farmer_up_time", ms_time);
		
		localStorage.setItem("farmer_up_price", 5060);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 5060));
		
		localStorage.setItem("farmer_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("farmer_level")) == 14 && Number(localStorage.getItem("gold")) >= 6420) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 2740);
		var ms_time = now.getTime();
		localStorage.setItem("farmer_up_time", ms_time);
		
		localStorage.setItem("farmer_up_price", 6420);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 6420));
		
		localStorage.setItem("farmer_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("farmer_level")) == 15 && Number(localStorage.getItem("gold")) >= 9580) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 4520);
		var ms_time = now.getTime();
		localStorage.setItem("farmer_up_time", ms_time);
		
		localStorage.setItem("farmer_up_price", 9580);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 9580));
		
		localStorage.setItem("farmer_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("farmer_level")) == 16 && Number(localStorage.getItem("gold")) >= 12900) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 6940);
		var ms_time = now.getTime();
		localStorage.setItem("farmer_up_time", ms_time);
		
		localStorage.setItem("farmer_up_price", 12900);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 12900));
		
		localStorage.setItem("farmer_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("farmer_level")) == 17 && Number(localStorage.getItem("gold")) >= 15580) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 11720);
		var ms_time = now.getTime();
		localStorage.setItem("farmer_up_time", ms_time);
		
		localStorage.setItem("farmer_up_price", 15580);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 15580));
		
		localStorage.setItem("farmer_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("farmer_level")) == 18 && Number(localStorage.getItem("gold")) >= 19800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 16240);
		var ms_time = now.getTime();
		localStorage.setItem("farmer_up_time", ms_time);
		
		localStorage.setItem("farmer_up_price", 19800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 19800));
		
		localStorage.setItem("farmer_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("farmer_level")) == 19 && Number(localStorage.getItem("gold")) >= 23200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 22520);
		var ms_time = now.getTime();
		localStorage.setItem("farmer_up_time", ms_time);
		
		localStorage.setItem("farmer_up_price", 23200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 23200));
		
		localStorage.setItem("farmer_upper", "on");
		
		location.reload();
		
	}
	
}

function farmer_up_cancel() {
	
	localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) - Number(localStorage.getItem("farmer_up_price"))));
	
	localStorage.removeItem("farmer_upper");
	localStorage.removeItem("farmer_up_time");
	
	location.reload();
	
}

setInterval(function(){
	
	if (localStorage.getItem("farmer_upper") == "on") {
		
		document.getElementById("build_right1").style.display = "none";
		document.getElementById("build_right2").style.display = "none";
		document.getElementById("build_right3").style.display = "none";
		document.getElementById("build_upper1").style.display = "block";
		document.getElementById("build_upper2").style.display = "block";
		document.getElementById("build_upper3").style.display = "block";
		
		document.getElementById("build_up_board2").style.display = "none";
		document.getElementById("build_up_board3").style.display = "none";
		
		var f_ms = Math.floor(Number(localStorage.getItem("farmer_up_time")) - Date.now());
		var f_s = Math.floor(f_ms / 1000);
		var f_m = Math.floor(f_s / 60);
		f_s = f_s % 60;
		var f_h = Math.floor(f_m / 60);
		f_m = f_m % 60;
		var f_d = Math.floor(f_h / 24);
		f_h = f_h % 24;
		
		f_d = f_d.toString().padStart(2, "0");
		f_h = f_h.toString().padStart(2, "0");
		f_m = f_m.toString().padStart(2, "0");
		f_s = f_s.toString().padStart(2, "0");
		
		document.getElementById("farmer_up_d").innerText = f_d;
		document.getElementById("farmer_up_h").innerText = f_h;
		document.getElementById("farmer_up_m").innerText = f_m;
		document.getElementById("farmer_up_s").innerText = f_s;
		
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
		
		document.getElementById("build_right1").style.display = "block";
		document.getElementById("build_right2").style.display = "block";
		document.getElementById("build_right3").style.display = "block";
		document.getElementById("build_upper1").style.display = "none";
		document.getElementById("build_upper2").style.display = "none";
		document.getElementById("build_upper3").style.display = "none";
		
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 4));
		
		location.reload();
		}
		
		
	}
	
	
}, 10);

setInterval(function(){
	
	document.getElementById("farmer_level").innerText = Number(localStorage.getItem("farmer_level"));
	if (Number(localStorage.getItem("farmer_level")) != 20) {
	document.getElementById("farmer_next_level").innerText = Math.floor(Number(localStorage.getItem("farmer_level")) + 1);
	} else if (Number(localStorage.getItem("farmer_level")) == 20) {
		document.getElementById("farmer_next_level").innerText = "Max";
	}
	document.getElementById("total_farmer").innerText = Number(localStorage.getItem("farmer_have"));
	document.getElementById("farmer_trained_amount").innerText = Number(localStorage.getItem("farmer_trained"));
	document.getElementById("farmer_produce_speed_up_cost").innerText = Number(localStorage.getItem("farmer_trained"));
	
}, 10);

function farmer_up_speed_up() {
	if (Number(localStorage.getItem("diamond")) >= 50) {
		
		localStorage.setItem("diamond_cash", Math.floor(Number(localStorage.getItem("diamond_cash")) + 50));
		
		localStorage.setItem("farmer_level", Math.floor(Number(localStorage.getItem("farmer_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
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
		
		location.reload();
		
	}
}

function farmer_produce_speed_up() {
	
	if (Number(localStorage.getItem("diamond")) >= Number(localStorage.getItem("farmer_trained"))) {
		
	localStorage.setItem("diamond_cash", Math.floor(Number(localStorage.getItem("diamond_cash")) + Number(localStorage.getItem("farmer_trained"))));
		
	localStorage.setItem("farmer_have", Math.floor(Number(localStorage.getItem("farmer_have")) + Number(localStorage.getItem("farmer_trained"))));
	
	var p_food = Math.floor(((Number(localStorage.getItem("farmer_level")) * 3) * Number(localStorage.getItem("farmer_have"))) + (30 * Number(localStorage.getItem("farmer_have"))) + 100);
	localStorage.setItem("plus_food", p_food);
			
	var current = Date.now();
	var elapsedTime = Math.floor((current - localStorage.getItem("food_timer")) / 3600000);
	var food_t = Math.floor(Number(elapsedTime) * (Number(localStorage.getItem("plus_food")) - (Number(localStorage.getItem("farmer_trained")) * 30 + (Number(localStorage.getItem("farmer_trained")) * (Number(localStorage.getItem("farmer_level")) * 3)))));
	var plusplus = Math.floor(Number(localStorage.getItem("last_food_cash")) + Number(food_t));
	localStorage.setItem("last_food_cash", plusplus);
	localStorage.setItem("food_timer", current);
		
	localStorage.removeItem("farmer_trained");
	localStorage.removeItem("farmer_producer");
	localStorage.removeItem("farmer_produce_time");
	
	location.reload();
	
	}
	
}

/* woodcutter up and produce */

function woodcutter_produce() {
	
	var c_value = document.getElementById("woodcutter_input").value;
	var cost_value = Math.floor(Number(c_value) * 50);
	
	if (c_value != null && c_value > 0 && Math.floor(Number(localStorage.getItem("farmer_have")) + Number(localStorage.getItem("woodcutter_have")) + Number(localStorage.getItem("gold_miner_have"))) < 200 && c_value <= Math.floor(200 - Number(localStorage.getItem("farmer_have")) + Number(localStorage.getItem("woodcutter_have")) + Number(localStorage.getItem("gold_miner_have")))) {
	
	if (Number(cost_value) <= Number(localStorage.getItem("food"))) {
				
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + Math.floor(20 * Number(document.getElementById("woodcutter_input").value)));
		var ms_time = now.getTime();
		localStorage.setItem("woodcutter_produce_time", ms_time);
		
		localStorage.setItem("woodcutter_produce_price", Math.floor(50 * Number(document.getElementById("woodcutter_input").value)));
			
		localStorage.setItem("food_cash", Math.floor(Number(localStorage.getItem("food_cash")) + Math.floor(50 * Number(document.getElementById("woodcutter_input").value))));
		
		localStorage.setItem("woodcutter_producer", "on");
		
		localStorage.setItem("woodcutter_trained", Number(document.getElementById("woodcutter_input").value));
		
		location.reload();
			
	}
	
	}
	
}

function woodcutter_produce_cancel() {
	
	localStorage.setItem("food_cash", Math.floor(Number(localStorage.getItem("food_cash")) - Number(localStorage.getItem("woodcutter_produce_price"))));
	
	localStorage.removeItem("woodcutter_producer");
	localStorage.removeItem("woodcutter_produce_time");
	
	location.reload();
	
}

setInterval(function(){
	
	if (localStorage.getItem("woodcutter_producer") == "on") {
		
		document.getElementById("build_right1").style.display = "none";
		document.getElementById("build_right2").style.display = "none";
		document.getElementById("build_right3").style.display = "none";
		document.getElementById("build_producer1").style.display = "block";
		document.getElementById("build_producer2").style.display = "block";
		document.getElementById("build_producer3").style.display = "block";
		
		document.getElementById("build_produce_board1").style.display = "none";
		document.getElementById("build_produce_board3").style.display = "none";
		
		var wp_ms = Math.floor(Number(localStorage.getItem("woodcutter_produce_time")) - Date.now());
		var wp_s = Math.floor(wp_ms / 1000);
		var wp_m = Math.floor(wp_s / 60);
		wp_s = wp_s % 60;
		var wp_h = Math.floor(wp_m / 60);
		wp_m = wp_m % 60;
		var wp_d = Math.floor(wp_h / 24);
		wp_h = wp_h % 24;
		
		wp_d = wp_d.toString().padStart(2, "0");
		wp_h = wp_h.toString().padStart(2, "0");
		wp_m = wp_m.toString().padStart(2, "0");
		wp_s = wp_s.toString().padStart(2, "0");
		
		document.getElementById("woodcutter_produce_d").innerText = wp_d;
		document.getElementById("woodcutter_produce_h").innerText = wp_h;
		document.getElementById("woodcutter_produce_m").innerText = wp_m;
		document.getElementById("woodcutter_produce_s").innerText = wp_s;
		
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
		
		document.getElementById("build_right1").style.display = "block";
		document.getElementById("build_right2").style.display = "block";
		document.getElementById("build_right3").style.display = "block";
		document.getElementById("build_producer1").style.display = "none";
		document.getElementById("build_producer2").style.display = "none";
		document.getElementById("build_producer3").style.display = "none";
		
		localStorage.removeItem("woodcutter_trained");
		
		location.reload();
		}
		
		
	}
	
	
}, 10);

function woodcutter_up() {
	
	if (Number(localStorage.getItem("woodcutter_level")) == 0 && Number(localStorage.getItem("gold")) >= 40) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 10);
		var ms_time = now.getTime();
		localStorage.setItem("woodcutter_up_time", ms_time);
		
		localStorage.setItem("woodcutter_up_price", 40);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 40));
		
		localStorage.setItem("woodcutter_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("woodcutter_level")) == 1 && Number(localStorage.getItem("gold")) >= 80) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 30);
		var ms_time = now.getTime();
		localStorage.setItem("woodcutter_up_time", ms_time);
		
		localStorage.setItem("woodcutter_up_price", 80);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 80));
		
		localStorage.setItem("woodcutter_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("woodcutter_level")) == 2 && Number(localStorage.getItem("gold")) >= 130) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 75);
		var ms_time = now.getTime();
		localStorage.setItem("woodcutter_up_time", ms_time);
		
		localStorage.setItem("woodcutter_up_price", 130);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 130));
		
		localStorage.setItem("woodcutter_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("woodcutter_level")) == 3 && Number(localStorage.getItem("gold")) >= 180) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 150);
		var ms_time = now.getTime();
		localStorage.setItem("woodcutter_up_time", ms_time);
		
		localStorage.setItem("woodcutter_up_price", 180);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 180));
		
		localStorage.setItem("woodcutter_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("woodcutter_level")) == 4 && Number(localStorage.getItem("gold")) >= 340) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 180);
		var ms_time = now.getTime();
		localStorage.setItem("woodcutter_up_time", ms_time);
		
		localStorage.setItem("woodcutter_up_price", 340);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 340));
		
		localStorage.setItem("woodcutter_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("woodcutter_level")) == 5 && Number(localStorage.getItem("gold")) >= 580) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 300);
		var ms_time = now.getTime();
		localStorage.setItem("woodcutter_up_time", ms_time);
		
		localStorage.setItem("woodcutter_up_price", 580);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 580));
		
		localStorage.setItem("woodcutter_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("woodcutter_level")) == 6 && Number(localStorage.getItem("gold")) >= 800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 370);
		var ms_time = now.getTime();
		localStorage.setItem("woodcutter_up_time", ms_time);
		
		localStorage.setItem("woodcutter_up_price", 800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 800));
		
		localStorage.setItem("woodcutter_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("woodcutter_level")) == 7 && Number(localStorage.getItem("gold")) >= 1220) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 480);
		var ms_time = now.getTime();
		localStorage.setItem("woodcutter_up_time", ms_time);
		
		localStorage.setItem("woodcutter_up_price", 1220);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 1220));
		
		localStorage.setItem("woodcutter_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("woodcutter_level")) == 8 && Number(localStorage.getItem("gold")) >= 1600) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 600);
		var ms_time = now.getTime();
		localStorage.setItem("woodcutter_up_time", ms_time);
		
		localStorage.setItem("woodcutter_up_price", 1600);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 1600));
		
		localStorage.setItem("woodcutter_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("woodcutter_level")) == 9 && Number(localStorage.getItem("gold")) >= 2065) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 730);
		var ms_time = now.getTime();
		localStorage.setItem("woodcutter_up_time", ms_time);
		
		localStorage.setItem("woodcutter_up_price", 2065);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 2065));
		
		localStorage.setItem("woodcutter_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("woodcutter_level")) == 10 && Number(localStorage.getItem("gold")) >= 2270) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 900);
		var ms_time = now.getTime();
		localStorage.setItem("woodcutter_up_time", ms_time);
		
		localStorage.setItem("woodcutter_up_price", 2270);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 2270));
		
		localStorage.setItem("woodcutter_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("woodcutter_level")) == 11 && Number(localStorage.getItem("gold")) >= 3070) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1280);
		var ms_time = now.getTime();
		localStorage.setItem("woodcutter_up_time", ms_time);
		
		localStorage.setItem("woodcutter_up_price", 3070);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 3070));
		
		localStorage.setItem("woodcutter_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("woodcutter_level")) == 12 && Number(localStorage.getItem("gold")) >= 4000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1660);
		var ms_time = now.getTime();
		localStorage.setItem("woodcutter_up_time", ms_time);
		
		localStorage.setItem("woodcutter_up_price", 4000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 4000));
		
		localStorage.setItem("woodcutter_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("woodcutter_level")) == 13 && Number(localStorage.getItem("gold")) >= 5060) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 2120);
		var ms_time = now.getTime();
		localStorage.setItem("woodcutter_up_time", ms_time);
		
		localStorage.setItem("woodcutter_up_price", 5060);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 5060));
		
		localStorage.setItem("woodcutter_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("woodcutter_level")) == 14 && Number(localStorage.getItem("gold")) >= 6420) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 2740);
		var ms_time = now.getTime();
		localStorage.setItem("woodcutter_up_time", ms_time);
		
		localStorage.setItem("woodcutter_up_price", 6420);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 6420));
		
		localStorage.setItem("woodcutter_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("woodcutter_level")) == 15 && Number(localStorage.getItem("gold")) >= 9580) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 4520);
		var ms_time = now.getTime();
		localStorage.setItem("woodcutter_up_time", ms_time);
		
		localStorage.setItem("woodcutter_up_price", 9580);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 9580));
		
		localStorage.setItem("woodcutter_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("woodcutter_level")) == 16 && Number(localStorage.getItem("gold")) >= 12900) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 6940);
		var ms_time = now.getTime();
		localStorage.setItem("woodcutter_up_time", ms_time);
		
		localStorage.setItem("woodcutter_up_price", 12900);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 12900));
		
		localStorage.setItem("woodcutter_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("woodcutter_level")) == 17 && Number(localStorage.getItem("gold")) >= 15580) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 11720);
		var ms_time = now.getTime();
		localStorage.setItem("woodcutter_up_time", ms_time);
		
		localStorage.setItem("woodcutter_up_price", 15580);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 15580));
		
		localStorage.setItem("woodcutter_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("woodcutter_level")) == 18 && Number(localStorage.getItem("gold")) >= 19800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 16240);
		var ms_time = now.getTime();
		localStorage.setItem("woodcutter_up_time", ms_time);
		
		localStorage.setItem("woodcutter_up_price", 19800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 19800));
		
		localStorage.setItem("woodcutter_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("woodcutter_level")) == 19 && Number(localStorage.getItem("gold")) >= 23200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 22520);
		var ms_time = now.getTime();
		localStorage.setItem("woodcutter_up_time", ms_time);
		
		localStorage.setItem("woodcutter_up_price", 23200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 23200));
		
		localStorage.setItem("woodcutter_upper", "on");
		
		location.reload();
		
	}
	
}

function woodcutter_up_cancel() {
	
	localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) - Number(localStorage.getItem("woodcutter_up_price"))));
	
	localStorage.removeItem("woodcutter_upper");
	localStorage.removeItem("woodcutter_up_time");
	
	location.reload();
	
}

setInterval(function(){
	
	if (localStorage.getItem("woodcutter_upper") == "on") {
		
		document.getElementById("build_right1").style.display = "none";
		document.getElementById("build_right2").style.display = "none";
		document.getElementById("build_right3").style.display = "none";
		document.getElementById("build_upper1").style.display = "block";
		document.getElementById("build_upper2").style.display = "block";
		document.getElementById("build_upper3").style.display = "block";
		
		document.getElementById("build_up_board1").style.display = "none";
		document.getElementById("build_up_board3").style.display = "none";
		
		var w_ms = Math.floor(Number(localStorage.getItem("woodcutter_up_time")) - Date.now());
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
		
		document.getElementById("woodcutter_up_d").innerText = w_d;
		document.getElementById("woodcutter_up_h").innerText = w_h;
		document.getElementById("woodcutter_up_m").innerText = w_m;
		document.getElementById("woodcutter_up_s").innerText = w_s;
		
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
		
		document.getElementById("build_right1").style.display = "block";
		document.getElementById("build_right2").style.display = "block";
		document.getElementById("build_right3").style.display = "block";
		document.getElementById("build_upper1").style.display = "none";
		document.getElementById("build_upper2").style.display = "none";
		document.getElementById("build_upper3").style.display = "none";
		
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 4));
		
		location.reload();
		}
		
		
	}
	
	
}, 10);

setInterval(function(){
	
	document.getElementById("woodcutter_level").innerText = Number(localStorage.getItem("woodcutter_level"));
	if (Number(localStorage.getItem("woodcutter_level")) != 20) {
	document.getElementById("woodcutter_next_level").innerText = Math.floor(Number(localStorage.getItem("woodcutter_level")) + 1);
	} else if (Number(localStorage.getItem("woodcutter_level")) == 20) {
		document.getElementById("woodcutter_next_level").innerText = "Max";
	}
	document.getElementById("total_woodcutter").innerText = Number(localStorage.getItem("woodcutter_have"));
	document.getElementById("woodcutter_trained_amount").innerText = Number(localStorage.getItem("woodcutter_trained"));
	document.getElementById("woodcutter_produce_speed_up_cost").innerText = Number(localStorage.getItem("woodcutter_trained"));
	
}, 10);

function woodcutter_up_speed_up() {
	if (Number(localStorage.getItem("diamond")) >= 50) {
		
		localStorage.setItem("diamond_cash", Math.floor(Number(localStorage.getItem("diamond_cash")) + 50));
		
		localStorage.setItem("woodcutter_level", Math.floor(Number(localStorage.getItem("woodcutter_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
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
		
		location.reload();
		
	}
}

function woodcutter_produce_speed_up() {
	
	if (Number(localStorage.getItem("diamond")) >= Number(localStorage.getItem("woodcutter_trained"))) {
		
	localStorage.setItem("diamond_cash", Math.floor(Number(localStorage.getItem("diamond_cash")) + Number(localStorage.getItem("woodcutter_trained"))));
		
	localStorage.setItem("woodcutter_have", Math.floor(Number(localStorage.getItem("woodcutter_have")) + Number(localStorage.getItem("woodcutter_trained"))));
	
	var p_wood = Math.floor(((Number(localStorage.getItem("woodcutter_level")) * 2) * Number(localStorage.getItem("woodcutter_have"))) + (20 * Number(localStorage.getItem("woodcutter_have"))));
	localStorage.setItem("plus_wood", p_wood);
			
	var current = Date.now();
	var elapsedTime = Math.floor((current - localStorage.getItem("wood_timer")) / 3600000);
	var wood_t = Math.floor(Number(elapsedTime) * (Number(localStorage.getItem("plus_wood")) - (Number(localStorage.getItem("woodcutter_trained")) * 20 + (Number(localStorage.getItem("woodcutter_trained")) * (Number(localStorage.getItem("woodcutter_level")) * 2)))));
	var plusplus = Math.floor(Number(localStorage.getItem("last_wood_cash")) + Number(wood_t));
	localStorage.setItem("last_wood_cash", plusplus);
	localStorage.setItem("wood_timer", current);
		
	localStorage.removeItem("woodcutter_trained");
	localStorage.removeItem("woodcutter_producer");
	localStorage.removeItem("woodcutter_produce_time");
	
	location.reload();
	
	}
	
}

/* gold_miner up and produce */

function gold_miner_produce() {
	
	var c_value = document.getElementById("gold_miner_input").value;
	var cost_value = Math.floor(Number(c_value) * 50);
	
	if (c_value != null && c_value > 0 && Math.floor(Number(localStorage.getItem("farmer_have")) + Number(localStorage.getItem("woodcutter_have")) + Number(localStorage.getItem("gold_miner_have"))) < 200 && c_value <= Math.floor(200 - Number(localStorage.getItem("farmer_have")) + Number(localStorage.getItem("woodcutter_have")) + Number(localStorage.getItem("gold_miner_have")))) {
	
	if (Number(cost_value) <= Number(localStorage.getItem("food"))) {
				
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + Math.floor(20 * Number(document.getElementById("gold_miner_input").value)));
		var ms_time = now.getTime();
		localStorage.setItem("gold_miner_produce_time", ms_time);
		
		localStorage.setItem("gold_miner_produce_price", Math.floor(50 * Number(document.getElementById("gold_miner_input").value)));
			
		localStorage.setItem("food_cash", Math.floor(Number(localStorage.getItem("food_cash")) + Math.floor(50 * Number(document.getElementById("gold_miner_input").value))));
		
		localStorage.setItem("gold_miner_producer", "on");
		
		localStorage.setItem("gold_miner_trained", Number(document.getElementById("gold_miner_input").value));
		
		location.reload();
			
	}
	
	}
	
}

function gold_miner_produce_cancel() {
	
	localStorage.setItem("food_cash", Math.floor(Number(localStorage.getItem("food_cash")) - Number(localStorage.getItem("gold_miner_produce_price"))));
	
	localStorage.removeItem("gold_miner_producer");
	localStorage.removeItem("gold_miner_produce_time");
	
	location.reload();
	
}

setInterval(function(){
	
	if (localStorage.getItem("gold_miner_producer") == "on") {
		
		document.getElementById("build_right1").style.display = "none";
		document.getElementById("build_right2").style.display = "none";
		document.getElementById("build_right3").style.display = "none";
		document.getElementById("build_producer1").style.display = "block";
		document.getElementById("build_producer2").style.display = "block";
		document.getElementById("build_producer3").style.display = "block";
		
		document.getElementById("build_produce_board1").style.display = "none";
		document.getElementById("build_produce_board2").style.display = "none";
		
		var mp_ms = Math.floor(Number(localStorage.getItem("gold_miner_produce_time")) - Date.now());
		var mp_s = Math.floor(mp_ms / 1000);
		var mp_m = Math.floor(mp_s / 60);
		mp_s = mp_s % 60;
		var mp_h = Math.floor(mp_m / 60);
		mp_m = mp_m % 60;
		var mp_d = Math.floor(mp_h / 24);
		mp_h = mp_h % 24;
		
		mp_d = mp_d.toString().padStart(2, "0");
		mp_h = mp_h.toString().padStart(2, "0");
		mp_m = mp_m.toString().padStart(2, "0");
		mp_s = mp_s.toString().padStart(2, "0");
		
		document.getElementById("gold_miner_produce_d").innerText = mp_d;
		document.getElementById("gold_miner_produce_h").innerText = mp_h;
		document.getElementById("gold_miner_produce_m").innerText = mp_m;
		document.getElementById("gold_miner_produce_s").innerText = mp_s;
		
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
		
		document.getElementById("build_right1").style.display = "block";
		document.getElementById("build_right2").style.display = "block";
		document.getElementById("build_right3").style.display = "block";
		document.getElementById("build_producer1").style.display = "none";
		document.getElementById("build_producer2").style.display = "none";
		document.getElementById("build_producer3").style.display = "none";
		
		localStorage.removeItem("gold_miner_trained");
		
		location.reload();
		}
		
		
	}
	
	
}, 10);

function gold_miner_up() {
	
	if (Number(localStorage.getItem("gold_miner_level")) == 0 && Number(localStorage.getItem("gold")) >= 40) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 10);
		var ms_time = now.getTime();
		localStorage.setItem("gold_miner_up_time", ms_time);
		
		localStorage.setItem("gold_miner_up_price", 40);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 40));
		
		localStorage.setItem("gold_miner_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("gold_miner_level")) == 1 && Number(localStorage.getItem("gold")) >= 80) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 30);
		var ms_time = now.getTime();
		localStorage.setItem("gold_miner_up_time", ms_time);
		
		localStorage.setItem("gold_miner_up_price", 80);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 80));
		
		localStorage.setItem("gold_miner_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("gold_miner_level")) == 2 && Number(localStorage.getItem("gold")) >= 130) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 75);
		var ms_time = now.getTime();
		localStorage.setItem("gold_miner_up_time", ms_time);
		
		localStorage.setItem("gold_miner_up_price", 130);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 130));
		
		localStorage.setItem("gold_miner_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("gold_miner_level")) == 3 && Number(localStorage.getItem("gold")) >= 180) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 150);
		var ms_time = now.getTime();
		localStorage.setItem("gold_miner_up_time", ms_time);
		
		localStorage.setItem("gold_miner_up_price", 180);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 180));
		
		localStorage.setItem("gold_miner_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("gold_miner_level")) == 4 && Number(localStorage.getItem("gold")) >= 340) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 180);
		var ms_time = now.getTime();
		localStorage.setItem("gold_miner_up_time", ms_time);
		
		localStorage.setItem("gold_miner_up_price", 340);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 340));
		
		localStorage.setItem("gold_miner_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("gold_miner_level")) == 5 && Number(localStorage.getItem("gold")) >= 580) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 300);
		var ms_time = now.getTime();
		localStorage.setItem("gold_miner_up_time", ms_time);
		
		localStorage.setItem("gold_miner_up_price", 580);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 580));
		
		localStorage.setItem("gold_miner_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("gold_miner_level")) == 6 && Number(localStorage.getItem("gold")) >= 800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 370);
		var ms_time = now.getTime();
		localStorage.setItem("gold_miner_up_time", ms_time);
		
		localStorage.setItem("gold_miner_up_price", 800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 800));
		
		localStorage.setItem("gold_miner_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("gold_miner_level")) == 7 && Number(localStorage.getItem("gold")) >= 1220) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 480);
		var ms_time = now.getTime();
		localStorage.setItem("gold_miner_up_time", ms_time);
		
		localStorage.setItem("gold_miner_up_price", 1220);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 1220));
		
		localStorage.setItem("gold_miner_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("gold_miner_level")) == 8 && Number(localStorage.getItem("gold")) >= 1600) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 600);
		var ms_time = now.getTime();
		localStorage.setItem("gold_miner_up_time", ms_time);
		
		localStorage.setItem("gold_miner_up_price", 1600);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 1600));
		
		localStorage.setItem("gold_miner_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("gold_miner_level")) == 9 && Number(localStorage.getItem("gold")) >= 2065) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 730);
		var ms_time = now.getTime();
		localStorage.setItem("gold_miner_up_time", ms_time);
		
		localStorage.setItem("gold_miner_up_price", 2065);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 2065));
		
		localStorage.setItem("gold_miner_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("gold_miner_level")) == 10 && Number(localStorage.getItem("gold")) >= 2270) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 900);
		var ms_time = now.getTime();
		localStorage.setItem("gold_miner_up_time", ms_time);
		
		localStorage.setItem("gold_miner_up_price", 2270);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 2270));
		
		localStorage.setItem("gold_miner_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("gold_miner_level")) == 11 && Number(localStorage.getItem("gold")) >= 3070) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1280);
		var ms_time = now.getTime();
		localStorage.setItem("gold_miner_up_time", ms_time);
		
		localStorage.setItem("gold_miner_up_price", 3070);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 3070));
		
		localStorage.setItem("gold_miner_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("gold_miner_level")) == 12 && Number(localStorage.getItem("gold")) >= 4000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1660);
		var ms_time = now.getTime();
		localStorage.setItem("gold_miner_up_time", ms_time);
		
		localStorage.setItem("gold_miner_up_price", 4000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 4000));
		
		localStorage.setItem("gold_miner_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("gold_miner_level")) == 13 && Number(localStorage.getItem("gold")) >= 5060) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 2120);
		var ms_time = now.getTime();
		localStorage.setItem("gold_miner_up_time", ms_time);
		
		localStorage.setItem("gold_miner_up_price", 5060);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 5060));
		
		localStorage.setItem("gold_miner_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("gold_miner_level")) == 14 && Number(localStorage.getItem("gold")) >= 6420) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 2740);
		var ms_time = now.getTime();
		localStorage.setItem("gold_miner_up_time", ms_time);
		
		localStorage.setItem("gold_miner_up_price", 6420);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 6420));
		
		localStorage.setItem("gold_miner_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("gold_miner_level")) == 15 && Number(localStorage.getItem("gold")) >= 9580) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 4520);
		var ms_time = now.getTime();
		localStorage.setItem("gold_miner_up_time", ms_time);
		
		localStorage.setItem("gold_miner_up_price", 9580);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 9580));
		
		localStorage.setItem("gold_miner_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("gold_miner_level")) == 16 && Number(localStorage.getItem("gold")) >= 12900) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 6940);
		var ms_time = now.getTime();
		localStorage.setItem("gold_miner_up_time", ms_time);
		
		localStorage.setItem("gold_miner_up_price", 12900);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 12900));
		
		localStorage.setItem("gold_miner_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("gold_miner_level")) == 17 && Number(localStorage.getItem("gold")) >= 15580) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 11720);
		var ms_time = now.getTime();
		localStorage.setItem("gold_miner_up_time", ms_time);
		
		localStorage.setItem("gold_miner_up_price", 15580);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 15580));
		
		localStorage.setItem("gold_miner_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("gold_miner_level")) == 18 && Number(localStorage.getItem("gold")) >= 19800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 16240);
		var ms_time = now.getTime();
		localStorage.setItem("gold_miner_up_time", ms_time);
		
		localStorage.setItem("gold_miner_up_price", 19800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 19800));
		
		localStorage.setItem("gold_miner_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("gold_miner_level")) == 19 && Number(localStorage.getItem("gold")) >= 23200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 22520);
		var ms_time = now.getTime();
		localStorage.setItem("gold_miner_up_time", ms_time);
		
		localStorage.setItem("gold_miner_up_price", 23200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 23200));
		
		localStorage.setItem("gold_miner_upper", "on");
		
		location.reload();
		
	}
	
}

function gold_miner_up_cancel() {
	
	localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) - Number(localStorage.getItem("gold_miner_up_price"))));
	
	localStorage.removeItem("gold_miner_upper");
	localStorage.removeItem("gold_miner_up_time");
	
	location.reload();
	
}

setInterval(function(){
	
	if (localStorage.getItem("gold_miner_upper") == "on") {
		
		document.getElementById("build_right1").style.display = "none";
		document.getElementById("build_right2").style.display = "none";
		document.getElementById("build_right3").style.display = "none";
		document.getElementById("build_upper1").style.display = "block";
		document.getElementById("build_upper2").style.display = "block";
		document.getElementById("build_upper3").style.display = "block";
		
		document.getElementById("build_up_board1").style.display = "none";
		document.getElementById("build_up_board2").style.display = "none";
		
		var m_ms = Math.floor(Number(localStorage.getItem("gold_miner_up_time")) - Date.now());
		var m_s = Math.floor(m_ms / 1000);
		var m_m = Math.floor(m_s / 60);
		m_s = m_s % 60;
		var m_h = Math.floor(m_m / 60);
		m_m = m_m % 60;
		var m_d = Math.floor(m_h / 24);
		m_h = m_h % 24;
		
		m_d = m_d.toString().padStart(2, "0");
		m_h = m_h.toString().padStart(2, "0");
		m_m = m_m.toString().padStart(2, "0");
		m_s = m_s.toString().padStart(2, "0");
		
		document.getElementById("gold_miner_up_d").innerText = m_d;
		document.getElementById("gold_miner_up_h").innerText = m_h;
		document.getElementById("gold_miner_up_m").innerText = m_m;
		document.getElementById("gold_miner_up_s").innerText = m_s;
		
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
		
		document.getElementById("build_right1").style.display = "block";
		document.getElementById("build_right2").style.display = "block";
		document.getElementById("build_right3").style.display = "block";
		document.getElementById("build_upper1").style.display = "none";
		document.getElementById("build_upper2").style.display = "none";
		document.getElementById("build_upper3").style.display = "none";
		
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 4));
		
		location.reload();
		}
		
		
	}
	
	
}, 10);

setInterval(function(){
	
	document.getElementById("gold_miner_level").innerText = Number(localStorage.getItem("gold_miner_level"));
	if (Number(localStorage.getItem("gold_miner_level")) != 20) {
	document.getElementById("gold_miner_next_level").innerText = Math.floor(Number(localStorage.getItem("gold_miner_level")) + 1);
	} else if (Number(localStorage.getItem("gold_miner_level")) == 20) {
		document.getElementById("gold_miner_next_level").innerText = "Max";
	}
	document.getElementById("total_gold_miner").innerText = Number(localStorage.getItem("gold_miner_have"));
	document.getElementById("gold_miner_trained_amount").innerText = Number(localStorage.getItem("gold_miner_trained"));
	document.getElementById("gold_miner_produce_speed_up_cost").innerText = Number(localStorage.getItem("gold_miner_trained"));
	
}, 10);

function gold_miner_up_speed_up() {
	if (Number(localStorage.getItem("diamond")) >= 50) {
		
		localStorage.setItem("diamond_cash", Math.floor(Number(localStorage.getItem("diamond_cash")) + 50));
		
		localStorage.setItem("gold_miner_level", Math.floor(Number(localStorage.getItem("gold_miner_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
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
		
		location.reload();
		
	}
}

function gold_miner_produce_speed_up() {
	
	if (Number(localStorage.getItem("diamond")) >= Number(localStorage.getItem("gold_miner_trained"))) {
		
	localStorage.setItem("diamond_cash", Math.floor(Number(localStorage.getItem("diamond_cash")) + Number(localStorage.getItem("gold_miner_trained"))));
		
	localStorage.setItem("gold_miner_have", Math.floor(Number(localStorage.getItem("gold_miner_have")) + Number(localStorage.getItem("gold_miner_trained"))));
	
	var p_gold = Math.floor(((Number(localStorage.getItem("gold_miner_level")) * 1) * Number(localStorage.getItem("gold_miner_have"))) + (10 * Number(localStorage.getItem("gold_miner_have"))));
	localStorage.setItem("plus_gold", p_gold);
			
	var current = Date.now();
	var elapsedTime = Math.floor((current - localStorage.getItem("gold_timer")) / 3600000);
	var gold_t = Math.floor(Number(elapsedTime) * (Number(localStorage.getItem("plus_gold")) - (Number(localStorage.getItem("gold_miner_trained")) * 10 + (Number(localStorage.getItem("gold_miner_trained")) * (Number(localStorage.getItem("gold_miner_level")) * 1)))));
	var plusplus = Math.floor(Number(localStorage.getItem("last_gold_cash")) + Number(gold_t));
	localStorage.setItem("last_gold_cash", plusplus);
	localStorage.setItem("gold_timer", current);
		
	localStorage.removeItem("gold_miner_trained");
	localStorage.removeItem("gold_miner_producer");
	localStorage.removeItem("gold_miner_produce_time");
	
	location.reload();
	
	}
	
}

setInterval(function() {
	var result1 = Math.floor(Number(localStorage.getItem("food")) / 50);
	if (result1 <= 200 && result1 <= Math.floor(200 - (Number(localStorage.getItem("farmer_have")) + Number(localStorage.getItem("woodcutter_have")) + Number(localStorage.getItem("gold_miner_have"))))) {
	document.getElementById("max_farmer").innerText = Math.floor(result1);
	document.getElementById("max_woodcutter").innerText = Math.floor(result1);
	document.getElementById("max_gold_miner").innerText = Math.floor(result1);
	} else if (Math.floor(Number(localStorage.getItem("farmer_have")) + Number(localStorage.getItem("woodcutter_have")) + Number(localStorage.getItem("gold_miner_have"))) == 200) {
		document.getElementById("max_farmer").innerText = "0";
		document.getElementById("max_woodcutter").innerText = "0";
		document.getElementById("max_gold_miner").innerText = "0";
	} else if (result1 > Math.floor(200 - Number(localStorage.getItem("farmer_have")) + Number(localStorage.getItem("woodcutter_have")) + Number(localStorage.getItem("gold_miner_have")))) {
		document.getElementById("max_farmer").innerText = Math.floor(200 - Number(localStorage.getItem("farmer_have")) + Number(localStorage.getItem("woodcutter_have")) + Number(localStorage.getItem("gold_miner_have")));
		document.getElementById("max_woodcutter").innerText = Math.floor(200 - Number(localStorage.getItem("farmer_have")) + Number(localStorage.getItem("woodcutter_have")) + Number(localStorage.getItem("gold_miner_have")));
		document.getElementById("max_gold_miner").innerText = Math.floor(200 - Number(localStorage.getItem("farmer_have")) + Number(localStorage.getItem("woodcutter_have")) + Number(localStorage.getItem("gold_miner_have")));
	}
}, 10);

/* Money */

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
