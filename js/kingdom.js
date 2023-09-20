function page_save() {
	
	if (localStorage.getItem("local_lan") == "en") {
		document.getElementById("buy_diamond_text").innerText = "Buy Diamond!";
		document.getElementById("settings_text").innerText = "Settings";
		document.getElementById("world_text").innerText = "World: ";
		document.getElementById("king_name_text").innerText = "King Name";
		document.getElementById("save_text").innerText = "Save";
		document.getElementById("king_name_bottom_text").innerText = "King Names maximum of 12 characters";
		document.getElementById("language_text").innerText = "Language";
		document.getElementById("language2_text").innerText = "Language";
		document.getElementById("language").innerText = "English";
		document.getElementById("lan_img").style.backgroundImage = "url('images/united_kingdom_flag_icon.png')";
		document.getElementById("fmenu_1_text").innerText = "Military";
		document.getElementById("fmenu_2_text").innerText = "Logs";
		document.getElementById("fmenu_3_text").innerText = "Map";
		document.getElementById("fmenu_4_text").innerText = "Allies";
		document.getElementById("fmenu_5_text").innerText = "Leaderboard";
		/*
		document.getElementById("bonus_text").innerText = "Bonus";
		document.getElementById("quests_text").innerText = "Quests";
		*/
		
	}
	
	document.getElementById("loading").style.display = "none";
}

/* Kingdom */

function set_king_name() {
	var king_n = document.getElementById("king_name_input").value;
	localStorage.setItem("king_name", king_n);
	localStorage.setItem("set_kingn", 1);
}

setInterval(function(){
	if (localStorage.getItem("set_kingn") == 1) {
		document.getElementById("king_name_set").style.display = "none";
		document.getElementById("king_name_bottom").style.display = "none";
		document.getElementById("king_n_text").style.display = "block";
		document.getElementById("king_n_text").innerText = localStorage.getItem("king_name");
		}
		
		document.getElementById("world").innerText = localStorage.getItem("worlds");
}, 100);

/* Castle */

setInterval(function(){
	if (localStorage.getItem("castle_upper") == "on" || localStorage.getItem("knight_upper") == "on" || localStorage.getItem("imperial_spearman_upper") == "on" || localStorage.getItem("imperial_spearman_producer") == "on" || localStorage.getItem("knight_producer") == "on") {
		
		if (localStorage.getItem("castle_upper") == "on") {
			
			document.getElementById("castle_timer").style.display = "block";
		
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
		
		if (localStorage.getItem("castle_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("castle_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("castle_upper");
		    localStorage.removeItem("castle_up_time");
		
		    localStorage.setItem("castle_level", Math.floor(Number(localStorage.getItem("castle_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 50));
		
		    document.getElementById("castle_timer").style.display = "none";
		
			}
		}
		
		} else if (localStorage.getItem("knight_upper") == "on") {
			
			document.getElementById("castle_timer").style.display = "block";
		
		var c_ms = Math.floor(Number(localStorage.getItem("knight_up_time")) - Date.now());
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
		
		if (localStorage.getItem("knight_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("knight_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("knight_upper");
		    localStorage.removeItem("knight_up_time");
		
		    localStorage.setItem("knight_level", Math.floor(Number(localStorage.getItem("knight_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 6));
		
		    document.getElementById("castle_timer").style.display = "none";
		
			}
		 }
		
		} else if (localStorage.getItem("imperial_spearman_upper") == "on") {
			
			document.getElementById("castle_timer").style.display = "block";
		
		var c_ms = Math.floor(Number(localStorage.getItem("imperial_spearman_up_time")) - Date.now());
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
		
		if (localStorage.getItem("imperial_spearman_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("imperial_spearman_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("imperial_spearman_upper");
		    localStorage.removeItem("imperial_spearman_up_time");
		
		    localStorage.setItem("imperial_spearman_level", Math.floor(Number(localStorage.getItem("imperial_spearman_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 6));
		
		    document.getElementById("castle_timer").style.display = "none";
		
			}
		 }
		
		} else if (localStorage.getItem("imperial_spearman_producer") == "on") {
			
			document.getElementById("castle_timer").style.display = "block";
		
		var c_ms = Math.floor(Number(localStorage.getItem("imperial_spearman_produce_time")) - Date.now());
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
		
		if (localStorage.getItem("imperial_spearman_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("imperial_spearman_produce_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("imperial_spearman_producer");
		    localStorage.removeItem("imperial_spearman_produce_time");
		
		    localStorage.setItem("imperial_spearman_have", Math.floor(Number(localStorage.getItem("imperial_spearman_have")) + Number(localStorage.getItem("imperial_spearman_trained"))));
			localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) + Number(localStorage.getItem("imperial_spearman_trained"))));
			localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) + Number(localStorage.getItem("imperial_spearman_trained"))));
			
			localStorage.removeItem("imperial_spearman_trained");
		
		    document.getElementById("castle_timer").style.display = "none";
		
			}
		 }
		
		} else if (localStorage.getItem("knight_producer") == "on") {
			
			document.getElementById("castle_timer").style.display = "block";
		
		var c_ms = Math.floor(Number(localStorage.getItem("knight_produce_time")) - Date.now());
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
		
		if (localStorage.getItem("knight_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("knight_produce_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("knight_producer");
		    localStorage.removeItem("knight_produce_time");
		
		    localStorage.setItem("knight_have", Math.floor(Number(localStorage.getItem("knight_have")) + Number(localStorage.getItem("knight_trained"))));
			localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) + Number(localStorage.getItem("knight_trained"))));
			localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) + Number(localStorage.getItem("knight_trained"))));
			
			localStorage.removeItem("knight_trained");
		
		    document.getElementById("castle_timer").style.display = "none";
		
			}
		 }
		
		}
		
	}
}, 10);

/* academy */

