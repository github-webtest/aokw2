function page_save() {
	if (localStorage.getItem("local_lan") == "en") {
		document.getElementById("lan_head_text").innerText = "Barracks";
		document.getElementById("build_top_text").innerText = "Breed and train troops to strengthen your army!";
		document.getElementById("spearmanx_text").innerText = "Spearman x";
		document.getElementById("archerx_text").innerText = "Archer x";
		document.getElementById("spyx_text").innerText = "Spy x";
		document.getElementById("cataphractx_text").innerText = "Cataphract x";
		document.getElementById("swordsmenx_text").innerText = "Swordsmen x";
		document.getElementById("crossbowmenx_text").innerText = "Crossbowmen x";
		document.getElementById("arquebusiersx_text").innerText = "Arquebusiers x";
		document.getElementById("t_info").innerText = "Info";
		document.getElementById("t_age").innerText = "Age";
		document.getElementById("t_type").innerText = "Type";
		document.getElementById("t_class").innerText = "Class";
		document.getElementById("t_cost").innerText = "Cost";
		document.getElementById("produce_text").innerText = "Produce";
		document.getElementById("upgrade_text").innerText = "Upgrade";
		document.getElementById("t_abilities").innerText = "Abilities";
	}
	
	document.getElementById("loading").style.display = "none";
}

function troop1_info() {
	document.getElementById("troops_info").style.animation = "troop_info1 0.4s";
	document.getElementById("troops_info_bg").style.display = "flex";
	document.getElementById("troops_info").style.display = "block";
	
	document.getElementById("troops_text").innerText = "Spearman";

    $(document).ready(function(){
		
		var jsonData_spearman = JSON.stringify(spearman);
		var data_spearman = JSON.parse(jsonData_spearman);
		
		/* info */
		
		if (data_spearman[Number(localStorage.getItem("spearman_level"))].Age == 1) {
			document.getElementById("age_t").innerText = "Dark (1)";
		} else if (data_spearman[Number(localStorage.getItem("spearman_level"))].Age == 2) {
			document.getElementById("age_t").innerText = "Feudal (2)";
		} else if (data_spearman[Number(localStorage.getItem("spearman_level"))].Age == 3) {
			document.getElementById("age_t").innerText = "Castle (3)";
		} else if (data_spearman[Number(localStorage.getItem("spearman_level"))].Age == 4) {
			document.getElementById("age_t").innerText = "Imperial (4)";
		} else if (data_spearman[Number(localStorage.getItem("spearman_level"))].Age == 5) {
			document.getElementById("age_t").innerText = "New (5)";
		}
		document.getElementById("type_t").innerText = data_spearman[Number(localStorage.getItem("spearman_level"))].Type;
		document.getElementById("class_t").innerText = data_spearman[Number(localStorage.getItem("spearman_level"))].Class;
		
		/* produce */
		
		document.getElementById("p_food").innerText = data_spearman[Number(localStorage.getItem("spearman_level"))].Pfood;
		document.getElementById("p_wood").innerText = data_spearman[Number(localStorage.getItem("spearman_level"))].Pwood;
		document.getElementById("p_gold").innerText = data_spearman[Number(localStorage.getItem("spearman_level"))].Pgold;
		document.getElementById("p_diamond").innerText = data_spearman[Number(localStorage.getItem("spearman_level"))].Pdiamond;
		document.getElementById("p_time").innerText = data_spearman[Number(localStorage.getItem("spearman_level"))].Ptime;
		
		if (data_spearman[Number(localStorage.getItem("spearman_level"))].Pfood == null) {
			document.getElementById("produce_d1").style.display = "none";
			document.getElementById("produce_d2").style.display = "none";
		}
		
		/* upgrade */
		
		document.getElementById("u_gold").innerText = data_spearman[Number(localStorage.getItem("spearman_level"))].Ugold;
		document.getElementById("u_xp").innerText = data_spearman[Number(localStorage.getItem("spearman_level"))].Uxp;
		document.getElementById("u_time").innerText = data_spearman[Number(localStorage.getItem("spearman_level"))].Utime;
		
		/* abilities */
		
		document.getElementById("abilities_text").innerText = data_spearman[Number(localStorage.getItem("spearman_level"))].Atitle;
		document.getElementById("a1_title").innerText = data_spearman[Number(localStorage.getItem("spearman_level"))].A1text;
		document.getElementById("a1_text").innerText = data_spearman[Number(localStorage.getItem("spearman_level"))].A1;
		document.getElementById("a2_title").innerText = data_spearman[Number(localStorage.getItem("spearman_level"))].A2text;
		document.getElementById("a2_text").innerText = data_spearman[Number(localStorage.getItem("spearman_level"))].A2;
		document.getElementById("a3_title").innerText = data_spearman[Number(localStorage.getItem("spearman_level"))].A3text;
		document.getElementById("a3_text").innerText = data_spearman[Number(localStorage.getItem("spearman_level"))].A3;
		
		if (data_spearman[Number(localStorage.getItem("spearman_level"))].A2text == null) {
			document.getElementById("abilities_2").style.display = "none";
			document.getElementById("abilities_3").style.display = "none";
		} else if (data_spearman[Number(localStorage.getItem("spearman_level"))].A2text != null && data_spearman[Number(localStorage.getItem("spearman_level"))].A3text == null) {
			document.getElementById("abilities_3").style.display = "none";
		}
		
    });
}

function troop2_info() {
	document.getElementById("troops_info").style.animation = "troop_info1 0.4s";
	document.getElementById("troops_info_bg").style.display = "flex";
	document.getElementById("troops_info").style.display = "block";
	
	document.getElementById("troops_text").innerText = "Archer";

    $(document).ready(function(){
		
		var jsonData_archer = JSON.stringify(archer);
		var data_archer = JSON.parse(jsonData_archer);
		
		/* info */
		
		if (data_archer[Number(localStorage.getItem("archer_level"))].Age == 1) {
			document.getElementById("age_t").innerText = "Dark (1)";
		} else if (data_archer[Number(localStorage.getItem("archer_level"))].Age == 2) {
			document.getElementById("age_t").innerText = "Feudal (2)";
		} else if (data_archer[Number(localStorage.getItem("archer_level"))].Age == 3) {
			document.getElementById("age_t").innerText = "Castle (3)";
		} else if (data_archer[Number(localStorage.getItem("archer_level"))].Age == 4) {
			document.getElementById("age_t").innerText = "Imperial (4)";
		} else if (data_archer[Number(localStorage.getItem("archer_level"))].Age == 5) {
			document.getElementById("age_t").innerText = "New (5)";
		}
		document.getElementById("type_t").innerText = data_archer[Number(localStorage.getItem("archer_level"))].Type;
		document.getElementById("class_t").innerText = data_archer[Number(localStorage.getItem("archer_level"))].Class;
		
		/* produce */
		
		document.getElementById("p_food").innerText = data_archer[Number(localStorage.getItem("archer_level"))].Pfood;
		document.getElementById("p_wood").innerText = data_archer[Number(localStorage.getItem("archer_level"))].Pwood;
		document.getElementById("p_gold").innerText = data_archer[Number(localStorage.getItem("archer_level"))].Pgold;
		document.getElementById("p_diamond").innerText = data_archer[Number(localStorage.getItem("archer_level"))].Pdiamond;
		document.getElementById("p_time").innerText = data_archer[Number(localStorage.getItem("archer_level"))].Ptime;
		
		if (data_archer[Number(localStorage.getItem("archer_level"))].Pfood == null) {
			document.getElementById("produce_d1").style.display = "none";
			document.getElementById("produce_d2").style.display = "none";
		}
		
		/* upgrade */
		
		document.getElementById("u_gold").innerText = data_archer[Number(localStorage.getItem("archer_level"))].Ugold;
		document.getElementById("u_xp").innerText = data_archer[Number(localStorage.getItem("archer_level"))].Uxp;
		document.getElementById("u_time").innerText = data_archer[Number(localStorage.getItem("archer_level"))].Utime;
		
		/* abilities */
		
		document.getElementById("abilities_text").innerText = data_archer[Number(localStorage.getItem("archer_level"))].Atitle;
		document.getElementById("a1_title").innerText = data_archer[Number(localStorage.getItem("archer_level"))].A1text;
		document.getElementById("a1_text").innerText = data_archer[Number(localStorage.getItem("archer_level"))].A1;
		document.getElementById("a2_title").innerText = data_archer[Number(localStorage.getItem("archer_level"))].A2text;
		document.getElementById("a2_text").innerText = data_archer[Number(localStorage.getItem("archer_level"))].A2;
		document.getElementById("a3_title").innerText = data_archer[Number(localStorage.getItem("archer_level"))].A3text;
		document.getElementById("a3_text").innerText = data_archer[Number(localStorage.getItem("archer_level"))].A3;
		
		if (data_archer[Number(localStorage.getItem("archer_level"))].A2text == null) {
			document.getElementById("abilities_2").style.display = "none";
			document.getElementById("abilities_3").style.display = "none";
		} else if (data_archer[Number(localStorage.getItem("archer_level"))].A2text != null && data_archer[Number(localStorage.getItem("archer_level"))].A3text == null) {
			document.getElementById("abilities_3").style.display = "none";
		}
		
    });
}

function troop3_info() {
	document.getElementById("troops_info").style.animation = "troop_info1 0.4s";
	document.getElementById("troops_info_bg").style.display = "flex";
	document.getElementById("troops_info").style.display = "block";
	
	document.getElementById("troops_text").innerText = "Spy";

    $(document).ready(function(){
		
		var jsonData_spy = JSON.stringify(spy);
		var data_spy = JSON.parse(jsonData_spy);
		
		/* info */
		
		if (data_spy[Number(localStorage.getItem("spy_level"))].Age == 1) {
			document.getElementById("age_t").innerText = "Dark (1)";
		} else if (data_spy[Number(localStorage.getItem("spy_level"))].Age == 2) {
			document.getElementById("age_t").innerText = "Feudal (2)";
		} else if (data_spy[Number(localStorage.getItem("spy_level"))].Age == 3) {
			document.getElementById("age_t").innerText = "Castle (3)";
		} else if (data_spy[Number(localStorage.getItem("spy_level"))].Age == 4) {
			document.getElementById("age_t").innerText = "Imperial (4)";
		} else if (data_spy[Number(localStorage.getItem("spy_level"))].Age == 5) {
			document.getElementById("age_t").innerText = "New (5)";
		}
		document.getElementById("type_t").innerText = data_spy[Number(localStorage.getItem("spy_level"))].Type;
		document.getElementById("class_t").innerText = data_spy[Number(localStorage.getItem("spy_level"))].Class;
		
		/* produce */
		
		document.getElementById("p_food").innerText = data_spy[Number(localStorage.getItem("spy_level"))].Pfood;
		document.getElementById("p_wood").innerText = data_spy[Number(localStorage.getItem("spy_level"))].Pwood;
		document.getElementById("p_gold").innerText = data_spy[Number(localStorage.getItem("spy_level"))].Pgold;
		document.getElementById("p_diamond").innerText = data_spy[Number(localStorage.getItem("spy_level"))].Pdiamond;
		document.getElementById("p_time").innerText = data_spy[Number(localStorage.getItem("spy_level"))].Ptime;
		
		if (data_spy[Number(localStorage.getItem("spy_level"))].Pfood == null) {
			document.getElementById("produce_d1").style.display = "none";
			document.getElementById("produce_d2").style.display = "none";
		}
		
		/* upgrade */
		
		document.getElementById("u_gold").innerText = data_spy[Number(localStorage.getItem("spy_level"))].Ugold;
		document.getElementById("u_xp").innerText = data_spy[Number(localStorage.getItem("spy_level"))].Uxp;
		document.getElementById("u_time").innerText = data_spy[Number(localStorage.getItem("spy_level"))].Utime;
		
		/* abilities */
		
		document.getElementById("abilities_text").innerText = data_spy[Number(localStorage.getItem("spy_level"))].Atitle;
		document.getElementById("a1_title").innerText = data_spy[Number(localStorage.getItem("spy_level"))].A1text;
		document.getElementById("a1_text").innerText = data_spy[Number(localStorage.getItem("spy_level"))].A1;
		document.getElementById("a2_title").innerText = data_spy[Number(localStorage.getItem("spy_level"))].A2text;
		document.getElementById("a2_text").innerText = data_spy[Number(localStorage.getItem("spy_level"))].A2;
		document.getElementById("a3_title").innerText = data_spy[Number(localStorage.getItem("spy_level"))].A3text;
		document.getElementById("a3_text").innerText = data_spy[Number(localStorage.getItem("spy_level"))].A3;
		
		if (data_spy[Number(localStorage.getItem("spy_level"))].A2text == null) {
			document.getElementById("abilities_2").style.display = "none";
			document.getElementById("abilities_3").style.display = "none";
		} else if (data_spy[Number(localStorage.getItem("spy_level"))].A2text != null && data_spy[Number(localStorage.getItem("spy_level"))].A3text == null) {
			document.getElementById("abilities_3").style.display = "none";
		}
		
    });
}

function troop4_info() {
	document.getElementById("troops_info").style.animation = "troop_info1 0.4s";
	document.getElementById("troops_info_bg").style.display = "flex";
	document.getElementById("troops_info").style.display = "block";
	
	document.getElementById("troops_text").innerText = "Cataphract";

    $(document).ready(function(){
		
		var jsonData_cataphract = JSON.stringify(cataphract);
		var data_cataphract = JSON.parse(jsonData_cataphract);
		
		/* info */
		
		if (data_cataphract[Number(localStorage.getItem("cataphract_level"))].Age == 1) {
			document.getElementById("age_t").innerText = "Dark (1)";
		} else if (data_cataphract[Number(localStorage.getItem("cataphract_level"))].Age == 2) {
			document.getElementById("age_t").innerText = "Feudal (2)";
		} else if (data_cataphract[Number(localStorage.getItem("cataphract_level"))].Age == 3) {
			document.getElementById("age_t").innerText = "Castle (3)";
		} else if (data_cataphract[Number(localStorage.getItem("cataphract_level"))].Age == 4) {
			document.getElementById("age_t").innerText = "Imperial (4)";
		} else if (data_cataphract[Number(localStorage.getItem("cataphract_level"))].Age == 5) {
			document.getElementById("age_t").innerText = "New (5)";
		}
		document.getElementById("type_t").innerText = data_cataphract[Number(localStorage.getItem("cataphract_level"))].Type;
		document.getElementById("class_t").innerText = data_cataphract[Number(localStorage.getItem("cataphract_level"))].Class;
		
		/* produce */
		
		document.getElementById("p_food").innerText = data_cataphract[Number(localStorage.getItem("cataphract_level"))].Pfood;
		document.getElementById("p_wood").innerText = data_cataphract[Number(localStorage.getItem("cataphract_level"))].Pwood;
		document.getElementById("p_gold").innerText = data_cataphract[Number(localStorage.getItem("cataphract_level"))].Pgold;
		document.getElementById("p_diamond").innerText = data_cataphract[Number(localStorage.getItem("cataphract_level"))].Pdiamond;
		document.getElementById("p_time").innerText = data_cataphract[Number(localStorage.getItem("cataphract_level"))].Ptime;
		
		if (data_cataphract[Number(localStorage.getItem("cataphract_level"))].Pfood == null) {
			document.getElementById("produce_d1").style.display = "none";
			document.getElementById("produce_d2").style.display = "none";
		}
		
		/* upgrade */
		
		document.getElementById("u_gold").innerText = data_cataphract[Number(localStorage.getItem("cataphract_level"))].Ugold;
		document.getElementById("u_xp").innerText = data_cataphract[Number(localStorage.getItem("cataphract_level"))].Uxp;
		document.getElementById("u_time").innerText = data_cataphract[Number(localStorage.getItem("cataphract_level"))].Utime;
		
		/* abilities */
		
		document.getElementById("abilities_text").innerText = data_cataphract[Number(localStorage.getItem("cataphract_level"))].Atitle;
		document.getElementById("a1_title").innerText = data_cataphract[Number(localStorage.getItem("cataphract_level"))].A1text;
		document.getElementById("a1_text").innerText = data_cataphract[Number(localStorage.getItem("cataphract_level"))].A1;
		document.getElementById("a2_title").innerText = data_cataphract[Number(localStorage.getItem("cataphract_level"))].A2text;
		document.getElementById("a2_text").innerText = data_cataphract[Number(localStorage.getItem("cataphract_level"))].A2;
		document.getElementById("a3_title").innerText = data_cataphract[Number(localStorage.getItem("cataphract_level"))].A3text;
		document.getElementById("a3_text").innerText = data_cataphract[Number(localStorage.getItem("cataphract_level"))].A3;
		
		if (data_cataphract[Number(localStorage.getItem("cataphract_level"))].A2text == null) {
			document.getElementById("abilities_2").style.display = "none";
			document.getElementById("abilities_3").style.display = "none";
		} else if (data_cataphract[Number(localStorage.getItem("cataphract_level"))].A2text != null && data_cataphract[Number(localStorage.getItem("cataphract_level"))].A3text == null) {
			document.getElementById("abilities_3").style.display = "none";
		}
		
    });
}

