function opera() {

    let fim = 0;

    let a = prompt("informe o valor da variável A:");

    let b = prompt("Informe o valor da variável B:");

    let escolha = prompt("Qual informação você quer saber?\n\n" + "A diferença entre as duas variáveis [1]\n\n" + "O dobro da primeira variável somado ao triplo da segunda [2]\n\n" + "A multiplicação das duas variáveis [3]\n\n");

    switch (escolha) {

        case "1":

            fim = a - b;

            alert("A diferença entre as duas variáveis é " + fim);

            break;

        case "2":

            fim = (a * 2) + (b * 3);

            alert("O resultado da soma será " + fim);

            break;

        case "3":

            fim = a * b;

            alert("O resultado da multiplicação será " + fim);

            break;
    }
}