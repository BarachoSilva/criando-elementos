document.getElementById('titulo').innerText = 'Minha Loja Online';

const body = document.body;

const produto = document.createElement('div');
produto.classList.add('produto');

const nome = document.createElement('h2');
nome.innerText = 'Produto A';

const descricao = document.createElement('p');
descricao.innerText = 'Esta é uma descrição do Produto A.';

const preco = document.createElement('p');
preco.innerText = 'Preço: R$ 7.700,00';

const imagem = document.createElement('img');
imagem.src = './assets/prod1.webp';
imagem.alt = 'Imagem do Produto A';


produto.appendChild(nome);
produto.appendChild(descricao);
produto.appendChild(preco);
produto.appendChild(imagem);

body.appendChild(produto);
