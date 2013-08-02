$(function() {
  alert($('#video_title').text());

  var title = $('#video_title').text();
  var url = 'http://rec-douga.herokuapp.com/';
  var data = {
    title: title
  }

  var xhr = new XMLHttpRequest();
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(data));
});
