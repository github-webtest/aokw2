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

function troop1_info() {
	document.getElementById("troops_info").style.animation = "troop_info1 0.4s";
	document.getElementById("troops_info_bg").style.display = "flex";
	document.getElementById("troops_info").style.display = "block";
	
	document.getElementById("troops_text").innerText = "Castle";
	
	if (localStorage.getItem("local_lan") == "en") {
		
	  const c_level = Number(localStorage.getItem("knight_level"));
	
	 fetch('/getKnight_enData')
        .then(res => res.json())
        .then(data => {
		const data_knight = data.find(data_knight => data_knight.Level === c_level);
			
		if (data_knight) {
		    /* info */
		
		if (data_knight.Age == 1) {
			document.getElementById("age_t").innerText = "Dark (1)";
		} else if (data_knight.Age == 2) {
			document.getElementById("age_t").innerText = "Feudal (2)";
		} else if (data_knight.Age == 3) {
			document.getElementById("age_t").innerText = "Castle (3)";
		} else if (data_knight.Age == 4) {
			document.getElementById("age_t").innerText = "Imperial (4)";
		} else if (data_knight.Age == 5) {
			document.getElementById("age_t").innerText = "New (5)";
		}
		document.getElementById("type_t").innerText = data_knight.Type;
		document.getElementById("class_t").innerText = data_knight.Class;
		
		/* produce */
		
		if (data_knight.Pfood == null) {
			document.getElementById("produce_d1").style.display = "none";
			document.getElementById("produce_d2").style.display = "none";
		} else {
			document.getElementById("p_food").innerText = data_knight.Pfood;
		    document.getElementById("p_wood").innerText = data_knight.Pwood;
		    document.getElementById("p_gold").innerText = data_knight.Pgold;
		    document.getElementById("p_diamond").innerText = data_knight.Pdiamond;
		    document.getElementById("p_time").innerText = data_knight.Ptime;
		}
		
		/* upgrade */
		
		document.getElementById("u_gold").innerText = data_knight.Ugold;
		document.getElementById("u_xp").innerText = data_knight.Uxp;
		document.getElementById("u_time").innerText = data_knight.Utime;
		
		/* abilities */
		
		document.getElementById("abilities_text").innerText = data_knight.Atitle;
		document.getElementById("a1_title").innerText = data_knight.A1text;
		document.getElementById("a1_text").innerText = data_knight.A1;
		document.getElementById("a2_title").innerText = data_knight.A2text;
		document.getElementById("a2_text").innerText = data_knight.A2;
		document.getElementById("a3_title").innerText = data_knight.A3text;
		document.getElementById("a3_text").innerText = data_knight.A3;
		
		if (data_knight.A2text == null) {
			document.getElementById("abilities_2").style.display = "none";
			document.getElementById("abilities_3").style.display = "none";
		} else if (data_knight.A2text != null && data_knight.A3text == null) {
			document.getElementById("abilities_3").style.display = "none";
		}
			}
            data.forEach(data_knight => {
            });
        })
        .catch(error => {
            console.error(error);
        });
	}
	
}

