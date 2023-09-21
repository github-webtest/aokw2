function page_save() {
	if (localStorage.getItem("local_lan") == "en") {
		document.getElementById("lan_head_text").innerText = "Academy";
		document.getElementById("build_top_text").innerText = "Do scientific research and upgrade your technology!";
		document.getElementById("farmingx_text").innerText = "Farming";
		document.getElementById("lumberingx_text").innerText = "Lumbering";
		document.getElementById("miningx_text").innerText = "Mining";
		document.getElementById("blacksmithingx_text").innerText = "Blacksmithing";
		document.getElementById("ridingx_text").innerText = "Riding";
		document.getElementById("geometryx_text").innerText = "Geometry";
		document.getElementById("cartographyx_text").innerText = "Cartography";
		document.getElementById("spyingx_text").innerText = "Spying";
		document.getElementById("masonryx_text").innerText = "Masonry";
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

function academy_info1() {
	document.getElementById("troops_info").style.animation = "troop_info1 0.4s";
	document.getElementById("troops_info_bg").style.display = "flex";
	document.getElementById("troops_info").style.display = "block";
	
	document.getElementById("troops_text").innerText = "Farming";

    $(document).ready(function(){
		
		var jsonData_farming = JSON.stringify(farming);
		var data_farming = JSON.parse(jsonData_farming);
		
		/* info */
		
		if (data_farming[Number(localStorage.getItem("farming_level"))].Age == 1) {
			document.getElementById("age_t").innerText = "Dark (1)";
		} else if (data_farming[Number(localStorage.getItem("farming_level"))].Age == 2) {
			document.getElementById("age_t").innerText = "Feudal (2)";
		} else if (data_farming[Number(localStorage.getItem("farming_level"))].Age == 3) {
			document.getElementById("age_t").innerText = "Castle (3)";
		} else if (data_farming[Number(localStorage.getItem("farming_level"))].Age == 4) {
			document.getElementById("age_t").innerText = "Imperial (4)";
		} else if (data_farming[Number(localStorage.getItem("farming_level"))].Age == 5) {
			document.getElementById("age_t").innerText = "New (5)";
		}
		document.getElementById("type_t").innerText = data_farming[Number(localStorage.getItem("farming_level"))].Type;
		document.getElementById("class_t").innerText = data_farming[Number(localStorage.getItem("farming_level"))].Class;
		
		/* produce */
		
		document.getElementById("p_food").innerText = data_farming[Number(localStorage.getItem("farming_level"))].Pfood;
		document.getElementById("p_wood").innerText = data_farming[Number(localStorage.getItem("farming_level"))].Pwood;
		document.getElementById("p_gold").innerText = data_farming[Number(localStorage.getItem("farming_level"))].Pgold;
		document.getElementById("p_diamond").innerText = data_farming[Number(localStorage.getItem("farming_level"))].Pdiamond;
		document.getElementById("p_time").innerText = data_farming[Number(localStorage.getItem("farming_level"))].Ptime;
		
		if (data_farming[Number(localStorage.getItem("farming_level"))].Pfood == null) {
			document.getElementById("produce_d1").style.display = "none";
			document.getElementById("produce_d2").style.display = "none";
		}
		
		/* upgrade */
		
		document.getElementById("u_gold").innerText = data_farming[Number(localStorage.getItem("farming_level"))].Ugold;
		document.getElementById("u_xp").innerText = data_farming[Number(localStorage.getItem("farming_level"))].Uxp;
		document.getElementById("u_time").innerText = data_farming[Number(localStorage.getItem("farming_level"))].Utime;
		
		/* abilities */
		
		document.getElementById("abilities_text").innerText = data_farming[Number(localStorage.getItem("farming_level"))].Atitle;
		document.getElementById("a1_title").innerText = data_farming[Number(localStorage.getItem("farming_level"))].A1text;
		document.getElementById("a1_text").innerText = data_farming[Number(localStorage.getItem("farming_level"))].A1;
		document.getElementById("a2_title").innerText = data_farming[Number(localStorage.getItem("farming_level"))].A2text;
		document.getElementById("a2_text").innerText = data_farming[Number(localStorage.getItem("farming_level"))].A2;
		document.getElementById("a3_title").innerText = data_farming[Number(localStorage.getItem("farming_level"))].A3text;
		document.getElementById("a3_text").innerText = data_farming[Number(localStorage.getItem("farming_level"))].A3;
		
		if (data_farming[Number(localStorage.getItem("farming_level"))].A2text == null) {
			document.getElementById("abilities_2").style.display = "none";
			document.getElementById("abilities_3").style.display = "none";
		} else if (data_farming[Number(localStorage.getItem("farming_level"))].A2text != null && data_farming[Number(localStorage.getItem("farming_level"))].A3text == null) {
			document.getElementById("abilities_3").style.display = "none";
		}
		
    });
}

function academy_info2() {
	document.getElementById("troops_info").style.animation = "troop_info1 0.4s";
	document.getElementById("troops_info_bg").style.display = "flex";
	document.getElementById("troops_info").style.display = "block";
	
	document.getElementById("troops_text").innerText = "Lumbering";

    $(document).ready(function(){
		
		var jsonData_lumbering = JSON.stringify(lumbering);
		var data_lumbering = JSON.parse(jsonData_lumbering);
		
		/* info */
		
		if (data_lumbering[Number(localStorage.getItem("lumbering_level"))].Age == 1) {
			document.getElementById("age_t").innerText = "Dark (1)";
		} else if (data_lumbering[Number(localStorage.getItem("lumbering_level"))].Age == 2) {
			document.getElementById("age_t").innerText = "Feudal (2)";
		} else if (data_lumbering[Number(localStorage.getItem("lumbering_level"))].Age == 3) {
			document.getElementById("age_t").innerText = "Castle (3)";
		} else if (data_lumbering[Number(localStorage.getItem("lumbering_level"))].Age == 4) {
			document.getElementById("age_t").innerText = "Imperial (4)";
		} else if (data_lumbering[Number(localStorage.getItem("lumbering_level"))].Age == 5) {
			document.getElementById("age_t").innerText = "New (5)";
		}
		document.getElementById("type_t").innerText = data_lumbering[Number(localStorage.getItem("lumbering_level"))].Type;
		document.getElementById("class_t").innerText = data_lumbering[Number(localStorage.getItem("lumbering_level"))].Class;
		
		/* produce */
		
		document.getElementById("p_food").innerText = data_lumbering[Number(localStorage.getItem("lumbering_level"))].Pfood;
		document.getElementById("p_wood").innerText = data_lumbering[Number(localStorage.getItem("lumbering_level"))].Pwood;
		document.getElementById("p_gold").innerText = data_lumbering[Number(localStorage.getItem("lumbering_level"))].Pgold;
		document.getElementById("p_diamond").innerText = data_lumbering[Number(localStorage.getItem("lumbering_level"))].Pdiamond;
		document.getElementById("p_time").innerText = data_lumbering[Number(localStorage.getItem("lumbering_level"))].Ptime;
		
		if (data_lumbering[Number(localStorage.getItem("lumbering_level"))].Pfood == null) {
			document.getElementById("produce_d1").style.display = "none";
			document.getElementById("produce_d2").style.display = "none";
		}
		
		/* upgrade */
		
		document.getElementById("u_gold").innerText = data_lumbering[Number(localStorage.getItem("lumbering_level"))].Ugold;
		document.getElementById("u_xp").innerText = data_lumbering[Number(localStorage.getItem("lumbering_level"))].Uxp;
		document.getElementById("u_time").innerText = data_lumbering[Number(localStorage.getItem("lumbering_level"))].Utime;
		
		/* abilities */
		
		document.getElementById("abilities_text").innerText = data_lumbering[Number(localStorage.getItem("lumbering_level"))].Atitle;
		document.getElementById("a1_title").innerText = data_lumbering[Number(localStorage.getItem("lumbering_level"))].A1text;
		document.getElementById("a1_text").innerText = data_lumbering[Number(localStorage.getItem("lumbering_level"))].A1;
		document.getElementById("a2_title").innerText = data_lumbering[Number(localStorage.getItem("lumbering_level"))].A2text;
		document.getElementById("a2_text").innerText = data_lumbering[Number(localStorage.getItem("lumbering_level"))].A2;
		document.getElementById("a3_title").innerText = data_lumbering[Number(localStorage.getItem("lumbering_level"))].A3text;
		document.getElementById("a3_text").innerText = data_lumbering[Number(localStorage.getItem("lumbering_level"))].A3;
		
		if (data_lumbering[Number(localStorage.getItem("lumbering_level"))].A2text == null) {
			document.getElementById("abilities_2").style.display = "none";
			document.getElementById("abilities_3").style.display = "none";
		} else if (data_lumbering[Number(localStorage.getItem("lumbering_level"))].A2text != null && data_lumbering[Number(localStorage.getItem("lumbering_level"))].A3text == null) {
			document.getElementById("abilities_3").style.display = "none";
		}
		
    });
}

function academy_info3() {
	document.getElementById("troops_info").style.animation = "troop_info1 0.4s";
	document.getElementById("troops_info_bg").style.display = "flex";
	document.getElementById("troops_info").style.display = "block";
	
	document.getElementById("troops_text").innerText = "Mining";

    $(document).ready(function(){
		
		var jsonData_mining = JSON.stringify(mining);
		var data_mining = JSON.parse(jsonData_mining);
		
		/* info */
		
		if (data_mining[Number(localStorage.getItem("mining_level"))].Age == 1) {
			document.getElementById("age_t").innerText = "Dark (1)";
		} else if (data_mining[Number(localStorage.getItem("mining_level"))].Age == 2) {
			document.getElementById("age_t").innerText = "Feudal (2)";
		} else if (data_mining[Number(localStorage.getItem("mining_level"))].Age == 3) {
			document.getElementById("age_t").innerText = "Castle (3)";
		} else if (data_mining[Number(localStorage.getItem("mining_level"))].Age == 4) {
			document.getElementById("age_t").innerText = "Imperial (4)";
		} else if (data_mining[Number(localStorage.getItem("mining_level"))].Age == 5) {
			document.getElementById("age_t").innerText = "New (5)";
		}
		document.getElementById("type_t").innerText = data_mining[Number(localStorage.getItem("mining_level"))].Type;
		document.getElementById("class_t").innerText = data_mining[Number(localStorage.getItem("mining_level"))].Class;
		
		/* produce */
		
		document.getElementById("p_food").innerText = data_mining[Number(localStorage.getItem("mining_level"))].Pfood;
		document.getElementById("p_wood").innerText = data_mining[Number(localStorage.getItem("mining_level"))].Pwood;
		document.getElementById("p_gold").innerText = data_mining[Number(localStorage.getItem("mining_level"))].Pgold;
		document.getElementById("p_diamond").innerText = data_mining[Number(localStorage.getItem("mining_level"))].Pdiamond;
		document.getElementById("p_time").innerText = data_mining[Number(localStorage.getItem("mining_level"))].Ptime;
		
		if (data_mining[Number(localStorage.getItem("mining_level"))].Pfood == null) {
			document.getElementById("produce_d1").style.display = "none";
			document.getElementById("produce_d2").style.display = "none";
		}
		
		/* upgrade */
		
		document.getElementById("u_gold").innerText = data_mining[Number(localStorage.getItem("mining_level"))].Ugold;
		document.getElementById("u_xp").innerText = data_mining[Number(localStorage.getItem("mining_level"))].Uxp;
		document.getElementById("u_time").innerText = data_mining[Number(localStorage.getItem("mining_level"))].Utime;
		
		/* abilities */
		
		document.getElementById("abilities_text").innerText = data_mining[Number(localStorage.getItem("mining_level"))].Atitle;
		document.getElementById("a1_title").innerText = data_mining[Number(localStorage.getItem("mining_level"))].A1text;
		document.getElementById("a1_text").innerText = data_mining[Number(localStorage.getItem("mining_level"))].A1;
		document.getElementById("a2_title").innerText = data_mining[Number(localStorage.getItem("mining_level"))].A2text;
		document.getElementById("a2_text").innerText = data_mining[Number(localStorage.getItem("mining_level"))].A2;
		document.getElementById("a3_title").innerText = data_mining[Number(localStorage.getItem("mining_level"))].A3text;
		document.getElementById("a3_text").innerText = data_mining[Number(localStorage.getItem("mining_level"))].A3;
		
		if (data_mining[Number(localStorage.getItem("mining_level"))].A2text == null) {
			document.getElementById("abilities_2").style.display = "none";
			document.getElementById("abilities_3").style.display = "none";
		} else if (data_mining[Number(localStorage.getItem("mining_level"))].A2text != null && data_mining[Number(localStorage.getItem("mining_level"))].A3text == null) {
			document.getElementById("abilities_3").style.display = "none";
		}
		
    });
}

function academy_info4() {
	document.getElementById("troops_info").style.animation = "troop_info1 0.4s";
	document.getElementById("troops_info_bg").style.display = "flex";
	document.getElementById("troops_info").style.display = "block";
	
	document.getElementById("troops_text").innerText = "Blacksmithing";

    $(document).ready(function(){
		
		var jsonData_blacksmithing = JSON.stringify(blacksmithing);
		var data_blacksmithing = JSON.parse(jsonData_blacksmithing);
		
		/* info */
		
		if (data_blacksmithing[Number(localStorage.getItem("blacksmithing_level"))].Age == 1) {
			document.getElementById("age_t").innerText = "Dark (1)";
		} else if (data_blacksmithing[Number(localStorage.getItem("blacksmithing_level"))].Age == 2) {
			document.getElementById("age_t").innerText = "Feudal (2)";
		} else if (data_blacksmithing[Number(localStorage.getItem("blacksmithing_level"))].Age == 3) {
			document.getElementById("age_t").innerText = "Castle (3)";
		} else if (data_blacksmithing[Number(localStorage.getItem("blacksmithing_level"))].Age == 4) {
			document.getElementById("age_t").innerText = "Imperial (4)";
		} else if (data_blacksmithing[Number(localStorage.getItem("blacksmithing_level"))].Age == 5) {
			document.getElementById("age_t").innerText = "New (5)";
		}
		document.getElementById("type_t").innerText = data_blacksmithing[Number(localStorage.getItem("blacksmithing_level"))].Type;
		document.getElementById("class_t").innerText = data_blacksmithing[Number(localStorage.getItem("blacksmithing_level"))].Class;
		
		/* produce */
		
		document.getElementById("p_food").innerText = data_blacksmithing[Number(localStorage.getItem("blacksmithing_level"))].Pfood;
		document.getElementById("p_wood").innerText = data_blacksmithing[Number(localStorage.getItem("blacksmithing_level"))].Pwood;
		document.getElementById("p_gold").innerText = data_blacksmithing[Number(localStorage.getItem("blacksmithing_level"))].Pgold;
		document.getElementById("p_diamond").innerText = data_blacksmithing[Number(localStorage.getItem("blacksmithing_level"))].Pdiamond;
		document.getElementById("p_time").innerText = data_blacksmithing[Number(localStorage.getItem("blacksmithing_level"))].Ptime;
		
		if (data_blacksmithing[Number(localStorage.getItem("blacksmithing_level"))].Pfood == null) {
			document.getElementById("produce_d1").style.display = "none";
			document.getElementById("produce_d2").style.display = "none";
		}
		
		/* upgrade */
		
		document.getElementById("u_gold").innerText = data_blacksmithing[Number(localStorage.getItem("blacksmithing_level"))].Ugold;
		document.getElementById("u_xp").innerText = data_blacksmithing[Number(localStorage.getItem("blacksmithing_level"))].Uxp;
		document.getElementById("u_time").innerText = data_blacksmithing[Number(localStorage.getItem("blacksmithing_level"))].Utime;
		
		/* abilities */
		
		document.getElementById("abilities_text").innerText = data_blacksmithing[Number(localStorage.getItem("blacksmithing_level"))].Atitle;
		document.getElementById("a1_title").innerText = data_blacksmithing[Number(localStorage.getItem("blacksmithing_level"))].A1text;
		document.getElementById("a1_text").innerText = data_blacksmithing[Number(localStorage.getItem("blacksmithing_level"))].A1;
		document.getElementById("a2_title").innerText = data_blacksmithing[Number(localStorage.getItem("blacksmithing_level"))].A2text;
		document.getElementById("a2_text").innerText = data_blacksmithing[Number(localStorage.getItem("blacksmithing_level"))].A2;
		document.getElementById("a3_title").innerText = data_blacksmithing[Number(localStorage.getItem("blacksmithing_level"))].A3text;
		document.getElementById("a3_text").innerText = data_blacksmithing[Number(localStorage.getItem("blacksmithing_level"))].A3;
		
		if (data_blacksmithing[Number(localStorage.getItem("blacksmithing_level"))].A2text == null) {
			document.getElementById("abilities_2").style.display = "none";
			document.getElementById("abilities_3").style.display = "none";
		} else if (data_blacksmithing[Number(localStorage.getItem("blacksmithing_level"))].A2text != null && data_blacksmithing[Number(localStorage.getItem("blacksmithing_level"))].A3text == null) {
			document.getElementById("abilities_3").style.display = "none";
		}
		
    });
}

function academy_info5() {
	document.getElementById("troops_info").style.animation = "troop_info1 0.4s";
	document.getElementById("troops_info_bg").style.display = "flex";
	document.getElementById("troops_info").style.display = "block";
	
	document.getElementById("troops_text").innerText = "Riding";

    $(document).ready(function(){
		
		var jsonData_riding = JSON.stringify(riding);
		var data_riding = JSON.parse(jsonData_riding);
		
		/* info */
		
		if (data_riding[Number(localStorage.getItem("riding_level"))].Age == 1) {
			document.getElementById("age_t").innerText = "Dark (1)";
		} else if (data_riding[Number(localStorage.getItem("riding_level"))].Age == 2) {
			document.getElementById("age_t").innerText = "Feudal (2)";
		} else if (data_riding[Number(localStorage.getItem("riding_level"))].Age == 3) {
			document.getElementById("age_t").innerText = "Castle (3)";
		} else if (data_riding[Number(localStorage.getItem("riding_level"))].Age == 4) {
			document.getElementById("age_t").innerText = "Imperial (4)";
		} else if (data_riding[Number(localStorage.getItem("riding_level"))].Age == 5) {
			document.getElementById("age_t").innerText = "New (5)";
		}
		document.getElementById("type_t").innerText = data_riding[Number(localStorage.getItem("riding_level"))].Type;
		document.getElementById("class_t").innerText = data_riding[Number(localStorage.getItem("riding_level"))].Class;
		
		/* produce */
		
		document.getElementById("p_food").innerText = data_riding[Number(localStorage.getItem("riding_level"))].Pfood;
		document.getElementById("p_wood").innerText = data_riding[Number(localStorage.getItem("riding_level"))].Pwood;
		document.getElementById("p_gold").innerText = data_riding[Number(localStorage.getItem("riding_level"))].Pgold;
		document.getElementById("p_diamond").innerText = data_riding[Number(localStorage.getItem("riding_level"))].Pdiamond;
		document.getElementById("p_time").innerText = data_riding[Number(localStorage.getItem("riding_level"))].Ptime;
		
		if (data_riding[Number(localStorage.getItem("riding_level"))].Pfood == null) {
			document.getElementById("produce_d1").style.display = "none";
			document.getElementById("produce_d2").style.display = "none";
		}
		
		/* upgrade */
		
		document.getElementById("u_gold").innerText = data_riding[Number(localStorage.getItem("riding_level"))].Ugold;
		document.getElementById("u_xp").innerText = data_riding[Number(localStorage.getItem("riding_level"))].Uxp;
		document.getElementById("u_time").innerText = data_riding[Number(localStorage.getItem("riding_level"))].Utime;
		
		/* abilities */
		
		document.getElementById("abilities_text").innerText = data_riding[Number(localStorage.getItem("riding_level"))].Atitle;
		document.getElementById("a1_title").innerText = data_riding[Number(localStorage.getItem("riding_level"))].A1text;
		document.getElementById("a1_text").innerText = data_riding[Number(localStorage.getItem("riding_level"))].A1;
		document.getElementById("a2_title").innerText = data_riding[Number(localStorage.getItem("riding_level"))].A2text;
		document.getElementById("a2_text").innerText = data_riding[Number(localStorage.getItem("riding_level"))].A2;
		document.getElementById("a3_title").innerText = data_riding[Number(localStorage.getItem("riding_level"))].A3text;
		document.getElementById("a3_text").innerText = data_riding[Number(localStorage.getItem("riding_level"))].A3;
		
		if (data_riding[Number(localStorage.getItem("riding_level"))].A2text == null) {
			document.getElementById("abilities_2").style.display = "none";
			document.getElementById("abilities_3").style.display = "none";
		} else if (data_riding[Number(localStorage.getItem("riding_level"))].A2text != null && data_riding[Number(localStorage.getItem("riding_level"))].A3text == null) {
			document.getElementById("abilities_3").style.display = "none";
		}
		
    });
}

function academy_info6() {
	document.getElementById("troops_info").style.animation = "troop_info1 0.4s";
	document.getElementById("troops_info_bg").style.display = "flex";
	document.getElementById("troops_info").style.display = "block";
	
	document.getElementById("troops_text").innerText = "Geometry";

    $(document).ready(function(){
		
		var jsonData_geometry = JSON.stringify(geometry);
		var data_geometry = JSON.parse(jsonData_geometry);
		
		/* info */
		
		if (data_geometry[Number(localStorage.getItem("geometry_level"))].Age == 1) {
			document.getElementById("age_t").innerText = "Dark (1)";
		} else if (data_geometry[Number(localStorage.getItem("geometry_level"))].Age == 2) {
			document.getElementById("age_t").innerText = "Feudal (2)";
		} else if (data_geometry[Number(localStorage.getItem("geometry_level"))].Age == 3) {
			document.getElementById("age_t").innerText = "Castle (3)";
		} else if (data_geometry[Number(localStorage.getItem("geometry_level"))].Age == 4) {
			document.getElementById("age_t").innerText = "Imperial (4)";
		} else if (data_geometry[Number(localStorage.getItem("geometry_level"))].Age == 5) {
			document.getElementById("age_t").innerText = "New (5)";
		}
		document.getElementById("type_t").innerText = data_geometry[Number(localStorage.getItem("geometry_level"))].Type;
		document.getElementById("class_t").innerText = data_geometry[Number(localStorage.getItem("geometry_level"))].Class;
		
		/* produce */
		
		document.getElementById("p_food").innerText = data_geometry[Number(localStorage.getItem("geometry_level"))].Pfood;
		document.getElementById("p_wood").innerText = data_geometry[Number(localStorage.getItem("geometry_level"))].Pwood;
		document.getElementById("p_gold").innerText = data_geometry[Number(localStorage.getItem("geometry_level"))].Pgold;
		document.getElementById("p_diamond").innerText = data_geometry[Number(localStorage.getItem("geometry_level"))].Pdiamond;
		document.getElementById("p_time").innerText = data_geometry[Number(localStorage.getItem("geometry_level"))].Ptime;
		
		if (data_geometry[Number(localStorage.getItem("geometry_level"))].Pfood == null) {
			document.getElementById("produce_d1").style.display = "none";
			document.getElementById("produce_d2").style.display = "none";
		}
		
		/* upgrade */
		
		document.getElementById("u_gold").innerText = data_geometry[Number(localStorage.getItem("geometry_level"))].Ugold;
		document.getElementById("u_xp").innerText = data_geometry[Number(localStorage.getItem("geometry_level"))].Uxp;
		document.getElementById("u_time").innerText = data_geometry[Number(localStorage.getItem("geometry_level"))].Utime;
		
		/* abilities */
		
		document.getElementById("abilities_text").innerText = data_geometry[Number(localStorage.getItem("geometry_level"))].Atitle;
		document.getElementById("a1_title").innerText = data_geometry[Number(localStorage.getItem("geometry_level"))].A1text;
		document.getElementById("a1_text").innerText = data_geometry[Number(localStorage.getItem("geometry_level"))].A1;
		document.getElementById("a2_title").innerText = data_geometry[Number(localStorage.getItem("geometry_level"))].A2text;
		document.getElementById("a2_text").innerText = data_geometry[Number(localStorage.getItem("geometry_level"))].A2;
		document.getElementById("a3_title").innerText = data_geometry[Number(localStorage.getItem("geometry_level"))].A3text;
		document.getElementById("a3_text").innerText = data_geometry[Number(localStorage.getItem("geometry_level"))].A3;
		
		if (data_geometry[Number(localStorage.getItem("geometry_level"))].A2text == null) {
			document.getElementById("abilities_2").style.display = "none";
			document.getElementById("abilities_3").style.display = "none";
		} else if (data_geometry[Number(localStorage.getItem("geometry_level"))].A2text != null && data_geometry[Number(localStorage.getItem("geometry_level"))].A3text == null) {
			document.getElementById("abilities_3").style.display = "none";
		}
		
    });
}

function academy_info7() {
	document.getElementById("troops_info").style.animation = "troop_info1 0.4s";
	document.getElementById("troops_info_bg").style.display = "flex";
	document.getElementById("troops_info").style.display = "block";
	
	document.getElementById("troops_text").innerText = "Cartography";

    $(document).ready(function(){
		
		var jsonData_cartography = JSON.stringify(cartography);
		var data_cartography = JSON.parse(jsonData_cartography);
		
		/* info */
		
		if (data_cartography[Number(localStorage.getItem("cartography_level"))].Age == 1) {
			document.getElementById("age_t").innerText = "Dark (1)";
		} else if (data_cartography[Number(localStorage.getItem("cartography_level"))].Age == 2) {
			document.getElementById("age_t").innerText = "Feudal (2)";
		} else if (data_cartography[Number(localStorage.getItem("cartography_level"))].Age == 3) {
			document.getElementById("age_t").innerText = "Castle (3)";
		} else if (data_cartography[Number(localStorage.getItem("cartography_level"))].Age == 4) {
			document.getElementById("age_t").innerText = "Imperial (4)";
		} else if (data_cartography[Number(localStorage.getItem("cartography_level"))].Age == 5) {
			document.getElementById("age_t").innerText = "New (5)";
		}
		document.getElementById("type_t").innerText = data_cartography[Number(localStorage.getItem("cartography_level"))].Type;
		document.getElementById("class_t").innerText = data_cartography[Number(localStorage.getItem("cartography_level"))].Class;
		
		/* produce */
		
		document.getElementById("p_food").innerText = data_cartography[Number(localStorage.getItem("cartography_level"))].Pfood;
		document.getElementById("p_wood").innerText = data_cartography[Number(localStorage.getItem("cartography_level"))].Pwood;
		document.getElementById("p_gold").innerText = data_cartography[Number(localStorage.getItem("cartography_level"))].Pgold;
		document.getElementById("p_diamond").innerText = data_cartography[Number(localStorage.getItem("cartography_level"))].Pdiamond;
		document.getElementById("p_time").innerText = data_cartography[Number(localStorage.getItem("cartography_level"))].Ptime;
		
		if (data_cartography[Number(localStorage.getItem("cartography_level"))].Pfood == null) {
			document.getElementById("produce_d1").style.display = "none";
			document.getElementById("produce_d2").style.display = "none";
		}
		
		/* upgrade */
		
		document.getElementById("u_gold").innerText = data_cartography[Number(localStorage.getItem("cartography_level"))].Ugold;
		document.getElementById("u_xp").innerText = data_cartography[Number(localStorage.getItem("cartography_level"))].Uxp;
		document.getElementById("u_time").innerText = data_cartography[Number(localStorage.getItem("cartography_level"))].Utime;
		
		/* abilities */
		
		document.getElementById("abilities_text").innerText = data_cartography[Number(localStorage.getItem("cartography_level"))].Atitle;
		document.getElementById("a1_title").innerText = data_cartography[Number(localStorage.getItem("cartography_level"))].A1text;
		document.getElementById("a1_text").innerText = data_cartography[Number(localStorage.getItem("cartography_level"))].A1;
		document.getElementById("a2_title").innerText = data_cartography[Number(localStorage.getItem("cartography_level"))].A2text;
		document.getElementById("a2_text").innerText = data_cartography[Number(localStorage.getItem("cartography_level"))].A2;
		document.getElementById("a3_title").innerText = data_cartography[Number(localStorage.getItem("cartography_level"))].A3text;
		document.getElementById("a3_text").innerText = data_cartography[Number(localStorage.getItem("cartography_level"))].A3;
		
		if (data_cartography[Number(localStorage.getItem("cartography_level"))].A2text == null) {
			document.getElementById("abilities_2").style.display = "none";
			document.getElementById("abilities_3").style.display = "none";
		} else if (data_cartography[Number(localStorage.getItem("cartography_level"))].A2text != null && data_cartography[Number(localStorage.getItem("cartography_level"))].A3text == null) {
			document.getElementById("abilities_3").style.display = "none";
		}
		
    });
}

function academy_info8() {
	document.getElementById("troops_info").style.animation = "troop_info1 0.4s";
	document.getElementById("troops_info_bg").style.display = "flex";
	document.getElementById("troops_info").style.display = "block";
	
	document.getElementById("troops_text").innerText = "Spying";

    $(document).ready(function(){
		
		var jsonData_spying = JSON.stringify(spying);
		var data_spying = JSON.parse(jsonData_spying);
		
		/* info */
		
		if (data_spying[Number(localStorage.getItem("spying_level"))].Age == 1) {
			document.getElementById("age_t").innerText = "Dark (1)";
		} else if (data_spying[Number(localStorage.getItem("spying_level"))].Age == 2) {
			document.getElementById("age_t").innerText = "Feudal (2)";
		} else if (data_spying[Number(localStorage.getItem("spying_level"))].Age == 3) {
			document.getElementById("age_t").innerText = "Castle (3)";
		} else if (data_spying[Number(localStorage.getItem("spying_level"))].Age == 4) {
			document.getElementById("age_t").innerText = "Imperial (4)";
		} else if (data_spying[Number(localStorage.getItem("spying_level"))].Age == 5) {
			document.getElementById("age_t").innerText = "New (5)";
		}
		document.getElementById("type_t").innerText = data_spying[Number(localStorage.getItem("spying_level"))].Type;
		document.getElementById("class_t").innerText = data_spying[Number(localStorage.getItem("spying_level"))].Class;
		
		/* produce */
		
		document.getElementById("p_food").innerText = data_spying[Number(localStorage.getItem("spying_level"))].Pfood;
		document.getElementById("p_wood").innerText = data_spying[Number(localStorage.getItem("spying_level"))].Pwood;
		document.getElementById("p_gold").innerText = data_spying[Number(localStorage.getItem("spying_level"))].Pgold;
		document.getElementById("p_diamond").innerText = data_spying[Number(localStorage.getItem("spying_level"))].Pdiamond;
		document.getElementById("p_time").innerText = data_spying[Number(localStorage.getItem("spying_level"))].Ptime;
		
		if (data_spying[Number(localStorage.getItem("spying_level"))].Pfood == null) {
			document.getElementById("produce_d1").style.display = "none";
			document.getElementById("produce_d2").style.display = "none";
		}
		
		/* upgrade */
		
		document.getElementById("u_gold").innerText = data_spying[Number(localStorage.getItem("spying_level"))].Ugold;
		document.getElementById("u_xp").innerText = data_spying[Number(localStorage.getItem("spying_level"))].Uxp;
		document.getElementById("u_time").innerText = data_spying[Number(localStorage.getItem("spying_level"))].Utime;
		
		/* abilities */
		
		document.getElementById("abilities_text").innerText = data_spying[Number(localStorage.getItem("spying_level"))].Atitle;
		document.getElementById("a1_title").innerText = data_spying[Number(localStorage.getItem("spying_level"))].A1text;
		document.getElementById("a1_text").innerText = data_spying[Number(localStorage.getItem("spying_level"))].A1;
		document.getElementById("a2_title").innerText = data_spying[Number(localStorage.getItem("spying_level"))].A2text;
		document.getElementById("a2_text").innerText = data_spying[Number(localStorage.getItem("spying_level"))].A2;
		document.getElementById("a3_title").innerText = data_spying[Number(localStorage.getItem("spying_level"))].A3text;
		document.getElementById("a3_text").innerText = data_spying[Number(localStorage.getItem("spying_level"))].A3;
		
		if (data_spying[Number(localStorage.getItem("spying_level"))].A2text == null) {
			document.getElementById("abilities_2").style.display = "none";
			document.getElementById("abilities_3").style.display = "none";
		} else if (data_spying[Number(localStorage.getItem("spying_level"))].A2text != null && data_spying[Number(localStorage.getItem("spying_level"))].A3text == null) {
			document.getElementById("abilities_3").style.display = "none";
		}
		
    });
}

function academy_info9() {
	document.getElementById("troops_info").style.animation = "troop_info1 0.4s";
	document.getElementById("troops_info_bg").style.display = "flex";
	document.getElementById("troops_info").style.display = "block";
	
	document.getElementById("troops_text").innerText = "Masonry";

    $(document).ready(function(){
		
		var jsonData_masonry = JSON.stringify(masonry);
		var data_masonry = JSON.parse(jsonData_masonry);
		
		/* info */
		
		if (data_masonry[Number(localStorage.getItem("masonry_level"))].Age == 1) {
			document.getElementById("age_t").innerText = "Dark (1)";
		} else if (data_masonry[Number(localStorage.getItem("masonry_level"))].Age == 2) {
			document.getElementById("age_t").innerText = "Feudal (2)";
		} else if (data_masonry[Number(localStorage.getItem("masonry_level"))].Age == 3) {
			document.getElementById("age_t").innerText = "Castle (3)";
		} else if (data_masonry[Number(localStorage.getItem("masonry_level"))].Age == 4) {
			document.getElementById("age_t").innerText = "Imperial (4)";
		} else if (data_masonry[Number(localStorage.getItem("masonry_level"))].Age == 5) {
			document.getElementById("age_t").innerText = "New (5)";
		}
		document.getElementById("type_t").innerText = data_masonry[Number(localStorage.getItem("masonry_level"))].Type;
		document.getElementById("class_t").innerText = data_masonry[Number(localStorage.getItem("masonry_level"))].Class;
		
		/* produce */
		
		document.getElementById("p_food").innerText = data_masonry[Number(localStorage.getItem("masonry_level"))].Pfood;
		document.getElementById("p_wood").innerText = data_masonry[Number(localStorage.getItem("masonry_level"))].Pwood;
		document.getElementById("p_gold").innerText = data_masonry[Number(localStorage.getItem("masonry_level"))].Pgold;
		document.getElementById("p_diamond").innerText = data_masonry[Number(localStorage.getItem("masonry_level"))].Pdiamond;
		document.getElementById("p_time").innerText = data_masonry[Number(localStorage.getItem("masonry_level"))].Ptime;
		
		if (data_masonry[Number(localStorage.getItem("masonry_level"))].Pfood == null) {
			document.getElementById("produce_d1").style.display = "none";
			document.getElementById("produce_d2").style.display = "none";
		}
		
		/* upgrade */
		
		document.getElementById("u_gold").innerText = data_masonry[Number(localStorage.getItem("masonry_level"))].Ugold;
		document.getElementById("u_xp").innerText = data_masonry[Number(localStorage.getItem("masonry_level"))].Uxp;
		document.getElementById("u_time").innerText = data_masonry[Number(localStorage.getItem("masonry_level"))].Utime;
		
		/* abilities */
		
		document.getElementById("abilities_text").innerText = data_masonry[Number(localStorage.getItem("masonry_level"))].Atitle;
		document.getElementById("a1_title").innerText = data_masonry[Number(localStorage.getItem("masonry_level"))].A1text;
		document.getElementById("a1_text").innerText = data_masonry[Number(localStorage.getItem("masonry_level"))].A1;
		document.getElementById("a2_title").innerText = data_masonry[Number(localStorage.getItem("masonry_level"))].A2text;
		document.getElementById("a2_text").innerText = data_masonry[Number(localStorage.getItem("masonry_level"))].A2;
		document.getElementById("a3_title").innerText = data_masonry[Number(localStorage.getItem("masonry_level"))].A3text;
		document.getElementById("a3_text").innerText = data_masonry[Number(localStorage.getItem("masonry_level"))].A3;
		
		if (data_masonry[Number(localStorage.getItem("masonry_level"))].A2text == null) {
			document.getElementById("abilities_2").style.display = "none";
			document.getElementById("abilities_3").style.display = "none";
		} else if (data_masonry[Number(localStorage.getItem("masonry_level"))].A2text != null && data_masonry[Number(localStorage.getItem("masonry_level"))].A3text == null) {
			document.getElementById("abilities_3").style.display = "none";
		}
		
    });
}

/* farming up */

function farming_up() {
	
	if (Number(localStorage.getItem("farming_level")) == 0 && Number(localStorage.getItem("gold")) >= 80) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 20);
		var ms_time = now.getTime();
		localStorage.setItem("farming_up_time", ms_time);
		
		localStorage.setItem("farming_up_price", 80);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 80));
		
		localStorage.setItem("farming_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("farming_level")) == 1 && Number(localStorage.getItem("gold")) >= 120) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 40);
		var ms_time = now.getTime();
		localStorage.setItem("farming_up_time", ms_time);
		
		localStorage.setItem("farming_up_price", 120);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 120));
		
		localStorage.setItem("farming_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("farming_level")) == 2 && Number(localStorage.getItem("gold")) >= 240) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 80);
		var ms_time = now.getTime();
		localStorage.setItem("farming_up_time", ms_time);
		
		localStorage.setItem("farming_up_price", 240);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 240));
		
		localStorage.setItem("farming_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("farming_level")) == 3 && Number(localStorage.getItem("gold")) >= 500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 160);
		var ms_time = now.getTime();
		localStorage.setItem("farming_up_time", ms_time);
		
		localStorage.setItem("farming_up_price", 500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 500));
		
		localStorage.setItem("farming_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("farming_level")) == 4 && Number(localStorage.getItem("gold")) >= 800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 320);
		var ms_time = now.getTime();
		localStorage.setItem("farming_up_time", ms_time);
		
		localStorage.setItem("farming_up_price", 800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 800));
		
		localStorage.setItem("farming_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("farming_level")) == 5 && Number(localStorage.getItem("gold")) >= 1400) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1220);
		var ms_time = now.getTime();
		localStorage.setItem("farming_up_time", ms_time);
		
		localStorage.setItem("farming_up_price", 1400);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 1400));
		
		localStorage.setItem("farming_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("farming_level")) == 6 && Number(localStorage.getItem("gold")) >= 2000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1840);
		var ms_time = now.getTime();
		localStorage.setItem("farming_up_time", ms_time);
		
		localStorage.setItem("farming_up_price", 2000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 2000));
		
		localStorage.setItem("farming_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("farming_level")) == 7 && Number(localStorage.getItem("gold")) >= 3200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 2720);
		var ms_time = now.getTime();
		localStorage.setItem("farming_up_time", ms_time);
		
		localStorage.setItem("farming_up_price", 3200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 3200));
		
		localStorage.setItem("farming_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("farming_level")) == 8 && Number(localStorage.getItem("gold")) >= 4800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 4540);
		var ms_time = now.getTime();
		localStorage.setItem("farming_up_time", ms_time);
		
		localStorage.setItem("farming_up_price", 4800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 4800));
		
		localStorage.setItem("farming_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("farming_level")) == 9 && Number(localStorage.getItem("gold")) >= 7200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 6620);
		var ms_time = now.getTime();
		localStorage.setItem("farming_up_time", ms_time);
		
		localStorage.setItem("farming_up_price", 7200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 7200));
		
		localStorage.setItem("farming_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("farming_level")) == 10 && Number(localStorage.getItem("gold")) >= 10800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 14740);
		var ms_time = now.getTime();
		localStorage.setItem("farming_up_time", ms_time);
		
		localStorage.setItem("farming_up_price", 10800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 10800));
		
		localStorage.setItem("farming_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("farming_level")) == 11 && Number(localStorage.getItem("gold")) >= 13500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 19220);
		var ms_time = now.getTime();
		localStorage.setItem("farming_up_time", ms_time);
		
		localStorage.setItem("farming_up_price", 13500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 13500));
		
		localStorage.setItem("farming_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("farming_level")) == 12 && Number(localStorage.getItem("gold")) >= 16900) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 24340);
		var ms_time = now.getTime();
		localStorage.setItem("farming_up_time", ms_time);
		
		localStorage.setItem("farming_up_price", 16900);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 16900));
		
		localStorage.setItem("farming_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("farming_level")) == 13 && Number(localStorage.getItem("gold")) >= 21100) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 29720);
		var ms_time = now.getTime();
		localStorage.setItem("farming_up_time", ms_time);
		
		localStorage.setItem("farming_up_price", 21100);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 21100));
		
		localStorage.setItem("farming_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("farming_level")) == 14 && Number(localStorage.getItem("gold")) >= 23200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 35740);
		var ms_time = now.getTime();
		localStorage.setItem("farming_up_time", ms_time);
		
		localStorage.setItem("farming_up_price", 23200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 23200));
		
		localStorage.setItem("farming_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("farming_level")) == 15 && Number(localStorage.getItem("gold")) >= 25500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 64820);
		var ms_time = now.getTime();
		localStorage.setItem("farming_up_time", ms_time);
		
		localStorage.setItem("farming_up_price", 25500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 25500));
		
		localStorage.setItem("farming_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("farming_level")) == 16 && Number(localStorage.getItem("gold")) >= 28800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 73240);
		var ms_time = now.getTime();
		localStorage.setItem("farming_up_time", ms_time);
		
		localStorage.setItem("farming_up_price", 28800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 28800));
		
		localStorage.setItem("farming_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("farming_level")) == 17 && Number(localStorage.getItem("gold")) >= 34500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 82510);
		var ms_time = now.getTime();
		localStorage.setItem("farming_up_time", ms_time);
		
		localStorage.setItem("farming_up_price", 34500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 34500));
		
		localStorage.setItem("farming_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("farming_level")) == 18 && Number(localStorage.getItem("gold")) >= 45300) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 91840);
		var ms_time = now.getTime();
		localStorage.setItem("farming_up_time", ms_time);
		
		localStorage.setItem("farming_up_price", 45300);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 45300));
		
		localStorage.setItem("farming_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("farming_level")) == 19 && Number(localStorage.getItem("gold")) >= 50150) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 103520);
		var ms_time = now.getTime();
		localStorage.setItem("farming_up_time", ms_time);
		
		localStorage.setItem("farming_up_price", 50150);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 50150));
		
		localStorage.setItem("farming_upper", "on");
		
		location.reload();
		
	}
	
}

