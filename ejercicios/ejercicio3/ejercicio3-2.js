// input
const input = 10;

const separateUnits = (input) => {
  // transformo el input de Number a String
  const stringInput = String(input);
  // creo una lista con todos los digitos del input usando el spread operator
  const listInput = [...stringInput];
  // usando el metodo String.split()
  const splitInput = stringInput.split('')
  // uno los elementos de la lista como en el ejercicio anterior
  const unitsInput = listInput.join('-');

  return unitsInput;
};

const unitsInput = separateUnits(input);
console.log(unitsInput);

// secondInput
const secondInput = 1;
// igual que en el ejericio anterior la funcion separateUnits me sirve para este ejemplo
const unitsSecondInput = separateUnits(secondInput);
console.log(unitsSecondInput);

// thirdInput
const thirdInput = 11234;
// igual que en el ejericio anterior la funcion separateUnits me sirve para este ejemplo
const unitsThirdInput = separateUnits(thirdInput);
console.log(unitsThirdInput);