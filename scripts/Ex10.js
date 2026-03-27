function sal(){

    let nome = prompt("Informe o nome do usuário:");
    let sala = parseFloat(prompt("Informe o seu salário:"));
    alert("Tenha em mente que será descontado 8% devido a taxa do INSS.");

    let salad = sala - (sala*8)/100;

    alert("Informações do usuário:\n" + "Nome: " + nome + "\nSalário bruto: " + sala + "\nSalário líquido: " + salad);

}