// {
//     item: {
//         nome: 'TV Samsung 4K',
//         valorEmCentavos: 129900
//     },
//     quantidade: 1
// }

// clientes
const patricia = { nome: "Patricia", carrinho: [] };
const carlos = { nome: "Carlos", carrinho: [] };
const renato = { nome: "Renato", carrinho: [] };
const jose = { nome: "José", carrinho: [] };
const roberto = { nome: "Roberto", carrinho: [] };

// produtos
const tv = { nome: "TV Samsung 4K", valorEmCentavos: 129900 };
const notebook = { nome: "Notebook Dell", valorEmCentavos: 399990 };
const mouse = { nome: "Mouse MX Master 3", valorEmCentavos: 23000 };
const teclado = { nome: "Teclado Keychron K8", valorEmCentavos: 50000 };
const caboUsb = { nome: "Cabo USB 2 Metros", valorEmCentavos: 1990 };
const carregador = { nome: "Carregador portátil", valorEmCentavos: 4590 };
const webcam = { nome: "Webcam C920s", valorEmCentavos: 80000 };
const monitor = { nome: "Monitor LG 29 FHD", valorEmCentavos: 129900 };

// Adicione uma tv, dois cabos usb e uma webcam para o José

const adicionarProduto = (cliente, produto, quantidade) => {
  const produtoFormatado = {
    produto,
    quantidade,
  };
  cliente.carrinho.push(produtoFormatado);
};

adicionarProduto(jose, tv, 1);
adicionarProduto(jose, caboUsb, 2);
adicionarProduto(jose, webcam, 1);

console.log(jose.carrinho);

// Adicione dois notebooks para o Carlos

adicionarProduto(carlos, notebook, 2);
console.log(carlos);
