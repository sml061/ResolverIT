<?php 
session_start();
$_SESSION["Usuario"] = "samuel";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <h1 id="Usuario"><?php echo $_SESSION["Usuario"]?></h1>
    
    <script src="script/script.js"></script>
</body>
</html>