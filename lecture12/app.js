let paragraphElement = document.querySelector('p');

function changeParagraphText() {
    paragraphElement.textContent = 'clicked!';
    console.log('paragraph click');
}

paragraphElement.addEventListener('click', changeParagraphText);