function farming_up_cancel() {
	
	localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) - Number(localStorage.getItem("farming_up_price"))));
	
	localStorage.removeItem("farming_upper");
	localStorage.removeItem("farming_up_time");
	localStorage.removeItem("lumbering_upper");
	localStorage.removeItem("lumbering_up_time");
	localStorage.removeItem("mining_upper");
	localStorage.removeItem("mining_up_time");
	localStorage.removeItem("blacksmithing_upper");
	localStorage.removeItem("blacksmithing_up_time");
	localStorage.removeItem("riding_upper");
	localStorage.removeItem("riding_up_time");
	localStorage.removeItem("geometry_upper");
	localStorage.removeItem("geometry_up_time");
	localStorage.removeItem("cartography_upper");
	localStorage.removeItem("cartography_up_time");
	localStorage.removeItem("spying_upper");
	localStorage.removeItem("spying_up_time");
	localStorage.removeItem("masonry_upper");
	localStorage.removeItem("masonry_up_time");
	
	location.reload();
	
}

setInterval(function(){
	
	if (localStorage.getItem("farming_upper") == "on") {
		
		document.getElementById("build_right1").style.display = "none";
		document.getElementById("build_right2").style.display = "none";
		document.getElementById("build_right3").style.display = "none";
		document.getElementById("build_right4").style.display = "none";
		document.getElementById("build_right5").style.display = "none";
		document.getElementById("build_right6").style.display = "none";
		document.getElementById("build_right7").style.display = "none";
		document.getElementById("build_right8").style.display = "none";
		document.getElementById("build_right9").style.display = "none";
		document.getElementById("build_upper1").style.display = "block";
		document.getElementById("build_upper2").style.display = "block";
		document.getElementById("build_upper3").style.display = "block";
		document.getElementById("build_upper4").style.display = "block";
		document.getElementById("build_upper5").style.display = "block";
		document.getElementById("build_upper6").style.display = "block";
		document.getElementById("build_upper7").style.display = "block";
		document.getElementById("build_upper8").style.display = "block";
		document.getElementById("build_upper9").style.display = "block";
		
		document.getElementById("build_up_board2").style.display = "none";
		document.getElementById("build_up_board3").style.display = "none";
		document.getElementById("build_up_board4").style.display = "none";
		document.getElementById("build_up_board5").style.display = "none";
		document.getElementById("build_up_board6").style.display = "none";
		document.getElementById("build_up_board7").style.display = "none";
		document.getElementById("build_up_board8").style.display = "none";
		document.getElementById("build_up_board9").style.display = "none";
		
		var fa_ms = Math.floor(Number(localStorage.getItem("farming_up_time")) - Date.now());
		var fa_s = Math.floor(fa_ms / 1000);
		var fa_m = Math.floor(fa_s / 60);
		fa_s = fa_s % 60;
		var fa_h = Math.floor(fa_m / 60);
		fa_m = fa_m % 60;
		var fa_d = Math.floor(fa_h / 24);
		fa_h = fa_h % 24;
		
		fa_d = fa_d.toString().padStart(2, "0");
		fa_h = fa_h.toString().padStart(2, "0");
		fa_m = fa_m.toString().padStart(2, "0");
		fa_s = fa_s.toString().padStart(2, "0");
		
		document.getElementById("farming_up_d").innerText = fa_d;
		document.getElementById("farming_up_h").innerText = fa_h;
		document.getElementById("farming_up_m").innerText = fa_m;
		document.getElementById("farming_up_s").innerText = fa_s;
		
		if (Math.floor(Number(localStorage.getItem("farming_up_time")) - Date.now()) < 0) {
		
		localStorage.removeItem("farming_upper");
		localStorage.removeItem("farming_up_time");
		
		document.getElementById("build_right1").style.display = "block";
		document.getElementById("build_right2").style.display = "block";
		document.getElementById("build_right3").style.display = "block";
		document.getElementById("build_right4").style.display = "block";
		document.getElementById("build_right5").style.display = "block";
		document.getElementById("build_right6").style.display = "block";
		document.getElementById("build_right7").style.display = "block";
		document.getElementById("build_right8").style.display = "block";
		document.getElementById("build_right9").style.display = "block";
		document.getElementById("build_upper1").style.display = "none";
		document.getElementById("build_upper2").style.display = "none";
		document.getElementById("build_upper3").style.display = "none";
		document.getElementById("build_upper4").style.display = "none";
		document.getElementById("build_upper5").style.display = "none";
		document.getElementById("build_upper6").style.display = "none";
		document.getElementById("build_upper7").style.display = "none";
		document.getElementById("build_upper8").style.display = "none";
		document.getElementById("build_upper9").style.display = "none";
		
		var current = Date.now();
	    var elapsedTime = Math.floor((current - localStorage.getItem("food_timer")) / 3600000);
	    var food_t = Math.floor(Number(elapsedTime) * ((((Number(localStorage.getItem("plus_food")) * (Number(localStorage.getItem("farming_level")) + 100 + Number(localStorage.getItem("farmer_b_f")))) / 100) - Number(localStorage.getItem("minus_food")))));
	    var plusplus = Math.floor(Number(localStorage.getItem("last_food_cash")) + Number(food_t));
	    localStorage.setItem("last_food_cash", plusplus);
	    localStorage.setItem("food_timer", current);
		
		localStorage.setItem("farming_level", Math.floor(Number(localStorage.getItem("farming_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
		location.reload();
		}
		
		
	}
	
	
}, 10);

setInterval(function(){
	
	document.getElementById("farming_level").innerText = localStorage.getItem("farming_level");
	if (Number(localStorage.getItem("farming_level")) != 20) {
	document.getElementById("farming_next_level").innerText = Math.floor(Number(localStorage.getItem("farming_level")) + 1);
	} else if (Number(localStorage.getItem("farming_level")) == 20) {
		document.getElementById("farming_next_level").innerText = "Max";
	}
	
}, 10);

function farming_up_speed_up() {
	if (Number(localStorage.getItem("diamond")) >= 50) {
		
		localStorage.setItem("diamond_cash", Math.floor(Number(localStorage.getItem("diamond_cash")) + 50));
		
		var current = Date.now();
	    var elapsedTime = Math.floor((current - localStorage.getItem("food_timer")) / 3600000);
	    var food_t = Math.floor(Number(elapsedTime) * ((((Number(localStorage.getItem("plus_food")) * (Number(localStorage.getItem("farming_level")) + 100 + Number(localStorage.getItem("farmer_b_f")))) / 100) - Number(localStorage.getItem("minus_food")))));
	    var plusplus = Math.floor(Number(localStorage.getItem("last_food_cash")) + Number(food_t));
	    localStorage.setItem("last_food_cash", plusplus);
	    localStorage.setItem("food_timer", current);
		
		localStorage.setItem("farming_level", Math.floor(Number(localStorage.getItem("farming_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
		localStorage.removeItem("farming_upper");
		localStorage.removeItem("farming_up_time");
		
		location.reload();
		
	}
}

/* lumbering up */

function lumbering_up() {
	
	if (Number(localStorage.getItem("lumbering_level")) == 0 && Number(localStorage.getItem("gold")) >= 80) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 20);
		var ms_time = now.getTime();
		localStorage.setItem("lumbering_up_time", ms_time);
		
		localStorage.setItem("lumbering_up_price", 80);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 80));
		
		localStorage.setItem("lumbering_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("lumbering_level")) == 1 && Number(localStorage.getItem("gold")) >= 120) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 40);
		var ms_time = now.getTime();
		localStorage.setItem("lumbering_up_time", ms_time);
		
		localStorage.setItem("lumbering_up_price", 120);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 120));
		
		localStorage.setItem("lumbering_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("lumbering_level")) == 2 && Number(localStorage.getItem("gold")) >= 240) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 80);
		var ms_time = now.getTime();
		localStorage.setItem("lumbering_up_time", ms_time);
		
		localStorage.setItem("lumbering_up_price", 240);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 240));
		
		localStorage.setItem("lumbering_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("lumbering_level")) == 3 && Number(localStorage.getItem("gold")) >= 500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 160);
		var ms_time = now.getTime();
		localStorage.setItem("lumbering_up_time", ms_time);
		
		localStorage.setItem("lumbering_up_price", 500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 500));
		
		localStorage.setItem("lumbering_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("lumbering_level")) == 4 && Number(localStorage.getItem("gold")) >= 800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 320);
		var ms_time = now.getTime();
		localStorage.setItem("lumbering_up_time", ms_time);
		
		localStorage.setItem("lumbering_up_price", 800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 800));
		
		localStorage.setItem("lumbering_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("lumbering_level")) == 5 && Number(localStorage.getItem("gold")) >= 1400) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1220);
		var ms_time = now.getTime();
		localStorage.setItem("lumbering_up_time", ms_time);
		
		localStorage.setItem("lumbering_up_price", 1400);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 1400));
		
		localStorage.setItem("lumbering_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("lumbering_level")) == 6 && Number(localStorage.getItem("gold")) >= 2000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1840);
		var ms_time = now.getTime();
		localStorage.setItem("lumbering_up_time", ms_time);
		
		localStorage.setItem("lumbering_up_price", 2000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 2000));
		
		localStorage.setItem("lumbering_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("lumbering_level")) == 7 && Number(localStorage.getItem("gold")) >= 3200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 2720);
		var ms_time = now.getTime();
		localStorage.setItem("lumbering_up_time", ms_time);
		
		localStorage.setItem("lumbering_up_price", 3200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 3200));
		
		localStorage.setItem("lumbering_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("lumbering_level")) == 8 && Number(localStorage.getItem("gold")) >= 4800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 4540);
		var ms_time = now.getTime();
		localStorage.setItem("lumbering_up_time", ms_time);
		
		localStorage.setItem("lumbering_up_price", 4800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 4800));
		
		localStorage.setItem("lumbering_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("lumbering_level")) == 9 && Number(localStorage.getItem("gold")) >= 7200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 6620);
		var ms_time = now.getTime();
		localStorage.setItem("lumbering_up_time", ms_time);
		
		localStorage.setItem("lumbering_up_price", 7200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 7200));
		
		localStorage.setItem("lumbering_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("lumbering_level")) == 10 && Number(localStorage.getItem("gold")) >= 10800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 14740);
		var ms_time = now.getTime();
		localStorage.setItem("lumbering_up_time", ms_time);
		
		localStorage.setItem("lumbering_up_price", 10800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 10800));
		
		localStorage.setItem("lumbering_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("lumbering_level")) == 11 && Number(localStorage.getItem("gold")) >= 13500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 19220);
		var ms_time = now.getTime();
		localStorage.setItem("lumbering_up_time", ms_time);
		
		localStorage.setItem("lumbering_up_price", 13500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 13500));
		
		localStorage.setItem("lumbering_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("lumbering_level")) == 12 && Number(localStorage.getItem("gold")) >= 16900) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 24340);
		var ms_time = now.getTime();
		localStorage.setItem("lumbering_up_time", ms_time);
		
		localStorage.setItem("lumbering_up_price", 16900);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 16900));
		
		localStorage.setItem("lumbering_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("lumbering_level")) == 13 && Number(localStorage.getItem("gold")) >= 21100) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 29720);
		var ms_time = now.getTime();
		localStorage.setItem("lumbering_up_time", ms_time);
		
		localStorage.setItem("lumbering_up_price", 21100);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 21100));
		
		localStorage.setItem("lumbering_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("lumbering_level")) == 14 && Number(localStorage.getItem("gold")) >= 23200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 35740);
		var ms_time = now.getTime();
		localStorage.setItem("lumbering_up_time", ms_time);
		
		localStorage.setItem("lumbering_up_price", 23200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 23200));
		
		localStorage.setItem("lumbering_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("lumbering_level")) == 15 && Number(localStorage.getItem("gold")) >= 25500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 64820);
		var ms_time = now.getTime();
		localStorage.setItem("lumbering_up_time", ms_time);
		
		localStorage.setItem("lumbering_up_price", 25500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 25500));
		
		localStorage.setItem("lumbering_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("lumbering_level")) == 16 && Number(localStorage.getItem("gold")) >= 28800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 73240);
		var ms_time = now.getTime();
		localStorage.setItem("lumbering_up_time", ms_time);
		
		localStorage.setItem("lumbering_up_price", 28800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 28800));
		
		localStorage.setItem("lumbering_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("lumbering_level")) == 17 && Number(localStorage.getItem("gold")) >= 34500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 82510);
		var ms_time = now.getTime();
		localStorage.setItem("lumbering_up_time", ms_time);
		
		localStorage.setItem("lumbering_up_price", 34500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 34500));
		
		localStorage.setItem("lumbering_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("lumbering_level")) == 18 && Number(localStorage.getItem("gold")) >= 45300) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 91840);
		var ms_time = now.getTime();
		localStorage.setItem("lumbering_up_time", ms_time);
		
		localStorage.setItem("lumbering_up_price", 45300);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 45300));
		
		localStorage.setItem("lumbering_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("lumbering_level")) == 19 && Number(localStorage.getItem("gold")) >= 50150) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 103520);
		var ms_time = now.getTime();
		localStorage.setItem("lumbering_up_time", ms_time);
		
		localStorage.setItem("lumbering_up_price", 50150);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 50150));
		
		localStorage.setItem("lumbering_upper", "on");
		
		location.reload();
		
	}
	
}

