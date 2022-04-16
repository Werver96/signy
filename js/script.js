let open=true;

document.getElementById("seo-button").onclick=openText;
function openText(){
    document.querySelector('.seo_content').style.maxHeight= open ? 100 + '%': 242 + 'px';
    document.getElementById("seo-button").innerHTML= open ? '&uarr; Свернуть текст &uarr;' : '&darr; Развернуть текст &darr;';
    open=!open;
}