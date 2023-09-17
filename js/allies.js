function page_save() {
	if (localStorage.getItem("local_lan") == "en") {
		document.getElementById("lan_head_text").innerText = "Allies";
		document.getElementById("allies_none_text").innerText = "You Are Not a Member of an Alliance";
		document.getElementById("alliance_invitations_text").innerText = "Alliance Invitations";
		document.getElementById("create_alliance_text").innerText = "Create Alliance";
	}
	
	var ti = "'";
	
	for (i=1; i<11; i++) {
		document.getElementById("allies_invitations").innerHTML += '<div class="allies_div_head"><div class="allies_div_t"><b id="alliance_invitation_id' + i + '" style="opacity: 1; font-size: 2vh;">qwertyuıopas14</b></div><div id="alliance_refuse_id' + i + '" class="allies_div_head_img" style="background-image: url(' + ti + 'images/false.png' + ti + ');"></div><div id="alliance_accept_id' + i + '" class="allies_div_head_img" style="background-image: url(' + ti + 'images/true.png' + ti + ');"></div></div>';
	}
	
	document.getElementById("loading").style.display = "none";
}