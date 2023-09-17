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
	document.getElementById("plus_food_hour").innerText = localStorage.getItem("plus_food");
	document.getElementById("minus_food_hour").innerText = localStorage.getItem("minus_food");
	document.getElementById("net_wood_hour").innerText = localStorage.getItem("plus_wood");
	document.getElementById("net_gold_hour").innerText = Number(localStorage.getItem("plus_gold"));
	document.getElementById("k_c_gold_hour").innerText = localStorage.getItem("k_c_gold");
	document.getElementById("c_gold_hour").innerText = localStorage.getItem("c_gold");
	document.getElementById("a_gold_hour").innerText = localStorage.getItem("a_gold");
	document.getElementById("net_diamond_hour").innerText = localStorage.getItem("plus_diamond");
	document.getElementById("c_diamond_hour").innerText = localStorage.getItem("plus_diamond");
	document.getElementById("total_villager").innerText = Math.floor(Number(localStorage.getItem("t_farmer")) + Number(localStorage.getItem("t_woodcutter")) + Number(localStorage.getItem("t_goldminer")));
	document.getElementById("total_farmer").innerText = localStorage.getItem("t_farmer");
	document.getElementById("total_woodcutter").innerText = localStorage.getItem("t_woodcutter");
	document.getElementById("total_gold_miner").innerText = localStorage.getItem("t_goldminer");
	document.getElementById("total_troops").innerText = Math.floor(Number(localStorage.getItem("total_k_c_troops")) + Number(localStorage.getItem("total_c1_troops")) + Number(localStorage.getItem("total_c2_troops")) + Number(localStorage.getItem("total_s_t_troops")));
	document.getElementById("total_k_c_troops").innerText = localStorage.getItem("total_k_c_troops");
	document.getElementById("total_c1_troops").innerText = localStorage.getItem("total_c1_troops");
	document.getElementById("total_c2_troops").innerText = localStorage.getItem("total_c2_troops");
	document.getElementById("total_s_t_troops").innerText = localStorage.getItem("total_s_t_troops");
	document.getElementById("total_spy").innerText = localStorage.getItem("total_s_t_troops");
	document.getElementById("total_k_c_spy").innerText = localStorage.getItem("total_k_c_spy");
	document.getElementById("total_c1_spy").innerText = localStorage.getItem("total_c1_spy");
	document.getElementById("total_c2_spy").innerText = localStorage.getItem("total_c2_spy");
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