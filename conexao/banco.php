
<?php 
    $conn = new mysqli("localhost", "root", "root", "padaria");

    if($conn->connect_error){
        die("Erro de conexão" . $conn -> connect_error);
    }

    echo "Conexão feita";
?>