function exibirMoedas() {
    //gera numeros aleatorios entre 1 e 5 para cada moeda.
    let num1_00 = Math.ceil(Math.random() * 5);
    let num0_50 = Math.ceil(Math.random() * 5);
    let num0_25 = Math.ceil(Math.random() * 5);
    let num0_10 = Math.ceil(Math.random() * 5);

    //cria referencia ao local onde as imagens serao inseridas
    let divMoedas = document.getElementById("divMoedas");

    //texto alternativo das imagens(para questoes de acessibilidade)
    let alt1_00 = "Moedas de um real";
    let alt0_50 = "Moedas de Cinquenta Centavos";
    let alt0_25 = "Moedas de Vinte e Cinco Centavos;"
    let alt0_10 = "Moedas de Dez Centavos";

    //chama o metdo criarMoedas passando os argumentos
    criarMoedas(num1_00, divMoedas, "1_00.jpg", alt1_00, "moeda1_00");
    criarMoedas(num0_50, divMoedas, "0_50.jpg", alt0_50, "moeda0_50");
    criarMoedas(num0_25, divMoedas, "0_25.jpg", alt0_25, "moeda0_25");
    criarMoedas(num0_10, divMoedas, "0_10.jpg", alt0_10, "moeda0_10");
}

//chama o metodo exibir moedas
exibirMoedas();

/*Começa gerando numeros aleatorios entre 1 e 5.(3 a 6)
  Atribuindo para variaveis que indicam a qtd de moedas de 1 real, 50, 25, e 10 centavos que devera ser inseridas.
Criar referencia a div onde os elementos serão inseridos.(9)
Criar texto alternativos a serem associados a cada imagem.(12 a 15)
Realizar a chamada da da function criarMoedas passando os argumentos relativo a cada moeda.(18 a 21) */

//-----------------------------------------------------------------------------------------------------------------//

function criarMoedas(num, pai, moeda, textoAlt, classe) {
    //cria laço de repetição para inserir varias imagens de moedas da pagina
    for (let i = 0; i < num; i++) {
        let novaMoeda = document.createElement("img"); //cria elemento img
        novaMoeda.src = "img/" + moeda;  //atributo src
        novaMoeda.textoAlt = textoAlt; //texto alternativo
        novaMoeda.className = classe; //classe da moeda(css)
        pai.appendChild(novaMoeda); //hierarquia DOM
    }

    //cria uma quebra de linha 
    let br = document.createElement('br');
    pai.appendChild(br);
}

/*Criar function que recebe 5 parametros.
  Criar laço para inserir varias imagens de acordo com o numero aleatorio que gerar(37 a 43)
    Realizar criacao da tag img.
    Alterar atributo src com o caminho de cada img.
    Alterar atributo alt de acordo com o texto alternativo ja criado.
    Alterar atributo className de acordo com a classe ja criada.
    Inserir a nova tag criada ao elemnto pai. 
Criar uma nova tag para quebra de linha.(46)
Inserir nova tag ao elemento pai.(47)*/

//-----------------------------------------------------------------------------------------------------------------//

function conferirSoma() {
    //cria referencia ao campo de entrada e obtem o seu conteudo
    const inSoma = document.getElementById('inSoma');
    const soma = Number(inSoma.value);

    //valida o preenchimento do campo
    if (soma === 0 || isNaN(soma)) {
        alert("Informe o valor da soma(use ponto para separar decimais)");
        inSoma.focus();
        return;
    }

    //captura divMoedas que é o local onde as moedas foram inseridas
    let divMoedas = document.getElementById('divMoedas');

    //captura as tags img filhas de divMoedas
    let moedas = divMoedas.getElementsByTagName('img');

    //declara e inicializa acumulador
    let totalMoedas = 0;

    //percorre as tags img e verifica propriedade classname
    for (let i = 0; i < moedas.length; i++) {
        if (moedas[i].className == "moeda1_00") {
            totalMoedas += 1.0; //acumula 1 (para moedas de 1 real)
        } else if (moedas[i].className == "moeda0_50") {
            totalMoedas += 0.50; //acumula 0.50 (para moedas de 0.50cen)
        } else if (moedas[i].className == "moeda0_25") {
            totalMoedas += 0.25; //acumula 0.25 (para moedas de 0.25cen)
        } else {
            totalMoedas += 0.10; //acumula 0.10 (para moedas de 0.10)
        }

    }

    //cria elemento div
    let div = document.createElement('div');

    //cria elemento h3
    let h3 = document.createElement('h3');

    let mensagem = "";

    //verifica se o valor informado é igual ao total de moedas exibido
    if (soma == totalMoedas.toFixed(2)) {
        div.className = "alert alert-success"; //define a classe da div
        mensagem = "Parabéns!! Você acertou!!"; //e mensagem a ser exibida
    } else {
        div.className = "alert alert-danger";
        mensagem = "Ops... A resposta correta é " + totalMoedas.toFixed(2);
    }

    //cria elemento texto
    let texto = document.createTextNode(mensagem);
    h3.appendChild(texto); //texto e filho de h3
    div.appendChild(h3); //h3 e filho da div criada na function
    divMoedas.appendChild(div); //e a div com alerta e filha de div moedas

    //desabilita botao(reposta ja foi exibida)
    btConferir.disable = true;
}

const btConferir = document.getElementById('btConferir');
btConferir.addEventListener("click", conferirSoma);

/*Criar referencia ao elemento da pagina que sera dados de entrada.(64)
  Obter valor do campo.(65)
  Validar preenchimento.(68 a 72)
  Capturar a div onde as moedas foram inseridas.(75)
  Capturar tags img filhas de divMoedas.(78)
  Declarar e Inicializar variavel para receber o valor das moedas.(81)
  Percorrer as tags img e verificar a propriedade className.(84 a 95)
    Atribuindo o valor de acordo com classe da moeda especifica.
  Criar elemento div.(98)
  Criar elemento h3.(101)
  Criar e inicializar a variavel para receber a mensagem que será exibida.(103)
  Verificar se o valor informado e igual o valor total de moedas.(106 a 112)
  Criar elemento texto.(115)
  Inserir texto no h3.(116)
  Inserir h3 dentro da div.(117)
  Inserir div com a mensagem dentro da divMoedas.(118)
  Desabilitar o botao.(121)
  Criar referencia ao botao conferir.(124)
  Associar a funcao ao evento de click.(125)*/

//-----------------------------------------------------------------------------------------------------------------//

//Criar rerencia ao botao exibir.(149)
const btExibir = document.getElementById('btExibir');
//Associar o botao ao evento click com uma funcao de callback com metodo para recarregar a pagina.(152 a 154)
btExibir.addEventListener("click", () => {
    location.reload();
});
