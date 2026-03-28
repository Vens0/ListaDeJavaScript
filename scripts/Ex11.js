function faixa() {

    let sal = prompt("Informe a sua faixa salarial:");

    if (sal <= 1000) {

        let taxa = 8;
        let desc = sal - (sal * taxa) / 100;
        let liq = sal - desc;

        alert("Informações do usuário:" + "\nSalário bruto: " + sal + "\nTaxa de desconto: " + taxa + "\nValor do desconto: " + liq + "\nSalário líquido: " + desc);

    } else if (sal > 1000 && sal <= 1500) {
        let taxa = 8.5;
        let desc = sal - (sal * taxa) / 100;
        let liq = sal - desc;

        alert("Informações do usuário:" + "\nSalário bruto: " + sal + "\nTaxa de desconto: " + taxa + "\nValor do desconto: " + liq + "\nSalário líquido: " + desc);

    } else if (sal > 1500) {

        let taxa = 9;
        let desc = sal - (sal * taxa) / 100;
        let liq = sal - desc;

        alert("Informações do usuário:" + "\nSalário bruto: " + sal + "\nTaxa de desconto: " + taxa + "\nValor do desconto: " + liq + "\nSalário líquido: " + desc);

    }

}