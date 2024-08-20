function monthDay() {
  let videoID = 'DNSMMc3r5qk';
  let part = 'snippet,statistics';
  let params = {'id': videoID};

  let response = YouTube.Videos.list(part, params);
  let video = response.items[0];

  let months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
  let now = new Date();
  let month = now.getMonth();
  let day = now.getDate();

  // Logger.log(months[month] + " " + day);

  video.snippet.title = "best before " + months[month] + " " + day;
  
  try{
    YouTube.Videos.update(video, part);
  } 
  catch(e){}
}
