function ordem() {

     vetnum = [];

    for (let i = 1; i <= 4; i++) {
       

        vetnum.push(Number(prompt("Informe o valor " + i)));
        vetnum.sort((a, b) => b - a);
    }

    alert("Seus números em ordem decrescente são: " + "\n" + vetnum);

}

