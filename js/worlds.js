function page_save() {
	if (localStorage.getItem("local_lan") == "en") {
		document.getElementById("lan_head_text").innerText = "Worlds";
	} else if (localStorage.getItem("local_lan") == "de") {
		document.getElementById("lan_head_text").innerText = "Welten";
	}
	
	document.getElementById("loading").style.display = "none";
}

function world_0() {
	localStorage.setItem("worlds", 0);
	location.href = "index.html";
}

function world_1() {
	localStorage.setItem("worlds", 0);
	location.href = "index.html";
}