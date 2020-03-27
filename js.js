function Calculator(){

	if (  sessionStorage.getItem("Already opened?") != "Yes" ) {
		window.alert("ISTRUZIONI PER L'USO DELLA CALCOLATRICE:\n\n• Utilizzare il punto in sostituzione alla virgola (10,5 → 10.5);\n\n• Quando richiesto, inserire il primo numero;\n\n• Quando richiesto, inserire l'operatore:\n\n+ → Addizione\n\n- → Sottrazione\n\n* → Moltiplicazione\n\n/ → Divisione\n\n^ → Potenza;\n\nradQ → Radice quadrata;\n\n• Quando richiesto, inserire il secondo numero;\n\nN.B.: In caso di potenza il primo numero rappresenta la base e il secondo numero rappresenta l'esponente.");
	}

	sessionStorage.setItem("Already opened?", "Yes");

	var x = prompt("Inserire il primo numero")*1;
	var op = prompt("Inserire l'operatore");
	
	if ( op == "+") {
		var y = prompt("Inserire il secondo numero")*1;
	    var result = x + y;
	    window.alert("Il risultato è: "+result);
	}
	else if ( op == "-") {
		var y = prompt("Inserire il secondo numero")*1;
	    var result = x - y;
	    window.alert("Il risultato è: "+result);
	}
	else if ( op == "*") {
		var y = prompt("Inserire il secondo numero")*1;
	    var result = x * y;
	    window.alert("Il risultato è: "+result);
	}
	else if ( op == "^") {
		var y = prompt("Inserire il secondo numero")*1;
		var result = 1*1;
	    for (step = 0; step < y; step++) {
	    	var result = result * x;
	    }
	    window.alert("Il risultato è: "+result);
	}
	else if ( op == "radQ") {
		if ( x >= 0) {
			var result = Math.sqrt(x);
	    	window.alert("Il risultato è: "+result);
		}
		else if (x < 0) {
			window.alert("La radice quadrata di un numero negativo non esiste");
		}
		else {
			window.alert("Il risultato è: NaN");
		}
	}
	else if ( op == "/") {
		if ( y != 0) {
	        var result = x / y;
	        window.alert("Il risultato è: "+result);
		}
		else {
			if ( x == 0) {
	            var result = 0;
	            window.alert("Il risultato è: "+result);
			} 
			else {
				var result = "Impossibile dividere un numero per 0";
			}
		}
	} 
	else {
		window.alert("Operatore non riconosciuto");
	}

	window.location.reload(true);
}