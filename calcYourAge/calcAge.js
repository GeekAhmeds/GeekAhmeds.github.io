var myInput = document.getElementById('basic-url'),
myDiv   = document.getElementById('myDiv');

 myInput.onkeyup = function () {
   "use strict";
   myDiv.innerHTML = myInput.value * 365 ;
 }
