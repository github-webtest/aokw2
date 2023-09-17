function page_save() {
	if (localStorage.getItem("local_lan") == "en") {
		document.getElementById("lan_head_text").innerText = "Leaderboard";
		document.getElementById("top_button_text1").innerText = "Kings";
		document.getElementById("top_button_text2").innerText = "Allies";
	}
	
	for (i=1; i<101; i++) {
		document.getElementById("page_menu1").innerHTML += '<div class="board_div" id="king_number_id' + i + '"><div class="board_div_left"><div class="board_1"><b>' + i + '.</b></div><div class="board_2"><b id="l1_king_id' + i + '">Test<br></b><b id="l1_allies_id' + i + '" style="color: gray; font-size: 1.75vh;">Test</b></div></div><div class="board_div_right"><div class="board_3"><b id="king_age_id' + i + '">0</b></div></div></div>';
		document.getElementById("page_menu2").innerHTML += '<div class="board_div" id="allies_number_id' + i + '"><div class="board_div_left"><div class="board_1"><b>' + i + '.</b></div><div class="board_2"><b id="l2_allies_id' + i + '">Test<br></b><b id="l2_king_id' + i + '" style="color: gray; font-size: 1.75vh;">Test</b></div></div><div class="board_div_right"><div class="board_3"><b id="allies_age_id' + i + '">0</b></div></div></div>';
	}
	
	document.getElementById("loading").style.display = "none";
}