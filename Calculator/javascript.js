

var getal1=0;
var operator = ''; 

// clear function
function Clear(){
	
	location.reload();
	
}	




// Functie voor knoppen met verschillende cijfers. 

// functie knop 1  	
function Add1() {
	document.getElementById('display').innerHTML += '1';
	
}			


// functie knop 2   
function Add2() {
	document.getElementById('display').innerHTML += '2';
}			


// functie knop 3   
function Add3() {
	document.getElementById('display').innerHTML += '3';
}			


// functie knop 4
function Add4() {
	document.getElementById('display').innerHTML += '4';
}			


// functie knop 5
function Add5() {
	document.getElementById('display').innerHTML += '5';
}

// functie knop 6
function Add6() {
	document.getElementById('display').innerHTML += '6';
}


// functie knop 7
function Add7() {
	document.getElementById('display').innerHTML += '7';
}


// functie knop 8
function Add8() {
	document.getElementById('display').innerHTML += '8';
}

// functie knop 9
function Add9() {
	document.getElementById('display').innerHTML += '9';
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




//uitkomst berekenen
function Calculate() {
	var getalInDisplay = parseInt(document.getElementById('display').innerHTML);
	
	switch(operator) {
		
		case '+':
			var uitkomst = getal1 + getalInDisplay;
			break;
			
		case '-':
			var uitkomst = getal1 - getalInDisplay;
			break;
			
		case '/':
			var uitkomst = getal1 / getalInDisplay;
			break;
		
		case '*':
			var uitkomst = getal1 * getalInDisplay;
			break;
			
	}
	document.getElementById('uitkomst').innerHTML = uitkomst;

}
	



