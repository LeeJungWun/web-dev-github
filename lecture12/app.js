// console.dir(document);
// alert();
// window.alert();

let anchorElement = document.getElementById('external-link');
anchorElement.href = 'https://google.com';

anchorElement = document.querySelector('p a'); // p a { color: red; }
anchorElement.href = 'https://academind.com';

let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://google.com';
newAnchorElement.textContent = 'This leads to Google';

let firstParagraph = document.querySelector('p');
firstParagraph.append(newAnchorElement);

let firstH1Element = document.querySelector('H1');
firstH1Element.remove();

firstParagraph.parentElement.append(firstParagraph);

firstParagraph.innerHTML = 'Hi! This is <strong>important</strong>';