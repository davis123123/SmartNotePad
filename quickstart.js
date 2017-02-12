'use strict';

// [START language_quickstart]
// Imports the Google Cloud client library
const Language = require('@google-cloud/language');

// Your Google Cloud Platform project ID
const projectId = 'smartnotepad-156308';

// Instantiates a client
const languageClient = Language({
  projectId: 'smartnotepad-156308',
  keyFilename: 'smartnotepad-44989812eaf4.json'
});

// The text to analyze
const text = 'Google, headquartered in Mountain View, unveiled the new Android phone at the Consumer Electronic Show.  Sundar Pichai said in his keynote that users love their new Android phones.';

//console.log(text);

// Detects the sentiment of the text
languageClient.detectSentiment(text)
  .then((results) => {
    const sentiment = results[0];
    console.log(text);

    console.log(`Text: ${text}`);
    console.log(`Sentiment: ${sentiment}`);
  });
// [END language_quickstart]