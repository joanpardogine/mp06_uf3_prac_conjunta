function Hospital(nom, maximPacients, maximMetges) {
  this.nomHospital = nom;
  this.maximPacients = maximPacients;
  this.pacientsIngressats = [];
  this.ingressarPacient = ingressarPacient;
  this.donarDaltaPacient = donarDaltaPacient;
  this.morirPacient = morirPacient;
}

function ingressarPacient(pacient) {
  if (pacient != null && (this.pacientsIngressats.length < this.maximPacients))
    this.pacientsIngressats.push(pacient);
}

function donarDaltaPacient(llitPacient) {
  alert("S'ha donat d'alta el pacient " + this.pacientsIngressats[llitPacient].nom + " de la malaltia " + this.pacientsIngressats[llitPacient].malaltia);
  this.pacientsIngressats[llitPacient] = {};
}

function morirPacient(llitPacient) {
  alert("Encara que s'ha fet tot el que s'ha pogut, el pacient " + this.pacientsIngressats[llitPacient].nom + " ha mort de la malaltia " + this.pacientsIngressats[llitPacient].malaltia);
  this.pacientsIngressats[llitPacient] = {};
}
