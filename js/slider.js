document.getElementById('slider-1').onclick = sliderFirst;
document.getElementById('slider-2').onclick = sliderCenter;
document.getElementById('slider-3').onclick = sliderLast;

function sliderFirst() {
    var polosa = document.getElementById('polosa');
    polosa.style.left = 0;
}
function sliderCenter() {
    var polosa = document.getElementById('polosa');
    polosa.style.left = -100 + 'vw';
}
function sliderLast() {
    var polosa = document.getElementById('polosa');
    polosa.style.left = -200 + 'vw';
}