function sistema() {

    alert("Bem vindo a picoletéria! Veja a tabela de sabores a seguir:");
    alert("Chocolate [a]\n" + "Morango [b]\n" + "Creme [c]\n" + "Manga [d]\n" + "Melancia [e]\n" + "Vanilla Ice [f]\n" + "Céu Azul [g]\n" + "Brownie [h]\n" + "Hawaiano [i]\n");

    let sabor = prompt("Qual sabor você quer escolher? Digite a letra respectiva:");

    switch (sabor) {

        case "a":
            alert("O valor é R$1,50");

            break;

        case "b":
            alert("O valor é R$2,50");

            break;

        case "c":
            alert("O valor é R$2,50");

            break;

        case "d":
            alert("O valor é R$3,20");

            break;

        case "e":
            alert("O valor é R$3,40");

            break;

        case "f":
            alert("O valor é R$3,00");

            break;

        case "g":
            alert("O valor é R$3,60");

            break;

        case "h":
            alert("O valor é R$4,00");

            break;

        case "i":
            alert("O valor é R$5,00");

            break;

    }

}