<?php
	
//*******************************************************************************************************************************
//  XML de clientes
//*******************************************************************************************************************************
	
header("Content-type: text/xml"); 
echo "<?xml version='1.0' encoding='ISO-8859-1'?>";


$conexion = mysqli_connect("127.0.0.1", "root");

mysqli_select_db($conexion, "tiendaonline");



// Comprueba la conexión. Si falla lanza un mensaje de aviso
//**************************************************************************
if(!$conexion)
{
	echo "Error de conexión a la Base de Datos: ". mysqli_connect_error();
}
//**************************************************************************



$sentencia = "SELECT * FROM clientes";

$resultado = mysqli_query($conexion, $sentencia);


echo "<clientes>";

while(($fila = mysqli_fetch_object($resultado)) != NULL)
{
	echo "<cl>";
			
		echo "<id>". $fila->id_cliente ."</id>";
		
		echo "<nick>". $fila->nick ."</nick>";
		
		echo "<pas>". $fila->pas ."</pas>";
		
		echo "<nif>". $fila->nif ."</nif>";
		
		echo "<nombre>". $fila->nombre ."</nombre>";
		
		echo "<apellidos>". $fila->apellidos ."</apellidos>";
		
		echo "<provincia>". $fila->provincia ."</provincia>";
		
		echo "<municipio>". $fila->municipio ."</municipio>";	
		
		echo "<cp>". $fila->cp ."</cp>";
		
		echo "<telefono>". $fila->telefono ."</telefono>";
		
		echo "<email>". $fila ->email ."</email>";
	
	echo "</cl>";
}

echo "</clientes>";

?>