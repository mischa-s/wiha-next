const axios = require('axios');
const fs = require('fs');
const path = require('path');

const googleKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
const scheduleRange = "'Fixtures%20%2B%20Results'!A3%3AH16";
const foursSheet = '1oVAQjP83uPltfgeyRLZ9S2EHfgnbGwdSA5qrMYtYNC4';
const bearSheet = '1jsZI8NV0KhKXbzwys6jdhOZbuLxwP1dm2EhCdTrTq1c';

const fetchData = async (sheet, range) => {
  // const rangeQuery = ranges.map(range => `ranges=${range}`)
  const endpoint = `https://sheets.googleapis.com/v4/spreadsheets/${sheet}/values:batchGet?ranges=${range}&access_token=${googleKey}&key=${googleKey}`;

  try {
    const { data } = await axios.get(endpoint);

    const { valueRanges } = data;

    return valueRanges;
  } catch (err) {
    console.error(err, 'Sorry that did not quite work');
  }
};

async function fetchScheduleData(filename, sheet) {
  const valueRanges = await fetchData(sheet, scheduleRange);

  const scheduleArray = valueRanges[0].values;

  const content = `export default ${JSON.stringify(scheduleArray)}`;

  try {
    fs.writeFileSync(
      path.join(__dirname, '../', 'sheetsData', `${filename}.ts`),
      content
    );
  } catch (err) {
    console.error(err);
  }
}

function fetchFoursData() {
  fetchScheduleData('foursSchedule', foursSheet);
}

function fetchBearData() {
  fetchScheduleData('bearSchedule', bearSheet);
}

fetchFoursData();
fetchBearData();