setInterval(function(){
	
	if (localStorage.getItem("farming_upper") == "on" || localStorage.getItem("lumbering_upper") == "on" || localStorage.getItem("mining_upper") == "on" || localStorage.getItem("blacksmithing_upper") == "on" || localStorage.getItem("riding_upper") == "on" || localStorage.getItem("geometry_upper") == "on" || localStorage.getItem("cartography_upper") == "on" || localStorage.getItem("spying_upper") == "on" || localStorage.getItem("masonry_upper") == "on") {
		
		if (localStorage.getItem("farming_upper") == "on") {
			
			document.getElementById("academy_timer").style.display = "block";
		
		var c_ms = Math.floor(Number(localStorage.getItem("farming_up_time")) - Date.now());
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
		
		document.getElementById("academy_up_d").innerText = c_d;
		document.getElementById("academy_up_h").innerText = c_h;
		document.getElementById("academy_up_m").innerText = c_m;
		document.getElementById("academy_up_s").innerText = c_s;
		
		if (localStorage.getItem("farming_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("farming_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("farming_upper");
		    localStorage.removeItem("farming_up_time");
		
		    localStorage.setItem("farming_level", Math.floor(Number(localStorage.getItem("farming_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
		    document.getElementById("academy_timer").style.display = "none";
		
			}
		 }
		
		} else if (localStorage.getItem("lumbering_upper") == "on") {
			
			document.getElementById("academy_timer").style.display = "block";
		
		var c_ms = Math.floor(Number(localStorage.getItem("lumbering_up_time")) - Date.now());
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
		
		document.getElementById("academy_up_d").innerText = c_d;
		document.getElementById("academy_up_h").innerText = c_h;
		document.getElementById("academy_up_m").innerText = c_m;
		document.getElementById("academy_up_s").innerText = c_s;
		
		if (localStorage.getItem("lumbering_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("lumbering_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("lumbering_upper");
		    localStorage.removeItem("lumbering_up_time");
		
		    localStorage.setItem("lumbering_level", Math.floor(Number(localStorage.getItem("lumbering_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
		    document.getElementById("academy_timer").style.display = "none";
		
			}
		 }
		
		} else if (localStorage.getItem("mining_upper") == "on") {
			
			document.getElementById("academy_timer").style.display = "block";
		
		var c_ms = Math.floor(Number(localStorage.getItem("mining_up_time")) - Date.now());
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
		
		document.getElementById("academy_up_d").innerText = c_d;
		document.getElementById("academy_up_h").innerText = c_h;
		document.getElementById("academy_up_m").innerText = c_m;
		document.getElementById("academy_up_s").innerText = c_s;
		
		if (localStorage.getItem("mining_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("mining_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("mining_upper");
		    localStorage.removeItem("mining_up_time");
		
		    localStorage.setItem("mining_level", Math.floor(Number(localStorage.getItem("mining_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
		    document.getElementById("academy_timer").style.display = "none";
		
			}
		 }
		
		} else if (localStorage.getItem("blacksmithing_upper") == "on") {
			
			document.getElementById("academy_timer").style.display = "block";
		
		var c_ms = Math.floor(Number(localStorage.getItem("blacksmithing_up_time")) - Date.now());
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
		
		document.getElementById("academy_up_d").innerText = c_d;
		document.getElementById("academy_up_h").innerText = c_h;
		document.getElementById("academy_up_m").innerText = c_m;
		document.getElementById("academy_up_s").innerText = c_s;
		
		if (localStorage.getItem("blacksmithing_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("blacksmithing_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("blacksmithing_upper");
		    localStorage.removeItem("blacksmithing_up_time");
		
		    localStorage.setItem("blacksmithing_level", Math.floor(Number(localStorage.getItem("blacksmithing_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
		    document.getElementById("academy_timer").style.display = "none";
		
			}
		 }
		
		} else if (localStorage.getItem("riding_upper") == "on") {
			
			document.getElementById("academy_timer").style.display = "block";
		
		var c_ms = Math.floor(Number(localStorage.getItem("riding_up_time")) - Date.now());
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
		
		document.getElementById("academy_up_d").innerText = c_d;
		document.getElementById("academy_up_h").innerText = c_h;
		document.getElementById("academy_up_m").innerText = c_m;
		document.getElementById("academy_up_s").innerText = c_s;
		
		if (localStorage.getItem("riding_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("riding_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("riding_upper");
		    localStorage.removeItem("riding_up_time");
		
		    localStorage.setItem("riding_level", Math.floor(Number(localStorage.getItem("riding_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
		    document.getElementById("academy_timer").style.display = "none";
		
			}
		 }
		
		} else if (localStorage.getItem("geometry_upper") == "on") {
			
			document.getElementById("academy_timer").style.display = "block";
		
		var c_ms = Math.floor(Number(localStorage.getItem("geometry_up_time")) - Date.now());
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
		
		document.getElementById("academy_up_d").innerText = c_d;
		document.getElementById("academy_up_h").innerText = c_h;
		document.getElementById("academy_up_m").innerText = c_m;
		document.getElementById("academy_up_s").innerText = c_s;
		
		if (localStorage.getItem("geometry_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("geometry_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("geometry_upper");
		    localStorage.removeItem("geometry_up_time");
		
		    localStorage.setItem("geometry_level", Math.floor(Number(localStorage.getItem("geometry_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
		    document.getElementById("academy_timer").style.display = "none";
		
			}
		 }
		
		} else if (localStorage.getItem("cartography_upper") == "on") {
			
			document.getElementById("academy_timer").style.display = "block";
		
		var c_ms = Math.floor(Number(localStorage.getItem("cartography_up_time")) - Date.now());
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
		
		document.getElementById("academy_up_d").innerText = c_d;
		document.getElementById("academy_up_h").innerText = c_h;
		document.getElementById("academy_up_m").innerText = c_m;
		document.getElementById("academy_up_s").innerText = c_s;
		
		if (localStorage.getItem("cartography_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("cartography_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("cartography_upper");
		    localStorage.removeItem("cartography_up_time");
		
		    localStorage.setItem("cartography_level", Math.floor(Number(localStorage.getItem("cartography_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
		    document.getElementById("academy_timer").style.display = "none";
		
			}
		 }
		
		} else if (localStorage.getItem("spying_upper") == "on") {
			
			document.getElementById("academy_timer").style.display = "block";
		
		var c_ms = Math.floor(Number(localStorage.getItem("spying_up_time")) - Date.now());
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
		
		document.getElementById("academy_up_d").innerText = c_d;
		document.getElementById("academy_up_h").innerText = c_h;
		document.getElementById("academy_up_m").innerText = c_m;
		document.getElementById("academy_up_s").innerText = c_s;
		
		if (localStorage.getItem("spying_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("spying_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("spying_upper");
		    localStorage.removeItem("spying_up_time");
		
		    localStorage.setItem("spying_level", Math.floor(Number(localStorage.getItem("spying_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
		    document.getElementById("academy_timer").style.display = "none";
		
			}
		 }
		
		} else if (localStorage.getItem("masonry_upper") == "on") {
			
			document.getElementById("academy_timer").style.display = "block";
		
		var c_ms = Math.floor(Number(localStorage.getItem("masonry_up_time")) - Date.now());
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
		
		document.getElementById("academy_up_d").innerText = c_d;
		document.getElementById("academy_up_h").innerText = c_h;
		document.getElementById("academy_up_m").innerText = c_m;
		document.getElementById("academy_up_s").innerText = c_s;
		
		if (localStorage.getItem("masonry_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("masonry_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("masonry_upper");
		    localStorage.removeItem("masonry_up_time");
		
		    localStorage.setItem("masonry_level", Math.floor(Number(localStorage.getItem("masonry_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
		    document.getElementById("academy_timer").style.display = "none";
		
			}
		 }
		
		}
		
	}
	
}, 10);

/* wall */

setInterval(function() {
	if (localStorage.getItem("wall_upper") == "on" || localStorage.getItem("watchtower_upper") == "on" || localStorage.getItem("watchtower_producer") == "on") {
		
		if (localStorage.getItem("wall_upper") == "on") {
			
			document.getElementById("wall_timer").style.display = "block";
		
		var c_ms = Math.floor(Number(localStorage.getItem("wall_up_time")) - Date.now());
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
		
		document.getElementById("wall_up_d").innerText = c_d;
		document.getElementById("wall_up_h").innerText = c_h;
		document.getElementById("wall_up_m").innerText = c_m;
		document.getElementById("wall_up_s").innerText = c_s;
		
		if (localStorage.getItem("wall_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("wall_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("wall_upper");
		    localStorage.removeItem("wall_up_time");
		
		    localStorage.setItem("wall_level", Math.floor(Number(localStorage.getItem("wall_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 50));
		
		    document.getElementById("wall_timer").style.display = "none";
		
			}
		 }
		
		} else if (localStorage.getItem("watchtower_upper") == "on") {
			
			document.getElementById("wall_timer").style.display = "block";
		
		var c_ms = Math.floor(Number(localStorage.getItem("watchtower_up_time")) - Date.now());
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
		
		document.getElementById("wall_up_d").innerText = c_d;
		document.getElementById("wall_up_h").innerText = c_h;
		document.getElementById("wall_up_m").innerText = c_m;
		document.getElementById("wall_up_s").innerText = c_s;
		
		if (localStorage.getItem("watchtower_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("watchtower_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("watchtower_upper");
		    localStorage.removeItem("watchtower_up_time");
		
		    localStorage.setItem("watchtower_level", Math.floor(Number(localStorage.getItem("watchtower_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 40));
		
		    document.getElementById("wall_timer").style.display = "none";
		
			}
		 }
		
		} else if (localStorage.getItem("watchtower_producer") == "on") {
			
			document.getElementById("wall_timer").style.display = "block";
		
		var c_ms = Math.floor(Number(localStorage.getItem("watchtower_produce_time")) - Date.now());
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
		
		document.getElementById("wall_up_d").innerText = c_d;
		document.getElementById("wall_up_h").innerText = c_h;
		document.getElementById("wall_up_m").innerText = c_m;
		document.getElementById("wall_up_s").innerText = c_s;
		
		if (localStorage.getItem("watchtower_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("watchtower_produce_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("watchtower_producer");
		    localStorage.removeItem("watchtower_produce_time");
		
		    localStorage.setItem("watchtower_have", Math.floor(Number(localStorage.getItem("watchtower_have")) + Number(localStorage.getItem("watchtower_trained"))));
		
		    document.getElementById("wall_timer").style.display = "none";
		
			}
		 }
		
		}
		
	}

}, 10);

/* workshop */

setInterval(function() {
	if (localStorage.getItem("ballista_upper") == "on" || localStorage.getItem("ballista_producer") == "on" || localStorage.getItem("onager_upper") == "on" || localStorage.getItem("onager_producer") == "on" || localStorage.getItem("cannon_upper") == "on" || localStorage.getItem("cannon_producer") == "on") {
		
		if (localStorage.getItem("ballista_upper") == "on") {
			
			document.getElementById("workshop_timer").style.display = "block";
		
		var c_ms = Math.floor(Number(localStorage.getItem("ballista_up_time")) - Date.now());
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
		
		document.getElementById("workshop_up_d").innerText = c_d;
		document.getElementById("workshop_up_h").innerText = c_h;
		document.getElementById("workshop_up_m").innerText = c_m;
		document.getElementById("workshop_up_s").innerText = c_s;
		
		if (localStorage.getItem("ballista_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("ballista_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("ballista_upper");
		    localStorage.removeItem("ballista_up_time");
		
		    localStorage.setItem("ballista_level", Math.floor(Number(localStorage.getItem("ballista_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 40));
		
		    document.getElementById("workshop_timer").style.display = "none";
		
			}
		 }
		
		} else if (localStorage.getItem("ballista_producer") == "on") {
			
			document.getElementById("workshop_timer").style.display = "block";
		
		var c_ms = Math.floor(Number(localStorage.getItem("ballista_produce_time")) - Date.now());
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
		
		document.getElementById("workshop_up_d").innerText = c_d;
		document.getElementById("workshop_up_h").innerText = c_h;
		document.getElementById("workshop_up_m").innerText = c_m;
		document.getElementById("workshop_up_s").innerText = c_s;
		
		if (localStorage.getItem("ballista_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("ballista_produce_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("ballista_producer");
		    localStorage.removeItem("ballista_produce_time");
		
		    localStorage.setItem("ballista_have", Math.floor(Number(localStorage.getItem("ballista_have")) + Number(localStorage.getItem("ballista_trained"))));
			localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) + Number(localStorage.getItem("ballista_trained"))));
			localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) + Number(localStorage.getItem("ballista_trained"))));
		
		    document.getElementById("workshop_timer").style.display = "none";
		
			}
		 }
		
		} else if (localStorage.getItem("onager_upper") == "on") {
			
			document.getElementById("workshop_timer").style.display = "block";
		
		var c_ms = Math.floor(Number(localStorage.getItem("onager_up_time")) - Date.now());
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
		
		document.getElementById("workshop_up_d").innerText = c_d;
		document.getElementById("workshop_up_h").innerText = c_h;
		document.getElementById("workshop_up_m").innerText = c_m;
		document.getElementById("workshop_up_s").innerText = c_s;
		
		if (localStorage.getItem("onager_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("onager_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("onager_upper");
		    localStorage.removeItem("onager_up_time");
		
		    localStorage.setItem("onager_level", Math.floor(Number(localStorage.getItem("onager_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 40));
		
		    document.getElementById("workshop_timer").style.display = "none";
		
			}
		 }
		
		} else if (localStorage.getItem("onager_producer") == "on") {
			
			document.getElementById("workshop_timer").style.display = "block";
		
		var c_ms = Math.floor(Number(localStorage.getItem("onager_produce_time")) - Date.now());
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
		
		document.getElementById("workshop_up_d").innerText = c_d;
		document.getElementById("workshop_up_h").innerText = c_h;
		document.getElementById("workshop_up_m").innerText = c_m;
		document.getElementById("workshop_up_s").innerText = c_s;
		
		if (localStorage.getItem("onager_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("onager_produce_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("onager_producer");
		    localStorage.removeItem("onager_produce_time");
		
		    localStorage.setItem("onager_have", Math.floor(Number(localStorage.getItem("onager_have")) + Number(localStorage.getItem("onager_trained"))));
			localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) + Number(localStorage.getItem("onager_trained"))));
			localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) + Number(localStorage.getItem("onager_trained"))));
		
		    document.getElementById("workshop_timer").style.display = "none";
		
			}
		 }
		
		} else if (localStorage.getItem("cannon_upper") == "on") {
			
			document.getElementById("workshop_timer").style.display = "block";
		
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
		
		document.getElementById("workshop_up_d").innerText = c_d;
		document.getElementById("workshop_up_h").innerText = c_h;
		document.getElementById("workshop_up_m").innerText = c_m;
		document.getElementById("workshop_up_s").innerText = c_s;
		
		if (localStorage.getItem("cannon_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("cannon_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("cannon_upper");
		    localStorage.removeItem("cannon_up_time");
		
		    localStorage.setItem("cannon_level", Math.floor(Number(localStorage.getItem("cannon_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 40));
		
		    document.getElementById("workshop_timer").style.display = "none";
		
			}
		 }
		
		} else if (localStorage.getItem("cannon_producer") == "on") {
			
			document.getElementById("workshop_timer").style.display = "block";
		
		var c_ms = Math.floor(Number(localStorage.getItem("cannon_produce_time")) - Date.now());
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
		
		document.getElementById("workshop_up_d").innerText = c_d;
		document.getElementById("workshop_up_h").innerText = c_h;
		document.getElementById("workshop_up_m").innerText = c_m;
		document.getElementById("workshop_up_s").innerText = c_s;
		
		if (localStorage.getItem("cannon_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("cannon_produce_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("cannon_producer");
		    localStorage.removeItem("cannon_produce_time");
		
		    localStorage.setItem("cannon_have", Math.floor(Number(localStorage.getItem("cannon_have")) + Number(localStorage.getItem("cannon_trained"))));
			localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) + Number(localStorage.getItem("cannon_trained"))));
			localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) + Number(localStorage.getItem("cannon_trained"))));
		
		    document.getElementById("workshop_timer").style.display = "none";
		
			}
		 }
		
		}
		
	}

}, 10);

/* market */

setInterval(function() {
	if (localStorage.getItem("trade_cart_upper") == "on" || localStorage.getItem("trade_cart_producer") == "on") {
		
		if (localStorage.getItem("trade_cart_upper") == "on") {
			
			document.getElementById("market_timer").style.display = "block";
		
		var c_ms = Math.floor(Number(localStorage.getItem("trade_cart_up_time")) - Date.now());
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
		
		document.getElementById("market_up_d").innerText = c_d;
		document.getElementById("market_up_h").innerText = c_h;
		document.getElementById("market_up_m").innerText = c_m;
		document.getElementById("market_up_s").innerText = c_s;
		
		if (localStorage.getItem("trade_cart_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("trade_cart_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("trade_cart_upper");
		    localStorage.removeItem("trade_cart_up_time");
		
		    localStorage.setItem("trade_cart_level", Math.floor(Number(localStorage.getItem("trade_cart_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 50));
		
		    document.getElementById("market_timer").style.display = "none";
		
			}
		 }
		
		} else if (localStorage.getItem("trade_cart_producer") == "on") {
			
			document.getElementById("market_timer").style.display = "block";
		
		var c_ms = Math.floor(Number(localStorage.getItem("trade_cart_produce_time")) - Date.now());
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
		
		document.getElementById("market_up_d").innerText = c_d;
		document.getElementById("market_up_h").innerText = c_h;
		document.getElementById("market_up_m").innerText = c_m;
		document.getElementById("market_up_s").innerText = c_s;
		
		if (localStorage.getItem("trade_cart_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("trade_cart_produce_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("trade_cart_producer");
		    localStorage.removeItem("trade_cart_produce_time");
		
		    localStorage.setItem("trade_cart_have", Math.floor(Number(localStorage.getItem("trade_cart_have")) + Number(localStorage.getItem("trade_cart_trained"))));
		
		    document.getElementById("market_timer").style.display = "none";
		
			}
		 }
		
		}
		
	}
	
}, 10);

/* barracks */

setInterval(function() {
	if (localStorage.getItem("spearman_upper") == "on" || localStorage.getItem("spearman_producer") == "on" || localStorage.getItem("archer_upper") == "on" || localStorage.getItem("archer_producer") == "on" || localStorage.getItem("spy_upper") == "on" || localStorage.getItem("spy_producer") == "on" || localStorage.getItem("cataphract_upper") == "on" || localStorage.getItem("cataphract_producer") == "on" || localStorage.getItem("swordsmen_upper") == "on" || localStorage.getItem("swordsmen_producer") == "on" || localStorage.getItem("crossbowmen_upper") == "on" || localStorage.getItem("crossbowmen_producer") == "on" || localStorage.getItem("arquebusiers_upper") == "on" || localStorage.getItem("arquebusiers_producer") == "on") {
		
		if (localStorage.getItem("spearman_upper") == "on") {
			
			document.getElementById("barracks_timer").style.display = "block";
		
		var c_ms = Math.floor(Number(localStorage.getItem("spearman_up_time")) - Date.now());
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
		
		document.getElementById("barracks_up_d").innerText = c_d;
		document.getElementById("barracks_up_h").innerText = c_h;
		document.getElementById("barracks_up_m").innerText = c_m;
		document.getElementById("barracks_up_s").innerText = c_s;
		
		if (localStorage.getItem("spearman_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("spearman_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("spearman_upper");
		    localStorage.removeItem("spearman_up_time");
		
		    localStorage.setItem("spearman_level", Math.floor(Number(localStorage.getItem("spearman_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 4));
		
		    document.getElementById("barracks_timer").style.display = "none";
		
			}
		 }
		
		} else if (localStorage.getItem("spearman_producer") == "on") {
			
			document.getElementById("barracks_timer").style.display = "block";
		
		var c_ms = Math.floor(Number(localStorage.getItem("spearman_produce_time")) - Date.now());
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
		
		document.getElementById("barracks_up_d").innerText = c_d;
		document.getElementById("barracks_up_h").innerText = c_h;
		document.getElementById("barracks_up_m").innerText = c_m;
		document.getElementById("barracks_up_s").innerText = c_s;
		
		if (localStorage.getItem("spearman_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("spearman_produce_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("spearman_producer");
		    localStorage.removeItem("spearman_produce_time");
		
		    localStorage.setItem("spearman_have", Math.floor(Number(localStorage.getItem("spearman_have")) + Number(localStorage.getItem("spearman_trained"))));
			localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) + Number(localStorage.getItem("spearman_trained"))));
			localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) + Number(localStorage.getItem("spearman_trained"))));
		
		    document.getElementById("barracks_timer").style.display = "none";
		
			}
		 }
		
		} else if (localStorage.getItem("archer_upper") == "on") {
			
			document.getElementById("barracks_timer").style.display = "block";
		
		var c_ms = Math.floor(Number(localStorage.getItem("archer_up_time")) - Date.now());
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
		
		document.getElementById("barracks_up_d").innerText = c_d;
		document.getElementById("barracks_up_h").innerText = c_h;
		document.getElementById("barracks_up_m").innerText = c_m;
		document.getElementById("barracks_up_s").innerText = c_s;
		
		if (localStorage.getItem("archer_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("archer_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("archer_upper");
		    localStorage.removeItem("archer_up_time");
		
		    localStorage.setItem("archer_level", Math.floor(Number(localStorage.getItem("archer_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 4));
		
		    document.getElementById("barracks_timer").style.display = "none";
		
			}
		 }
		
		} else if (localStorage.getItem("archer_producer") == "on") {
			
			document.getElementById("barracks_timer").style.display = "block";
		
		var c_ms = Math.floor(Number(localStorage.getItem("archer_produce_time")) - Date.now());
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
		
		document.getElementById("barracks_up_d").innerText = c_d;
		document.getElementById("barracks_up_h").innerText = c_h;
		document.getElementById("barracks_up_m").innerText = c_m;
		document.getElementById("barracks_up_s").innerText = c_s;
		
		if (localStorage.getItem("archer_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("archer_produce_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("archer_producer");
		    localStorage.removeItem("archer_produce_time");
		
		    localStorage.setItem("archer_have", Math.floor(Number(localStorage.getItem("archer_have")) + Number(localStorage.getItem("archer_trained"))));
			localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) + Number(localStorage.getItem("archer_trained"))));
			localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) + Number(localStorage.getItem("archer_trained"))));
		
		    document.getElementById("barracks_timer").style.display = "none";
		
			}
		 }
		
		} else if (localStorage.getItem("spy_upper") == "on") {
			
			document.getElementById("barracks_timer").style.display = "block";
		
		var c_ms = Math.floor(Number(localStorage.getItem("spy_up_time")) - Date.now());
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
		
		document.getElementById("barracks_up_d").innerText = c_d;
		document.getElementById("barracks_up_h").innerText = c_h;
		document.getElementById("barracks_up_m").innerText = c_m;
		document.getElementById("barracks_up_s").innerText = c_s;
		
		if (localStorage.getItem("spy_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("spy_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("spy_upper");
		    localStorage.removeItem("spy_up_time");
		
		    localStorage.setItem("spy_level", Math.floor(Number(localStorage.getItem("spy_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 4));
		
		    document.getElementById("barracks_timer").style.display = "none";
		
			}
		 }
		
		} else if (localStorage.getItem("spy_producer") == "on") {
			
			document.getElementById("barracks_timer").style.display = "block";
		
		var c_ms = Math.floor(Number(localStorage.getItem("spy_produce_time")) - Date.now());
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
		
		document.getElementById("barracks_up_d").innerText = c_d;
		document.getElementById("barracks_up_h").innerText = c_h;
		document.getElementById("barracks_up_m").innerText = c_m;
		document.getElementById("barracks_up_s").innerText = c_s;
		
		if (localStorage.getItem("spy_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("spy_produce_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("spy_producer");
		    localStorage.removeItem("spy_produce_time");
		
		    localStorage.setItem("spy_have", Math.floor(Number(localStorage.getItem("spy_have")) + Number(localStorage.getItem("spy_trained"))));
			localStorage.setItem("total_k_c_spy", Math.floor(Number(localStorage.getItem("total_k_c_spy")) + Number(localStorage.getItem("spy_trained"))));
			localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) + Number(localStorage.getItem("spy_trained"))));
		
		    document.getElementById("barracks_timer").style.display = "none";
		
			}
		 }
		
		} else if (localStorage.getItem("cataphract_upper") == "on") {
			
			document.getElementById("barracks_timer").style.display = "block";
		
		var c_ms = Math.floor(Number(localStorage.getItem("cataphract_up_time")) - Date.now());
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
		
		document.getElementById("barracks_up_d").innerText = c_d;
		document.getElementById("barracks_up_h").innerText = c_h;
		document.getElementById("barracks_up_m").innerText = c_m;
		document.getElementById("barracks_up_s").innerText = c_s;
		
		if (localStorage.getItem("cataphract_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("cataphract_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("cataphract_upper");
		    localStorage.removeItem("cataphract_up_time");
		
		    localStorage.setItem("cataphract_level", Math.floor(Number(localStorage.getItem("cataphract_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 4));
		
		    document.getElementById("barracks_timer").style.display = "none";
		
			}
		 }
		
		} else if (localStorage.getItem("cataphract_producer") == "on") {
			
			document.getElementById("barracks_timer").style.display = "block";
		
		var c_ms = Math.floor(Number(localStorage.getItem("cataphract_produce_time")) - Date.now());
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
		
		document.getElementById("barracks_up_d").innerText = c_d;
		document.getElementById("barracks_up_h").innerText = c_h;
		document.getElementById("barracks_up_m").innerText = c_m;
		document.getElementById("barracks_up_s").innerText = c_s;
		
		if (localStorage.getItem("cataphract_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("cataphract_produce_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("cataphract_producer");
		    localStorage.removeItem("cataphract_produce_time");
		
		    localStorage.setItem("cataphract_have", Math.floor(Number(localStorage.getItem("cataphract_have")) + Number(localStorage.getItem("cataphract_trained"))));
			localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) + Number(localStorage.getItem("cataphract_trained"))));
			localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) + Number(localStorage.getItem("cataphract_trained"))));
		
		    document.getElementById("barracks_timer").style.display = "none";
		
			}
		 }
		
		} else if (localStorage.getItem("swordsmen_upper") == "on") {
			
			document.getElementById("barracks_timer").style.display = "block";
		
		var c_ms = Math.floor(Number(localStorage.getItem("swordsmen_up_time")) - Date.now());
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
		
		document.getElementById("barracks_up_d").innerText = c_d;
		document.getElementById("barracks_up_h").innerText = c_h;
		document.getElementById("barracks_up_m").innerText = c_m;
		document.getElementById("barracks_up_s").innerText = c_s;
		
		if (localStorage.getItem("swordsmen_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("swordsmen_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("swordsmen_upper");
		    localStorage.removeItem("swordsmen_up_time");
		
		    localStorage.setItem("swordsmen_level", Math.floor(Number(localStorage.getItem("swordsmen_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 4));
		
		    document.getElementById("barracks_timer").style.display = "none";
		
			}
		 }
		
		} else if (localStorage.getItem("swordsmen_producer") == "on") {
			
			document.getElementById("barracks_timer").style.display = "block";
		
		var c_ms = Math.floor(Number(localStorage.getItem("swordsmen_produce_time")) - Date.now());
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
		
		document.getElementById("barracks_up_d").innerText = c_d;
		document.getElementById("barracks_up_h").innerText = c_h;
		document.getElementById("barracks_up_m").innerText = c_m;
		document.getElementById("barracks_up_s").innerText = c_s;
		
		if (localStorage.getItem("swordsmen_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("swordsmen_produce_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("swordsmen_producer");
		    localStorage.removeItem("swordsmen_produce_time");
		
		    localStorage.setItem("swordsmen_have", Math.floor(Number(localStorage.getItem("swordsmen_have")) + Number(localStorage.getItem("swordsmen_trained"))));
			localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) + Number(localStorage.getItem("swordsmen_trained"))));
			localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) + Number(localStorage.getItem("swordsmen_trained"))));
		
		    document.getElementById("barracks_timer").style.display = "none";
		
			}
		 }
		
		} else if (localStorage.getItem("crossbowmen_upper") == "on") {
			
			document.getElementById("barracks_timer").style.display = "block";
		
		var c_ms = Math.floor(Number(localStorage.getItem("crossbowmen_up_time")) - Date.now());
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
		
		document.getElementById("barracks_up_d").innerText = c_d;
		document.getElementById("barracks_up_h").innerText = c_h;
		document.getElementById("barracks_up_m").innerText = c_m;
		document.getElementById("barracks_up_s").innerText = c_s;
		
		if (localStorage.getItem("crossbowmen_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("crossbowmen_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("crossbowmen_upper");
		    localStorage.removeItem("crossbowmen_up_time");
		
		    localStorage.setItem("crossbowmen_level", Math.floor(Number(localStorage.getItem("crossbowmen_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 4));
		
		    document.getElementById("barracks_timer").style.display = "none";
		
			}
		 }
		
		} else if (localStorage.getItem("crossbowmen_producer") == "on") {
			
			document.getElementById("barracks_timer").style.display = "block";
		
		var c_ms = Math.floor(Number(localStorage.getItem("crossbowmen_produce_time")) - Date.now());
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
		
		document.getElementById("barracks_up_d").innerText = c_d;
		document.getElementById("barracks_up_h").innerText = c_h;
		document.getElementById("barracks_up_m").innerText = c_m;
		document.getElementById("barracks_up_s").innerText = c_s;
		
		if (localStorage.getItem("crossbowmen_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("crossbowmen_produce_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("crossbowmen_producer");
		    localStorage.removeItem("crossbowmen_produce_time");
		
		    localStorage.setItem("crossbowmen_have", Math.floor(Number(localStorage.getItem("crossbowmen_have")) + Number(localStorage.getItem("crossbowmen_trained"))));
			localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) + Number(localStorage.getItem("crossbowmen_trained"))));
			localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) + Number(localStorage.getItem("crossbowmen_trained"))));
		
		    document.getElementById("barracks_timer").style.display = "none";
		
			}
		 }
		
		} else if (localStorage.getItem("arquebusiers_upper") == "on") {
			
			document.getElementById("barracks_timer").style.display = "block";
		
		var c_ms = Math.floor(Number(localStorage.getItem("arquebusiers_up_time")) - Date.now());
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
		
		document.getElementById("barracks_up_d").innerText = c_d;
		document.getElementById("barracks_up_h").innerText = c_h;
		document.getElementById("barracks_up_m").innerText = c_m;
		document.getElementById("barracks_up_s").innerText = c_s;
		
		if (localStorage.getItem("arquebusiers_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("arquebusiers_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("arquebusiers_upper");
		    localStorage.removeItem("arquebusiers_up_time");
		
		    localStorage.setItem("arquebusiers_level", Math.floor(Number(localStorage.getItem("arquebusiers_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 4));
		
		    document.getElementById("barracks_timer").style.display = "none";
		
			}
		 }
		
		} else if (localStorage.getItem("arquebusiers_producer") == "on") {
			
			document.getElementById("barracks_timer").style.display = "block";
		
		var c_ms = Math.floor(Number(localStorage.getItem("arquebusiers_produce_time")) - Date.now());
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
		
		document.getElementById("barracks_up_d").innerText = c_d;
		document.getElementById("barracks_up_h").innerText = c_h;
		document.getElementById("barracks_up_m").innerText = c_m;
		document.getElementById("barracks_up_s").innerText = c_s;
		
		if (localStorage.getItem("arquebusiers_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("arquebusiers_produce_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("arquebusiers_producer");
		    localStorage.removeItem("arquebusiers_produce_time");
		
		    localStorage.setItem("arquebusiers_have", Math.floor(Number(localStorage.getItem("arquebusiers_have")) + Number(localStorage.getItem("arquebusiers_trained"))));
			localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) + Number(localStorage.getItem("arquebusiers_trained"))));
			localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) + Number(localStorage.getItem("arquebusiers_trained"))));
		
		    document.getElementById("barracks_timer").style.display = "none";
		
			}
		 }
		
		}
		
	}
	
}, 10);

/* village */

setInterval(function() {
	if (localStorage.getItem("farmer_upper") == "on" || localStorage.getItem("farmer_producer") == "on" || localStorage.getItem("woodcutter_upper") == "on" || localStorage.getItem("woodcutter_producer") == "on" || localStorage.getItem("gold_miner_upper") == "on" || localStorage.getItem("gold_miner_producer") == "on") {
		
		if (localStorage.getItem("farmer_upper") == "on") {
			
			document.getElementById("village_timer").style.display = "block";
		
		var c_ms = Math.floor(Number(localStorage.getItem("farmer_up_time")) - Date.now());
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
		
		document.getElementById("village_up_d").innerText = c_d;
		document.getElementById("village_up_h").innerText = c_h;
		document.getElementById("village_up_m").innerText = c_m;
		document.getElementById("village_up_s").innerText = c_s;
		
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
		
		    document.getElementById("village_timer").style.display = "none";
		
			}
		 }
		
		} else if (localStorage.getItem("farmer_producer") == "on") {
			
			document.getElementById("village_timer").style.display = "block";
		
		var c_ms = Math.floor(Number(localStorage.getItem("farmer_produce_time")) - Date.now());
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
		
		document.getElementById("village_up_d").innerText = c_d;
		document.getElementById("village_up_h").innerText = c_h;
		document.getElementById("village_up_m").innerText = c_m;
		document.getElementById("village_up_s").innerText = c_s;
		
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
		
		    document.getElementById("village_timer").style.display = "none";
		
			}
		 }
		
		} else if (localStorage.getItem("woodcutter_upper") == "on") {
			
			document.getElementById("village_timer").style.display = "block";
		
		var c_ms = Math.floor(Number(localStorage.getItem("woodcutter_up_time")) - Date.now());
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
		
		document.getElementById("village_up_d").innerText = c_d;
		document.getElementById("village_up_h").innerText = c_h;
		document.getElementById("village_up_m").innerText = c_m;
		document.getElementById("village_up_s").innerText = c_s;
		
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
		
		    document.getElementById("village_timer").style.display = "none";
		
			}
		 }
		
		} else if (localStorage.getItem("woodcutter_producer") == "on") {
			
			document.getElementById("village_timer").style.display = "block";
		
		var c_ms = Math.floor(Number(localStorage.getItem("woodcutter_produce_time")) - Date.now());
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
		
		document.getElementById("village_up_d").innerText = c_d;
		document.getElementById("village_up_h").innerText = c_h;
		document.getElementById("village_up_m").innerText = c_m;
		document.getElementById("village_up_s").innerText = c_s;
		
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
		
		    document.getElementById("village_timer").style.display = "none";
		
			}
		 }
		
		} else if (localStorage.getItem("gold_miner_upper") == "on") {
			
			document.getElementById("village_timer").style.display = "block";
		
		var c_ms = Math.floor(Number(localStorage.getItem("gold_miner_up_time")) - Date.now());
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
		
		document.getElementById("village_up_d").innerText = c_d;
		document.getElementById("village_up_h").innerText = c_h;
		document.getElementById("village_up_m").innerText = c_m;
		document.getElementById("village_up_s").innerText = c_s;
		
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
		
		    document.getElementById("village_timer").style.display = "none";
		
			}
		 }
		
		} else if (localStorage.getItem("gold_miner_producer") == "on") {
			
			document.getElementById("village_timer").style.display = "block";
		
		var c_ms = Math.floor(Number(localStorage.getItem("gold_miner_produce_time")) - Date.now());
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
		
		document.getElementById("village_up_d").innerText = c_d;
		document.getElementById("village_up_h").innerText = c_h;
		document.getElementById("village_up_m").innerText = c_m;
		document.getElementById("village_up_s").innerText = c_s;
		
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
		
		    document.getElementById("village_timer").style.display = "none";
		
			}
		 }
		
		}
		
	}
	
}, 10);

/* Money */

var gold_timer = localStorage.getItem("gold_timer");
var food_timer = localStorage.getItem("food_timer");
var wood_timer = localStorage.getItem("wood_timer");
var diamond_timer = localStorage.getItem("diamond_timer");

if (!gold_timer) {
      gold_timer = new Date().getTime();
	  localStorage.setItem("gold_timer", gold_timer);
}

if (!food_timer) {
      food_timer = new Date().getTime();
	  localStorage.setItem("food_timer", food_timer);
}

if (!wood_timer) {
      wood_timer = new Date().getTime();
	  localStorage.setItem("wood_timer", wood_timer);
}

if (!diamond_timer) {
      diamond_timer = new Date().getTime();
	  localStorage.setItem("diamond_timer", diamond_timer);
}

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

setInterval(money, 10);

setInterval(function(){
	document.getElementById("diamond").innerText = formatNumber(Number(localStorage.getItem("diamond")));
	document.getElementById("gold").innerText = formatNumber(Number(localStorage.getItem("gold")));
	document.getElementById("food").innerText = formatNumber(Number(localStorage.getItem("food")));
	document.getElementById("wood").innerText = formatNumber(Number(localStorage.getItem("wood")));
	document.getElementById("age_points").innerText = localStorage.getItem("age_points");
	if (Number(localStorage.getItem("age_points")) >= 500 && Number(localStorage.getItem("age_points")) < 1500) {
		localStorage.setItem("age", 2);
	} else if (Number(localStorage.getItem("age_points")) >= 1500 && Number(localStorage.getItem("age_points")) > 500 && Number(localStorage.getItem("age_points")) < 2500) {
		localStorage.setItem("age", 3);
	} else if (Number(localStorage.getItem("age_points")) >= 2500 && Number(localStorage.getItem("age_points")) > 1500 && Number(localStorage.getItem("age_points")) < 5000) {
		localStorage.setItem("age", 4);
	} else if (Number(localStorage.getItem("age_points")) >= 5000) {
		localStorage.setItem("age", 5);
	}
}, 10);

function formatNumber(num){
	if (num >= 1000000000000) {
		return (num / 1000000000000).toFixed(num % 1000000000000 === 0 ? 0 : 1) + "T";
	} else if (num >= 1000000000) {
		return (num / 1000000000).toFixed(num % 1000000000 === 0 ? 0 : 1) + "B";
	} else if (num  >= 1000000){
		return (num / 1000000).toFixed(num % 1000000000 === 0 ? 0 : 1) + "M";
	} else if (num >= 1000) {
		return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + "K";
	} else {
		return num.toString();
	}
}

/* Storage Limit */

setInterval(function(){
	
	if (100000000000000000 <= Number(localStorage.getItem("gold")) && Number(localStorage.getItem("age")) == 1) {
		
		localStorage.setItem("gold_cash", 0);
		localStorage.setItem("last_gold_cash", 90000);
		startTime = new Date().getTime();
	    localStorage.setItem("gold_timer", startTime);
		
	}
	
}, 10);

/* dead troop */

setInterval(function(){
	
	if (0 > Number(localStorage.getItem("food"))) {
		
		localStorage.setItem("last_troop_dead", Math.floor(-1 * (Number(localStorage.getItem("plus_food")) - Number(localStorage.getItem("minus_food")))));
		
		if (Number(localStorage.getItem("last_troop_dead")) > 0) {
			
			if (Number(localStorage.getItem("spearman_have")) > 0) {
				
				if (Number(localStorage.getItem("spearman_have")) >= Number(localStorage.getItem("last_troop_dead"))) {
					
					localStorage.setItem("spearman_have", Math.floor(Number(localStorage.getItem("spearman_have")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.removeItem("last_troop_dead");
					
				} else if (Number(localStorage.getItem("spearman_have")) < Number(localStorage.getItem("last_troop_dead"))) {
					
					localStorage.setItem("spearman_have", Math.floor(Number(localStorage.getItem("spearman_have")) - Number(localStorage.getItem("spearman_have"))));
					localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) - Number(localStorage.getItem("spearman_have"))));
					localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.setItem("last_troop_dead", Math.floor(Number(localStorage.getItem("last_troop_dead")) - Number(localStorage.getItem("spearman_have"))));
					
				}
				
			} else if (Number(localStorage.getItem("archer_have")) > 0 && Number(localStorage.getItem("spearman_have")) == 0) {
				
				if (Number(localStorage.getItem("archer_have")) >= Number(localStorage.getItem("last_troop_dead"))) {
					
					localStorage.setItem("archer_have", Math.floor(Number(localStorage.getItem("archer_have")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.removeItem("last_troop_dead");
					
				} else if (Number(localStorage.getItem("archer_have")) < Number(localStorage.getItem("last_troop_dead")) && Number(localStorage.getItem("archer_have")) > 0) {
					
					localStorage.setItem("archer_have", Math.floor(Number(localStorage.getItem("archer_have")) - Number(localStorage.getItem("archer_have"))));
					localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) - Number(localStorage.getItem("archer_have"))));
					localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.setItem("last_troop_dead", Math.floor(Number(localStorage.getItem("last_troop_dead")) - Number(localStorage.getItem("archer_have"))));
					
				}
				
			} else if (Number(localStorage.getItem("spy_have")) > 0 && Number(localStorage.getItem("spearman_have")) == 0 && Number(localStorage.getItem("archer_have")) == 0) {
				
				if (Number(localStorage.getItem("spy_have")) >= Number(localStorage.getItem("last_troop_dead"))) {
					
					localStorage.setItem("spy_have", Math.floor(Number(localStorage.getItem("spy_have")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.removeItem("last_troop_dead");
					
				} else if (Number(localStorage.getItem("spy_have")) < Number(localStorage.getItem("last_troop_dead")) && Number(localStorage.getItem("spy_have")) > 0) {
					
					localStorage.setItem("spy_have", Math.floor(Number(localStorage.getItem("spy_have")) - Number(localStorage.getItem("spy_have"))));
					localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) - Number(localStorage.getItem("spy_have"))));
					localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.setItem("last_troop_dead", Math.floor(Number(localStorage.getItem("last_troop_dead")) - Number(localStorage.getItem("spy_have"))));
					
				}
				
			} else if (Number(localStorage.getItem("knight_have")) > 0 && Number(localStorage.getItem("spy_have")) == 0 && Number(localStorage.getItem("spearman_have")) == 0 && Number(localStorage.getItem("archer_have")) == 0) {
				
				if (Number(localStorage.getItem("knight_have")) >= Number(localStorage.getItem("last_troop_dead"))) {
					
					localStorage.setItem("knight_have", Math.floor(Number(localStorage.getItem("knight_have")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.removeItem("last_troop_dead");
					
				} else if (Number(localStorage.getItem("knight_have")) < Number(localStorage.getItem("last_troop_dead")) && Number(localStorage.getItem("knight_have")) > 0) {
					
					localStorage.setItem("knight_have", Math.floor(Number(localStorage.getItem("knight_have")) - Number(localStorage.getItem("knight_have"))));
					localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) - Number(localStorage.getItem("knight_have"))));
					localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.setItem("last_troop_dead", Math.floor(Number(localStorage.getItem("last_troop_dead")) - Number(localStorage.getItem("knight_have"))));
					
				}
				
			} else if (Number(localStorage.getItem("ballista_have")) > 0 && Number(localStorage.getItem("knight_have")) == 0 && Number(localStorage.getItem("spy_have")) == 0 && Number(localStorage.getItem("spearman_have")) == 0 && Number(localStorage.getItem("archer_have")) == 0) {
				
				if (Number(localStorage.getItem("ballista_have")) >= Number(localStorage.getItem("last_troop_dead"))) {
					
					localStorage.setItem("ballista_have", Math.floor(Number(localStorage.getItem("ballista_have")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.removeItem("last_troop_dead");
					
				} else if (Number(localStorage.getItem("ballista_have")) < Number(localStorage.getItem("last_troop_dead")) && Number(localStorage.getItem("ballista_have")) > 0) {
					
					localStorage.setItem("ballista_have", Math.floor(Number(localStorage.getItem("ballista_have")) - Number(localStorage.getItem("ballista_have"))));
					localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) - Number(localStorage.getItem("ballista_have"))));
					localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.setItem("last_troop_dead", Math.floor(Number(localStorage.getItem("last_troop_dead")) - Number(localStorage.getItem("ballista_have"))));
					
				}
				
			} else if (Number(localStorage.getItem("cataphract_have")) > 0 && Number(localStorage.getItem("ballista_have")) == 0 && Number(localStorage.getItem("knight_have")) == 0 && Number(localStorage.getItem("spy_have")) == 0 && Number(localStorage.getItem("spearman_have")) == 0 && Number(localStorage.getItem("archer_have")) == 0) {
				
				if (Number(localStorage.getItem("cataphract_have")) >= Number(localStorage.getItem("last_troop_dead"))) {
					
					localStorage.setItem("cataphract_have", Math.floor(Number(localStorage.getItem("cataphract_have")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.removeItem("last_troop_dead");
					
				} else if (Number(localStorage.getItem("cataphract_have")) < Number(localStorage.getItem("last_troop_dead")) && Number(localStorage.getItem("cataphract_have")) > 0) {
					
					localStorage.setItem("cataphract_have", Math.floor(Number(localStorage.getItem("cataphract_have")) - Number(localStorage.getItem("cataphract_have"))));
					localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) - Number(localStorage.getItem("cataphract_have"))));
					localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.setItem("last_troop_dead", Math.floor(Number(localStorage.getItem("last_troop_dead")) - Number(localStorage.getItem("cataphract_have"))));
					
				}
				
			} else if (Number(localStorage.getItem("swordsmen_have")) > 0 && Number(localStorage.getItem("cataphract_have")) == 0 && Number(localStorage.getItem("ballista_have")) == 0 && Number(localStorage.getItem("knight_have")) == 0 && Number(localStorage.getItem("spy_have")) == 0 && Number(localStorage.getItem("spearman_have")) == 0 && Number(localStorage.getItem("archer_have")) == 0) {
				
				if (Number(localStorage.getItem("swordsmen_have")) >= Number(localStorage.getItem("last_troop_dead"))) {
					
					localStorage.setItem("swordsmen_have", Math.floor(Number(localStorage.getItem("swordsmen_have")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.removeItem("last_troop_dead");
					
				} else if (Number(localStorage.getItem("swordsmen_have")) < Number(localStorage.getItem("last_troop_dead")) && Number(localStorage.getItem("swordsmen_have")) > 0) {
					
					localStorage.setItem("swordsmen_have", Math.floor(Number(localStorage.getItem("swordsmen_have")) - Number(localStorage.getItem("swordsmen_have"))));
					localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) - Number(localStorage.getItem("swordsmen_have"))));
					localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.setItem("last_troop_dead", Math.floor(Number(localStorage.getItem("last_troop_dead")) - Number(localStorage.getItem("swordsmen_have"))));
					
				}
				
			} else if (Number(localStorage.getItem("crossbowmen_have")) > 0 && Number(localStorage.getItem("swordsmen_have")) == 0 && Number(localStorage.getItem("cataphract_have")) == 0 && Number(localStorage.getItem("ballista_have")) == 0 && Number(localStorage.getItem("knight_have")) == 0 && Number(localStorage.getItem("spy_have")) == 0 && Number(localStorage.getItem("spearman_have")) == 0 && Number(localStorage.getItem("archer_have")) == 0) {
				
				if (Number(localStorage.getItem("crossbowmen_have")) >= Number(localStorage.getItem("last_troop_dead"))) {
					
					localStorage.setItem("crossbowmen_have", Math.floor(Number(localStorage.getItem("crossbowmen_have")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.removeItem("last_troop_dead");
					
				} else if (Number(localStorage.getItem("crossbowmen_have")) < Number(localStorage.getItem("last_troop_dead")) && Number(localStorage.getItem("crossbowmen_have")) > 0) {
					
					localStorage.setItem("crossbowmen_have", Math.floor(Number(localStorage.getItem("crossbowmen_have")) - Number(localStorage.getItem("crossbowmen_have"))));
					localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) - Number(localStorage.getItem("crossbowmen_have"))));
					localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.setItem("last_troop_dead", Math.floor(Number(localStorage.getItem("last_troop_dead")) - Number(localStorage.getItem("crossbowmen_have"))));
					
				}
				
			} else if (Number(localStorage.getItem("onager_have")) > 0 && Number(localStorage.getItem("crossbowmen_have")) == 0 && Number(localStorage.getItem("swordsmen_have")) == 0 && Number(localStorage.getItem("cataphract_have")) == 0 && Number(localStorage.getItem("ballista_have")) == 0 && Number(localStorage.getItem("knight_have")) == 0 && Number(localStorage.getItem("spy_have")) == 0 && Number(localStorage.getItem("spearman_have")) == 0 && Number(localStorage.getItem("archer_have")) == 0) {
				
				if (Number(localStorage.getItem("onager_have")) >= Number(localStorage.getItem("last_troop_dead"))) {
					
					localStorage.setItem("onager_have", Math.floor(Number(localStorage.getItem("onager_have")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.removeItem("last_troop_dead");
					
				} else if (Number(localStorage.getItem("onager_have")) < Number(localStorage.getItem("last_troop_dead")) && Number(localStorage.getItem("onager_have")) > 0) {
					
					localStorage.setItem("onager_have", Math.floor(Number(localStorage.getItem("onager_have")) - Number(localStorage.getItem("onager_have"))));
					localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) - Number(localStorage.getItem("onager_have"))));
					localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.setItem("last_troop_dead", Math.floor(Number(localStorage.getItem("last_troop_dead")) - Number(localStorage.getItem("onager_have"))));
					
				}
				
			} else if (Number(localStorage.getItem("imperial_spearman_have")) > 0 && Number(localStorage.getItem("onager_have")) == 0 && Number(localStorage.getItem("crossbowmen_have")) == 0 && Number(localStorage.getItem("swordsmen_have")) == 0 && Number(localStorage.getItem("cataphract_have")) == 0 && Number(localStorage.getItem("ballista_have")) == 0 && Number(localStorage.getItem("knight_have")) == 0 && Number(localStorage.getItem("spy_have")) == 0 && Number(localStorage.getItem("spearman_have")) == 0 && Number(localStorage.getItem("archer_have")) == 0) {
				
				if (Number(localStorage.getItem("imperial_spearman_have")) >= Number(localStorage.getItem("last_troop_dead"))) {
					
					localStorage.setItem("imperial_spearman_have", Math.floor(Number(localStorage.getItem("imperial_spearman_have")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.removeItem("last_troop_dead");
					
				} else if (Number(localStorage.getItem("imperial_spearman_have")) < Number(localStorage.getItem("last_troop_dead")) && Number(localStorage.getItem("imperial_spearman_have")) > 0) {
					
					localStorage.setItem("imperial_spearman_have", Math.floor(Number(localStorage.getItem("imperial_spearman_have")) - Number(localStorage.getItem("imperial_spearman_have"))));
					localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) - Number(localStorage.getItem("imperial_spearman_have"))));
					localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.setItem("last_troop_dead", Math.floor(Number(localStorage.getItem("last_troop_dead")) - Number(localStorage.getItem("imperial_spearman_have"))));
					
				}
				
			} else if (Number(localStorage.getItem("arquebusiers_have")) > 0 && Number(localStorage.getItem("imperial_spearman_have")) == 0 && Number(localStorage.getItem("onager_have")) == 0 && Number(localStorage.getItem("crossbowmen_have")) == 0 && Number(localStorage.getItem("swordsmen_have")) == 0 && Number(localStorage.getItem("cataphract_have")) == 0 && Number(localStorage.getItem("ballista_have")) == 0 && Number(localStorage.getItem("knight_have")) == 0 && Number(localStorage.getItem("spy_have")) == 0 && Number(localStorage.getItem("spearman_have")) == 0 && Number(localStorage.getItem("archer_have")) == 0) {
				
				if (Number(localStorage.getItem("arquebusiers_have")) >= Number(localStorage.getItem("last_troop_dead"))) {
					
					localStorage.setItem("arquebusiers_have", Math.floor(Number(localStorage.getItem("arquebusiers_have")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.removeItem("last_troop_dead");
					
				} else if (Number(localStorage.getItem("arquebusiers_have")) < Number(localStorage.getItem("last_troop_dead")) && Number(localStorage.getItem("arquebusiers_have")) > 0) {
					
					localStorage.setItem("arquebusiers_have", Math.floor(Number(localStorage.getItem("arquebusiers_have")) - Number(localStorage.getItem("arquebusiers_have"))));
					localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) - Number(localStorage.getItem("arquebusiers_have"))));
					localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.setItem("last_troop_dead", Math.floor(Number(localStorage.getItem("last_troop_dead")) - Number(localStorage.getItem("arquebusiers_have"))));
					
				}
				
			} else if (Number(localStorage.getItem("cannon_have")) > 0 && Number(localStorage.getItem("arquebusiers_have")) == 0 && Number(localStorage.getItem("imperial_spearman_have")) == 0 && Number(localStorage.getItem("onager_have")) == 0 && Number(localStorage.getItem("crossbowmen_have")) == 0 && Number(localStorage.getItem("swordsmen_have")) == 0 && Number(localStorage.getItem("cataphract_have")) == 0 && Number(localStorage.getItem("ballista_have")) == 0 && Number(localStorage.getItem("knight_have")) == 0 && Number(localStorage.getItem("spy_have")) == 0 && Number(localStorage.getItem("spearman_have")) == 0 && Number(localStorage.getItem("archer_have")) == 0) {
				
				if (Number(localStorage.getItem("cannon_have")) >= Number(localStorage.getItem("last_troop_dead"))) {
					
					localStorage.setItem("cannon_have", Math.floor(Number(localStorage.getItem("cannon_have")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.removeItem("last_troop_dead");
					
				} else if (Number(localStorage.getItem("cannon_have")) < Number(localStorage.getItem("last_troop_dead")) && Number(localStorage.getItem("cannon_have")) > 0) {
					
					localStorage.setItem("cannon_have", Math.floor(Number(localStorage.getItem("cannon_have")) - Number(localStorage.getItem("cannon_have"))));
					localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) - Number(localStorage.getItem("cannon_have"))));
					localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) - Number(localStorage.getItem("last_troop_dead"))));
					localStorage.setItem("last_troop_dead", Math.floor(Number(localStorage.getItem("last_troop_dead")) - Number(localStorage.getItem("cannon_have"))));
					
				}
				
			}
			
		} else if (Number(localStorage.getItem("last_troop_dead")) == 0) {
			
			localStorage.removeItem("last_troop_dead");
			
		}
		
		localStorage.setItem("food_cash", 10000000);
		localStorage.setItem("last_food_cash", 0);
		startTime = new Date().getTime();
	    localStorage.setItem("food_timer", startTime);
		
		
	}
	
}, 10);

/* defense bonus */

setInterval(function(){
	
	var results = (localStorage.getItem("castle_level") * 2) + (localStorage.getItem("wall_level") * 2) + ((Number(localStorage.getItem("watchtower_level")) * 0.1 + 1) * localStorage.getItem("watchtower_have"));
	results = Math.round(results * 100) / 100;
	localStorage.setItem("defense_bonus", results);
	
}, 10);

/* troop dead */

setInterval(function() {
	if (Math.floor(Number(localStorage.getItem("plus_food")) - Number(localStorage.getItem("minus_food"))) <= 0) {
		document.getElementById("food").style.animation = "red_alert 3s infinite";
	}
}, 10);
