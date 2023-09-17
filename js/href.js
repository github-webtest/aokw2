function intro(){
	if (localStorage.getItem("game_lan") == null) {
	localStorage.setItem("game_lan", "en"); 
	}
}

function go_back() {
	if (sessionStorage.getItem("quests_on") != 0 || sessionStorage.getItem("quests_p") != 0 || sessionStorage.getItem("quests_b") != 0) {
		sessionStorage.setItem("quests_on", 0);
		sessionStorage.setItem("quests_p", 0);
		sessionStorage.setItem("quests_b", 0);
	}
	history.back();
}

function go_login() {
	if (sessionStorage.getItem("quests_on") != 0) {
		sessionStorage.setItem("quests_on", 0);
		sessionStorage.setItem("quests_p", 0);
		sessionStorage.setItem("quests_b", 0);
	}
	location.href = "index.html";
}

function go_military() {
	if (sessionStorage.getItem("quests_on") != 0) {
		sessionStorage.setItem("quests_on", 0);
	}
	location.href = "military.html";
}

function go_logs() {
	if (sessionStorage.getItem("quests_on") != 0) {
		sessionStorage.setItem("quests_on", 0);
	}
	location.href = "logs.html";
}

function go_map() {
	if (sessionStorage.getItem("quests_on") != 0) {
		sessionStorage.setItem("quests_on", 0);
	}
	location.href = "map.html";
}

function go_allies() {
	if (sessionStorage.getItem("quests_on") != 0) {
		sessionStorage.setItem("quests_on", 0);
	}
	location.href = "allies.html";
}

function go_leaderboard() {
	if (sessionStorage.getItem("quests_on") != 0) {
		sessionStorage.setItem("quests_on", 0);
	}
	location.href = "leaderboard.html";
}

function go_kingdom() {
	if (sessionStorage.getItem("quests_on") != 0 || sessionStorage.getItem("quests_p") != 0 || sessionStorage.getItem("quests_b") != 0) {
		sessionStorage.setItem("quests_on", 0);
		sessionStorage.setItem("quests_p", 0);
		sessionStorage.setItem("quests_b", 0);
	}
	location.href = "kingdom.html";
}

function worlds() {
	if (sessionStorage.getItem("quests_on") != 0) {
		sessionStorage.setItem("quests_on", 0);
	}
	location.href = "worlds.html";
}

function go_buy_diamond() {
	if (sessionStorage.getItem("quests_on") != 0) {
		sessionStorage.setItem("quests_on", 0);
	}
	location.href = "buy_diamond.html";
}

function go_messages() {
	if (sessionStorage.getItem("quests_on") != 0) {
		sessionStorage.setItem("quests_on", 0);
	}
	location.href = "messages.html";
}

function go_ongoing() {
	if (sessionStorage.getItem("quests_on") != 0) {
		sessionStorage.setItem("quests_on", 0);
	}
	location.href = "ongoing.html";
}

function go_storage() {
	if (sessionStorage.getItem("quests_on") != 0) {
		sessionStorage.setItem("quests_on", 0);
	}
	location.href = "storage.html";
}

function go_bonus() {
	if (sessionStorage.getItem("quests_on") != 0) {
		sessionStorage.setItem("quests_on", 0);
	}
	location.href = "bonus.html";
}

function go_quests() {
	if (sessionStorage.getItem("quests_on") != 0) {
		sessionStorage.setItem("quests_on", 0);
	}
	location.href = "quests.html";
}

function go_barracks() {
	if (sessionStorage.getItem("quests_on") != 0) {
		sessionStorage.setItem("quests_on", 0);
	}
	location.href = "barracks.html";
}

function go_castle() {
	if (sessionStorage.getItem("quests_on") != 0) {
		sessionStorage.setItem("quests_on", 0);
	}
	location.href = "castle.html";
}

function go_academy() {
	if (sessionStorage.getItem("quests_on") != 0) {
		sessionStorage.setItem("quests_on", 0);
	}
	location.href = "academy.html";
}

function go_workshop() {
	if (sessionStorage.getItem("quests_on") != 0) {
		sessionStorage.setItem("quests_on", 0);
	}
	location.href = "workshop.html";
}

function go_market() {
	if (sessionStorage.getItem("quests_on") != 0) {
		sessionStorage.setItem("quests_on", 0);
	}
	location.href = "market.html";
}

function go_wall() {
	if (sessionStorage.getItem("quests_on") != 0) {
		sessionStorage.setItem("quests_on", 0);
	}
	location.href = "wall.html";
}

function go_village() {
	if (sessionStorage.getItem("quests_on") != 0) {
		sessionStorage.setItem("quests_on", 0);
		if (localStorage.getItem("quests_number") == 1) {
		sessionStorage.setItem("quests_p", 1);
		}
	}
	location.href = "village.html";
}

function go_news() {
	if (sessionStorage.getItem("quests_on") != 0) {
		sessionStorage.setItem("quests_on", 0);
	}
	location.href = "news.html";
}

function go_buy_trade() {
	location.href = "buy_trade.html";
}

function go_sell_trade() {
	location.href = "sell_trade.html";
}

function top_left(){
	document.getElementById("top_button_text1").style.color = "black";
	document.getElementById("top_button_text2").style.color = "#585858";
	document.getElementById("page_menu1").style.display = "block";
	document.getElementById("page_menu2").style.display = "none";
	document.getElementById("top_button1").style.backgroundImage = "url('images/top_button_bg1.png')";
	document.getElementById("top_button2").style.backgroundImage = "url('images/top_button_bg2.png')";
	document.getElementById("page_menu1_bottom").style.display = "block";
	document.getElementById("page_menu2_bottom").style.display = "none";
}

function top_right(){
	document.getElementById("top_button_text1").style.color = "#585858";
	document.getElementById("top_button_text2").style.color = "black";
	document.getElementById("page_menu1").style.display = "none";
	document.getElementById("page_menu2").style.display = "block";
	document.getElementById("top_button1").style.backgroundImage = "url('images/top_button_bg2.png')";
	document.getElementById("top_button2").style.backgroundImage = "url('images/top_button_bg1.png')";
	document.getElementById("page_menu1_bottom").style.display = "none";
	document.getElementById("page_menu2_bottom").style.display = "block";
}

function open_settings(){
	document.getElementById("settings_bg").style.display = "flex";
}

function close_settings(){
	document.getElementById("settings_bg").style.display = "none";
}

function open_language_select(){
	document.getElementById("set_board_scroll1").style.display = "none";
	document.getElementById("set_board_scroll2_head").style.display = "block";
	document.getElementById("set_board_scroll2").style.display = "block";
}

function close_language_select(){
	document.getElementById("set_board_scroll1").style.display = "block";
	document.getElementById("set_board_scroll2_head").style.display = "none";
	document.getElementById("set_board_scroll2").style.display = "none";
}

function bonus_open() {
	document.getElementById("bonus_board_1").style.display = "none";
	document.getElementById("bonus_board_2").style.display = "block";
	document.getElementById("bonus_button").style.display = "block";
}

function close_troops_info() {
	document.getElementById("troops_info").style.animation = "troop_info2 0.2s";
	
	setTimeout(function() {
	document.getElementById("troops_info_bg").style.display = "none";
	document.getElementById("troops_info").style.display = "none";
	}, 200);
}

function close_building_info() {
	document.getElementById("bi_info").style.animation = "troop_info2 0.2s";
	
	setTimeout(function() {
	document.getElementById("bi_info_bg").style.display = "none";
	document.getElementById("bi_info").style.display = "none";
	}, 200);
}