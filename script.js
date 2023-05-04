resetComponent = function(component){
    component.classList.remove("is-valid")
    component.classList.remove("is-invalid")
}

function invalidPassword(){
    passwordComponent = document.getElementById("exampleInputPassword1");
    password = passwordComponent.value;
    resetComponent(passwordComponent)
    if(password.length < 10 || !/[A-Z]/.test(password) || !/\d/.test(password) || !/[a-z]/.test(password)){
        document.getElementById("exampleInputPassword1").classList.add("is-invalid");
        return true;
    }
    return false;
}

function invalidUrl(){
    urlComponent = document.getElementById("url");
    url = urlComponent.value;
    resetComponent(urlComponent)
    if(!/http:\/\/.*|https:\/\/.*/.test(url)){
        document.getElementById("url").classList.add("is-invalid");
        return true;
    }
    return false;

}


var form = document.getElementById('assigment-1');
form.addEventListener('submit', function(event) {
    if (form.checkValidity() === false || invalidPassword() || invalidUrl()) {
        event.preventDefault();
        event.stopPropagation();
    }else{
        form.classList.add('was-validated');
    }
}, false);
