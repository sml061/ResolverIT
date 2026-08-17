import { API_URL } from "../../../src/Api/Api_Address.js";
const ReloadCall = document.getElementById("ReloadCalls");

async function LoadCalls() {
    const Usuario = myvar;
    const resposta = await fetch(`${API_URL}/VerCall/once/${Usuario}`);

    const dados = await resposta.json();

    return dados;
}

async function CarregarTR() {
    LimparTR();
    const listaTabelasElement = document.getElementById("tablesBody");

    const chamados = await LoadCalls();

    for (const chamado of chamados) {
        const data = chamado.Criado_Em;
        const date = new Date(data.replace(" ", "T"));
        const dataFormatada = new Intl.DateTimeFormat("pt-BR", {
            dateStyle: "short",
            timeStyle: "medium",
        }).format(date);
        const dataFormatadaSemVirgula = dataFormatada.replace(",", " ");

        const tr = document.createElement("tr");

        tr.dataset.id = chamado.ID;

        tr.addEventListener("click", () => {
            window.location.href = `detalhes.php?id=${tr.dataset.id}`;
        });

        const tdTipo = document.createElement("td");
        tdTipo.textContent = chamado.Tipo;

        const tdMensagem = document.createElement("td");
        tdMensagem.textContent = chamado.Observacao;

        const tdDate = document.createElement("td");
        tdDate.textContent = dataFormatadaSemVirgula;

        tr.append(tdTipo);
        tr.append(tdMensagem);
        tr.append(tdDate);

        listaTabelasElement.append(tr);
    }
}

async function LimparTR() {
    const listaTabelasElement = document.getElementById("tablesBody");

    listaTabelasElement.innerHTML = "";
}

ReloadCall.addEventListener("click", function () {
    CarregarTR();
});

setTimeout(() => {
    CarregarTR()
}, 30000)

CarregarTR();