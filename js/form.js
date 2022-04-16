/*-------------------------------------------------------------------*/
/*-------Валидация форм для регистрации-------------------------------*/
var formElement=document.reg;
formElement.onsubmit=validateInfoForm;
function validateInfoForm() {
    var nameElement=formElement.elements.name;
    var mailElement=formElement.elements.mail;
    var passElement=formElement.elements.password;

    var nameValue=nameElement.value;
    var mailValue=mailElement.value;
    var passValue=passElement.value;
    if (nameValue.length>25) {
        alert('Введите имя не более 25 символов')
        nameElement.value ='';
        nameElement.placeholder ='Введите корректное имя';
        nameElement.focus();
        nameElement.style.borderColor='red';
        return false;
    }
    var mailSubstr='@mail.com'
    if (!mailValue.includes(mailSubstr)) {
        alert('E-mail адрес должен содержать @mail.com')
        mailElement.value ='';
        mailElement.placeholder ='Введите корректный Email адрес';
        mailElement.focus();
        mailElement.style.borderColor='red';
        return false;
    }
    if (passValue.length<8) {
        alert('Пароль должен быть менее 8 символов!')
        passElement.focus();
        passElement.style.borderColor='red';
        return false;
    }
}
/*-------------------------------------------------------------------*/
/*-------Валидация форм для входа-------------------------------------*/
var formElementIn=document.in;
formElementIn.onsubmit=validateInfoFormIn;
function validateInfoFormIn() {
    var mailElement=formElementIn.elements.mail;
    var passElement=formElementIn.elements.password;

    var mailValue=mailElement.value;
    var passValue=passElement.value;
    var mailSubstr='@mail.com'
    if (!mailValue.includes(mailSubstr)) {
        alert('E-mail адрес должен содержать @mail.com')
        mailElement.value ='';
        mailElement.placeholder ='Введите корректный Email адрес';
        mailElement.focus();
        mailElement.style.borderColor='red';
        return false;
    }
    if (passValue.length<8) {
        alert('Пароль должен быть более 8 символов!')
        passElement.focus();
        passElement.style.borderColor='red';
        return false;
    }
}
/*-------------------------------------------------------------------*/
/*-------Валидация форм для контактов--------------------------------*/
var formElementCont=document.forms.contact;
formElementCont.onsubmit=validateInfoFormCont;
function validateInfoFormCont() {
    var nameElement=formElementCont.elements.name;
    var mailElement=formElementCont.elements.mail;
    var telElement=formElementCont.elements.tel;
    var mytextElement=formElementCont.elements.mytext;
    var nameValue=nameElement.value;
    var mailValue=mailElement.value;
    var telValue=telElement.value;
    var mytextValue=mytextElement.value;
    if (nameValue.length>25) {
        alert('Введите имя не более 25 символов')
        nameElement.value ='';
        nameElement.placeholder ='Введите корректное имя';
        nameElement.focus();
        nameElement.style.borderColor='red';
        return false;
    }
    var mailSubstr='@mail.com'
    if (!mailValue.includes(mailSubstr)) {
        alert('E-mail адрес должен содержать @mail.com')
        mailElement.value ='';
        mailElement.placeholder ='Введите корректный Email адрес';
        mailElement.focus();
        mailElement.style.borderColor='red';
        return false;
    }
    var telSubstr='+375'
    if (!telValue.includes(telSubstr)) {
        alert('Телефон должен начинасть с +375')
        telElement.focus();
        telElement.style.borderColor='red';
        return false;
    }
        if (mytextValue.length<30) {
        alert('Введите текст не менее 25 символов')
        mytextElement.value ='';
        mytextElement.placeholder ='Введите информацию';
        mytextElement.focus();
        mytextElement.style.borderColor='red';
        return false;
    }
}
/*-------------------------------------------------------------------*/