function lumbering_up_cancel() {
	
	localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) - Number(localStorage.getItem("lumbering_up_price"))));
	
	localStorage.removeItem("farming_upper");
	localStorage.removeItem("farming_up_time");
	localStorage.removeItem("lumbering_upper");
	localStorage.removeItem("lumbering_up_time");
	localStorage.removeItem("mining_upper");
	localStorage.removeItem("mining_up_time");
	localStorage.removeItem("blacksmithing_upper");
	localStorage.removeItem("blacksmithing_up_time");
	localStorage.removeItem("riding_upper");
	localStorage.removeItem("riding_up_time");
	localStorage.removeItem("geometry_upper");
	localStorage.removeItem("geometry_up_time");
	localStorage.removeItem("cartography_upper");
	localStorage.removeItem("cartography_up_time");
	localStorage.removeItem("spying_upper");
	localStorage.removeItem("spying_up_time");
	localStorage.removeItem("masonry_upper");
	localStorage.removeItem("masonry_up_time");
	
	location.reload();
	
}

setInterval(function(){
	
	if (localStorage.getItem("lumbering_upper") == "on") {
		
		document.getElementById("build_right1").style.display = "none";
		document.getElementById("build_right2").style.display = "none";
		document.getElementById("build_right3").style.display = "none";
		document.getElementById("build_right4").style.display = "none";
		document.getElementById("build_right5").style.display = "none";
		document.getElementById("build_right6").style.display = "none";
		document.getElementById("build_right7").style.display = "none";
		document.getElementById("build_right8").style.display = "none";
		document.getElementById("build_right9").style.display = "none";
		document.getElementById("build_upper1").style.display = "block";
		document.getElementById("build_upper2").style.display = "block";
		document.getElementById("build_upper3").style.display = "block";
		document.getElementById("build_upper4").style.display = "block";
		document.getElementById("build_upper5").style.display = "block";
		document.getElementById("build_upper6").style.display = "block";
		document.getElementById("build_upper7").style.display = "block";
		document.getElementById("build_upper8").style.display = "block";
		document.getElementById("build_upper9").style.display = "block";
		
		document.getElementById("build_up_board1").style.display = "none";
		document.getElementById("build_up_board3").style.display = "none";
		document.getElementById("build_up_board4").style.display = "none";
		document.getElementById("build_up_board5").style.display = "none";
		document.getElementById("build_up_board6").style.display = "none";
		document.getElementById("build_up_board7").style.display = "none";
		document.getElementById("build_up_board8").style.display = "none";
		document.getElementById("build_up_board9").style.display = "none";
		
		var fa_ms = Math.floor(Number(localStorage.getItem("lumbering_up_time")) - Date.now());
		var fa_s = Math.floor(fa_ms / 1000);
		var fa_m = Math.floor(fa_s / 60);
		fa_s = fa_s % 60;
		var fa_h = Math.floor(fa_m / 60);
		fa_m = fa_m % 60;
		var fa_d = Math.floor(fa_h / 24);
		fa_h = fa_h % 24;
		
		fa_d = fa_d.toString().padStart(2, "0");
		fa_h = fa_h.toString().padStart(2, "0");
		fa_m = fa_m.toString().padStart(2, "0");
		fa_s = fa_s.toString().padStart(2, "0");
		
		document.getElementById("lumbering_up_d").innerText = fa_d;
		document.getElementById("lumbering_up_h").innerText = fa_h;
		document.getElementById("lumbering_up_m").innerText = fa_m;
		document.getElementById("lumbering_up_s").innerText = fa_s;
		
		if (Math.floor(Number(localStorage.getItem("lumbering_up_time")) - Date.now()) < 0) {
		
		localStorage.removeItem("lumbering_upper");
		localStorage.removeItem("lumbering_up_time");
		
		document.getElementById("build_right1").style.display = "block";
		document.getElementById("build_right2").style.display = "block";
		document.getElementById("build_right3").style.display = "block";
		document.getElementById("build_right4").style.display = "block";
		document.getElementById("build_right5").style.display = "block";
		document.getElementById("build_right6").style.display = "block";
		document.getElementById("build_right7").style.display = "block";
		document.getElementById("build_right8").style.display = "block";
		document.getElementById("build_right9").style.display = "block";
		document.getElementById("build_upper1").style.display = "none";
		document.getElementById("build_upper2").style.display = "none";
		document.getElementById("build_upper3").style.display = "none";
		document.getElementById("build_upper4").style.display = "none";
		document.getElementById("build_upper5").style.display = "none";
		document.getElementById("build_upper6").style.display = "none";
		document.getElementById("build_upper7").style.display = "none";
		document.getElementById("build_upper8").style.display = "none";
		document.getElementById("build_upper9").style.display = "none";
		
		var current = Date.now();
	    var elapsedTime = Math.floor((current - localStorage.getItem("wood_timer")) / 3600000);
	    var wood_t = Math.floor(Number(elapsedTime) * (((Number(localStorage.getItem("plus_wood")) * (Number(localStorage.getItem("lumbering_level")) + 100 + Number(localStorage.getItem("woodcutter_b_f")))) / 100)));
	    var plusplus = Math.floor(Number(localStorage.getItem("last_wood_cash")) + Number(wood_t));
	    localStorage.setItem("last_wood_cash", plusplus);
	    localStorage.setItem("wood_timer", current);
		
		localStorage.setItem("lumbering_level", Math.floor(Number(localStorage.getItem("lumbering_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
		location.reload();
		}
		
		
	}
	
	
}, 10);

setInterval(function(){
	
	document.getElementById("lumbering_level").innerText = localStorage.getItem("lumbering_level");
	if (Number(localStorage.getItem("lumbering_level")) != 20) {
	document.getElementById("lumbering_next_level").innerText = Math.floor(Number(localStorage.getItem("lumbering_level")) + 1);
	} else if (Number(localStorage.getItem("lumbering_level")) == 20) {
		document.getElementById("lumbering_next_level").innerText = "Max";
	}
	
}, 10);

function lumbering_up_speed_up() {
	if (Number(localStorage.getItem("diamond")) >= 50) {
		
		localStorage.setItem("diamond_cash", Math.floor(Number(localStorage.getItem("diamond_cash")) + 50));
		
		var current = Date.now();
	    var elapsedTime = Math.floor((current - localStorage.getItem("wood_timer")) / 3600000);
	    var wood_t = Math.floor(Number(elapsedTime) * (((Number(localStorage.getItem("plus_wood")) * (Number(localStorage.getItem("lumbering_level")) + 100 + Number(localStorage.getItem("woodcutter_b_f")))) / 100)));
	    var plusplus = Math.floor(Number(localStorage.getItem("last_wood_cash")) + Number(wood_t));
	    localStorage.setItem("last_wood_cash", plusplus);
	    localStorage.setItem("wood_timer", current);
		
		localStorage.setItem("lumbering_level", Math.floor(Number(localStorage.getItem("lumbering_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
		localStorage.removeItem("lumbering_upper");
		localStorage.removeItem("lumbering_up_time");
		
		location.reload();
		
	}
}

/* mining up */

function mining_up() {
	
	if (Number(localStorage.getItem("mining_level")) == 0 && Number(localStorage.getItem("gold")) >= 80) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 20);
		var ms_time = now.getTime();
		localStorage.setItem("mining_up_time", ms_time);
		
		localStorage.setItem("mining_up_price", 80);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 80));
		
		localStorage.setItem("mining_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("mining_level")) == 1 && Number(localStorage.getItem("gold")) >= 120) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 40);
		var ms_time = now.getTime();
		localStorage.setItem("mining_up_time", ms_time);
		
		localStorage.setItem("mining_up_price", 120);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 120));
		
		localStorage.setItem("mining_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("mining_level")) == 2 && Number(localStorage.getItem("gold")) >= 240) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 80);
		var ms_time = now.getTime();
		localStorage.setItem("mining_up_time", ms_time);
		
		localStorage.setItem("mining_up_price", 240);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 240));
		
		localStorage.setItem("mining_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("mining_level")) == 3 && Number(localStorage.getItem("gold")) >= 500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 160);
		var ms_time = now.getTime();
		localStorage.setItem("mining_up_time", ms_time);
		
		localStorage.setItem("mining_up_price", 500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 500));
		
		localStorage.setItem("mining_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("mining_level")) == 4 && Number(localStorage.getItem("gold")) >= 800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 320);
		var ms_time = now.getTime();
		localStorage.setItem("mining_up_time", ms_time);
		
		localStorage.setItem("mining_up_price", 800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 800));
		
		localStorage.setItem("mining_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("mining_level")) == 5 && Number(localStorage.getItem("gold")) >= 1400) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1220);
		var ms_time = now.getTime();
		localStorage.setItem("mining_up_time", ms_time);
		
		localStorage.setItem("mining_up_price", 1400);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 1400));
		
		localStorage.setItem("mining_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("mining_level")) == 6 && Number(localStorage.getItem("gold")) >= 2000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1840);
		var ms_time = now.getTime();
		localStorage.setItem("mining_up_time", ms_time);
		
		localStorage.setItem("mining_up_price", 2000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 2000));
		
		localStorage.setItem("mining_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("mining_level")) == 7 && Number(localStorage.getItem("gold")) >= 3200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 2720);
		var ms_time = now.getTime();
		localStorage.setItem("mining_up_time", ms_time);
		
		localStorage.setItem("mining_up_price", 3200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 3200));
		
		localStorage.setItem("mining_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("mining_level")) == 8 && Number(localStorage.getItem("gold")) >= 4800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 4540);
		var ms_time = now.getTime();
		localStorage.setItem("mining_up_time", ms_time);
		
		localStorage.setItem("mining_up_price", 4800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 4800));
		
		localStorage.setItem("mining_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("mining_level")) == 9 && Number(localStorage.getItem("gold")) >= 7200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 6620);
		var ms_time = now.getTime();
		localStorage.setItem("mining_up_time", ms_time);
		
		localStorage.setItem("mining_up_price", 7200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 7200));
		
		localStorage.setItem("mining_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("mining_level")) == 10 && Number(localStorage.getItem("gold")) >= 10800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 14740);
		var ms_time = now.getTime();
		localStorage.setItem("mining_up_time", ms_time);
		
		localStorage.setItem("mining_up_price", 10800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 10800));
		
		localStorage.setItem("mining_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("mining_level")) == 11 && Number(localStorage.getItem("gold")) >= 13500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 19220);
		var ms_time = now.getTime();
		localStorage.setItem("mining_up_time", ms_time);
		
		localStorage.setItem("mining_up_price", 13500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 13500));
		
		localStorage.setItem("mining_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("mining_level")) == 12 && Number(localStorage.getItem("gold")) >= 16900) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 24340);
		var ms_time = now.getTime();
		localStorage.setItem("mining_up_time", ms_time);
		
		localStorage.setItem("mining_up_price", 16900);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 16900));
		
		localStorage.setItem("mining_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("mining_level")) == 13 && Number(localStorage.getItem("gold")) >= 21100) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 29720);
		var ms_time = now.getTime();
		localStorage.setItem("mining_up_time", ms_time);
		
		localStorage.setItem("mining_up_price", 21100);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 21100));
		
		localStorage.setItem("mining_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("mining_level")) == 14 && Number(localStorage.getItem("gold")) >= 23200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 35740);
		var ms_time = now.getTime();
		localStorage.setItem("mining_up_time", ms_time);
		
		localStorage.setItem("mining_up_price", 23200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 23200));
		
		localStorage.setItem("mining_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("mining_level")) == 15 && Number(localStorage.getItem("gold")) >= 25500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 64820);
		var ms_time = now.getTime();
		localStorage.setItem("mining_up_time", ms_time);
		
		localStorage.setItem("mining_up_price", 25500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 25500));
		
		localStorage.setItem("mining_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("mining_level")) == 16 && Number(localStorage.getItem("gold")) >= 28800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 73240);
		var ms_time = now.getTime();
		localStorage.setItem("mining_up_time", ms_time);
		
		localStorage.setItem("mining_up_price", 28800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 28800));
		
		localStorage.setItem("mining_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("mining_level")) == 17 && Number(localStorage.getItem("gold")) >= 34500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 82510);
		var ms_time = now.getTime();
		localStorage.setItem("mining_up_time", ms_time);
		
		localStorage.setItem("mining_up_price", 34500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 34500));
		
		localStorage.setItem("mining_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("mining_level")) == 18 && Number(localStorage.getItem("gold")) >= 45300) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 91840);
		var ms_time = now.getTime();
		localStorage.setItem("mining_up_time", ms_time);
		
		localStorage.setItem("mining_up_price", 45300);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 45300));
		
		localStorage.setItem("mining_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("mining_level")) == 19 && Number(localStorage.getItem("gold")) >= 50150) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 103520);
		var ms_time = now.getTime();
		localStorage.setItem("mining_up_time", ms_time);
		
		localStorage.setItem("mining_up_price", 50150);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 50150));
		
		localStorage.setItem("mining_upper", "on");
		
		location.reload();
		
	}
	
}