function troop5_info() {
	document.getElementById("troops_info").style.animation = "troop_info1 0.4s";
	document.getElementById("troops_info_bg").style.display = "flex";
	document.getElementById("troops_info").style.display = "block";
	
	document.getElementById("troops_text").innerText = "Swordsmen";

    $(document).ready(function(){
		
		var jsonData_swordsmen = JSON.stringify(swordsmen);
		var data_swordsmen = JSON.parse(jsonData_swordsmen);
		
		/* info */
		
		if (data_swordsmen[Number(localStorage.getItem("swordsmen_level"))].Age == 1) {
			document.getElementById("age_t").innerText = "Dark (1)";
		} else if (data_swordsmen[Number(localStorage.getItem("swordsmen_level"))].Age == 2) {
			document.getElementById("age_t").innerText = "Feudal (2)";
		} else if (data_swordsmen[Number(localStorage.getItem("swordsmen_level"))].Age == 3) {
			document.getElementById("age_t").innerText = "Castle (3)";
		} else if (data_swordsmen[Number(localStorage.getItem("swordsmen_level"))].Age == 4) {
			document.getElementById("age_t").innerText = "Imperial (4)";
		} else if (data_swordsmen[Number(localStorage.getItem("swordsmen_level"))].Age == 5) {
			document.getElementById("age_t").innerText = "New (5)";
		}
		document.getElementById("type_t").innerText = data_swordsmen[Number(localStorage.getItem("swordsmen_level"))].Type;
		document.getElementById("class_t").innerText = data_swordsmen[Number(localStorage.getItem("swordsmen_level"))].Class;
		
		/* produce */
		
		document.getElementById("p_food").innerText = data_swordsmen[Number(localStorage.getItem("swordsmen_level"))].Pfood;
		document.getElementById("p_wood").innerText = data_swordsmen[Number(localStorage.getItem("swordsmen_level"))].Pwood;
		document.getElementById("p_gold").innerText = data_swordsmen[Number(localStorage.getItem("swordsmen_level"))].Pgold;
		document.getElementById("p_diamond").innerText = data_swordsmen[Number(localStorage.getItem("swordsmen_level"))].Pdiamond;
		document.getElementById("p_time").innerText = data_swordsmen[Number(localStorage.getItem("swordsmen_level"))].Ptime;
		
		if (data_swordsmen[Number(localStorage.getItem("swordsmen_level"))].Pfood == null) {
			document.getElementById("produce_d1").style.display = "none";
			document.getElementById("produce_d2").style.display = "none";
		}
		
		/* upgrade */
		
		document.getElementById("u_gold").innerText = data_swordsmen[Number(localStorage.getItem("swordsmen_level"))].Ugold;
		document.getElementById("u_xp").innerText = data_swordsmen[Number(localStorage.getItem("swordsmen_level"))].Uxp;
		document.getElementById("u_time").innerText = data_swordsmen[Number(localStorage.getItem("swordsmen_level"))].Utime;
		
		/* abilities */
		
		document.getElementById("abilities_text").innerText = data_swordsmen[Number(localStorage.getItem("swordsmen_level"))].Atitle;
		document.getElementById("a1_title").innerText = data_swordsmen[Number(localStorage.getItem("swordsmen_level"))].A1text;
		document.getElementById("a1_text").innerText = data_swordsmen[Number(localStorage.getItem("swordsmen_level"))].A1;
		document.getElementById("a2_title").innerText = data_swordsmen[Number(localStorage.getItem("swordsmen_level"))].A2text;
		document.getElementById("a2_text").innerText = data_swordsmen[Number(localStorage.getItem("swordsmen_level"))].A2;
		document.getElementById("a3_title").innerText = data_swordsmen[Number(localStorage.getItem("swordsmen_level"))].A3text;
		document.getElementById("a3_text").innerText = data_swordsmen[Number(localStorage.getItem("swordsmen_level"))].A3;
		
		if (data_swordsmen[Number(localStorage.getItem("swordsmen_level"))].A2text == null) {
			document.getElementById("abilities_2").style.display = "none";
			document.getElementById("abilities_3").style.display = "none";
		} else if (data_swordsmen[Number(localStorage.getItem("swordsmen_level"))].A2text != null && data_swordsmen[Number(localStorage.getItem("swordsmen_level"))].A3text == null) {
			document.getElementById("abilities_3").style.display = "none";
		}
		
    });
}

function troop6_info() {
	document.getElementById("troops_info").style.animation = "troop_info1 0.4s";
	document.getElementById("troops_info_bg").style.display = "flex";
	document.getElementById("troops_info").style.display = "block";
	
	document.getElementById("troops_text").innerText = "Crossbowmen";

    $(document).ready(function(){
		
		var jsonData_crossbowmen = JSON.stringify(crossbowmen);
		var data_crossbowmen = JSON.parse(jsonData_crossbowmen);
		
		/* info */
		
		if (data_crossbowmen[Number(localStorage.getItem("crossbowmen_level"))].Age == 1) {
			document.getElementById("age_t").innerText = "Dark (1)";
		} else if (data_crossbowmen[Number(localStorage.getItem("crossbowmen_level"))].Age == 2) {
			document.getElementById("age_t").innerText = "Feudal (2)";
		} else if (data_crossbowmen[Number(localStorage.getItem("crossbowmen_level"))].Age == 3) {
			document.getElementById("age_t").innerText = "Castle (3)";
		} else if (data_crossbowmen[Number(localStorage.getItem("crossbowmen_level"))].Age == 4) {
			document.getElementById("age_t").innerText = "Imperial (4)";
		} else if (data_crossbowmen[Number(localStorage.getItem("crossbowmen_level"))].Age == 5) {
			document.getElementById("age_t").innerText = "New (5)";
		}
		document.getElementById("type_t").innerText = data_crossbowmen[Number(localStorage.getItem("crossbowmen_level"))].Type;
		document.getElementById("class_t").innerText = data_crossbowmen[Number(localStorage.getItem("crossbowmen_level"))].Class;
		
		/* produce */
		
		document.getElementById("p_food").innerText = data_crossbowmen[Number(localStorage.getItem("crossbowmen_level"))].Pfood;
		document.getElementById("p_wood").innerText = data_crossbowmen[Number(localStorage.getItem("crossbowmen_level"))].Pwood;
		document.getElementById("p_gold").innerText = data_crossbowmen[Number(localStorage.getItem("crossbowmen_level"))].Pgold;
		document.getElementById("p_diamond").innerText = data_crossbowmen[Number(localStorage.getItem("crossbowmen_level"))].Pdiamond;
		document.getElementById("p_time").innerText = data_crossbowmen[Number(localStorage.getItem("crossbowmen_level"))].Ptime;
		
		if (data_crossbowmen[Number(localStorage.getItem("crossbowmen_level"))].Pfood == null) {
			document.getElementById("produce_d1").style.display = "none";
			document.getElementById("produce_d2").style.display = "none";
		}
		
		/* upgrade */
		
		document.getElementById("u_gold").innerText = data_crossbowmen[Number(localStorage.getItem("crossbowmen_level"))].Ugold;
		document.getElementById("u_xp").innerText = data_crossbowmen[Number(localStorage.getItem("crossbowmen_level"))].Uxp;
		document.getElementById("u_time").innerText = data_crossbowmen[Number(localStorage.getItem("crossbowmen_level"))].Utime;
		
		/* abilities */
		
		document.getElementById("abilities_text").innerText = data_crossbowmen[Number(localStorage.getItem("crossbowmen_level"))].Atitle;
		document.getElementById("a1_title").innerText = data_crossbowmen[Number(localStorage.getItem("crossbowmen_level"))].A1text;
		document.getElementById("a1_text").innerText = data_crossbowmen[Number(localStorage.getItem("crossbowmen_level"))].A1;
		document.getElementById("a2_title").innerText = data_crossbowmen[Number(localStorage.getItem("crossbowmen_level"))].A2text;
		document.getElementById("a2_text").innerText = data_crossbowmen[Number(localStorage.getItem("crossbowmen_level"))].A2;
		document.getElementById("a3_title").innerText = data_crossbowmen[Number(localStorage.getItem("crossbowmen_level"))].A3text;
		document.getElementById("a3_text").innerText = data_crossbowmen[Number(localStorage.getItem("crossbowmen_level"))].A3;
		
		if (data_crossbowmen[Number(localStorage.getItem("crossbowmen_level"))].A2text == null) {
			document.getElementById("abilities_2").style.display = "none";
			document.getElementById("abilities_3").style.display = "none";
		} else if (data_crossbowmen[Number(localStorage.getItem("crossbowmen_level"))].A2text != null && data_crossbowmen[Number(localStorage.getItem("crossbowmen_level"))].A3text == null) {
			document.getElementById("abilities_3").style.display = "none";
		}
		
    });
}

function troop7_info() {
	document.getElementById("troops_info").style.animation = "troop_info1 0.4s";
	document.getElementById("troops_info_bg").style.display = "flex";
	document.getElementById("troops_info").style.display = "block";
	
	document.getElementById("troops_text").innerText = "Arquebusiers";

    $(document).ready(function(){
		
		var jsonData_arquebusiers = JSON.stringify(arquebusiers);
		var data_arquebusiers = JSON.parse(jsonData_arquebusiers);
		
		/* info */
		
		if (data_arquebusiers[Number(localStorage.getItem("arquebusiers_level"))].Age == 1) {
			document.getElementById("age_t").innerText = "Dark (1)";
		} else if (data_arquebusiers[Number(localStorage.getItem("arquebusiers_level"))].Age == 2) {
			document.getElementById("age_t").innerText = "Feudal (2)";
		} else if (data_arquebusiers[Number(localStorage.getItem("arquebusiers_level"))].Age == 3) {
			document.getElementById("age_t").innerText = "Castle (3)";
		} else if (data_arquebusiers[Number(localStorage.getItem("arquebusiers_level"))].Age == 4) {
			document.getElementById("age_t").innerText = "Imperial (4)";
		} else if (data_arquebusiers[Number(localStorage.getItem("arquebusiers_level"))].Age == 5) {
			document.getElementById("age_t").innerText = "New (5)";
		}
		document.getElementById("type_t").innerText = data_arquebusiers[Number(localStorage.getItem("arquebusiers_level"))].Type;
		document.getElementById("class_t").innerText = data_arquebusiers[Number(localStorage.getItem("arquebusiers_level"))].Class;
		
		/* produce */
		
		document.getElementById("p_food").innerText = data_arquebusiers[Number(localStorage.getItem("arquebusiers_level"))].Pfood;
		document.getElementById("p_wood").innerText = data_arquebusiers[Number(localStorage.getItem("arquebusiers_level"))].Pwood;
		document.getElementById("p_gold").innerText = data_arquebusiers[Number(localStorage.getItem("arquebusiers_level"))].Pgold;
		document.getElementById("p_diamond").innerText = data_arquebusiers[Number(localStorage.getItem("arquebusiers_level"))].Pdiamond;
		document.getElementById("p_time").innerText = data_arquebusiers[Number(localStorage.getItem("arquebusiers_level"))].Ptime;
		
		if (data_arquebusiers[Number(localStorage.getItem("arquebusiers_level"))].Pfood == null) {
			document.getElementById("produce_d1").style.display = "none";
			document.getElementById("produce_d2").style.display = "none";
		}
		
		/* upgrade */
		
		document.getElementById("u_gold").innerText = data_arquebusiers[Number(localStorage.getItem("arquebusiers_level"))].Ugold;
		document.getElementById("u_xp").innerText = data_arquebusiers[Number(localStorage.getItem("arquebusiers_level"))].Uxp;
		document.getElementById("u_time").innerText = data_arquebusiers[Number(localStorage.getItem("arquebusiers_level"))].Utime;
		
		/* abilities */
		
		document.getElementById("abilities_text").innerText = data_arquebusiers[Number(localStorage.getItem("arquebusiers_level"))].Atitle;
		document.getElementById("a1_title").innerText = data_arquebusiers[Number(localStorage.getItem("arquebusiers_level"))].A1text;
		document.getElementById("a1_text").innerText = data_arquebusiers[Number(localStorage.getItem("arquebusiers_level"))].A1;
		document.getElementById("a2_title").innerText = data_arquebusiers[Number(localStorage.getItem("arquebusiers_level"))].A2text;
		document.getElementById("a2_text").innerText = data_arquebusiers[Number(localStorage.getItem("arquebusiers_level"))].A2;
		document.getElementById("a3_title").innerText = data_arquebusiers[Number(localStorage.getItem("arquebusiers_level"))].A3text;
		document.getElementById("a3_text").innerText = data_arquebusiers[Number(localStorage.getItem("arquebusiers_level"))].A3;
		
		if (data_arquebusiers[Number(localStorage.getItem("arquebusiers_level"))].A2text == null) {
			document.getElementById("abilities_2").style.display = "none";
			document.getElementById("abilities_3").style.display = "none";
		} else if (data_arquebusiers[Number(localStorage.getItem("arquebusiers_level"))].A2text != null && data_arquebusiers[Number(localStorage.getItem("arquebusiers_level"))].A3text == null) {
			document.getElementById("abilities_3").style.display = "none";
		}
		
    });
}

/* spearman up and produce */

function spearman_produce() {
	
	var c_value = document.getElementById("spearman_input").value;
	var cost_value = Math.floor(Number(c_value) * 50);
	
	if (c_value != null && c_value > 0) {
	
	if (Number(cost_value) <= Number(localStorage.getItem("gold")) && Number(cost_value) <= Number(localStorage.getItem("food"))) {
			
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + Math.floor(30 * Number(document.getElementById("spearman_input").value)));
		var ms_time = now.getTime();
		localStorage.setItem("spearman_produce_time", ms_time);
		
		localStorage.setItem("spearman_produce_price", Math.floor(50 * Number(document.getElementById("spearman_input").value)));
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + Math.floor(50 * Number(document.getElementById("spearman_input").value))));
			
		localStorage.setItem("food_cash", Math.floor(Number(localStorage.getItem("food_cash")) + Math.floor(50 * Number(document.getElementById("spearman_input").value))));
		
		localStorage.setItem("spearman_producer", "on");
		
		localStorage.setItem("spearman_trained", Number(document.getElementById("spearman_input").value))
		
		location.reload();
			
	}
	
	}
	
}

function spearman_produce_cancel() {
	
	localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) - Number(localStorage.getItem("spearman_produce_price"))));
	localStorage.setItem("food_cash", Math.floor(Number(localStorage.getItem("food_cash")) - Number(localStorage.getItem("spearman_produce_price"))));
	
	localStorage.removeItem("spearman_producer");
	localStorage.removeItem("spearman_produce_time");
	
	location.reload();
	
}

setInterval(function(){
	
	if (localStorage.getItem("spearman_producer") == "on") {
		
		document.getElementById("build_right1").style.display = "none";
		document.getElementById("build_right2").style.display = "none";
		document.getElementById("build_right3").style.display = "none";
		document.getElementById("build_right4").style.display = "none";
		document.getElementById("build_right5").style.display = "none";
		document.getElementById("build_right6").style.display = "none";
		document.getElementById("build_right7").style.display = "none";
		document.getElementById("build_producer1").style.display = "block";
		document.getElementById("build_producer2").style.display = "block";
		document.getElementById("build_producer3").style.display = "block";
		document.getElementById("build_producer4").style.display = "block";
		document.getElementById("build_producer5").style.display = "block";
		document.getElementById("build_producer6").style.display = "block";
		document.getElementById("build_producer7").style.display = "block";
		
		document.getElementById("build_produce_board2").style.display = "none";
		document.getElementById("build_produce_board3").style.display = "none";
		document.getElementById("build_produce_board4").style.display = "none";
		document.getElementById("build_produce_board5").style.display = "none";
		document.getElementById("build_produce_board6").style.display = "none";
		document.getElementById("build_produce_board7").style.display = "none";
		
		var sp_ms = Math.floor(Number(localStorage.getItem("spearman_produce_time")) - Date.now());
		var sp_s = Math.floor(sp_ms / 1000);
		var sp_m = Math.floor(sp_s / 60);
		sp_s = sp_s % 60;
		var sp_h = Math.floor(sp_m / 60);
		sp_m = sp_m % 60;
		var sp_d = Math.floor(sp_h / 24);
		sp_h = sp_h % 24;
		
		sp_d = sp_d.toString().padStart(2, "0");
		sp_h = sp_h.toString().padStart(2, "0");
		sp_m = sp_m.toString().padStart(2, "0");
		sp_s = sp_s.toString().padStart(2, "0");
		
		document.getElementById("spearman_produce_d").innerText = sp_d;
		document.getElementById("spearman_produce_h").innerText = sp_h;
		document.getElementById("spearman_produce_m").innerText = sp_m;
		document.getElementById("spearman_produce_s").innerText = sp_s;
		
		if (Math.floor(Number(localStorage.getItem("spearman_produce_time")) - Date.now()) < 0) {
		
		localStorage.removeItem("spearman_producer");
		localStorage.removeItem("spearman_produce_time");
		
		document.getElementById("build_right1").style.display = "block";
		document.getElementById("build_right2").style.display = "block";
		document.getElementById("build_right3").style.display = "block";
		document.getElementById("build_right4").style.display = "block";
		document.getElementById("build_right5").style.display = "block";
		document.getElementById("build_right6").style.display = "block";
		document.getElementById("build_right7").style.display = "block";
		document.getElementById("build_producer1").style.display = "none";
		document.getElementById("build_producer2").style.display = "none";
		document.getElementById("build_producer3").style.display = "none";
		document.getElementById("build_producer4").style.display = "none";
		document.getElementById("build_producer5").style.display = "none";
		document.getElementById("build_producer6").style.display = "none";
		document.getElementById("build_producer7").style.display = "none";
		
		localStorage.setItem("spearman_have", Math.floor(Number(localStorage.getItem("spearman_have")) + Number(localStorage.getItem("spearman_trained"))));
		
		localStorage.removeItem("spearman_trained");
		
		location.reload();
		}
		
		
	}
	
	
}, 10);

function spearman_up() {
	
	if (Number(localStorage.getItem("spearman_level")) == 0 && Number(localStorage.getItem("gold")) >= 40) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 20);
		var ms_time = now.getTime();
		localStorage.setItem("spearman_up_time", ms_time);
		
		localStorage.setItem("spearman_up_price", 40);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 40));
		
		localStorage.setItem("spearman_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spearman_level")) == 1 && Number(localStorage.getItem("gold")) >= 60) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 40);
		var ms_time = now.getTime();
		localStorage.setItem("spearman_up_time", ms_time);
		
		localStorage.setItem("spearman_up_price", 60);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 60));
		
		localStorage.setItem("spearman_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spearman_level")) == 2 && Number(localStorage.getItem("gold")) >= 120) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 80);
		var ms_time = now.getTime();
		localStorage.setItem("spearman_up_time", ms_time);
		
		localStorage.setItem("spearman_up_price", 120);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 120));
		
		localStorage.setItem("spearman_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spearman_level")) == 3 && Number(localStorage.getItem("gold")) >= 250) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 160);
		var ms_time = now.getTime();
		localStorage.setItem("spearman_up_time", ms_time);
		
		localStorage.setItem("spearman_up_price", 250);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 250));
		
		localStorage.setItem("spearman_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spearman_level")) == 4 && Number(localStorage.getItem("gold")) >= 400) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 320);
		var ms_time = now.getTime();
		localStorage.setItem("spearman_up_time", ms_time);
		
		localStorage.setItem("spearman_up_price", 400);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 400));
		
		localStorage.setItem("spearman_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spearman_level")) == 5 && Number(localStorage.getItem("gold")) >= 700) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1220);
		var ms_time = now.getTime();
		localStorage.setItem("spearman_up_time", ms_time);
		
		localStorage.setItem("spearman_up_price", 700);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 700));
		
		localStorage.setItem("spearman_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spearman_level")) == 6 && Number(localStorage.getItem("gold")) >= 1100) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1840);
		var ms_time = now.getTime();
		localStorage.setItem("spearman_up_time", ms_time);
		
		localStorage.setItem("spearman_up_price", 1100);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 1100));
		
		localStorage.setItem("spearman_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spearman_level")) == 7 && Number(localStorage.getItem("gold")) >= 1450) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 2720);
		var ms_time = now.getTime();
		localStorage.setItem("spearman_up_time", ms_time);
		
		localStorage.setItem("spearman_up_price", 1450);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 1450));
		
		localStorage.setItem("spearman_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spearman_level")) == 8 && Number(localStorage.getItem("gold")) >= 1800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 4540);
		var ms_time = now.getTime();
		localStorage.setItem("spearman_up_time", ms_time);
		
		localStorage.setItem("spearman_up_price", 1800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 1800));
		
		localStorage.setItem("spearman_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spearman_level")) == 9 && Number(localStorage.getItem("gold")) >= 2200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 6620);
		var ms_time = now.getTime();
		localStorage.setItem("spearman_up_time", ms_time);
		
		localStorage.setItem("spearman_up_price", 2200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 2200));
		
		localStorage.setItem("spearman_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spearman_level")) == 10 && Number(localStorage.getItem("gold")) >= 3000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 14740);
		var ms_time = now.getTime();
		localStorage.setItem("spearman_up_time", ms_time);
		
		localStorage.setItem("spearman_up_price", 3000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 3000));
		
		localStorage.setItem("spearman_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spearman_level")) == 11 && Number(localStorage.getItem("gold")) >= 3600) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 19220);
		var ms_time = now.getTime();
		localStorage.setItem("spearman_up_time", ms_time);
		
		localStorage.setItem("spearman_up_price", 3600);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 3600));
		
		localStorage.setItem("spearman_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spearman_level")) == 12 && Number(localStorage.getItem("gold")) >= 4200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 24340);
		var ms_time = now.getTime();
		localStorage.setItem("spearman_up_time", ms_time);
		
		localStorage.setItem("spearman_up_price", 4200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 4200));
		
		localStorage.setItem("spearman_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spearman_level")) == 13 && Number(localStorage.getItem("gold")) >= 4900) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 29720);
		var ms_time = now.getTime();
		localStorage.setItem("spearman_up_time", ms_time);
		
		localStorage.setItem("spearman_up_price", 4900);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 4900));
		
		localStorage.setItem("spearman_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spearman_level")) == 14 && Number(localStorage.getItem("gold")) >= 5700) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 35740);
		var ms_time = now.getTime();
		localStorage.setItem("spearman_up_time", ms_time);
		
		localStorage.setItem("spearman_up_price", 5700);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 5700));
		
		localStorage.setItem("spearman_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spearman_level")) == 15 && Number(localStorage.getItem("gold")) >= 8500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 64820);
		var ms_time = now.getTime();
		localStorage.setItem("spearman_up_time", ms_time);
		
		localStorage.setItem("spearman_up_price", 8500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 8500));
		
		localStorage.setItem("spearman_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spearman_level")) == 16 && Number(localStorage.getItem("gold")) >= 9600) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 73240);
		var ms_time = now.getTime();
		localStorage.setItem("spearman_up_time", ms_time);
		
		localStorage.setItem("spearman_up_price", 9600);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 9600));
		
		localStorage.setItem("spearman_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spearman_level")) == 17 && Number(localStorage.getItem("gold")) >= 11200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 82510);
		var ms_time = now.getTime();
		localStorage.setItem("spearman_up_time", ms_time);
		
		localStorage.setItem("spearman_up_price", 11200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 11200));
		
		localStorage.setItem("spearman_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spearman_level")) == 18 && Number(localStorage.getItem("gold")) >= 15100) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 91840);
		var ms_time = now.getTime();
		localStorage.setItem("spearman_up_time", ms_time);
		
		localStorage.setItem("spearman_up_price", 15100);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 15100));
		
		localStorage.setItem("spearman_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spearman_level")) == 19 && Number(localStorage.getItem("gold")) >= 20300) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 103520);
		var ms_time = now.getTime();
		localStorage.setItem("spearman_up_time", ms_time);
		
		localStorage.setItem("spearman_up_price", 20300);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 20300));
		
		localStorage.setItem("spearman_upper", "on");
		
		location.reload();
		
	}
	
}

