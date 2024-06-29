// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const passwordElement = document.getElementById('password');
const lengthTextElement = document.getElementById('password-length');
const rangeElement = document.getElementById('range');
const buttonGenerateElement = document.getElementById('generate-password');
const uppercaseInputElment = document.getElementById('uppercase-input');
const lowercaseInputElment = document.getElementById('lowercase-input');
const numbersInputElment = document.getElementById('numbers-input');
const symbolsInputElment = document.getElementById('symbols-input');

const upperCaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
const numbersCharacters = '0123456789';
const symbolsCharacters = '+-.,!"·$%&/(){}';
let allowedCharacters = '';

let passwordLength = 16;

const setPasswordLenght = event => {
  //asignar longitud de password
  //lengthTextElement.textContent = event.target.value; Sustituido por:
  passwordLength = event.target.value;
  lengthTextElement.textContent = passwordLength;
};
const printPassword = password => {
  passwordElement.value = password;
};

const setDisabledButton = () => {
  if (uppercaseInputElment.checked) {
    buttonGenerateElement.disabled = false;
  } else if (lowercaseInputElment.checked) {
    buttonGenerateElement.disabled = false;
  } else if (numbersInputElment.checked) {
    buttonGenerateElement.disabled = false;
  } else {
    buttonGenerateElement.disabled = true;
  }
};
/* otra manera de hacerlo
const setDisabledButton = () =>{
  if(allowedCharacters.length){
  buttonGenerateElement.disabled = false;
  }else{
  buttonGenerateElement.disabled = true;
  }
  };
*/
const checkPasswordOptions = () => {
  allowedCharacters = '';

  if (uppercaseInputElment.checked) {
    allowedCharacters += upperCaseCharacters;
  }

  if (lowercaseInputElment.checked) {
    allowedCharacters += lowerCaseCharacters;
  }

  if (numbersInputElment.checked) {
    allowedCharacters += numbersCharacters;
  }
  if (symbolsInputElment.checked) {
    allowedCharacters += symbolsCharacters;
  }
  //console.log(allowedCharacters);
  setDisabledButton();
  return allowedCharacters;
};

const generatePassword = () => {
  //longitud del password
  //generar un caracter aleatorio
  //guardar el password

  let newPassword = '';
  for (let index = 0; index < passwordLength; index++) {
    const randomNumber = Math.floor(Math.random() * allowedCharacters.length);
    const randomCharacter = allowedCharacters.charAt(randomNumber);
    newPassword += randomCharacter;
  }
  printPassword(newPassword);
};
rangeElement.addEventListener('input', setPasswordLenght);
buttonGenerateElement.addEventListener('click', generatePassword);

uppercaseInputElment.addEventListener('input', checkPasswordOptions);
lowercaseInputElment.addEventListener('input', checkPasswordOptions);
numbersInputElment.addEventListener('input', checkPasswordOptions);
symbolsInputElment.addEventListener('input', checkPasswordOptions);