function mining_up_cancel() {
	
	localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) - Number(localStorage.getItem("mining_up_price"))));
	
	localStorage.removeItem("farming_upper");
	localStorage.removeItem("farming_up_time");
	localStorage.removeItem("lumbering_upper");
	localStorage.removeItem("lumbering_up_time");
	localStorage.removeItem("mining_upper");
	localStorage.removeItem("mining_up_time");
	localStorage.removeItem("blacksmithing_upper");
	localStorage.removeItem("blacksmithing_up_time");
	localStorage.removeItem("riding_upper");
	localStorage.removeItem("riding_up_time");
	localStorage.removeItem("geometry_upper");
	localStorage.removeItem("geometry_up_time");
	localStorage.removeItem("cartography_upper");
	localStorage.removeItem("cartography_up_time");
	localStorage.removeItem("spying_upper");
	localStorage.removeItem("spying_up_time");
	localStorage.removeItem("masonry_upper");
	localStorage.removeItem("masonry_up_time");
	
	location.reload();
	
}

setInterval(function(){
	
	if (localStorage.getItem("mining_upper") == "on") {
		
		document.getElementById("build_right1").style.display = "none";
		document.getElementById("build_right2").style.display = "none";
		document.getElementById("build_right3").style.display = "none";
		document.getElementById("build_right4").style.display = "none";
		document.getElementById("build_right5").style.display = "none";
		document.getElementById("build_right6").style.display = "none";
		document.getElementById("build_right7").style.display = "none";
		document.getElementById("build_right8").style.display = "none";
		document.getElementById("build_right9").style.display = "none";
		document.getElementById("build_upper1").style.display = "block";
		document.getElementById("build_upper2").style.display = "block";
		document.getElementById("build_upper3").style.display = "block";
		document.getElementById("build_upper4").style.display = "block";
		document.getElementById("build_upper5").style.display = "block";
		document.getElementById("build_upper6").style.display = "block";
		document.getElementById("build_upper7").style.display = "block";
		document.getElementById("build_upper8").style.display = "block";
		document.getElementById("build_upper9").style.display = "block";
		
		document.getElementById("build_up_board2").style.display = "none";
		document.getElementById("build_up_board1").style.display = "none";
		document.getElementById("build_up_board4").style.display = "none";
		document.getElementById("build_up_board5").style.display = "none";
		document.getElementById("build_up_board6").style.display = "none";
		document.getElementById("build_up_board7").style.display = "none";
		document.getElementById("build_up_board8").style.display = "none";
		document.getElementById("build_up_board9").style.display = "none";
		
		var fa_ms = Math.floor(Number(localStorage.getItem("mining_up_time")) - Date.now());
		var fa_s = Math.floor(fa_ms / 1000);
		var fa_m = Math.floor(fa_s / 60);
		fa_s = fa_s % 60;
		var fa_h = Math.floor(fa_m / 60);
		fa_m = fa_m % 60;
		var fa_d = Math.floor(fa_h / 24);
		fa_h = fa_h % 24;
		
		fa_d = fa_d.toString().padStart(2, "0");
		fa_h = fa_h.toString().padStart(2, "0");
		fa_m = fa_m.toString().padStart(2, "0");
		fa_s = fa_s.toString().padStart(2, "0");
		
		document.getElementById("mining_up_d").innerText = fa_d;
		document.getElementById("mining_up_h").innerText = fa_h;
		document.getElementById("mining_up_m").innerText = fa_m;
		document.getElementById("mining_up_s").innerText = fa_s;
		
		if (Math.floor(Number(localStorage.getItem("mining_up_time")) - Date.now()) < 0) {
		
		localStorage.removeItem("mining_upper");
		localStorage.removeItem("mining_up_time");
		
		document.getElementById("build_right1").style.display = "block";
		document.getElementById("build_right2").style.display = "block";
		document.getElementById("build_right3").style.display = "block";
		document.getElementById("build_right4").style.display = "block";
		document.getElementById("build_right5").style.display = "block";
		document.getElementById("build_right6").style.display = "block";
		document.getElementById("build_right7").style.display = "block";
		document.getElementById("build_right8").style.display = "block";
		document.getElementById("build_right9").style.display = "block";
		document.getElementById("build_upper1").style.display = "none";
		document.getElementById("build_upper2").style.display = "none";
		document.getElementById("build_upper3").style.display = "none";
		document.getElementById("build_upper4").style.display = "none";
		document.getElementById("build_upper5").style.display = "none";
		document.getElementById("build_upper6").style.display = "none";
		document.getElementById("build_upper7").style.display = "none";
		document.getElementById("build_upper8").style.display = "none";
		document.getElementById("build_upper9").style.display = "none";
		
		var current = Date.now();
	    var elapsedTime = Math.floor((current - localStorage.getItem("gold_timer")) / 3600000);
	    var gold_t = Math.floor(Number(elapsedTime) * (((Number(localStorage.getItem("plus_gold")) * (Number(localStorage.getItem("mining_level")) + 100 + Number(localStorage.getItem("gold_miner_b_f")))) / 100)));
	    var plusplus = Math.floor(Number(localStorage.getItem("last_gold_cash")) + Number(gold_t));
	    localStorage.setItem("last_gold_cash", plusplus);
	    localStorage.setItem("gold_timer", current);
		
		localStorage.setItem("mining_level", Math.floor(Number(localStorage.getItem("mining_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
		location.reload();
		}
		
		
	}
	
	
}, 10);

setInterval(function(){
	
	document.getElementById("mining_level").innerText = localStorage.getItem("mining_level");
	if (Number(localStorage.getItem("mining_level")) != 20) {
	document.getElementById("mining_next_level").innerText = Math.floor(Number(localStorage.getItem("mining_level")) + 1);
	} else if (Number(localStorage.getItem("mining_level")) == 20) {
		document.getElementById("mining_next_level").innerText = "Max";
	}
	
}, 10);

function mining_up_speed_up() {
	if (Number(localStorage.getItem("diamond")) >= 50) {
		
		localStorage.setItem("diamond_cash", Math.floor(Number(localStorage.getItem("diamond_cash")) + 50));
		
		var current = Date.now();
	    var elapsedTime = Math.floor((current - localStorage.getItem("gold_timer")) / 3600000);
	    var gold_t = Math.floor(Number(elapsedTime) * (((Number(localStorage.getItem("plus_gold")) * (Number(localStorage.getItem("mining_level")) + 100 + Number(localStorage.getItem("gold_miner_b_f")))) / 100)));
	    var plusplus = Math.floor(Number(localStorage.getItem("last_gold_cash")) + Number(gold_t));
	    localStorage.setItem("last_gold_cash", plusplus);
	    localStorage.setItem("gold_timer", current);
		
		localStorage.setItem("mining_level", Math.floor(Number(localStorage.getItem("mining_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
		localStorage.removeItem("mining_upper");
		localStorage.removeItem("mining_up_time");
		
		location.reload();
		
	}
}

/* blacksmithing up */

function blacksmithing_up() {
	
	if (Number(localStorage.getItem("blacksmithing_level")) == 0 && Number(localStorage.getItem("gold")) >= 80) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 20);
		var ms_time = now.getTime();
		localStorage.setItem("blacksmithing_up_time", ms_time);
		
		localStorage.setItem("blacksmithing_up_price", 80);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 80));
		
		localStorage.setItem("blacksmithing_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("blacksmithing_level")) == 1 && Number(localStorage.getItem("gold")) >= 120) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 40);
		var ms_time = now.getTime();
		localStorage.setItem("blacksmithing_up_time", ms_time);
		
		localStorage.setItem("blacksmithing_up_price", 120);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 120));
		
		localStorage.setItem("blacksmithing_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("blacksmithing_level")) == 2 && Number(localStorage.getItem("gold")) >= 240) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 80);
		var ms_time = now.getTime();
		localStorage.setItem("blacksmithing_up_time", ms_time);
		
		localStorage.setItem("blacksmithing_up_price", 240);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 240));
		
		localStorage.setItem("blacksmithing_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("blacksmithing_level")) == 3 && Number(localStorage.getItem("gold")) >= 500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 160);
		var ms_time = now.getTime();
		localStorage.setItem("blacksmithing_up_time", ms_time);
		
		localStorage.setItem("blacksmithing_up_price", 500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 500));
		
		localStorage.setItem("blacksmithing_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("blacksmithing_level")) == 4 && Number(localStorage.getItem("gold")) >= 800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 320);
		var ms_time = now.getTime();
		localStorage.setItem("blacksmithing_up_time", ms_time);
		
		localStorage.setItem("blacksmithing_up_price", 800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 800));
		
		localStorage.setItem("blacksmithing_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("blacksmithing_level")) == 5 && Number(localStorage.getItem("gold")) >= 1400) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1220);
		var ms_time = now.getTime();
		localStorage.setItem("blacksmithing_up_time", ms_time);
		
		localStorage.setItem("blacksmithing_up_price", 1400);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 1400));
		
		localStorage.setItem("blacksmithing_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("blacksmithing_level")) == 6 && Number(localStorage.getItem("gold")) >= 2000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1840);
		var ms_time = now.getTime();
		localStorage.setItem("blacksmithing_up_time", ms_time);
		
		localStorage.setItem("blacksmithing_up_price", 2000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 2000));
		
		localStorage.setItem("blacksmithing_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("blacksmithing_level")) == 7 && Number(localStorage.getItem("gold")) >= 3200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 2720);
		var ms_time = now.getTime();
		localStorage.setItem("blacksmithing_up_time", ms_time);
		
		localStorage.setItem("blacksmithing_up_price", 3200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 3200));
		
		localStorage.setItem("blacksmithing_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("blacksmithing_level")) == 8 && Number(localStorage.getItem("gold")) >= 4800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 4540);
		var ms_time = now.getTime();
		localStorage.setItem("blacksmithing_up_time", ms_time);
		
		localStorage.setItem("blacksmithing_up_price", 4800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 4800));
		
		localStorage.setItem("blacksmithing_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("blacksmithing_level")) == 9 && Number(localStorage.getItem("gold")) >= 7200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 6620);
		var ms_time = now.getTime();
		localStorage.setItem("blacksmithing_up_time", ms_time);
		
		localStorage.setItem("blacksmithing_up_price", 7200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 7200));
		
		localStorage.setItem("blacksmithing_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("blacksmithing_level")) == 10 && Number(localStorage.getItem("gold")) >= 10800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 14740);
		var ms_time = now.getTime();
		localStorage.setItem("blacksmithing_up_time", ms_time);
		
		localStorage.setItem("blacksmithing_up_price", 10800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 10800));
		
		localStorage.setItem("blacksmithing_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("blacksmithing_level")) == 11 && Number(localStorage.getItem("gold")) >= 13500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 19220);
		var ms_time = now.getTime();
		localStorage.setItem("blacksmithing_up_time", ms_time);
		
		localStorage.setItem("blacksmithing_up_price", 13500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 13500));
		
		localStorage.setItem("blacksmithing_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("blacksmithing_level")) == 12 && Number(localStorage.getItem("gold")) >= 16900) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 24340);
		var ms_time = now.getTime();
		localStorage.setItem("blacksmithing_up_time", ms_time);
		
		localStorage.setItem("blacksmithing_up_price", 16900);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 16900));
		
		localStorage.setItem("blacksmithing_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("blacksmithing_level")) == 13 && Number(localStorage.getItem("gold")) >= 21100) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 29720);
		var ms_time = now.getTime();
		localStorage.setItem("blacksmithing_up_time", ms_time);
		
		localStorage.setItem("blacksmithing_up_price", 21100);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 21100));
		
		localStorage.setItem("blacksmithing_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("blacksmithing_level")) == 14 && Number(localStorage.getItem("gold")) >= 23200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 35740);
		var ms_time = now.getTime();
		localStorage.setItem("blacksmithing_up_time", ms_time);
		
		localStorage.setItem("blacksmithing_up_price", 23200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 23200));
		
		localStorage.setItem("blacksmithing_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("blacksmithing_level")) == 15 && Number(localStorage.getItem("gold")) >= 25500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 64820);
		var ms_time = now.getTime();
		localStorage.setItem("blacksmithing_up_time", ms_time);
		
		localStorage.setItem("blacksmithing_up_price", 25500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 25500));
		
		localStorage.setItem("blacksmithing_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("blacksmithing_level")) == 16 && Number(localStorage.getItem("gold")) >= 28800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 73240);
		var ms_time = now.getTime();
		localStorage.setItem("blacksmithing_up_time", ms_time);
		
		localStorage.setItem("blacksmithing_up_price", 28800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 28800));
		
		localStorage.setItem("blacksmithing_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("blacksmithing_level")) == 17 && Number(localStorage.getItem("gold")) >= 34500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 82510);
		var ms_time = now.getTime();
		localStorage.setItem("blacksmithing_up_time", ms_time);
		
		localStorage.setItem("blacksmithing_up_price", 34500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 34500));
		
		localStorage.setItem("blacksmithing_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("blacksmithing_level")) == 18 && Number(localStorage.getItem("gold")) >= 45300) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 91840);
		var ms_time = now.getTime();
		localStorage.setItem("blacksmithing_up_time", ms_time);
		
		localStorage.setItem("blacksmithing_up_price", 45300);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 45300));
		
		localStorage.setItem("blacksmithing_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("blacksmithing_level")) == 19 && Number(localStorage.getItem("gold")) >= 50150) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 103520);
		var ms_time = now.getTime();
		localStorage.setItem("blacksmithing_up_time", ms_time);
		
		localStorage.setItem("blacksmithing_up_price", 50150);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 50150));
		
		localStorage.setItem("blacksmithing_upper", "on");
		
		location.reload();
		
	}
	
}

function blacksmithing_up_cancel() {
	
	localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) - Number(localStorage.getItem("blacksmithing_up_price"))));
	
	localStorage.removeItem("farming_upper");
	localStorage.removeItem("farming_up_time");
	localStorage.removeItem("lumbering_upper");
	localStorage.removeItem("lumbering_up_time");
	localStorage.removeItem("mining_upper");
	localStorage.removeItem("mining_up_time");
	localStorage.removeItem("blacksmithing_upper");
	localStorage.removeItem("blacksmithing_up_time");
	localStorage.removeItem("riding_upper");
	localStorage.removeItem("riding_up_time");
	localStorage.removeItem("geometry_upper");
	localStorage.removeItem("geometry_up_time");
	localStorage.removeItem("cartography_upper");
	localStorage.removeItem("cartography_up_time");
	localStorage.removeItem("spying_upper");
	localStorage.removeItem("spying_up_time");
	localStorage.removeItem("masonry_upper");
	localStorage.removeItem("masonry_up_time");
	
	location.reload();
	
}

setInterval(function(){
	
	if (localStorage.getItem("blacksmithing_upper") == "on") {
		
		document.getElementById("build_right1").style.display = "none";
		document.getElementById("build_right2").style.display = "none";
		document.getElementById("build_right3").style.display = "none";
		document.getElementById("build_right4").style.display = "none";
		document.getElementById("build_right5").style.display = "none";
		document.getElementById("build_right6").style.display = "none";
		document.getElementById("build_right7").style.display = "none";
		document.getElementById("build_right8").style.display = "none";
		document.getElementById("build_right9").style.display = "none";
		document.getElementById("build_upper1").style.display = "block";
		document.getElementById("build_upper2").style.display = "block";
		document.getElementById("build_upper3").style.display = "block";
		document.getElementById("build_upper4").style.display = "block";
		document.getElementById("build_upper5").style.display = "block";
		document.getElementById("build_upper6").style.display = "block";
		document.getElementById("build_upper7").style.display = "block";
		document.getElementById("build_upper8").style.display = "block";
		document.getElementById("build_upper9").style.display = "block";
		
		document.getElementById("build_up_board2").style.display = "none";
		document.getElementById("build_up_board3").style.display = "none";
		document.getElementById("build_up_board1").style.display = "none";
		document.getElementById("build_up_board5").style.display = "none";
		document.getElementById("build_up_board6").style.display = "none";
		document.getElementById("build_up_board7").style.display = "none";
		document.getElementById("build_up_board8").style.display = "none";
		document.getElementById("build_up_board9").style.display = "none";
		
		var fa_ms = Math.floor(Number(localStorage.getItem("blacksmithing_up_time")) - Date.now());
		var fa_s = Math.floor(fa_ms / 1000);
		var fa_m = Math.floor(fa_s / 60);
		fa_s = fa_s % 60;
		var fa_h = Math.floor(fa_m / 60);
		fa_m = fa_m % 60;
		var fa_d = Math.floor(fa_h / 24);
		fa_h = fa_h % 24;
		
		fa_d = fa_d.toString().padStart(2, "0");
		fa_h = fa_h.toString().padStart(2, "0");
		fa_m = fa_m.toString().padStart(2, "0");
		fa_s = fa_s.toString().padStart(2, "0");
		
		document.getElementById("blacksmithing_up_d").innerText = fa_d;
		document.getElementById("blacksmithing_up_h").innerText = fa_h;
		document.getElementById("blacksmithing_up_m").innerText = fa_m;
		document.getElementById("blacksmithing_up_s").innerText = fa_s;
		
		if (Math.floor(Number(localStorage.getItem("blacksmithing_up_time")) - Date.now()) < 0) {
		
		localStorage.removeItem("blacksmithing_upper");
		localStorage.removeItem("blacksmithing_up_time");
		
		document.getElementById("build_right1").style.display = "block";
		document.getElementById("build_right2").style.display = "block";
		document.getElementById("build_right3").style.display = "block";
		document.getElementById("build_right4").style.display = "block";
		document.getElementById("build_right5").style.display = "block";
		document.getElementById("build_right6").style.display = "block";
		document.getElementById("build_right7").style.display = "block";
		document.getElementById("build_right8").style.display = "block";
		document.getElementById("build_right9").style.display = "block";
		document.getElementById("build_upper1").style.display = "none";
		document.getElementById("build_upper2").style.display = "none";
		document.getElementById("build_upper3").style.display = "none";
		document.getElementById("build_upper4").style.display = "none";
		document.getElementById("build_upper5").style.display = "none";
		document.getElementById("build_upper6").style.display = "none";
		document.getElementById("build_upper7").style.display = "none";
		document.getElementById("build_upper8").style.display = "none";
		document.getElementById("build_upper9").style.display = "none";
		
		localStorage.setItem("blacksmithing_level", Math.floor(Number(localStorage.getItem("blacksmithing_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
		location.reload();
		}
		
		
	}
	
	
}, 10);

setInterval(function(){
	
	document.getElementById("blacksmithing_level").innerText = localStorage.getItem("blacksmithing_level");
	if (Number(localStorage.getItem("blacksmithing_level")) != 20) {
	document.getElementById("blacksmithing_next_level").innerText = Math.floor(Number(localStorage.getItem("blacksmithing_level")) + 1);
	} else if (Number(localStorage.getItem("blacksmithing_level")) == 20) {
		document.getElementById("blacksmithing_next_level").innerText = "Max";
	}
	
}, 10);

function blacksmithing_up_speed_up() {
	if (Number(localStorage.getItem("diamond")) >= 50) {
		
		localStorage.setItem("diamond_cash", Math.floor(Number(localStorage.getItem("diamond_cash")) + 50));
		
		localStorage.setItem("blacksmithing_level", Math.floor(Number(localStorage.getItem("blacksmithing_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
		localStorage.removeItem("blacksmithing_upper");
		localStorage.removeItem("blacksmithing_up_time");
		
		location.reload();
		
	}
}

/* riding up */

function riding_up() {
	
	if (Number(localStorage.getItem("riding_level")) == 0 && Number(localStorage.getItem("gold")) >= 80) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 20);
		var ms_time = now.getTime();
		localStorage.setItem("riding_up_time", ms_time);
		
		localStorage.setItem("riding_up_price", 80);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 80));
		
		localStorage.setItem("riding_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("riding_level")) == 1 && Number(localStorage.getItem("gold")) >= 120) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 40);
		var ms_time = now.getTime();
		localStorage.setItem("riding_up_time", ms_time);
		
		localStorage.setItem("riding_up_price", 120);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 120));
		
		localStorage.setItem("riding_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("riding_level")) == 2 && Number(localStorage.getItem("gold")) >= 240) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 80);
		var ms_time = now.getTime();
		localStorage.setItem("riding_up_time", ms_time);
		
		localStorage.setItem("riding_up_price", 240);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 240));
		
		localStorage.setItem("riding_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("riding_level")) == 3 && Number(localStorage.getItem("gold")) >= 500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 160);
		var ms_time = now.getTime();
		localStorage.setItem("riding_up_time", ms_time);
		
		localStorage.setItem("riding_up_price", 500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 500));
		
		localStorage.setItem("riding_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("riding_level")) == 4 && Number(localStorage.getItem("gold")) >= 800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 320);
		var ms_time = now.getTime();
		localStorage.setItem("riding_up_time", ms_time);
		
		localStorage.setItem("riding_up_price", 800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 800));
		
		localStorage.setItem("riding_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("riding_level")) == 5 && Number(localStorage.getItem("gold")) >= 1400) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1220);
		var ms_time = now.getTime();
		localStorage.setItem("riding_up_time", ms_time);
		
		localStorage.setItem("riding_up_price", 1400);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 1400));
		
		localStorage.setItem("riding_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("riding_level")) == 6 && Number(localStorage.getItem("gold")) >= 2000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1840);
		var ms_time = now.getTime();
		localStorage.setItem("riding_up_time", ms_time);
		
		localStorage.setItem("riding_up_price", 2000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 2000));
		
		localStorage.setItem("riding_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("riding_level")) == 7 && Number(localStorage.getItem("gold")) >= 3200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 2720);
		var ms_time = now.getTime();
		localStorage.setItem("riding_up_time", ms_time);
		
		localStorage.setItem("riding_up_price", 3200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 3200));
		
		localStorage.setItem("riding_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("riding_level")) == 8 && Number(localStorage.getItem("gold")) >= 4800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 4540);
		var ms_time = now.getTime();
		localStorage.setItem("riding_up_time", ms_time);
		
		localStorage.setItem("riding_up_price", 4800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 4800));
		
		localStorage.setItem("riding_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("riding_level")) == 9 && Number(localStorage.getItem("gold")) >= 7200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 6620);
		var ms_time = now.getTime();
		localStorage.setItem("riding_up_time", ms_time);
		
		localStorage.setItem("riding_up_price", 7200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 7200));
		
		localStorage.setItem("riding_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("riding_level")) == 10 && Number(localStorage.getItem("gold")) >= 10800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 14740);
		var ms_time = now.getTime();
		localStorage.setItem("riding_up_time", ms_time);
		
		localStorage.setItem("riding_up_price", 10800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 10800));
		
		localStorage.setItem("riding_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("riding_level")) == 11 && Number(localStorage.getItem("gold")) >= 13500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 19220);
		var ms_time = now.getTime();
		localStorage.setItem("riding_up_time", ms_time);
		
		localStorage.setItem("riding_up_price", 13500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 13500));
		
		localStorage.setItem("riding_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("riding_level")) == 12 && Number(localStorage.getItem("gold")) >= 16900) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 24340);
		var ms_time = now.getTime();
		localStorage.setItem("riding_up_time", ms_time);
		
		localStorage.setItem("riding_up_price", 16900);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 16900));
		
		localStorage.setItem("riding_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("riding_level")) == 13 && Number(localStorage.getItem("gold")) >= 21100) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 29720);
		var ms_time = now.getTime();
		localStorage.setItem("riding_up_time", ms_time);
		
		localStorage.setItem("riding_up_price", 21100);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 21100));
		
		localStorage.setItem("riding_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("riding_level")) == 14 && Number(localStorage.getItem("gold")) >= 23200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 35740);
		var ms_time = now.getTime();
		localStorage.setItem("riding_up_time", ms_time);
		
		localStorage.setItem("riding_up_price", 23200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 23200));
		
		localStorage.setItem("riding_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("riding_level")) == 15 && Number(localStorage.getItem("gold")) >= 25500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 64820);
		var ms_time = now.getTime();
		localStorage.setItem("riding_up_time", ms_time);
		
		localStorage.setItem("riding_up_price", 25500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 25500));
		
		localStorage.setItem("riding_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("riding_level")) == 16 && Number(localStorage.getItem("gold")) >= 28800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 73240);
		var ms_time = now.getTime();
		localStorage.setItem("riding_up_time", ms_time);
		
		localStorage.setItem("riding_up_price", 28800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 28800));
		
		localStorage.setItem("riding_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("riding_level")) == 17 && Number(localStorage.getItem("gold")) >= 34500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 82510);
		var ms_time = now.getTime();
		localStorage.setItem("riding_up_time", ms_time);
		
		localStorage.setItem("riding_up_price", 34500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 34500));
		
		localStorage.setItem("riding_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("riding_level")) == 18 && Number(localStorage.getItem("gold")) >= 45300) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 91840);
		var ms_time = now.getTime();
		localStorage.setItem("riding_up_time", ms_time);
		
		localStorage.setItem("riding_up_price", 45300);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 45300));
		
		localStorage.setItem("riding_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("riding_level")) == 19 && Number(localStorage.getItem("gold")) >= 50150) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 103520);
		var ms_time = now.getTime();
		localStorage.setItem("riding_up_time", ms_time);
		
		localStorage.setItem("riding_up_price", 50150);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 50150));
		
		localStorage.setItem("riding_upper", "on");
		
		location.reload();
		
	}
	
}

