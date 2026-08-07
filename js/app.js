    let totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$0';
    

function adicionar() {
    //recuperar valores nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;    
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = parseFloat(document.getElementById('preco').value); 
    let quantidade = parseFloat(document.getElementById('quantidade').value);
    //calcular o preço, o nosso subtotal
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');    
    //adicionar no carrinho
    if (quantidade >= 1) {         
        carrinho.innerHTML = carrinho.innerHTML + 
        `<section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`; 
    } else {
        alert(`o campo de quantidade não pode ser vazio!`);
    }               
    //atualizar o valor total
    totalGeral += preco;
    document.getElementById('valor-total').textContent = formataValores(totalGeral);
    campoTotal.textContent = `R$ ${totalGeral}`;
    document.getElementById('quantidade').value = '';      
}

function limpar(params) {     
    let resposta =  confirm('Deseja realmente apagar todos os campos!');      
        
    if (resposta == true) {
        totalGeral = 0;
        document.getElementById('lista-produtos').innerHTML = '';
        document.getElementById('valor-total').textContent = formataValores(0);
    }
}

function formataValores(valor) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valor);
}