function spearman_up_cancel() {
	
	localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) - Number(localStorage.getItem("spearman_up_price"))));
	
	localStorage.removeItem("spearman_upper");
	localStorage.removeItem("spearman_up_time");
	
	location.reload();
	
}

setInterval(function(){
	
	if (localStorage.getItem("spearman_upper") == "on") {
		
		document.getElementById("build_right1").style.display = "none";
		document.getElementById("build_right2").style.display = "none";
		document.getElementById("build_right3").style.display = "none";
		document.getElementById("build_right4").style.display = "none";
		document.getElementById("build_right5").style.display = "none";
		document.getElementById("build_right6").style.display = "none";
		document.getElementById("build_right7").style.display = "none";
		document.getElementById("build_upper1").style.display = "block";
		document.getElementById("build_upper2").style.display = "block";
		document.getElementById("build_upper3").style.display = "block";
		document.getElementById("build_upper4").style.display = "block";
		document.getElementById("build_upper5").style.display = "block";
		document.getElementById("build_upper6").style.display = "block";
		document.getElementById("build_upper7").style.display = "block";
		
		document.getElementById("build_up_board2").style.display = "none";
		document.getElementById("build_up_board3").style.display = "none";
		document.getElementById("build_up_board4").style.display = "none";
		document.getElementById("build_up_board5").style.display = "none";
		document.getElementById("build_up_board6").style.display = "none";
		document.getElementById("build_up_board7").style.display = "none";
		
		var s_ms = Math.floor(Number(localStorage.getItem("spearman_up_time")) - Date.now());
		var s_s = Math.floor(s_ms / 1000);
		var s_m = Math.floor(s_s / 60);
		s_s = s_s % 60;
		var s_h = Math.floor(s_m / 60);
		s_m = s_m % 60;
		var s_d = Math.floor(s_h / 24);
		s_h = s_h % 24;
		
		s_d = s_d.toString().padStart(2, "0");
		s_h = s_h.toString().padStart(2, "0");
		s_m = s_m.toString().padStart(2, "0");
		s_s = s_s.toString().padStart(2, "0");
		
		document.getElementById("spearman_up_d").innerText = s_d;
		document.getElementById("spearman_up_h").innerText = s_h;
		document.getElementById("spearman_up_m").innerText = s_m;
		document.getElementById("spearman_up_s").innerText = s_s;
		
		if (Math.floor(Number(localStorage.getItem("spearman_up_time")) - Date.now()) < 0) {
		
		localStorage.removeItem("spearman_upper");
		localStorage.removeItem("spearman_up_time");
		
		document.getElementById("build_right1").style.display = "block";
		document.getElementById("build_right2").style.display = "block";
		document.getElementById("build_right3").style.display = "block";
		document.getElementById("build_right4").style.display = "block";
		document.getElementById("build_right5").style.display = "block";
		document.getElementById("build_right6").style.display = "block";
		document.getElementById("build_right7").style.display = "block";
		document.getElementById("build_upper1").style.display = "none";
		document.getElementById("build_upper2").style.display = "none";
		document.getElementById("build_upper3").style.display = "none";
		document.getElementById("build_upper4").style.display = "none";
		document.getElementById("build_upper5").style.display = "none";
		document.getElementById("build_upper6").style.display = "none";
		document.getElementById("build_upper7").style.display = "none";
		
		localStorage.setItem("spearman_level", Math.floor(Number(localStorage.getItem("spearman_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 4));
		
		location.reload();
		}
		
		
	}
	
	
}, 10);

setInterval(function(){
	
	document.getElementById("spearman_level").innerText = Number(localStorage.getItem("spearman_level"));
	if (Number(localStorage.getItem("spearman_level")) != 20) {
	document.getElementById("spearman_next_level").innerText = Math.floor(Number(localStorage.getItem("spearman_level")) + 1);
	} else if (Number(localStorage.getItem("spearman_level")) == 20) {
		document.getElementById("spearman_next_level").innerText = "Max";
	}
	var result1 = Math.floor(Number(localStorage.getItem("gold")) / 50);
	var result2 = Math.floor(Number(localStorage.getItem("food")) / 50);
	var result3 = Math.min(result1, result2);
	document.getElementById("max_spearman").innerText = Math.floor(result3);
	document.getElementById("total_spearman").innerText = Number(localStorage.getItem("spearman_have"));
	document.getElementById("spearman_trained_amount").innerText = Number(localStorage.getItem("spearman_trained"));
	document.getElementById("spearman_produce_speed_up_cost").innerText = Number(localStorage.getItem("spearman_trained"));
	
}, 10);

function spearman_up_speed_up() {
	if (Number(localStorage.getItem("diamond")) >= 50) {
		
		localStorage.setItem("diamond_cash", Math.floor(Number(localStorage.getItem("diamond_cash")) + 50));
		
		localStorage.setItem("spearman_level", Math.floor(Number(localStorage.getItem("spearman_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 4));
		
		localStorage.removeItem("spearman_upper");
		localStorage.removeItem("spearman_up_time");
		
		location.reload();
		
	}
}

function spearman_produce_speed_up() {
	
	if (Number(localStorage.getItem("diamond")) >= Number(localStorage.getItem("spearman_trained"))) {
		
	localStorage.setItem("diamond_cash", Math.floor(Number(localStorage.getItem("diamond_cash")) + Number(localStorage.getItem("spearman_trained"))));
		
	localStorage.setItem("spearman_have", Math.floor(Number(localStorage.getItem("spearman_have")) + Number(localStorage.getItem("spearman_trained"))));
		
	localStorage.removeItem("spearman_trained");
	localStorage.removeItem("spearman_producer");
	localStorage.removeItem("spearman_produce_time");
	
	location.reload();
	
	}
	
}

/* archer up and produce */

function archer_produce() {
	
	var c_value = document.getElementById("archer_input").value;
	var cost_value = Math.floor(Number(c_value) * 50);
	
	if (c_value != null && c_value > 0) {
	
	if (Number(cost_value) <= Number(localStorage.getItem("gold")) && Number(cost_value) <= Number(localStorage.getItem("wood"))) {
			
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + Math.floor(30 * Number(document.getElementById("archer_input").value)));
		var ms_time = now.getTime();
		localStorage.setItem("archer_produce_time", ms_time);
		
		localStorage.setItem("archer_produce_price", Math.floor(50 * Number(document.getElementById("archer_input").value)));
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + Math.floor(50 * Number(document.getElementById("archer_input").value))));
			
		localStorage.setItem("wood_cash", Math.floor(Number(localStorage.getItem("wood_cash")) + Math.floor(50 * Number(document.getElementById("archer_input").value))));
		
		localStorage.setItem("archer_producer", "on");
		
		localStorage.setItem("archer_trained", Number(document.getElementById("archer_input").value))
		
		location.reload();
			
	}
	
	}
	
}

function archer_produce_cancel() {
	
	localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) - Number(localStorage.getItem("archer_produce_price"))));
	localStorage.setItem("wood_cash", Math.floor(Number(localStorage.getItem("wood_cash")) - Number(localStorage.getItem("archer_produce_price"))));
	
	localStorage.removeItem("archer_producer");
	localStorage.removeItem("archer_produce_time");
	
	location.reload();
	
}

setInterval(function(){
	
	if (localStorage.getItem("archer_producer") == "on") {
		
		document.getElementById("build_right1").style.display = "none";
		document.getElementById("build_right2").style.display = "none";
		document.getElementById("build_right3").style.display = "none";
		document.getElementById("build_right4").style.display = "none";
		document.getElementById("build_right5").style.display = "none";
		document.getElementById("build_right6").style.display = "none";
		document.getElementById("build_right7").style.display = "none";
		document.getElementById("build_producer1").style.display = "block";
		document.getElementById("build_producer2").style.display = "block";
		document.getElementById("build_producer3").style.display = "block";
		document.getElementById("build_producer4").style.display = "block";
		document.getElementById("build_producer5").style.display = "block";
		document.getElementById("build_producer6").style.display = "block";
		document.getElementById("build_producer7").style.display = "block";
		
		document.getElementById("build_produce_board1").style.display = "none";
		document.getElementById("build_produce_board3").style.display = "none";
		document.getElementById("build_produce_board4").style.display = "none";
		document.getElementById("build_produce_board5").style.display = "none";
		document.getElementById("build_produce_board6").style.display = "none";
		document.getElementById("build_produce_board7").style.display = "none";
		
		var ap_ms = Math.floor(Number(localStorage.getItem("archer_produce_time")) - Date.now());
		var ap_s = Math.floor(ap_ms / 1000);
		var ap_m = Math.floor(ap_s / 60);
		ap_s = ap_s % 60;
		var ap_h = Math.floor(ap_m / 60);
		ap_m = ap_m % 60;
		var ap_d = Math.floor(ap_h / 24);
		ap_h = ap_h % 24;
		
		ap_d = ap_d.toString().padStart(2, "0");
		ap_h = ap_h.toString().padStart(2, "0");
		ap_m = ap_m.toString().padStart(2, "0");
		ap_s = ap_s.toString().padStart(2, "0");
		
		document.getElementById("archer_produce_d").innerText = ap_d;
		document.getElementById("archer_produce_h").innerText = ap_h;
		document.getElementById("archer_produce_m").innerText = ap_m;
		document.getElementById("archer_produce_s").innerText = ap_s;
		
		if (Math.floor(Number(localStorage.getItem("archer_produce_time")) - Date.now()) < 0) {
		
		localStorage.removeItem("archer_producer");
		localStorage.removeItem("archer_produce_time");
		
		document.getElementById("build_right1").style.display = "block";
		document.getElementById("build_right2").style.display = "block";
		document.getElementById("build_right3").style.display = "block";
		document.getElementById("build_right4").style.display = "block";
		document.getElementById("build_right5").style.display = "block";
		document.getElementById("build_right6").style.display = "block";
		document.getElementById("build_right7").style.display = "block";
		document.getElementById("build_producer1").style.display = "none";
		document.getElementById("build_producer2").style.display = "none";
		document.getElementById("build_producer3").style.display = "none";
		document.getElementById("build_producer4").style.display = "none";
		document.getElementById("build_producer5").style.display = "none";
		document.getElementById("build_producer6").style.display = "none";
		document.getElementById("build_producer7").style.display = "none";
		
		localStorage.setItem("archer_have", Math.floor(Number(localStorage.getItem("archer_have")) + Number(localStorage.getItem("archer_trained"))));
		
		localStorage.removeItem("archer_trained");
		
		location.reload();
		}
		
		
	}
	
	
}, 10);

function archer_up() {
	
	if (Number(localStorage.getItem("archer_level")) == 0 && Number(localStorage.getItem("gold")) >= 40) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 20);
		var ms_time = now.getTime();
		localStorage.setItem("archer_up_time", ms_time);
		
		localStorage.setItem("archer_up_price", 40);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 40));
		
		localStorage.setItem("archer_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("archer_level")) == 1 && Number(localStorage.getItem("gold")) >= 60) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 40);
		var ms_time = now.getTime();
		localStorage.setItem("archer_up_time", ms_time);
		
		localStorage.setItem("archer_up_price", 60);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 60));
		
		localStorage.setItem("archer_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("archer_level")) == 2 && Number(localStorage.getItem("gold")) >= 120) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 80);
		var ms_time = now.getTime();
		localStorage.setItem("archer_up_time", ms_time);
		
		localStorage.setItem("archer_up_price", 120);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 120));
		
		localStorage.setItem("archer_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("archer_level")) == 3 && Number(localStorage.getItem("gold")) >= 250) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 160);
		var ms_time = now.getTime();
		localStorage.setItem("archer_up_time", ms_time);
		
		localStorage.setItem("archer_up_price", 250);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 250));
		
		localStorage.setItem("archer_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("archer_level")) == 4 && Number(localStorage.getItem("gold")) >= 400) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 320);
		var ms_time = now.getTime();
		localStorage.setItem("archer_up_time", ms_time);
		
		localStorage.setItem("archer_up_price", 400);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 400));
		
		localStorage.setItem("archer_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("archer_level")) == 5 && Number(localStorage.getItem("gold")) >= 700) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1220);
		var ms_time = now.getTime();
		localStorage.setItem("archer_up_time", ms_time);
		
		localStorage.setItem("archer_up_price", 700);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 700));
		
		localStorage.setItem("archer_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("archer_level")) == 6 && Number(localStorage.getItem("gold")) >= 1100) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1840);
		var ms_time = now.getTime();
		localStorage.setItem("archer_up_time", ms_time);
		
		localStorage.setItem("archer_up_price", 1100);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 1100));
		
		localStorage.setItem("archer_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("archer_level")) == 7 && Number(localStorage.getItem("gold")) >= 1450) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 2720);
		var ms_time = now.getTime();
		localStorage.setItem("archer_up_time", ms_time);
		
		localStorage.setItem("archer_up_price", 1450);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 1450));
		
		localStorage.setItem("archer_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("archer_level")) == 8 && Number(localStorage.getItem("gold")) >= 1800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 4540);
		var ms_time = now.getTime();
		localStorage.setItem("archer_up_time", ms_time);
		
		localStorage.setItem("archer_up_price", 1800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 1800));
		
		localStorage.setItem("archer_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("archer_level")) == 9 && Number(localStorage.getItem("gold")) >= 2200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 6620);
		var ms_time = now.getTime();
		localStorage.setItem("archer_up_time", ms_time);
		
		localStorage.setItem("archer_up_price", 2200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 2200));
		
		localStorage.setItem("archer_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("archer_level")) == 10 && Number(localStorage.getItem("gold")) >= 3000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 14740);
		var ms_time = now.getTime();
		localStorage.setItem("archer_up_time", ms_time);
		
		localStorage.setItem("archer_up_price", 3000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 3000));
		
		localStorage.setItem("archer_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("archer_level")) == 11 && Number(localStorage.getItem("gold")) >= 3600) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 19220);
		var ms_time = now.getTime();
		localStorage.setItem("archer_up_time", ms_time);
		
		localStorage.setItem("archer_up_price", 3600);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 3600));
		
		localStorage.setItem("archer_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("archer_level")) == 12 && Number(localStorage.getItem("gold")) >= 4200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 24340);
		var ms_time = now.getTime();
		localStorage.setItem("archer_up_time", ms_time);
		
		localStorage.setItem("archer_up_price", 4200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 4200));
		
		localStorage.setItem("archer_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("archer_level")) == 13 && Number(localStorage.getItem("gold")) >= 4900) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 29720);
		var ms_time = now.getTime();
		localStorage.setItem("archer_up_time", ms_time);
		
		localStorage.setItem("archer_up_price", 4900);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 4900));
		
		localStorage.setItem("archer_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("archer_level")) == 14 && Number(localStorage.getItem("gold")) >= 5700) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 35740);
		var ms_time = now.getTime();
		localStorage.setItem("archer_up_time", ms_time);
		
		localStorage.setItem("archer_up_price", 5700);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 5700));
		
		localStorage.setItem("archer_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("archer_level")) == 15 && Number(localStorage.getItem("gold")) >= 8500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 64820);
		var ms_time = now.getTime();
		localStorage.setItem("archer_up_time", ms_time);
		
		localStorage.setItem("archer_up_price", 8500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 8500));
		
		localStorage.setItem("archer_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("archer_level")) == 16 && Number(localStorage.getItem("gold")) >= 9600) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 73240);
		var ms_time = now.getTime();
		localStorage.setItem("archer_up_time", ms_time);
		
		localStorage.setItem("archer_up_price", 9600);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 9600));
		
		localStorage.setItem("archer_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("archer_level")) == 17 && Number(localStorage.getItem("gold")) >= 11200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 82510);
		var ms_time = now.getTime();
		localStorage.setItem("archer_up_time", ms_time);
		
		localStorage.setItem("archer_up_price", 11200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 11200));
		
		localStorage.setItem("archer_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("archer_level")) == 18 && Number(localStorage.getItem("gold")) >= 15100) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 91840);
		var ms_time = now.getTime();
		localStorage.setItem("archer_up_time", ms_time);
		
		localStorage.setItem("archer_up_price", 15100);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 15100));
		
		localStorage.setItem("archer_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("archer_level")) == 19 && Number(localStorage.getItem("gold")) >= 20300) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 103520);
		var ms_time = now.getTime();
		localStorage.setItem("archer_up_time", ms_time);
		
		localStorage.setItem("archer_up_price", 20300);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 20300));
		
		localStorage.setItem("archer_upper", "on");
		
		location.reload();
		
	}
	
}

