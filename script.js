const deliverto = document.getElementById('box2');
const popup_parent = document.getElementById('popup-parent');
const popupButton = document.getElementById('popupButton');

deliverto.addEventListener('click', function() {
    popup_parent.style.display = 'flex';
});

popupButton.addEventListener('click', function() {
    popup_parent.style.display = 'none';
});