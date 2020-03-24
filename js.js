function RefreshWindow()
{
         window.location.reload(true);
}

window.alert("Se questo è il primo utilizzo, continuare a cliccare 'OK' fino all'apparsa delle istruzioni")

var x = prompt("Inserire il primo numero","Primo numero")*1;
var op = prompt("Inserire l'operatore","Operatore");
var y = prompt("Inserire il secondo numero","Secondo numero")*1;

if ( op == "+") {
    var result = x + y;
    window.alert("Il risultato è: "+result);
}
else if ( op == "-") {
    var result = x - y;
    window.alert("Il risultato è: "+result);
}
else if ( op == "*") {
    var result = x * y;
    window.alert("Il risultato è: "+result);
}
else if ( op == "^") {
	var result = 1*1;
    for (step = 0; step < y; step++) {
    	var result = result * x;
    }
    window.alert("Il risultato è: "+result);
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