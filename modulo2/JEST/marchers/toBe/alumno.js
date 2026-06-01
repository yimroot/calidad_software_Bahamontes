function crearAlumno(nombre, edad) {
    if (!nombre || typeof nombre !== 'string') {
        throw new TypeError('El nombre debe ser una cadena de texto');
    }
    if (typeof edad !== 'number' || edad < 0) {
        throw new TypeError('La edad debe ser un número positivo');
    }
    return { nombre, edad };
}

module.exports = { crearAlumno };