<!doctype html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resolver IT</title>
    <link rel="stylesheet" href="../css/styleCriarCall.css">
</head>

<body>
    <div class="container">
        <form id="CallForm">
            <h1>Atribuir Chamado</h1>

            <div class="select-option">
                <label for="TipoOcorrencia">Tipo</label>
                <select name="TipoOcorrencia" id="TipoOcorrencia">
                    <option value="Manutenção">Manutenção</option>
                    <option value="Teste">Teste</option>
                </select>
            </div>

            <div class="obs-input">
                <label for="ObsInput">Observação</label>
                <input
                    type="text"
                    name="ObsInput"
                    id="ObsInput"
                    placeholder="Digite uma observação"
                >
            </div>

            <div class="msg-input">
                <label for="Mensagem">Mensagem</label>
                <textarea
                    name="Mensagem"
                    id="Mensagem"
                    placeholder="Descreva detalhadamente o atendimento realizado..."
                    rows="8"
                ></textarea>
            </div>

            <button id="SubmitButton" type="button">
                Salvar
            </button>
        </form>
    </div>

    <script src="script/script.js"></script>
</body>
</html>