function riding_up_cancel() {
	
	localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) - Number(localStorage.getItem("riding_up_price"))));
	
	localStorage.removeItem("farming_upper");
	localStorage.removeItem("farming_up_time");
	localStorage.removeItem("lumbering_upper");
	localStorage.removeItem("lumbering_up_time");
	localStorage.removeItem("mining_upper");
	localStorage.removeItem("mining_up_time");
	localStorage.removeItem("blacksmithing_upper");
	localStorage.removeItem("blacksmithing_up_time");
	localStorage.removeItem("riding_upper");
	localStorage.removeItem("riding_up_time");
	localStorage.removeItem("geometry_upper");
	localStorage.removeItem("geometry_up_time");
	localStorage.removeItem("cartography_upper");
	localStorage.removeItem("cartography_up_time");
	localStorage.removeItem("spying_upper");
	localStorage.removeItem("spying_up_time");
	localStorage.removeItem("masonry_upper");
	localStorage.removeItem("masonry_up_time");
	
	location.reload();
	
}

setInterval(function(){
	
	if (localStorage.getItem("riding_upper") == "on") {
		
		document.getElementById("build_right1").style.display = "none";
		document.getElementById("build_right2").style.display = "none";
		document.getElementById("build_right3").style.display = "none";
		document.getElementById("build_right4").style.display = "none";
		document.getElementById("build_right5").style.display = "none";
		document.getElementById("build_right6").style.display = "none";
		document.getElementById("build_right7").style.display = "none";
		document.getElementById("build_right8").style.display = "none";
		document.getElementById("build_right9").style.display = "none";
		document.getElementById("build_upper1").style.display = "block";
		document.getElementById("build_upper2").style.display = "block";
		document.getElementById("build_upper3").style.display = "block";
		document.getElementById("build_upper4").style.display = "block";
		document.getElementById("build_upper5").style.display = "block";
		document.getElementById("build_upper6").style.display = "block";
		document.getElementById("build_upper7").style.display = "block";
		document.getElementById("build_upper8").style.display = "block";
		document.getElementById("build_upper9").style.display = "block";
		
		document.getElementById("build_up_board2").style.display = "none";
		document.getElementById("build_up_board3").style.display = "none";
		document.getElementById("build_up_board4").style.display = "none";
		document.getElementById("build_up_board1").style.display = "none";
		document.getElementById("build_up_board6").style.display = "none";
		document.getElementById("build_up_board7").style.display = "none";
		document.getElementById("build_up_board8").style.display = "none";
		document.getElementById("build_up_board9").style.display = "none";
		
		var fa_ms = Math.floor(Number(localStorage.getItem("riding_up_time")) - Date.now());
		var fa_s = Math.floor(fa_ms / 1000);
		var fa_m = Math.floor(fa_s / 60);
		fa_s = fa_s % 60;
		var fa_h = Math.floor(fa_m / 60);
		fa_m = fa_m % 60;
		var fa_d = Math.floor(fa_h / 24);
		fa_h = fa_h % 24;
		
		fa_d = fa_d.toString().padStart(2, "0");
		fa_h = fa_h.toString().padStart(2, "0");
		fa_m = fa_m.toString().padStart(2, "0");
		fa_s = fa_s.toString().padStart(2, "0");
		
		document.getElementById("riding_up_d").innerText = fa_d;
		document.getElementById("riding_up_h").innerText = fa_h;
		document.getElementById("riding_up_m").innerText = fa_m;
		document.getElementById("riding_up_s").innerText = fa_s;
		
		if (Math.floor(Number(localStorage.getItem("riding_up_time")) - Date.now()) < 0) {
		
		localStorage.removeItem("riding_upper");
		localStorage.removeItem("riding_up_time");
		
		document.getElementById("build_right1").style.display = "block";
		document.getElementById("build_right2").style.display = "block";
		document.getElementById("build_right3").style.display = "block";
		document.getElementById("build_right4").style.display = "block";
		document.getElementById("build_right5").style.display = "block";
		document.getElementById("build_right6").style.display = "block";
		document.getElementById("build_right7").style.display = "block";
		document.getElementById("build_right8").style.display = "block";
		document.getElementById("build_right9").style.display = "block";
		document.getElementById("build_upper1").style.display = "none";
		document.getElementById("build_upper2").style.display = "none";
		document.getElementById("build_upper3").style.display = "none";
		document.getElementById("build_upper4").style.display = "none";
		document.getElementById("build_upper5").style.display = "none";
		document.getElementById("build_upper6").style.display = "none";
		document.getElementById("build_upper7").style.display = "none";
		document.getElementById("build_upper8").style.display = "none";
		document.getElementById("build_upper9").style.display = "none";
		
		localStorage.setItem("riding_level", Math.floor(Number(localStorage.getItem("riding_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
		location.reload();
		}
		
		
	}
	
	
}, 10);

setInterval(function(){
	
	document.getElementById("riding_level").innerText = localStorage.getItem("riding_level");
	if (Number(localStorage.getItem("riding_level")) != 20) {
	document.getElementById("riding_next_level").innerText = Math.floor(Number(localStorage.getItem("riding_level")) + 1);
	} else if (Number(localStorage.getItem("riding_level")) == 20) {
		document.getElementById("riding_next_level").innerText = "Max";
	}
	
}, 10);

function riding_up_speed_up() {
	if (Number(localStorage.getItem("diamond")) >= 50) {
		
		localStorage.setItem("diamond_cash", Math.floor(Number(localStorage.getItem("diamond_cash")) + 50));
		
		localStorage.setItem("riding_level", Math.floor(Number(localStorage.getItem("riding_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
		localStorage.removeItem("riding_upper");
		localStorage.removeItem("riding_up_time");
		
		location.reload();
		
	}
}

/* geometry up */

function geometry_up() {
	
	if (Number(localStorage.getItem("geometry_level")) == 0 && Number(localStorage.getItem("gold")) >= 80) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 20);
		var ms_time = now.getTime();
		localStorage.setItem("geometry_up_time", ms_time);
		
		localStorage.setItem("geometry_up_price", 80);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 80));
		
		localStorage.setItem("geometry_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("geometry_level")) == 1 && Number(localStorage.getItem("gold")) >= 120) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 40);
		var ms_time = now.getTime();
		localStorage.setItem("geometry_up_time", ms_time);
		
		localStorage.setItem("geometry_up_price", 120);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 120));
		
		localStorage.setItem("geometry_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("geometry_level")) == 2 && Number(localStorage.getItem("gold")) >= 240) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 80);
		var ms_time = now.getTime();
		localStorage.setItem("geometry_up_time", ms_time);
		
		localStorage.setItem("geometry_up_price", 240);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 240));
		
		localStorage.setItem("geometry_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("geometry_level")) == 3 && Number(localStorage.getItem("gold")) >= 500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 160);
		var ms_time = now.getTime();
		localStorage.setItem("geometry_up_time", ms_time);
		
		localStorage.setItem("geometry_up_price", 500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 500));
		
		localStorage.setItem("geometry_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("geometry_level")) == 4 && Number(localStorage.getItem("gold")) >= 800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 320);
		var ms_time = now.getTime();
		localStorage.setItem("geometry_up_time", ms_time);
		
		localStorage.setItem("geometry_up_price", 800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 800));
		
		localStorage.setItem("geometry_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("geometry_level")) == 5 && Number(localStorage.getItem("gold")) >= 1400) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1220);
		var ms_time = now.getTime();
		localStorage.setItem("geometry_up_time", ms_time);
		
		localStorage.setItem("geometry_up_price", 1400);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 1400));
		
		localStorage.setItem("geometry_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("geometry_level")) == 6 && Number(localStorage.getItem("gold")) >= 2000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1840);
		var ms_time = now.getTime();
		localStorage.setItem("geometry_up_time", ms_time);
		
		localStorage.setItem("geometry_up_price", 2000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 2000));
		
		localStorage.setItem("geometry_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("geometry_level")) == 7 && Number(localStorage.getItem("gold")) >= 3200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 2720);
		var ms_time = now.getTime();
		localStorage.setItem("geometry_up_time", ms_time);
		
		localStorage.setItem("geometry_up_price", 3200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 3200));
		
		localStorage.setItem("geometry_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("geometry_level")) == 8 && Number(localStorage.getItem("gold")) >= 4800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 4540);
		var ms_time = now.getTime();
		localStorage.setItem("geometry_up_time", ms_time);
		
		localStorage.setItem("geometry_up_price", 4800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 4800));
		
		localStorage.setItem("geometry_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("geometry_level")) == 9 && Number(localStorage.getItem("gold")) >= 7200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 6620);
		var ms_time = now.getTime();
		localStorage.setItem("geometry_up_time", ms_time);
		
		localStorage.setItem("geometry_up_price", 7200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 7200));
		
		localStorage.setItem("geometry_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("geometry_level")) == 10 && Number(localStorage.getItem("gold")) >= 10800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 14740);
		var ms_time = now.getTime();
		localStorage.setItem("geometry_up_time", ms_time);
		
		localStorage.setItem("geometry_up_price", 10800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 10800));
		
		localStorage.setItem("geometry_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("geometry_level")) == 11 && Number(localStorage.getItem("gold")) >= 13500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 19220);
		var ms_time = now.getTime();
		localStorage.setItem("geometry_up_time", ms_time);
		
		localStorage.setItem("geometry_up_price", 13500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 13500));
		
		localStorage.setItem("geometry_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("geometry_level")) == 12 && Number(localStorage.getItem("gold")) >= 16900) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 24340);
		var ms_time = now.getTime();
		localStorage.setItem("geometry_up_time", ms_time);
		
		localStorage.setItem("geometry_up_price", 16900);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 16900));
		
		localStorage.setItem("geometry_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("geometry_level")) == 13 && Number(localStorage.getItem("gold")) >= 21100) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 29720);
		var ms_time = now.getTime();
		localStorage.setItem("geometry_up_time", ms_time);
		
		localStorage.setItem("geometry_up_price", 21100);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 21100));
		
		localStorage.setItem("geometry_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("geometry_level")) == 14 && Number(localStorage.getItem("gold")) >= 23200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 35740);
		var ms_time = now.getTime();
		localStorage.setItem("geometry_up_time", ms_time);
		
		localStorage.setItem("geometry_up_price", 23200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 23200));
		
		localStorage.setItem("geometry_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("geometry_level")) == 15 && Number(localStorage.getItem("gold")) >= 25500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 64820);
		var ms_time = now.getTime();
		localStorage.setItem("geometry_up_time", ms_time);
		
		localStorage.setItem("geometry_up_price", 25500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 25500));
		
		localStorage.setItem("geometry_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("geometry_level")) == 16 && Number(localStorage.getItem("gold")) >= 28800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 73240);
		var ms_time = now.getTime();
		localStorage.setItem("geometry_up_time", ms_time);
		
		localStorage.setItem("geometry_up_price", 28800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 28800));
		
		localStorage.setItem("geometry_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("geometry_level")) == 17 && Number(localStorage.getItem("gold")) >= 34500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 82510);
		var ms_time = now.getTime();
		localStorage.setItem("geometry_up_time", ms_time);
		
		localStorage.setItem("geometry_up_price", 34500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 34500));
		
		localStorage.setItem("geometry_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("geometry_level")) == 18 && Number(localStorage.getItem("gold")) >= 45300) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 91840);
		var ms_time = now.getTime();
		localStorage.setItem("geometry_up_time", ms_time);
		
		localStorage.setItem("geometry_up_price", 45300);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 45300));
		
		localStorage.setItem("geometry_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("geometry_level")) == 19 && Number(localStorage.getItem("gold")) >= 50150) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 103520);
		var ms_time = now.getTime();
		localStorage.setItem("geometry_up_time", ms_time);
		
		localStorage.setItem("geometry_up_price", 50150);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 50150));
		
		localStorage.setItem("geometry_upper", "on");
		
		location.reload();
		
	}
	
}

function geometry_up_cancel() {
	
	localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) - Number(localStorage.getItem("geometry_up_price"))));
	
	localStorage.removeItem("farming_upper");
	localStorage.removeItem("farming_up_time");
	localStorage.removeItem("lumbering_upper");
	localStorage.removeItem("lumbering_up_time");
	localStorage.removeItem("mining_upper");
	localStorage.removeItem("mining_up_time");
	localStorage.removeItem("blacksmithing_upper");
	localStorage.removeItem("blacksmithing_up_time");
	localStorage.removeItem("riding_upper");
	localStorage.removeItem("riding_up_time");
	localStorage.removeItem("geometry_upper");
	localStorage.removeItem("geometry_up_time");
	localStorage.removeItem("cartography_upper");
	localStorage.removeItem("cartography_up_time");
	localStorage.removeItem("spying_upper");
	localStorage.removeItem("spying_up_time");
	localStorage.removeItem("masonry_upper");
	localStorage.removeItem("masonry_up_time");
	
	location.reload();
	
}

