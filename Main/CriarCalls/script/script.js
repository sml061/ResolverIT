const SubmitButton = document.getElementById("SubmitButton");
const API_URL = "http://localhost:3000"

async function enviarCall(Tipo, Mensagem, Usuario) {
    try {
        const resposta = await fetch("http://localhost:3000/CriarCall", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Tipo,
                Mensagem,
                Usuario
            })
        });

        if (!response) {
            throw new Error('Erro ao enviar o chamado')
        }
        const resultado = await resposta.json()
        
        return resultado
    } catch (error) {
        console.log(`[Error]: ${error}`)
    }
}

SubmitButton.addEventListener("click", async function() {
    const CallForm = document.getElementById("CallForm");
    
    const formData = new FormData(CallForm);

    const data = await enviarCall(formData.get("TipoOcorrencia"), formData.get("ObsInput"), /* Trocar para o usuario real */"Samuel Bonfim")

    console.log(`Tipo: ${formData.get("TipoOcorrencia")}\nMensagem:${formData.get("ObsInput")}`);
})