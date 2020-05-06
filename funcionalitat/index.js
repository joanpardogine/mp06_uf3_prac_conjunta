var contraste = true;
$("#divHospital").addClass("bg-light");
$('#divHospital').addClass("bg-light");
$('#divPacients').addClass("bg-light");
$('#divGestio').addClass("bg-light");


$("#btnCrear").hover(
    function() {
  $('.btnCrearp').show();
  }
);
$( "#divHospital" ).hover(
    function() {
  $('.btnCrearp').hide();
  }
);

$("#btnIngressar").hover(
  function() {
$('.btnIngressarp').show();
}
);
$( "#divPacients" ).hover(
  function() {
$('.btnIngressarp').hide();
}
);

// $("#tractament").hover(
//   function() {
// // $('.tractamentp').show();
// alert('aaaaaa');
// }
// );
// $( "#divGestio" ).hover(
//   function() {
// $('.tractamentp').hide();
// alert('asdasdasd');

// }
// );





function textamanyAugmentar() {
$("label").each(function( index ) {
textamanyLlabel=$(this).css('font-size');
$(this).css('font-size', parseInt(textamanyLlabel)*1.5+"px");
});

$("h1").each(function( index ) {
textamanyH1=$(this).css('font-size');
$(this).css('font-size', parseInt(textamanyH1)*1.5+"px");
});

//prova
$(".form-control").each(function( index ) {
  control=$(this).css('font-size');
  $(this).css('font-size', parseInt(control)*1.5+"px");
});

$(".btn-success").each(function( index ) {
  success=$(this).css('font-size');
  $(this).css('font-size', parseInt(success)*1.5+"px");
});

$(".btn-danger").each(function( index ) {
  success=$(this).css('font-size');
  $(this).css('font-size', parseInt(success)*1.5+"px");
});

$("h4").each(function( index ) {
  textamanyh4=$(this).css('font-size');
  $(this).css('font-size', parseInt(textamanyh4)*1.5+"px");
});

$("li").each(function( index ) {
  lista=$(this).css('font-size');
  $(this).css('font-size', parseInt(lista)*1.5+"px");
});

$("footer").each(function( index ) {
  footer=$(this).css('font-size');
  $(this).css('font-size', parseInt(footer)*1.5+"px");
});

//prova

$("h2").each(function( index ) {
textamanyH2=$(this).css('font-size');
$(this).css('font-size', parseInt(textamanyH2)*1.5+"px");
});

$("p").each(function( index ) {
textamanyP=$(this).css('font-size');
$(this).css('font-size', parseInt(textamanyP)*1.5+"px");
});

}
function textamanyDisminuir() {
$("label").each(function( index ) {
textamanyLlabel=$(this).css('font-size');
$(this).css('font-size', parseInt(textamanyLlabel)/1.5+"px");
});

$("h1").each(function( index ) {
textamanyH1=$(this).css('font-size');
$(this).css('font-size', parseInt(textamanyH1)/1.5+"px");
});

//prova
$(".form-control").each(function( index ) {
  control=$(this).css('font-size');
  $(this).css('font-size', parseInt(control)/1.5+"px");
});

$(".btn-success").each(function( index ) {
  success=$(this).css('font-size');
  $(this).css('font-size', parseInt(success)/1.5+"px");
});

$(".btn-danger").each(function( index ) {
  success=$(this).css('font-size');
  $(this).css('font-size', parseInt(success)/1.5+"px");
});

$("h4").each(function( index ) {
  textamanyh4=$(this).css('font-size');
  $(this).css('font-size', parseInt(textamanyh4)/1.5+"px");
});

$("li").each(function( index ) {
  lista=$(this).css('font-size');
  $(this).css('font-size', parseInt(lista)/1.5+"px");
});

$("footer").each(function( index ) {
  footer=$(this).css('font-size');
  $(this).css('font-size', parseInt(footer)/1.5+"px");
});


//prova

$("h2").each(function( index ) {
textamanyH2=$(this).css('font-size');
$(this).css('font-size', parseInt(textamanyH2)/1.5+"px");
});

$("p").each(function( index ) {
textamanyP=$(this).css('font-size');
$(this).css('font-size', parseInt(textamanyP)/1.5+"px");
});
}
var primerCanviar = true;
function canviarContrast() {
if (primerCanviar){

    $("p").css('color', 'white');
    $("h1").css('color', 'white');
    $("h2").css('color', 'white');
    $("label").css('color', 'white');
    $("body").css('background-color', 'black');
    
    $("b").css('color', 'white');
    $( ".navbar " ).removeClass("navbar-light").addClass("navbar-dark bg-dark");

    $("#divHospital").removeClass("bg-light").addClass("bg-dark");
    $('#divHospital').removeClass("bg-light").addClass("bg-dark");
    $('#divPacients').removeClass("bg-light").addClass("bg-dark");
    $('#divGestio').removeClass("bg-light").addClass("bg-dark");

    $('.text-white')

    $('.btnCrearp').removeClass("text-muted").addClass("text-white");

    $('.btnIngressarp').removeClass("text-muted").addClass("text-white");


    contraste = true;
    primerCanviar = false;

}else{

    $("p").css('color', 'black');
    $("h1").css('color', 'black');
    $("h2").css('color', 'black');
    $("label").css('color', 'black');
    $("body").css('background-color', 'white');

    $("b").css('color', 'black');
    $( ".navbar " ).removeClass("navbar-dark bg-dark").addClass("navbar-light bg-light");



    $("#divHospital").removeClass("bg-dark").addClass("bg-light");
    $('#divHospital').removeClass("bg-dark").addClass("bg-light");
    $('#divPacients').removeClass("bg-dark").addClass("bg-light");
    $('#divGestio').removeClass("bg-dark").addClass("bg-light");

    $('.btnIngressarp').removeClass("text-white").addClass("text-muted");
    

    contraste = false;
    primerCanviar = true;

}

setInterval(function(){
    
  if (!primerCanviar){

    $("p").css('color', 'white');
    $("h1").css('color', 'white');
    $("h2").css('color', 'white');
    $("label").css('color', 'white');
    $("body").css('background-color', 'black');

    $("b").css('color', 'white');
    $( ".navbar " ).removeClass("navbar-light").addClass("navbar-dark bg-dark");

    $("#divHospital").removeClass("bg-light").addClass("bg-dark");
    $('#divHospital').removeClass("bg-light").addClass("bg-dark");
    $('#divPacients').removeClass("bg-light").addClass("bg-dark");
    $('#divGestio').removeClass("bg-light").addClass("bg-dark");





}else{

    $("p").css('color', 'black');
    $("h1").css('color', 'black');
    $("h2").css('color', 'black');
    $("label").css('color', 'black');
    $("body").css('background-color', 'white');

    $("b").css('color', 'black');
    $( ".navbar " ).removeClass("navbar-dark bg-dark").addClass("navbar-light bg-light");


    $("#divHospital").removeClass("bg-dark").addClass("bg-light");
    $('#divHospital').removeClass("bg-dark").addClass("bg-light");
    $('#divPacients').removeClass("bg-dark").addClass("bg-light");
    $('#divGestio').removeClass("bg-dark").addClass("bg-light");



}

  }, 30);

}
