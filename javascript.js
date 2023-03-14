const modal = document.querySelector('.modal');

var starterEls = document.querySelectorAll('.startpage')
var scrollTextEl = document.getElementById('scroll-text')

var modalBtn = document.getElementById('modal-x-btn')
modalBtn.addEventListener('click', function () {
  modal.classList.remove('is-active')
})

var coinImgEl = document.getElementById("coin-image")
var coinNameEl = document.getElementById('coin-name')


var coinInputEl = document.getElementById('new-coin');
var searchBtnEl = document.getElementById('search-btn');


var currentPriceEl = document.getElementById('price');
var performanceEl = document.getElementById('performance');
var currentVolumeEl = document.getElementById('volume');
var symbolEl = document.getElementById('symbol');

var chosenCoin;


//grab input from search bar and run coinSearch on it when Search button clicked
searchBtnEl.addEventListener('click', function (event) {
  event.preventDefault();
  if (coinInputEl.value == null) {
    return;
  } else
    coinSearch(coinInputEl.value);
})
//grab input from search bar and run coinSearch on it when Enter is pressed
document.querySelector('#new-coin').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    if (coinInputEl.value == null) {
      return;
    } else
      coinSearch(coinInputEl.value);  
    }
});


//function to search for coin symbols to return data if they are in the top100
var coinSearch = function (coin) {
  //console.log("coin input: " + coin)
  var toUpperCoin = coin.toUpperCase();
  var requestUrl = "https://api.coincap.io/v2/assets?limit=100"
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < 100; i++) {
        if (data.data[i].symbol == toUpperCoin || data.data[i].name.toUpperCase() == toUpperCoin || data.data[i].id.toUpperCase() == toUpperCoin) {
          cryptoLookup(data.data[i].id)
          cryptoUrl(data.data[i].id)
          //console.log("found " + data.data[i].id)
          chosenCoin = data.data[i].id
          localStorage.setItem("chosenCoin", chosenCoin)
        }
      }
    })
}

//populates the data in the first data box from coincap api
var cryptoLookup = function (crypto) {
  coinInputEl.classList.add('is-small')
  coinInputEl.classList.remove('is-large')
  searchBtnEl.classList.add('is-small')
  searchBtnEl.classList.remove('is-large')
  //console.log("chosen coin is " + crypto)

  var requestUrl = "https://api.coincap.io/v2/assets/" + crypto

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      symbolEl.innerHTML = "Coin: " + data.data.symbol;
      coinNameEl.innerHTML = data.data.name
      currentPriceEl.innerHTML = " $" + parseFloat(data.data.priceUsd).toLocaleString('en-US', { maximumFractionDigits: 2 })
      performanceEl.innerHTML = " " + parseFloat(data.data.changePercent24Hr).toFixed(2) + "%"
      if (data.data.changePercent24Hr > 0) {
        performanceEl.classList.add('green')
        performanceEl.classList.remove('red')
      } else if (data.data.changePercent24Hr < 0) {
        performanceEl.classList.add('red')
        performanceEl.classList.remove('green')
      }
      currentVolumeEl.innerHTML = " $" + parseFloat(data.data.volumeUsd24Hr).toLocaleString('en-US', { maximumFractionDigits: 2 });
      for (i = 0; i < starterEls.length; i++) {
        starterEls[i].classList.remove('is-hidden')
      }
    })
}

//populates the bottom ticker with top 20 cryptos from coincap api
var tickerCalls = function () {
  var requestUrl = "https://api.coincap.io/v2/assets/?limit=20"
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //console.log(data)
      for (var i = 0; i < 20; i++) {
        var coinSpan = document.createElement('span')
        coinSpan.innerHTML = " &emsp; " + data.data[i].symbol + ": $" + parseFloat(data.data[i].priceUsd).toFixed(2) + "  &emsp;"
        scrollTextEl.append(coinSpan)
        if (data.data[i].changePercent24Hr > 0) {
          coinSpan.classList.add('green')
          coinSpan.classList.remove('red')
        } else if (data.data[i].changePercent24Hr < 0) {
          coinSpan.classList.add('red')
          coinSpan.classList.remove('green')
        }
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


//populates the second data box with info from coinstats api
var cryptoUrl = function (crypto) {

  var cryptoSites = "https://api.coinstats.app/public/v1/coins/" + crypto + "?skip=0&limit=10&currency=USD"

  fetch(cryptoSites)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //console.log(data)
      rankEl.innerHTML = "Rank: " + data.coin.rank
      coinImgEl.setAttribute("src", data.coin.icon)
      marketCapEl.innerHTML = "$" + parseFloat(data.coin.marketCap).toLocaleString('en-US', { maximumFractionDigits: 0 });
      websiteEl.innerHTML = data.coin.websiteUrl
      websiteEl.setAttribute("href", data.coin.websiteUrl)
      websiteEl.setAttribute("target", "_blank")
      twitterEl.innerHTML = data.coin.twitterUrl
      twitterEl.setAttribute("href", data.coin.twitterUrl)
      twitterEl.setAttribute("target", "_blank")
    })
}


var loadStorage = function () {
  var storedCoin = localStorage.getItem("chosenCoin")
  if (storedCoin == null) {
    return;
  } else
    cryptoLookup(storedCoin)
    cryptoUrl(storedCoin)
}

loadStorage();

// Autocomplete widget
$(function () {
  top100Coins
  $('#new-coin').autocomplete({
    source: top100Coins
  });
});

//adds top 100 ticker symbols and coin names from coincap api for the autocomplete dropdown
//exclusion list includes the coin id's that return results from coincap api but not coinstats due to seprate id's
var exclusionList = ["xrp", "avalanche", "polygon", "multi-collateral-dai", "crypto-com-coin", "near-protocol", "stacks", "elrond-egld", "theta", "kucoin-token", "klaytn", "synthetix-network-token", "conflux-network", "pancakeswap", "mina", "gatetoken", "casper", "unus-sed-leo", "wootrade", "compound"]
var top100Coins = []
var requestUrl = "https://api.coincap.io/v2/assets?limit=100"
fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    //console.log(data)
    for (var i = 0; i < 100; i++) {
      if (exclusionList.includes(data.data[i].id)){
      } else {
      top100Coins.push(data.data[i].symbol)
      if (data.data[i].symbol !== data.data[i].name) {
        top100Coins.push(data.data[i].name)
      }}
    }
  })

  