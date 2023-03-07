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
    chosenCoin = "bitcoin";
    // cryptoLookup(chosenCoin);
    cryptoUrl(chosenCoin);
})
ethEl.addEventListener("click", function (){
    chosenCoin = "ethereum";
    // cryptoLookup(chosenCoin);
    cryptoUrl(chosenCoin);
})
ltcEl.addEventListener("click", function (){
    chosenCoin = "litecoin";
    // cryptoLookup(chosenCoin);
    cryptoUrl(chosenCoin);
})
xrpEl.addEventListener("click", function (){
    chosenCoin = "ripple";
    // cryptoLookup(chosenCoin);
    cryptoUrl(chosenCoin);
} )

var cryptoUrl = function (crypto) {
    console.log("chosen coin is " + crypto)


//Adding API key and information for coins URLs
var cryptoUrl = "https://api.coinstats.app/public/v1/coins/" + crypto + "?skip=0&limit=10&currency=USD";

fetch(cryptoUrl)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data)
  })
}