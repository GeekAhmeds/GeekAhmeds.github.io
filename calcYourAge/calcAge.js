var myInput = document.getElementById('basic-url'),
myDiv   = document.getElementById('myDiv');
myDiv1   = document.getElementById('myDiv1');

myInput.onkeyup = function () {
  "use strict";
  myDiv.innerHTML = myInput.value * 365 + ' Days' ;
  myDiv1.innerHTML = myInput.value * 365 * 24 + ' Hours' ;
  myDiv2.innerHTML = myInput.value * 365 * 24 * 60 + ' Min';

}
