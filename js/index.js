console.log("Your index.js file is loaded corretly!");
    

$(document).ready(function(){
    $(".bubble").hover(
        function() {$(this).attr("src","images/splash images/bubble2.png");},
        function() {$(this).attr("src","images/splash images/bubble.png");
          });
    });


    $(document).ready(function(){
        $(".bubble").hover(
            function() {$(this).animate( {left: '22vw', bottom: '31vh'}, 500 );
        });
        $(".bubble").mouseleave(
            function() {$(this).animate( {left: '20vw', bottom: '30vh'}, 100 );
        });
    })