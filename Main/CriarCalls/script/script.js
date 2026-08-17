import { API_URL } from "../../../src/Api/Api_Address.js";

const SubmitButton = document.getElementById("SubmitButton");

async function enviarCall(Tipo, ObsInput, Mensagem, Usuario) {
    try {
        const resposta = await fetch(`${API_URL}/CriarCall`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Tipo,
                ObsInput,
                Mensagem,
                Usuario
            })
        });

        if (!resposta.ok) {
            throw new Error("Erro ao enviar o chamado");
        }

        return await resposta.json();

    } catch (error) {
        console.error(error);
    }
}

SubmitButton.addEventListener("click", async () => {
    const formData = new FormData(document.getElementById("CallForm"));
    const messageElement = document.getElementById("message")

    const resultado = await enviarCall(
        formData.get("TipoOcorrencia"),
        formData.get("ObsInput"),
        formData.get("Mensagem"),
        myvar
    );

    console.log(resultado);

    if (resultado.sucesso === true) {
        console.log("Chamado enviado com sucesso")
        messageElement.innerHTML = "Chamado enviado com sucesso"
    } else {
        console.log("Chamado nao foi enviado")
        messageElement.innerHTML = "Chamado nao foi enviado"
    }
});