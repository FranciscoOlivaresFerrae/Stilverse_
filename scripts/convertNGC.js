const csv = require('csvtojson');
const fs = require('fs');

const csvFilePath = './data/NGC.csv';
const jsonFilePath = './data/deepSkyObjects.json';

csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    fs.writeFileSync(jsonFilePath, JSON.stringify(jsonObj, null, 2));
    console.log('Conversión completa. Archivo guardado en data/deepSkyObjects.json');
  })
  .catch((err) => {
    console.error('Error al convertir el archivo:', err);
  });
