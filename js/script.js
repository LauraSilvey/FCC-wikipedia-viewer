function getRandomWiki () {
  window.open("https://en.wikipedia.org/wiki/Special:Random"); 
};

function searchWiki () {
  /*
  store user entered query 
  show 10 results on page
  open new window when a result is clicked  
  */
};

$(document).ready(function() {
  $("#randomWiki").on("click", function(){
  	getRandomWiki();
  });
});
