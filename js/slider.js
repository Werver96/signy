document.getElementById('slider-1').onclick = sliderFirst;
document.getElementById('slider-2').onclick = sliderCenter;
document.getElementById('slider-3').onclick = sliderLast;

function sliderFirst() {
    var polosa = document.getElementById('polosa');
    polosa.style.left = 0;
    var buttonAll = document.getElementsByClassName('button_slider');
    for (var i = 0; i < buttonAll.length; i++) {
        buttonElem = buttonAll[i];
        buttonElem.style.background = 'none';
    }
    var buttonThis = document.getElementById('slider-1');
    buttonThis.style.background = '#1064E5';

}
function sliderCenter() {
    var polosa = document.getElementById('polosa');
    polosa.style.left = -100 + 'vw';
    var buttonAll = document.getElementsByClassName('button_slider');
    for (var i = 0; i < buttonAll.length; i++) {
        buttonElem = buttonAll[i];
        buttonElem.style.background = 'none';
    }
    var buttonThis = document.getElementById('slider-2');
    buttonThis.style.background = '#1064E5';
}
function sliderLast() {
    var polosa = document.getElementById('polosa');
    polosa.style.left = -200 + 'vw';
    var buttonAll = document.getElementsByClassName('button_slider');
    for (var i = 0; i < buttonAll.length; i++) {
        buttonElem = buttonAll[i];
        buttonElem.style.background = 'none';
    }
    var buttonThis = document.getElementById('slider-3');
    buttonThis.style.background = '#1064E5';
}