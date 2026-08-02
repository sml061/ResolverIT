<?php

require_once(__DIR__ . "/../../scripts/auth.php");

?>

<!doctype html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resolver IT</title>
    <link rel="stylesheet" href="../css/styleCriarCall.css">
    <link rel="stylesheet" href="../css/styleSideBar.css">
</head>

<body>

    <!-- Botão no canto superior esquerdo -->
    <button id="menu-btn" class="menu-btn">&#9776;</button>

    <!-- Aba/Painel lateral que inicia oculta -->
    <nav id="sidebar" class="sidebar">
        <div class="sidebar-content">
            <h2>Meu Site</h2>
            <ul>
                <li><a href="../VerCalls/">Ver Chamado</a></li>
                <li><a href="#">Perfil</a></li>
                <?php
                if ($_SESSION['is_admin'] == 1) {
                    echo "<li><a href=''>Admin Panel</a></li>";
                }
                ?>
                <li class="logoutBtn"><a href="../../scripts/logout.php">Logout</a></li>
            </ul>
        </div>
    </nav>

    <div class="container">
        <form id="CallForm">
            <h1>Atribuir Chamado</h1>

            <p id="message"></p>

            <div class="select-option">
                <label for="TipoOcorrencia">Tipo</label>
                <select name="TipoOcorrencia" id="TipoOcorrencia">
                    <option value="Manutenção">Manutenção</option>
                    <option value="Teste">Teste</option>
                </select>
            </div>

            <div class="obs-input">
                <label for="ObsInput">Observação</label>
                <input type="text" name="ObsInput" id="ObsInput" placeholder="Digite uma observação">
            </div>

            <div class="msg-input">
                <label for="Mensagem">Mensagem</label>
                <textarea name="Mensagem" id="Mensagem" placeholder="Descreva detalhadamente o atendimento realizado..."
                    rows="8"></textarea>
            </div>

            <button id="SubmitButton" type="button">
                Salvar
            </button>
        </form>
    </div>

    <script type="text/javascript">
        var myvar='<?php echo $_SESSION['usuario'];?>';
    </script>
    <script src="script/script.js"></script>
    <script src="../../src/SideBar/sidebar.js"></script>
</body>

</html>