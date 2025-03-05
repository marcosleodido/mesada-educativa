let saldo = 0;
let teto = 0;
const historico = [];

function atualizarSaldo() {
    document.getElementById('saldo').textContent = saldo.toFixed(2);
}

function definirTeto() {
    const valorTeto = parseFloat(document.getElementById('teto').value);
    if (!isNaN(valorTeto) && valorTeto > 0) {
        teto = valorTeto;
        alert(`Teto mensal definido para R$ ${teto.toFixed(2)}`);
    } else {
        alert("Por favor, insira um valor válido para o teto.");
    }
}

function adicionarValor() {
    const descricao = document.getElementById('descricao').value;
    const valor = parseFloat(document.getElementById('valor').value);

    if (descricao && !isNaN(valor) && valor > 0) {
        saldo += valor;
        historico.push({ descricao, valor: `+R$ ${valor.toFixed(2)}` });
        atualizarSaldo();
        atualizarHistorico();
    } else {
        alert("Por favor, preencha a descrição e insira um valor válido.");
    }
}

function subtrairValor() {
    const descricao = document.getElementById('descricao').value;
    const valor = parseFloat(document.getElementById('valor').value);

    if (descricao && !isNaN(valor) && valor > 0) {
        saldo -= valor;
        historico.push({ descricao, valor: `-R$ ${valor.toFixed(2)}` });
        atualizarSaldo();
        atualizarHistorico();
    } else {
        alert("Por favor, preencha a descrição e insira um valor válido.");
    }
}

function atualizarHistorico() {
    const listaHistorico = document.getElementById('historico');
    listaHistorico.innerHTML = "";

    historico.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.descricao}: ${item.valor}`;
        listaHistorico.appendChild(li);
    });
}