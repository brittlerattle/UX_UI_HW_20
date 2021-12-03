console.log("Your index.js file is loaded corretly!");
    

$(document).ready(function(){
    $(".bubble").hover(
        function() {$(this).attr("src","images/splash images/bubble2.png");},
        function() {$(this).attr("src","images/splash images/bubble.png");},
        function() {
            $(this).effect( "shake" );
          });
    });
