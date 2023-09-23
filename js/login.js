function index() {
	if (localStorage.getItem("local_lan") == "en") {
		document.getElementById("text_lan_login").innerText = "Login";
		document.getElementById("text_lan_worlds").innerText = "W: ";
		document.getElementById("text_lan_worlds2").innerText = "Worlds";
		document.getElementById("worlds").innerText = localStorage.getItem("worlds");
	} else if (localStorage.getItem("local_lan") == "de") {
		document.getElementById("text_lan_login").innerText = "Anmeldung";
		document.getElementById("text_lan_worlds").innerText = "W: ";
		document.getElementById("text_lan_worlds2").innerText = "Welten";
		document.getElementById("worlds").innerText = localStorage.getItem("worlds");
	} else {
		document.getElementById("text_lan_login").innerText = "Login";
		document.getElementById("text_lan_worlds").innerText = "W: ";
		document.getElementById("text_lan_worlds2").innerText = "Worlds";
		document.getElementById("worlds").innerText = localStorage.getItem("worlds");
		localStorage.setItem("worlds", 0);
	}
	
	document.getElementById("ldd").style.display = "none";
	
}

function login() {
	
	if (localStorage.getItem("local_lan") == null) {
		
		localStorage.setItem("local_lan", "en");
		location.href="/kingdom";
	} else {
		location.href="/kingdom";
	}
	
}