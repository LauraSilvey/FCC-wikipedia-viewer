var userQuery = "";

function getRandomWiki () {
  window.open("https://en.wikipedia.org/wiki/Special:Random"); 
};

function searchWiki () {
  // store user query in useable format
  userQuery = $("#query").val().toLowerCase();
  userQuery = encodeURI(userQuery);
  
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + userQuery + "&callback=?";
  
  $.getJSON(url, function(data){
    $("p").html(data[1][0]);
  });
  /* 
  show 10 results on page
  open new window when a result is clicked  
  */
};

$(document).ready(function() {
  $("#randomWiki").on("click", function(){
  	getRandomWiki();
  });

  $("#searchButton").on("click", function() {
    searchWiki();
  });


});
