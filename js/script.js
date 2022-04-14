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
/*-Добавляем класс _touch если открыли с устройств с touch screen---*/
	document.body.classList.add('_touch');
/*-Если устройсво с touch screen добавляем к классу .menu_arrow класс
_active-------------------------------------------------------------*/
/*----------------------Находми нашу стрелочку----------------------*/
	let menuArrows = document.querySelectorAll('.menu_arrow');
/*----------Проверяем есть ли у нас хотя бы одна стрелочка----------*/
	if(menuArrows.length>0){
/*----------------------Если есть включаем цикл---------------------*/
		for (let index = 0; index < menuArrows.length; index++) {
			const menuArrow = menuArrows[index];
/*----При нажатии на стрелочку добавляется класс _active для родителя 
элемента, в данном случае пункта меню-------------------------------*/
			menuArrow.addEventListener("click", function(e){
				menuArrow.parentElement.classList.toggle('_active');
			});
		}
	}
/*---------Добавляем класс _pc если открыли с устройств с pc--------*/
} else{
	document.body.classList.add('_pc');
}
/*Меню бургер*/
/*--------------------Находим нашу кнопку буркер--------------------*/
const iconMenu = document.querySelector('.menu_icon');
if (iconMenu){
/*-----------------------Ищем наш блок с меню-----------------------*/
	const menuBody = document.querySelector('.header_nav_main');
/*------При клике на нашему иконке бургера выполняется функция------*/
	iconMenu.addEventListener("click", function(e) {
/*------Запрещаем прокрутку страницы когда нажата бургер кнопка-----*/
		document.body.classList.toggle('_lock');
/*-------Добавляем класс _active для блока с меню и бургер кнопки при 
----------------------нажатии на бургер кнопку----------------------*/
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}
