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
    $("button").css('background-color', 'black');
    $("button").css('color', 'white');

    primerCanviar = false;

}else{
    $("p").css('color', 'black');
    $("h1").css('color', 'black');
    $("h2").css('color', 'black');
    $("label").css('color', 'black');
    $("body").css('background-color', 'white');
    $("button").css('background-color', 'white');
    $("button").css('color', 'black');

    primerCanviar = true;

}




}
