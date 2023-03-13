function categoriaEletronico() {
    let produtos = [
        {id: 1, descricao: "Smartphone", categoria: "Eletrônico"},
        {id: 2, descricao: "Notebook", categoria: "Eletrônico"},
        {id: 3, descricao: "Geladeira", categoria: "Eletrodoméstico"},
        {id: 4, descricao: "Liquidificador", categoria: "Eletrodoméstico"},
        {id: 5, descricao: "Fogão", categoria: "Eletrodoméstico"}
    ]

    function retornaEletronico (value){
        if (value.categoria == "Eletrônico")
        return value;
    }
    var produtosEletronico = produtos.filter(retornaEletronico);
    produtosEletronico.forEach(produtoEletro => { 
        console.log(produtoEletro);
    })
}
categoriaEletronico()
/*
Primeiramente, declaramos a array com cinco objetos que vamos chamar de produtos. A seguir, declaramos uma função chamada retornaEletronico, que devolverá todos os objetos que sejam da categoria eletrônico.

Perceba que a validação na função acessa a propriedade categoria para compará-la com o conteúdo desejado. Na próxima linha, é feita a declaração da variável de retorno para a aplicação do javascript filter object.

A seguir, exibimos o resultado na console dos objetos selecionados pelo filtro. Para isso, utilizamos a estrutura de repetição forEach, que lê todos os elementos da array e executa o comando console.log para exibir o resultado correspondente ao depurarmos o código.
 */

function categoriaEletrodomestico() {
    var produtos = [
        {id: 1, descricao: "Smartphone", categoria: "Eletrônico"},
        {id: 2, descricao: "Notebook", categoria: "Eletrônico"},
        {id: 3, descricao: "Geladeira", categoria: "Eletrodoméstico"},
        {id: 4, descricao: "Liquidificador", categoria: "Eletrodoméstico"},
        {id: 5, descricao: "Fogão", categoria: "Eletrodoméstico"} 
    ]

    let retornaEletro = produtos.filter(produto => produto.categoria === 'Eletrodoméstico')
    retornaEletro.forEach(produto => {
        console.log(produto)
    })
}

//categoriaEletrodomestico()
/*
Criamos a variável produtosEletrodomesticos e já aplicamos o filtro para selecionar, em cada produto, a propriedade categoria que atenda à condição desejada. No próximo passo, todos os elementos armazenados na nova array são exibidos na console por meio da estrutura de repetição forEach.
 */