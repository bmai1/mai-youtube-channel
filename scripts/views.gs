function updateTitle() {
  let videoID = '0_xR4xyxwRk';
  let part = 'snippet,statistics';
  let params = {'id': videoID};
  
  let response = YouTube.Videos.list(part, params);
  let video = response.items[0];
  
  let videoViewsCount = video.statistics.viewCount;
  // let videoLikeCount = video.statistics.likeCount;
  // let videoDislikeCount = video.statistics.dislikeCount;
  // let videoCommentCount = video.statistics.commentCount;

  let videoTitle = videoViewsCount;
  
  video.snippet.title = videoTitle;
  
  try {
    YouTube.Videos.update(video, part);
  } 
  catch(e) {}
}