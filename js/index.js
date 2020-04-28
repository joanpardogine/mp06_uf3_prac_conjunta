//JQUERY per canviar el tema de la web de color
$( document ).ready(function() {
  $( '#canviatemaw' ).hide();
  console.log( "ready!" );
  $( "#canviatemab" ).click(function() {
    $( 'body' ).css( "background-color", "black" );
    $( 'body' ).css( "color", "white" );
    $( '#canviatemab' ).hide();
    $( '#canviatemaw' ).show();
  });
  $( "#canviatemaw" ).click(function() {
    $( 'body' ).css( "background-color", "white" );
    $( 'body' ).css( "color", "black" );
    $( '#canviatemaw' ).hide();
    $( '#canviatemab' ).show();
  });

//Fer zoom al navegador
var currentZoom = 1;
$('#zoomin').click(function() {
  if(currentZoom < 1.3){
    currentZoom += 0.1;
    $('body').css({
        zoom: currentZoom,
        '-moz-transform': 'scale(' + currentZoom + ')'
    });
  }
});
$('#zoomout').click(function() {
  if(currentZoom >= 0.8){
    currentZoom -= 0.1;
    $('body').css({
      zoom: currentZoom,
      '-moz-transform': 'scale(' + currentZoom + ')'
  });
  }
});
$('#zoomdef').click(function() {
    currentZoom = 1;
    $('body').css({
        zoom: currentZoom,
        '-moz-transform': 'scale(' + currentZoom + ')'
    });
});
});

hospital = null;
// var pacients = [];
var eleID_h1Titol = document.getElementById("h1TitolHospital");
var eleID_nomHospital = document.getElementById("nomHospital");
var eleID_divPacients = document.getElementById("divPacients");
var eleID_divGestio = document.getElementById("divGestio");
var eleID_divHospital = document.getElementById("divHospital");
var eleID_barra_missatges = document.getElementById("barra_missatges");
var eleID_a_text_missatge = document.getElementById("text_barra_missatges");

function validaQueNoEsBuit(cadenaAValidar) {
  //var x, text;
  // Get the value of the input field with id="numb"
  //x = document.getElementById("numb").value;

  // If x is Not a Number or less than one or greater than 10
  if (cadenaAValidar=="") {
    alert("és buit!");
  } 
}

function validaQueEsNombre() {
  var x, text;
  var min, max;
  min = 1;
  max = 10;
  // Get the value of the input field with id="numb"
  x = document.getElementById("numb").value;

  // If x is Not a Number or less than one or greater than 10
  if (isNaN(x)) {
    text = "Input not valid";
    
    document.getElementById("numb").style.border = "2px solid red";
  } else {
  	if  (x < min && x > max) {
        text = "Input OK";
    } else {
    	if (x == ""){
    		text = "Input empty";
        } else {
        	text = "Input NOK";
        }
    }
  }
  
  
  document.getElementById("demo").innerHTML = text;
}

function crearHospital() {
  var nom = document.getElementById("nomHospital").value.toString();
  var maximPacients = parseInt(document.getElementById("maximPacientsHospital").value);

  if (nom !== "" && maximPacients > 0) {
      eleID_h1Titol.innerHTML="<h2>Gestió de l'hospital</h2>" + 
          "<h1><b>" + 
          nom + 
          "</b></h1>";
    debugger;
      hospital = new Hospital(nom, maximPacients);
      eleID_divHospital.classList.toggle("d-none");
      var cadenaFilaPacient_1,cadenaFilaPacient_2,cadenaFilaPacient_3;
      cadenaFilaPacient_1 = '<div class="row">' +
                            '<div class="col mb-3">' +
                            '<label for="nomPacient" class="font-weight-bold"> Nom del pacient: </label>' +
                            '<input type="text" id="nomPacient';
                            
      cadenaFilaPacient_2 = '" class="form-control" required minlength="1" maxlength="100" />' +
                            '  </div> <!-- <div class="col mb-3"> -->' +
                            '  <div class="col mb-3">' +
                            '    <label for="malaltia" class="font-weight-bold">Malaltia a tractar: </label>' +
                            '    <input type="text" id="malaltia';
      cadenaFilaPacient_3 = '" class="form-control" required minlength="1" maxlength="100" />' +
                            '  </div> <!-- <div class="col mb-3"> -->' +
                            '</div> <!-- <div class="row"> -->';
                              
      for (var pacient = 0; pacient < maximPacients; pacient++) {
        document.getElementById("dadesPacient").innerHTML += ( '' +
            cadenaFilaPacient_1 + 
            pacient.toString() +
            cadenaFilaPacient_2 + 
            pacient.toString() +
            cadenaFilaPacient_3);
      }
      eleID_divPacients.classList.toggle("d-none");
  } else {
    //barra_missatges
    eleID_barra_missatges.classList.toggle("d-none");
    if (nom !== "") {
        eleID_a_text_missatge.innerText = "Cal que entris un nombre al camp màxim pacients!";
    } else if(maximPacients > 0){  
        eleID_a_text_missatge.innerText = "Cal que entris un nom al camp Hospital!";
    } else {
        eleID_a_text_missatge.innerText = "Cal que entris un nom al camp Hospital i un nombre al camp màxim pacients!";
    }
    
  }
}

