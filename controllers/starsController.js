const fs = require('fs');
const path = require('path');

let estrellas = [];

function cargarEstrellas() {
  try {
    const dataPath = path.join(__dirname, '..', 'public', 'data', 'estrellas.json');
    const data = fs.readFileSync(dataPath, 'utf-8');
    estrellas = JSON.parse(data);
    console.log('Datos de estrellas cargados correctamente');
  } catch (error) {
    console.error('Error al cargar datos de estrellas:', error);
    estrellas = [];
  }
}

function obtenerEstrellas() {
  return estrellas;
}

cargarEstrellas();

module.exports = { obtenerEstrellas };
