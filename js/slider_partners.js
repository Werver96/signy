document.getElementById('slider_partners-1').onclick = sliderFirst;
document.getElementById('slider_partners-2').onclick = sliderLast;

function sliderFirst() {
    var polosa = document.getElementById('polosa_partners');
    polosa.style.left = 0;
    var buttonAll = document.getElementsByClassName('button_slider_partners');
    for (var i = 0; i < buttonAll.length; i++) {
        buttonElem = buttonAll[i];
        buttonElem.style.background = 'none';
    }
    var buttonThis = document.getElementById('slider_partners-1');
    buttonThis.style.background = '#1064E5';

}

function sliderLast() {
    var polosa = document.getElementById('polosa_partners');
    polosa.style.left = -100 + '%';
    var buttonAll = document.getElementsByClassName('button_slider_partners');
    for (var i = 0; i < buttonAll.length; i++) {
        buttonElem = buttonAll[i];
        buttonElem.style.background = 'none';
    }
    var buttonThis = document.getElementById('slider_partners-2');
    buttonThis.style.background = '#1064E5';

}