function troop2_info() {
	document.getElementById("troops_info").style.animation = "troop_info1 0.4s";
	document.getElementById("troops_info_bg").style.display = "flex";
	document.getElementById("troops_info").style.display = "block";
	
	document.getElementById("troops_text").innerText = "Castle";
	
	if (localStorage.getItem("local_lan") == "en") {
		
	  const c_level = Number(localStorage.getItem("imperial_spearman_level"));
	
	 fetch('/getImperial_Spearman_enData')
        .then(res => res.json())
        .then(data => {
		const data_imperial_spearman = data.find(data_imperial_spearman => data_imperial_spearman.Level === c_level);
			
		if (data_imperial_spearman) {
		    /* info */
		
		if (data_imperial_spearman.Age == 1) {
			document.getElementById("age_t").innerText = "Dark (1)";
		} else if (data_imperial_spearman.Age == 2) {
			document.getElementById("age_t").innerText = "Feudal (2)";
		} else if (data_imperial_spearman.Age == 3) {
			document.getElementById("age_t").innerText = "Castle (3)";
		} else if (data_imperial_spearman.Age == 4) {
			document.getElementById("age_t").innerText = "Imperial (4)";
		} else if (data_imperial_spearman.Age == 5) {
			document.getElementById("age_t").innerText = "New (5)";
		}
		document.getElementById("type_t").innerText = data_imperial_spearman.Type;
		document.getElementById("class_t").innerText = data_imperial_spearman.Class;
		
		/* produce */
		
		if (data_imperial_spearman.Pfood == null) {
			document.getElementById("produce_d1").style.display = "none";
			document.getElementById("produce_d2").style.display = "none";
		} else {
			document.getElementById("p_food").innerText = data_imperial_spearman.Pfood;
		    document.getElementById("p_wood").innerText = data_imperial_spearman.Pwood;
		    document.getElementById("p_gold").innerText = data_imperial_spearman.Pgold;
		    document.getElementById("p_diamond").innerText = data_imperial_spearman.Pdiamond;
		    document.getElementById("p_time").innerText = data_imperial_spearman.Ptime;
		}
		
		/* upgrade */
		
		document.getElementById("u_gold").innerText = data_imperial_spearman.Ugold;
		document.getElementById("u_xp").innerText = data_imperial_spearman.Uxp;
		document.getElementById("u_time").innerText = data_imperial_spearman.Utime;
		
		/* abilities */
		
		document.getElementById("abilities_text").innerText = data_imperial_spearman.Atitle;
		document.getElementById("a1_title").innerText = data_imperial_spearman.A1text;
		document.getElementById("a1_text").innerText = data_imperial_spearman.A1;
		document.getElementById("a2_title").innerText = data_imperial_spearman.A2text;
		document.getElementById("a2_text").innerText = data_imperial_spearman.A2;
		document.getElementById("a3_title").innerText = data_imperial_spearman.A3text;
		document.getElementById("a3_text").innerText = data_imperial_spearman.A3;
		
		if (data_imperial_spearman.A2text == null) {
			document.getElementById("abilities_2").style.display = "none";
			document.getElementById("abilities_3").style.display = "none";
		} else if (data_imperial_spearman.A2text != null && data_imperial_spearman.A3text == null) {
			document.getElementById("abilities_3").style.display = "none";
		}
			}
            data.forEach(data_imperial_spearman => {
            });
        })
        .catch(error => {
            console.error(error);
        });
	}
	
}

setInterval(function() {
	
	const username = localStorage.getItem("user_login");
	
	fetch('/getUsersData')
            .then(res => res.json())
            .then(data => {
			const user = data.find(user => user.username === username);
			
			if (user) {
			
			document.getElementById("castle_level").innerText = user.castle_level;
			document.getElementById("total_knight").innerText = user.knight_have;
			document.getElementById("knight_level").innerText = user.knight_level;
			document.getElementById("total_imperial_spearman").innerText = user.total_imperial_have;
			document.getElementById("imperial_spearman_level").innerText = user.imperial_spearman_level;
			
			}
                data.forEach(user => {
                });
            })
            .catch(error => {
                console.error(error);
            });
}, 100);

setInterval(function() {
	const username = localStorage.getItem("user_login");
	
	fetch('/getUsersData')
            .then(res => res.json())
            .then(data => {
			const user = data.find(user => user.username === username);
			
			if (user) {
			
			if (user.castle_level < 20) {
				document.getElementById("castle_next_level").innerText = user.castle_level + 1;
			} else {
				document.getElementById("castle_next_level").innerText = "Max";
			}
			
			}
                data.forEach(user => {
                });
            })
            .catch(error => {
                console.error(error);
            });
}, 100);

setInterval(function() {
	const username = localStorage.getItem("user_login");
	
	fetch('/getUsersData')
            .then(res => res.json())
            .then(data => {
			const user = data.find(user => user.username === username);
			
			if (user) {
			
			if (user.knight_level < 20) {
				document.getElementById("knight_next_level").innerText = user.knight_level + 1;
			} else {
				document.getElementById("knight_next_level").innerText = "Max";
			}
			
			document.getElementById("max_knight").innerText = Math.floor(user.diamond / 2);
			
			}
                data.forEach(user => {
                });
            })
            .catch(error => {
                console.error(error);
            });
}, 100);

setInterval(function() {
	const username = localStorage.getItem("user_login");
	
	fetch('/getUsersData')
            .then(res => res.json())
            .then(data => {
			const user = data.find(user => user.username === username);
			
			if (user) {
			
			if (user.imperial_spearman_level < 20) {
				document.getElementById("imperial_spearman_next_level").innerText = user.imperial_spearman_level + 1;
			} else {
				document.getElementById("imperial_spearman_next_level").innerText = "Max";
			}
			
			var result1 = Math.floor(user.gold / 200);
	        var result2 = Math.floor(user.food / 200);
	        var result3 = Math.min(result1, result2);
	        document.getElementById("max_imperial_spearman").innerText = Math.floor(result3);
			
			}
                data.forEach(user => {
                });
            })
            .catch(error => {
                console.error(error);
            });
}, 100);