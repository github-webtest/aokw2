function page_save() {
	if (localStorage.getItem("local_lan") == "en") {
		document.getElementById("kingdom_info_text").innerText = "Kingdom Info";
		document.getElementById("alliance_text").innerText = "Alliance:";
		document.getElementById("age_text").innerText = "Age:";
		document.getElementById("age_points_text").innerText = "Age Points:";
		document.getElementById("victory_total_text").innerText = "Victory/Total:";
		document.getElementById("total_kill_text").innerText = "Troops Killed:";
		document.getElementById("own_places_text").innerText = "Own Places:";
		document.getElementById("center_text").innerText = "'s Center";
		document.getElementById("player_button_btn_l_text").innerText = "Build Embassy";
		document.getElementById("player_button_btn_r_text").innerText = "Send PM";
	}
	
	document.getElementById("loading").style.display = "none";
}