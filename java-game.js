//ZMIENNE

let Hint1 = "This number is divisible by 2 numbers"
let Hint2 = "This is a prime number"
let Hint3 = "This number can be written by a line and a curve"
let Hint4 = "This is a small number"

let Hint5 = "This number has 2 digits"
let Hint6 = "This is a large number"
let Hint7 = "This number is divisible by 4 numbers"
let Hint8 = "This is an even number"

const Hints = {
    1: ['This is not an even number', 'This number is less than 3', 'This is a very small number', 'This number can be written by a two lines'],
    2: ['This number is divisible by 2 numbers', 'This is a prime number', ' 2 This number can be written by a line and a curve', 'This is a small number', 'This number is less than 3'],
    3: ['This number is between 2-4', 'This is a prime number', 'This number can be written by two curves'],
    4: ['This is an even number', 'This number is between 2-4', 'This number is greater than 2', 'This number is divisible by 3 numbers'],
    5: ['This is a prime number', 'This number is between 5-7', "This number isn't small and large",],
    6: ['This is an even number', 'This number is between 5-7', 'This number is divisible by 4 numbers'],
    7: ['This is a prime number', 'This number is between 5-7', 'This is a large number', 'This number can be written by a two lines'],
    8: ['This is an even number', 'This number is greater by 7', 'This number has curves when written?', 'This number is divisible by 4 numbers'],
    9: ['This is not an even number', 'This number is divisible by 3 numbers', 'This number has curves when written?', 'This is a large number'],
    10: ['This number has 2 digits', 'This is a large number', 'This number is divisible by 4 numbers', 'This is an even number'],
}

const Numbers = [2,10]

let usedHints = [];

let randomHint;

let checkIfHintWasUsed;

let everyHintsWasUsed = false;

let yourPoints = 0;

let yourGuess;

let onlyOneTry = false;


//START GRY

