function Calculator(){

	if (  sessionStorage.getItem("Already opened?") != "Yes" ) {
		window.alert("ISTRUZIONI PER L'USO DELLA CALCOLATRICE:\n\n• Utilizzare il punto in sostituzione alla virgola (10,5 → 10.5);\n\n• Quando richiesto, inserire il primo numero;\n\n• Quando richiesto, inserire l'operatore:\n\n+ → Addizione\n\n- → Sottrazione\n\n* → Moltiplicazione\n\n/ → Divisione\n\n^ → Potenza;\n\nradQ → Radice quadrata;\n\n• Quando richiesto, inserire il secondo numero;\n\nN.B.: In caso di potenza il primo numero rappresenta la base e il secondo numero rappresenta l'esponente.");
	}

	sessionStorage.setItem("Already opened?", "Yes"); //salva un cookie con yes

	var x = prompt("Inserire il primo numero")*1;
	var op = prompt("Inserire l'operatore");
	
	if ( op == "+") { //somma
		var y = prompt("Inserire il secondo numero")*1;
	    var result = x + y;
	    window.alert("Il risultato è: "+result);
	}
	else if ( op == "-") { //sottrazione 
		var y = prompt("Inserire il secondo numero")*1;
	    var result = x - y;
	    window.alert("Il risultato è: "+result);
	}
	else if ( op == "*") { //moltiplicazione
		var y = prompt("Inserire il secondo numero")*1;
	    var result = x * y;
	    window.alert("Il risultato è: "+result);
	}
	else if ( op == "^") { //eleva a potenza 
		var y = prompt("Inserire il secondo numero")*1;
		var result = 1*1;
	    for (step = 0; step < y; step++) { //non so perche cetti usa i cicli
	    	var result = result * x;
	    }
	    window.alert("Il risultato è: "+result);
	}
	else if ( op == "sqrt") { //radice quadrata
		if ( x >= 0) { //verifica se esiste la radice
			var result = Math.sqrt(x);  //effettua la radice quad
	    	window.alert("Il risultato è: "+result);
		}
		else if (x < 0) { //verifica se esiste
			window.alert("La radice quadrata di un numero negativo non esiste");
		}
		else {
			window.alert("Il risultato è: NaN");
		}
	}
	else if ( op == "/") { //divisione
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

	window.location.reload(true); //reloadda la calcolatrice 
}
