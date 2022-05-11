let username;
let surname;
let city;
let age;
let anni;

function dati(){
    username = document.getElementById('nome').value;
    console.log(username);
    document.getElementById('risposta1').innerHTML = username;

    surname = document.getElementById('cognome').value;
    console.log(surname);
    document.getElementById('risposta2').innerHTML = surname;

    city = document.getElementById('citta').value;
    console.log(city);
    document.getElementById('risposta3').innerHTML = city;

    age = document.getElementById('eta').value;
    console.log(age);
    document.getElementById('risposta4').innerHTML = age;

    if (age >= 70){
        document.getElementById('anni').innerHTML = 'Sei già in pensione';
        console.log('Sei già in pensione');
    }
    else {
        document.getElementById('anni').innerHTML = ('70' - age);
        console.log('70' - age);
    }
}

let num1;
let num2;
let piu = num1+num2;
let meno = num1-num2;
let per = num1*num2;
let diviso = num1/num2;

function somma(){
    num1 = document.getElementById('num1').value;
    console.log(num1);
    num2 = document.getElementById('num2').value;
    console.log(num2);

    document.getElementById('risultato').innerHTML = piu;
    console.log(piu);
}

function sottr(){
    num1 = document.getElementById('num1').value;
    console.log(num1);
    num2 = document.getElementById('num2').value;
    console.log(num2);

    document.getElementById('risultato').innerHTML = meno;
    console.log(meno);
}

function molti(){
    num1 = document.getElementById('num1').value;
    console.log(num1);
    num2 = document.getElementById('num2').value;
    console.log(num2);

    document.getElementById('risultato').innerHTML = per;
    console.log(per);
}

function divi(){
    num1 = document.getElementById('num1').value;
    console.log(num1);
    num2 = document.getElementById('num2').value;
    console.log(num2);

    document.getElementById('risultato').innerHTML = diviso;
    console.log(diviso);
}