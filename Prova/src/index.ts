// Obtendo os elementos HTML
const nm1 = document.getElementById("input1") as HTMLInputElement;
const nm2 = document.getElementById("input2") as HTMLInputElement;
const resultado = document.getElementById("resultado") as HTMLParagraphElement;

// Função para somar
document.getElementById("somar")?.addEventListener("click", () => {
    const n1 = parseFloat(nm1.value);
    const n2 = parseFloat(nm2.value);
    resultado.textContent = `Resultado: ${(n1 + n2).toString()}`;
});

// Função para subtrair
document.getElementById("subtrair")?.addEventListener("click", () => {
    const n1 = parseFloat(nm1.value);
    const n2 = parseFloat(nm2.value);
    resultado.textContent = `Resultado: ${(n1 - n2).toString()}`;
});

// Função para multiplicar
document.getElementById("multiplicar")?.addEventListener("click", () => {
    const n1 = parseFloat(nm1.value);
    const n2 = parseFloat(nm2.value);
    resultado.textContent = `Resultado: ${(n1 * n2).toString()}`;
});

// Função para dividir
document.getElementById("dividir")?.addEventListener("click", () => {
    const n1 = parseFloat(nm1.value);
    const n2 = parseFloat(nm2.value);
    if (n2 !== 0) {
        resultado.textContent = `Resultado: ${(n1 / n2).toString()}`;
    } else {
        resultado.textContent = "Erro: Divisão por zero!";
    }
});
