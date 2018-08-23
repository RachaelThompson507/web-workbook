'use strict';

// document.addEventListener("DOMContentLoaded", function(event) {
  // You code here
window.onload = function() {
  // var counts = document.getElementsByTagName('ul');
  // console.log(count[0].children.lengh);
  // let count = list[0].children.length;
  // console.log(count);
  var count = document.querySelectorAll('li');
  console.log(count.length);


// var newh2 = document.createElement('h2');
// newh2.innerHTML="You have"+list[0].children.length + "items in your shopping cart";
// document.h1.appendChild(newh2);

//document.querySelector('h1').insertAdjacentHTML('afterEnd', "<h2> You have" + count.length + "items in your shopping cart</h2>");
var newh2 = document.createElement('h2');
newh2.innerHTML = 'you have ' + count.length + ' items in your shopping cart';;
document.getElementsByTagName('h1')[0].append(newh2);

}


//});
