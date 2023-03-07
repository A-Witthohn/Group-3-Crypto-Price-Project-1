const modalBg= document.querySelector('.modal-background');
const modal=document.querySelector('.modal');
const dropDownButton=document.querySelector('.button');
const dropDown=document.querySelector('.dropdown');
dropDownButton.addEventListener('click', () =>{
    dropDown.classList.toggle('is-active');
});

//Adding API key and information for coins URLs
function testApi () {}
var cryptoUrl = "https://api.coinstats.app/public/v1/coins?skip=0&limit=10&currency=USD";

fetch(cryptoUrl)
.then(function (response) {
  return response.json();
})
.then(function (data) {
  console.log(data)
  })