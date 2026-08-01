const API_URL = "http://192.168.15.111:3000";

async function LoadCalls() {
    const Usuario = document.getElementById("Usuario").innerText;
    const resposta = await fetch(`${API_URL}/VerCall/once/${Usuario}`);

    const dados = await resposta.json();

    return dados;
}

async function CarregarTR() {
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
        tdMensagem.textContent = chamado.Mensagem;

        const tdDate = document.createElement("td");
        tdDate.textContent = dataFormatadaSemVirgula;

        tr.append(tdTipo);
        tr.append(tdMensagem);
        tr.append(tdDate);

        listaTabelasElement.append(tr);
    }
}

CarregarTR();
