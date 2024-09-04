// input1
const input1 = [
  'Downloads',
  'Videos',
  'capture',
  'mp4',
]

const buildPath = (input) => {
  // recuperamos la sublista resultante de quitar el ultimo elemento del input y unimos los elementos en una cadena de caracteres metiendo '/' entre los elementos
  const inputPath = input.slice(0, -1).join('/')
  // recuperamos el ultimo elemento del input
  const inputExtension = input.slice(-1)
  // unimos el path y la extension con un '.'
  const inputPathExtension = `${inputPath}.${inputExtension}` // inputPath + '.' + inputExtension
  return inputPathExtension
}

const pathInput1 = buildPath(input1)
console.log(pathInput1)

// input2
const input2 = [
  'CodinGame',
  'python',
  'py',
]
// La funcion buildPath creada para el primer ejemplo me sirve exactamente igual para este ejemplo
const pathInput2 = buildPath(input2)
console.log(pathInput2)

// input3
const input3 = [
  'programming',
  'languages',
  'easy',
  'beginner',
  'useful',
  'pythonstuff',
  'py',
]
// Igual, para este tercer ejemplo me sirve la funcion buildPath
const pathInput3 = buildPath(input3)
console.log(pathInput3)