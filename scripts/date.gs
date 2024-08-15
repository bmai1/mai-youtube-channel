function updateTitleToDate() {
  let videoID = 'MPANooz_b9Q';
  let part = 'snippet,statistics';
  let params = {'id': videoID};
  
  let response = YouTube.Videos.list(part, params);
  let video = response.items[0];
  
  let now = new Date();
  let dateTime = now.toLocaleString();

  video.snippet.title = dateTime;
  
  try {
    YouTube.Videos.update(video, part);
  } 
  catch(e) {}
}
