function page_save() {
	if (localStorage.getItem("local_lan") == "en") {
		document.getElementById("lan_head_text").innerText = "Military";
		document.getElementById("top_button_text1").innerText = "Troops";
		document.getElementById("top_button_text2").innerText = "Support Troops";
		document.getElementById("m_head_text").innerText = "Own Places: ";
		document.getElementById("kingdom_center_text").innerText = "Kingdom Center";
		document.getElementById("army_unit_text").innerText = " Troops";
		document.getElementById("spy_text").innerText = " Spy";
	}
	
	document.getElementById("loading").style.display = "none";
}