function archer_up_cancel() {
	
	localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) - Number(localStorage.getItem("archer_up_price"))));
	
	localStorage.removeItem("archer_upper");
	localStorage.removeItem("archer_up_time");
	
	location.reload();
	
}

setInterval(function(){
	
	if (localStorage.getItem("archer_upper") == "on") {
		
		document.getElementById("build_right1").style.display = "none";
		document.getElementById("build_right2").style.display = "none";
		document.getElementById("build_right3").style.display = "none";
		document.getElementById("build_right4").style.display = "none";
		document.getElementById("build_right5").style.display = "none";
		document.getElementById("build_right6").style.display = "none";
		document.getElementById("build_right7").style.display = "none";
		document.getElementById("build_upper1").style.display = "block";
		document.getElementById("build_upper2").style.display = "block";
		document.getElementById("build_upper3").style.display = "block";
		document.getElementById("build_upper4").style.display = "block";
		document.getElementById("build_upper5").style.display = "block";
		document.getElementById("build_upper6").style.display = "block";
		document.getElementById("build_upper7").style.display = "block";
		
		document.getElementById("build_up_board1").style.display = "none";
		document.getElementById("build_up_board3").style.display = "none";
		document.getElementById("build_up_board4").style.display = "none";
		document.getElementById("build_up_board5").style.display = "none";
		document.getElementById("build_up_board6").style.display = "none";
		document.getElementById("build_up_board7").style.display = "none";
		
		var a_ms = Math.floor(Number(localStorage.getItem("archer_up_time")) - Date.now());
		var a_s = Math.floor(a_ms / 1000);
		var a_m = Math.floor(a_s / 60);
		a_s = a_s % 60;
		var a_h = Math.floor(a_m / 60);
		a_m = a_m % 60;
		var a_d = Math.floor(a_h / 24);
		a_h = a_h % 24;
		
		a_d = a_d.toString().padStart(2, "0");
		a_h = a_h.toString().padStart(2, "0");
		a_m = a_m.toString().padStart(2, "0");
		a_s = a_s.toString().padStart(2, "0");
		
		document.getElementById("archer_up_d").innerText = a_d;
		document.getElementById("archer_up_h").innerText = a_h;
		document.getElementById("archer_up_m").innerText = a_m;
		document.getElementById("archer_up_s").innerText = a_s;
		
		if (Math.floor(Number(localStorage.getItem("archer_up_time")) - Date.now()) < 0) {
		
		localStorage.removeItem("archer_upper");
		localStorage.removeItem("archer_up_time");
		
		document.getElementById("build_right1").style.display = "block";
		document.getElementById("build_right2").style.display = "block";
		document.getElementById("build_right3").style.display = "block";
		document.getElementById("build_right4").style.display = "block";
		document.getElementById("build_right5").style.display = "block";
		document.getElementById("build_right6").style.display = "block";
		document.getElementById("build_right7").style.display = "block";
		document.getElementById("build_upper1").style.display = "none";
		document.getElementById("build_upper2").style.display = "none";
		document.getElementById("build_upper3").style.display = "none";
		document.getElementById("build_upper4").style.display = "none";
		document.getElementById("build_upper5").style.display = "none";
		document.getElementById("build_upper6").style.display = "none";
		document.getElementById("build_upper7").style.display = "none";
		
		localStorage.setItem("archer_level", Math.floor(Number(localStorage.getItem("archer_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 4));
		
		location.reload();
		}
		
		
	}
	
	
}, 10);

setInterval(function(){
	
	document.getElementById("archer_level").innerText = Number(localStorage.getItem("archer_level"));
	if (Number(localStorage.getItem("archer_level")) != 20) {
	document.getElementById("archer_next_level").innerText = Math.floor(Number(localStorage.getItem("archer_level")) + 1);
	} else if (Number(localStorage.getItem("archer_level")) == 20) {
		document.getElementById("archer_next_level").innerText = "Max";
	}
	var result1 = Math.floor(Number(localStorage.getItem("gold")) / 50);
	var result2 = Math.floor(Number(localStorage.getItem("wood")) / 50);
	var result3 = Math.min(result1, result2);
	document.getElementById("max_archer").innerText = Math.floor(result3);
	document.getElementById("total_archer").innerText = Number(localStorage.getItem("archer_have"));
	document.getElementById("archer_trained_amount").innerText = Number(localStorage.getItem("archer_trained"));
	document.getElementById("archer_produce_speed_up_cost").innerText = Number(localStorage.getItem("archer_trained"));
	
}, 10);

function archer_up_speed_up() {
	if (Number(localStorage.getItem("diamond")) >= 50) {
		
		localStorage.setItem("diamond_cash", Math.floor(Number(localStorage.getItem("diamond_cash")) + 50));
		
		localStorage.setItem("archer_level", Math.floor(Number(localStorage.getItem("archer_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 4));
		
		localStorage.removeItem("archer_upper");
		localStorage.removeItem("archer_up_time");
		
		location.reload();
		
	}
}

function archer_produce_speed_up() {
	
	if (Number(localStorage.getItem("diamond")) >= Number(localStorage.getItem("archer_trained"))) {
		
	localStorage.setItem("diamond_cash", Math.floor(Number(localStorage.getItem("diamond_cash")) + Number(localStorage.getItem("archer_trained"))));
		
	localStorage.setItem("archer_have", Math.floor(Number(localStorage.getItem("archer_have")) + Number(localStorage.getItem("archer_trained"))));
		
	localStorage.removeItem("archer_trained");
	localStorage.removeItem("archer_producer");
	localStorage.removeItem("archer_produce_time");
	
	location.reload();
	
	}
	
}

/* spy up and produce */

function spy_produce() {
	
	var c_value = document.getElementById("spy_input").value;
	var cost_value = Math.floor(Number(c_value) * 200);
	
	if (c_value != null && c_value > 0) {
	
	if (Number(cost_value) <= Number(localStorage.getItem("gold")) && Number(cost_value) <= Number(localStorage.getItem("food"))) {
			
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + Math.floor(60 * Number(document.getElementById("spy_input").value)));
		var ms_time = now.getTime();
		localStorage.setItem("spy_produce_time", ms_time);
		
		localStorage.setItem("spy_produce_price", Math.floor(200 * Number(document.getElementById("spy_input").value)));
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + Math.floor(200 * Number(document.getElementById("spy_input").value))));
			
		localStorage.setItem("food_cash", Math.floor(Number(localStorage.getItem("food_cash")) + Math.floor(200 * Number(document.getElementById("spy_input").value))));
		
		localStorage.setItem("spy_producer", "on");
		
		localStorage.setItem("spy_trained", Number(document.getElementById("spy_input").value))
		
		location.reload();
			
	}
	
	}
	
}

function spy_produce_cancel() {
	
	localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) - Number(localStorage.getItem("spy_produce_price"))));
	localStorage.setItem("food_cash", Math.floor(Number(localStorage.getItem("food_cash")) - Number(localStorage.getItem("spy_produce_price"))));
	
	localStorage.removeItem("spy_producer");
	localStorage.removeItem("spy_produce_time");
	
	location.reload();
	
}

setInterval(function(){
	
	if (localStorage.getItem("spy_producer") == "on") {
		
		document.getElementById("build_right1").style.display = "none";
		document.getElementById("build_right2").style.display = "none";
		document.getElementById("build_right3").style.display = "none";
		document.getElementById("build_right4").style.display = "none";
		document.getElementById("build_right5").style.display = "none";
		document.getElementById("build_right6").style.display = "none";
		document.getElementById("build_right7").style.display = "none";
		document.getElementById("build_producer1").style.display = "block";
		document.getElementById("build_producer2").style.display = "block";
		document.getElementById("build_producer3").style.display = "block";
		document.getElementById("build_producer4").style.display = "block";
		document.getElementById("build_producer5").style.display = "block";
		document.getElementById("build_producer6").style.display = "block";
		document.getElementById("build_producer7").style.display = "block";
		
		document.getElementById("build_produce_board1").style.display = "none";
		document.getElementById("build_produce_board2").style.display = "none";
		document.getElementById("build_produce_board4").style.display = "none";
		document.getElementById("build_produce_board5").style.display = "none";
		document.getElementById("build_produce_board6").style.display = "none";
		document.getElementById("build_produce_board7").style.display = "none";
		
		var syp_ms = Math.floor(Number(localStorage.getItem("spy_produce_time")) - Date.now());
		var syp_s = Math.floor(syp_ms / 1000);
		var syp_m = Math.floor(syp_s / 60);
		syp_s = syp_s % 60;
		var syp_h = Math.floor(syp_m / 60);
		syp_m = syp_m % 60;
		var syp_d = Math.floor(syp_h / 24);
		syp_h = syp_h % 24;
		
		syp_d = syp_d.toString().padStart(2, "0");
		syp_h = syp_h.toString().padStart(2, "0");
		syp_m = syp_m.toString().padStart(2, "0");
		syp_s = syp_s.toString().padStart(2, "0");
		
		document.getElementById("spy_produce_d").innerText = syp_d;
		document.getElementById("spy_produce_h").innerText = syp_h;
		document.getElementById("spy_produce_m").innerText = syp_m;
		document.getElementById("spy_produce_s").innerText = syp_s;
		
		if (Math.floor(Number(localStorage.getItem("spy_produce_time")) - Date.now()) < 0) {
		
		localStorage.removeItem("spy_producer");
		localStorage.removeItem("spy_produce_time");
		
		document.getElementById("build_right1").style.display = "block";
		document.getElementById("build_right2").style.display = "block";
		document.getElementById("build_right3").style.display = "block";
		document.getElementById("build_right4").style.display = "block";
		document.getElementById("build_right5").style.display = "block";
		document.getElementById("build_right6").style.display = "block";
		document.getElementById("build_right7").style.display = "block";
		document.getElementById("build_producer1").style.display = "none";
		document.getElementById("build_producer2").style.display = "none";
		document.getElementById("build_producer3").style.display = "none";
		document.getElementById("build_producer4").style.display = "none";
		document.getElementById("build_producer5").style.display = "none";
		document.getElementById("build_producer6").style.display = "none";
		document.getElementById("build_producer7").style.display = "none";
		
		localStorage.setItem("spy_have", Math.floor(Number(localStorage.getItem("spy_have")) + Number(localStorage.getItem("spy_trained"))));
		
		localStorage.removeItem("spy_trained");
		
		location.reload();
		}
		
		
	}
	
	
}, 10);

function spy_up() {
	
	if (Number(localStorage.getItem("spy_level")) == 0 && Number(localStorage.getItem("gold")) >= 40) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 20);
		var ms_time = now.getTime();
		localStorage.setItem("spy_up_time", ms_time);
		
		localStorage.setItem("spy_up_price", 40);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 40));
		
		localStorage.setItem("spy_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spy_level")) == 1 && Number(localStorage.getItem("gold")) >= 60) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 40);
		var ms_time = now.getTime();
		localStorage.setItem("spy_up_time", ms_time);
		
		localStorage.setItem("spy_up_price", 60);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 60));
		
		localStorage.setItem("spy_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spy_level")) == 2 && Number(localStorage.getItem("gold")) >= 120) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 80);
		var ms_time = now.getTime();
		localStorage.setItem("spy_up_time", ms_time);
		
		localStorage.setItem("spy_up_price", 120);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 120));
		
		localStorage.setItem("spy_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spy_level")) == 3 && Number(localStorage.getItem("gold")) >= 250) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 160);
		var ms_time = now.getTime();
		localStorage.setItem("spy_up_time", ms_time);
		
		localStorage.setItem("spy_up_price", 250);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 250));
		
		localStorage.setItem("spy_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spy_level")) == 4 && Number(localStorage.getItem("gold")) >= 400) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 320);
		var ms_time = now.getTime();
		localStorage.setItem("spy_up_time", ms_time);
		
		localStorage.setItem("spy_up_price", 400);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 400));
		
		localStorage.setItem("spy_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spy_level")) == 5 && Number(localStorage.getItem("gold")) >= 700) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1220);
		var ms_time = now.getTime();
		localStorage.setItem("spy_up_time", ms_time);
		
		localStorage.setItem("spy_up_price", 700);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 700));
		
		localStorage.setItem("spy_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spy_level")) == 6 && Number(localStorage.getItem("gold")) >= 1100) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1840);
		var ms_time = now.getTime();
		localStorage.setItem("spy_up_time", ms_time);
		
		localStorage.setItem("spy_up_price", 1100);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 1100));
		
		localStorage.setItem("spy_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spy_level")) == 7 && Number(localStorage.getItem("gold")) >= 1450) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 2720);
		var ms_time = now.getTime();
		localStorage.setItem("spy_up_time", ms_time);
		
		localStorage.setItem("spy_up_price", 1450);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 1450));
		
		localStorage.setItem("spy_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spy_level")) == 8 && Number(localStorage.getItem("gold")) >= 1800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 4540);
		var ms_time = now.getTime();
		localStorage.setItem("spy_up_time", ms_time);
		
		localStorage.setItem("spy_up_price", 1800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 1800));
		
		localStorage.setItem("spy_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spy_level")) == 9 && Number(localStorage.getItem("gold")) >= 2200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 6620);
		var ms_time = now.getTime();
		localStorage.setItem("spy_up_time", ms_time);
		
		localStorage.setItem("spy_up_price", 2200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 2200));
		
		localStorage.setItem("spy_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spy_level")) == 10 && Number(localStorage.getItem("gold")) >= 3000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 14740);
		var ms_time = now.getTime();
		localStorage.setItem("spy_up_time", ms_time);
		
		localStorage.setItem("spy_up_price", 3000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 3000));
		
		localStorage.setItem("spy_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spy_level")) == 11 && Number(localStorage.getItem("gold")) >= 3600) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 19220);
		var ms_time = now.getTime();
		localStorage.setItem("spy_up_time", ms_time);
		
		localStorage.setItem("spy_up_price", 3600);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 3600));
		
		localStorage.setItem("spy_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spy_level")) == 12 && Number(localStorage.getItem("gold")) >= 4200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 24340);
		var ms_time = now.getTime();
		localStorage.setItem("spy_up_time", ms_time);
		
		localStorage.setItem("spy_up_price", 4200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 4200));
		
		localStorage.setItem("spy_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spy_level")) == 13 && Number(localStorage.getItem("gold")) >= 4900) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 29720);
		var ms_time = now.getTime();
		localStorage.setItem("spy_up_time", ms_time);
		
		localStorage.setItem("spy_up_price", 4900);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 4900));
		
		localStorage.setItem("spy_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spy_level")) == 14 && Number(localStorage.getItem("gold")) >= 5700) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 35740);
		var ms_time = now.getTime();
		localStorage.setItem("spy_up_time", ms_time);
		
		localStorage.setItem("spy_up_price", 5700);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 5700));
		
		localStorage.setItem("spy_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spy_level")) == 15 && Number(localStorage.getItem("gold")) >= 8500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 64820);
		var ms_time = now.getTime();
		localStorage.setItem("spy_up_time", ms_time);
		
		localStorage.setItem("spy_up_price", 8500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 8500));
		
		localStorage.setItem("spy_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spy_level")) == 16 && Number(localStorage.getItem("gold")) >= 9600) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 73240);
		var ms_time = now.getTime();
		localStorage.setItem("spy_up_time", ms_time);
		
		localStorage.setItem("spy_up_price", 9600);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 9600));
		
		localStorage.setItem("spy_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spy_level")) == 17 && Number(localStorage.getItem("gold")) >= 11200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 82510);
		var ms_time = now.getTime();
		localStorage.setItem("spy_up_time", ms_time);
		
		localStorage.setItem("spy_up_price", 11200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 11200));
		
		localStorage.setItem("spy_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spy_level")) == 18 && Number(localStorage.getItem("gold")) >= 15100) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 91840);
		var ms_time = now.getTime();
		localStorage.setItem("spy_up_time", ms_time);
		
		localStorage.setItem("spy_up_price", 15100);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 15100));
		
		localStorage.setItem("spy_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spy_level")) == 19 && Number(localStorage.getItem("gold")) >= 20300) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 103520);
		var ms_time = now.getTime();
		localStorage.setItem("spy_up_time", ms_time);
		
		localStorage.setItem("spy_up_price", 20300);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 20300));
		
		localStorage.setItem("spy_upper", "on");
		
		location.reload();
		
	}
	
}

function spy_up_cancel() {
	
	localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) - Number(localStorage.getItem("spy_up_price"))));
	
	localStorage.removeItem("spy_upper");
	localStorage.removeItem("spy_up_time");
	
	location.reload();
	
}

