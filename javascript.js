const modalBg= document.querySelector('.modal-background');
const modal=document.querySelector('.modal');
const dropDownButton=document.querySelector('.button');
const dropDown=document.querySelector('.dropdown');
dropDownButton.addEventListener('click', () =>{
    dropDown.classList.toggle('is-active');
});

var btcEl = document.getElementById("btc")
var ethEl = document.getElementById("eth")
var ltcEl = document.getElementById("ltc")
var xrpEl = document.getElementById("xrp")
var chosenCoin;

btcEl.addEventListener("click", function(){
    chosenCoin = "btc";
    cryptoLookup(chosenCoin);
})
ethEl.addEventListener("click", function (){
    chosenCoin = "eth";
    cryptoLookup(chosenCoin);
})
ltcEl.addEventListener("click", function (){
    chosenCoin = "ltc";
    cryptoLookup(chosenCoin);
})
xrpEl.addEventListener("click", function (){
    chosenCoin = "xrp";
    cryptoLookup(chosenCoin);
} )

var cryptoLookup = function (crypto) {
    console.log("chosen coin is " + crypto)
}
