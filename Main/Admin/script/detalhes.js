// Captura a parte de busca da URL (?id=4)
const urlParams = new URLSearchParams(window.location.search);

// Pega o valor do parâmetro 'id'
const id = urlParams.get("id");

const API_URL = "http://192.168.15.111:3000";

const btnAssumir = document.getElementById("btn-assumir");

async function LoadCall(id) {
    const resposta = await fetch(`${API_URL}/DetalhesCall/${id}`);

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
    try {
        const resposta = await fetch(`${API_URL}/AssumirTecnicoAoChamado`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                idChamado,
                Responsavel,
            }),
        });

        if (!resposta.ok) {
            throw new Error("Erro ao enviar o chamado");
        }

        return await resposta.json();
    } catch (error) {
        console.error(error);
    }
}

btnAssumir.addEventListener("click", async function () {
    const ChamadoAtribuido = await VerificarSeChamadoJaEstaAssumido(idcall);

    if (ChamadoAtribuido === true) {
        const respostaConfirmAtribuido = confirm(
            "Ja possui um responsavel, deseja assumir?",
        );

        if (!respostaConfirmAtribuido) {
            return;
        }
    }

    console.log(ChamadoAtribuido);

    const respostaConfirm = confirm("Deseja continuar?");

    if (respostaConfirm) {
        const resultado = await enviarCall(idcall, myvar);
        console.log(resultado);
    } else {
        console.log("Chamado nao enviado");
    }

    MontarData();
});

async function MontarData() {
    const Usuario = document.getElementById("Usuario");
    const Tipo = document.getElementById("Tipo");
    const Criado_Em = document.getElementById("Criado_Em");
    const Tecnico_Respo = document.getElementById("Tecnico_Respo"); // se vazio == "-"
    const Observacao = document.getElementById("Observacao");
    const Mensagem = document.getElementById("Mensagem");

    const CallDetails = await LoadCall(id);

    if (!CallDetails.Tecnico_Respo) {
        Tecnico_Respo.textContent = "-";
    } else {
        Tecnico_Respo.textContent = CallDetails.Tecnico_Respo;
    }

    const data = CallDetails.Criado_Em;
    const date = new Date(data.replace(" ", "T"));
    const dataFormatada = new Intl.DateTimeFormat("pt-BR", {
        dateStyle: "short",
        timeStyle: "medium",
    }).format(date);
    const dataFormatadaSemVirgula = dataFormatada.replace(",", " ");

    Usuario.textContent = CallDetails.Usuario;
    Tipo.textContent = CallDetails.Tipo;
    Criado_Em.textContent = dataFormatadaSemVirgula;
    Observacao.textContent = CallDetails.Observacao;
    Mensagem.textContent = CallDetails.Mensagem;
}

MontarData();
