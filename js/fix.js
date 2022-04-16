/*-----------Скрываем меню при переходе по навигации-----*/
//Сделано для того чтобы на главной странице при переходе по ссылке цены/регистрация/вход меню закрывалось
linksMenu=document.getElementsByClassName('header_nav_link')
for (var i = 0; i < linksMenu.length; i++) {
    linkMenu=linksMenu[i];
    linkMenu.onclick=closeMenu;
}
function closeMenu() {
     document.getElementById('menu').classList.remove('_active');
}

/*-------------------------------------------------------*/
/*Скрываем меню при переходе по регистрации/вход---------*/
linksMenu=document.getElementsByClassName('header_nav_link')
for (var i = 0; i < linksMenu.length; i++) {
    linkMenu=linksMenu[i];
    linkMenu.onclick=closeMenu;
}
function closeMenu() {
     document.getElementById('menu').classList.remove('_active');
}