function ingressarPacients() {

  var nom = "";
  var malaltia = "";

  for (var pacient = 0; pacient < hospital.maximPacients; pacient++) {
    nom = document.getElementById("nomPacient" + pacient.toString()).value.toString();
    malaltia = document.getElementById("malaltia" + pacient.toString()).value.toString();

    if (nom !== "" && malaltia !== "") {
      if (hospital !== null) {
          hospital.ingressarPacient(new Pacient(nom, malaltia));
      }
    }
  }

  if (hospital !== null && (hospital.pacientsIngressats.length <= hospital.maximPacients)) {
    eleID_divPacients.classList.toggle("d-none");
    
    // document.getElementById("nomHospitalGestio").innerHTML = hospital.nomHospital;

    for (var pacient = 0; pacient < hospital.pacientsIngressats.length; pacient++) {
      document.getElementById("dadesGestio").innerHTML += ('<div class="row" id="dadesGestioPacient' + pacient.toString() + '">' +
        '<div class="col mb-3">' +
          '<label for="nomPacientGestio" class="font-weight-bold">Nom: </label>   <p id="nomPacientGestio' + pacient.toString() + '">' + hospital.pacientsIngressats[pacient].nom  + '</p>' +
        '</div>' +
        '<div class="col mb-3">' +
          '<label for="malaltia" class="font-weight-bold">Malaltia: </label>  <p id="malaltiaGestio' + pacient.toString() + '">' + hospital.pacientsIngressats[pacient].malaltia  + '</p>' +
        '</div>' +
        '<div class="col mb-3">' +
          '<button class="btn btn-success" title="Si el pacient s\'ha recuperat, el donarem d\'alta fent clic a aquest botó!" onClick="gestioDonarDalta(' + pacient + ')">Donar d\'alta</button> <button class="btn btn-danger" title="Si el pacient es mor, declarem la defunció fent clic a aquest botó!" onClick="gestioMorir(' + pacient + ')">Morir</button>' +
        '<div class="col mb-3">' +
      '</div>');
    }
    eleID_divGestio.classList.toggle("d-none");
    // document.getElementById("divGestio").classList.remove("d-none");
  }
}

function gestioDonarDalta(llitPacient) {
  hospital.donarDaltaPacient(llitPacient);
  document.getElementById("dadesGestioPacient" + llitPacient.toString()).remove();

  if (totsLlitsBuits())
  dadesGestio.innerHTML = ('<p class="text-center">L\'Hospital ' + hospital.nomHospital + ' no té cap pacient ingressat en aquests moments.</p>' +
  '<div class="text-center">' +
    '<button type="button" class="btn btn-primary mt-4" title="Per tornar a poder ingressar pacients fes clic!" onClick="window.location.reload()">Tornar a ingressar pacients</button>' +
  '</div>');
}

function gestioMorir(llitPacient) {
  hospital.morirPacient(llitPacient);
  document.getElementById("dadesGestioPacient" + llitPacient.toString()).remove();

  if (totsLlitsBuits())
    dadesGestio.innerHTML = ('<p class="text-center">L\'Hospital ' + hospital.nomHospital + ' no té cap pacient ingressat en aquests moments.</p>' +
    '<div class="text-center">' +
      '<button type="button" class="btn btn-primary mt-4" title="Per tornar a poder ingressar pacients fes clic!" onClick="window.location.reload()">Torna a ingressar pacients</button>' +
    '</div>');
}

function totsLlitsBuits() {
  var llitsBuits = true;
  var llit = 0;

  while(llitsBuits && llit < hospital.pacientsIngressats.length) {
    llitsBuits = Object.keys(hospital.pacientsIngressats[llit]).length === 0;
    llit++;
  }

  return llitsBuits;
}