setInterval(function(){
	
	if (localStorage.getItem("spy_upper") == "on") {
		
		document.getElementById("build_right1").style.display = "none";
		document.getElementById("build_right2").style.display = "none";
		document.getElementById("build_right3").style.display = "none";
		document.getElementById("build_right4").style.display = "none";
		document.getElementById("build_right5").style.display = "none";
		document.getElementById("build_right6").style.display = "none";
		document.getElementById("build_right7").style.display = "none";
		document.getElementById("build_upper1").style.display = "block";
		document.getElementById("build_upper2").style.display = "block";
		document.getElementById("build_upper3").style.display = "block";
		document.getElementById("build_upper4").style.display = "block";
		document.getElementById("build_upper5").style.display = "block";
		document.getElementById("build_upper6").style.display = "block";
		document.getElementById("build_upper7").style.display = "block";
		
		document.getElementById("build_up_board1").style.display = "none";
		document.getElementById("build_up_board2").style.display = "none";
		document.getElementById("build_up_board4").style.display = "none";
		document.getElementById("build_up_board5").style.display = "none";
		document.getElementById("build_up_board6").style.display = "none";
		document.getElementById("build_up_board7").style.display = "none";
		
		var sy_ms = Math.floor(Number(localStorage.getItem("spy_up_time")) - Date.now());
		var sy_s = Math.floor(sy_ms / 1000);
		var sy_m = Math.floor(sy_s / 60);
		sy_s = sy_s % 60;
		var sy_h = Math.floor(sy_m / 60);
		sy_m = sy_m % 60;
		var sy_d = Math.floor(sy_h / 24);
		sy_h = sy_h % 24;
		
		sy_d = sy_d.toString().padStart(2, "0");
		sy_h = sy_h.toString().padStart(2, "0");
		sy_m = sy_m.toString().padStart(2, "0");
		sy_s = sy_s.toString().padStart(2, "0");
		
		document.getElementById("spy_up_d").innerText = sy_d;
		document.getElementById("spy_up_h").innerText = sy_h;
		document.getElementById("spy_up_m").innerText = sy_m;
		document.getElementById("spy_up_s").innerText = sy_s;
		
		if (Math.floor(Number(localStorage.getItem("spy_up_time")) - Date.now()) < 0) {
		
		localStorage.removeItem("spy_upper");
		localStorage.removeItem("spy_up_time");
		
		document.getElementById("build_right1").style.display = "block";
		document.getElementById("build_right2").style.display = "block";
		document.getElementById("build_right3").style.display = "block";
		document.getElementById("build_right4").style.display = "block";
		document.getElementById("build_right5").style.display = "block";
		document.getElementById("build_right6").style.display = "block";
		document.getElementById("build_right7").style.display = "block";
		document.getElementById("build_upper1").style.display = "none";
		document.getElementById("build_upper2").style.display = "none";
		document.getElementById("build_upper3").style.display = "none";
		document.getElementById("build_upper4").style.display = "none";
		document.getElementById("build_upper5").style.display = "none";
		document.getElementById("build_upper6").style.display = "none";
		document.getElementById("build_upper7").style.display = "none";
		
		localStorage.setItem("spy_level", Math.floor(Number(localStorage.getItem("spy_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 6));
		
		location.reload();
		}
		
		
	}
	
	
}, 10);

setInterval(function(){
	
	document.getElementById("spy_level").innerText = Number(localStorage.getItem("spy_level"));
	if (Number(localStorage.getItem("spy_level")) != 20) {
	document.getElementById("spy_next_level").innerText = Math.floor(Number(localStorage.getItem("spy_level")) + 1);
	} else if (Number(localStorage.getItem("spy_level")) == 20) {
		document.getElementById("spy_next_level").innerText = "Max";
	}
	var result1 = Math.floor(Number(localStorage.getItem("gold")) / 200);
	var result2 = Math.floor(Number(localStorage.getItem("food")) / 200);
	var result3 = Math.min(result1, result2);
	document.getElementById("max_spy").innerText = Math.floor(result3);
	document.getElementById("total_spy").innerText = Number(localStorage.getItem("spy_have"));
	document.getElementById("spy_trained_amount").innerText = Number(localStorage.getItem("spy_trained"));
	document.getElementById("spy_produce_speed_up_cost").innerText = Number(localStorage.getItem("spy_trained"));
	
}, 10);

function spy_up_speed_up() {
	if (Number(localStorage.getItem("diamond")) >= 50) {
		
		localStorage.setItem("diamond_cash", Math.floor(Number(localStorage.getItem("diamond_cash")) + 50));
		
		localStorage.setItem("spy_level", Math.floor(Number(localStorage.getItem("spy_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 6));
		
		localStorage.removeItem("spy_upper");
		localStorage.removeItem("spy_up_time");
		
		location.reload();
		
	}
}

function spy_produce_speed_up() {
	
	if (Number(localStorage.getItem("diamond")) >= Number(localStorage.getItem("spy_trained"))) {
		
	localStorage.setItem("diamond_cash", Math.floor(Number(localStorage.getItem("diamond_cash")) + Number(localStorage.getItem("spy_trained"))));
		
	localStorage.setItem("spy_have", Math.floor(Number(localStorage.getItem("spy_have")) + Number(localStorage.getItem("spy_trained"))));
		
	localStorage.removeItem("spy_trained");
	localStorage.removeItem("spy_producer");
	localStorage.removeItem("spy_produce_time");
	
	location.reload();
	
	}
	
}

/* cataphract up and produce */

function cataphract_produce() {
	
	var c_value = document.getElementById("cataphract_input").value;
	var cost_value = Math.floor(Number(c_value) * 100);
	
	if (c_value != null && c_value > 0) {
	
	if (Number(cost_value) <= Number(localStorage.getItem("gold")) && Number(cost_value) <= Number(localStorage.getItem("food"))) {
			
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + Math.floor(60 * Number(document.getElementById("cataphract_input").value)));
		var ms_time = now.getTime();
		localStorage.setItem("cataphract_produce_time", ms_time);
		
		localStorage.setItem("cataphract_produce_price", Math.floor(100 * Number(document.getElementById("cataphract_input").value)));
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + Math.floor(100 * Number(document.getElementById("cataphract_input").value))));
			
		localStorage.setItem("food_cash", Math.floor(Number(localStorage.getItem("food_cash")) + Math.floor(100 * Number(document.getElementById("cataphract_input").value))));
		
		localStorage.setItem("cataphract_producer", "on");
		
		localStorage.setItem("cataphract_trained", Number(document.getElementById("cataphract_input").value))
		
		location.reload();
			
	}
	
	}
	
}

function cataphract_produce_cancel() {
	
	localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) - Number(localStorage.getItem("cataphract_produce_price"))));
	localStorage.setItem("food_cash", Math.floor(Number(localStorage.getItem("food_cash")) - Number(localStorage.getItem("cataphract_produce_price"))));
	
	localStorage.removeItem("cataphract_producer");
	localStorage.removeItem("cataphract_produce_time");
	
	location.reload();
	
}

setInterval(function(){
	
	if (localStorage.getItem("cataphract_producer") == "on") {
		
		document.getElementById("build_right1").style.display = "none";
		document.getElementById("build_right2").style.display = "none";
		document.getElementById("build_right3").style.display = "none";
		document.getElementById("build_right4").style.display = "none";
		document.getElementById("build_right5").style.display = "none";
		document.getElementById("build_right6").style.display = "none";
		document.getElementById("build_right7").style.display = "none";
		document.getElementById("build_producer1").style.display = "block";
		document.getElementById("build_producer2").style.display = "block";
		document.getElementById("build_producer3").style.display = "block";
		document.getElementById("build_producer4").style.display = "block";
		document.getElementById("build_producer5").style.display = "block";
		document.getElementById("build_producer6").style.display = "block";
		document.getElementById("build_producer7").style.display = "block";
		
		document.getElementById("build_produce_board1").style.display = "none";
		document.getElementById("build_produce_board2").style.display = "none";
		document.getElementById("build_produce_board3").style.display = "none";
		document.getElementById("build_produce_board5").style.display = "none";
		document.getElementById("build_produce_board6").style.display = "none";
		document.getElementById("build_produce_board7").style.display = "none";
		
		var cp_ms = Math.floor(Number(localStorage.getItem("cataphract_produce_time")) - Date.now());
		var cp_s = Math.floor(cp_ms / 1000);
		var cp_m = Math.floor(cp_s / 60);
		cp_s = cp_s % 60;
		var cp_h = Math.floor(cp_m / 60);
		cp_m = cp_m % 60;
		var cp_d = Math.floor(cp_h / 24);
		cp_h = cp_h % 24;
		
		cp_d = cp_d.toString().padStart(2, "0");
		cp_h = cp_h.toString().padStart(2, "0");
		cp_m = cp_m.toString().padStart(2, "0");
		cp_s = cp_s.toString().padStart(2, "0");
		
		document.getElementById("cataphract_produce_d").innerText = cp_d;
		document.getElementById("cataphract_produce_h").innerText = cp_h;
		document.getElementById("cataphract_produce_m").innerText = cp_m;
		document.getElementById("cataphract_produce_s").innerText = cp_s;
		
		if (Math.floor(Number(localStorage.getItem("cataphract_produce_time")) - Date.now()) < 0) {
		
		localStorage.removeItem("cataphract_producer");
		localStorage.removeItem("cataphract_produce_time");
		
		document.getElementById("build_right1").style.display = "block";
		document.getElementById("build_right2").style.display = "block";
		document.getElementById("build_right3").style.display = "block";
		document.getElementById("build_right4").style.display = "block";
		document.getElementById("build_right5").style.display = "block";
		document.getElementById("build_right6").style.display = "block";
		document.getElementById("build_right7").style.display = "block";
		document.getElementById("build_producer1").style.display = "none";
		document.getElementById("build_producer2").style.display = "none";
		document.getElementById("build_producer3").style.display = "none";
		document.getElementById("build_producer4").style.display = "none";
		document.getElementById("build_producer5").style.display = "none";
		document.getElementById("build_producer6").style.display = "none";
		document.getElementById("build_producer7").style.display = "none";
		
		localStorage.setItem("cataphract_have", Math.floor(Number(localStorage.getItem("cataphract_have")) + Number(localStorage.getItem("cataphract_trained"))));
		
		localStorage.removeItem("cataphract_trained");
		
		location.reload();
		}
		
		
	}
	
	
}, 10);

function cataphract_up() {
	
	if (Number(localStorage.getItem("cataphract_level")) == 0 && Number(localStorage.getItem("gold")) >= 40) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 20);
		var ms_time = now.getTime();
		localStorage.setItem("cataphract_up_time", ms_time);
		
		localStorage.setItem("cataphract_up_price", 40);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 40));
		
		localStorage.setItem("cataphract_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cataphract_level")) == 1 && Number(localStorage.getItem("gold")) >= 60) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 40);
		var ms_time = now.getTime();
		localStorage.setItem("cataphract_up_time", ms_time);
		
		localStorage.setItem("cataphract_up_price", 60);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 60));
		
		localStorage.setItem("cataphract_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cataphract_level")) == 2 && Number(localStorage.getItem("gold")) >= 120) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 80);
		var ms_time = now.getTime();
		localStorage.setItem("cataphract_up_time", ms_time);
		
		localStorage.setItem("cataphract_up_price", 120);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 120));
		
		localStorage.setItem("cataphract_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cataphract_level")) == 3 && Number(localStorage.getItem("gold")) >= 250) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 160);
		var ms_time = now.getTime();
		localStorage.setItem("cataphract_up_time", ms_time);
		
		localStorage.setItem("cataphract_up_price", 250);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 250));
		
		localStorage.setItem("cataphract_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cataphract_level")) == 4 && Number(localStorage.getItem("gold")) >= 400) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 320);
		var ms_time = now.getTime();
		localStorage.setItem("cataphract_up_time", ms_time);
		
		localStorage.setItem("cataphract_up_price", 400);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 400));
		
		localStorage.setItem("cataphract_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cataphract_level")) == 5 && Number(localStorage.getItem("gold")) >= 700) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1220);
		var ms_time = now.getTime();
		localStorage.setItem("cataphract_up_time", ms_time);
		
		localStorage.setItem("cataphract_up_price", 700);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 700));
		
		localStorage.setItem("cataphract_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cataphract_level")) == 6 && Number(localStorage.getItem("gold")) >= 1100) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1840);
		var ms_time = now.getTime();
		localStorage.setItem("cataphract_up_time", ms_time);
		
		localStorage.setItem("cataphract_up_price", 1100);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 1100));
		
		localStorage.setItem("cataphract_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cataphract_level")) == 7 && Number(localStorage.getItem("gold")) >= 1450) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 2720);
		var ms_time = now.getTime();
		localStorage.setItem("cataphract_up_time", ms_time);
		
		localStorage.setItem("cataphract_up_price", 1450);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 1450));
		
		localStorage.setItem("cataphract_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cataphract_level")) == 8 && Number(localStorage.getItem("gold")) >= 1800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 4540);
		var ms_time = now.getTime();
		localStorage.setItem("cataphract_up_time", ms_time);
		
		localStorage.setItem("cataphract_up_price", 1800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 1800));
		
		localStorage.setItem("cataphract_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cataphract_level")) == 9 && Number(localStorage.getItem("gold")) >= 2200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 6620);
		var ms_time = now.getTime();
		localStorage.setItem("cataphract_up_time", ms_time);
		
		localStorage.setItem("cataphract_up_price", 2200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 2200));
		
		localStorage.setItem("cataphract_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cataphract_level")) == 10 && Number(localStorage.getItem("gold")) >= 3000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 14740);
		var ms_time = now.getTime();
		localStorage.setItem("cataphract_up_time", ms_time);
		
		localStorage.setItem("cataphract_up_price", 3000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 3000));
		
		localStorage.setItem("cataphract_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cataphract_level")) == 11 && Number(localStorage.getItem("gold")) >= 3600) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 19220);
		var ms_time = now.getTime();
		localStorage.setItem("cataphract_up_time", ms_time);
		
		localStorage.setItem("cataphract_up_price", 3600);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 3600));
		
		localStorage.setItem("cataphract_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cataphract_level")) == 12 && Number(localStorage.getItem("gold")) >= 4200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 24340);
		var ms_time = now.getTime();
		localStorage.setItem("cataphract_up_time", ms_time);
		
		localStorage.setItem("cataphract_up_price", 4200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 4200));
		
		localStorage.setItem("cataphract_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cataphract_level")) == 13 && Number(localStorage.getItem("gold")) >= 4900) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 29720);
		var ms_time = now.getTime();
		localStorage.setItem("cataphract_up_time", ms_time);
		
		localStorage.setItem("cataphract_up_price", 4900);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 4900));
		
		localStorage.setItem("cataphract_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cataphract_level")) == 14 && Number(localStorage.getItem("gold")) >= 5700) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 35740);
		var ms_time = now.getTime();
		localStorage.setItem("cataphract_up_time", ms_time);
		
		localStorage.setItem("cataphract_up_price", 5700);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 5700));
		
		localStorage.setItem("cataphract_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cataphract_level")) == 15 && Number(localStorage.getItem("gold")) >= 8500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 64820);
		var ms_time = now.getTime();
		localStorage.setItem("cataphract_up_time", ms_time);
		
		localStorage.setItem("cataphract_up_price", 8500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 8500));
		
		localStorage.setItem("cataphract_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cataphract_level")) == 16 && Number(localStorage.getItem("gold")) >= 9600) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 73240);
		var ms_time = now.getTime();
		localStorage.setItem("cataphract_up_time", ms_time);
		
		localStorage.setItem("cataphract_up_price", 9600);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 9600));
		
		localStorage.setItem("cataphract_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cataphract_level")) == 17 && Number(localStorage.getItem("gold")) >= 11200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 82510);
		var ms_time = now.getTime();
		localStorage.setItem("cataphract_up_time", ms_time);
		
		localStorage.setItem("cataphract_up_price", 11200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 11200));
		
		localStorage.setItem("cataphract_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cataphract_level")) == 18 && Number(localStorage.getItem("gold")) >= 15100) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 91840);
		var ms_time = now.getTime();
		localStorage.setItem("cataphract_up_time", ms_time);
		
		localStorage.setItem("cataphract_up_price", 15100);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 15100));
		
		localStorage.setItem("cataphract_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cataphract_level")) == 19 && Number(localStorage.getItem("gold")) >= 20300) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 103520);
		var ms_time = now.getTime();
		localStorage.setItem("cataphract_up_time", ms_time);
		
		localStorage.setItem("cataphract_up_price", 20300);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 20300));
		
		localStorage.setItem("cataphract_upper", "on");
		
		location.reload();
		
	}
	
}

function cataphract_up_cancel() {
	
	localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) - Number(localStorage.getItem("cataphract_up_price"))));
	
	localStorage.removeItem("cataphract_upper");
	localStorage.removeItem("cataphract_up_time");
	
	location.reload();
	
}

