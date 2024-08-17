let paragraphElement = document.querySelector('p');

function changeParagraphText() {
    paragraphElement.textContent = 'clicked!';
    console.log('paragraph click');
}

paragraphElement.addEventListener('click', changeParagraphText);

let inputElement = document.querySelector('input');

function retrieveUserInput() {
    // let enteredText = inputElement.value;
    //console.log(enteredText);
    let maxTextLength = 60;
    let textLength = inputElement.value.length;
    let spanElement = document.querySelector('span');
    spanElement.innerHTML = textLength + '/' + maxTextLength;
    
}
inputElement.addEventListener('input', retrieveUserInput);

let spanElement = document.querySelector('span');