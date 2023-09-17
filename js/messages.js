function page_save() {
	if (localStorage.getItem("local_lan") == "en") {
		document.getElementById("lan_head_text").innerText = "Messages";
		document.getElementById("top_button_text1").innerText = "Notification";
		document.getElementById("top_button_text2").innerText = "Messages";
	}
	
	document.getElementById("loading").style.display = "none";
}