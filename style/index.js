
       $(function(){
            $("#circle").hide();
            $("#box").animate({height:"280px"},"slow");
            $("#circle").fadeIn(1000);

             $("input").hover(function(){
                $("label").css("font-size", "29pt");
                }, function(){
                    $("label").css("font-size", "15pt");
            });

             $("#intro").hover(function(){
                $("#intro").css("font-size", "25pt");
                $("#intro").css(" font-weight", "900");
                }, function(){
                    $("#intro").css("font-size", "12pt");
            });
              $("#butCrear").hover(function(){
                $("#butCrear").css("width", "30%");
                $("#butCrear").css("background-color", "#0047b3");
                $("#show").css("display", "block");
                 }, function(){
                    $("#butCrear").css("width", "10%");
                    $("#butCrear").css("background-color", "#0069d9");
                    $("#butCrear").css("font-size", "12pt");
                    $("#show").css("display", "none");
            });
            $("#contrast").click(function(){
                 $("Body1").css("background-color", "black");
                 $("Body1").css("color", "white");
                 }, function(){
                    $("Body1").css("background-color", "white");
                    $("Body1").css("color", "black");
            });
        });
        function blinker(){
            $('#blinking').fadeOut("slow");
            $('#blinking').fadeIn("slow");
        }
        setInterval(blinker, 1000);

function contrast(){
    document.getElementById('Body1').style.background='black';
    document.getElementById('Body1').style.color='white';
    document.getElementById('contrast1').style.display='block';
     document.getElementById('contrast').style.display='none';
}
function contrast1(){
    document.getElementById('Body1').style.background='white';
    document.getElementById('Body1').style.color='black';
    document.getElementById('contrast1').style.display='none';
     document.getElementById('contrast').style.display='block';
}
        
       