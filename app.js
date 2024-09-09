
function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de uma série.</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = ""; 
    let descricao = "";
    let tags = "";
    let personalidade = "";
    let porte = "";
    let peso = "";
    let vida = "";
    let origem = "";
    let image = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        personalidade = dado.personalidade.toLowerCase()
        porte = dado.porte.toLowerCase()
        peso = dado.peso.toLowerCase()
        vida = dado.vida.toLowerCase()
        origem = dado.origem.toLowerCase()
        
        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa) || personalidade.includes(campoPesquisa) || porte.includes(campoPesquisa) ||  peso.includes(campoPesquisa) || vida.includes(campoPesquisa) || origem.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <p class="personalidade">${dado.personalidade}</p>
                <p class="porte">${dado.porte}</p>
                <p class="peso">${dado.peso}</p>
                <p class="vida"> ${dado.vida}</p>
                <p class="origem"> ${dado.origem}</p>
                <img src="${dado.image}" alt="${dado.titulo}" style="width: 50%; height: auto;">
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
    const img = document.createElement('img');
}