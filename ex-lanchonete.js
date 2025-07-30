const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const pedidos = [];

function retornarInicio(){
    rl.question("Deseja retornar ao inicio? \n Digite: 1 para sim. \n Digite 2 para não. \n", (answer) => {
        if (answer == 1) {
            iniciar();
        }
        else if (answer == 2) {
            console.log("Pedido cancelado");
            return
        } else {
            console.log("Opção invalida!");
            iniciar();
        }
    })
}

function iniciar() {
    console.clear();

    console.log("1 - Fazer pedido.");
    console.log("2 - Ver quantidade de pedidos feito.")
    console.log("3 - Ver Todos os Pedidos.")

    rl.question("\n Escolha as opções? \n", (answer) => {
       switch(answer){
        case "1": fazerPedido(); break;
        case "2": verQtdPedidos(); break;
        case "3": verTodosPedidos(); break; 
        default: {
            console.log("Escolha uma das opções existentes!");
            iniciar();
        }
       }
    })
}

function fazerPedido() {

    console.clear();
    console.log("Faça o seu pedido: \n")

    const pedido = {
        produto: "",
        quantidade: 0,
        preco: 0
    }

    rl.question("Qual o nome do Produto? \n", (produto) => {

        if (produto.trim() === "") {
            console.log("O nome do Produto é obrigatorio!")
            return iniciar();
        }
        pedido.produto = produto

        rl.question("Qual a quantidade? \n", (quantidade) => {
            quantidade = parseInt(quantidade);
            if (isNaN(quantidade) || quantidade <= 0) {
                console.log("Digite uma quantidade valida!");
                return iniciar();
            }
            pedido.quantidade = quantidade;

            rl.question("Qual o nome do Produto? \n", (preco) => {
                preco = parseFloat(preco);
                if (isNaN(preco) || preco <= 0) {
                    console.log("Digite valor valido!");
                    return iniciar();
                }
                pedido.preco = preco;

                pedidos.push(pedido);

                console.clear();

                console.log("\n Seu pedido foi feito com Sucesso! \n");
                retornarInicio();
            });

        });

    });
}

function verQtdPedidos(){
    console.log("\n")
    console.log(pedidos.length);
    console.log("\n")
    retornarInicio();
}

function verTodosPedidos(){
    console.log("\n")
    console.log(pedidos);
    console.log("\n")
    retornarInicio();
}

iniciar();