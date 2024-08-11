let h1Element = document.body.children[0];
console.dir(h1Element.parentElement);
console.dir(h1Element.nextElementSibling);

h1Element = document.getElementById('h1-id');
console.dir(h1Element);


let pElement = document.querySelector('.second-p');
console.dir(pElement);
pElement.textContent = 'hahahaha';
console.dir(pElement.textContent);