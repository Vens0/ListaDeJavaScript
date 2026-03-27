function sal(){

    let nome = prompt("Informe o nome do usuário:");
    let sala = parseFloat(prompt("Informe o seu salário:"));
    alert("Tenha em mente que será descontado 8% devido a taxa do INSS.");


    let desc = 0.08;
    let salad = sala - sala*desc;

    alert("Informações do usuário:\n" + "Nome: " + nome + "\nSalário bruto: " + sala + "\nValor do desconto: 8%" + "\nSalário líquido: " + salad);

}