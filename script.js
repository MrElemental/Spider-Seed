//Code Block for Country+Language Popup
const deliverto = document.getElementById('box2');
const box3 = document.getElementById('box3');
const popup_parent = document.getElementById('popup-parent');
const popupButton = document.getElementById('popupButton');

deliverto.addEventListener('click', function() {
    popup_parent.style.display = 'flex';
});
box3.addEventListener('click', function() {
    popup_parent.style.display = 'flex';
});

popupButton.addEventListener('click', function() {
    popup_parent.style.display = 'none';
});

//Code Block for Updating Country+Language
const sel_cont = document.getElementById('sel-cont');
const sel_lang = document.getElementById('sel-lang');
const Country = document.getElementById('cont');
const submit_cont_and_lang = document.getElementById('submit-cont-and-lang');
const text_div = document.getElementById('text-div');
const flag_div = document.getElementById('flag-div');

const languageFlags = {
  "english": "https://flagcdn.com/w80/gb.png",
  "french": "https://flagcdn.com/w80/fr.png",
  "spanish": "https://flagcdn.com/w80/es.png",
  "portugese": "https://flagcdn.com/w80/pt.png",
  "arabic": "https://flagcdn.com/w80/sa.png",
  "urdu": "https://flagcdn.com/w80/pk.png"
};

const shortenedLang = {
    "english": "eng",
    "french": "fre",
    "spanish": "spa",
    "portugese": "por",
    "arabic": "عربي",
    "urdu": "اردو"
};


submit_cont_and_lang.addEventListener('click', function (e) {
    e.preventDefault();

    //Generating Flag
    const flagURL = languageFlags[sel_lang.value];
    flag_div.style.backgroundImage = `url(${flagURL})`;
    flag_div.className = 'flag-div';

    Country.textContent = sel_cont.value;
    text_div.textContent = shortenedLang[sel_lang.value].toUpperCase();
    popup_parent.style.display = 'none';
});

window.addEventListener('DOMContentLoaded', function () {
    const flagURL = languageFlags["english"];
    flag_div.style.backgroundImage = `url(${flagURL})`;
    flag_div.className = 'flag-div';
    text_div.textContent = shortenedLang[sel_lang.value].toUpperCase();
});
