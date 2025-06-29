const fs = require('fs');
const path = require('path');

exports.getAllDeepSkyObjects = (req, res) => {
  try {
    const dataPath = path.join(__dirname, '../data/deepSkyObjects_fixed.json');
    const data = fs.readFileSync(dataPath, 'utf-8');
    const objects = JSON.parse(data);

    res.render('deepSky', { title: 'Objetos del Cielo Profundo', objects });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al cargar datos de objetos del cielo profundo');
  }
};
