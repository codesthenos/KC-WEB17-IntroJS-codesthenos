const datos = [
  {
    id: 1,
    nombre: 'Juan',
    habilidades: ['JavaScript', 'HTML', 'CSS'],
    proyectos: [
      { id: 1, nombre: 'Proyecto 1' },
      { id: 2, nombre: 'Proyecto 2' }
    ]
  },
  {
    id: 2,
    nombre: 'María',
    habilidades: ['Python', 'SQL', 'Django'],
    proyectos: [
      { id: 3, nombre: 'Proyecto 3' },
      { id: 4, nombre: 'Proyecto 4' }
    ]
  },
  {
    id: 3,
    nombre: 'Pedro',
    habilidades: ['Java', 'Spring', 'Hibernate'],
    proyectos: [
      { id: 5, nombre: 'Proyecto 5' },
      { id: 6, nombre: 'Proyecto 6' }
    ]
  }
];

const obtenDesarrolladoresTecnologia = (tecnologia) => {
  const desarrolladoresTecnologia = datos.filter(desarrollador => desarrollador.habilidades.some(habilidad => habilidad.toLowerCase() === tecnologia.toLowerCase()));
  return desarrolladoresTecnologia;
};

const obtenProyectos = () => {
  const listadoProyectosConID = datos.flatMap(desarrollador => desarrollador.proyectos);
  const listadoProyectos = listadoProyectosConID.map(proyecto => proyecto.nombre);
  return listadoProyectos;
};

const desarroladoresJavascript = obtenDesarrolladoresTecnologia('JaVaSCripT');
console.dir(desarroladoresJavascript, { depth: null, colors: true });

const proyectos = obtenProyectos();
console.log(proyectos);