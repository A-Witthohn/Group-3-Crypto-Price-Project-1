const modalBg= document.querySelector('.modal-background');
const modal=document.querySelector('.modal');
const dropDownButton=document.querySelector('.button');
const dropDown=document.querySelector('.dropdown');
dropDownButton.addEventListener('click', () =>{
    dropDown.classList.toggle('is-active');
});
var scrollTextEl = document.getElementById('scroll-text')

var modalBtn = document.getElementById('modal-x-btn')
modalBtn.addEventListener('click', function(){
  modal.classList.remove('is-active')
})

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
    dropDown.classList.remove('is-active')
    localStorage.setItem("chosenCoin", chosenCoin);
})
ethEl.addEventListener("click", function (){
    chosenCoin = "ethereum";
    cryptoLookup(chosenCoin);
    cryptoUrl(chosenCoin);
    dropDown.classList.remove('is-active')
    localStorage.setItem("chosenCoin", chosenCoin);

})
ltcEl.addEventListener("click", function (){
    chosenCoin = "litecoin";
    cryptoLookup(chosenCoin);
    cryptoUrl(chosenCoin);
    dropDown.classList.remove('is-active')
    localStorage.setItem("chosenCoin", chosenCoin);

})
xrpEl.addEventListener("click", function (){
    chosenCoin = "dogecoin";
    cryptoLookup(chosenCoin);
    cryptoUrl(chosenCoin);
    dropDown.classList.remove('is-active')
    localStorage.setItem("chosenCoin", chosenCoin);

} )

var cryptoLookup = function (crypto) {
    console.log("chosen coin is " + crypto)

    var requestUrl = "https://api.coincap.io/v2/assets/" + crypto
    //console.log(requestUrl)

    fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        symbolEl.innerHTML = "Coin: " + data.data.symbol;
        currentPriceEl.innerHTML = "Current Price: $" + parseFloat(data.data.priceUsd).toFixed(2)
        performanceEl.innerHTML = "24-hour Change: " + parseFloat(data.data.changePercent24Hr).toFixed(2) + "%"
        currentVolumeEl.innerHTML = "Today's Volume: $" + parseFloat(data.data.volumeUsd24Hr).toFixed(2)
        //console.log("price: " +data.data.priceUsd)
        //console.log("%change24hr: " + data.data.changePercent24Hr)
        //console.log("today's volume: " + data.data.volumeUsd24Hr)
      })
}

var tickerCalls = function(){
  var requestUrl = "https://api.coincap.io/v2/assets/?limit=20"
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      for (var i=0; i<20; i++){
        var coinSpan = document.createElement('span')
        coinSpan.innerHTML = "      " + data.data[i].symbol + ": $" + parseFloat(data.data[i].priceUsd).toFixed(2) + "    "
        scrollTextEl.append(coinSpan)
      }
    })
  }

  //setInterval(tickerCalls, 120000)    <--- would make the api call every 2 minutes and update ticker
  tickerCalls()


//Adding API key and information for coins URLs
var marketCapEl = document.getElementById("market-cap")
var rankEl = document.getElementById("ranking")
var websiteEl = document.getElementById("website")
var twitterEl = document.getElementById("twitter")



var cryptoUrl = function(crypto) {

var cryptoSites ="https://api.coinstats.app/public/v1/coins/" + crypto + "?skip=0&limit=10&currency=USD"

fetch(cryptoSites)
.then(function (response) {
  return response.json();
})
.then(function (data) {
console.log(data)
  rankEl.innerHTML = "Rank: " + data.coin.rank
  marketCapEl.innerHTML = "$" + parseFloat(data.coin.marketCap).toFixed(0);
  websiteEl.innerHTML = data.coin.websiteUrl
  websiteEl.setAttribute("href", data.coin.websiteUrl)
  websiteEl.setAttribute("target", "_blank")
  twitterEl.innerHTML = data.coin.twitterUrl
  twitterEl.setAttribute("href", data.coin.twitterUrl)
  twitterEl.setAttribute("target", "_blank")
  // console.log("Market cap: "+ parseFloat(data.coin.marketCap).toFixed(0))
  // console.log("Website: "+data.coin.websiteUrl)
  // console.log("Twitter: "+data.coin.twitterUrl)
  })
}


var loadStorage = function() {
  var storedCoin = localStorage.getItem("chosenCoin")
  cryptoLookup(storedCoin)
  cryptoUrl(storedCoin)
}

loadStorage();