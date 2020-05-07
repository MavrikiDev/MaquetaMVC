<?php
<!DOCTYPE html>
<head>
  <title><?php echo SERVERNAME ?></title>
  
</head>
<body>
  <?php
  if(isset($_SESSION['inicioSesion']){
    //Credencial válida, cargamos el sistema.
    include 'include/menuSuperior.php';
  }
  else{
    //Debe logearse.
  
  }
  ?>

</body>
</html>
?>
