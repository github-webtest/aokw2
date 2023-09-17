function page_save() {
	if (localStorage.getItem("local_lan") == "en") {
		document.getElementById("lan_head_text").innerText = "Sell";
	}
	
	document.getElementById("loading").style.display = "none";
}