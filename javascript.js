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
    cryptoUrl(chosenCoin);
    cryptoLookUp(chosenCoin);
})
ethEl.addEventListener("click", function (){
    chosenCoin = "ethereum";
    cryptoUrl(chosenCoin);
    cryptoLookUp(chosenCoin);
})
ltcEl.addEventListener("click", function (){
    chosenCoin = "litecoin";
    cryptoUrl(chosenCoin);
    cryptoLookUp(chosenCoin);
})
xrpEl.addEventListener("click", function (){
    chosenCoin = "ripple";
    cryptoUrl(chosenCoin);
    cryptoLookUp(chosenCoin);
} )

var cryptoLookUp = function (crypto) {
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


//Adding API key and information for coins URLs

var cryptoUrl = function(crypto) {

var cryptoSites = "https://api.coinstats.app/public/v1/coins/" + crypto + "?skip=0&currency=USD";

fetch(cryptoSites)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data)
  console.log("twitter", data.coin.twitterUrl)
  console.log("website", data.coin.websiteUrl)
  console.log("icon", data.coin.icon)
  })
}
