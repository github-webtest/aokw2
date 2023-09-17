function page_save() {
	if (localStorage.getItem("local_lan") == "en") {
		document.getElementById("lan_head_text").innerText = "Logs";
		document.getElementById("top_button_text1").innerText = "Military";
		document.getElementById("top_button_text2").innerText = "Trade";
	}
	
	document.getElementById("loading").style.display = "none";
}