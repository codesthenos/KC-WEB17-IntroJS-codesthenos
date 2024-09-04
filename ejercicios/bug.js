// El error estaba en i <= longitud de la lista, los indices van desde 0 hasta length - 1
const calcularPromedio = (numeros) => {
  let sumaTotal = 0;

  for (let i = 0; i < numeros.length; i++) {
    sumaTotal += numeros[i]
  }

  const promedio = sumaTotal / numeros.length;

  return promedio;
};

const listaNumeros = [1, 2, 3, 4, 5];
const listaCincos = [5, 5, 5, 5, 5, 5, 5, 5, 5];
const promedioNumeros = calcularPromedio(listaNumeros);
const promedioCincos = calcularPromedio(listaCincos);
console.log(promedioNumeros);
console.log(promedioCincos)