setInterval(function(){
	
	if (localStorage.getItem("geometry_upper") == "on") {
		
		document.getElementById("build_right1").style.display = "none";
		document.getElementById("build_right2").style.display = "none";
		document.getElementById("build_right3").style.display = "none";
		document.getElementById("build_right4").style.display = "none";
		document.getElementById("build_right5").style.display = "none";
		document.getElementById("build_right6").style.display = "none";
		document.getElementById("build_right7").style.display = "none";
		document.getElementById("build_right8").style.display = "none";
		document.getElementById("build_right9").style.display = "none";
		document.getElementById("build_upper1").style.display = "block";
		document.getElementById("build_upper2").style.display = "block";
		document.getElementById("build_upper3").style.display = "block";
		document.getElementById("build_upper4").style.display = "block";
		document.getElementById("build_upper5").style.display = "block";
		document.getElementById("build_upper6").style.display = "block";
		document.getElementById("build_upper7").style.display = "block";
		document.getElementById("build_upper8").style.display = "block";
		document.getElementById("build_upper9").style.display = "block";
		
		document.getElementById("build_up_board2").style.display = "none";
		document.getElementById("build_up_board3").style.display = "none";
		document.getElementById("build_up_board4").style.display = "none";
		document.getElementById("build_up_board5").style.display = "none";
		document.getElementById("build_up_board1").style.display = "none";
		document.getElementById("build_up_board7").style.display = "none";
		document.getElementById("build_up_board8").style.display = "none";
		document.getElementById("build_up_board9").style.display = "none";
		
		var fa_ms = Math.floor(Number(localStorage.getItem("geometry_up_time")) - Date.now());
		var fa_s = Math.floor(fa_ms / 1000);
		var fa_m = Math.floor(fa_s / 60);
		fa_s = fa_s % 60;
		var fa_h = Math.floor(fa_m / 60);
		fa_m = fa_m % 60;
		var fa_d = Math.floor(fa_h / 24);
		fa_h = fa_h % 24;
		
		fa_d = fa_d.toString().padStart(2, "0");
		fa_h = fa_h.toString().padStart(2, "0");
		fa_m = fa_m.toString().padStart(2, "0");
		fa_s = fa_s.toString().padStart(2, "0");
		
		document.getElementById("geometry_up_d").innerText = fa_d;
		document.getElementById("geometry_up_h").innerText = fa_h;
		document.getElementById("geometry_up_m").innerText = fa_m;
		document.getElementById("geometry_up_s").innerText = fa_s;
		
		if (Math.floor(Number(localStorage.getItem("geometry_up_time")) - Date.now()) < 0) {
		
		localStorage.removeItem("geometry_upper");
		localStorage.removeItem("geometry_up_time");
		
		document.getElementById("build_right1").style.display = "block";
		document.getElementById("build_right2").style.display = "block";
		document.getElementById("build_right3").style.display = "block";
		document.getElementById("build_right4").style.display = "block";
		document.getElementById("build_right5").style.display = "block";
		document.getElementById("build_right6").style.display = "block";
		document.getElementById("build_right7").style.display = "block";
		document.getElementById("build_right8").style.display = "block";
		document.getElementById("build_right9").style.display = "block";
		document.getElementById("build_upper1").style.display = "none";
		document.getElementById("build_upper2").style.display = "none";
		document.getElementById("build_upper3").style.display = "none";
		document.getElementById("build_upper4").style.display = "none";
		document.getElementById("build_upper5").style.display = "none";
		document.getElementById("build_upper6").style.display = "none";
		document.getElementById("build_upper7").style.display = "none";
		document.getElementById("build_upper8").style.display = "none";
		document.getElementById("build_upper9").style.display = "none";
		
		localStorage.setItem("geometry_level", Math.floor(Number(localStorage.getItem("geometry_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
		location.reload();
		}
		
		
	}
	
	
}, 10);

setInterval(function(){
	
	document.getElementById("geometry_level").innerText = localStorage.getItem("geometry_level");
	if (Number(localStorage.getItem("geometry_level")) != 20) {
	document.getElementById("geometry_next_level").innerText = Math.floor(Number(localStorage.getItem("geometry_level")) + 1);
	} else if (Number(localStorage.getItem("geometry_level")) == 20) {
		document.getElementById("geometry_next_level").innerText = "Max";
	}
	
}, 10);

function geometry_up_speed_up() {
	if (Number(localStorage.getItem("diamond")) >= 50) {
		
		localStorage.setItem("diamond_cash", Math.floor(Number(localStorage.getItem("diamond_cash")) + 50));
		
		localStorage.setItem("geometry_level", Math.floor(Number(localStorage.getItem("geometry_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
		localStorage.removeItem("geometry_upper");
		localStorage.removeItem("geometry_up_time");
		
		location.reload();
		
	}
}

/* cartography up */

function cartography_up() {
	
	if (Number(localStorage.getItem("cartography_level")) == 0 && Number(localStorage.getItem("gold")) >= 80) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 20);
		var ms_time = now.getTime();
		localStorage.setItem("cartography_up_time", ms_time);
		
		localStorage.setItem("cartography_up_price", 80);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 80));
		
		localStorage.setItem("cartography_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cartography_level")) == 1 && Number(localStorage.getItem("gold")) >= 120) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 40);
		var ms_time = now.getTime();
		localStorage.setItem("cartography_up_time", ms_time);
		
		localStorage.setItem("cartography_up_price", 120);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 120));
		
		localStorage.setItem("cartography_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cartography_level")) == 2 && Number(localStorage.getItem("gold")) >= 240) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 80);
		var ms_time = now.getTime();
		localStorage.setItem("cartography_up_time", ms_time);
		
		localStorage.setItem("cartography_up_price", 240);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 240));
		
		localStorage.setItem("cartography_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cartography_level")) == 3 && Number(localStorage.getItem("gold")) >= 500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 160);
		var ms_time = now.getTime();
		localStorage.setItem("cartography_up_time", ms_time);
		
		localStorage.setItem("cartography_up_price", 500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 500));
		
		localStorage.setItem("cartography_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cartography_level")) == 4 && Number(localStorage.getItem("gold")) >= 800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 320);
		var ms_time = now.getTime();
		localStorage.setItem("cartography_up_time", ms_time);
		
		localStorage.setItem("cartography_up_price", 800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 800));
		
		localStorage.setItem("cartography_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cartography_level")) == 5 && Number(localStorage.getItem("gold")) >= 1400) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1220);
		var ms_time = now.getTime();
		localStorage.setItem("cartography_up_time", ms_time);
		
		localStorage.setItem("cartography_up_price", 1400);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 1400));
		
		localStorage.setItem("cartography_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cartography_level")) == 6 && Number(localStorage.getItem("gold")) >= 2000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1840);
		var ms_time = now.getTime();
		localStorage.setItem("cartography_up_time", ms_time);
		
		localStorage.setItem("cartography_up_price", 2000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 2000));
		
		localStorage.setItem("cartography_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cartography_level")) == 7 && Number(localStorage.getItem("gold")) >= 3200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 2720);
		var ms_time = now.getTime();
		localStorage.setItem("cartography_up_time", ms_time);
		
		localStorage.setItem("cartography_up_price", 3200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 3200));
		
		localStorage.setItem("cartography_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cartography_level")) == 8 && Number(localStorage.getItem("gold")) >= 4800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 4540);
		var ms_time = now.getTime();
		localStorage.setItem("cartography_up_time", ms_time);
		
		localStorage.setItem("cartography_up_price", 4800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 4800));
		
		localStorage.setItem("cartography_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cartography_level")) == 9 && Number(localStorage.getItem("gold")) >= 7200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 6620);
		var ms_time = now.getTime();
		localStorage.setItem("cartography_up_time", ms_time);
		
		localStorage.setItem("cartography_up_price", 7200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 7200));
		
		localStorage.setItem("cartography_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cartography_level")) == 10 && Number(localStorage.getItem("gold")) >= 10800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 14740);
		var ms_time = now.getTime();
		localStorage.setItem("cartography_up_time", ms_time);
		
		localStorage.setItem("cartography_up_price", 10800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 10800));
		
		localStorage.setItem("cartography_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cartography_level")) == 11 && Number(localStorage.getItem("gold")) >= 13500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 19220);
		var ms_time = now.getTime();
		localStorage.setItem("cartography_up_time", ms_time);
		
		localStorage.setItem("cartography_up_price", 13500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 13500));
		
		localStorage.setItem("cartography_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cartography_level")) == 12 && Number(localStorage.getItem("gold")) >= 16900) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 24340);
		var ms_time = now.getTime();
		localStorage.setItem("cartography_up_time", ms_time);
		
		localStorage.setItem("cartography_up_price", 16900);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 16900));
		
		localStorage.setItem("cartography_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cartography_level")) == 13 && Number(localStorage.getItem("gold")) >= 21100) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 29720);
		var ms_time = now.getTime();
		localStorage.setItem("cartography_up_time", ms_time);
		
		localStorage.setItem("cartography_up_price", 21100);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 21100));
		
		localStorage.setItem("cartography_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cartography_level")) == 14 && Number(localStorage.getItem("gold")) >= 23200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 35740);
		var ms_time = now.getTime();
		localStorage.setItem("cartography_up_time", ms_time);
		
		localStorage.setItem("cartography_up_price", 23200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 23200));
		
		localStorage.setItem("cartography_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cartography_level")) == 15 && Number(localStorage.getItem("gold")) >= 25500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 64820);
		var ms_time = now.getTime();
		localStorage.setItem("cartography_up_time", ms_time);
		
		localStorage.setItem("cartography_up_price", 25500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 25500));
		
		localStorage.setItem("cartography_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cartography_level")) == 16 && Number(localStorage.getItem("gold")) >= 28800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 73240);
		var ms_time = now.getTime();
		localStorage.setItem("cartography_up_time", ms_time);
		
		localStorage.setItem("cartography_up_price", 28800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 28800));
		
		localStorage.setItem("cartography_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cartography_level")) == 17 && Number(localStorage.getItem("gold")) >= 34500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 82510);
		var ms_time = now.getTime();
		localStorage.setItem("cartography_up_time", ms_time);
		
		localStorage.setItem("cartography_up_price", 34500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 34500));
		
		localStorage.setItem("cartography_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cartography_level")) == 18 && Number(localStorage.getItem("gold")) >= 45300) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 91840);
		var ms_time = now.getTime();
		localStorage.setItem("cartography_up_time", ms_time);
		
		localStorage.setItem("cartography_up_price", 45300);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 45300));
		
		localStorage.setItem("cartography_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("cartography_level")) == 19 && Number(localStorage.getItem("gold")) >= 50150) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 103520);
		var ms_time = now.getTime();
		localStorage.setItem("cartography_up_time", ms_time);
		
		localStorage.setItem("cartography_up_price", 50150);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 50150));
		
		localStorage.setItem("cartography_upper", "on");
		
		location.reload();
		
	}
	
}

function cartography_up_cancel() {
	
	localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) - Number(localStorage.getItem("cartography_up_price"))));
	
	localStorage.removeItem("farming_upper");
	localStorage.removeItem("farming_up_time");
	localStorage.removeItem("lumbering_upper");
	localStorage.removeItem("lumbering_up_time");
	localStorage.removeItem("mining_upper");
	localStorage.removeItem("mining_up_time");
	localStorage.removeItem("blacksmithing_upper");
	localStorage.removeItem("blacksmithing_up_time");
	localStorage.removeItem("riding_upper");
	localStorage.removeItem("riding_up_time");
	localStorage.removeItem("geometry_upper");
	localStorage.removeItem("geometry_up_time");
	localStorage.removeItem("cartography_upper");
	localStorage.removeItem("cartography_up_time");
	localStorage.removeItem("spying_upper");
	localStorage.removeItem("spying_up_time");
	localStorage.removeItem("masonry_upper");
	localStorage.removeItem("masonry_up_time");
	
	location.reload();
	
}

setInterval(function(){
	
	if (localStorage.getItem("cartography_upper") == "on") {
		
		document.getElementById("build_right1").style.display = "none";
		document.getElementById("build_right2").style.display = "none";
		document.getElementById("build_right3").style.display = "none";
		document.getElementById("build_right4").style.display = "none";
		document.getElementById("build_right5").style.display = "none";
		document.getElementById("build_right6").style.display = "none";
		document.getElementById("build_right7").style.display = "none";
		document.getElementById("build_right8").style.display = "none";
		document.getElementById("build_right9").style.display = "none";
		document.getElementById("build_upper1").style.display = "block";
		document.getElementById("build_upper2").style.display = "block";
		document.getElementById("build_upper3").style.display = "block";
		document.getElementById("build_upper4").style.display = "block";
		document.getElementById("build_upper5").style.display = "block";
		document.getElementById("build_upper6").style.display = "block";
		document.getElementById("build_upper7").style.display = "block";
		document.getElementById("build_upper8").style.display = "block";
		document.getElementById("build_upper9").style.display = "block";
		
		document.getElementById("build_up_board2").style.display = "none";
		document.getElementById("build_up_board3").style.display = "none";
		document.getElementById("build_up_board4").style.display = "none";
		document.getElementById("build_up_board5").style.display = "none";
		document.getElementById("build_up_board6").style.display = "none";
		document.getElementById("build_up_board1").style.display = "none";
		document.getElementById("build_up_board8").style.display = "none";
		document.getElementById("build_up_board9").style.display = "none";
		
		var fa_ms = Math.floor(Number(localStorage.getItem("cartography_up_time")) - Date.now());
		var fa_s = Math.floor(fa_ms / 1000);
		var fa_m = Math.floor(fa_s / 60);
		fa_s = fa_s % 60;
		var fa_h = Math.floor(fa_m / 60);
		fa_m = fa_m % 60;
		var fa_d = Math.floor(fa_h / 24);
		fa_h = fa_h % 24;
		
		fa_d = fa_d.toString().padStart(2, "0");
		fa_h = fa_h.toString().padStart(2, "0");
		fa_m = fa_m.toString().padStart(2, "0");
		fa_s = fa_s.toString().padStart(2, "0");
		
		document.getElementById("cartography_up_d").innerText = fa_d;
		document.getElementById("cartography_up_h").innerText = fa_h;
		document.getElementById("cartography_up_m").innerText = fa_m;
		document.getElementById("cartography_up_s").innerText = fa_s;
		
		if (Math.floor(Number(localStorage.getItem("cartography_up_time")) - Date.now()) < 0) {
		
		localStorage.removeItem("cartography_upper");
		localStorage.removeItem("cartography_up_time");
		
		document.getElementById("build_right1").style.display = "block";
		document.getElementById("build_right2").style.display = "block";
		document.getElementById("build_right3").style.display = "block";
		document.getElementById("build_right4").style.display = "block";
		document.getElementById("build_right5").style.display = "block";
		document.getElementById("build_right6").style.display = "block";
		document.getElementById("build_right7").style.display = "block";
		document.getElementById("build_right8").style.display = "block";
		document.getElementById("build_right9").style.display = "block";
		document.getElementById("build_upper1").style.display = "none";
		document.getElementById("build_upper2").style.display = "none";
		document.getElementById("build_upper3").style.display = "none";
		document.getElementById("build_upper4").style.display = "none";
		document.getElementById("build_upper5").style.display = "none";
		document.getElementById("build_upper6").style.display = "none";
		document.getElementById("build_upper7").style.display = "none";
		document.getElementById("build_upper8").style.display = "none";
		document.getElementById("build_upper9").style.display = "none";
		
		localStorage.setItem("cartography_level", Math.floor(Number(localStorage.getItem("cartography_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
		location.reload();
		}
		
		
	}
	
	
}, 10);

setInterval(function(){
	
	document.getElementById("cartography_level").innerText = localStorage.getItem("cartography_level");
	if (Number(localStorage.getItem("cartography_level")) != 20) {
	document.getElementById("cartography_next_level").innerText = Math.floor(Number(localStorage.getItem("cartography_level")) + 1);
	} else if (Number(localStorage.getItem("cartography_level")) == 20) {
		document.getElementById("cartography_next_level").innerText = "Max";
	}
	
}, 10);

function cartography_up_speed_up() {
	if (Number(localStorage.getItem("diamond")) >= 50) {
		
		localStorage.setItem("diamond_cash", Math.floor(Number(localStorage.getItem("diamond_cash")) + 50));
		
		localStorage.setItem("cartography_level", Math.floor(Number(localStorage.getItem("cartography_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
		localStorage.removeItem("cartography_upper");
		localStorage.removeItem("cartography_up_time");
		
		location.reload();
		
	}
}

/* spying up */

function spying_up() {
	
	if (Number(localStorage.getItem("spying_level")) == 0 && Number(localStorage.getItem("gold")) >= 80) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 20);
		var ms_time = now.getTime();
		localStorage.setItem("spying_up_time", ms_time);
		
		localStorage.setItem("spying_up_price", 80);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 80));
		
		localStorage.setItem("spying_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spying_level")) == 1 && Number(localStorage.getItem("gold")) >= 120) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 40);
		var ms_time = now.getTime();
		localStorage.setItem("spying_up_time", ms_time);
		
		localStorage.setItem("spying_up_price", 120);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 120));
		
		localStorage.setItem("spying_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spying_level")) == 2 && Number(localStorage.getItem("gold")) >= 240) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 80);
		var ms_time = now.getTime();
		localStorage.setItem("spying_up_time", ms_time);
		
		localStorage.setItem("spying_up_price", 240);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 240));
		
		localStorage.setItem("spying_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spying_level")) == 3 && Number(localStorage.getItem("gold")) >= 500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 160);
		var ms_time = now.getTime();
		localStorage.setItem("spying_up_time", ms_time);
		
		localStorage.setItem("spying_up_price", 500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 500));
		
		localStorage.setItem("spying_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spying_level")) == 4 && Number(localStorage.getItem("gold")) >= 800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 320);
		var ms_time = now.getTime();
		localStorage.setItem("spying_up_time", ms_time);
		
		localStorage.setItem("spying_up_price", 800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 800));
		
		localStorage.setItem("spying_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spying_level")) == 5 && Number(localStorage.getItem("gold")) >= 1400) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1220);
		var ms_time = now.getTime();
		localStorage.setItem("spying_up_time", ms_time);
		
		localStorage.setItem("spying_up_price", 1400);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 1400));
		
		localStorage.setItem("spying_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spying_level")) == 6 && Number(localStorage.getItem("gold")) >= 2000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1840);
		var ms_time = now.getTime();
		localStorage.setItem("spying_up_time", ms_time);
		
		localStorage.setItem("spying_up_price", 2000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 2000));
		
		localStorage.setItem("spying_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spying_level")) == 7 && Number(localStorage.getItem("gold")) >= 3200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 2720);
		var ms_time = now.getTime();
		localStorage.setItem("spying_up_time", ms_time);
		
		localStorage.setItem("spying_up_price", 3200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 3200));
		
		localStorage.setItem("spying_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spying_level")) == 8 && Number(localStorage.getItem("gold")) >= 4800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 4540);
		var ms_time = now.getTime();
		localStorage.setItem("spying_up_time", ms_time);
		
		localStorage.setItem("spying_up_price", 4800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 4800));
		
		localStorage.setItem("spying_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spying_level")) == 9 && Number(localStorage.getItem("gold")) >= 7200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 6620);
		var ms_time = now.getTime();
		localStorage.setItem("spying_up_time", ms_time);
		
		localStorage.setItem("spying_up_price", 7200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 7200));
		
		localStorage.setItem("spying_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spying_level")) == 10 && Number(localStorage.getItem("gold")) >= 10800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 14740);
		var ms_time = now.getTime();
		localStorage.setItem("spying_up_time", ms_time);
		
		localStorage.setItem("spying_up_price", 10800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 10800));
		
		localStorage.setItem("spying_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spying_level")) == 11 && Number(localStorage.getItem("gold")) >= 13500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 19220);
		var ms_time = now.getTime();
		localStorage.setItem("spying_up_time", ms_time);
		
		localStorage.setItem("spying_up_price", 13500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 13500));
		
		localStorage.setItem("spying_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spying_level")) == 12 && Number(localStorage.getItem("gold")) >= 16900) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 24340);
		var ms_time = now.getTime();
		localStorage.setItem("spying_up_time", ms_time);
		
		localStorage.setItem("spying_up_price", 16900);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 16900));
		
		localStorage.setItem("spying_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spying_level")) == 13 && Number(localStorage.getItem("gold")) >= 21100) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 29720);
		var ms_time = now.getTime();
		localStorage.setItem("spying_up_time", ms_time);
		
		localStorage.setItem("spying_up_price", 21100);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 21100));
		
		localStorage.setItem("spying_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spying_level")) == 14 && Number(localStorage.getItem("gold")) >= 23200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 35740);
		var ms_time = now.getTime();
		localStorage.setItem("spying_up_time", ms_time);
		
		localStorage.setItem("spying_up_price", 23200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 23200));
		
		localStorage.setItem("spying_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spying_level")) == 15 && Number(localStorage.getItem("gold")) >= 25500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 64820);
		var ms_time = now.getTime();
		localStorage.setItem("spying_up_time", ms_time);
		
		localStorage.setItem("spying_up_price", 25500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 25500));
		
		localStorage.setItem("spying_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spying_level")) == 16 && Number(localStorage.getItem("gold")) >= 28800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 73240);
		var ms_time = now.getTime();
		localStorage.setItem("spying_up_time", ms_time);
		
		localStorage.setItem("spying_up_price", 28800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 28800));
		
		localStorage.setItem("spying_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spying_level")) == 17 && Number(localStorage.getItem("gold")) >= 34500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 82510);
		var ms_time = now.getTime();
		localStorage.setItem("spying_up_time", ms_time);
		
		localStorage.setItem("spying_up_price", 34500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 34500));
		
		localStorage.setItem("spying_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spying_level")) == 18 && Number(localStorage.getItem("gold")) >= 45300) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 91840);
		var ms_time = now.getTime();
		localStorage.setItem("spying_up_time", ms_time);
		
		localStorage.setItem("spying_up_price", 45300);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 45300));
		
		localStorage.setItem("spying_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("spying_level")) == 19 && Number(localStorage.getItem("gold")) >= 50150) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 103520);
		var ms_time = now.getTime();
		localStorage.setItem("spying_up_time", ms_time);
		
		localStorage.setItem("spying_up_price", 50150);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 50150));
		
		localStorage.setItem("spying_upper", "on");
		
		location.reload();
		
	}
	
}

function spying_up_cancel() {
	
	localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) - Number(localStorage.getItem("spying_up_price"))));
	
	localStorage.removeItem("farming_upper");
	localStorage.removeItem("farming_up_time");
	localStorage.removeItem("lumbering_upper");
	localStorage.removeItem("lumbering_up_time");
	localStorage.removeItem("mining_upper");
	localStorage.removeItem("mining_up_time");
	localStorage.removeItem("blacksmithing_upper");
	localStorage.removeItem("blacksmithing_up_time");
	localStorage.removeItem("riding_upper");
	localStorage.removeItem("riding_up_time");
	localStorage.removeItem("geometry_upper");
	localStorage.removeItem("geometry_up_time");
	localStorage.removeItem("cartography_upper");
	localStorage.removeItem("cartography_up_time");
	localStorage.removeItem("spying_upper");
	localStorage.removeItem("spying_up_time");
	localStorage.removeItem("masonry_upper");
	localStorage.removeItem("masonry_up_time");
	
	location.reload();
	
}

