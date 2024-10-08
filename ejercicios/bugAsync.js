// Este programa simula una llamada asincrona para obtener un usuario

function obtenerUsuarioCallback (id, callback) {
  setTimeout(() => {
    if (id === 1) {
      const usuario = { id: 1, nombre: 'John Doe' };
      callback(usuario);
    }
  }, 2000);
}

const usuarioCallback = obtenerUsuarioCallback(1, (usuario) => {
  return usuario ? console.log(usuario) : console.log('Usuario no encontrado')
});

// deberia hacer manejo de errores con try catch y reject pero paso a paso

function obtenerUsuarioPromise (id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (id === 1) {
        const usuario = { id: 1, nombre: 'John Doe' };
        resolve(usuario);
      }
    }, 2000);
  })
}

const usuarioPromise = obtenerUsuarioPromise(1).then(usuario => usuario ? console.log(usuario) : console.log('Usuario no encontrado'))

const fetchUsuario = async (id) => {
  const usuario = await obtenerUsuarioPromise(id)
  usuario ? console.log(usuario) : console.log('Usuario no encontrado')
}

const fetchedUsuario = fetchUsuario(1)