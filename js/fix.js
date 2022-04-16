/*-----------Скрываем меню при переходе по навигации меню а так же вход и регистрации-----*/
//Сделано для того чтобы на главной странице при переходе по ссылке цены/регистрация/вход меню закрывалось
linksMenu=document.getElementsByClassName('header_nav_link')
for (var i = 0; i < linksMenu.length; i++) {
    linkMenu=linksMenu[i];
    linkMenu.onclick=closeMenu;
}

linksRegIn=document.querySelectorAll('.popup-link');
for (var i = 0; i < linksRegIn.length; i++) {
    linkRegIn=linksRegIn[i];
    linkRegIn.onclick=closeMenu;
}
/*-------------------------------------------------------*/
/*Скрываем меню при переходе по регистрации/вход---------*/
function closeMenu() {
     document.getElementById('menu').classList.remove('_active');
     document.body.classList.remove('_lock');
     document.querySelector('.menu_icon').classList.remove('_active')

}