setInterval(function(){
	
	if (localStorage.getItem("spying_upper") == "on") {
		
		document.getElementById("build_right1").style.display = "none";
		document.getElementById("build_right2").style.display = "none";
		document.getElementById("build_right3").style.display = "none";
		document.getElementById("build_right4").style.display = "none";
		document.getElementById("build_right5").style.display = "none";
		document.getElementById("build_right6").style.display = "none";
		document.getElementById("build_right7").style.display = "none";
		document.getElementById("build_right8").style.display = "none";
		document.getElementById("build_right9").style.display = "none";
		document.getElementById("build_upper1").style.display = "block";
		document.getElementById("build_upper2").style.display = "block";
		document.getElementById("build_upper3").style.display = "block";
		document.getElementById("build_upper4").style.display = "block";
		document.getElementById("build_upper5").style.display = "block";
		document.getElementById("build_upper6").style.display = "block";
		document.getElementById("build_upper7").style.display = "block";
		document.getElementById("build_upper8").style.display = "block";
		document.getElementById("build_upper9").style.display = "block";
		
		document.getElementById("build_up_board2").style.display = "none";
		document.getElementById("build_up_board3").style.display = "none";
		document.getElementById("build_up_board4").style.display = "none";
		document.getElementById("build_up_board5").style.display = "none";
		document.getElementById("build_up_board6").style.display = "none";
		document.getElementById("build_up_board7").style.display = "none";
		document.getElementById("build_up_board1").style.display = "none";
		document.getElementById("build_up_board9").style.display = "none";
		
		var fa_ms = Math.floor(Number(localStorage.getItem("spying_up_time")) - Date.now());
		var fa_s = Math.floor(fa_ms / 1000);
		var fa_m = Math.floor(fa_s / 60);
		fa_s = fa_s % 60;
		var fa_h = Math.floor(fa_m / 60);
		fa_m = fa_m % 60;
		var fa_d = Math.floor(fa_h / 24);
		fa_h = fa_h % 24;
		
		fa_d = fa_d.toString().padStart(2, "0");
		fa_h = fa_h.toString().padStart(2, "0");
		fa_m = fa_m.toString().padStart(2, "0");
		fa_s = fa_s.toString().padStart(2, "0");
		
		document.getElementById("spying_up_d").innerText = fa_d;
		document.getElementById("spying_up_h").innerText = fa_h;
		document.getElementById("spying_up_m").innerText = fa_m;
		document.getElementById("spying_up_s").innerText = fa_s;
		
		if (Math.floor(Number(localStorage.getItem("spying_up_time")) - Date.now()) < 0) {
		
		localStorage.removeItem("spying_upper");
		localStorage.removeItem("spying_up_time");
		
		document.getElementById("build_right1").style.display = "block";
		document.getElementById("build_right2").style.display = "block";
		document.getElementById("build_right3").style.display = "block";
		document.getElementById("build_right4").style.display = "block";
		document.getElementById("build_right5").style.display = "block";
		document.getElementById("build_right6").style.display = "block";
		document.getElementById("build_right7").style.display = "block";
		document.getElementById("build_right8").style.display = "block";
		document.getElementById("build_right9").style.display = "block";
		document.getElementById("build_upper1").style.display = "none";
		document.getElementById("build_upper2").style.display = "none";
		document.getElementById("build_upper3").style.display = "none";
		document.getElementById("build_upper4").style.display = "none";
		document.getElementById("build_upper5").style.display = "none";
		document.getElementById("build_upper6").style.display = "none";
		document.getElementById("build_upper7").style.display = "none";
		document.getElementById("build_upper8").style.display = "none";
		document.getElementById("build_upper9").style.display = "none";
		
		localStorage.setItem("spying_level", Math.floor(Number(localStorage.getItem("spying_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
		location.reload();
		}
		
		
	}
	
	
}, 10);

setInterval(function(){
	
	document.getElementById("spying_level").innerText = localStorage.getItem("spying_level");
	if (Number(localStorage.getItem("spying_level")) != 20) {
	document.getElementById("spying_next_level").innerText = Math.floor(Number(localStorage.getItem("spying_level")) + 1);
	} else if (Number(localStorage.getItem("spying_level")) == 20) {
		document.getElementById("spying_next_level").innerText = "Max";
	}
	
}, 10);

function spying_up_speed_up() {
	if (Number(localStorage.getItem("diamond")) >= 50) {
		
		localStorage.setItem("diamond_cash", Math.floor(Number(localStorage.getItem("diamond_cash")) + 50));
		
		localStorage.setItem("spying_level", Math.floor(Number(localStorage.getItem("spying_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
		localStorage.removeItem("spying_upper");
		localStorage.removeItem("spying_up_time");
		
		location.reload();
		
	}
}

/* masonry up */

function masonry_up() {
	
	if (Number(localStorage.getItem("masonry_level")) == 0 && Number(localStorage.getItem("gold")) >= 80) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 20);
		var ms_time = now.getTime();
		localStorage.setItem("masonry_up_time", ms_time);
		
		localStorage.setItem("masonry_up_price", 80);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 80));
		
		localStorage.setItem("masonry_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("masonry_level")) == 1 && Number(localStorage.getItem("gold")) >= 120) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 40);
		var ms_time = now.getTime();
		localStorage.setItem("masonry_up_time", ms_time);
		
		localStorage.setItem("masonry_up_price", 120);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 120));
		
		localStorage.setItem("masonry_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("masonry_level")) == 2 && Number(localStorage.getItem("gold")) >= 240) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 80);
		var ms_time = now.getTime();
		localStorage.setItem("masonry_up_time", ms_time);
		
		localStorage.setItem("masonry_up_price", 240);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 240));
		
		localStorage.setItem("masonry_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("masonry_level")) == 3 && Number(localStorage.getItem("gold")) >= 500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 160);
		var ms_time = now.getTime();
		localStorage.setItem("masonry_up_time", ms_time);
		
		localStorage.setItem("masonry_up_price", 500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 500));
		
		localStorage.setItem("masonry_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("masonry_level")) == 4 && Number(localStorage.getItem("gold")) >= 800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 320);
		var ms_time = now.getTime();
		localStorage.setItem("masonry_up_time", ms_time);
		
		localStorage.setItem("masonry_up_price", 800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 800));
		
		localStorage.setItem("masonry_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("masonry_level")) == 5 && Number(localStorage.getItem("gold")) >= 1400) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1220);
		var ms_time = now.getTime();
		localStorage.setItem("masonry_up_time", ms_time);
		
		localStorage.setItem("masonry_up_price", 1400);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 1400));
		
		localStorage.setItem("masonry_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("masonry_level")) == 6 && Number(localStorage.getItem("gold")) >= 2000) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 1840);
		var ms_time = now.getTime();
		localStorage.setItem("masonry_up_time", ms_time);
		
		localStorage.setItem("masonry_up_price", 2000);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 2000));
		
		localStorage.setItem("masonry_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("masonry_level")) == 7 && Number(localStorage.getItem("gold")) >= 3200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 2720);
		var ms_time = now.getTime();
		localStorage.setItem("masonry_up_time", ms_time);
		
		localStorage.setItem("masonry_up_price", 3200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 3200));
		
		localStorage.setItem("masonry_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("masonry_level")) == 8 && Number(localStorage.getItem("gold")) >= 4800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 4540);
		var ms_time = now.getTime();
		localStorage.setItem("masonry_up_time", ms_time);
		
		localStorage.setItem("masonry_up_price", 4800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 4800));
		
		localStorage.setItem("masonry_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("masonry_level")) == 9 && Number(localStorage.getItem("gold")) >= 7200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 6620);
		var ms_time = now.getTime();
		localStorage.setItem("masonry_up_time", ms_time);
		
		localStorage.setItem("masonry_up_price", 7200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 7200));
		
		localStorage.setItem("masonry_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("masonry_level")) == 10 && Number(localStorage.getItem("gold")) >= 10800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 14740);
		var ms_time = now.getTime();
		localStorage.setItem("masonry_up_time", ms_time);
		
		localStorage.setItem("masonry_up_price", 10800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 10800));
		
		localStorage.setItem("masonry_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("masonry_level")) == 11 && Number(localStorage.getItem("gold")) >= 13500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 19220);
		var ms_time = now.getTime();
		localStorage.setItem("masonry_up_time", ms_time);
		
		localStorage.setItem("masonry_up_price", 13500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 13500));
		
		localStorage.setItem("masonry_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("masonry_level")) == 12 && Number(localStorage.getItem("gold")) >= 16900) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 24340);
		var ms_time = now.getTime();
		localStorage.setItem("masonry_up_time", ms_time);
		
		localStorage.setItem("masonry_up_price", 16900);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 16900));
		
		localStorage.setItem("masonry_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("masonry_level")) == 13 && Number(localStorage.getItem("gold")) >= 21100) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 29720);
		var ms_time = now.getTime();
		localStorage.setItem("masonry_up_time", ms_time);
		
		localStorage.setItem("masonry_up_price", 21100);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 21100));
		
		localStorage.setItem("masonry_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("masonry_level")) == 14 && Number(localStorage.getItem("gold")) >= 23200) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 35740);
		var ms_time = now.getTime();
		localStorage.setItem("masonry_up_time", ms_time);
		
		localStorage.setItem("masonry_up_price", 23200);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 23200));
		
		localStorage.setItem("masonry_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("masonry_level")) == 15 && Number(localStorage.getItem("gold")) >= 25500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 64820);
		var ms_time = now.getTime();
		localStorage.setItem("masonry_up_time", ms_time);
		
		localStorage.setItem("masonry_up_price", 25500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 25500));
		
		localStorage.setItem("masonry_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("masonry_level")) == 16 && Number(localStorage.getItem("gold")) >= 28800) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 73240);
		var ms_time = now.getTime();
		localStorage.setItem("masonry_up_time", ms_time);
		
		localStorage.setItem("masonry_up_price", 28800);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 28800));
		
		localStorage.setItem("masonry_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("masonry_level")) == 17 && Number(localStorage.getItem("gold")) >= 34500) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 82510);
		var ms_time = now.getTime();
		localStorage.setItem("masonry_up_time", ms_time);
		
		localStorage.setItem("masonry_up_price", 34500);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 34500));
		
		localStorage.setItem("masonry_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("masonry_level")) == 18 && Number(localStorage.getItem("gold")) >= 45300) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 91840);
		var ms_time = now.getTime();
		localStorage.setItem("masonry_up_time", ms_time);
		
		localStorage.setItem("masonry_up_price", 45300);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 45300));
		
		localStorage.setItem("masonry_upper", "on");
		
		location.reload();
		
	} else if (Number(localStorage.getItem("masonry_level")) == 19 && Number(localStorage.getItem("gold")) >= 50150) {
		
		var now = new Date();
		var new_time = now.setSeconds(now.getSeconds() + 103520);
		var ms_time = now.getTime();
		localStorage.setItem("masonry_up_time", ms_time);
		
		localStorage.setItem("masonry_up_price", 50150);
		
		localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) + 50150));
		
		localStorage.setItem("masonry_upper", "on");
		
		location.reload();
		
	}
	
}

function masonry_up_cancel() {
	
	localStorage.setItem("gold_cash", Math.floor(Number(localStorage.getItem("gold_cash")) - Number(localStorage.getItem("masonry_up_price"))));
	
	localStorage.removeItem("farming_upper");
	localStorage.removeItem("farming_up_time");
	localStorage.removeItem("lumbering_upper");
	localStorage.removeItem("lumbering_up_time");
	localStorage.removeItem("mining_upper");
	localStorage.removeItem("mining_up_time");
	localStorage.removeItem("blacksmithing_upper");
	localStorage.removeItem("blacksmithing_up_time");
	localStorage.removeItem("riding_upper");
	localStorage.removeItem("riding_up_time");
	localStorage.removeItem("geometry_upper");
	localStorage.removeItem("geometry_up_time");
	localStorage.removeItem("cartography_upper");
	localStorage.removeItem("cartography_up_time");
	localStorage.removeItem("spying_upper");
	localStorage.removeItem("spying_up_time");
	localStorage.removeItem("masonry_upper");
	localStorage.removeItem("masonry_up_time");
	
	location.reload();
	
}

