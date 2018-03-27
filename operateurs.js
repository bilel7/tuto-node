var x = 5;
var y = 7;
var z = 15;

if (x === y && x  === z){

    console.log(' les trois variables sont identique ');
}else if ((z !== y && ( x === y || x === z ))||(z === y && ( x !== y || x !== z ))) {

    console.log(' deux des variables sont identique ');
}else {

    console.log(' les trois variables sont différentes.')
}
