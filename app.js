function pesquisar() {
    let section = document.getElementById("item-resultado");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim();

    if (!campoPesquisa) {
        section.innerHTML = "<p> Nada foi encontrado. Digite algo como 'pequeno', 'fofo' ou 'brincalhão' para começar sua busca!</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    document.getElementById("campo-pesquisa").style.backgroundColor = "#f8b5ff"; 

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

    for (let dado of dados) {
        titulo = (dado.titulo || "").toLowerCase();
        descricao = (dado.descricao || "").toLowerCase();
        tags = (dado.tags || "").toLowerCase();
        personalidade = (dado.personalidade || "").toLowerCase();
        porte = (dado.porte || "").toLowerCase();
        peso = (dado.peso || "").toLowerCase();
        vida = (dado.vida || "").toLowerCase();
        origem = (dado.origem || "").toLowerCase();

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa) || personalidade.includes(campoPesquisa) || porte.includes(campoPesquisa) ||  peso.includes(campoPesquisa) || vida.includes(campoPesquisa) || origem.includes(campoPesquisa)) {
            
            resultados += `
            <div class="card-raca">
                <div class="conteudo-texto">
                <h2>${dado.titulo}</h2>
                <p>${dado.descricao}</p>
                <div class="linha-infos">
                <p><strong>Porte:</strong> ${dado.porte}</p>
                <p><strong>Peso:</strong> ${dado.peso}</p>
            </div>
            <div class="linha-infos">
                <p><strong>Expectativa de vida:</strong> ${dado.vida}</p>
                <p><strong>Origem:</strong> ${dado.origem}</p>
            </div>
            </div>
                <div class="imagem-cachorro">
                <img src="${dado.image}" alt="${dado.titulo}">
            </div>
            </div>
            `;
            
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado.</p>"
    }

    section.innerHTML = resultados;
}