setInterval(function(){
	
	if (localStorage.getItem("masonry_upper") == "on") {
		
		document.getElementById("build_right1").style.display = "none";
		document.getElementById("build_right2").style.display = "none";
		document.getElementById("build_right3").style.display = "none";
		document.getElementById("build_right4").style.display = "none";
		document.getElementById("build_right5").style.display = "none";
		document.getElementById("build_right6").style.display = "none";
		document.getElementById("build_right7").style.display = "none";
		document.getElementById("build_right8").style.display = "none";
		document.getElementById("build_right9").style.display = "none";
		document.getElementById("build_upper1").style.display = "block";
		document.getElementById("build_upper2").style.display = "block";
		document.getElementById("build_upper3").style.display = "block";
		document.getElementById("build_upper4").style.display = "block";
		document.getElementById("build_upper5").style.display = "block";
		document.getElementById("build_upper6").style.display = "block";
		document.getElementById("build_upper7").style.display = "block";
		document.getElementById("build_upper8").style.display = "block";
		document.getElementById("build_upper9").style.display = "block";
		
		document.getElementById("build_up_board2").style.display = "none";
		document.getElementById("build_up_board3").style.display = "none";
		document.getElementById("build_up_board4").style.display = "none";
		document.getElementById("build_up_board5").style.display = "none";
		document.getElementById("build_up_board6").style.display = "none";
		document.getElementById("build_up_board7").style.display = "none";
		document.getElementById("build_up_board8").style.display = "none";
		document.getElementById("build_up_board1").style.display = "none";
		
		var fa_ms = Math.floor(Number(localStorage.getItem("masonry_up_time")) - Date.now());
		var fa_s = Math.floor(fa_ms / 1000);
		var fa_m = Math.floor(fa_s / 60);
		fa_s = fa_s % 60;
		var fa_h = Math.floor(fa_m / 60);
		fa_m = fa_m % 60;
		var fa_d = Math.floor(fa_h / 24);
		fa_h = fa_h % 24;
		
		fa_d = fa_d.toString().padStart(2, "0");
		fa_h = fa_h.toString().padStart(2, "0");
		fa_m = fa_m.toString().padStart(2, "0");
		fa_s = fa_s.toString().padStart(2, "0");
		
		document.getElementById("masonry_up_d").innerText = fa_d;
		document.getElementById("masonry_up_h").innerText = fa_h;
		document.getElementById("masonry_up_m").innerText = fa_m;
		document.getElementById("masonry_up_s").innerText = fa_s;
		
		if (Math.floor(Number(localStorage.getItem("masonry_up_time")) - Date.now()) < 0) {
		
		localStorage.removeItem("masonry_upper");
		localStorage.removeItem("masonry_up_time");
		
		document.getElementById("build_right1").style.display = "block";
		document.getElementById("build_right2").style.display = "block";
		document.getElementById("build_right3").style.display = "block";
		document.getElementById("build_right4").style.display = "block";
		document.getElementById("build_right5").style.display = "block";
		document.getElementById("build_right6").style.display = "block";
		document.getElementById("build_right7").style.display = "block";
		document.getElementById("build_right8").style.display = "block";
		document.getElementById("build_right9").style.display = "block";
		document.getElementById("build_upper1").style.display = "none";
		document.getElementById("build_upper2").style.display = "none";
		document.getElementById("build_upper3").style.display = "none";
		document.getElementById("build_upper4").style.display = "none";
		document.getElementById("build_upper5").style.display = "none";
		document.getElementById("build_upper6").style.display = "none";
		document.getElementById("build_upper7").style.display = "none";
		document.getElementById("build_upper8").style.display = "none";
		document.getElementById("build_upper9").style.display = "none";
		
		localStorage.setItem("masonry_level", Math.floor(Number(localStorage.getItem("masonry_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
		location.reload();
		}
		
		
	}
	
	
}, 10);

setInterval(function(){
	
	document.getElementById("masonry_level").innerText = localStorage.getItem("masonry_level");
	if (Number(localStorage.getItem("masonry_level")) != 20) {
	document.getElementById("masonry_next_level").innerText = Math.floor(Number(localStorage.getItem("masonry_level")) + 1);
	} else if (Number(localStorage.getItem("masonry_level")) == 20) {
		document.getElementById("masonry_next_level").innerText = "Max";
	}
	
}, 10);

function masonry_up_speed_up() {
	if (Number(localStorage.getItem("diamond")) >= 50) {
		
		localStorage.setItem("diamond_cash", Math.floor(Number(localStorage.getItem("diamond_cash")) + 50));
		
		localStorage.setItem("masonry_level", Math.floor(Number(localStorage.getItem("masonry_level")) + 1));
		localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
		localStorage.removeItem("masonry_upper");
		localStorage.removeItem("masonry_up_time");
		
		location.reload();
		
	}
}

setInterval(function() {
	
	if (Number(localStorage.getItem("age")) < 3) {
		document.getElementById("build_right4").style.display = "none";
		document.getElementById("build_right5").style.display = "none";
		document.getElementById("build_right6").style.display = "none";
		document.getElementById("build_right7").style.display = "none";
		document.getElementById("build_right8").style.display = "none";
		document.getElementById("build_right9").style.display = "none";
	} else if (Number(localStorage.getItem("age")) < 4) {
		document.getElementById("build_right7").style.display = "none";
		document.getElementById("build_right8").style.display = "none";
		document.getElementById("build_right9").style.display = "none";
	}
	
}, 5);

/* Castle */

setInterval(function(){
	if (localStorage.getItem("castle_upper") == "on" || localStorage.getItem("knight_upper") == "on" || localStorage.getItem("imperial_spearman_upper") == "on" || localStorage.getItem("imperial_spearman_producer") == "on" || localStorage.getItem("knight_producer") == "on") {
		
		if (localStorage.getItem("castle_upper") == "on") {
			
		 if (localStorage.getItem("castle_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("castle_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("castle_upper");
		    localStorage.removeItem("castle_up_time");
		
		    localStorage.setItem("castle_level", Math.floor(Number(localStorage.getItem("castle_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 50));
		
			}
		 }
		
		} else if (localStorage.getItem("knight_upper") == "on") {
			
		 if (localStorage.getItem("knight_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("knight_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("knight_upper");
		    localStorage.removeItem("knight_up_time");
		
		    localStorage.setItem("knight_level", Math.floor(Number(localStorage.getItem("knight_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 6));
		
			}
		 }
		
		} else if (localStorage.getItem("imperial_spearman_upper") == "on") {
			
		 if (localStorage.getItem("imperial_spearman_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("imperial_spearman_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("imperial_spearman_upper");
		    localStorage.removeItem("imperial_spearman_up_time");
		
		    localStorage.setItem("imperial_spearman_level", Math.floor(Number(localStorage.getItem("imperial_spearman_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 6));
		
			}
		 }
		
		} else if (localStorage.getItem("imperial_spearman_producer") == "on") {
			
		 if (localStorage.getItem("imperial_spearman_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("imperial_spearman_produce_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("imperial_spearman_producer");
		    localStorage.removeItem("imperial_spearman_produce_time");
		
		    localStorage.setItem("imperial_spearman_have", Math.floor(Number(localStorage.getItem("imperial_spearman_have")) + Number(localStorage.getItem("imperial_spearman_trained"))));
			localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) + Number(localStorage.getItem("imperial_spearman_trained"))));
			localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) + Number(localStorage.getItem("imperial_spearman_trained"))));
			
			localStorage.removeItem("imperial_spearman_trained");
	
			}
		 }
		
		} else if (localStorage.getItem("knight_producer") == "on") {
		
		 if (localStorage.getItem("knight_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("knight_produce_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("knight_producer");
		    localStorage.removeItem("knight_produce_time");
		
		    localStorage.setItem("knight_have", Math.floor(Number(localStorage.getItem("knight_have")) + Number(localStorage.getItem("knight_trained"))));
			localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) + Number(localStorage.getItem("knight_trained"))));
			localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) + Number(localStorage.getItem("knight_trained"))));
			
			localStorage.removeItem("knight_trained");
		
			}
		 }
		
		}
		
	}
}, 10);

/* wall */

setInterval(function() {
	if (localStorage.getItem("wall_upper") == "on" || localStorage.getItem("watchtower_upper") == "on" || localStorage.getItem("watchtower_producer") == "on") {
		
		if (localStorage.getItem("wall_upper") == "on") {
			
		 if (localStorage.getItem("wall_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("wall_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("wall_upper");
		    localStorage.removeItem("wall_up_time");
		
		    localStorage.setItem("wall_level", Math.floor(Number(localStorage.getItem("wall_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 50));
		
			}
		 }
		
		} else if (localStorage.getItem("watchtower_upper") == "on") {
			
		 if (localStorage.getItem("watchtower_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("watchtower_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("watchtower_upper");
		    localStorage.removeItem("watchtower_up_time");
		
		    localStorage.setItem("watchtower_level", Math.floor(Number(localStorage.getItem("watchtower_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 40));
		
			}
		 }
		
		} else if (localStorage.getItem("watchtower_producer") == "on") {
			
		 if (localStorage.getItem("watchtower_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("watchtower_produce_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("watchtower_producer");
		    localStorage.removeItem("watchtower_produce_time");
		
		    localStorage.setItem("watchtower_have", Math.floor(Number(localStorage.getItem("watchtower_have")) + Number(localStorage.getItem("watchtower_trained"))));
		
			}
		 }
		
		}
		
	}

}, 10);

/* workshop */

setInterval(function() {
	if (localStorage.getItem("ballista_upper") == "on" || localStorage.getItem("ballista_producer") == "on" || localStorage.getItem("onager_upper") == "on" || localStorage.getItem("onager_producer") == "on" || localStorage.getItem("cannon_upper") == "on" || localStorage.getItem("cannon_producer") == "on") {
		
		if (localStorage.getItem("ballista_upper") == "on") {
			
		 if (localStorage.getItem("ballista_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("ballista_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("ballista_upper");
		    localStorage.removeItem("ballista_up_time");
		
		    localStorage.setItem("ballista_level", Math.floor(Number(localStorage.getItem("ballista_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 40));
		
			}
		 }
		
		} else if (localStorage.getItem("ballista_producer") == "on") {
			
		 if (localStorage.getItem("ballista_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("ballista_produce_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("ballista_producer");
		    localStorage.removeItem("ballista_produce_time");
		
		    localStorage.setItem("ballista_have", Math.floor(Number(localStorage.getItem("ballista_have")) + Number(localStorage.getItem("ballista_trained"))));
			localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) + Number(localStorage.getItem("ballista_trained"))));
			localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) + Number(localStorage.getItem("ballista_trained"))));
		
			}
		 }
		
		} else if (localStorage.getItem("onager_upper") == "on") {
			
	     if (localStorage.getItem("onager_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("onager_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("onager_upper");
		    localStorage.removeItem("onager_up_time");
		
		    localStorage.setItem("onager_level", Math.floor(Number(localStorage.getItem("onager_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 40));
		
			}
		 }
		
		} else if (localStorage.getItem("onager_producer") == "on") {
			
		 if (localStorage.getItem("onager_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("onager_produce_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("onager_producer");
		    localStorage.removeItem("onager_produce_time");
		
		    localStorage.setItem("onager_have", Math.floor(Number(localStorage.getItem("onager_have")) + Number(localStorage.getItem("onager_trained"))));
			localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) + Number(localStorage.getItem("onager_trained"))));
			localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) + Number(localStorage.getItem("onager_trained"))));
		
			}
		 }
		
		} else if (localStorage.getItem("cannon_upper") == "on") {
			
		 if (localStorage.getItem("cannon_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("cannon_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("cannon_upper");
		    localStorage.removeItem("cannon_up_time");
		
		    localStorage.setItem("cannon_level", Math.floor(Number(localStorage.getItem("cannon_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 40));
		
			}
		 }
		
		} else if (localStorage.getItem("cannon_producer") == "on") {
			
		 if (localStorage.getItem("cannon_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("cannon_produce_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("cannon_producer");
		    localStorage.removeItem("cannon_produce_time");
		
		    localStorage.setItem("cannon_have", Math.floor(Number(localStorage.getItem("cannon_have")) + Number(localStorage.getItem("cannon_trained"))));
			localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) + Number(localStorage.getItem("cannon_trained"))));
			localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) + Number(localStorage.getItem("cannon_trained"))));
		
			}
		 }
		
		}
		
	}

}, 10);

/* market */

setInterval(function() {
	if (localStorage.getItem("trade_cart_upper") == "on" || localStorage.getItem("trade_cart_producer") == "on") {
		
		if (localStorage.getItem("trade_cart_upper") == "on") {
			
		 if (localStorage.getItem("trade_cart_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("trade_cart_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("trade_cart_upper");
		    localStorage.removeItem("trade_cart_up_time");
		
		    localStorage.setItem("trade_cart_level", Math.floor(Number(localStorage.getItem("trade_cart_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 50));
		
			}
		 }
		
		} else if (localStorage.getItem("trade_cart_producer") == "on") {
			
		 if (localStorage.getItem("trade_cart_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("trade_cart_produce_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("trade_cart_producer");
		    localStorage.removeItem("trade_cart_produce_time");
		
		    localStorage.setItem("trade_cart_have", Math.floor(Number(localStorage.getItem("trade_cart_have")) + Number(localStorage.getItem("trade_cart_trained"))));
		
			}
		 }
		
		}
		
	}
	
}, 10);

/* barracks */

setInterval(function() {
	if (localStorage.getItem("spearman_upper") == "on" || localStorage.getItem("spearman_producer") == "on" || localStorage.getItem("archer_upper") == "on" || localStorage.getItem("archer_producer") == "on" || localStorage.getItem("spy_upper") == "on" || localStorage.getItem("spy_producer") == "on" || localStorage.getItem("cataphract_upper") == "on" || localStorage.getItem("cataphract_producer") == "on" || localStorage.getItem("swordsmen_upper") == "on" || localStorage.getItem("swordsmen_producer") == "on" || localStorage.getItem("crossbowmen_upper") == "on" || localStorage.getItem("crossbowmen_producer") == "on" || localStorage.getItem("arquebusiers_upper") == "on" || localStorage.getItem("arquebusiers_producer") == "on") {
		
		if (localStorage.getItem("spearman_upper") == "on") {
			
		 if (localStorage.getItem("spearman_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("spearman_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("spearman_upper");
		    localStorage.removeItem("spearman_up_time");
		
		    localStorage.setItem("spearman_level", Math.floor(Number(localStorage.getItem("spearman_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 4));
		
			}
		 }
		
		} else if (localStorage.getItem("spearman_producer") == "on") {
			
		 if (localStorage.getItem("spearman_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("spearman_produce_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("spearman_producer");
		    localStorage.removeItem("spearman_produce_time");
		
		    localStorage.setItem("spearman_have", Math.floor(Number(localStorage.getItem("spearman_have")) + Number(localStorage.getItem("spearman_trained"))));
			localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) + Number(localStorage.getItem("spearman_trained"))));
			localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) + Number(localStorage.getItem("spearman_trained"))));
		
			}
		 }
		
		} else if (localStorage.getItem("archer_upper") == "on") {
			
		 if (localStorage.getItem("archer_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("archer_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("archer_upper");
		    localStorage.removeItem("archer_up_time");
		
		    localStorage.setItem("archer_level", Math.floor(Number(localStorage.getItem("archer_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 4));
		
			}
		 }
		
		} else if (localStorage.getItem("archer_producer") == "on") {
			
		 if (localStorage.getItem("archer_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("archer_produce_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("archer_producer");
		    localStorage.removeItem("archer_produce_time");
		
		    localStorage.setItem("archer_have", Math.floor(Number(localStorage.getItem("archer_have")) + Number(localStorage.getItem("archer_trained"))));
			localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) + Number(localStorage.getItem("archer_trained"))));
			localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) + Number(localStorage.getItem("archer_trained"))));
		
			}
		 }
		
		} else if (localStorage.getItem("spy_upper") == "on") {
			
		 if (localStorage.getItem("spy_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("spy_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("spy_upper");
		    localStorage.removeItem("spy_up_time");
		
		    localStorage.setItem("spy_level", Math.floor(Number(localStorage.getItem("spy_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 4));
		
			}
		 }
		
		} else if (localStorage.getItem("spy_producer") == "on") {
			
		 if (localStorage.getItem("spy_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("spy_produce_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("spy_producer");
		    localStorage.removeItem("spy_produce_time");
		
		    localStorage.setItem("spy_have", Math.floor(Number(localStorage.getItem("spy_have")) + Number(localStorage.getItem("spy_trained"))));
			localStorage.setItem("total_k_c_spy", Math.floor(Number(localStorage.getItem("total_k_c_spy")) + Number(localStorage.getItem("spy_trained"))));
			localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) + Number(localStorage.getItem("spy_trained"))));
		
			}
		 }
		
		} else if (localStorage.getItem("cataphract_upper") == "on") {
			
		 if (localStorage.getItem("cataphract_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("cataphract_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("cataphract_upper");
		    localStorage.removeItem("cataphract_up_time");
		
		    localStorage.setItem("cataphract_level", Math.floor(Number(localStorage.getItem("cataphract_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 4));
		
			}
		 }
		
		} else if (localStorage.getItem("cataphract_producer") == "on") {
			
		 if (localStorage.getItem("cataphract_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("cataphract_produce_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("cataphract_producer");
		    localStorage.removeItem("cataphract_produce_time");
		
		    localStorage.setItem("cataphract_have", Math.floor(Number(localStorage.getItem("cataphract_have")) + Number(localStorage.getItem("cataphract_trained"))));
			localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) + Number(localStorage.getItem("cataphract_trained"))));
			localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) + Number(localStorage.getItem("cataphract_trained"))));
		
			}
		 }
		
		} else if (localStorage.getItem("swordsmen_upper") == "on") {
			
		 if (localStorage.getItem("swordsmen_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("swordsmen_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("swordsmen_upper");
		    localStorage.removeItem("swordsmen_up_time");
		
		    localStorage.setItem("swordsmen_level", Math.floor(Number(localStorage.getItem("swordsmen_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 4));
		
			}
		 }
		
		} else if (localStorage.getItem("swordsmen_producer") == "on") {
			
		 if (localStorage.getItem("swordsmen_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("swordsmen_produce_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("swordsmen_producer");
		    localStorage.removeItem("swordsmen_produce_time");
		
		    localStorage.setItem("swordsmen_have", Math.floor(Number(localStorage.getItem("swordsmen_have")) + Number(localStorage.getItem("swordsmen_trained"))));
			localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) + Number(localStorage.getItem("swordsmen_trained"))));
			localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) + Number(localStorage.getItem("swordsmen_trained"))));
		
			}
		 }
		
		} else if (localStorage.getItem("crossbowmen_upper") == "on") {
			
		 if (localStorage.getItem("crossbowmen_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("crossbowmen_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("crossbowmen_upper");
		    localStorage.removeItem("crossbowmen_up_time");
		
		    localStorage.setItem("crossbowmen_level", Math.floor(Number(localStorage.getItem("crossbowmen_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 4));
		
			}
		 }
		
		} else if (localStorage.getItem("crossbowmen_producer") == "on") {
			
		 if (localStorage.getItem("crossbowmen_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("crossbowmen_produce_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("crossbowmen_producer");
		    localStorage.removeItem("crossbowmen_produce_time");
		
		    localStorage.setItem("crossbowmen_have", Math.floor(Number(localStorage.getItem("crossbowmen_have")) + Number(localStorage.getItem("crossbowmen_trained"))));
			localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) + Number(localStorage.getItem("crossbowmen_trained"))));
			localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) + Number(localStorage.getItem("crossbowmen_trained"))));
		
			}
		 }
		
		} else if (localStorage.getItem("arquebusiers_upper") == "on") {
			
		 if (localStorage.getItem("arquebusiers_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("arquebusiers_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("arquebusiers_upper");
		    localStorage.removeItem("arquebusiers_up_time");
		
		    localStorage.setItem("arquebusiers_level", Math.floor(Number(localStorage.getItem("arquebusiers_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 4));
		
			}
		 }
		
		} else if (localStorage.getItem("arquebusiers_producer") == "on") {
			
		 if (localStorage.getItem("arquebusiers_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("arquebusiers_produce_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("arquebusiers_producer");
		    localStorage.removeItem("arquebusiers_produce_time");
		
		    localStorage.setItem("arquebusiers_have", Math.floor(Number(localStorage.getItem("arquebusiers_have")) + Number(localStorage.getItem("arquebusiers_trained"))));
			localStorage.setItem("total_k_c_troops", Math.floor(Number(localStorage.getItem("total_k_c_troops")) + Number(localStorage.getItem("arquebusiers_trained"))));
			localStorage.setItem("minus_food", Math.floor(Number(localStorage.getItem("minus_food")) + Number(localStorage.getItem("arquebusiers_trained"))));
		
			}
		 }
		
		}
		
	}
	
}, 10);

/* village */

setInterval(function() {
	if (localStorage.getItem("farmer_upper") == "on" || localStorage.getItem("farmer_producer") == "on" || localStorage.getItem("woodcutter_upper") == "on" || localStorage.getItem("woodcutter_producer") == "on" || localStorage.getItem("gold_miner_upper") == "on" || localStorage.getItem("gold_miner_producer") == "on") {
		
		if (localStorage.getItem("farmer_upper") == "on") {
			
		 if (localStorage.getItem("farmer_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("farmer_up_time")) - Date.now()) < 0) {
				
			localStorage.setItem("farmer_level", Math.floor(Number(localStorage.getItem("farmer_level")) + 1));
			
		    var p_food = Math.floor(((Number(localStorage.getItem("farmer_level")) * 3) * Number(localStorage.getItem("farmer_have"))) + (30 * Number(localStorage.getItem("farmer_have"))) + 100);
		    localStorage.setItem("plus_food", p_food);
			
		    var current = Date.now();
		    var elapsedTime = Math.floor((current - localStorage.getItem("food_timer")) / 3600000);
		    var food_t = Math.floor(Number(elapsedTime) * ((((Number(localStorage.getItem("plus_food")) * (Number(localStorage.getItem("farming_level")) + 100 + Number(localStorage.getItem("farmer_b_f")))) / 100) - Number(localStorage.getItem("minus_food"))) - 3 * Number(localStorage.getItem("farmer_have"))));
		    var plusplus = Math.floor(Number(localStorage.getItem("last_food_cash")) + Number(food_t));
		    localStorage.setItem("last_food_cash", plusplus);
		    localStorage.setItem("food_timer", current);
		
		    localStorage.removeItem("farmer_upper");
		    localStorage.removeItem("farmer_up_time");
		
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 4));
		
			}
		 }
		
		} else if (localStorage.getItem("farmer_producer") == "on") {
			
		 if (localStorage.getItem("farmer_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("farmer_produce_time")) - Date.now()) < 0) {
				
			localStorage.setItem("farmer_have", Math.floor(Number(localStorage.getItem("farmer_have")) + Number(localStorage.getItem("farmer_trained"))));
			
			var p_food = Math.floor(((Number(localStorage.getItem("farmer_level")) * 3) * Number(localStorage.getItem("farmer_have"))) + (30 * Number(localStorage.getItem("farmer_have"))) + 100);
		    localStorage.setItem("plus_food", p_food);
			
		    var current = Date.now();
	        var elapsedTime = Math.floor((current - localStorage.getItem("food_timer")) / 3600000);
	        var food_t = Math.floor(Number(elapsedTime) * ((((Number(localStorage.getItem("plus_food")) * (Number(localStorage.getItem("farming_level")) + 100 + Number(localStorage.getItem("farmer_b_f")))) / 100) - Number(localStorage.getItem("minus_food"))) - (Number(localStorage.getItem("farmer_trained")) * 30 + (Number(localStorage.getItem("farmer_trained")) * (Number(localStorage.getItem("farmer_level")) * 3)))));
	        var plusplus = Math.floor(Number(localStorage.getItem("last_food_cash")) + Number(food_t));
	        localStorage.setItem("last_food_cash", plusplus);
	        localStorage.setItem("food_timer", current);
		
		    localStorage.removeItem("farmer_producer");
		    localStorage.removeItem("farmer_produce_time");
		
			}
		 }
		
		} else if (localStorage.getItem("woodcutter_upper") == "on") {
			
		 if (localStorage.getItem("woodcutter_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("woodcutter_up_time")) - Date.now()) < 0) {
				
			localStorage.setItem("woodcutter_level", Math.floor(Number(localStorage.getItem("woodcutter_level")) + 1));
			
		    var p_wood = Math.floor(((Number(localStorage.getItem("woodcutter_level")) * 2) * Number(localStorage.getItem("woodcutter_have"))) + (20 * Number(localStorage.getItem("woodcutter_have"))));
		    localStorage.setItem("plus_wood", p_wood);
			
		    var current = Date.now();
		    var elapsedTime = Math.floor((current - localStorage.getItem("wood_timer")) / 3600000);
		    var wood_t = Math.floor(Number(elapsedTime) * (((Number(localStorage.getItem("plus_wood")) * (Number(localStorage.getItem("lumbering_level")) + 100 + Number(localStorage.getItem("woodcutter_b_f")))) / 100) - 2 * Number(localStorage.getItem("woodcutter_have"))));
		    var plusplus = Math.floor(Number(localStorage.getItem("last_wood_cash")) + Number(wood_t));
		    localStorage.setItem("last_wood_cash", plusplus);
		    localStorage.setItem("wood_timer", current);
		
		    localStorage.removeItem("woodcutter_upper");
		    localStorage.removeItem("woodcutter_up_time");
		
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 4));
		
			}
		 }
		
		} else if (localStorage.getItem("woodcutter_producer") == "on") {
			
		 if (localStorage.getItem("woodcutter_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("woodcutter_produce_time")) - Date.now()) < 0) {
				
			localStorage.setItem("woodcutter_have", Math.floor(Number(localStorage.getItem("woodcutter_have")) + Number(localStorage.getItem("woodcutter_trained"))));
			
	        var p_wood = Math.floor(((Number(localStorage.getItem("woodcutter_level")) * 2) * Number(localStorage.getItem("woodcutter_have"))) + (20 * Number(localStorage.getItem("woodcutter_have"))));
		    localStorage.setItem("plus_wood", p_wood);
			
		    var current = Date.now();
	        var elapsedTime = Math.floor((current - localStorage.getItem("wood_timer")) / 3600000);
	        var wood_t = Math.floor(Number(elapsedTime) * (((Number(localStorage.getItem("plus_wood")) * (Number(localStorage.getItem("lumbering_level")) + 100 + Number(localStorage.getItem("woodcutter_b_f")))) / 100) - (Number(localStorage.getItem("woodcutter_trained")) * 20 + (Number(localStorage.getItem("woodcutter_trained")) * (Number(localStorage.getItem("woodcutter_level")) * 2)))));
	        var plusplus = Math.floor(Number(localStorage.getItem("last_wood_cash")) + Number(wood_t));
	        localStorage.setItem("last_wood_cash", plusplus);
	        localStorage.setItem("wood_timer", current);
		
		    localStorage.removeItem("woodcutter_producer");
		    localStorage.removeItem("woodcutter_produce_time");
		
			}
		 }
		
		} else if (localStorage.getItem("gold_miner_upper") == "on") {
			
		 if (localStorage.getItem("gold_miner_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("gold_miner_up_time")) - Date.now()) < 0) {
				
			localStorage.setItem("gold_miner_level", Math.floor(Number(localStorage.getItem("gold_miner_level")) + 1));
			
		    var p_gold = Math.floor(((Number(localStorage.getItem("gold_miner_level")) * 1) * Number(localStorage.getItem("gold_miner_have"))) + (10 * Number(localStorage.getItem("gold_miner_have"))));
		    localStorage.setItem("plus_gold", p_gold);
		 	
		    var current = Date.now();
		    var elapsedTime = Math.floor((current - localStorage.getItem("gold_timer")) / 3600000);
		    var gold_t = Math.floor(Number(elapsedTime) * (((Number(localStorage.getItem("plus_gold")) * (Number(localStorage.getItem("mining_level")) + 100 + Number(localStorage.getItem("gold_miner_b_f")))) / 100) - 1 * Number(localStorage.getItem("gold_miner_have"))));
		    var plusplus = Math.floor(Number(localStorage.getItem("last_gold_cash")) + Number(gold_t));
		    localStorage.setItem("last_gold_cash", plusplus);
		    localStorage.setItem("gold_timer", current);
		
		    localStorage.removeItem("gold_miner_upper");
		    localStorage.removeItem("gold_miner_up_time");
		
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 4));
		
			}
		 }
		
		} else if (localStorage.getItem("gold_miner_producer") == "on") {
			
		 if (localStorage.getItem("gold_miner_produce_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("gold_miner_produce_time")) - Date.now()) < 0) {
				
			localStorage.setItem("gold_miner_have", Math.floor(Number(localStorage.getItem("gold_miner_have")) + Number(localStorage.getItem("gold_miner_trained"))));
			
	        var p_gold = Math.floor(((Number(localStorage.getItem("gold_miner_level")) * 1) * Number(localStorage.getItem("gold_miner_have"))) + (10 * Number(localStorage.getItem("gold_miner_have"))));
		    localStorage.setItem("plus_gold", p_gold);
		 	
		    var current = Date.now();
	        var elapsedTime = Math.floor((current - localStorage.getItem("gold_timer")) / 3600000);
	        var gold_t = Math.floor(Number(elapsedTime) * (((Number(localStorage.getItem("plus_gold")) * (Number(localStorage.getItem("mining_level")) + 100 + Number(localStorage.getItem("gold_miner_b_f")))) / 100) - (Number(localStorage.getItem("gold_miner_trained")) * 10 + (Number(localStorage.getItem("gold_miner_trained")) * (Number(localStorage.getItem("gold_miner_level")) * 1)))));
	        var plusplus = Math.floor(Number(localStorage.getItem("last_gold_cash")) + Number(gold_t));
	        localStorage.setItem("last_gold_cash", plusplus);
	        localStorage.setItem("gold_timer", current);
		
		    localStorage.removeItem("gold_miner_producer");
		    localStorage.removeItem("gold_miner_produce_time");
		
			}
		 }
		
		}
		
	}
	
}, 10);

/* boost */

setInterval(function() {
	if (localStorage.getItem("farmer_boost") == "on" || localStorage.getItem("woodcutter_boost") == "on" || localStorage.getItem("gold_miner_boost") == "on") {
		
		if (localStorage.getItem("farmer_boost") == "on") {
			
		if (localStorage.getItem("farmer_boost_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("farmer_boost_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("farmer_boost");
		    localStorage.removeItem("farmer_boost_time");
			
			var current = Date.now();
	        var elapsedTime = Math.floor((current - localStorage.getItem("food_timer")) / 3600000);
	        var food_t = Math.floor(Number(elapsedTime) * ((((Number(localStorage.getItem("plus_food")) * (Number(localStorage.getItem("farming_level")) + 100 + Number(localStorage.getItem("farmer_b_f")))) / 100) - Number(localStorage.getItem("minus_food")))));
	        var plusplus = Math.floor(Number(localStorage.getItem("last_food_cash")) + Number(food_t));
	        localStorage.setItem("last_food_cash", plusplus);
	        localStorage.setItem("food_timer", current);
		
		    localStorage.setItem("farmer_b_f", 0);
			
			location.reload();
		
			}
		 }
		
		} else if (localStorage.getItem("woodcutter_boost") == "on") {
			
		  if (localStorage.getItem("woodcutter_boost_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("woodcutter_boost_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("woodcutter_boost");
		    localStorage.removeItem("woodcutter_boost_time");
			
			var current = Date.now();
	        var elapsedTime = Math.floor((current - localStorage.getItem("wood_timer")) / 3600000);
	        var wood_t = Math.floor(Number(elapsedTime) * (((Number(localStorage.getItem("plus_wood")) * (Number(localStorage.getItem("lumbering_level")) + 100 + Number(localStorage.getItem("woodcutter_b_f")))) / 100)));
	        var plusplus = Math.floor(Number(localStorage.getItem("last_wood_cash")) + Number(wood_t));
	        localStorage.setItem("last_wood_cash", plusplus);
	        localStorage.setItem("wood_timer", current);
			
			localStorage.setItem("woodcutter_b_f", 0);
			
			location.reload();
		
			}
		 }
		
		} else if (localStorage.getItem("gold_miner_boost") == "on") {
			
		 if (localStorage.getItem("gold_miner_boost_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("gold_miner_boost_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("gold_miner_boost");
		    localStorage.removeItem("gold_miner_boost_time");
			
			var current = Date.now();
	        var elapsedTime = Math.floor((current - localStorage.getItem("gold_timer")) / 3600000);
	        var gold_t = Math.floor(Number(elapsedTime) * (((Number(localStorage.getItem("plus_gold")) * (Number(localStorage.getItem("mining_level")) + 100 + Number(localStorage.getItem("gold_miner_b_f")))) / 100)));
	        var plusplus = Math.floor(Number(localStorage.getItem("last_gold_cash")) + Number(gold_t));
	        localStorage.setItem("last_gold_cash", plusplus);
	        localStorage.setItem("gold_timer", current);
			
			localStorage.setItem("gold_miner_b_f", 0);
			
			location.reload();
		
			}
		 }
		
		}
		
	}
	
}, 10);

/* money */

function money(){
	
  var currentTime = new Date().getTime();
  
  var diamond = Math.floor((currentTime - localStorage.getItem("diamond_timer")) / 3600000);
  var timer_diamond = Math.floor(Number(diamond) * Number(localStorage.getItem("plus_diamond")));
  var diamond_reward = Math.floor(Number(timer_diamond) + 1000000 - Number(localStorage.getItem("diamond_cash")) + Number(localStorage.getItem("last_diamond_cash")));
  localStorage.setItem("diamond", diamond_reward);
  
  var gold = Math.floor((currentTime - localStorage.getItem("gold_timer")) / 3600000);
  var timer_gold = Math.floor(Number(gold) * ((Number(localStorage.getItem("plus_gold")) * (Number(localStorage.getItem("mining_level")) + 100 + Number(localStorage.getItem("gold_miner_b_f")))) / 100));
  var gold_reward = Math.floor(Number(timer_gold) + 10000000 - Number(localStorage.getItem("gold_cash")) + Number(localStorage.getItem("last_gold_cash")));
  localStorage.setItem("gold", gold_reward);
  
  var food = Math.floor((currentTime - localStorage.getItem("food_timer")) / 3600000);
  var timer_food = Math.floor(Number(food) * (((Number(localStorage.getItem("plus_food")) * (Number(localStorage.getItem("farming_level")) + 100 + Number(localStorage.getItem("farmer_b_f")))) / 100) - Number(localStorage.getItem("minus_food"))));
  var food_reward = Math.floor(Number(timer_food) + 10000000 - Number(localStorage.getItem("food_cash")) + Number(localStorage.getItem("last_food_cash")));
  localStorage.setItem("food", food_reward);
  
  var wood = Math.floor((currentTime - localStorage.getItem("wood_timer")) / 3600000);
  var timer_wood = Math.floor(Number(wood) * ((Number(localStorage.getItem("plus_wood")) * (Number(localStorage.getItem("lumbering_level")) + 100 + Number(localStorage.getItem("woodcutter_b_f")))) / 100));
  var wood_reward = Math.floor(Number(timer_wood) + 10000000 - Number(localStorage.getItem("wood_cash")) + Number(localStorage.getItem("last_wood_cash")));
  localStorage.setItem("wood", wood_reward);
  
}

setInterval(money, 10);

/* defense bonus */

setInterval(function(){
	
	var results = (localStorage.getItem("castle_level") * 2) + (localStorage.getItem("wall_level") * 2) + ((Number(localStorage.getItem("watchtower_level")) * 0.1 + 1) * localStorage.getItem("watchtower_have"));
	results = Math.round(results * 100) / 100;
	localStorage.setItem("defense_bonus", results);
	
}, 10);
