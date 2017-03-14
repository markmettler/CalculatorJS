

var getal1=0;
var operator = ''; 

// clear function
function Clear(){
	
	location.reload(); //Deze functie herlaat de pagina waardoor het gehele scherm leeg wordt. 
	
}	




// Functie voor knoppen met verschillende cijfers. 

// functie knop 1  	
function Add0() {
	document.getElementById('display').innerHTML += '0'; 	// het getal 0 wordt toegevoegd aan het display wanneer hier op geklikt wordt. 
	
}

// functie knop 1  	
function Add1() {
	document.getElementById('display').innerHTML += '1'; 	// het getal 1 wordt toegevoegd aan het display wanneer hier op geklikt wordt. 
	
}			


// functie knop 2   
function Add2() {
	document.getElementById('display').innerHTML += '2';	// het getal 2 wordt toegevoegd aan het display wanneer hier op geklikt wordt. 
}			


// functie knop 3   
function Add3() {
	document.getElementById('display').innerHTML += '3';	// het getal 3 wordt toegevoegd aan het display wanneer hier op geklikt wordt. 
}			


// functie knop 4
function Add4() {
	document.getElementById('display').innerHTML += '4';	// het getal 4 wordt toegevoegd aan het display wanneer hier op geklikt wordt. 
}			


// functie knop 5
function Add5() {
	document.getElementById('display').innerHTML += '5';	// het getal 5 wordt toegevoegd aan het display wanneer hier op geklikt wordt. 
}

// functie knop 6
function Add6() {
	document.getElementById('display').innerHTML += '6';	// het getal 6 wordt toegevoegd aan het display wanneer hier op geklikt wordt. 
}


// functie knop 7
function Add7() {
	document.getElementById('display').innerHTML += '7';	// het getal 7 wordt toegevoegd aan het display wanneer hier op geklikt wordt. 
}


// functie knop 8
function Add8() {
	document.getElementById('display').innerHTML += '8';	// het getal 8 wordt toegevoegd aan het display wanneer hier op geklikt wordt. 
}

// functie knop 9
function Add9() {
	document.getElementById('display').innerHTML += '9';	// het getal 9 wordt toegevoegd aan het display wanneer hier op geklikt wordt. 
}




function Plus() {
	getal1 = parseInt(document.getElementById('display').innerHTML);
	operator = '+';
	document.getElementById('display').innerHTML = '';
}

function Min() {
	getal1 = parseInt(document.getElementById('display').innerHTML);
	operator = '-';
	document.getElementById('display').innerHTML = '';
}


function Keer(){		
	getal1 = parseInt(document.getElementById('display').innerHTML);
	operator = '*';
	document.getElementById('display').innerHTML = '';	
}

function Deel() 
{ 
	getal1 = parseInt(document.getElementById('display').innerHTML);
	operator = '/';
	document.getElementById('display').innerHTML = '';
}

/*
function Punt() 
{ 
	getal1 = parseInt(document.getElementById('display').innerHTML);
	operator = '.';
	document.getElementById('display').innerHTML = '';
}
*/


//uitkomst berekenen
function Calculate() {
	
	//Het variabele "getalInDisplay" krijgt een waarde. Getal in het scherm (display) wordt omgezet naar een Integer
	var getalInDisplay = parseInt(document.getElementById('display').innerHTML);
	
	
	//Een switch die een bepaalde berekening kan kiezen op basis van een case. Er zijn 4 cases met 4 verschillende operators. Bij elke operator hoord een som
	switch(operator) {
		
		case '+':
			var uitkomst = getal1 + getalInDisplay;   	//Het getal wat eerder in het scherm stond wordt samengevoegd met het getal dat als laatste in het display stond. 
			break;
			
		case '-':
			var uitkomst = getal1 - getalInDisplay;		//Het getal wat eerder in het scherm stond wordt van het getal dat als laatste in het display stond afgetrokken. 
			break;
			
		case '/':
			var uitkomst = getal1 / getalInDisplay;		//Het getal wat eerder in het scherm stond wordt van het getal dat als laatste in het display stond gedeeld. 
			break;
		
		case '*':
			var uitkomst = getal1 * getalInDisplay;		//Het getal wat eerder in het scherm stond wordt van het getal dat als laatste in het display stond vermenigvuldigd. 
			break;
			
	}
	document.getElementById('uitkomst').innerHTML = uitkomst; // In de HTML vinden we een div met het ID uitkomst, deze moet gelijk zijn aan de uitkomst die hier wordt meegegeven bij bovenstaande berekeningen.

}
	



