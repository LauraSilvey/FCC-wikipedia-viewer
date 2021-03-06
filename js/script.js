var userQuery = "";

function getRandomWiki () {
  window.open("https://en.wikipedia.org/wiki/Special:Random"); 
};

function newBox(title, description){
  var newP = document.createElement("p");
  var newHeader = document.createElement("h3")
  var newDiv = document.createElement("div");
      
  $("#results").append(newDiv);
  $(newDiv).addClass("container well");
  $(newDiv).append(newHeader, newP);
  $(newHeader).addClass(title);
  $(newP).addClass(description);
};

function searchWiki () {
  // store user query in useable format
  userQuery = $("#query").val().toLowerCase();
  userQuery = encodeURI(userQuery);

  if (userQuery.length > 0){
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + userQuery + "&callback=?";
  
    $.getJSON(url, function(data){
      for (var i = 0; i < data[1].length; i ++){
        var currentTitle = "title" + i;
        var currentDescription = "description" + i;

        newBox(currentTitle, currentDescription);
        $('.' + currentTitle).html(data[1][0 + i]);
        $('.' + currentTitle).wrap('<a href="' + data[3][0 + i] + '" target="blank" />');
        $('.' + currentDescription).html(data[2][0 + i]);     
      }
    });
  }
};

$(document).ready(function() {
  $("#randomWiki").on("click", function(){
  	getRandomWiki();
  });

  $("#searchButton").on("click", function() {
      $("#results").empty();
      searchWiki(); 
  });

  $("#query").on("keypress", function(event){
    if (event.which === 13){
      $("#results").empty();
      searchWiki();
    }
  });
});
