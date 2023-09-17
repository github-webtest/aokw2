function page_save() {
	if (localStorage.getItem("local_lan") == "en") {
		document.getElementById("lan_head_text").innerText = "Quests";
		document.getElementById("top_button_text1").innerText = "Kingdom";
		document.getElementById("top_button_text2").innerText = "Daily";
		document.getElementById("quests_text").innerText = "Quests: ";
		document.getElementById("prize_text").innerText = "Prize:";
		document.getElementById("quests_title_text").innerText = "Produce Farmer";
		document.getElementById("quest_quests_div").innerHTML = '<b>To produce more foods </b><b style="color: red;">produce 1 farmer</b>';
		document.getElementById("quests_help_text1").innerText = "Follow this road";
		document.getElementById("help_build_bg").style.backgroundImage = "url('images/village_icon.png')";
		document.getElementById("quests_help_text2").innerText = "Help me";
	}
	
	document.getElementById("loading").style.display = "none";
}

function quests_help() {
	if (localStorage.getItem("quests_number") == 1) {
		sessionStorage.setItem("quests_on", 1);
		location.href = "kingdom.html";
	}
}