setInterval(function(){
	
	if (localStorage.getItem("cataphract_upper") == "on") {
		
		document.getElementById("build_right1").style.display = "none";
		document.getElementById("build_right2").style.display = "none";
		document.getElementById("build_right3").style.display = "none";
		document.getElementById("build_right4").style.display = "none";
		document.getElementById("build_right5").style.display = "none";
		document.getElementById("build_right6").style.display = "none";
		document.getElementById("build_right7").style.display = "none";
		document.getElementById("build_upper1").style.display = "block";
		document.getElementById("build_upper2").style.display = "block";
		document.getElementById("build_upper3").style.display = "block";
		document.getElementById("build_upper4").style.display = "block";
		document.getElementById("build_upper5").style.display = "block";
		document.getElementById("build_upper6").style.display = "block";
		document.getElementById("build_upper7").style.display = "block";
		
		document.getElementById("build_up_board1").style.display = "none";
		document.getElementById("build_up_board2").style.display = "none";
		document.getElementById("build_up_board3").style.display = "none";
		document.getElementById("build_up_board5").style.display = "none";
		document.getElementById("build_up_board6").style.display = "none";
		document.getElementById("build_up_board7").style.display = "none";
		
		var c_ms = Math.floor(Number(localStorage.getItem("cataphract_up_time")) - Date.now());
		var c_s = Math.floor(c_ms / 1000);
		var c_m = Math.floor(c_s / 60);
		c_s = c_s % 60;
		var c_h = Math.floor(c_m / 60);
		c_m = c_m % 60;
		var c_d = Math.floor(c_h / 24);
		c_h = c_h % 24;
		
		c_d = c_d.toString().padStart(2, "0");
		c_h = c_h.toString().padStart(2, "0");
		c_m = c_m.toString().padStart(2, "0");
		c_s = c_s.toString().padStart(2, "0");
		
		document.getElementById("cataphract_up_d").innerText = c_d;
		document.getElementById("cataphract_up_h").innerText = c_h;
		document.getElementById("cataphract_up_m").innerText = c_m;
		document.getElementById("cataphract_up_s").innerText = c_s;
		
		if (Math.floor(Number(localStorage.getItem("cataphract_up_time")) - Date.now()) < 0) {
		
		localStorage.removeItem("cataphract_upper");
		localStorage.removeItem("cataphract_up_time");
		
		document.getElementById("build_right1").style.display = "block";
		document.getElementById("build_right2").style.display = "block";
		document.getElementById("build_right3").style.display = "block";
		document.getElementById("build_right4").style.display = "block";
		document.getElementById("build_right5").style.display = "block";
		document.getElementById("build_right6").style.display = "block";
		document.getElementById("build_right7").style.display = "block";
		document.getElementById("build_upper1").style.display = "none";
		document.getElementById("build_upper2").style.display = "none";
		document.getElementById("build_upper3").style.display = "none";
		document.getElementById("build_upper4").style.display = "none";
		document.getElementById("build_upper5").style.display = "none";
		document.getElementById("build_upper6").style.display = "none";
		document.getElementById("build_upper7").style.display = "none";
		
		localStorage.setItem("cataphract_level", Math.floor(Number(localStorage.getItem("cataphract_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 8));
		
		location.reload();
		}
		
		
	}
	
	
}, 10);

setInterval(function(){
	
	document.getElementById("cataphract_level").innerText = Number(localStorage.getItem("cataphract_level"));
	if (Number(localStorage.getItem("cataphract_level")) != 20) {
	document.getElementById("cataphract_next_level").innerText = Math.floor(Number(localStorage.getItem("cataphract_level")) + 1);
	} else if (Number(localStorage.getItem("cataphract_level")) == 20) {
		document.getElementById("cataphract_next_level").innerText = "Max";
	}
	var result1 = Math.floor(Number(localStorage.getItem("gold")) / 100);
	var result2 = Math.floor(Number(localStorage.getItem("food")) / 100);
	var result3 = Math.min(result1, result2);
	document.getElementById("max_cataphract").innerText = Math.floor(result3);
	document.getElementById("total_cataphract").innerText = Number(localStorage.getItem("cataphract_have"));
	document.getElementById("cataphract_trained_amount").innerText = Number(localStorage.getItem("cataphract_trained"));
	document.getElementById("cataphract_produce_speed_up_cost").innerText = Number(localStorage.getItem("cataphract_trained"));
	
}, 10);

function cataphract_up_speed_up() {
	if (Number(localStorage.getItem("diamond")) >= 50) {
		
		localStorage.setItem("diamond_cash", Math.floor(Number(localStorage.getItem("diamond_cash")) + 50));
		
		localStorage.setItem("cataphract_level", Math.floor(Number(localStorage.getItem("cataphract_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 8));
		
		localStorage.removeItem("cataphract_upper");
		localStorage.removeItem("cataphract_up_time");
		
		location.reload();
		
	}
}

function cataphract_produce_speed_up() {
	
	if (Number(localStorage.getItem("diamond")) >= Number(localStorage.getItem("cataphract_trained"))) {
		
	localStorage.setItem("diamond_cash", Math.floor(Number(localStorage.getItem("diamond_cash")) + Number(localStorage.getItem("cataphract_trained"))));
		
	localStorage.setItem("cataphract_have", Math.floor(Number(localStorage.getItem("cataphract_have")) + Number(localStorage.getItem("cataphract_trained"))));
		
	localStorage.removeItem("cataphract_trained");
	localStorage.removeItem("cataphract_producer");
	localStorage.removeItem("cataphract_produce_time");
	
	location.reload();
	
	}
	
}

/* swordsmen up and produce */

function swordsmen_produce() {
	
	var c_value = document.getElementById("swordsmen_input").value;
	var cost_value = Math.floor(Number(c_value) * 75);
	
	if (c_value != null && c_value > 0) {
	
	if (Number(cost_value) <= Number(localStorage.getItem("gold")) && Number(cost_value) <= Number(localStorage.getItem("food"))) {
			
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + Math.floor(60 * Number(document.getElementById("swordsmen_input").value)));
		var ms_time = now.getTime();
		localStorage.setItem("swordsmen_produce_time", ms_time);
		
		localStorage.setItem("swordsmen_produce_price", Math.floor(75 * Number(document.getElementById("swordsmen_input").value)));
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + Math.floor(75 * Number(document.getElementById("swordsmen_input").value))));
			
		localStorage.setItem("food_cash", Math.floor(Number(localStorage.getItem("food_cash")) + Math.floor(75 * Number(document.getElementById("swordsmen_input").value))));
		
		localStorage.setItem("swordsmen_producer", "on");
		
		localStorage.setItem("swordsmen_trained", Number(document.getElementById("swordsmen_input").value))
		
		location.reload();
			
	}
	
	}
	
}

function swordsmen_produce_cancel() {
	
	localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) - Number(localStorage.getItem("swordsmen_produce_price"))));
	localStorage.setItem("food_cash", Math.floor(Number(localStorage.getItem("food_cash")) - Number(localStorage.getItem("swordsmen_produce_price"))));
	
	localStorage.removeItem("swordsmen_producer");
	localStorage.removeItem("swordsmen_produce_time");
	
	location.reload();
	
}

setInterval(function(){
	
	if (localStorage.getItem("swordsmen_producer") == "on") {
		
		document.getElementById("build_right1").style.display = "none";
		document.getElementById("build_right2").style.display = "none";
		document.getElementById("build_right3").style.display = "none";
		document.getElementById("build_right4").style.display = "none";
		document.getElementById("build_right5").style.display = "none";
		document.getElementById("build_right6").style.display = "none";
		document.getElementById("build_right7").style.display = "none";
		document.getElementById("build_producer1").style.display = "block";
		document.getElementById("build_producer2").style.display = "block";
		document.getElementById("build_producer3").style.display = "block";
		document.getElementById("build_producer4").style.display = "block";
		document.getElementById("build_producer5").style.display = "block";
		document.getElementById("build_producer6").style.display = "block";
		document.getElementById("build_producer7").style.display = "block";
		
		document.getElementById("build_produce_board1").style.display = "none";
		document.getElementById("build_produce_board2").style.display = "none";
		document.getElementById("build_produce_board3").style.display = "none";
		document.getElementById("build_produce_board4").style.display = "none";
		document.getElementById("build_produce_board6").style.display = "none";
		document.getElementById("build_produce_board7").style.display = "none";
		
		var swp_ms = Math.floor(Number(localStorage.getItem("swordsmen_produce_time")) - Date.now());
		var swp_s = Math.floor(swp_ms / 1000);
		var swp_m = Math.floor(swp_s / 60);
		swp_s = swp_s % 60;
		var swp_h = Math.floor(swp_m / 60);
		swp_m = swp_m % 60;
		var swp_d = Math.floor(swp_h / 24);
		swp_h = swp_h % 24;
		
		swp_d = swp_d.toString().padStart(2, "0");
		swp_h = swp_h.toString().padStart(2, "0");
		swp_m = swp_m.toString().padStart(2, "0");
		swp_s = swp_s.toString().padStart(2, "0");
		
		document.getElementById("swordsmen_produce_d").innerText = swp_d;
		document.getElementById("swordsmen_produce_h").innerText = swp_h;
		document.getElementById("swordsmen_produce_m").innerText = swp_m;
		document.getElementById("swordsmen_produce_s").innerText = swp_s;
		
		if (Math.floor(Number(localStorage.getItem("swordsmen_produce_time")) - Date.now()) < 0) {
		
		localStorage.removeItem("swordsmen_producer");
		localStorage.removeItem("swordsmen_produce_time");
		
		document.getElementById("build_right1").style.display = "block";
		document.getElementById("build_right2").style.display = "block";
		document.getElementById("build_right3").style.display = "block";
		document.getElementById("build_right4").style.display = "block";
		document.getElementById("build_right5").style.display = "block";
		document.getElementById("build_right6").style.display = "block";
		document.getElementById("build_right7").style.display = "block";
		document.getElementById("build_producer1").style.display = "none";
		document.getElementById("build_producer2").style.display = "none";
		document.getElementById("build_producer3").style.display = "none";
		document.getElementById("build_producer4").style.display = "none";
		document.getElementById("build_producer5").style.display = "none";
		document.getElementById("build_producer6").style.display = "none";
		document.getElementById("build_producer7").style.display = "none";
		
		localStorage.setItem("swordsmen_have", Math.floor(Number(localStorage.getItem("swordsmen_have")) + Number(localStorage.getItem("swordsmen_trained"))));
		
		localStorage.removeItem("swordsmen_trained");
		
		location.reload();
		}
		
		
	}
	
	
}, 10);

function swordsmen_up() {
	
	if (Number(localStorage.getItem("swordsmen_level")) == 0 && Number(localStorage.getItem("gold")) >= 40) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 20);
		var ms_time = now.getTime();
		localStorage.setItem("swordsmen_up_time", ms_time);
		
		localStorage.setItem("swordsmen_up_price", 40);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 40));
		
		localStorage.setItem("swordsmen_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("swordsmen_level")) == 1 && Number(localStorage.getItem("gold")) >= 60) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 40);
		var ms_time = now.getTime();
		localStorage.setItem("swordsmen_up_time", ms_time);
		
		localStorage.setItem("swordsmen_up_price", 60);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 60));
		
		localStorage.setItem("swordsmen_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("swordsmen_level")) == 2 && Number(localStorage.getItem("gold")) >= 120) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 80);
		var ms_time = now.getTime();
		localStorage.setItem("swordsmen_up_time", ms_time);
		
		localStorage.setItem("swordsmen_up_price", 120);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 120));
		
		localStorage.setItem("swordsmen_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("swordsmen_level")) == 3 && Number(localStorage.getItem("gold")) >= 250) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 160);
		var ms_time = now.getTime();
		localStorage.setItem("swordsmen_up_time", ms_time);
		
		localStorage.setItem("swordsmen_up_price", 250);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 250));
		
		localStorage.setItem("swordsmen_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("swordsmen_level")) == 4 && Number(localStorage.getItem("gold")) >= 400) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 320);
		var ms_time = now.getTime();
		localStorage.setItem("swordsmen_up_time", ms_time);
		
		localStorage.setItem("swordsmen_up_price", 400);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 400));
		
		localStorage.setItem("swordsmen_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("swordsmen_level")) == 5 && Number(localStorage.getItem("gold")) >= 700) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1220);
		var ms_time = now.getTime();
		localStorage.setItem("swordsmen_up_time", ms_time);
		
		localStorage.setItem("swordsmen_up_price", 700);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 700));
		
		localStorage.setItem("swordsmen_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("swordsmen_level")) == 6 && Number(localStorage.getItem("gold")) >= 1100) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1840);
		var ms_time = now.getTime();
		localStorage.setItem("swordsmen_up_time", ms_time);
		
		localStorage.setItem("swordsmen_up_price", 1100);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 1100));
		
		localStorage.setItem("swordsmen_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("swordsmen_level")) == 7 && Number(localStorage.getItem("gold")) >= 1450) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 2720);
		var ms_time = now.getTime();
		localStorage.setItem("swordsmen_up_time", ms_time);
		
		localStorage.setItem("swordsmen_up_price", 1450);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 1450));
		
		localStorage.setItem("swordsmen_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("swordsmen_level")) == 8 && Number(localStorage.getItem("gold")) >= 1800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 4540);
		var ms_time = now.getTime();
		localStorage.setItem("swordsmen_up_time", ms_time);
		
		localStorage.setItem("swordsmen_up_price", 1800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 1800));
		
		localStorage.setItem("swordsmen_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("swordsmen_level")) == 9 && Number(localStorage.getItem("gold")) >= 2200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 6620);
		var ms_time = now.getTime();
		localStorage.setItem("swordsmen_up_time", ms_time);
		
		localStorage.setItem("swordsmen_up_price", 2200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 2200));
		
		localStorage.setItem("swordsmen_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("swordsmen_level")) == 10 && Number(localStorage.getItem("gold")) >= 3000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 14740);
		var ms_time = now.getTime();
		localStorage.setItem("swordsmen_up_time", ms_time);
		
		localStorage.setItem("swordsmen_up_price", 3000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 3000));
		
		localStorage.setItem("swordsmen_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("swordsmen_level")) == 11 && Number(localStorage.getItem("gold")) >= 3600) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 19220);
		var ms_time = now.getTime();
		localStorage.setItem("swordsmen_up_time", ms_time);
		
		localStorage.setItem("swordsmen_up_price", 3600);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 3600));
		
		localStorage.setItem("swordsmen_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("swordsmen_level")) == 12 && Number(localStorage.getItem("gold")) >= 4200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 24340);
		var ms_time = now.getTime();
		localStorage.setItem("swordsmen_up_time", ms_time);
		
		localStorage.setItem("swordsmen_up_price", 4200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 4200));
		
		localStorage.setItem("swordsmen_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("swordsmen_level")) == 13 && Number(localStorage.getItem("gold")) >= 4900) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 29720);
		var ms_time = now.getTime();
		localStorage.setItem("swordsmen_up_time", ms_time);
		
		localStorage.setItem("swordsmen_up_price", 4900);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 4900));
		
		localStorage.setItem("swordsmen_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("swordsmen_level")) == 14 && Number(localStorage.getItem("gold")) >= 5700) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 35740);
		var ms_time = now.getTime();
		localStorage.setItem("swordsmen_up_time", ms_time);
		
		localStorage.setItem("swordsmen_up_price", 5700);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 5700));
		
		localStorage.setItem("swordsmen_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("swordsmen_level")) == 15 && Number(localStorage.getItem("gold")) >= 8500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 64820);
		var ms_time = now.getTime();
		localStorage.setItem("swordsmen_up_time", ms_time);
		
		localStorage.setItem("swordsmen_up_price", 8500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 8500));
		
		localStorage.setItem("swordsmen_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("swordsmen_level")) == 16 && Number(localStorage.getItem("gold")) >= 9600) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 73240);
		var ms_time = now.getTime();
		localStorage.setItem("swordsmen_up_time", ms_time);
		
		localStorage.setItem("swordsmen_up_price", 9600);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 9600));
		
		localStorage.setItem("swordsmen_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("swordsmen_level")) == 17 && Number(localStorage.getItem("gold")) >= 11200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 82510);
		var ms_time = now.getTime();
		localStorage.setItem("swordsmen_up_time", ms_time);
		
		localStorage.setItem("swordsmen_up_price", 11200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 11200));
		
		localStorage.setItem("swordsmen_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("swordsmen_level")) == 18 && Number(localStorage.getItem("gold")) >= 15100) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 91840);
		var ms_time = now.getTime();
		localStorage.setItem("swordsmen_up_time", ms_time);
		
		localStorage.setItem("swordsmen_up_price", 15100);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 15100));
		
		localStorage.setItem("swordsmen_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("swordsmen_level")) == 19 && Number(localStorage.getItem("gold")) >= 20300) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 103520);
		var ms_time = now.getTime();
		localStorage.setItem("swordsmen_up_time", ms_time);
		
		localStorage.setItem("swordsmen_up_price", 20300);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 20300));
		
		localStorage.setItem("swordsmen_upper", "on");
		
		location.reload();
		
	}
	
}

function swordsmen_up_cancel() {
	
	localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) - Number(localStorage.getItem("swordsmen_up_price"))));
	
	localStorage.removeItem("swordsmen_upper");
	localStorage.removeItem("swordsmen_up_time");
	
	location.reload();
	
}

