<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once(__DIR__ . "/../../scripts/auth.php");

$ID = $_GET['id'];

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
        <a class="btn btn-secundary" href="./">Voltar</a>
    </div>

    <script src="script/detalhes.js"></script>
</body>

</html>