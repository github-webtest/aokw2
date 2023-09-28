function page_save() {
	if (localStorage.getItem("local_lan") == "en") {
		document.getElementById("lan_head_text").innerText = "Castle";
		document.getElementById("build_top_text").innerText = "Produce elite warriors for your army and fortify the castle to protect your kingdom center!";
		document.getElementById("defense_bonus_text").innerText = "Defense Bonus: ";
		document.getElementById("castlex_text").innerText = "Castle";
		document.getElementById("knightx_text").innerText = "Knight x";
		document.getElementById("imperial_spearmanx_text").innerText = "Imperial Spearman x";
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

function build_info() {
	document.getElementById("troops_info").style.animation = "troop_info1 0.4s";
	document.getElementById("troops_info_bg").style.display = "flex";
	document.getElementById("troops_info").style.display = "block";
	
	document.getElementById("troops_text").innerText = "Castle";
	
	if (localStorage.getItem("local_lan") == "en") {
		
	  const c_level = Number(localStorage.getItem("castle_level"));
	
	 fetch('/getCastle_enData')
        .then(res => res.json())
        .then(data => {
		const data_castle = data.find(data_castle => data_castle.Level === c_level);
			
		if (data_castle) {
		    /* info */
		
		if (data_castle.Age == 1) {
			document.getElementById("age_t").innerText = "Dark (1)";
		} else if (data_castle.Age == 2) {
			document.getElementById("age_t").innerText = "Feudal (2)";
		} else if (data_castle.Age == 3) {
			document.getElementById("age_t").innerText = "Castle (3)";
		} else if (data_castle.Age == 4) {
			document.getElementById("age_t").innerText = "Imperial (4)";
		} else if (data_castle.Age == 5) {
			document.getElementById("age_t").innerText = "New (5)";
		}
		document.getElementById("type_t").innerText = data_castle.Type;
		document.getElementById("class_t").innerText = data_castle.Class;
		
		/* produce */
		
		if (data_castle.Pfood == null) {
			document.getElementById("produce_d1").style.display = "none";
			document.getElementById("produce_d2").style.display = "none";
		} else {
			document.getElementById("p_food").innerText = data_castle.Pfood;
		    document.getElementById("p_wood").innerText = data_castle.Pwood;
		    document.getElementById("p_gold").innerText = data_castle.Pgold;
		    document.getElementById("p_diamond").innerText = data_castle.Pdiamond;
		    document.getElementById("p_time").innerText = data_castle.Ptime;
		}
		
		/* upgrade */
		
		document.getElementById("u_gold").innerText = data_castle.Ugold;
		document.getElementById("u_xp").innerText = data_castle.Uxp;
		document.getElementById("u_time").innerText = data_castle.Utime;
		
		/* abilities */
		
		document.getElementById("abilities_text").innerText = data_castle.Atitle;
		document.getElementById("a1_title").innerText = data_castle.A1text;
		document.getElementById("a1_text").innerText = data_castle.A1;
		document.getElementById("a2_title").innerText = data_castle.A2text;
		document.getElementById("a2_text").innerText = data_castle.A2;
		document.getElementById("a3_title").innerText = data_castle.A3text;
		document.getElementById("a3_text").innerText = data_castle.A3;
		
		if (data_castle.A2text == null) {
			document.getElementById("abilities_2").style.display = "none";
			document.getElementById("abilities_3").style.display = "none";
		} else if (data_castle.A2text != null && data_castle.A3text == null) {
			document.getElementById("abilities_3").style.display = "none";
		}
			}
            data.forEach(data_castle => {
            });
        })
        .catch(error => {
            console.error(error);
        });
	}
	
}