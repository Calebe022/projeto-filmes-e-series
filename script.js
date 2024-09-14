function pesquisar() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultados = document.getElementById('resultadosPesquisa');
    const itens = resultados.getElementsByClassName('item-resultado');

    if (input === '') {
        return;
    }

    resultados.style.display = 'block';

    for (let i = 0; i < itens.length; i++) {
        let item = itens[i];
        let titulo = item.getElementsByTagName('h2')[0].textContent.toLowerCase();
        let descricao = item.getElementsByClassName('descricao-meta')[0].textContent.toLowerCase();

        if (titulo.includes(input) || descricao.includes(input)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    }
}