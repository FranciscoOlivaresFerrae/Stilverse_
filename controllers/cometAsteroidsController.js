const fs = require('fs');
const path = require('path');

exports.getAllCometAsteroids = (req, res) => {
  try {
    const dataPath = path.join(__dirname, '../data/cometAsteroids.json');
    const data = fs.readFileSync(dataPath, 'utf-8');
    const objects = JSON.parse(data);

    res.render('cometAsteroids', { title: 'Cometas y Asteroides', objects });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al cargar datos de cometas y asteroides');
  }
};
