function page_save() {
	if (localStorage.getItem("local_lan") == "en") {
		document.getElementById("lan_head_text").innerText = "Military";
		document.getElementById("top_button_text1").innerText = "Troops";
		document.getElementById("top_button_text2").innerText = "Support Troops";
		document.getElementById("m_head_text").innerText = "Own Places: ";
		document.getElementById("kingdom_center_text").innerText = "Kingdom Center";
		document.getElementById("army_unit_text").innerText = " Troops";
		document.getElementById("spy_text").innerText = " Spy";
		document.getElementById("own_places").innerText = Number(localStorage.getItem("own_places"));
		document.getElementById("establish_colony_text").innerText = "Establish Colony";
		
		if (Number(localStorage.getItem("age")) >= 2) {
			
			document.getElementById("establish_colony_div").style.display = "block";
			
		}
		
		var run_number = 0;
		
        setInterval(function() {
	        run_number += 0; run_number++
	           if(localStorage.getItem("content1_en_colony" + run_number + "") != null && run_number < 251) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number + "");
			    document.getElementById("colony" + run_number + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number + "_total_troops"));
		        document.getElementById("colony" + run_number + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number + "_total_spy"));
		        }
        }, 1);
		
		
		var run_number1 = 250;
		
        setInterval(function() {
	        run_number1 += 0; run_number1++
	           if(localStorage.getItem("content1_en_colony" + run_number1 + "") != null && run_number1 < 501) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number1 + "");
			    document.getElementById("colony" + run_number1 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number1 + "_total_troops"));
		        document.getElementById("colony" + run_number1 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number1 + "_total_spy"));
		        }
        }, 1);
		
		var run_number2 = 500;
		
        setInterval(function() {
	        run_number2 += 0; run_number2++
	           if(localStorage.getItem("content1_en_colony" + run_number2 + "") != null && run_number2 < 751) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number2 + "");
			    document.getElementById("colony" + run_number2 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number2 + "_total_troops"));
		        document.getElementById("colony" + run_number2 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number2 + "_total_spy"));
		        }
        }, 1);
		
		var run_number3 = 750;
		
        setInterval(function() {
	        run_number3 += 0; run_number3++
	           if(localStorage.getItem("content1_en_colony" + run_number3 + "") != null && run_number3 < 1001) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number3 + "");
			    document.getElementById("colony" + run_number3 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number3 + "_total_troops"));
		        document.getElementById("colony" + run_number3 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number3 + "_total_spy"));
		        }
        }, 1);
		
		var run_number4 = 1000;
		
        setInterval(function() {
	        run_number4 += 0; run_number4++
	           if(localStorage.getItem("content1_en_colony" + run_number4 + "") != null && run_number4 < 1251) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number4 + "");
			    document.getElementById("colony" + run_number4 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number4 + "_total_troops"));
		        document.getElementById("colony" + run_number4 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number4 + "_total_spy"));
		        }
        }, 1);
		
		var run_number5 = 1250;
		
        setInterval(function() {
	        run_number5 += 0; run_number5++
	           if(localStorage.getItem("content1_en_colony" + run_number5 + "") != null && run_number5 < 1501) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number5 + "");
			    document.getElementById("colony" + run_number5 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number5 + "_total_troops"));
		        document.getElementById("colony" + run_number5 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number5 + "_total_spy"));
		        }
        }, 1);
		
		var run_number6 = 1500;
		
        setInterval(function() {
	        run_number6 += 0; run_number6++
	           if(localStorage.getItem("content1_en_colony" + run_number6 + "") != null && run_number6 < 1751) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number6 + "");
			    document.getElementById("colony" + run_number6 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number6 + "_total_troops"));
		        document.getElementById("colony" + run_number6 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number6 + "_total_spy"));
		        }
        }, 1);
		
		var run_number7 = 1750;
		
        setInterval(function() {
	        run_number7 += 0; run_number7++
	           if(localStorage.getItem("content1_en_colony" + run_number7 + "") != null && run_number7 < 2001) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number7 + "");
			    document.getElementById("colony" + run_number7 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number7 + "_total_troops"));
		        document.getElementById("colony" + run_number7 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number7 + "_total_spy"));
		        }
        }, 1);
		
		var run_number8 = 2000;
		
        setInterval(function() {
	        run_number8 += 0; run_number8++
	           if(localStorage.getItem("content1_en_colony" + run_number8 + "") != null && run_number8 < 2251) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number8 + "");
			    document.getElementById("colony" + run_number8 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number8 + "_total_troops"));
		        document.getElementById("colony" + run_number8 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number8 + "_total_spy"));
		        }
        }, 1);
		
		var run_number9 = 2250;
		
        setInterval(function() {
	        run_number9 += 0; run_number9++
	           if(localStorage.getItem("content1_en_colony" + run_number9 + "") != null && run_number9 < 2501) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number9 + "");
			    document.getElementById("colony" + run_number9 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number9 + "_total_troops"));
		        document.getElementById("colony" + run_number9 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number9 + "_total_spy"));
		        }
        }, 1);
		
		var run_number10 = 2500;
		
        setInterval(function() {
	        run_number10 += 0; run_number10++
	           if(localStorage.getItem("content1_en_colony" + run_number10 + "") != null && run_number10 < 2751) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number10 + "");
			    document.getElementById("colony" + run_number10 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number10 + "_total_troops"));
		        document.getElementById("colony" + run_number10 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number10 + "_total_spy"));
		        }
        }, 1);
		
		var run_number11 = 2750;
		
        setInterval(function() {
	        run_number11 += 0; run_number11++
	           if(localStorage.getItem("content1_en_colony" + run_number11 + "") != null && run_number11 < 3001) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number11 + "");
			    document.getElementById("colony" + run_number11 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number11 + "_total_troops"));
		        document.getElementById("colony" + run_number11 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number11 + "_total_spy"));
		        }
        }, 1);
		
		var run_number12 = 3000;
		
        setInterval(function() {
	        run_number12 += 0; run_number12++
	           if(localStorage.getItem("content1_en_colony" + run_number12 + "") != null && run_number12 < 3251) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number12 + "");
			    document.getElementById("colony" + run_number12 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number12 + "_total_troops"));
		        document.getElementById("colony" + run_number12 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number12 + "_total_spy"));
		        }
        }, 1);
		
		var run_number13 = 3250;
		
        setInterval(function() {
	        run_number13 += 0; run_number13++
	           if(localStorage.getItem("content1_en_colony" + run_number13 + "") != null && run_number13 < 3501) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number13 + "");
			    document.getElementById("colony" + run_number13 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number13 + "_total_troops"));
		        document.getElementById("colony" + run_number13 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number13 + "_total_spy"));
		        }
        }, 1);
		
		var run_number14 = 3500;
		
        setInterval(function() {
	        run_number14 += 0; run_number14++
	           if(localStorage.getItem("content1_en_colony" + run_number14 + "") != null && run_number14 < 3751) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number14 + "");
			    document.getElementById("colony" + run_number14 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number14 + "_total_troops"));
		        document.getElementById("colony" + run_number14 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number14 + "_total_spy"));
		        }
        }, 1);
		
		var run_number15 = 3750;
		
        setInterval(function() {
	        run_number15 += 0; run_number15++
	           if(localStorage.getItem("content1_en_colony" + run_number15 + "") != null && run_number15 < 4001) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number15 + "");
			    document.getElementById("colony" + run_number15 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number15 + "_total_troops"));
		        document.getElementById("colony" + run_number15 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number15 + "_total_spy"));
		        }
        }, 1);
		
		var run_number16 = 4000;
		
        setInterval(function() {
	        run_number16 += 0; run_number16++
	           if(localStorage.getItem("content1_en_colony" + run_number16 + "") != null && run_number16 < 4251) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number16 + "");
			    document.getElementById("colony" + run_number16 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number16 + "_total_troops"));
		        document.getElementById("colony" + run_number16 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number16 + "_total_spy"));
		        }
        }, 1);
		
		var run_number17 = 4250;
		
        setInterval(function() {
	        run_number17 += 0; run_number17++
	           if(localStorage.getItem("content1_en_colony" + run_number17 + "") != null && run_number17 < 4501) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number17 + "");
			    document.getElementById("colony" + run_number17 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number17 + "_total_troops"));
		        document.getElementById("colony" + run_number17 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number17 + "_total_spy"));
		        }
        }, 1);
		
		var run_number18 = 4500;
		
        setInterval(function() {
	        run_number18 += 0; run_number18++
	           if(localStorage.getItem("content1_en_colony" + run_number18 + "") != null && run_number18 < 4751) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number18 + "");
			    document.getElementById("colony" + run_number18 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number18 + "_total_troops"));
		        document.getElementById("colony" + run_number18 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number18 + "_total_spy"));
		        }
        }, 1);
		
		var run_number19 = 4750;
		
        setInterval(function() {
	        run_number19 += 0; run_number19++
	           if(localStorage.getItem("content1_en_colony" + run_number19 + "") != null && run_number19 < 5001) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number19 + "");
			    document.getElementById("colony" + run_number19 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number19 + "_total_troops"));
		        document.getElementById("colony" + run_number19 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number19 + "_total_spy"));
		        }
        }, 1);
		
		var run_number20 = 5000;
		
        setInterval(function() {
	        run_number20 += 0; run_number20++
	           if(localStorage.getItem("content1_en_colony" + run_number20 + "") != null && run_number20 < 5251) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number20 + "");
			    document.getElementById("colony" + run_number20 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number20 + "_total_troops"));
		        document.getElementById("colony" + run_number20 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number20 + "_total_spy"));
		        }
        }, 1);
		
		var run_number21 = 5500;
		
        setInterval(function() {
	        run_number21 += 0; run_number21++
	           if(localStorage.getItem("content1_en_colony" + run_number21 + "") != null && run_number21 < 6001) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number21 + "");
			    document.getElementById("colony" + run_number21 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number21 + "_total_troops"));
		        document.getElementById("colony" + run_number21 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number21 + "_total_spy"));
		        }
        }, 1);
		
		var run_number22 = 6000;
		
        setInterval(function() {
	        run_number22 += 0; run_number22++
	           if(localStorage.getItem("content1_en_colony" + run_number22 + "") != null && run_number22 < 6501) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number22 + "");
			    document.getElementById("colony" + run_number22 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number22 + "_total_troops"));
		        document.getElementById("colony" + run_number22 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number22 + "_total_spy"));
		        }
        }, 1);
		
		var run_number23 = 6500;
		
        setInterval(function() {
	        run_number23 += 0; run_number23++
	           if(localStorage.getItem("content1_en_colony" + run_number23 + "") != null && run_number23 < 7001) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number23 + "");
			    document.getElementById("colony" + run_number23 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number23 + "_total_troops"));
		        document.getElementById("colony" + run_number23 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number23 + "_total_spy"));
		        }
        }, 1);
		
		var run_number24 = 7000;
		
        setInterval(function() {
	        run_number24 += 0; run_number24++
	           if(localStorage.getItem("content1_en_colony" + run_number24 + "") != null && run_number24 < 7501) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number24 + "");
			    document.getElementById("colony" + run_number24 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number24 + "_total_troops"));
		        document.getElementById("colony" + run_number24 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number24 + "_total_spy"));
		        }
        }, 1);
		
		var run_number25 = 7500;
		
        setInterval(function() {
	        run_number25 += 0; run_number25++
	           if(localStorage.getItem("content1_en_colony" + run_number25 + "") != null && run_number25 < 8001) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number25 + "");
			    document.getElementById("colony" + run_number25 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number25 + "_total_troops"));
		        document.getElementById("colony" + run_number25 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number25 + "_total_spy"));
		        }
        }, 1);
		
		var run_number26 = 8000;
		
        setInterval(function() {
	        run_number26 += 0; run_number26++
	           if(localStorage.getItem("content1_en_colony" + run_number26 + "") != null && run_number26 < 8501) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number26 + "");
			    document.getElementById("colony" + run_number26 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number26 + "_total_troops"));
		        document.getElementById("colony" + run_number26 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number26 + "_total_spy"));
		        }
        }, 1);
		
		var run_number27 = 8500;
		
        setInterval(function() {
	        run_number27 += 0; run_number27++
	           if(localStorage.getItem("content1_en_colony" + run_number27 + "") != null && run_number27 < 9001) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number27 + "");
			    document.getElementById("colony" + run_number27 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number27 + "_total_troops"));
		        document.getElementById("colony" + run_number27 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number27 + "_total_spy"));
		        }
        }, 1);
		
		var run_number28 = 9000;
		
        setInterval(function() {
	        run_number28 += 0; run_number28++
	           if(localStorage.getItem("content1_en_colony" + run_number28 + "") != null && run_number28 < 9501) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number28 + "");
			    document.getElementById("colony" + run_number28 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number28 + "_total_troops"));
		        document.getElementById("colony" + run_number28 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number28 + "_total_spy"));
		        }
        }, 1);
		
		var run_number29 = 9500;
		
        setInterval(function() {
	        run_number29 += 0; run_number29++
	           if(localStorage.getItem("content1_en_colony" + run_number29 + "") != null && run_number29 < 10001) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number29 + "");
			    document.getElementById("colony" + run_number29 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number29 + "_total_troops"));
		        document.getElementById("colony" + run_number29 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number29 + "_total_spy"));
		        }
        }, 1);
		
		var run_number30 = 10000;
		
        setInterval(function() {
	        run_number30 += 0; run_number30++
	           if(localStorage.getItem("content1_en_colony" + run_number30 + "") != null && run_number30 < 10501) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number30 + "");
			    document.getElementById("colony" + run_number30 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number30 + "_total_troops"));
		        document.getElementById("colony" + run_number30 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number30 + "_total_spy"));
		        }
        }, 1);
		
		var run_number31 = 10500;
		
        setInterval(function() {
	        run_number31 += 0; run_number31++
	           if(localStorage.getItem("content1_en_colony" + run_number31 + "") != null && run_number31 < 11001) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number31 + "");
			    document.getElementById("colony" + run_number31 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number31 + "_total_troops"));
		        document.getElementById("colony" + run_number31 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number31 + "_total_spy"));
		        }
        }, 1);
		
		var run_number32 = 11000;
		
        setInterval(function() {
	        run_number32 += 0; run_number32++
	           if(localStorage.getItem("content1_en_colony" + run_number32 + "") != null && run_number32 < 11501) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number32 + "");
			    document.getElementById("colony" + run_number32 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number32 + "_total_troops"));
		        document.getElementById("colony" + run_number32 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number32 + "_total_spy"));
		        }
        }, 1);
		
		var run_number33 = 11500;
		
        setInterval(function() {
	        run_number33 += 0; run_number33++
	           if(localStorage.getItem("content1_en_colony" + run_number33 + "") != null && run_number33 < 12001) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number33 + "");
			    document.getElementById("colony" + run_number33 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number33 + "_total_troops"));
		        document.getElementById("colony" + run_number33 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number33 + "_total_spy"));
		        }
        }, 1);
		
		var run_number34 = 12000;
		
        setInterval(function() {
	        run_number34 += 0; run_number34++
	           if(localStorage.getItem("content1_en_colony" + run_number34 + "") != null && run_number34 < 12501) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number34 + "");
			    document.getElementById("colony" + run_number34 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number34 + "_total_troops"));
		        document.getElementById("colony" + run_number34 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number34 + "_total_spy"));
		        }
        }, 1);
		
		var run_number35 = 12500;
		
        setInterval(function() {
	        run_number35 += 0; run_number35++
	           if(localStorage.getItem("content1_en_colony" + run_number35 + "") != null && run_number35 < 13001) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number35 + "");
			    document.getElementById("colony" + run_number35 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number35 + "_total_troops"));
		        document.getElementById("colony" + run_number35 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number35 + "_total_spy"));
		        }
        }, 1);
		
		var run_number36 = 13000;
		
        setInterval(function() {
	        run_number36 += 0; run_number36++
	           if(localStorage.getItem("content1_en_colony" + run_number36 + "") != null && run_number36 < 13501) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number36 + "");
			    document.getElementById("colony" + run_number36 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number36 + "_total_troops"));
		        document.getElementById("colony" + run_number36 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number36 + "_total_spy"));
		        }
        }, 1);
		
		var run_number37 = 13500;
		
        setInterval(function() {
	        run_number37 += 0; run_number37++
	           if(localStorage.getItem("content1_en_colony" + run_number37 + "") != null && run_number37 < 14001) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number37 + "");
			    document.getElementById("colony" + run_number37 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number37 + "_total_troops"));
		        document.getElementById("colony" + run_number37 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number37 + "_total_spy"));
		        }
        }, 1);
		
		var run_number38 = 14000;
		
        setInterval(function() {
	        run_number38 += 0; run_number38++
	           if(localStorage.getItem("content1_en_colony" + run_number38 + "") != null && run_number38 < 14501) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number38 + "");
			    document.getElementById("colony" + run_number38 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number38 + "_total_troops"));
		        document.getElementById("colony" + run_number38 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number38 + "_total_spy"));
		        }
        }, 1);
		
		var run_number39 = 14500;
		
        setInterval(function() {
	        run_number39 += 0; run_number39++
	           if(localStorage.getItem("content1_en_colony" + run_number39 + "") != null && run_number39 < 15001) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number39 + "");
			    document.getElementById("colony" + run_number39 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number39 + "_total_troops"));
		        document.getElementById("colony" + run_number39 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number39 + "_total_spy"));
		        }
        }, 1);
		
		var run_number40 = 15000;
		
        setInterval(function() {
	        run_number40 += 0; run_number40++
	           if(localStorage.getItem("content1_en_colony" + run_number40 + "") != null && run_number40 < 15501) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number40 + "");
			    document.getElementById("colony" + run_number40 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number40 + "_total_troops"));
		        document.getElementById("colony" + run_number40 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number40 + "_total_spy"));
		        }
        }, 1);
		
		var run_number41 = 15500;
		
        setInterval(function() {
	        run_number41 += 0; run_number41++
	           if(localStorage.getItem("content1_en_colony" + run_number41 + "") != null && run_number41 < 16001) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number41 + "");
			    document.getElementById("colony" + run_number41 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number41 + "_total_troops"));
		        document.getElementById("colony" + run_number41 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number41 + "_total_spy"));
		        }
        }, 1);
		
		var run_number42 = 16000;
		
        setInterval(function() {
	        run_number42 += 0; run_number42++
	           if(localStorage.getItem("content1_en_colony" + run_number42 + "") != null && run_number42 < 16501) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number42 + "");
			    document.getElementById("colony" + run_number42 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number42 + "_total_troops"));
		        document.getElementById("colony" + run_number42 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number42 + "_total_spy"));
		        }
        }, 1);
		
		var run_number43 = 16500;
		
        setInterval(function() {
	        run_number43 += 0; run_number43++
	           if(localStorage.getItem("content1_en_colony" + run_number43 + "") != null && run_number43 < 17001) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number43 + "");
			    document.getElementById("colony" + run_number43 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number43 + "_total_troops"));
		        document.getElementById("colony" + run_number43 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number43 + "_total_spy"));
		        }
        }, 1);
		
		var run_number44 = 17000;
		
        setInterval(function() {
	        run_number44 += 0; run_number44++
	           if(localStorage.getItem("content1_en_colony" + run_number44 + "") != null && run_number44 < 17501) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number44 + "");
			    document.getElementById("colony" + run_number44 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number44 + "_total_troops"));
		        document.getElementById("colony" + run_number44 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number44 + "_total_spy"));
		        }
        }, 1);
		
		var run_number45 = 17500;
		
        setInterval(function() {
	        run_number45 += 0; run_number45++
	           if(localStorage.getItem("content1_en_colony" + run_number45 + "") != null && run_number45 < 18001) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number45 + "");
			    document.getElementById("colony" + run_number45 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number45 + "_total_troops"));
		        document.getElementById("colony" + run_number45 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number45 + "_total_spy"));
		        }
        }, 1);
		
		var run_number46 = 18000;
		
        setInterval(function() {
	        run_number46 += 0; run_number46++
	           if(localStorage.getItem("content1_en_colony" + run_number46 + "") != null && run_number46 < 18226) {
		        document.getElementById("content_1").innerHTML +=  localStorage.getItem("content1_en_colony" + run_number46 + "");
			    document.getElementById("colony" + run_number46 + "_total_troops").innerText = Number(localStorage.getItem("colony" + run_number46 + "_total_troops"));
		        document.getElementById("colony" + run_number46 + "_total_spy").innerText = Number(localStorage.getItem("colony" + run_number46 + "_total_spy"));
		        }
        }, 1);
		
	}
	
	document.getElementById("center_total_troops").innerText = Number(localStorage.getItem("total_k_c_troops"));
	document.getElementById("center_total_spy").innerText = Number(localStorage.getItem("spy_have"));
	
	document.getElementById("loading").style.display = "none";
}

