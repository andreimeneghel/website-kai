window.onload = Inicio;
var cont = 0;
var temporizador;
var img = [1, 2, 3]; // Adicione os índices das suas imagens aqui

var moldura = document.getElementById("moldura");

function Inicio() {
    Atualizar();
    AutomaticoFoto();
}

function AutomaticoFoto() {
    temporizador = setInterval(Avancar, 4000);
}

function Avancar() {
    if(cont < img.length-1){
        cont++
    }
    if(cont == img.length-1){

      cont = 0
    }
    Atualizar();
}

function Atualizar() {
    moldura.style.opacity = 0;
    setTimeout(function () {
        moldura.src = "./img/fotos/foto" + img[cont] + ".jpg";
        moldura.style.opacity = 1; 
      }, 500); 
    }

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  }
