"use strict";

const MENU = document.getElementById("menu");
const BTN_COLOR = document.getElementById("btn_color");
const INPUT_SELECT = document.getElementById("input-select");
const TOGGLERICON = document.getElementById("togglericon");
const ICONECONFIG = document.getElementById("iconeconfig");
const LOGO_REPROGRAMESE = document.getElementById("logoreprogramese");

const OPCAO_CONTRASTE = [
  {
    iconeconfig: "./assets/img/logos/contraste_preto.svg",
    logoreprogramese: "./assets/img/logos/preferencial-horizontal-preta.png",
    bg_menu: "bg-white",
    theme_menu: "light",
    btn_color: "btn-outline-dark",
    btn_text: "Dark",
    input_select: "bg-white",
    togglericon: "navbar-light"
  },
  {
    iconeconfig: "./assets/img/logos/contraste_branco.svg",
    logoreprogramese: "./assets/img/logos/preferencial-horizontal-branca.png",
    bg_menu: "bg-dark",
    theme_menu: "dark",
    btn_color: "btn-outline-light",
    btn_text: "Light",
    input_select: "bg-dark",
    togglericon: "navbar-dark"
  }
];

 
(function() {

  const CONTRASTE_MENU = getContrasteMenu(); 
  if (CONTRASTE_MENU !== "padrao") {
  if (CONTRASTE_MENU == "light") {
    definirContraste(0); 
    } else {
    definirContraste(1); 
    } 
  }
  
  const TAMANHO_FONTE = getTamanhoFonte();
  if (TAMANHO_FONTE !== "padrao") {
    if (TAMANHO_FONTE == "fs-5") {
      definirFonte("fs-5");
    } else if (TAMANHO_FONTE == "fs-6") {
      definirFonte("fs-6");
    } else if (TAMANHO_FONTE == "fs-4") {
      definirFonte("fs-4");
    }
  }
})()

function getContrasteMenu() {
  return localStorage.getItem("bg") ?? "padrao";
}

function getTamanhoFonte() {
  return localStorage.getItem("fonte") ?? "padrao";
}

function definirContraste(opcao) {
  let bg_menu = MENU.classList[1];
  let btn_color = BTN_COLOR.classList[1];
  let input_select = INPUT_SELECT.classList[1];
  let togglericon = TOGGLERICON.classList[1];
  ICONECONFIG.src = OPCAO_CONTRASTE[opcao].iconeconfig; 
  LOGO_REPROGRAMESE.src = OPCAO_CONTRASTE[opcao].logoreprogramese;  
  BTN_COLOR.classList.replace(btn_color, OPCAO_CONTRASTE[opcao].btn_color); 
  MENU.classList.replace(bg_menu, OPCAO_CONTRASTE[opcao].bg_menu);
  MENU.removeAttribute("data-bs-theme");
  MENU.setAttribute("data-bs-theme", OPCAO_CONTRASTE[opcao].theme_menu);
  BTN_COLOR.innerText = OPCAO_CONTRASTE[opcao].btn_text;
  INPUT_SELECT.classList.replace(input_select, OPCAO_CONTRASTE[opcao].input_select);
  TOGGLERICON.classList.replace(togglericon, OPCAO_CONTRASTE[opcao].togglericon);    
}

BTN_COLOR.addEventListener("click", function(e) {
  if (MENU.classList.contains("bg-white")) {
    definirContraste(1);
    localStorage.setItem("bg", "dark");
  } else {
    definirContraste(0);
    localStorage.setItem("bg", "light");
  }
});

function definirFonte(tamanho_fonte) {
  let fonte = MENU.classList[4];
  MENU.classList.replace(fonte, tamanho_fonte);
}

INPUT_SELECT.addEventListener("input", function(e) {
  if (INPUT_SELECT.value == 0) {
    definirFonte("fs-5");
    localStorage.setItem("fonte", "fs-5");
  } else if (INPUT_SELECT.value == 1) {
    definirFonte("fs-6");
    localStorage.setItem("fonte", "fs-6");
  } else if (INPUT_SELECT.value == 2) {
    definirFonte("fs-4");
    localStorage.setItem("fonte", "fs-4");
  }
})


