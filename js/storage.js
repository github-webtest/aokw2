function page_save() {
	if (localStorage.getItem("local_lan") == "en") {
		document.getElementById("lan_head_text").innerText = "Kingdom Info";
		
		document.getElementById("age_points").innerText = Number(localStorage.getItem("age_points"));
		
		if (localStorage.getItem("age") == 5) {
		document.getElementById("next_age_text2").innerText = "-";
		document.getElementById("next_age").innerText = "";
		document.getElementById("age").innerText = "New Age";
		document.getElementById("age_img").style.backgroundImage = "url('images/age_5_icon.png')";
		document.getElementById("next_age_text").innerText = "";
		} else if (localStorage.getItem("age") == 1) {
			document.getElementById("age").innerText = "Dark Age";
			document.getElementById("next_age_text2").innerText = "Age: ";
			document.getElementById("next_age").innerText = Math.floor(Number(localStorage.getItem("age")) + 1);
			document.getElementById("age_img").style.backgroundImage = "url('images/age_1_icon.png')";
			document.getElementById("next_age_text").innerText = "500 age points to next age";
		} else if (localStorage.getItem("age") == 2) {
			document.getElementById("age").innerText = "Feudal Age";
			document.getElementById("next_age_text2").innerText = "Age: ";
			document.getElementById("next_age").innerText = Math.floor(Number(localStorage.getItem("age")) + 1);
			document.getElementById("age_img").style.backgroundImage = "url('images/age_2_icon.png')";
			document.getElementById("next_age_text").innerText = "1500 age points to next age";
		} else if (localStorage.getItem("age") == 3) {
			document.getElementById("age").innerText = "Castle Age";
			document.getElementById("next_age_text2").innerText = "Age: ";
			document.getElementById("next_age").innerText = Math.floor(Number(localStorage.getItem("age")) + 1);
			document.getElementById("age_img").style.backgroundImage = "url('images/age_3_icon.png')";
			document.getElementById("next_age_text").innerText = "2500 age points to next age";
		} else if (localStorage.getItem("age") == 4) {
			document.getElementById("age").innerText = "Imperial Age";
			document.getElementById("next_age_text2").innerText = "Age: ";
			document.getElementById("next_age").innerText = Math.floor(Number(localStorage.getItem("age")) + 1);
			document.getElementById("age_img").style.backgroundImage = "url('images/age_4_icon.png')";
			document.getElementById("next_age_text").innerText = "5000 age points to next age";
		}
		
		document.getElementById("age_1_text").innerText = "Age";
		document.getElementById("age_2_text").innerText = "Age:";
		document.getElementById("age_3_text").innerText = "Age: ";
		document.getElementById("age_points_text").innerText = "Age Points: ";
		document.getElementById("economy_text").innerText = "Economy";
		document.getElementById("food_hour_text").innerText = " food/hour";
		document.getElementById("wood_hour_text").innerText = " wood/hour";
		document.getElementById("gold_hour_text").innerText = " gold/hour";
		document.getElementById("diamond_hour_text").innerText = " diamond/hour";
		document.getElementById("food_1_text").innerText = "Food: ";
		document.getElementById("food_2_text").innerText = " Food";
		document.getElementById("food_3_text").innerText = " Food";
		document.getElementById("food_4_text").innerText = "Food:";
		document.getElementById("wood_1_text").innerText = "Wood: ";
		document.getElementById("wood_2_text").innerText = "Wood:";
		document.getElementById("gold_1_text").innerText = "Gold: ";
		document.getElementById("gold_2_text").innerText = "Gold:";
		document.getElementById("kingdom_center_1_text").innerText = "Kingdom Center: ";
		document.getElementById("kingdom_center_2_text").innerText = "Kingdom Center: ";
		document.getElementById("kingdom_center_3_text").innerText = "Kingdom Center: ";
		document.getElementById("colonies_1_text").innerText = "Colonies: ";
		document.getElementById("colonies_2_text").innerText = "Colonies: ";
		document.getElementById("colonies_3_text").innerText = "Colonies: ";
		document.getElementById("alliance_text").innerText = "Alliance: ";
		document.getElementById("diamond_text").innerText = "Diamond: ";
		document.getElementById("cities_1_text").innerText = "Cities: ";
		document.getElementById("cities_2_text").innerText = "Cities: ";
		document.getElementById("cities_3_text").innerText = "Cities: ";
		document.getElementById("support_troops_text").innerText = "Support Troops: ";
		document.getElementById("population_text").innerText = "Population";
		document.getElementById("villager_text").innerText = "Villager: ";
		document.getElementById("farmer_text").innerText = "Farmer: ";
		document.getElementById("woodcutter_text").innerText = "Woodcutter: ";
		document.getElementById("gold_miner_text").innerText = "Gold Miner: ";
		document.getElementById("troops_text").innerText = "Troops: ";
		document.getElementById("spies_text").innerText = "Spies: ";
		document.getElementById("storage_limit_text").innerText = "Storage Limit";
	}
	
	document.getElementById("loading").style.display = "none";
}

