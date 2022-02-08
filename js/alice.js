/**
  Alice restaurant opgave
  Katrine Æbelø
**/
console.log('alices.js = ok')

//STUDIEDAG 2
//Fremstil en navigations-menu, i traditionel semantisk markup.Sørg for at menuen er responsiv - gør dette med almindelig html og css.
//Der skal være en burgermenu til enheder med de mindre skærme og en større til de store skærme.
//Burgeren skal vise og skjule en navigationsmenu, når brugeren klikker på burgersymbolet. Dette skal naturligvis udføres med JavaScript click events, der tilføjer/fjerner CSS klasser.
//burgermenu vis og skjul

let hide = true; // global

// hide or show
let hideShow = function(){

  if (hide == true) {
    document.getElementById('showBrg').style.display = 'block';
    hide = false;
  } else {
    document.getElementById('showBrg').style.display = 'none';
    hide = true;
  }

}

// detect click
burger.addEventListener('click', hideShow);

//STUDIEDAG 1


/*** SPØRGSMÅL 2
Fremstil en funktion, der kan tilføje restaurantens navn,
adresse og telefonnummer i en <div id="adresse"></div>,
der placeres <footer>.
***/


// globale variabler
let d = new Date(); // kan genbruges andre steder
let uge = ['søndag','mandag','tirsdag','onsdag','torsdag','fredag','lørdag'];
let maaneder = ['januar','februar','marts','april','maj','juni','juli','august','september','oktober','november','december'];

// footer som objekt
const info = {
  author: 'Katrine Aebelo', // Spørgsmål 1
  dag: uge[ d.getDay() ],
  maaned: maaneder[ d.getMonth() ],
  dagImaaned: d.getDate(),
  aar: d.getFullYear(),
  time: d.getHours(),
  minut: d.getMinutes(),
  restaurant: 'Alice\'s Restaurant', // Spørgsmål 2
  adresse: 'Volden 234 <br>8000 Aarhus C', // Spørgsmål 2
  telefon: '4243 4445',
  // Metoder

  /*** SPØRGSMÅL 1
  Lad der være et copyright-tegn efterfulgt af dit navn samt dag,
  måned, år og klokkeslet i <footer>.
  ***/
  skrivTilFooter: function() {
    console.log('footeren.skrivTilFooter() = aktiv');
    footerInfo.innerHTML += `
      <div>
        &copy; Opgave - Alice restaurant<br>
        by ${this.author}
        ${this.dag}
        ${this.dagImaaned}.
        ${this.maaned}
        ${this.aar}.
      </div>
    `;
  },
  skrivAdresse: function() {
    footerInfo.innerHTML += `
      <div class="adresse">
        <h3>${this.restaurant}</h3>
        <p>
          ${this.adresse}<br>
          ${this.telefon}
        </p>
      </div>
    `
  }
}

info.skrivAdresse(); // Spørgsmål 2
info.skrivTilFooter(); // Spørgsmål 1

/*** SPØRGSMÅL 3
Skab et array, hvor man kan se medsarbejdernes navne. Sorter disse.
***/


// detect click
burger.addEventListener('click', hideShow);

// Liste til medarbejdere
let vis, ansatte = [
  'Alice Sørensen - ejer',
  'Tjener: Susanne Hansen',
  'Tjener: Karoline M. Nielsen',
  'Tjener: Søren Jensen',
  'Tjener: Otto Laursen',
  'Opvask: Annita Karlsen',
  'Opvask: Alexander Johansen',
  'Opvask: Frederikke j. m.',
  'Opvask: Laura Søvsten',
  'Pedel: Iben Høj',
  'Tjener: Sofie Thøgersen'
].sort(); // nem måde at sortere på


for (vis in ansatte){
  hvem.innerHTML += '<li>' + ansatte[ vis ] + '</li>';
}

//STUDIEDAG 3
//KONTAKT FORMULAR til bordbestilling

( function ( ) {

  const form = document.getElementById( 'contact' )

  form.addEventListener( 'submit' ,
    function ( event ) { validate( form, event ) } )
} ) ( )

function validate( form, event ) {
  let value = form.elements[ 'Name' ].value
  if( value === '' ) {
    alert( 'Please Enter Your Name' )
  event.preventDefault( ) ; return }

  value = form.elements[ 'Email' ].value
  if( ( value === '' ) || ( value.indexOf('@') === -1 ) ||
  ( value.indexOf('.') === -1 ) ) {
    alert( 'Please Enter A Valid Email Address' )
  event.preventDefault( ) }
}

/**
 STUDIEDAG 4
 tilføj en youtube video, som afspilles når videoen bliver synlig
 **/

// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;

function onYouTubePlayerAPIReady() {
  player = new YT.Player('ytplayer', {
    height: '360',
    width: '640',
    videoId: '1o645n7OeeA',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  })
}

/* Player kontrolleres af funktioner */
function onPlayerReady(event) {
  console.log("player is ready");
  event.target.pauseVideo();
}

function playItSam(event) {
  console.log("player is ready");
  event.target.playVideo(); // event from player
}

function onPlayerStateChange() {
  console.log("player state change");

  if (event.data == YT.PlayerState.PLAYING && !done) {
    //setTimeout(stopVideo, 6000);
    done = true;
  }
}

/* is element visible? if ok playVideo() */
var elementet = document.getElementById("synlig");

window.addEventListener("scroll", function() {

  if (elFllVsbl(elementet)) {
    console.log("play video");
    player.playVideo(); // with player you can manipulate the video
  } else {
    console.log("pause video")
    player.pauseVideo();
  }
}); // end eventlistener

function elFllVsbl(el) {
  return (el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().bottom < window.innerHeight);
}

/*** SPØRGSMÅL 4
Hvis tiden tillader det: kod en funktion,
som kan skrive et passende inspirerende citat.
Dette citat vælges tilfældigt fra en liste (=array)
med mindst 5 citater.
Tip: brug Math.random().
***/

let citater = [
  '"All you need is Love." <br> The Beatles',
  '"You don\'t learn from experience. You learn by reflecting on experience" <br> John Dewey',
  '"Jeg lytter efter en hvisken<br>som bærer tavsheden<br>gennem natten." <br> Ulrikka Gernes',
  '"We\'re gonna have a real good time togeter" <br> Lou Reed',
  '"Life is like a mayonaise soda" <br> Lou Reed',
  '"All I ever wanted was to cook the perfect meal."<br>Alice',
  '"You can get anything you want at Alice\'s restaurant" <br> Arlo Guthrie'
];

// selvkørende funktion
(function dagensCitat() {
  rndNo = Math.floor(Math.random() * citater.length );
  citat.innerHTML = '<em>' +  citater[ rndNo ] + '</em>';
})();
