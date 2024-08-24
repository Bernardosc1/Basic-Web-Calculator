var _a, _b, _c, _d;
// Obtendo os elementos HTML
var nm1 = document.getElementById("input1");
var nm2 = document.getElementById("input2");
var resultado = document.getElementById("resultado");
// Função para somar
(_a = document.getElementById("somar")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var n1 = parseFloat(nm1.value);
    var n2 = parseFloat(nm2.value);
    resultado.textContent = "Resultado: ".concat((n1 + n2).toString());
});
// Função para subtrair
(_b = document.getElementById("subtrair")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    var n1 = parseFloat(nm1.value);
    var n2 = parseFloat(nm2.value);
    resultado.textContent = "Resultado: ".concat((n1 - n2).toString());
});
// Função para multiplicar
(_c = document.getElementById("multiplicar")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
    var n1 = parseFloat(nm1.value);
    var n2 = parseFloat(nm2.value);
    resultado.textContent = "Resultado: ".concat((n1 * n2).toString());
});
// Função para dividir
(_d = document.getElementById("dividir")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () {
    var n1 = parseFloat(nm1.value);
    var n2 = parseFloat(nm2.value);
    if (n2 !== 0) {
        resultado.textContent = "Resultado: ".concat((n1 / n2).toString());
    }
    else {
        resultado.textContent = "Erro: Divisão por zero!";
    }
});