setInterval(function() {
	
	if (localStorage.getItem("colony_active") == "on") {
		
		document.getElementById("establish_colony_div").style.display = "none";
		
	}
	
}, 10);

function establish_colony() {
	
	if (localStorage.getItem("colony_active") == null) {
		
		localStorage.setItem("colony_active", "on");
		
		var fff = "'";
		var add_colony = '<div class="mn_div"><div class="mn_divs_head" onclick="localStorage.setItem(' + fff + 'random_cc_x' + fff + ', Math.floor(Number(localStorage.getItem(' + fff + 'random_castle_x' + fff + ')) - 2)); localStorage.setItem(' + fff + 'random_cc_y' + fff + ', Math.floor(Number(localStorage.getItem(' + fff + 'random_castle_y' + fff + ')) + 2)); location.href=' + fff + 'map.html' + fff + ';"><b style="color: blue; cursor: pointer;">Colony ' + localStorage.getItem("player_id") + '</b></div><div class="mn_div_in"><div class="mn_div_in_text"><b id="colony' + localStorage.getItem("player_id") + '_total_troops"></b><b> Troops</b></div><div class="mn_div_in_img" style="background-image: url(' + fff + 'images/next_icon.png' + fff + ');"></div></div><div class="mn_div_in"><div class="mn_div_in_text"><b id="colony' + localStorage.getItem("player_id") + '_total_spy"></b><b> Spy</b></div><div class="mn_div_in_img" style="background-image: url(' + fff + 'images/next_icon.png' + fff + ');"></div></div></div>';
		
		localStorage.setItem("colony" + localStorage.getItem("player_id") + "_total_troops", 0);
		localStorage.setItem("colony" + localStorage.getItem("player_id") + "_total_spy", 0);
		localStorage.setItem("content1_en_colony" + localStorage.getItem("player_id") + "", add_colony);
		localStorage.setItem("own_places", Math.floor(Number(localStorage.getItem("own_places")) + 1));
		localStorage.setItem("colony" + localStorage.getItem("player_id") + "_x", Math.floor(Number(localStorage.getItem("random_castle_x")) - 2));
		localStorage.setItem("colony" + localStorage.getItem("player_id") + "_y", Math.floor(Number(localStorage.getItem("random_castle_y")) + 2));
		
	}
	
}

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

