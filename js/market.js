function page_save() {
	if (localStorage.getItem("local_lan") == "en") {
		document.getElementById("lan_head_text").innerText = "Market";
		document.getElementById("build_top_text").innerText = "Craft trade wagons and trade with other kingdoms!";
		document.getElementById("building_capacity_text").innerText = "Building Capacity: ";
		document.getElementById("trade_cartx_text").innerText = "Trade Cart x";
		document.getElementById("button_btn_l_text").innerText = "Buy";
		document.getElementById("button_btn_r_text").innerText = "Sell";
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
	
	document.getElementById("troops_text").innerText = "Trade Cart";

    $(document).ready(function(){
		
		var jsonData_trade_cart = JSON.stringify(trade_cart);
		var data_trade_cart = JSON.parse(jsonData_trade_cart);
		
		/* info */
		
		if (data_trade_cart[Number(localStorage.getItem("trade_cart_level"))].Age == 1) {
			document.getElementById("age_t").innerText = "Dark (1)";
		} else if (data_trade_cart[Number(localStorage.getItem("trade_cart_level"))].Age == 2) {
			document.getElementById("age_t").innerText = "Feudal (2)";
		} else if (data_trade_cart[Number(localStorage.getItem("trade_cart_level"))].Age == 3) {
			document.getElementById("age_t").innerText = "Castle (3)";
		} else if (data_trade_cart[Number(localStorage.getItem("trade_cart_level"))].Age == 4) {
			document.getElementById("age_t").innerText = "Imperial (4)";
		} else if (data_trade_cart[Number(localStorage.getItem("trade_cart_level"))].Age == 5) {
			document.getElementById("age_t").innerText = "New (5)";
		}
		document.getElementById("type_t").innerText = data_trade_cart[Number(localStorage.getItem("trade_cart_level"))].Type;
		document.getElementById("class_t").innerText = data_trade_cart[Number(localStorage.getItem("trade_cart_level"))].Class;
		
		/* produce */
		
		document.getElementById("p_food").innerText = data_trade_cart[Number(localStorage.getItem("trade_cart_level"))].Pfood;
		document.getElementById("p_wood").innerText = data_trade_cart[Number(localStorage.getItem("trade_cart_level"))].Pwood;
		document.getElementById("p_gold").innerText = data_trade_cart[Number(localStorage.getItem("trade_cart_level"))].Pgold;
		document.getElementById("p_diamond").innerText = data_trade_cart[Number(localStorage.getItem("trade_cart_level"))].Pdiamond;
		document.getElementById("p_time").innerText = data_trade_cart[Number(localStorage.getItem("trade_cart_level"))].Ptime;
		
		if (data_trade_cart[Number(localStorage.getItem("trade_cart_level"))].Pfood == null) {
			document.getElementById("produce_d1").style.display = "none";
			document.getElementById("produce_d2").style.display = "none";
		}
		
		/* upgrade */
		
		document.getElementById("u_gold").innerText = data_trade_cart[Number(localStorage.getItem("trade_cart_level"))].Ugold;
		document.getElementById("u_xp").innerText = data_trade_cart[Number(localStorage.getItem("trade_cart_level"))].Uxp;
		document.getElementById("u_time").innerText = data_trade_cart[Number(localStorage.getItem("trade_cart_level"))].Utime;
		
		/* abilities */
		
		document.getElementById("abilities_text").innerText = data_trade_cart[Number(localStorage.getItem("trade_cart_level"))].Atitle;
		document.getElementById("a1_title").innerText = data_trade_cart[Number(localStorage.getItem("trade_cart_level"))].A1text;
		document.getElementById("a1_text").innerText = data_trade_cart[Number(localStorage.getItem("trade_cart_level"))].A1;
		document.getElementById("a2_title").innerText = data_trade_cart[Number(localStorage.getItem("trade_cart_level"))].A2text;
		document.getElementById("a2_text").innerText = data_trade_cart[Number(localStorage.getItem("trade_cart_level"))].A2;
		document.getElementById("a3_title").innerText = data_trade_cart[Number(localStorage.getItem("trade_cart_level"))].A3text;
		document.getElementById("a3_text").innerText = data_trade_cart[Number(localStorage.getItem("trade_cart_level"))].A3;
		
		if (data_trade_cart[Number(localStorage.getItem("trade_cart_level"))].A2text == null) {
			document.getElementById("abilities_2").style.display = "none";
			document.getElementById("abilities_3").style.display = "none";
		} else if (data_trade_cart[Number(localStorage.getItem("trade_cart_level"))].A2text != null && data_trade_cart[Number(localStorage.getItem("trade_cart_level"))].A3text == null) {
			document.getElementById("abilities_3").style.display = "none";
		}
		
    });		
	
}

/* trade cart up and produce */

function trade_cart_produce() {
	
	var c_value = document.getElementById("trade_cart_input").value;
	var cost_value = Math.floor(Number(c_value) * 1000);
	
	if (c_value != null && c_value > 0 && Number(localStorage.getItem("trade_cart_have")) < 5 && c_value <= Math.floor(5 - Number(localStorage.getItem("trade_cart_have")))) {
	
	if (Number(cost_value) <= Number(localStorage.getItem("gold")) && Number(cost_value) <= Number(localStorage.getItem("wood"))) {
			
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + Math.floor(300 * Number(document.getElementById("trade_cart_input").value)));
		var ms_time = now.getTime();
		localStorage.setItem("trade_cart_produce_time", ms_time);
		
		localStorage.setItem("trade_cart_produce_price", Math.floor(1000 * Number(document.getElementById("trade_cart_input").value)));
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + Math.floor(1000 * Number(document.getElementById("trade_cart_input").value))));
		
		localStorage.setItem("wood_cash", Math.floor(Number(localStorage.getItem("wood_cash")) + Math.floor(1000 * Number(document.getElementById("trade_cart_input").value))));
		
		localStorage.setItem("trade_cart_producer", "on");
		
		localStorage.setItem("trade_cart_trained", Number(document.getElementById("trade_cart_input").value))
		
		location.reload();
			
	}
	
	}
	
}

