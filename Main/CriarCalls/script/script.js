const SubmitButton = document.getElementById("SubmitButton");
const API_URL = "http://192.168.15.111:3000";

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

    const resultado = await enviarCall(
        formData.get("TipoOcorrencia"),
        formData.get("ObsInput"),
        formData.get("Mensagem"),
        "Samuel Bonfim"
    );

    console.log(resultado);
});