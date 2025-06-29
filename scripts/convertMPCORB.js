const fs = require('fs');
const path = require('path');
const readline = require('readline');

const inputPath = path.join(__dirname, '../data/MPCORB.DAT');
const outputPath = path.join(__dirname, '../data/cometAsteroids.json');

const objects = [];
let count = 0;
const maxLines = 1000;
let dataStarted = false;

const rl = readline.createInterface({
  input: fs.createReadStream(inputPath),
  crlfDelay: Infinity
});

rl.on('line', (line) => {
  // Saltar cabecera: detectamos el comienzo de los datos al ver línea de asteriscos
  if (!dataStarted) {
    if (line.includes('---')) {
      dataStarted = true;
    }
    return;
  }

  if (count >= maxLines) {
    rl.close();
    return;
  }

  if (line.trim() === '') return;

  const name = line.substring(166, 194).trim();
  const epoch = line.substring(20, 25).trim();
  const meanAnomaly = line.substring(26, 35).trim();
  const perihelion = line.substring(37, 46).trim();
  const node = line.substring(48, 57).trim();
  const inclination = line.substring(59, 68).trim();

  objects.push({
    name,
    type: 'Asteroide',
    orbit: `Epoch: ${epoch}, M: ${meanAnomaly}, Peri: ${perihelion}, Node: ${node}, Incl: ${inclination}`,
    size: 'No disponible',
    composition: 'No disponible',
    events: 'No disponible'
  });

  count++;
});

rl.on('close', () => {
  fs.writeFileSync(outputPath, JSON.stringify(objects, null, 2));
  console.log(`Conversión completa. ${count} objetos guardados en cometAsteroids.json`);
});