document.getElementById('startButton').onclick = function() {

yourPoints = 0;
document.getElementById('pointLabel').innerHTML = yourPoints;

//ZMIANA NA RESET

document.getElementById('startButton').innerHTML = 'Reset game';


//LOSOWANIE NUMERU

let randomNumber = Numbers[Math.floor(Math.random() * (Numbers.length))];
console.log(randomNumber);

//FUNKCJA LOSUJĄCA PODPOWIEDŹ

function getRandomHint (){
    let HintCategory = Hints[randomNumber];
    let indexOfHint = Math.floor(Math.random() * (HintCategory.length));
    let randomHint = HintCategory[indexOfHint];
    console.log(randomHint);
    return randomHint;
}

//FUNKCJA UMIESZCZAJĄCA WYLOSOWANĄ PODPOWIEDŹ NA TABLICY USEDHINTS

function pushUsedHints (randomHint){
    if(usedHints.includes(randomHint)){

    }
    else{usedHints.push(randomHint);
    console.log(usedHints);
    }
}

//FUNKCJA SORTUJĄCA I PORÓWNUJĄCA TABLICE

function arraysAreEqual(arr1, arr2) {
    arr1.sort();
    arr2.sort();
    
    if (arr1.length !== arr2.length) {
        return false;
    }
    else{
        
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

//FUNKCJA PORÓWNUJĄCA PODPOWIEDZI W USEDHINTS I RANDOMHINTS

function compareHints() {
    if (arraysAreEqual(usedHints, Hints[randomNumber])) {
        console.log("Wszystkie podpowiedzi zostały użyte.");
        everyHintsWasUsed = true;

    } else if (usedHints.includes(randomHint)) {
        console.log("Podpowiedz została użyta");
        checkIfHintWasUsed = true;

    } else {
        console.log("Podpowiedź nie została użyta");
        checkIfHintWasUsed = false;
    }
}

//PIERWSZA PODPOWIEDŹ

randomHint = getRandomHint ();
arraysAreEqual(usedHints, Hints[randomNumber])
compareHints();
pushUsedHints(randomHint);
document.getElementById('placeOfHint').innerHTML = randomHint

if (everyHintsWasUsed == true){
    document.getElementById('usedHintInfo').innerHTML = 'You used every hints';
}
else {

}


//FUNKCJA NA BUTTONIE HINT

document.getElementById('getHintButton').onclick = function (){

        if(onlyOneTry == false){
        randomHint = getRandomHint ();
        arraysAreEqual(usedHints, Hints[randomNumber])
        compareHints();
        notTheSameHint();
        pushUsedHints(randomHint);
        document.getElementById('placeOfHint').innerHTML = randomHint
        document.getElementById('usedHintInfo').innerHTML = ' '
        }
        else{}


        if(checkIfHintWasUsed == false){
            yourPoints -= 1;
            console.log(yourPoints)
        }
        else {}


        if (everyHintsWasUsed == true){
            document.getElementById('usedHintInfo').innerHTML = 'You used every hints';
            yourPoints += 1;
        }
        else {}
        
        document.getElementById('pointLabel').innerHTML = yourPoints;
    }

// FUNKCJA NA BUTTONIE SUBMIT

let checkIfGuessIsCorrect = false;
let onlyOneTry = false;

document.getElementById('submitButton').onclick = function (){
    yourGuess = document.getElementById('yourGuessInp').value;
    console.log(yourGuess);

    if(yourGuess == randomNumber){
        console.log('Poprawna odp')
        checkIfGuessIsCorrect = true;
        console.log(checkIfGuessIsCorrect);
    }
    else{
        console.log('Zła odp')
        document.getElementById('usedHintInfo').innerHTML = 'Wrong answer  :( Try again';
        yourPoints -=1;
        console.log(checkIfGuessIsCorrect);
        document.getElementById("pointLabel").innerHTML = yourPoints;
    }

    if(checkIfGuessIsCorrect == true && onlyOneTry == false){
        document.getElementById('placeOfHint').innerHTML = 'Congratulation! Get a new number!'
        document.getElementById('usedHintInfo').innerHTML = ' '
        yourPoints +=2;
        console.log(yourPoints);
        onlyOneTry = true;
        document.getElementById("pointLabel").innerHTML = yourPoints;

    }
}

//FUNKCJA GET ANOTHER NUMBER (RESET, NOWA LICZBA, NOWA PIERWSZA PODPOWIEDŹ)

document.getElementById('getAnotherNumber').onclick = function (){

    usedHints = [];
    console.log(usedHints);
    randomNumber = 0;
    onlyOneTry = false;
    everyHintsWasUsed = false;
    checkIfGuessIsCorrect = false;


    randomNumber = Numbers[Math.floor(Math.random() * (Numbers.length))];
    console.log(randomNumber);

    randomHint = getRandomHint ();
    arraysAreEqual(usedHints, Hints[randomNumber])
    compareHints();
    pushUsedHints(randomHint);
    document.getElementById('placeOfHint').innerHTML = randomHint

    if (everyHintsWasUsed == true){
        document.getElementById('usedHintInfo').innerHTML = 'You used every hints';
    }
    else {

    }

}


//FUNKCJA UNIKANIA POWTARZAJĄCYCH SIĘ PODPOWIEDZI

function notTheSameHint() {

    console.log('taaaak');
    console.log(checkIfHintWasUsed);

    while (checkIfHintWasUsed == true || everyHintsWasUsed == true) {

        checkIfHintWasUsed = false;
        console.log(checkIfHintWasUsed);
        action();

        if (checkIfHintWasUsed == false) {
            break;
        }

    }}


//FUNKCJE PO KOLEI

function action(){
    randomHint = getRandomHint ();
    arraysAreEqual(usedHints, Hints[randomNumber])
    compareHints();
    pushUsedHints(randomHint);
}

}

  /*  if(usedHints.length === hintCategory.length && hintCategory.every(hint => usedHints.includes(hint))){
        console.log("You used every hints")
    }
    else */