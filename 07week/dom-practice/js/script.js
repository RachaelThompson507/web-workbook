'use strict';
document.addEventListener("DOMContentLoaded", function(event) {

window.onload = function() {
//item count
  var itemCount = document.querySelectorAll('li');
  console.log(itemCount.length);
//h2
  var newh2 = document.createElement('h2');
    newh2.innerHTML = 'You have ' + itemCount.length + ' items in your shopping cart.';
    document.getElementsByTagName('h1')[0].append(newh2);
//alert on window- item #
  alert('You have '+ itemCount.length + ' items in your shopping cart.');

//create an id for ul tag
  // var ulId = document.getElementsByTagName('ul');
  // ulId.id = 'itemsInCart';
//create an input to add items
  // var newItem = document.createElement('input');
  //   newItem.setAttribute('id','newItem');
  //   newItem.setAttribute('type', 'text');
  //   document.getElementById('div').insertBefore(newItem, null).innerHTML;

function addItem(){
  	var ul = document.getElementById("itemsInCart");
    var newItem = document.getElementById("newItem");
    var li = document.createElement("li");
    li.setAttribute('id',newItem.value);
    li.appendChild(document.createTextNode(newItem.value));
    ul.appendChild(li);
  }

function removeItem(){
	var ul = document.getElementById("itemsInCart");
  var newItem = document.getElementById("newItem");
  var item = document.getElementById(newItem.value);
  ul.removeChild(item);
}
}
});
