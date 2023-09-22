function index() {
	if (localStorage.getItem("local_lan") == null) {
		document.getElementById("text_lan_login").innerText = "Login";
		document.getElementById("text_lan_worlds").innerText = "W: ";
		document.getElementById("text_lan_worlds2").innerText = "Worlds";
		localStorage.setItem("worlds", 0);
		document.getElementById("worlds").innerText = localStorage.getItem("worlds");
	} else if (localStorage.getItem("local_lan") == "en") {
		document.getElementById("text_lan_login").innerText = "Login";
		document.getElementById("text_lan_worlds").innerText = "W: ";
		document.getElementById("text_lan_worlds2").innerText = "Worlds";
		document.getElementById("worlds").innerText = localStorage.getItem("worlds");
	} else if (localStorage.getItem("local_lan") == "de") {
		document.getElementById("text_lan_login").innerText = "Anmeldung";
		document.getElementById("text_lan_worlds").innerText = "W: ";
		document.getElementById("text_lan_worlds2").innerText = "Welten";
		document.getElementById("worlds").innerText = localStorage.getItem("worlds");
	}
	
	document.getElementById("ldd").style.display = "none";
	
}

function login() {
	if (localStorage.getItem("local_lan") == null) {
		localStorage.setItem("local_lan", "en");
		localStorage.setItem("worlds", 0);
		localStorage.setItem("quests_number", 1);
		localStorage.setItem("age_points", 0);
		localStorage.setItem("king_name", "Player");
		localStorage.setItem("castle_level", 0);
		localStorage.setItem("plus_food", 100);
		localStorage.setItem("minus_food", 0);
		localStorage.setItem("plus_wood", 0);
		localStorage.setItem("plus_diamond", 0);
		localStorage.setItem("k_c_gold", 0);
		localStorage.setItem("c_gold", 0);
		localStorage.setItem("a_gold", 0);
		localStorage.setItem("t_farmer", 0);
		localStorage.setItem("t_woodcutter", 0);
		localStorage.setItem("t_goldminer", 0);
		localStorage.setItem("total_k_c_troops", 0);
		localStorage.setItem("total_c1_troops", 0);
		localStorage.setItem("total_c2_troops", 0);
		localStorage.setItem("total_s_t_troops", 0);
		localStorage.setItem("total_k_c_spy", 0);
		localStorage.setItem("total_c1_spy", 0);
		localStorage.setItem("total_c2_spy", 0);
		localStorage.setItem("age", 1);
		localStorage.setItem("wall_level", 0);
		localStorage.setItem("watchtower_level", 0);
		localStorage.setItem("watchtower_have", 0);
		localStorage.setItem("knight_level", 0);
		localStorage.setItem("imperial_spearman_level", 0);
		localStorage.setItem("spearman_level", 0);
		localStorage.setItem("archer_level", 0);
		localStorage.setItem("spy_level", 0);
		localStorage.setItem("cataphract_level", 0);
		localStorage.setItem("swordsmen_level", 0);
		localStorage.setItem("crossbowmen_level", 0);
		localStorage.setItem("arquebusiers_level", 0);
		localStorage.setItem("ballista_level", 0);
		localStorage.setItem("onager_level", 0);
		localStorage.setItem("cannon_level", 0);
		localStorage.setItem("trade_cart_level", 0);
		localStorage.setItem("_level", 0);
		localStorage.setItem("farmer_level", 0);
		localStorage.setItem("woodcutter_level", 0);
		localStorage.setItem("gold_miner_level", 0);
		localStorage.setItem("farming_level", 0);
		localStorage.setItem("lumbering_level", 0);
		localStorage.setItem("mining_level", 0);
		localStorage.setItem("blacksmithing_level", 0);
		localStorage.setItem("riding_level", 0);
		localStorage.setItem("geometry_level", 0);
		localStorage.setItem("cartography_level", 0);
		localStorage.setItem("spying_level", 0);
		localStorage.setItem("masonry_level", 0);
		localStorage.setItem("academy_capacity", 50);
		localStorage.setItem("own_places", 1);
		
		var random_castle_x = Math.floor(Math.random() * 132) + 3;
		var random_castle_y = Math.floor(Math.random() * 132) + 3;
		
		localStorage.setItem("random_castle_x", random_castle_x);
		localStorage.setItem("random_castle_y", random_castle_y);
		location.href = "kingdom.html";
	} else {
	location.href = "kingdom.html";
	}
}