
function salario() {

    let gastot;
    let gasto = 0;
    let soma = 0;
    let ganho = 0;

    for (let i = 1; i <= 12; i++) {

        let ganho = parseFloat(prompt("Informe o seus ganhos no mês" + i));
        if (!isNaN(ganho)) {
            soma += ganho;

            let gasto = parseFloat(prompt("Informe os seus gastos do mês"));
            gastot += gasto;


        } else {
            alert("Digite um número válido.");
        }



        console.log(soma);
        console.log(gastot);

    }
}