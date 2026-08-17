<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once(__DIR__ . "/../../scripts/auth.php");
require_once(__DIR__ . "/../../scripts/auth_admin.php");

if (!$_GET['p']) {
    header("Location: ./?p=List");
}

// ['List', 'Usuarios']

?>

<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resolve IT</title>
    <link rel="stylesheet" href="../css/styleCallsList.css">
    <link rel="stylesheet" href="../css/styleSideBar.css">
    <link rel="stylesheet" href="../css/styleHeader.css">
</head>

<?php if ($_GET['p'] == 'List'): ?>


    <body>

        <header class="header">
            <nav class="header-nav">
                <p href="list.html" class="nav-item active">List</p>
                <a href="./?p=Usuarios" class="nav-item">Usuários</a>
            </nav>
        </header>

        <!-- Botão no canto superior esquerdo -->
        <button id="menu-btn" class="menu-btn">&#9776;</button>

        <!-- Aba/Painel lateral que inicia oculta -->
        <nav id="sidebar" class="sidebar">
            <div class="sidebar-content">
                <h2>Meu Site</h2>
                <ul>
                    <li><a href="#">Perfil</a></li>
                    <li><a href="../CriarCalls/">Criar Chamado</a></li>
                    <li class="logoutBtn"><a href="../../scripts/logout.php">Logout</a></li>
                </ul>
            </div>
        </nav>


        <br>
        <table class="table">
            <thead>
                <tr>
                    <th>Tipo</th>
                    <th>Observação</th>
                    <th>Data</th>
                </tr>
            </thead>
            <tbody id="tablesBody">
            </tbody>
            <span id="ReloadCalls" class="emoji">🔄</span>
        </table>
        <script type="text/javascript">
            var myvar = '<?php echo $_SESSION['usuario']; ?>';
        </script>
        <script type="module" src="script/List.js"></script>
        <script type="module" src="../../src/SideBar/sidebar.js"></script>
    </body>

<?php else: ?>
    <h1>Pagina em desenvolvimento</h1>
    <a href="./?p=List">Voltar</a>

<?php endif; ?>

</html>