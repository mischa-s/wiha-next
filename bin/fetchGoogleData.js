const axios = require('axios');
const fs = require('fs');
const path = require('path');

const googleKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
const foursSheet = '1oVAQjP83uPltfgeyRLZ9S2EHfgnbGwdSA5qrMYtYNC4';
const bearSheet = '1jsZI8NV0KhKXbzwys6jdhOZbuLxwP1dm2EhCdTrTq1c';
const scheduleRange = "'Fixtures%20%2B%20Results'!A3%3AH16";
const teamStatsRange = "'Summary%20-%20Teams'!A1%3AI5";
// const playerStatsRange = "'Fixtures%20-%20Results'!A3%3AH16";
// const goalieStatsRange = "'Fixtures%20-%20Results'!A3%3AH16";

function prepareJSON(values) {
  const json = JSON.stringify(values);
  return json.replace(/Ice Bunny Brawlers/g, 'Ice Bunnies');
}

function buildObj(valuesArray) {
  const [headers, ...statsRows] = valuesArray;

  function reducer(acc, currentVal, idx) {
    const accessor = headers[idx].replace(' ', '-');
    acc[accessor] = currentVal;
    return acc;
  }

  return statsRows.map((row) => {
    return row.reduce(reducer, {});
  });
}

async function fetchData(sheet, ranges) {
  const rangeQuery = ranges.map((range) => `ranges=${range}`).join('&');
  const endpoint = `https://sheets.googleapis.com/v4/spreadsheets/${sheet}/values:batchGet?${rangeQuery}&key=${googleKey}`;

  try {
    const { data } = await axios.get(endpoint);

    const { valueRanges } = data;

    return valueRanges;
  } catch (err) {
    console.error(err, 'Sorry that did not quite work');
  }
}

async function saveDataArray(filename, dataArray) {
  const content = `export default ${prepareJSON(dataArray)}`;

  console.log(`writing spreadsheet data to ${filename}`);

  try {
    fs.writeFileSync(
      path.join(__dirname, '../', 'sheetsData', `${filename}.ts`),
      content
    );
  } catch (err) {
    console.log(`failed to write spreadsheet data to ${filename}`);
    console.error(err);
  }
}

async function fetchFoursData() {
  const valueRanges = await fetchData(foursSheet, [
    scheduleRange,
    teamStatsRange,
  ]);

  const scheduleArray = valueRanges[0].values;

  const teamsArray = buildObj(valueRanges[1].values);

  saveDataArray('foursSchedule', scheduleArray);
  saveDataArray('foursTeamStats', teamsArray);
}

async function fetchBearData() {
  const valueRanges = await fetchData(bearSheet, [
    scheduleRange,
    teamStatsRange,
  ]);

  const scheduleArray = valueRanges[0].values;
  const teamsArray = buildObj(valueRanges[1].values);

  saveDataArray('bearSchedule', scheduleArray);
  saveDataArray('bearTeamStats', teamsArray);
}

console.log('Fetching spreadsheet data');
fetchFoursData();
fetchBearData();
