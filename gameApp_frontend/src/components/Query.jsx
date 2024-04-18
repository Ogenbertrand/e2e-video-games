// const { google } = require('googleapis');

// async function fetchLatestGames() {
//     const credentials = require('./credential.json');

//     const auth = new google.auth.GoogleAuth({
//         keyFile: credentials,
//         scopes: ['https://www.googleapis.com/auth/spreadsheets'],
//     });
    
//     // get the client from the authenticated connection to Google Sheets API
//     const sheetsClient = await auth.getClient();

//     // create a request object for accessing the Google Sheets API
//     const playDeveloper = google.androidpublisher({
//         version: 'v3',
//         auth: sheetsClient
//     });

//     const response = await playDeveloper.edits.bundles.list({
//         packageName: 'com.gameSearch',
//         editId: 'latest'
//     });

//     const latestGames = response.data.edits;
//     if (latestGames) {
//         return latestGames[0].bundle;
//     } else {
//         console.log(`No games found in the latest edit.`);
//         process.exit(1);
//     }
// }
   
// module.exports = fetchLatestGames;