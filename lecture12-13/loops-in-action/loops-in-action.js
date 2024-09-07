// first : sum

const calculateSumButtonElement = document.querySelector('#calculator button');

function calculateSum() {
    const userNumberInputElement = document.getElementById('user-number');
    const enterNumber = userNumberInputElement.value;

    let sumUpToNumber = 0;

    for (let i = 0; i <= enterNumber; i++) {
        sumUpToNumber = sumUpToNumber + 1 
    }

    const outputResultElement = document.getElementById('calculated-sum');
    outputResultElement.textContent = sumUpToNumber;
    outputResultElement.style.display= 'block';
}

calculateSumButtonElement.addEventListener('click', calculateSum);

// second : highlight links

const highlightLinksElement = document.querySelector('#highlight-links button');

function highlightLinks() {
    const anchorElements = document.querySelectorAll('#highlight-links a');

    for (const anchorElement of anchorElements) {
        anchorElement.classList.add('highlight');
    }
}

highlightLinksElement.addEventListener('click', highlightLinks);

// third : display user data

const dummyUserData = {
    firstName: 'max',
    lastName: 'haha',
    age: 32
}

const displayUserDataElement = document.querySelector('#user-data button');

function displayUserData() {
    const outputData = document.getElementById('output-user-data');

    for (const key in dummyUserData) {
        const newUserDataListItemElement = document.createElement('li');
        const outputText = key.toUpperCase() + ': '+ dummyUserData[key];
        newUserDataListItemElement.textContent = outputText;
        outputData.append(newUserDataListItemElement);

    }
}

displayUserDataElement.addEventListener('click', displayUserData);

// last : while
const rollDiceButtonElement = document.querySelector('#statistics button');

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function deriveNumberOfDiceRolls() {
    const targetNumberElement = document.getElementById('user-target-number');
    const diceRollsListElement = document.getElementById('dice-rolls');
    const enterNumber = targetNumberElement.value;
    diceRollsListElement.innerHTML = '';

    let hasRolledTargetNumber = false;
    let numberOfRolls = 0;

    while (!hasRolledTargetNumber) {
        const rollNumber = rollDice();
        // if (rollNumber == enterNumber) {
        //     hasRolledTargetNumber = true;
        // }
        numberOfRolls++;
        const newRollListElement = document.createElement('li');
        const outputText = 'Roll ' + numberOfRolls + ': ' + rollNumber;
        newRollListElement.textContent = outputText;
        diceRollsListElement.append(newRollListElement);
        hasRolledTargetNumber = rollNumber == enterNumber;
    }

    const outputTotalRollsElement = document.getElementById('output-total-rolls');
    const outputTargetNumberElement = document.getElementById('output-target-number');

    outputTargetNumberElement.textContent = enterNumber;
    outputTotalRollsElement.textContent = numberOfRolls;

}

rollDiceButtonElement.addEventListener('click', deriveNumberOfDiceRolls);
