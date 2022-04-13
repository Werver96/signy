"use strict"
/*Проверяем что страница открыта на мобильном устройстве */
const isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (
        	isMobile.Android() || 
        	isMobile.BlackBerry() || 
        	isMobile.iOS() || 
        	isMobile.Opera() || 
        	isMobile.Windows());
    }
};
/*Добавляем класс для body в зависимости от того с какого устройства 
открыта страница*/
if (isMobile.any()){
	document.body.classList.add('_touch');
	let menuArrows = document.querySelectorAll('.menu_arrow');
	if(menuArrows.length>0){
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
			menuArrow.addEventListener("click", function(e){
				menuArrow.parentElement.classList.toggle('_active');

			});
		}
	}
} else{
	document.body.classList.add('_pc');
}
/*Меню бургер*/
const iconMenu = document.querySelector('.menu_icon');
if (iconMenu){
	const menuBody = document.querySelector('.header_nav_main');
	iconMenu.addEventListener("click", function(e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}
