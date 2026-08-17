<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once(__DIR__ . "/../../scripts/auth.php");
require_once(__DIR__ . "/../../scripts/auth_admin.php");

$ID = $_GET['id'];
$Usuario = $_SESSION['usuario']

    ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $ID ?></title>
    <link rel="stylesheet" href="../css/styleCallDetails.css">
</head>

<body>
    <div class="formData">
        <h1 id="Usuario">Usuario</h1>
        <h2 id="Tipo">Tipo</h2>
        <h3 id="Criado_Em">Data</h3>
        <h3 id="Tecnico_Respo">Responsavel</h3>
        <h3 id="Observacao">Observação</h3>
        <p id="Mensagem">Mensagem</p>
        <br>
        <div class="buttons">
            <a class="btn btn-secundary" href="./">Voltar</a>
            <button type="button" id="btn-assumir" class="btn btn-assumir">Assumir</button>
        </div>
    </div>

    <script type="text/javascript">
        var myvar = '<?php echo $_SESSION['usuario']; ?>';
        var idcall = '<?php echo $_GET['id'] ?>'
    </script>
    <script type="module" src="script/detalhes.js"></script>
</body>

</html>