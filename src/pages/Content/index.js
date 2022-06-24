import { printLine } from './modules/print';

console.log('Content script works!');
console.log('Must reload extension for modifications to take effect.');

printLine("Using the 'printLine' function from the Print Module");

function decodeShadowProducts(classname) {
  var myClasses = document.getElementsByClassName(classname);

  for (var i = 0; i < myClasses.length; i++) {
    //
    // console.log(myClasses[i].innerHTML);
    if (myClasses[i].innerHTML.includes("[#25#69a6f9c9a4c55d33f9f#]")) {
      myClasses[i].innerHTML = myClasses[i].innerHTML.replace(/\[#25#69a6f9c9a4c55d33f9f#\]/, "Sildenafil 50mg");
    }
  }
}

decodeShadowProducts("cart-item__name");
decodeShadowProducts("product__description__name");

let intervalId = window.setInterval(function(){
  decodeShadowProducts("Polaris-Link_yj5sy");
  decodeShadowProducts("Polaris-Stack__Item_yiyol");
  decodeShadowProducts("cart-notification-product__name");
}, 500);