function trade_cart_produce_cancel() {
	
	localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) - Number(localStorage.getItem("trade_cart_produce_price"))));
	localStorage.setItem("wood_cash", Math.floor(Number(localStorage.getItem("wood_cash")) - Number(localStorage.getItem("trade_cart_produce_price"))));
	
	localStorage.removeItem("trade_cart_upper");
	localStorage.removeItem("trade_cart_up_time");
	localStorage.removeItem("trade_cart_producer");
	localStorage.removeItem("trade_cart_produce_time");
	
	location.reload();
	
}

setInterval(function(){
	
	if (localStorage.getItem("trade_cart_producer") == "on") {
		
		document.getElementById("build_right1").style.display = "none";
		document.getElementById("build_producer1").style.display = "block";
		
		var tcp_ms = Math.floor(Number(localStorage.getItem("trade_cart_produce_time")) - Date.now());
		var tcp_s = Math.floor(tcp_ms / 1000);
		var tcp_m = Math.floor(tcp_s / 60);
		tcp_s = tcp_s % 60;
		var tcp_h = Math.floor(tcp_m / 60);
		tcp_m = tcp_m % 60;
		var tcp_d = Math.floor(tcp_h / 24);
		tcp_h = tcp_h % 24;
		
		tcp_d = tcp_d.toString().padStart(2, "0");
		tcp_h = tcp_h.toString().padStart(2, "0");
		tcp_m = tcp_m.toString().padStart(2, "0");
		tcp_s = tcp_s.toString().padStart(2, "0");
		
		document.getElementById("trade_cart_produce_d").innerText = tcp_d;
		document.getElementById("trade_cart_produce_h").innerText = tcp_h;
		document.getElementById("trade_cart_produce_m").innerText = tcp_m;
		document.getElementById("trade_cart_produce_s").innerText = tcp_s;
		
		if (Math.floor(Number(localStorage.getItem("trade_cart_produce_time")) - Date.now()) < 0) {
		
		localStorage.removeItem("trade_cart_producer");
		localStorage.removeItem("trade_cart_produce_time");
		
		document.getElementById("build_right1").style.display = "block";
		document.getElementById("build_producer1").style.display = "none";
		
		localStorage.setItem("trade_cart_have", Math.floor(Number(localStorage.getItem("trade_cart_have")) + Number(localStorage.getItem("trade_cart_trained"))));
		
		localStorage.removeItem("trade_cart_trained");
		
		location.reload();
		}
		
		
	}
	
	
}, 10);

function trade_cart_up() {
	
	if (Number(localStorage.getItem("trade_cart_level")) == 0 && Number(localStorage.getItem("gold")) >= 30000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 600);
		var ms_time = now.getTime();
		localStorage.setItem("trade_cart_up_time", ms_time);
		
		localStorage.setItem("trade_cart_up_price", 30000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 30000));
		
		localStorage.setItem("trade_cart_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("trade_cart_level")) == 1 && Number(localStorage.getItem("gold")) >= 46000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1800);
		var ms_time = now.getTime();
		localStorage.setItem("trade_cart_up_time", ms_time);
		
		localStorage.setItem("trade_cart_up_price", 46000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 46000));
		
		localStorage.setItem("trade_cart_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("trade_cart_level")) == 2 && Number(localStorage.getItem("gold")) >= 80000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 6000);
		var ms_time = now.getTime();
		localStorage.setItem("trade_cart_up_time", ms_time);
		
		localStorage.setItem("trade_cart_up_price", 80000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 80000));
		
		localStorage.setItem("trade_cart_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("trade_cart_level")) == 3 && Number(localStorage.getItem("gold")) >= 120000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 12000);
		var ms_time = now.getTime();
		localStorage.setItem("trade_cart_up_time", ms_time);
		
		localStorage.setItem("trade_cart_up_price", 120000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 120000));
		
		localStorage.setItem("trade_cart_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("trade_cart_level")) == 4 && Number(localStorage.getItem("gold")) >= 150000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 18000);
		var ms_time = now.getTime();
		localStorage.setItem("trade_cart_up_time", ms_time);
		
		localStorage.setItem("trade_cart_up_price", 150000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 150000));
		
		localStorage.setItem("trade_cart_upper", "on");
		
		location.reload();
		
	}
	
}

