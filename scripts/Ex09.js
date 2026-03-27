function prog() {

    let a = prompt("Informe o valor para A:");
    let b = prompt("Informe o valor para B");

    if (b > a) {

        let aux = b;
        b = a;
        a = aux;

        alert("Os valores do maior para o menor ficam desse jeito:\n" + a + "\n" + b);

    } else {
        alert("Os valores do maior para o menor ficam desse jeito:\n" + a + "\n" + b);
    }

}