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

function textamanyDisminuir(params) {
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