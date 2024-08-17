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

let firstH1aragraph = document.querySelector('H1');
firstH1aragraph.remove();