setInterval(function(){
	
	if (localStorage.getItem("swordsmen_upper") == "on") {
		
		document.getElementById("build_right1").style.display = "none";
		document.getElementById("build_right2").style.display = "none";
		document.getElementById("build_right3").style.display = "none";
		document.getElementById("build_right4").style.display = "none";
		document.getElementById("build_right5").style.display = "none";
		document.getElementById("build_right6").style.display = "none";
		document.getElementById("build_right7").style.display = "none";
		document.getElementById("build_upper1").style.display = "block";
		document.getElementById("build_upper2").style.display = "block";
		document.getElementById("build_upper3").style.display = "block";
		document.getElementById("build_upper4").style.display = "block";
		document.getElementById("build_upper5").style.display = "block";
		document.getElementById("build_upper6").style.display = "block";
		document.getElementById("build_upper7").style.display = "block";
		
		document.getElementById("build_up_board1").style.display = "none";
		document.getElementById("build_up_board2").style.display = "none";
		document.getElementById("build_up_board3").style.display = "none";
		document.getElementById("build_up_board4").style.display = "none";
		document.getElementById("build_up_board6").style.display = "none";
		document.getElementById("build_up_board7").style.display = "none";
		
		var sw_ms = Math.floor(Number(localStorage.getItem("swordsmen_up_time")) - Date.now());
		var sw_s = Math.floor(sw_ms / 1000);
		var sw_m = Math.floor(sw_s / 60);
		sw_s = sw_s % 60;
		var sw_h = Math.floor(sw_m / 60);
		sw_m = sw_m % 60;
		var sw_d = Math.floor(sw_h / 24);
		sw_h = sw_h % 24;
		
		sw_d = sw_d.toString().padStart(2, "0");
		sw_h = sw_h.toString().padStart(2, "0");
		sw_m = sw_m.toString().padStart(2, "0");
		sw_s = sw_s.toString().padStart(2, "0");
		
		document.getElementById("swordsmen_up_d").innerText = sw_d;
		document.getElementById("swordsmen_up_h").innerText = sw_h;
		document.getElementById("swordsmen_up_m").innerText = sw_m;
		document.getElementById("swordsmen_up_s").innerText = sw_s;
		
		if (Math.floor(Number(localStorage.getItem("swordsmen_up_time")) - Date.now()) < 0) {
		
		localStorage.removeItem("swordsmen_upper");
		localStorage.removeItem("swordsmen_up_time");
		
		document.getElementById("build_right1").style.display = "block";
		document.getElementById("build_right2").style.display = "block";
		document.getElementById("build_right3").style.display = "block";
		document.getElementById("build_right4").style.display = "block";
		document.getElementById("build_right5").style.display = "block";
		document.getElementById("build_right6").style.display = "block";
		document.getElementById("build_right7").style.display = "block";
		document.getElementById("build_upper1").style.display = "none";
		document.getElementById("build_upper2").style.display = "none";
		document.getElementById("build_upper3").style.display = "none";
		document.getElementById("build_upper4").style.display = "none";
		document.getElementById("build_upper5").style.display = "none";
		document.getElementById("build_upper6").style.display = "none";
		document.getElementById("build_upper7").style.display = "none";
		
		localStorage.setItem("swordsmen_level", Math.floor(Number(localStorage.getItem("swordsmen_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 6));
		
		location.reload();
		}
		
		
	}
	
	
}, 10);

setInterval(function(){
	
	document.getElementById("swordsmen_level").innerText = Number(localStorage.getItem("swordsmen_level"));
	if (Number(localStorage.getItem("swordsmen_level")) != 20) {
	document.getElementById("swordsmen_next_level").innerText = Math.floor(Number(localStorage.getItem("swordsmen_level")) + 1);
	} else if (Number(localStorage.getItem("swordsmen_level")) == 20) {
		document.getElementById("swordsmen_next_level").innerText = "Max";
	}
	var result1 = Math.floor(Number(localStorage.getItem("gold")) / 75);
	var result2 = Math.floor(Number(localStorage.getItem("food")) / 75);
	var result3 = Math.min(result1, result2);
	document.getElementById("max_swordsmen").innerText = Math.floor(result3);
	document.getElementById("total_swordsmen").innerText = Number(localStorage.getItem("swordsmen_have"));
	document.getElementById("swordsmen_trained_amount").innerText = Number(localStorage.getItem("swordsmen_trained"));
	document.getElementById("swordsmen_produce_speed_up_cost").innerText = Number(localStorage.getItem("swordsmen_trained"));
	
}, 10);

function swordsmen_up_speed_up() {
	if (Number(localStorage.getItem("diamond")) >= 50) {
		
		localStorage.setItem("diamond_cash", Math.floor(Number(localStorage.getItem("diamond_cash")) + 50));
		
		localStorage.setItem("swordsmen_level", Math.floor(Number(localStorage.getItem("swordsmen_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 6));
		
		localStorage.removeItem("swordsmen_upper");
		localStorage.removeItem("swordsmen_up_time");
		
		location.reload();
		
	}
}

function swordsmen_produce_speed_up() {
	
	if (Number(localStorage.getItem("diamond")) >= Number(localStorage.getItem("swordsmen_trained"))) {
		
	localStorage.setItem("diamond_cash", Math.floor(Number(localStorage.getItem("diamond_cash")) + Number(localStorage.getItem("swordsmen_trained"))));
		
	localStorage.setItem("swordsmen_have", Math.floor(Number(localStorage.getItem("swordsmen_have")) + Number(localStorage.getItem("swordsmen_trained"))));
		
	localStorage.removeItem("swordsmen_trained");
	localStorage.removeItem("swordsmen_producer");
	localStorage.removeItem("swordsmen_produce_time");
	
	location.reload();
	
	}
	
}

/* crossbowmen up and produce */

function crossbowmen_produce() {
	
	var c_value = document.getElementById("crossbowmen_input").value;
	var cost_value = Math.floor(Number(c_value) * 100);
	
	if (c_value != null && c_value > 0) {
	
	if (Number(cost_value) <= Number(localStorage.getItem("gold")) && Number(cost_value) <= Number(localStorage.getItem("wood"))) {
			
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + Math.floor(60 * Number(document.getElementById("crossbowmen_input").value)));
		var ms_time = now.getTime();
		localStorage.setItem("crossbowmen_produce_time", ms_time);
		
		localStorage.setItem("crossbowmen_produce_price", Math.floor(100 * Number(document.getElementById("crossbowmen_input").value)));
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + Math.floor(100 * Number(document.getElementById("crossbowmen_input").value))));
			
		localStorage.setItem("wood_cash", Math.floor(Number(localStorage.getItem("wood_cash")) + Math.floor(100 * Number(document.getElementById("crossbowmen_input").value))));
		
		localStorage.setItem("crossbowmen_producer", "on");
		
		localStorage.setItem("crossbowmen_trained", Number(document.getElementById("crossbowmen_input").value))
		
		location.reload();
			
	}
	
	}
	
}

function crossbowmen_produce_cancel() {
	
	localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) - Number(localStorage.getItem("crossbowmen_produce_price"))));
	localStorage.setItem("wood_cash", Math.floor(Number(localStorage.getItem("wood_cash")) - Number(localStorage.getItem("crossbowmen_produce_price"))));
	
	localStorage.removeItem("crossbowmen_producer");
	localStorage.removeItem("crossbowmen_produce_time");
	
	location.reload();
	
}

setInterval(function(){
	
	if (localStorage.getItem("crossbowmen_producer") == "on") {
		
		document.getElementById("build_right1").style.display = "none";
		document.getElementById("build_right2").style.display = "none";
		document.getElementById("build_right3").style.display = "none";
		document.getElementById("build_right4").style.display = "none";
		document.getElementById("build_right5").style.display = "none";
		document.getElementById("build_right6").style.display = "none";
		document.getElementById("build_right7").style.display = "none";
		document.getElementById("build_producer1").style.display = "block";
		document.getElementById("build_producer2").style.display = "block";
		document.getElementById("build_producer3").style.display = "block";
		document.getElementById("build_producer4").style.display = "block";
		document.getElementById("build_producer5").style.display = "block";
		document.getElementById("build_producer6").style.display = "block";
		document.getElementById("build_producer7").style.display = "block";
		
		document.getElementById("build_produce_board1").style.display = "none";
		document.getElementById("build_produce_board2").style.display = "none";
		document.getElementById("build_produce_board3").style.display = "none";
		document.getElementById("build_produce_board4").style.display = "none";
		document.getElementById("build_produce_board5").style.display = "none";
		document.getElementById("build_produce_board7").style.display = "none";
		
		var cbp_ms = Math.floor(Number(localStorage.getItem("crossbowmen_produce_time")) - Date.now());
		var cbp_s = Math.floor(cbp_ms / 1000);
		var cbp_m = Math.floor(cbp_s / 60);
		cbp_s = cbp_s % 60;
		var cbp_h = Math.floor(cbp_m / 60);
		cbp_m = cbp_m % 60;
		var cbp_d = Math.floor(cbp_h / 24);
		cbp_h = cbp_h % 24;
		
		cbp_d = cbp_d.toString().padStart(2, "0");
		cbp_h = cbp_h.toString().padStart(2, "0");
		cbp_m = cbp_m.toString().padStart(2, "0");
		cbp_s = cbp_s.toString().padStart(2, "0");
		
		document.getElementById("crossbowmen_produce_d").innerText = cbp_d;
		document.getElementById("crossbowmen_produce_h").innerText = cbp_h;
		document.getElementById("crossbowmen_produce_m").innerText = cbp_m;
		document.getElementById("crossbowmen_produce_s").innerText = cbp_s;
		
		if (Math.floor(Number(localStorage.getItem("crossbowmen_produce_time")) - Date.now()) < 0) {
		
		localStorage.removeItem("crossbowmen_producer");
		localStorage.removeItem("crossbowmen_produce_time");
		
		document.getElementById("build_right1").style.display = "block";
		document.getElementById("build_right2").style.display = "block";
		document.getElementById("build_right3").style.display = "block";
		document.getElementById("build_right4").style.display = "block";
		document.getElementById("build_right5").style.display = "block";
		document.getElementById("build_right6").style.display = "block";
		document.getElementById("build_right7").style.display = "block";
		document.getElementById("build_producer1").style.display = "none";
		document.getElementById("build_producer2").style.display = "none";
		document.getElementById("build_producer3").style.display = "none";
		document.getElementById("build_producer4").style.display = "none";
		document.getElementById("build_producer5").style.display = "none";
		document.getElementById("build_producer6").style.display = "none";
		document.getElementById("build_producer7").style.display = "none";
		
		localStorage.setItem("crossbowmen_have", Math.floor(Number(localStorage.getItem("crossbowmen_have")) + Number(localStorage.getItem("crossbowmen_trained"))));
		
		localStorage.removeItem("crossbowmen_trained");
		
		location.reload();
		}
		
		
	}
	
	
}, 10);

function crossbowmen_up() {
	
	if (Number(localStorage.getItem("crossbowmen_level")) == 0 && Number(localStorage.getItem("gold")) >= 40) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 20);
		var ms_time = now.getTime();
		localStorage.setItem("crossbowmen_up_time", ms_time);
		
		localStorage.setItem("crossbowmen_up_price", 40);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 40));
		
		localStorage.setItem("crossbowmen_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("crossbowmen_level")) == 1 && Number(localStorage.getItem("gold")) >= 60) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 40);
		var ms_time = now.getTime();
		localStorage.setItem("crossbowmen_up_time", ms_time);
		
		localStorage.setItem("crossbowmen_up_price", 60);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 60));
		
		localStorage.setItem("crossbowmen_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("crossbowmen_level")) == 2 && Number(localStorage.getItem("gold")) >= 120) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 80);
		var ms_time = now.getTime();
		localStorage.setItem("crossbowmen_up_time", ms_time);
		
		localStorage.setItem("crossbowmen_up_price", 120);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 120));
		
		localStorage.setItem("crossbowmen_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("crossbowmen_level")) == 3 && Number(localStorage.getItem("gold")) >= 250) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 160);
		var ms_time = now.getTime();
		localStorage.setItem("crossbowmen_up_time", ms_time);
		
		localStorage.setItem("crossbowmen_up_price", 250);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 250));
		
		localStorage.setItem("crossbowmen_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("crossbowmen_level")) == 4 && Number(localStorage.getItem("gold")) >= 400) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 320);
		var ms_time = now.getTime();
		localStorage.setItem("crossbowmen_up_time", ms_time);
		
		localStorage.setItem("crossbowmen_up_price", 400);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 400));
		
		localStorage.setItem("crossbowmen_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("crossbowmen_level")) == 5 && Number(localStorage.getItem("gold")) >= 700) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1220);
		var ms_time = now.getTime();
		localStorage.setItem("crossbowmen_up_time", ms_time);
		
		localStorage.setItem("crossbowmen_up_price", 700);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 700));
		
		localStorage.setItem("crossbowmen_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("crossbowmen_level")) == 6 && Number(localStorage.getItem("gold")) >= 1100) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1840);
		var ms_time = now.getTime();
		localStorage.setItem("crossbowmen_up_time", ms_time);
		
		localStorage.setItem("crossbowmen_up_price", 1100);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 1100));
		
		localStorage.setItem("crossbowmen_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("crossbowmen_level")) == 7 && Number(localStorage.getItem("gold")) >= 1450) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 2720);
		var ms_time = now.getTime();
		localStorage.setItem("crossbowmen_up_time", ms_time);
		
		localStorage.setItem("crossbowmen_up_price", 1450);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 1450));
		
		localStorage.setItem("crossbowmen_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("crossbowmen_level")) == 8 && Number(localStorage.getItem("gold")) >= 1800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 4540);
		var ms_time = now.getTime();
		localStorage.setItem("crossbowmen_up_time", ms_time);
		
		localStorage.setItem("crossbowmen_up_price", 1800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 1800));
		
		localStorage.setItem("crossbowmen_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("crossbowmen_level")) == 9 && Number(localStorage.getItem("gold")) >= 2200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 6620);
		var ms_time = now.getTime();
		localStorage.setItem("crossbowmen_up_time", ms_time);
		
		localStorage.setItem("crossbowmen_up_price", 2200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 2200));
		
		localStorage.setItem("crossbowmen_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("crossbowmen_level")) == 10 && Number(localStorage.getItem("gold")) >= 3000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 14740);
		var ms_time = now.getTime();
		localStorage.setItem("crossbowmen_up_time", ms_time);
		
		localStorage.setItem("crossbowmen_up_price", 3000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 3000));
		
		localStorage.setItem("crossbowmen_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("crossbowmen_level")) == 11 && Number(localStorage.getItem("gold")) >= 3600) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 19220);
		var ms_time = now.getTime();
		localStorage.setItem("crossbowmen_up_time", ms_time);
		
		localStorage.setItem("crossbowmen_up_price", 3600);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 3600));
		
		localStorage.setItem("crossbowmen_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("crossbowmen_level")) == 12 && Number(localStorage.getItem("gold")) >= 4200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 24340);
		var ms_time = now.getTime();
		localStorage.setItem("crossbowmen_up_time", ms_time);
		
		localStorage.setItem("crossbowmen_up_price", 4200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 4200));
		
		localStorage.setItem("crossbowmen_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("crossbowmen_level")) == 13 && Number(localStorage.getItem("gold")) >= 4900) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 29720);
		var ms_time = now.getTime();
		localStorage.setItem("crossbowmen_up_time", ms_time);
		
		localStorage.setItem("crossbowmen_up_price", 4900);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 4900));
		
		localStorage.setItem("crossbowmen_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("crossbowmen_level")) == 14 && Number(localStorage.getItem("gold")) >= 5700) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 35740);
		var ms_time = now.getTime();
		localStorage.setItem("crossbowmen_up_time", ms_time);
		
		localStorage.setItem("crossbowmen_up_price", 5700);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 5700));
		
		localStorage.setItem("crossbowmen_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("crossbowmen_level")) == 15 && Number(localStorage.getItem("gold")) >= 8500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 64820);
		var ms_time = now.getTime();
		localStorage.setItem("crossbowmen_up_time", ms_time);
		
		localStorage.setItem("crossbowmen_up_price", 8500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 8500));
		
		localStorage.setItem("crossbowmen_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("crossbowmen_level")) == 16 && Number(localStorage.getItem("gold")) >= 9600) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 73240);
		var ms_time = now.getTime();
		localStorage.setItem("crossbowmen_up_time", ms_time);
		
		localStorage.setItem("crossbowmen_up_price", 9600);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 9600));
		
		localStorage.setItem("crossbowmen_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("crossbowmen_level")) == 17 && Number(localStorage.getItem("gold")) >= 11200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 82510);
		var ms_time = now.getTime();
		localStorage.setItem("crossbowmen_up_time", ms_time);
		
		localStorage.setItem("crossbowmen_up_price", 11200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 11200));
		
		localStorage.setItem("crossbowmen_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("crossbowmen_level")) == 18 && Number(localStorage.getItem("gold")) >= 15100) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 91840);
		var ms_time = now.getTime();
		localStorage.setItem("crossbowmen_up_time", ms_time);
		
		localStorage.setItem("crossbowmen_up_price", 15100);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 15100));
		
		localStorage.setItem("crossbowmen_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("crossbowmen_level")) == 19 && Number(localStorage.getItem("gold")) >= 20300) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 103520);
		var ms_time = now.getTime();
		localStorage.setItem("crossbowmen_up_time", ms_time);
		
		localStorage.setItem("crossbowmen_up_price", 20300);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 20300));
		
		localStorage.setItem("crossbowmen_upper", "on");
		
		location.reload();
		
	}
	
}

function crossbowmen_up_cancel() {
	
	localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) - Number(localStorage.getItem("crossbowmen_up_price"))));
	
	localStorage.removeItem("crossbowmen_upper");
	localStorage.removeItem("crossbowmen_up_time");
	
	location.reload();
	
}

