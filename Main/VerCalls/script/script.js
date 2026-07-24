const API_URL = "http://localhost:3000";

async function LoadCalls () {
    const Usuario = document.getElementById("Usuario").innerText;
    resposta = await fetch(`${API_URL}/VerCall/once/${Usuario}`);
}

LoadCalls();