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
    cryptoLookup(chosenCoin);
})
ethEl.addEventListener("click", function (){
    chosenCoin = "ethereum";
    cryptoLookup(chosenCoin);
})
ltcEl.addEventListener("click", function (){
    chosenCoin = "litecoin";
    cryptoLookup(chosenCoin);
})
xrpEl.addEventListener("click", function (){
    chosenCoin = "xrp";
    cryptoLookup(chosenCoin);
} )

var cryptoLookup = function (crypto) {
    console.log("chosen coin is " + crypto)

    var requestUrl = "https://api.coincap.io/v2/assets/"+ crypto
    console.log(requestUrl)

    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        console.log(data.data.volume)

})

}

// volume: volumeUsd24Hr
// 24 hr change: changePercent24Hr
//price : priceUsd
//supply: supply