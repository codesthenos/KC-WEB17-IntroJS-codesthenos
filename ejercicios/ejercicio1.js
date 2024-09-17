const usuario = {
  nombre: 'codesthenos',
  apellidos: 'ataraxia',
  'modulos-bootcam-web17': [
    {
      nombre: 'NodeJs',
      fecha: '2024-10-21'
    },
    {
      nombre: 'Git',
      fecha: '2024-09-18'
    },
    {
      nombre: 'React',
      fecha: '2024-12-16'
    }
  ],
  'busqueda activa': false
}

console.log(usuario['modulos-bootcam-web17'][2].fecha)