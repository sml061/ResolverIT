import { API_URL } from "../../../src/Api/Api_Address.js";

// Captura a parte de busca da URL (?id=4)
const urlParams = new URLSearchParams(window.location.search);

// Pega o valor do parâmetro 'id'
const id = urlParams.get("id");

const btnAssumir = document.getElementById("btn-assumir");

async function LoadCall(id) {

    const resposta = await fetch(
        `${API_URL}/DetalhesCall/${id}`
    );

    if (!resposta.ok) {
        throw new Error(
            `Erro ao carregar chamado: ${resposta.status}`
        );
    }

    const dados = await resposta.json();

    return dados[0];
}

async function VerificarSeChamadoJaEstaAssumido(idChamado) {
    const resposta = await fetch(
        `${API_URL}/VerificarSeChamadoJaEstaAssumido/${idChamado}`,
    );

    const dados = await resposta.json();

    return dados.EstaAtribuido;
}

async function enviarCall(idChamado, Responsavel) {
    const resposta = await fetch(
        `${API_URL}/AssumirTecnicoAoChamado`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                idChamado,
                Responsavel,
            }),
        }
    );

    if (!resposta.ok) {
        throw new Error("Erro ao assumir o chamado");
    }

    return await resposta.json();
}


async function enviarCallDesassumir(idChamado, Responsavel) {

    console.log("Enviando requisição para desassumir...");

    const resposta = await fetch(
        `${API_URL}/DesassumirTecnicoAoChamado`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                idChamado,
                Responsavel,
            }),
        }
    );

    console.log("Resposta recebida:", resposta.status);

    if (!resposta.ok) {
        throw new Error(
            `Erro ao desassumir o chamado. Status: ${resposta.status}`
        );
    }

    const dados = await resposta.json();

    console.log("Resposta do servidor:", dados);

    return dados;
}

btnAssumir.addEventListener("click", async function () {

    console.log("========== CLIQUE NO BOTÃO ==========");

    try {
        const CallDetails = await LoadCall(id);

        if (CallDetails.Tecnico_Respo === myvar) {

            console.log("ENTROU NO DESASSUMIR");

            const confirmar = confirm(
                "Deseja desistir do chamado?"
            );

            if (!confirmar) {
                return;
            }

            console.log("Desassumindo...");

            await enviarCallDesassumir(id, myvar);

            console.log("Desassumido!");

        } else {

            console.log("ENTROU NO ASSUMIR");

            const ChamadoAtribuido =
                await VerificarSeChamadoJaEstaAssumido(id);

            if (ChamadoAtribuido === true) {

                const confirmar = confirm(
                    "Já possui um responsável, deseja assumir?"
                );

                if (!confirmar) {
                    return;
                }
            }

            console.log("Assumindo...");

            await enviarCall(id, myvar);

            console.log("Assumido!");
        }

        console.log("Atualizando interface...");

        await MontarData();

        console.log("Interface atualizada!");

    } catch (error) {

        console.error(
            "ERRO:",
            error
        );

    }

});


async function ChamadoAssumidoPorMim() {
    const Responsavel = (await LoadCall(id)).Tecnico_Respo;

    if (Responsavel === myvar) {
        return true;
    } else {
        return false;
    }
}

async function TipoBotaoAssumir() {
    const Responsavel = await ChamadoAssumidoPorMim();

    if (Responsavel === true) {
        btnAssumir.className = "btn btn-desassumir";
        btnAssumir.innerHTML = "Desistir";
    } else {
        btnAssumir.className = "btn btn-assumir";
        btnAssumir.innerHTML = "Assumir";
    }
}

async function MontarData() {

    const Usuario = document.getElementById("Usuario");
    const Tipo = document.getElementById("Tipo");
    const Criado_Em = document.getElementById("Criado_Em");
    const Tecnico_Respo = document.getElementById("Tecnico_Respo");
    const Observacao = document.getElementById("Observacao");
    const Mensagem = document.getElementById("Mensagem");

    const CallDetails = await LoadCall(id);


    // =========================
    // BOTÃO
    // =========================

    if (CallDetails.Tecnico_Respo === myvar) {

        btnAssumir.className = "btn btn-desassumir";
        btnAssumir.innerHTML = "Desistir";

    } else {

        btnAssumir.className = "btn btn-assumir";
        btnAssumir.innerHTML = "Assumir";

    }

    // =========================
    // RESPONSÁVEL
    // =========================

    if (!CallDetails.Tecnico_Respo) {
        Tecnico_Respo.textContent = "-";
    } else {
        Tecnico_Respo.textContent =
            CallDetails.Tecnico_Respo;
    }

    // =========================
    // DATA
    // =========================

    const data = CallDetails.Criado_Em;

    const date = new Date(
        data.replace(" ", "T")
    );

    const dataFormatada =
        new Intl.DateTimeFormat("pt-BR", {
            dateStyle: "short",
            timeStyle: "medium",
        }).format(date);

    Criado_Em.textContent =
        dataFormatada.replace(",", " ");

    // =========================
    // RESTANTE
    // =========================

    Usuario.textContent = CallDetails.Usuario;
    Tipo.textContent = CallDetails.Tipo;
    Observacao.textContent = CallDetails.Observacao;
    Mensagem.textContent = CallDetails.Mensagem;
}

MontarData();
