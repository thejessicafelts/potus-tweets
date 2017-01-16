var tweetCounter = 0;
var tweetsContainer = document.getElementById("potus-tweets");
var btn = document.getElementById("btn");



btn.addEventListener("click", function(){
  var request = new XMLHttpRequest();
  request.open('GET', 'assets/js/potus.json');
  request.onload = function(){
    var potusTweets = JSON.parse(request.responseText);
    loadTweets(potusTweets);
  };
  request.send();
});

function loadTweets(data){

  var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var date = new Date(data[tweetCounter].timestamp);
  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDate();

  var tweet = "";

  for (i = 0; i < 1; i++){
    tweet += '<div class="tweet"><p class="copy">' + data[tweetCounter].text + '</p><p class="date">' + monthNames[month] + ' ' + day + ', ' + year + '</p></div>';
    tweetCounter++;
  };

  tweetsContainer.insertAdjacentHTML('beforeend', tweet);
};
