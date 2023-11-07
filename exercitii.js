console.log("Scrieți un program JavaScript care adună două numere și afișează rezultatul în consolă.");

var a = 1;
var b= 2;
var suma = a+b;
console.log(suma);

console.log("Scrieți un program JavaScript care calculează media a trei numere și afișează rezultatul în consolă.");
var a = 1;
var b= 2;
var c= 3;
var media = (a+b+c) / 3;
console.log(media);

console.log("Scrieți un program JavaScript care adaugă 5 la o variabilă numită 'x' și afișează rezultatul în consolă.");

var x = 1;
console.log(x+5);

console.log("Scrieți un program JavaScript care atribuie valoarea 10 variabilei 'y' și apoi adaugă 2 la aceasta utilizând operatorul '+='.");

var y = 10;
y+=2;
console.log(y);

console.log("Scrieți un program JavaScript care compară două numere și afișează 'A este mai mare decât B'"
+"dacă primul număr este mai mare decât al doilea, sau 'B este mai mare sau egal cu A' dacă al doilea număr este mai mare sau egal cu primul.")

var a = 3;
var b =2 ;
if(a >b) {
console.log("A este mai mare decat B");
}
else {
console.log("B este mai mare sau egal cu A");
}

console.log("Scrieți un program JavaScript care verifică dacă o variabilă numită 'varsta' este mai mare sau egală cu 18 și afișează un mesaj corespunzător în consolă, în funcție de rezultat.")
var varsta = 23;
if (varsta >= 18) {
console.log("Varsta dvs. este mai mare sau egala cu 18");
}

console.log(varsta >= 18 ? "Varsta dvs. este mai mare sau egala cu 18" : "Nu este")

console.log("Scrieți un program JavaScript care verifică dacă două condiții sunt adevărate utilizând operatorul '&&' (și logic) și afișează un mesaj corespunzător în consolă, în funcție de rezultat.")

if (5 < 6 && 6 < 7){
console.log("all good!");
}

console.log("Scrieți un program JavaScript care verifică dacă o condiție este adevărată utilizând operatorul '!' (nu logic) și afișează un mesaj corespunzător în consolă, în funcție de rezultat.");
var a= 1;
var b = 2;
if (!(a>b)) {
console.log("fals");
}

if (a !=b){
console.log("adevarat");
}
