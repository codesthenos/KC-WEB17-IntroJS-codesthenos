// input1
const input1 = 'string';

const reverseAndLength = (input) => {
  // recuperamos la longitud del input
  const length = input.length;
  // recuperamos la lista formada por los caracteres del input, le damos la vuelta, unimos los elementos en un string
  const reversedInput = [...input].toReversed().join('');
  // devolvemos la cadena de texto buscada
  return `${length} ${reversedInput}`;
};

const reversedAndLengthInput = reverseAndLength(input1);
console.log(reversedAndLengthInput);

// input2
const input2 = 'variable';
// igual que en los anteriores, la funcion de arriba me sirve para el resto de ejemplos
const reversedAndLengthInput2 = reverseAndLength(input2);
console.log(reversedAndLengthInput2);

// input 3
const input3 = 'pointer';
// igual que en los anteriores, la funcion de arriba me sirve para el resto de ejemplos
const reversedAndLengthInput3 = reverseAndLength(input3);
console.log(reversedAndLengthInput3);