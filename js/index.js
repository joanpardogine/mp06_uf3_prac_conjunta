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
alert("hola");
  // Get the value of the input field with id="numb"
  //x = document.getElementById("numb").value;
ytryrtytrytr
  // If x is Not a Number or less than one or greater than 10
  if (cadenaAValidar=="") {
    alert("és buit!");

const etCapMalaltia = "capMalaltia";

function espera(ms){
  var start = new Date().getTime();
  var end = start;
  while(end < start + ms) {
    end = new Date().getTime();
 }
}


function mostraMissatge(missatge){
  // eleID_barra_missatges.title=="";
  eleID_a_text_missatge.innerHTML = "";
  eleID_barra_missatges.classList.toggle("d-none");
  eleID_a_text_missatge.innerHTML = missatge;
  //eleID_barra_missatges.hidden=true;
  // espera(3000);  // 3 seconds in milliseconds
  //eleID_barra_missatges.hidden=false;
}


function ompleSelectLlistaDeMalalties() {
 /* Creació d'una funció per crear un desplegable amb totes les malalties de llistaMalalties */
 
}
 
function validaQueNoEsBuit(cadenaAValidar) {
  if (cadenaAValidar.value=="" || cadenaAValidar.value=='undefined') {
    mostraMissatge(`El camp <b>${cadenaAValidar.name}</b> no pot quedar-se en blanc!`);
    //espera(3000);  // 3 seconds in milliseconds
    //eleID_barra_missatges.hidden=false;
    //eleID_barra_missatges.classList.toggle("d-none");

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
    
      hospital = new Hospital(nom, maximPacients);
      eleID_divHospital.classList.toggle("d-none");
      var cadenaFilaPacient_1,cadenaFilaPacient_2,cadenaFilaPacient_3;

      cadenaFilaPacient_1 = '<div class="row">' +
                            '<div class="col mb-3">' +
                            '<label for="nomPacient" class="font-weight-bold"> Nom: </label>' +
                            '<input type="text" id="nomPacient';
                            
      cadenaFilaPacient_2 = '" class="form-control" required minlength="1" maxlength="100" />' +
                            '  </div> <!-- <div class="col mb-3"> -->' +
                            '  <div class="col mb-3">' +
                            '    <label for="malaltia" class="font-weight-bold">Malaltia: </label>' +
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

   /* Creació de tres cadenes cadenaFilaPacient_1, cadenaFilaPacient_2 i cadenaFilaPacient_3
   ** per faciliar la creació dels <div class="row"> que es crea per a cada pacient.
   ** */
   
      var objSelect;
   /* Creació d'un objecte llisa desplegable, que ompliré amb tots els elements
   ** de la matriu que acabo de crear llistaMalalties 
   ** */
   
    objSelect=`<option value=\"${etCapMalaltia}\">------ Escull un malaltia ------</option>`;
    for (var indexMalaltia=0; indexMalaltia<llistaMalalties.length; indexMalaltia++) {
        objSelect+=`<option value=\"${indexMalaltia.toString()}\">${llistaMalalties[indexMalaltia]}</option>`;  
    }
    objSelect+='</select>';

    var htmlINICIDivClassRow = '<div class="row">';
    var htmlFINALDivClassRow =  '</div> <!-- <div class="row"> -->';
    
    var htmlINICIDivClassCol = '<div class="col mb-3">';
    var htmlFINALDivClassCol = '</div> <!-- <div class="col mb-3"> -->';



    var htmlINICIInputNomPacient = `<input type=\"text\" title=\"Entra el nom del pacient!\" name=\"Nom Pacient\" 
                                  onblur=\"validaQueNoEsBuit(this)\" placeHolder=\"Nom pacient\" id=\"nomPacient`;

    var htmlINICIInputSelect = '<select id="malaltia';
    var htmlFINALClassFormCtrl = '" class="form-control" required minlength="1" maxlength="100">';

      for (var pacient = 0; pacient < maximPacients; pacient++) {
        var cadPacient = pacient.toString();

        var htmlLabelNomPacient = `<label for=\"nomPacient${pacient}\" class=\"font-weight-bold\">Nom pacient:</label>`;
        var htmlLabelNomMalaltia = `<label for=\"nomMalaltiaPacient${pacient}\"  class=\"font-weight-bold\">Malaltia de pacient:</label>`;

        document.getElementById("dadesPacient").innerHTML += ( '' +
          htmlINICIDivClassRow + 
            htmlINICIDivClassCol + 
                htmlLabelNomPacient +
                  htmlINICIInputNomPacient + cadPacient + htmlFINALClassFormCtrl +
              htmlFINALDivClassCol + 
              htmlINICIDivClassCol +
                htmlLabelNomMalaltia + 
                  htmlINICIInputSelect + cadPacient + htmlFINALClassFormCtrl +
                    objSelect +
              htmlFINALDivClassCol +
            htmlFINALDivClassRow);

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
          '<button class="btn btn-success" onClick="gestioDonarDalta(' + pacient + ')">Donar d\'alta</button> <button class="btn btn-danger" onClick="gestioMorir(' + pacient + ')">Morir</button>' +
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
  dadesGestio.innerHTML = ('<p class="text-center">L\'Hospital ' + hospital.nom + ' no té cap pacient ingressat en aquests moments.</p>' +
  '<div class="text-center">' +
    '<button type="button" class="btn btn-primary mt-4" onClick="window.location.reload()">Tornar a començar</button>' +
  '</div>');
}

function gestioMorir(llitPacient) {
  hospital.morirPacient(llitPacient);
  document.getElementById("dadesGestioPacient" + llitPacient.toString()).remove();

  if (totsLlitsBuits())
    dadesGestio.innerHTML = ('<p class="text-center">L\'Hospital ' + hospital.nom + ' no té cap pacient ingressat en aquests moments.</p>' +
    '<div class="text-center">' +
      '<button type="button" class="btn btn-primary mt-4" onClick="window.location.reload()">Tornar a començar</button>' +
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