function trade_cart_up_cancel() {
	
	localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) - Number(localStorage.getItem("trade_cart_up_price"))));
	
	localStorage.removeItem("trade_cart_upper");
	localStorage.removeItem("trade_cart_up_time");
	localStorage.removeItem("trade_cart_producer");
	localStorage.removeItem("trade_cart_produce_time");
	
	location.reload();
	
}

setInterval(function(){
	
	if (localStorage.getItem("trade_cart_upper") == "on") {
		
		document.getElementById("build_right1").style.display = "none";
		document.getElementById("build_upper1").style.display = "block";
		
		var tc_ms = Math.floor(Number(localStorage.getItem("trade_cart_up_time")) - Date.now());
		var tc_s = Math.floor(tc_ms / 1000);
		var tc_m = Math.floor(tc_s / 60);
		tc_s = tc_s % 60;
		var tc_h = Math.floor(tc_m / 60);
		tc_m = tc_m % 60;
		var tc_d = Math.floor(tc_h / 24);
		tc_h = tc_h % 24;
		
		tc_d = tc_d.toString().padStart(2, "0");
		tc_h = tc_h.toString().padStart(2, "0");
		tc_m = tc_m.toString().padStart(2, "0");
		tc_s = tc_s.toString().padStart(2, "0");
		
		document.getElementById("trade_cart_up_d").innerText = tc_d;
		document.getElementById("trade_cart_up_h").innerText = tc_h;
		document.getElementById("trade_cart_up_m").innerText = tc_m;
		document.getElementById("trade_cart_up_s").innerText = tc_s;
		
		if (Math.floor(Number(localStorage.getItem("trade_cart_up_time")) - Date.now()) < 0) {
		
		localStorage.removeItem("trade_cart_upper");
		localStorage.removeItem("trade_cart_up_time");
		
		document.getElementById("build_right1").style.display = "block";
		document.getElementById("build_upper1").style.display = "none";
		
		localStorage.setItem("trade_cart_level", Math.floor(Number(localStorage.getItem("trade_cart_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 50));
		
		location.reload();
		}
		
		
	}
	
	
}, 10);

function trade_cart_up_speed_up() {
	if (Number(localStorage.getItem("diamond")) >= 50) {
		
		localStorage.setItem("diamond_cash", Math.floor(Number(localStorage.getItem("diamond_cash")) + 50));
		
		localStorage.setItem("trade_cart_level", Math.floor(Number(localStorage.getItem("trade_cart_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 50));
		
		localStorage.removeItem("trade_cart_upper");
		localStorage.removeItem("trade_cart_up_time");
		
		location.reload();
		
	}
}

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

setInterval(money, 20);

setInterval(function() {
	var result1 = Math.floor(Number(localStorage.getItem("gold")) / 1000);
	var result2 = Math.floor(Number(localStorage.getItem("wood")) / 1000);
	var result3 = Math.min(result1, result2);
	if (result3 <= 5 && result3 <= Math.floor(5 - Number(localStorage.getItem("trade_cart_have")))) {
	document.getElementById("max_trade_cart").innerText = Math.floor(result3);
	} else if (Number(localStorage.getItem("trade_cart_have")) == 5) {
		document.getElementById("max_trade_cart").innerText = "0";
	} else if (result3 > Math.floor(5 - Number(localStorage.getItem("trade_cart_have")))) {
		document.getElementById("max_trade_cart").innerText = Math.floor(5 - Number(localStorage.getItem("trade_cart_have")));
	}
}, 10);

setInterval(function(){
	
	document.getElementById("trade_cart_level").innerText = localStorage.getItem("trade_cart_level");
	if (Number(localStorage.getItem("trade_cart_level")) != 20) {
	document.getElementById("trade_cart_next_level").innerText = Math.floor(Number(localStorage.getItem("trade_cart_level")) + 1);
	} else if (Number(localStorage.getItem("trade_cart_level")) == 20) {
		document.getElementById("trade_cart_next_level").innerText = "Max";
	}
	document.getElementById("trade_cart_trained_amount").innerText = Number(localStorage.getItem("trade_cart_trained"));
	document.getElementById("total_trade_cart").innerText = Number(localStorage.getItem("trade_cart_have"));
	
}, 10);

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