setInterval(function(){
	
	document.getElementById("net_food_hour").innerText = Math.floor(Number(localStorage.getItem("plus_food")) - Number(localStorage.getItem("minus_food")));
	document.getElementById("plus_food_hour").innerText = Number(localStorage.getItem("plus_food"));
	document.getElementById("minus_food_hour").innerText = Number(localStorage.getItem("minus_food"));
	document.getElementById("net_wood_hour").innerText = Number(localStorage.getItem("plus_wood"));
	document.getElementById("net_gold_hour").innerText = Number(localStorage.getItem("plus_gold"));
	document.getElementById("k_c_gold_hour").innerText = Number(localStorage.getItem("k_c_gold"));
	document.getElementById("c_gold_hour").innerText = Number(localStorage.getItem("c_gold"));
	document.getElementById("a_gold_hour").innerText = Number(localStorage.getItem("a_gold"));
	document.getElementById("net_diamond_hour").innerText = localStorage.getItem("plus_diamond");
	document.getElementById("c_diamond_hour").innerText = localStorage.getItem("plus_diamond");
	document.getElementById("total_villager").innerText = Math.floor(Number(localStorage.getItem("farmer_have")) + Number(localStorage.getItem("woodcutter_have")) + Number(localStorage.getItem("gold_miner_have")));
	document.getElementById("total_farmer").innerText = Number(localStorage.getItem("farmer_have"));
	document.getElementById("total_woodcutter").innerText = Number(localStorage.getItem("woodcutter_have"));
	document.getElementById("total_gold_miner").innerText = Number(localStorage.getItem("gold_miner_have"));
	document.getElementById("total_troops").innerText = Math.floor(Number(localStorage.getItem("total_k_c_troops")) + Number(localStorage.getItem("total_c1_troops")) + Number(localStorage.getItem("total_c2_troops")) + Number(localStorage.getItem("total_s_t_troops")));
	document.getElementById("total_k_c_troops").innerText = Number(localStorage.getItem("total_k_c_troops"));
	document.getElementById("total_c1_troops").innerText = Number(localStorage.getItem("total_c1_troops"));
	document.getElementById("total_c2_troops").innerText = Number(localStorage.getItem("total_c2_troops"));
	document.getElementById("total_s_t_troops").innerText = Number(localStorage.getItem("total_s_t_troops"));
	document.getElementById("total_spy").innerText = Number(localStorage.getItem("spy_have"));
	document.getElementById("total_k_c_spy").innerText = Number(localStorage.getItem("total_k_c_spy"));
	document.getElementById("total_c1_spy").innerText = Number(localStorage.getItem("total_c1_spy"));
	document.getElementById("total_c2_spy").innerText = Number(localStorage.getItem("total_c2_spy"));
	document.getElementById("now_age").innerText = localStorage.getItem("age");
	
	if (localStorage.getItem("age") == 1) {	
	document.getElementById("now_food").innerText = "10K";
	document.getElementById("now_wood").innerText = "10K";
	document.getElementById("now_gold").innerText = "100K";
	document.getElementById("next_food").innerText = "30K";
	document.getElementById("next_wood").innerText = "30K";
	} else if (localStorage.getItem("age") == 2) {
	document.getElementById("now_food").innerText = "30K";
	document.getElementById("now_wood").innerText = "30K";
	document.getElementById("now_gold").innerText = "-";
	document.getElementById("next_food").innerText = "60K";
	document.getElementById("next_wood").innerText = "60K";
	} else if (localStorage.getItem("age") == 3) {
	document.getElementById("now_food").innerText = "60K";
	document.getElementById("now_wood").innerText = "60K";
	document.getElementById("now_gold").innerText = "-";
	document.getElementById("next_food").innerText = "120K";
	document.getElementById("next_wood").innerText = "120K";
	} else if (localStorage.getItem("age") == 4) {
	document.getElementById("now_food").innerText = "120K";
	document.getElementById("now_wood").innerText = "120K";
	document.getElementById("now_gold").innerText = "-";
	document.getElementById("next_food").innerText = "150K";
	document.getElementById("next_wood").innerText = "150K";
	} else if (localStorage.getItem("age") == 5) {
	document.getElementById("now_food").innerText = "150K";
	document.getElementById("now_wood").innerText = "150K";
	document.getElementById("now_gold").innerText = "-";
	document.getElementById("next_food").innerText = "-";
	document.getElementById("next_wood").innerText = "-";
	}
	
}, 10);

setInterval(function() {
	localStorage.setItem("k_c_gold", Math.floor(((Number(localStorage.getItem("gold_miner_level")) * 1) * Number(localStorage.getItem("gold_miner_have"))) + (10 * Number(localStorage.getItem("gold_miner_have")))));
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
  var timer_gold = Math.floor(Number(gold) * Number(localStorage.getItem("plus_gold")));
  var gold_reward = Math.floor(Number(timer_gold) + 10000000 - Number(localStorage.getItem("gold_cash")) + Number(localStorage.getItem("last_gold_cash")));
  localStorage.setItem("gold", gold_reward);
  
  var food = Math.floor((currentTime - localStorage.getItem("food_timer")) / 3600000);
  var timer_food = Math.floor(Number(food) * (Number(localStorage.getItem("plus_food")) - Number(localStorage.getItem("minus_food"))));
  var food_reward = Math.floor(Number(timer_food) + 10000000 - Number(localStorage.getItem("food_cash")) + Number(localStorage.getItem("last_food_cash")));
  localStorage.setItem("food", food_reward);
  
  var wood = Math.floor((currentTime - localStorage.getItem("wood_timer")) / 3600000);
  var timer_wood = Math.floor(Number(wood) * Number(localStorage.getItem("plus_wood")));
  var wood_reward = Math.floor(Number(timer_wood) + 10000000 - Number(localStorage.getItem("wood_cash")) + Number(localStorage.getItem("last_wood_cash")));
  localStorage.setItem("wood", wood_reward);
  
}

setInterval(money, 20);

/* defense bonus */

setInterval(function(){
	
	var results = (localStorage.getItem("castle_level") * 2) + (localStorage.getItem("wall_level") * 2) + ((Number(localStorage.getItem("watchtower_level")) * 0.1 + 1) * localStorage.getItem("watchtower_have"));
	results = Math.round(results * 100) / 100;
	localStorage.setItem("defense_bonus", results);
	
}, 10);