setInterval(function(){
	
	if (localStorage.getItem("crossbowmen_upper") == "on") {
		
		document.getElementById("build_right1").style.display = "none";
		document.getElementById("build_right2").style.display = "none";
		document.getElementById("build_right3").style.display = "none";
		document.getElementById("build_right4").style.display = "none";
		document.getElementById("build_right5").style.display = "none";
		document.getElementById("build_right6").style.display = "none";
		document.getElementById("build_right7").style.display = "none";
		document.getElementById("build_upper1").style.display = "block";
		document.getElementById("build_upper2").style.display = "block";
		document.getElementById("build_upper3").style.display = "block";
		document.getElementById("build_upper4").style.display = "block";
		document.getElementById("build_upper5").style.display = "block";
		document.getElementById("build_upper6").style.display = "block";
		document.getElementById("build_upper7").style.display = "block";
		
		document.getElementById("build_up_board1").style.display = "none";
		document.getElementById("build_up_board2").style.display = "none";
		document.getElementById("build_up_board3").style.display = "none";
		document.getElementById("build_up_board4").style.display = "none";
		document.getElementById("build_up_board5").style.display = "none";
		document.getElementById("build_up_board7").style.display = "none";
		
		var cb_ms = Math.floor(Number(localStorage.getItem("crossbowmen_up_time")) - Date.now());
		var cb_s = Math.floor(cb_ms / 1000);
		var cb_m = Math.floor(cb_s / 60);
		cb_s = cb_s % 60;
		var cb_h = Math.floor(cb_m / 60);
		cb_m = cb_m % 60;
		var cb_d = Math.floor(cb_h / 24);
		cb_h = cb_h % 24;
		
		cb_d = cb_d.toString().padStart(2, "0");
		cb_h = cb_h.toString().padStart(2, "0");
		cb_m = cb_m.toString().padStart(2, "0");
		cb_s = cb_s.toString().padStart(2, "0");
		
		document.getElementById("crossbowmen_up_d").innerText = cb_d;
		document.getElementById("crossbowmen_up_h").innerText = cb_h;
		document.getElementById("crossbowmen_up_m").innerText = cb_m;
		document.getElementById("crossbowmen_up_s").innerText = cb_s;
		
		if (Math.floor(Number(localStorage.getItem("crossbowmen_up_time")) - Date.now()) < 0) {
		
		localStorage.removeItem("crossbowmen_upper");
		localStorage.removeItem("crossbowmen_up_time");
		
		document.getElementById("build_right1").style.display = "block";
		document.getElementById("build_right2").style.display = "block";
		document.getElementById("build_right3").style.display = "block";
		document.getElementById("build_right4").style.display = "block";
		document.getElementById("build_right5").style.display = "block";
		document.getElementById("build_right6").style.display = "block";
		document.getElementById("build_right7").style.display = "block";
		document.getElementById("build_upper1").style.display = "none";
		document.getElementById("build_upper2").style.display = "none";
		document.getElementById("build_upper3").style.display = "none";
		document.getElementById("build_upper4").style.display = "none";
		document.getElementById("build_upper5").style.display = "none";
		document.getElementById("build_upper6").style.display = "none";
		document.getElementById("build_upper7").style.display = "none";
		
		localStorage.setItem("crossbowmen_level", Math.floor(Number(localStorage.getItem("crossbowmen_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 8));
		
		location.reload();
		}
		
		
	}
	
	
}, 10);

setInterval(function(){
	
	document.getElementById("crossbowmen_level").innerText = Number(localStorage.getItem("crossbowmen_level"));
	if (Number(localStorage.getItem("crossbowmen_level")) != 20) {
	document.getElementById("crossbowmen_next_level").innerText = Math.floor(Number(localStorage.getItem("crossbowmen_level")) + 1);
	} else if (Number(localStorage.getItem("crossbowmen_level")) == 20) {
		document.getElementById("crossbowmen_next_level").innerText = "Max";
	}
	var result1 = Math.floor(Number(localStorage.getItem("gold")) / 100);
	var result2 = Math.floor(Number(localStorage.getItem("wood")) / 100);
	var result3 = Math.min(result1, result2);
	document.getElementById("max_crossbowmen").innerText = Math.floor(result3);
	document.getElementById("total_crossbowmen").innerText = Number(localStorage.getItem("crossbowmen_have"));
	document.getElementById("crossbowmen_trained_amount").innerText = Number(localStorage.getItem("crossbowmen_trained"));
	document.getElementById("crossbowmen_produce_speed_up_cost").innerText = Number(localStorage.getItem("crossbowmen_trained"));
	
}, 10);

function crossbowmen_up_speed_up() {
	if (Number(localStorage.getItem("diamond")) >= 50) {
		
		localStorage.setItem("diamond_cash", Math.floor(Number(localStorage.getItem("diamond_cash")) + 50));
		
		localStorage.setItem("crossbowmen_level", Math.floor(Number(localStorage.getItem("crossbowmen_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 8));
		
		localStorage.removeItem("crossbowmen_upper");
		localStorage.removeItem("crossbowmen_up_time");
		
		location.reload();
		
	}
}

function crossbowmen_produce_speed_up() {
	
	if (Number(localStorage.getItem("diamond")) >= Number(localStorage.getItem("crossbowmen_trained"))) {
		
	localStorage.setItem("diamond_cash", Math.floor(Number(localStorage.getItem("diamond_cash")) + Number(localStorage.getItem("crossbowmen_trained"))));
		
	localStorage.setItem("crossbowmen_have", Math.floor(Number(localStorage.getItem("crossbowmen_have")) + Number(localStorage.getItem("crossbowmen_trained"))));
		
	localStorage.removeItem("crossbowmen_trained");
	localStorage.removeItem("crossbowmen_producer");
	localStorage.removeItem("crossbowmen_produce_time");
	
	location.reload();
	
	}
	
}

/* arquebusiers up and produce */

function arquebusiers_produce() {
	
	var c_value = document.getElementById("arquebusiers_input").value;
	var cost_value = Math.floor(Number(c_value) * 150);
	
	if (c_value != null && c_value > 0) {
	
	if (Number(cost_value) <= Number(localStorage.getItem("gold")) && Number(cost_value) <= Number(localStorage.getItem("food"))) {
			
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + Math.floor(80 * Number(document.getElementById("arquebusiers_input").value)));
		var ms_time = now.getTime();
		localStorage.setItem("arquebusiers_produce_time", ms_time);
		
		localStorage.setItem("arquebusiers_produce_price", Math.floor(150 * Number(document.getElementById("arquebusiers_input").value)));
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + Math.floor(150 * Number(document.getElementById("arquebusiers_input").value))));
			
		localStorage.setItem("food_cash", Math.floor(Number(localStorage.getItem("food_cash")) + Math.floor(150 * Number(document.getElementById("arquebusiers_input").value))));
		
		localStorage.setItem("arquebusiers_producer", "on");
		
		localStorage.setItem("arquebusiers_trained", Number(document.getElementById("arquebusiers_input").value))
		
		location.reload();
			
	}
	
	}
	
}

function arquebusiers_produce_cancel() {
	
	localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) - Number(localStorage.getItem("arquebusiers_produce_price"))));
	localStorage.setItem("food_cash", Math.floor(Number(localStorage.getItem("food_cash")) - Number(localStorage.getItem("arquebusiers_produce_price"))));
	
	localStorage.removeItem("arquebusiers_producer");
	localStorage.removeItem("arquebusiers_produce_time");
	
	location.reload();
	
}

setInterval(function(){
	
	if (localStorage.getItem("arquebusiers_producer") == "on") {
		
		document.getElementById("build_right1").style.display = "none";
		document.getElementById("build_right2").style.display = "none";
		document.getElementById("build_right3").style.display = "none";
		document.getElementById("build_right4").style.display = "none";
		document.getElementById("build_right5").style.display = "none";
		document.getElementById("build_right6").style.display = "none";
		document.getElementById("build_right7").style.display = "none";
		document.getElementById("build_producer1").style.display = "block";
		document.getElementById("build_producer2").style.display = "block";
		document.getElementById("build_producer3").style.display = "block";
		document.getElementById("build_producer4").style.display = "block";
		document.getElementById("build_producer5").style.display = "block";
		document.getElementById("build_producer6").style.display = "block";
		document.getElementById("build_producer7").style.display = "block";
		
		document.getElementById("build_produce_board1").style.display = "none";
		document.getElementById("build_produce_board2").style.display = "none";
		document.getElementById("build_produce_board3").style.display = "none";
		document.getElementById("build_produce_board4").style.display = "none";
		document.getElementById("build_produce_board5").style.display = "none";
		document.getElementById("build_produce_board6").style.display = "none";
		
		var abp_ms = Math.floor(Number(localStorage.getItem("arquebusiers_produce_time")) - Date.now());
		var abp_s = Math.floor(abp_ms / 1000);
		var abp_m = Math.floor(abp_s / 60);
		abp_s = abp_s % 60;
		var abp_h = Math.floor(abp_m / 60);
		abp_m = abp_m % 60;
		var abp_d = Math.floor(abp_h / 24);
		abp_h = abp_h % 24;
		
		abp_d = abp_d.toString().padStart(2, "0");
		abp_h = abp_h.toString().padStart(2, "0");
		abp_m = abp_m.toString().padStart(2, "0");
		abp_s = abp_s.toString().padStart(2, "0");
		
		document.getElementById("arquebusiers_produce_d").innerText = abp_d;
		document.getElementById("arquebusiers_produce_h").innerText = abp_h;
		document.getElementById("arquebusiers_produce_m").innerText = abp_m;
		document.getElementById("arquebusiers_produce_s").innerText = abp_s;
		
		if (Math.floor(Number(localStorage.getItem("arquebusiers_produce_time")) - Date.now()) < 0) {
		
		localStorage.removeItem("arquebusiers_producer");
		localStorage.removeItem("arquebusiers_produce_time");
		
		document.getElementById("build_right1").style.display = "block";
		document.getElementById("build_right2").style.display = "block";
		document.getElementById("build_right3").style.display = "block";
		document.getElementById("build_right4").style.display = "block";
		document.getElementById("build_right5").style.display = "block";
		document.getElementById("build_right6").style.display = "block";
		document.getElementById("build_right7").style.display = "block";
		document.getElementById("build_producer1").style.display = "none";
		document.getElementById("build_producer2").style.display = "none";
		document.getElementById("build_producer3").style.display = "none";
		document.getElementById("build_producer4").style.display = "none";
		document.getElementById("build_producer5").style.display = "none";
		document.getElementById("build_producer6").style.display = "none";
		document.getElementById("build_producer7").style.display = "none";
		
		localStorage.setItem("arquebusiers_have", Math.floor(Number(localStorage.getItem("arquebusiers_have")) + Number(localStorage.getItem("arquebusiers_trained"))));
		
		localStorage.removeItem("arquebusiers_trained");
		
		location.reload();
		}
		
		
	}
	
	
}, 10);

function arquebusiers_up() {
	
	if (Number(localStorage.getItem("arquebusiers_level")) == 0 && Number(localStorage.getItem("gold")) >= 80) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 20);
		var ms_time = now.getTime();
		localStorage.setItem("arquebusiers_up_time", ms_time);
		
		localStorage.setItem("arquebusiers_up_price", 80);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 80));
		
		localStorage.setItem("arquebusiers_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("arquebusiers_level")) == 1 && Number(localStorage.getItem("gold")) >= 120) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 40);
		var ms_time = now.getTime();
		localStorage.setItem("arquebusiers_up_time", ms_time);
		
		localStorage.setItem("arquebusiers_up_price", 120);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 120));
		
		localStorage.setItem("arquebusiers_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("arquebusiers_level")) == 2 && Number(localStorage.getItem("gold")) >= 240) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 80);
		var ms_time = now.getTime();
		localStorage.setItem("arquebusiers_up_time", ms_time);
		
		localStorage.setItem("arquebusiers_up_price", 240);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 240));
		
		localStorage.setItem("arquebusiers_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("arquebusiers_level")) == 3 && Number(localStorage.getItem("gold")) >= 500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 160);
		var ms_time = now.getTime();
		localStorage.setItem("arquebusiers_up_time", ms_time);
		
		localStorage.setItem("arquebusiers_up_price", 500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 500));
		
		localStorage.setItem("arquebusiers_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("arquebusiers_level")) == 4 && Number(localStorage.getItem("gold")) >= 800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 320);
		var ms_time = now.getTime();
		localStorage.setItem("arquebusiers_up_time", ms_time);
		
		localStorage.setItem("arquebusiers_up_price", 800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 800));
		
		localStorage.setItem("arquebusiers_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("arquebusiers_level")) == 5 && Number(localStorage.getItem("gold")) >= 1400) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1220);
		var ms_time = now.getTime();
		localStorage.setItem("arquebusiers_up_time", ms_time);
		
		localStorage.setItem("arquebusiers_up_price", 1400);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 1400));
		
		localStorage.setItem("arquebusiers_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("arquebusiers_level")) == 6 && Number(localStorage.getItem("gold")) >= 2000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1840);
		var ms_time = now.getTime();
		localStorage.setItem("arquebusiers_up_time", ms_time);
		
		localStorage.setItem("arquebusiers_up_price", 2000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 2000));
		
		localStorage.setItem("arquebusiers_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("arquebusiers_level")) == 7 && Number(localStorage.getItem("gold")) >= 2900) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 2720);
		var ms_time = now.getTime();
		localStorage.setItem("arquebusiers_up_time", ms_time);
		
		localStorage.setItem("arquebusiers_up_price", 2900);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 2900));
		
		localStorage.setItem("arquebusiers_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("arquebusiers_level")) == 8 && Number(localStorage.getItem("gold")) >= 3600) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 4540);
		var ms_time = now.getTime();
		localStorage.setItem("arquebusiers_up_time", ms_time);
		
		localStorage.setItem("arquebusiers_up_price", 3600);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 3600));
		
		localStorage.setItem("arquebusiers_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("arquebusiers_level")) == 9 && Number(localStorage.getItem("gold")) >= 4400) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 6620);
		var ms_time = now.getTime();
		localStorage.setItem("arquebusiers_up_time", ms_time);
		
		localStorage.setItem("arquebusiers_up_price", 4400);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 4400));
		
		localStorage.setItem("arquebusiers_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("arquebusiers_level")) == 10 && Number(localStorage.getItem("gold")) >= 6000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 14740);
		var ms_time = now.getTime();
		localStorage.setItem("arquebusiers_up_time", ms_time);
		
		localStorage.setItem("arquebusiers_up_price", 6000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 6000));
		
		localStorage.setItem("arquebusiers_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("arquebusiers_level")) == 11 && Number(localStorage.getItem("gold")) >= 7200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 19220);
		var ms_time = now.getTime();
		localStorage.setItem("arquebusiers_up_time", ms_time);
		
		localStorage.setItem("arquebusiers_up_price", 7200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 7200));
		
		localStorage.setItem("arquebusiers_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("arquebusiers_level")) == 12 && Number(localStorage.getItem("gold")) >= 8400) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 24340);
		var ms_time = now.getTime();
		localStorage.setItem("arquebusiers_up_time", ms_time);
		
		localStorage.setItem("arquebusiers_up_price", 8400);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 8400));
		
		localStorage.setItem("arquebusiers_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("arquebusiers_level")) == 13 && Number(localStorage.getItem("gold")) >= 9800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 29720);
		var ms_time = now.getTime();
		localStorage.setItem("arquebusiers_up_time", ms_time);
		
		localStorage.setItem("arquebusiers_up_price", 9800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 9800));
		
		localStorage.setItem("arquebusiers_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("arquebusiers_level")) == 14 && Number(localStorage.getItem("gold")) >= 11400) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 35740);
		var ms_time = now.getTime();
		localStorage.setItem("arquebusiers_up_time", ms_time);
		
		localStorage.setItem("arquebusiers_up_price", 11400);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 11400));
		
		localStorage.setItem("arquebusiers_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("arquebusiers_level")) == 15 && Number(localStorage.getItem("gold")) >= 17000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 64820);
		var ms_time = now.getTime();
		localStorage.setItem("arquebusiers_up_time", ms_time);
		
		localStorage.setItem("arquebusiers_up_price", 17000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 17000));
		
		localStorage.setItem("arquebusiers_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("arquebusiers_level")) == 16 && Number(localStorage.getItem("gold")) >= 19200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 73240);
		var ms_time = now.getTime();
		localStorage.setItem("arquebusiers_up_time", ms_time);
		
		localStorage.setItem("arquebusiers_up_price", 19200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 19200));
		
		localStorage.setItem("arquebusiers_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("arquebusiers_level")) == 17 && Number(localStorage.getItem("gold")) >= 23000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 82510);
		var ms_time = now.getTime();
		localStorage.setItem("arquebusiers_up_time", ms_time);
		
		localStorage.setItem("arquebusiers_up_price", 23000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 23000));
		
		localStorage.setItem("arquebusiers_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("arquebusiers_level")) == 18 && Number(localStorage.getItem("gold")) >= 30200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 91840);
		var ms_time = now.getTime();
		localStorage.setItem("arquebusiers_up_time", ms_time);
		
		localStorage.setItem("arquebusiers_up_price", 30200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 30200));
		
		localStorage.setItem("arquebusiers_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("arquebusiers_level")) == 19 && Number(localStorage.getItem("gold")) >= 40100) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 103520);
		var ms_time = now.getTime();
		localStorage.setItem("arquebusiers_up_time", ms_time);
		
		localStorage.setItem("arquebusiers_up_price", 40100);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 40100));
		
		localStorage.setItem("arquebusiers_upper", "on");
		
		location.reload();
		
	}
	
}

function arquebusiers_up_cancel() {
	
	localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) - Number(localStorage.getItem("arquebusiers_up_price"))));
	
	localStorage.removeItem("arquebusiers_upper");
	localStorage.removeItem("arquebusiers_up_time");
	
	location.reload();
	
}

setInterval(function(){
	
	if (localStorage.getItem("arquebusiers_upper") == "on") {
		
		document.getElementById("build_right1").style.display = "none";
		document.getElementById("build_right2").style.display = "none";
		document.getElementById("build_right3").style.display = "none";
		document.getElementById("build_right4").style.display = "none";
		document.getElementById("build_right5").style.display = "none";
		document.getElementById("build_right6").style.display = "none";
		document.getElementById("build_right7").style.display = "none";
		document.getElementById("build_upper1").style.display = "block";
		document.getElementById("build_upper2").style.display = "block";
		document.getElementById("build_upper3").style.display = "block";
		document.getElementById("build_upper4").style.display = "block";
		document.getElementById("build_upper5").style.display = "block";
		document.getElementById("build_upper6").style.display = "block";
		document.getElementById("build_upper7").style.display = "block";
		
		document.getElementById("build_up_board1").style.display = "none";
		document.getElementById("build_up_board2").style.display = "none";
		document.getElementById("build_up_board3").style.display = "none";
		document.getElementById("build_up_board4").style.display = "none";
		document.getElementById("build_up_board5").style.display = "none";
		document.getElementById("build_up_board6").style.display = "none";
		
		var ab_ms = Math.floor(Number(localStorage.getItem("arquebusiers_up_time")) - Date.now());
		var ab_s = Math.floor(ab_ms / 1000);
		var ab_m = Math.floor(ab_s / 60);
		ab_s = ab_s % 60;
		var ab_h = Math.floor(ab_m / 60);
		ab_m = ab_m % 60;
		var ab_d = Math.floor(ab_h / 24);
		ab_h = ab_h % 24;
		
		ab_d = ab_d.toString().padStart(2, "0");
		ab_h = ab_h.toString().padStart(2, "0");
		ab_m = ab_m.toString().padStart(2, "0");
		ab_s = ab_s.toString().padStart(2, "0");
		
		document.getElementById("arquebusiers_up_d").innerText = ab_d;
		document.getElementById("arquebusiers_up_h").innerText = ab_h;
		document.getElementById("arquebusiers_up_m").innerText = ab_m;
		document.getElementById("arquebusiers_up_s").innerText = ab_s;
		
		if (Math.floor(Number(localStorage.getItem("arquebusiers_up_time")) - Date.now()) < 0) {
		
		localStorage.removeItem("arquebusiers_upper");
		localStorage.removeItem("arquebusiers_up_time");
		
		document.getElementById("build_right1").style.display = "block";
		document.getElementById("build_right2").style.display = "block";
		document.getElementById("build_right3").style.display = "block";
		document.getElementById("build_right4").style.display = "block";
		document.getElementById("build_right5").style.display = "block";
		document.getElementById("build_right6").style.display = "block";
		document.getElementById("build_right7").style.display = "block";
		document.getElementById("build_upper1").style.display = "none";
		document.getElementById("build_upper2").style.display = "none";
		document.getElementById("build_upper3").style.display = "none";
		document.getElementById("build_upper4").style.display = "none";
		document.getElementById("build_upper5").style.display = "none";
		document.getElementById("build_upper6").style.display = "none";
		document.getElementById("build_upper7").style.display = "none";
		
		localStorage.setItem("arquebusiers_level", Math.floor(Number(localStorage.getItem("arquebusiers_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
		location.reload();
		}
		
		
	}
	
	
}, 10);

setInterval(function(){
	
	document.getElementById("arquebusiers_level").innerText = Number(localStorage.getItem("arquebusiers_level"));
	if (Number(localStorage.getItem("arquebusiers_level")) != 20) {
	document.getElementById("arquebusiers_next_level").innerText = Math.floor(Number(localStorage.getItem("arquebusiers_level")) + 1);
	} else if (Number(localStorage.getItem("arquebusiers_level")) == 20) {
		document.getElementById("arquebusiers_next_level").innerText = "Max";
	}
	var result1 = Math.floor(Number(localStorage.getItem("gold")) / 150);
	var result2 = Math.floor(Number(localStorage.getItem("food")) / 150);
	var result3 = Math.min(result1, result2);
	document.getElementById("max_arquebusiers").innerText = Math.floor(result3);
	document.getElementById("total_arquebusiers").innerText = Number(localStorage.getItem("arquebusiers_have"));
	document.getElementById("arquebusiers_trained_amount").innerText = Number(localStorage.getItem("arquebusiers_trained"));
	document.getElementById("arquebusiers_produce_speed_up_cost").innerText = Number(localStorage.getItem("arquebusiers_trained"));
	
}, 10);

function arquebusiers_up_speed_up() {
	if (Number(localStorage.getItem("diamond")) >= 50) {
		
		localStorage.setItem("diamond_cash", Math.floor(Number(localStorage.getItem("diamond_cash")) + 50));
		
		localStorage.setItem("arquebusiers_level", Math.floor(Number(localStorage.getItem("arquebusiers_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
		localStorage.removeItem("arquebusiers_upper");
		localStorage.removeItem("arquebusiers_up_time");
		
		location.reload();
		
	}
}

function arquebusiers_produce_speed_up() {
	
	if (Number(localStorage.getItem("diamond")) >= Number(localStorage.getItem("arquebusiers_trained"))) {
		
	localStorage.setItem("diamond_cash", Math.floor(Number(localStorage.getItem("diamond_cash")) + Number(localStorage.getItem("arquebusiers_trained"))));
		
	localStorage.setItem("arquebusiers_have", Math.floor(Number(localStorage.getItem("arquebusiers_have")) + Number(localStorage.getItem("arquebusiers_trained"))));
		
	localStorage.removeItem("arquebusiers_trained");
	localStorage.removeItem("arquebusiers_producer");
	localStorage.removeItem("arquebusiers_produce_time");
	
	location.reload();
	
	}
	
}

setInterval(function() {
	
	if (Number(localStorage.getItem("age")) < 2) {
		document.getElementById("build_right4").style.display = "none";
		document.getElementById("build_right5").style.display = "none";
		document.getElementById("build_right6").style.display = "none";
		document.getElementById("build_right7").style.display = "none";
	} else if (Number(localStorage.getItem("age")) < 3) {
		document.getElementById("build_right6").style.display = "none";
		document.getElementById("build_right7").style.display = "none";
	} else if (Number(localStorage.getItem("age")) < 5) {
		document.getElementById("build_right7").style.display = "none";
	}
	
}, 5);

/* Money */

function money(){
	
  var currentTime = new Date().getTime();
  
  var diamond = Math.floor((currentTime - localStorage.getItem("diamond_timer")) / 3600000);
  var timer_diamond = Math.floor(Number(diamond) * Number(localStorage.getItem("plus_diamond")));
  var diamond_reward = Math.floor(Number(timer_diamond) + 100000 - Number(localStorage.getItem("diamond_cash")) + Number(localStorage.getItem("last_diamond_cash")));
  localStorage.setItem("diamond", diamond_reward);
  
  var gold = Math.floor((currentTime - localStorage.getItem("gold_timer")) / 3600000);
  var timer_gold = Math.floor(Number(gold) * Number(localStorage.getItem("plus_gold")));
  var gold_reward = Math.floor(Number(timer_gold) + 10000 - Number(localStorage.getItem("gold_cash")) + Number(localStorage.getItem("last_gold_cash")));
  localStorage.setItem("gold", gold_reward);
  
  var food = Math.floor((currentTime - localStorage.getItem("food_timer")) / 3600000);
  var timer_food = Math.floor(Number(food) * Number(localStorage.getItem("plus_food")));
  var food_reward = Math.floor(Number(timer_food) + 10000 - Number(localStorage.getItem("food_cash")) + Number(localStorage.getItem("last_food_cash")));
  localStorage.setItem("food", food_reward);
  
  var wood = Math.floor((currentTime - localStorage.getItem("wood_timer")) / 3600000);
  var timer_wood = Math.floor(Number(wood) * Number(localStorage.getItem("plus_wood")));
  var wood_reward = Math.floor(Number(timer_wood) + 10000 - Number(localStorage.getItem("wood_cash")) + Number(localStorage.getItem("last_wood_cash")));
  localStorage.setItem("wood", wood_reward);
  
}

setInterval(money, 10);

/* defense bonus */

setInterval(function(){
	
	var results = (localStorage.getItem("castle_level") * 2) + (localStorage.getItem("wall_level") * 2) + ((Number(localStorage.getItem("watchtower_level")) * 0.1 + 1) * localStorage.getItem("watchtower_have"));
	results = Math.round(results * 100) / 100;
	localStorage.setItem("defense_bonus", results);
	
}, 10);

/* input only num */

function inputonlynumber(input) {
    let numbers = input.value;
      
    let onlynumber = /^[0-9]*$/;
  
    if (!onlynumber.test(numbers)) {
        input.value = numbers.replace(/[^0-9]/g, '');
    }
}