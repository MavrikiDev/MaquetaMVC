<?php
	
	class Conexion{
	/*==================================================
	CLASE UTILIZADA PARA REALIZAR LA CONEXION A LA BD.
	==================================================*/
		public static function Conectar(){
			try
			{
				/*User y password de ejemplo. Deben ser modificados.
				User and password are just examples. They must be modified.
				*/
				$conPDO = new PDO('mysql:host=127.0.0.1; dbname=VentaSimple;', 'admin', 'adminadmin');
				$conPDO->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				return $conPDO;

			}
			catch(PDOException $e){
				die('Error' . $e->GetMessage());
				echo "El error se encuentra en la línea" . $e.getLine();
			}
			/*
			finally{	
				$conPDO = null; //Vaciamos la memoria.
			}*/

		}

	}

?>