/* academy */

setInterval(function(){
	
	if (localStorage.getItem("farming_upper") == "on" || localStorage.getItem("lumbering_upper") == "on" || localStorage.getItem("mining_upper") == "on" || localStorage.getItem("blacksmithing_upper") == "on" || localStorage.getItem("riding_upper") == "on" || localStorage.getItem("geometry_upper") == "on" || localStorage.getItem("cartography_upper") == "on" || localStorage.getItem("spying_upper") == "on" || localStorage.getItem("masonry_upper") == "on") {
		
		if (localStorage.getItem("farming_upper") == "on") {
			
         if (localStorage.getItem("farming_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("farming_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("farming_upper");
		    localStorage.removeItem("farming_up_time");
			
			var current = Date.now();
	        var elapsedTime = Math.floor((current - localStorage.getItem("food_timer")) / 3600000);
	        var food_t = Math.floor(Number(elapsedTime) * ((((Number(localStorage.getItem("plus_food")) * (Number(localStorage.getItem("farming_level")) + 100 + Number(localStorage.getItem("farmer_b_f")))) / 100) - Number(localStorage.getItem("minus_food")))));
	        var plusplus = Math.floor(Number(localStorage.getItem("last_food_cash")) + Number(food_t));
	        localStorage.setItem("last_food_cash", plusplus);
	        localStorage.setItem("food_timer", current);
		
		    localStorage.setItem("farming_level", Math.floor(Number(localStorage.getItem("farming_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
			}
		 }
		
		} else if (localStorage.getItem("lumbering_upper") == "on") {
        
		 if (localStorage.getItem("lumbering_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("lumbering_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("lumbering_upper");
		    localStorage.removeItem("lumbering_up_time");
			
			var current = Date.now();
	        var elapsedTime = Math.floor((current - localStorage.getItem("wood_timer")) / 3600000);
	        var wood_t = Math.floor(Number(elapsedTime) * (((Number(localStorage.getItem("plus_wood")) * (Number(localStorage.getItem("lumbering_level")) + 100 + Number(localStorage.getItem("woodcutter_b_f")))) / 100)));
	        var plusplus = Math.floor(Number(localStorage.getItem("last_wood_cash")) + Number(wood_t));
	        localStorage.setItem("last_wood_cash", plusplus);
	        localStorage.setItem("wood_timer", current);
		
		    localStorage.setItem("lumbering_level", Math.floor(Number(localStorage.getItem("lumbering_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
			}
		 }
		
		} else if (localStorage.getItem("mining_upper") == "on") {
			
		 if (localStorage.getItem("mining_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("mining_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("mining_upper");
		    localStorage.removeItem("mining_up_time");
			
			var current = Date.now();
	        var elapsedTime = Math.floor((current - localStorage.getItem("gold_timer")) / 3600000);
	        var gold_t = Math.floor(Number(elapsedTime) * (((Number(localStorage.getItem("plus_gold")) * (Number(localStorage.getItem("mining_level")) + 100 + Number(localStorage.getItem("gold_miner_b_f")))) / 100)));
	        var plusplus = Math.floor(Number(localStorage.getItem("last_gold_cash")) + Number(gold_t));
	        localStorage.setItem("last_gold_cash", plusplus);
	        localStorage.setItem("gold_timer", current);
		
		    localStorage.setItem("mining_level", Math.floor(Number(localStorage.getItem("mining_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
			}
		 }
		
		} else if (localStorage.getItem("blacksmithing_upper") == "on") {
			
		 if (localStorage.getItem("blacksmithing_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("blacksmithing_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("blacksmithing_upper");
		    localStorage.removeItem("blacksmithing_up_time");
		
		    localStorage.setItem("blacksmithing_level", Math.floor(Number(localStorage.getItem("blacksmithing_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
			}
		 }
		
		} else if (localStorage.getItem("riding_upper") == "on") {
			
		 if (localStorage.getItem("riding_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("riding_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("riding_upper");
		    localStorage.removeItem("riding_up_time");
		
		    localStorage.setItem("riding_level", Math.floor(Number(localStorage.getItem("riding_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
			}
		 }
		
		} else if (localStorage.getItem("geometry_upper") == "on") {
			
		 if (localStorage.getItem("geometry_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("geometry_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("geometry_upper");
		    localStorage.removeItem("geometry_up_time");
		
		    localStorage.setItem("geometry_level", Math.floor(Number(localStorage.getItem("geometry_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
			}
		 }
		
		} else if (localStorage.getItem("cartography_upper") == "on") {
			
		 if (localStorage.getItem("cartography_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("cartography_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("cartography_upper");
		    localStorage.removeItem("cartography_up_time");
		
		    localStorage.setItem("cartography_level", Math.floor(Number(localStorage.getItem("cartography_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
			}
		 }
		
		} else if (localStorage.getItem("spying_upper") == "on") {
			
		 if (localStorage.getItem("spying_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("spying_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("spying_upper");
		    localStorage.removeItem("spying_up_time");
		
		    localStorage.setItem("spying_level", Math.floor(Number(localStorage.getItem("spying_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
			}
		 }
		
		} else if (localStorage.getItem("masonry_upper") == "on") {
			
		 if (localStorage.getItem("masonry_up_time") != null) {
			
			if (Math.floor(Number(localStorage.getItem("masonry_up_time")) - Date.now()) < 0) {
		
		    localStorage.removeItem("masonry_upper");
		    localStorage.removeItem("masonry_up_time");
		
		    localStorage.setItem("masonry_level", Math.floor(Number(localStorage.getItem("masonry_level")) + 1));
			localStorage.setItem("age_points", Math.floor(Number(localStorage.getItem("age_points")) + 10));
		
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