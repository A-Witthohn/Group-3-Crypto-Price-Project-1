const modalBg= document.querySelector('.modal-background');
const modal=document.querySelector('.modal');
const dropDownButton=document.querySelector('.button');
const dropDown=document.querySelector('.dropdown');
dropDownButton.addEventListener('click', () =>{
    dropDown.classList.toggle('is-active');
});

var currentPriceEl = document.getElementById('price');
var performanceEl = document.getElementById('performance');
var currentVolumeEl = document.getElementById('volume');
var symbolEl = document.getElementById('symbol');

var btcEl = document.getElementById("btc")
var ethEl = document.getElementById("eth")
var ltcEl = document.getElementById("ltc")
var xrpEl = document.getElementById("doge")
var chosenCoin;

btcEl.addEventListener("click", function(){
    chosenCoin = "bitcoin";
    cryptoLookup(chosenCoin);
    cryptoUrl(chosenCoin);
})
ethEl.addEventListener("click", function (){
    chosenCoin = "ethereum";
    cryptoLookup(chosenCoin);
    cryptoUrl(chosenCoin);
})
ltcEl.addEventListener("click", function (){
    chosenCoin = "litecoin";
    cryptoLookup(chosenCoin);
    cryptoUrl(chosenCoin);
})
xrpEl.addEventListener("click", function (){
    chosenCoin = "dogecoin";
    cryptoLookup(chosenCoin);
    cryptoUrl(chosenCoin);
} )

var cryptoLookup = function (crypto) {
    console.log("chosen coin is " + crypto)

    var requestUrl = "https://api.coincap.io/v2/assets/"+ crypto
    //console.log(requestUrl)

    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        symbolEl.innerHTML = "Coin: " + data.data.symbol;
        currentPriceEl.innerHTML = "Current Price(USD): " + parseFloat(data.data.priceUsd).toFixed(2)
        performanceEl.innerHTML = "24-hour Change(%): " + parseFloat(data.data.changePercent24Hr).toFixed(2)
        currentVolumeEl.innerHTML = "Today' Volume(USD): " + parseFloat(data.data.volumeUsd24Hr).toFixed(2)
        console.log("price: " +data.data.priceUsd)
        console.log("%change24hr: " + data.data.changePercent24Hr)
        console.log("today's volume: " + data.data.volumeUsd24Hr)

})

}


// volume: volumeUsd24Hr
// 24 hr change: changePercent24Hrc
//price : priceUsd
//supply: supply

//Adding API key and information for coins URLs
var cryptoUrl = function(crypto) {

var cryptoSites ="https://api.coinstats.app/public/v1/coins/" + crypto + "?skip=0&limit=10&currency=USD"

fetch(cryptoSites)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log("Coin symbol: "+data.coin.symbol)
  console.log("Website: "+ data.coin.websiteUrl)
  console.log("Twitter: "+data.coin.twitterUrl)
  console.log("Market cap: "+data.coin.marketCap)
  })
}
