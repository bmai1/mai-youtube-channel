function getRandomWordFromFile() {
  // google sheets dictionary
  let fileId = '1o-72izllNbSPfDCNMLLTAZQ3oVTxO2Wt';
  let file = DriveApp.getFileById(fileId);
  let fileContent = file.getBlob().getDataAsString();
  let words = fileContent.split(/\s+|,|\n/).filter(Boolean);
  
  let randomIndex = Math.floor(Math.random() * words.length);
  let randomWord = words[randomIndex];
  return randomWord;
}

function main() {
  let randomWord = getRandomWordFromFile();

  let videoID = 't6aPIsMSMqA';
  let part = 'snippet,statistics';
  let params = {'id': videoID};
  
  let response = YouTube.Videos.list(part, params);
  let video = response.items[0];

  video.snippet.title = randomWord;
  
  try {
    YouTube.Videos.update(video, part);
  } 
  catch(e) {}
}