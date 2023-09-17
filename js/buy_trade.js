function page_save() {
	if (localStorage.getItem("local_lan") == "en") {
		document.getElementById("lan_head_text").innerText = "Buy";
		document.getElementById("top_button_text1").innerText = "Food";
		document.getElementById("top_button_text2").innerText = "Wood";
		document.getElementById("seller_text").innerText = "Seller";
		document.getElementById("seller_text2").innerText = "Seller";
		document.getElementById("amount_text").innerText = "Amount";
		document.getElementById("amount_text2").innerText = "Amount";
		document.getElementById("price_text").innerText = "Price";
		document.getElementById("price_text2").innerText = "Price";
		document.getElementById("distance_text").innerText = "Distance";
		document.getElementById("distance_text2").innerText = "Distance";
	}
	
	document.getElementById("loading").style.display = "none";
}

function food_amount_1() {
	document.getElementById("food_a1").style.color = "black";
	document.getElementById("food_a2").style.color = "#C0C0C0";
}

function food_amount_2() {
	document.getElementById("food_a1").style.color = "#C0C0C0";
	document.getElementById("food_a2").style.color = "black";
}

function food_price_1() {
	document.getElementById("food_p1").style.color = "black";
	document.getElementById("food_p2").style.color = "#C0C0C0";
}

function food_price_2() {
	document.getElementById("food_p1").style.color = "#C0C0C0";
	document.getElementById("food_p2").style.color = "black";
}

function food_distance_1() {
	document.getElementById("food_d1").style.color = "black";
	document.getElementById("food_d2").style.color = "#C0C0C0";
}

function food_distance_2() {
	document.getElementById("food_d1").style.color = "#C0C0C0";
	document.getElementById("food_d2").style.color = "black";
}

function food_amount() {
	document.getElementById("food_a1").style.color = "#C0C0C0";
	document.getElementById("food_a2").style.color = "#C0C0C0";
}

function food_price() {
	document.getElementById("food_p1").style.color = "#C0C0C0";
	document.getElementById("food_p2").style.color = "#C0C0C0";
}

function food_distance() {
	document.getElementById("food_d1").style.color = "#C0C0C0";
	document.getElementById("food_d2").style.color = "#C0C0C0";
}

function wood_amount_1() {
	document.getElementById("wood_a1").style.color = "black";
	document.getElementById("wood_a2").style.color = "#C0C0C0";
}

function wood_amount_2() {
	document.getElementById("wood_a1").style.color = "#C0C0C0";
	document.getElementById("wood_a2").style.color = "black";
}

function wood_price_1() {
	document.getElementById("wood_p1").style.color = "black";
	document.getElementById("wood_p2").style.color = "#C0C0C0";
}

function wood_price_2() {
	document.getElementById("wood_p1").style.color = "#C0C0C0";
	document.getElementById("wood_p2").style.color = "black";
}

function wood_distance_1() {
	document.getElementById("wood_d1").style.color = "black";
	document.getElementById("wood_d2").style.color = "#C0C0C0";
}

function wood_distance_2() {
	document.getElementById("wood_d1").style.color = "#C0C0C0";
	document.getElementById("wood_d2").style.color = "black";
}

function wood_amount() {
	document.getElementById("wood_a1").style.color = "#C0C0C0";
	document.getElementById("wood_a2").style.color = "#C0C0C0";
}

function wood_price() {
	document.getElementById("wood_p1").style.color = "#C0C0C0";
	document.getElementById("wood_p2").style.color = "#C0C0C0";
}

function wood_distance() {
	document.getElementById("wood_d1").style.color = "#C0C0C0";
	document.getElementById("wood_d2").style.color = "#C0C0C0";
}