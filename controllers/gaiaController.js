const axios = require('axios');
const xml2js = require('xml2js');

async function fetchStars() {
  const query = `
    SELECT TOP 1000 source_id, ra, dec, phot_g_mean_mag
    FROM gaiadr3.gaia_source
    WHERE phot_g_mean_mag < 12
  `;

  try {
    const response = await axios.post(
      'https://gea.esac.esa.int/tap-server/tap/sync',
      new URLSearchParams({
        REQUEST: 'doQuery',
        LANG: 'ADQL',
        FORMAT: 'votable',
        QUERY: query
      }),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
    );

    const parser = new xml2js.Parser();
    const result = await parser.parseStringPromise(response.data);
    console.log('RESULT:', JSON.stringify(result, null, 2));


    const rows =
      result.VOTABLE?.RESOURCE?.[0]?.TABLE?.[0]?.DATA?.[0]?.TABLEDATA?.[0]?.TR || [];

    const stars = rows.map(row => {
      const [id, ra, dec, mag] = row.TD;
      return {
        id,
        ra,
        dec,
        mag
      };
    });

    return stars;
  } catch (error) {
    console.error('Error al obtener datos de Gaia:', error);
    return [];
  }
}

module.exports = { fetchStars };
