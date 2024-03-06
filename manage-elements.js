
// incluir elementos en el DOM usando appenchild
// crear elemento
const newButton = document.createElement('button');
newButton.textContent = 'nuevo botón';

// añadir elemento al DOM, como hijo del div con la clase container
const target = document.querySelector('.container');
target.appendChild(newButton);

// incluir elementos en el DOM usando innerHTML
const secondTarget = document.querySelector('.wrapper');
secondTarget.innerHTML = '<button> otro botón </button>';
