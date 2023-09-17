function page_save() {
	if (localStorage.getItem("local_lan") == "en") {
		document.getElementById("lan_head_text").innerText = "Bonus";
		document.getElementById("bonus_title_text").innerText = "Choose one of the treasure chests";
		document.getElementById("button_text").innerText = "Collect";
	}
	
	document.getElementById("loading").style.display = "none";
}