const { crearAlumno } = require('./alumno'); 

describe('toEqual Igualdad profunda', () => {
    
    test('Happy path: comparar objetos con toEqual', () => {
        expect(crearAlumno('Juan', 20)).toEqual({ nombre: 'Juan', edad: 20 });
    });

    test('Sad path: objetos con diferente estructura', () => {
        expect(crearAlumno('Ana', 25)).not.toEqual({ nombre: 'Ana' });
    });

    test('Sad path: objetos con mismo contenido pero diferente referencia', () => {
        const alumno1 = crearAlumno('Luis', 22);
        const alumno2 = crearAlumno('Luis', 22);
        
        expect(alumno1).toEqual(alumno2); 
        
        expect(alumno1).not.toBe(alumno2); 
    });
});