<?php

require_once(__DIR__ . "/../../scripts/auth.php");

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../css/styleCallsList.css">
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
                <li><a href="../CriarCalls/">Criar Chamado</a></li>
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
        <span id="ReloadCalls">🔄</span>
    </table>
    <script type="text/javascript">
        var myvar='<?php echo $_SESSION['usuario'];?>';
    </script>
    <script src="script/script.js"></script>
    <script src="../../src/SideBar/sidebar.js"></script>
</body>

</html>