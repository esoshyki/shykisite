function loginForm(form) {
    if (form.login.value == '' || form.password.value == '') {
        alert("Введите логин и пароль!");
    }
 
    else if (form.password.value === "15") {
        alert("Привет, " + form.login.value + ".");
    }
    else {
        alert(form.login.value + ", вы ввели не верный пароль!");
    }
}