var contraste = true;



$("#divHospital").addClass("bg-light");
$('#divHospital').addClass("bg-light");
$('#divPacients').addClass("bg-light");
$('#divGestio').addClass("bg-light");
// if (contraste) {
//   $('#divHospital').addClass("bg-light");
//   $('#divPacients').addClass("bg-light");
//   $('#divGestio').addClass("bg-light");
// }else {
//   $('#divHospital').addClass("bg-dark");
//   $('#divPacients').addClass("bg-dark");
//   $('#divGestio').addClass("bg-dark");
// }

$( "#btnCrear" ).hover(
  function() {
$('.btnCrearp').show();
}
);
$( "#divHospital" ).hover(
  function() {
$('.btnCrearp').hide();
}
);
function textamanyAugmentar() {
$("label").each(function( index ) {
textamanyLlabel=$(this).css('font-size');
$(this).css('font-size', parseInt(textamanyLlabel)*1.5+"px");
});

$("h1").each(function( index ) {
textamanyH1=$(this).css('font-size');
$(this).css('font-size', parseInt(textamanyH1)*1.5+"px");
});

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
    // $("button").css('background-color', 'black');
    // $("button").css('color', 'white');
    $("b").css('color', 'white');
    $( ".navbar " ).removeClass("navbar-light").addClass("navbar-dark bg-dark");

    $("#divHospital").removeClass("bg-light").addClass("bg-dark");
    $('#divHospital').removeClass("bg-light").addClass("bg-dark");
    $('#divPacients').removeClass("bg-light").addClass("bg-dark");
    $('#divGestio').removeClass("bg-light").addClass("bg-dark");



    contraste = true;
    primerCanviar = false;

}else{

    $("p").css('color', 'black');
    $("h1").css('color', 'black');
    $("h2").css('color', 'black');
    $("label").css('color', 'black');
    $("body").css('background-color', 'white');
    // $("button").css('background-color', 'white');
    // $("button").css('color', 'black');
    $("b").css('color', 'black');
    $( ".navbar " ).removeClass("navbar-dark bg-dark").addClass("navbar-light bg-light");

    // $("#divHospital").removeClass("bg-dark").addClass("bg-light");

    $("#divHospital").removeClass("bg-dark").addClass("bg-light");
    $('#divHospital').removeClass("bg-dark").addClass("bg-light");
    $('#divPacients').removeClass("bg-dark").addClass("bg-light");
    $('#divGestio').removeClass("bg-dark").addClass("bg-light");


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
    // $("button").css('background-color', 'black');
    // $("button").css('color', 'white');
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
    // $("button").css('background-color', 'white');
    // $("button").css('color', 'black');
    $("b").css('color', 'black');
    $( ".navbar " ).removeClass("navbar-dark bg-dark").addClass("navbar-light bg-light");

    // $("#divHospital").removeClass("bg-dark").addClass("bg-light");

    $("#divHospital").removeClass("bg-dark").addClass("bg-light");
    $('#divHospital').removeClass("bg-dark").addClass("bg-light");
    $('#divPacients').removeClass("bg-dark").addClass("bg-light");
    $('#divGestio').removeClass("bg-dark").addClass("bg-light");



}

}, 300);

}