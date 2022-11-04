/* taking the value of the inputs and storing it in a variable */ 
const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');

const form = document.querySelector('.login-form');

/* taking the target value and putting or removing the class 'disabled'
according to the number of characters */
const validateInput = ({ target }) => {
    if (target.value.length > 2) {
        button.removeAttribute('disabled');
    }
    else {
        button.setAttribute('disabled', '');
    }
}

const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('player', input.value);
    window.location = 'pages/game.html';
}

/* Whenever the user types something in the input, the "validate input" function will run */
input.addEventListener('input', validateInput);

form.addEventListener('submit', handleSubmit);