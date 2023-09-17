function page_save() {
	if (localStorage.getItem("local_lan") == "en") {
		document.getElementById("lan_head_text").innerText = "Embassy News";
		document.getElementById("top_button_text1").innerText = "News";
		document.getElementById("top_button_text2").innerText = "Embassies";
	}
	
	document.getElementById("loading").style.display = "none";
}