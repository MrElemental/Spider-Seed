//Code Block for Country+Language Popup
const deliverto = document.getElementById('box2');
const box3 = document.getElementById('box3');
const popup_parent = document.getElementById('popup-parent');
const popupButton = document.getElementById('popupButton');

deliverto.addEventListener('click', function() {
    popup_parent.style.display = 'flex';
    popup_parent.style.zIndex = '999';
});
box3.addEventListener('click', function() {
    popup_parent.style.display = 'flex';
    popup_parent.style.zIndex = '999';
});

popupButton.addEventListener('click', function() {
    popup_parent.style.display = 'none';
    popup_parent.style.zIndex = '999';
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

//Code block for ranodomizing Shop Deals Message
panelDeals = document.getElementById('panel-deals');

const categories_available = ["laptops", "electronics", "fashion", "home", "books", "toys", "gaming", "supplies"];
const randomPanelDeals = categories_available[Math.floor(Math.random() * categories_available.length)];

window.addEventListener('DOMContentLoaded', function () {
    panelDeals.textContent = `Shop deals in ${randomPanelDeals}`;
});

//Code Block for when button clicked, hero image changes
const angle_left = document.getElementById('angle-left');
const angle_right = document.getElementById('angle-right');
const hero_image_div = document.getElementById('hero-image-div');

let hero_img_index = 0;
const hero_img_arr = [1, 2, 3, 4];

angle_right.addEventListener('click', function () {
    hero_img_index = (hero_img_index + 1) % hero_img_arr.length;
    hero_image_div.style.backgroundImage = `url(hero_image${hero_img_arr[hero_img_index]}.jpg)`;
});

angle_left.addEventListener('click', function () {
    hero_img_index = (hero_img_index - 1 + hero_img_arr.length) % hero_img_arr.length;
    hero_image_div.style.backgroundImage = `url(hero_image${hero_img_arr[hero_img_index]}.jpg)`;
});

window.addEventListener('DOMContentLoaded', function() {
    hero_image_div.style.backgroundImage = 'url(hero_image1.jpg)';
});
