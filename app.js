function pesquisar() {
    // Seleciona a seção HTML com o ID "resultados-pesquisa" e armazena na variável "section".
    // Essa seção será usada para exibir os resultados da pesquisa.
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    campoPesquisa = campoPesquisa.toLowerCase();
    if (!campoPesquisa){

      section.innerHTML = "<p>Nenhum jogo encontrado.</p>";
      return;
    };

    
    // Imprime no console a referência para a seção selecionada, útil para depuração.
    //console.log(section);
    console.log(campoPesquisa);
    
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    // Essa string será preenchida com o HTML gerado para cada item encontrado.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tag = "";
    // Itera sobre cada item (dado) no array "dados".
    // Assumindo que "dados" é um array de objetos com as propriedades: titulo, descricao, genero, plataformas, dataLancamento e link.
    for (let dado of dados) {

      titulo = dado.titulo.toLowerCase();
      descricao = dado.descricao.toLowerCase();
      tag = dado.tag.toLowerCase();

       if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tag.includes(campoPesquisa) ){

        // Concatena o HTML para cada item à variável "resultados".
        // Utiliza template literals (``) para facilitar a construção da string.
        resultados += `
        <div class="item-resultado">
          <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <p class="descricao-meta ">Genero: ${dado.genero}</p>
          <p class="descricao-meta ">Plataformas: ${dado.plataformas}</p>
          <p class="descricao-meta ">Data de Lançamento: ${dado.dataLancamento}</p>
          <a href=${dado.link} target="_blank">Mais Informações</a>
        </div>
        `;
      }


    }
    
    if (!resultados){
      resultados = "<p>Nada foi encontrado</p>"
    }
    // Atribui o conteúdo HTML gerado à seção "resultados-pesquisa",
    // substituindo o conteúdo anterior.
    section.innerHTML = resultados;
  }

// console.log(dados);



