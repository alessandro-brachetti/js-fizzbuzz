for (i = 1; i <= 100; i++) { //Stampa i numeri da 1 a 100
  var numeri = "";
  if (i % 3 === 0) {
    numeri += "Fizz"; //Per i multipli di 3 scrivi Fizz
  }
  if (i % 5 === 0) {
    numeri += "Buzz"; //Per i multipli di 5 scrivi Buzz
  }
  // console.log(numeri || i);
  document.getElementById('risultato').innerHTML += (numeri || i) + "<br>";
}
