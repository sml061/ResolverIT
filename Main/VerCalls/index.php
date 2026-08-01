<?php
session_start();
$_SESSION["Usuario"] = "admin";
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../css/styleCallsList.css">
</head>

<body>

    <h1 id="Usuario"><?php echo $_SESSION["Usuario"] ?></h1>
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
    </table>
    <script src="script/script.js"></script>
</body>

</html>