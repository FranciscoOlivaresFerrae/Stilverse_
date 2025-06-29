console.log(__dirname);
console.log(require('fs').readdirSync('../'));

const planets = require('../data/planets');

exports.getAllPlanets = (req, res) => {
    res.render('planets', { title: 'Planetas del Sistema Solar', planets });
};
