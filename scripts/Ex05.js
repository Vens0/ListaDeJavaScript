function num() {

    let nume = parseFloat(prompt("Digite um número inteiro:"));
    if (nume % 2 == 0) {
        
        alert("Seu número é par!");

        alert("Seu número será transformado em ímpar...");
        nume += 1;

        alert("Agora seu número é " + nume);

    } else {

        alert("Seu número é ímpar!");

        alert("Seu número será transformado em par...");
        nume -= 1;

        alert("Agora seu número é " + nume);
    }
}