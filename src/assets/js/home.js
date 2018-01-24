$(function() {


  $.getJSON('/data/home.json', function(data) {

    $.each(data.home, function(key, value) {

    	var techRow = "<li  class='tech-link'><a class='techlist__item hovicon effect-4 sub-b' href='view.html?tech="+value.folderName +"'><img src='" +'data/'+ value.folderName +'/images/' + value.logo + " ' alt=' " + value.folderName + " '><span> " + value.technology + " </span></a></li>"
//alert(techRow);
      $(techRow).appendTo("#technology-wrap");
    });

  });

});
