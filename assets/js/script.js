"use strict";

(function() {

  const lista_front = [
    {
      imagem: "html_css.svg",
      alt: "logomarcas HTML 5 e CSS 3",
      numero: "MÓDULO I",
      desc: "Conhecimentos básicos de HTML e CSS."
    },
    {
      imagem: "bootstrap.svg",
      alt: "logomarca framework bootstrap",
      numero: "MÓDULO II",
      desc: "Introdução ao Framework Bootstrap."
    },
    {
      imagem: "js.svg",
      alt: "logomarca Javascript",
      numero: "MÓDULO III",
      desc: "Programação estrutura com JavaScript."
    },
    {
      imagem: "web.svg",
      alt: "Icone da tela do navegador que representa desenvolvimento web",
      numero: "MÓDULO IV",
      desc: "Desenolvimento web com HTML, CSS e JavaScript."
    },
  ]; 
  const lista_back = [
    {
      imagem: "node.svg",
      alt: "logomarca Node.JS",
      numero: "MÓDULO I",
      desc: "Introdução ao framework Node.js e notação Javascript."
    },
    {
      imagem: "customizada.svg",
      alt: "Icone da tela do navegador que representa um site customizado",
      numero: "MÓDULO II",
      desc: "Criação de página customizada com Node.js."
    },
    {
      imagem: "sequelize.svg",
      alt: "logomarca Squelize",
      numero: "MÓDULO II",
      desc: "Persistência de dados com Sequelize."
    },
    {
      imagem: "crud.svg",
      alt: "Icone da tela do navegador que representa um site CRUD",
      numero: "MÓDULO IV",
      desc: "Node.js intermediário, CRUD com Sequelize, cookies e sessões."
    },
  ];

  const div_formacao_front = document.getElementById("front-end");
  const div_formacao_back = document.getElementById("back-end");

  function gerarModulo(lista_modulo, div_formacao) {
    for (let modulo of lista_modulo) {
      const div_linha_modulo = document.createElement("div");
      div_linha_modulo.className = "row mb-2";
      div_linha_modulo.innerHTML += `
                                        <div class="col col-lg-4 d-flex justify-content-center align-items-center">
                                          <img class="m-2" src="/assets/img/logos/${modulo.imagem}" alt="${modulo.alt}" width="196" height="143">
                                        </div>
                                        <div class="col col-lg-8 d-flex flex-column justify-content-center align-items-center 
                                        align-items-sm-center align-items-md-start align-items-lg-start">
                                          <h4 class="titulo-modulo text-center text-sm-center text-md-start">${modulo.numero}</h4>
                                          <p class="texto-modulo text-center text-sm-center text-md-start">${modulo.desc}</p>
                                        </div>
      `;
     div_formacao.appendChild(div_linha_modulo);
    }
  }

  gerarModulo(lista_front, div_formacao_front);
  gerarModulo(lista_back, div_formacao_back);
  
})();
