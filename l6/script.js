//task1
function validFunc() {
    //валідність ПІБ
    const name = document.getElementById("name").value;
    if(name ==='Моргунова Анна Анатоліївна') {
        document.getElementById("name").style.border='solid green'
        document.getElementById('nameValid').innerHTML =`ПІБ: ${name}`;
    } else {
        document.getElementById("name").style.border='solid red'
        document.getElementById('nameValid').innerHTML = "Невірне ПІБ"
    }

    //валідність факультету
    const faculty = document.getElementById("faculty").value;
    if(faculty === 'ФІОТ') {
        document.getElementById("faculty").style.border='solid green'
        document.getElementById('facultyValid').innerHTML = `Група: ${faculty}`;
    }else{
        document.getElementById("faculty").style.border='solid red'
        document.getElementById('facultyValid').innerHTML = "Невірний факультет"
    }

    //валідність адреси
    const address = document.getElementById("address").value;
    if(address === 'Київ') {
        document.getElementById("address").style.border='solid green'
        document.getElementById('addressValid').innerHTML = `Місто: ${date}`;
    }else{
        document.getElementById("address").style.border='solid red'
        document.getElementById('addressValid').innerHTML = "Невірна дата народження"
    }

    //валідність дати народження
    const reg = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
    const birthdate = document.getElementById('birthdate').value;
    const validbirthdate =  reg.test(birthdate);
    if (validbirthdate){
        document.getElementById("birthdate").style.border='solid green'
        document.getElementById('birthdateValid').innerHTML =`Дата народження: ${birthdate}`;
    }
    else {
        document.getElementById("birthdate").style.border='solid red'
        document.getElementById('birthdateValid').innerHTML = "Невірно введена дата народження"
    }

    //валідність пошти
    const reEmail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    const email = document.getElementById('email').value;
    const validEmail = reEmail.test(email);
    if (validEmail){
        document.getElementById("email").style.border='solid green'
        document.getElementById('emailValid').innerHTML = `Пошта: ${email}`;
    }else {
        document.getElementById("email").style.border='solid red'
        document.getElementById('emailValid').innerHTML = "Невалідний адрес пошти";
    }
}

//task2
const first = document.getElementById('first');
const colorInput = document.getElementById('colorInput');
const sec = document.getElementById('table');

let timer

//зміна 35 клітинки на рандомний колір при наведенні
function getRandom(min, max){
    return Math.ceil(Math.random() * (max - min) + min);
};

first.addEventListener("mouseover", function() {
    first.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
});

first.addEventListener("mouseout", function() {
    first.style.backgroundColor='white';
});

//зміна коліра на обраний при кліці
var single = function(e){first.style.backgroundColor = colorInput.value;},
    double = function(e){
    first.style.backgroundColor = 'white';
    sec.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
};

var makeDoubleClick = function(e) {

    var clicks = 0,
        timeout;

    return function (e) {

        clicks++;

        if (clicks == 1) {
            timeout = setTimeout(function () {
                single(e);
                clicks = 0;
            }, 250);
        } else {
            clearTimeout(timeout);
            double(e);
            clicks = 0;
        }
    };
}
first.addEventListener('click', makeDoubleClick(), false);