<?php 
//include 'conexion.php';

class LoginModelo{


	function __construct(){


	}

	public static function LogInModelo($tabla,$valor1){

		if($valor1 != null){
			//echo "tabla: " . $tabla;
			//echo "valor 1: " . $valor1;
			//echo "valor 2: " . $valor2;
			//$query = "SELECT COUNT(*) FROM $tabla WHERE Username = :valor1 AND Password = :valor2";
			$query = "SELECT * FROM $tabla WHERE Username = :valor1";
			$stmt = Conexion::Conectar()->prepare($query);
			$stmt->bindParam(":valor1",$valor1);
//			$stmt->bindParam(":valor2",$valor2);

			$stmt->execute();
			return $stmt->fetch();
			/*
			$rows = $stmt->fetchColumn(0);
			echo "<script>console.log('Registros' +" .$rows.");</script>";
			if($rows > 0){
				echo "ok";
			}
			else if($rows == 0){
				echo "error";
			}*/

		}
	}

	public static function ActualizarAccesoModelo($tabla,$valor1,$valor2){

		$query =  "UPDATE $tabla SET FechaAcceso = :valor1 WHERE idUser = :valor2";
		$stmt = Conexion::Conectar()->prepare($query);
		$stmt->bindParam(":valor1",$valor1);
		$stmt->bindParam(":valor2",$valor2);
		$stmt->execute();
		
	}



}



 ?>