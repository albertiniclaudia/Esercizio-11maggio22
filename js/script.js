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

