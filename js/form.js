/*-------Валидация форм для регистрации-------------------------------*/
var formElement=document.forms[3];
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
        alert('Пароль должен быть более 8 символов!')
        passElement.focus();
        passElement.style.borderColor='red';
        return false;
    }
}

    var telElement=formElement.elements.tel;