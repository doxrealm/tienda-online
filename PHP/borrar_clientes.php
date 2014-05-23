<?php

//*******************************************************************************************************************************
//  BORRAR CLIENTES
//*******************************************************************************************************************************


$conexion = mysqli_connect("127.0.0.1", "root");

mysqli_select_db($conexion, "tiendaonline");



// Comprueba la conexión. Si falla lanza un mensaje de aviso
//**************************************************************************
if(!$conexion)
{
	echo "Error de conexión a la Base de Datos: ". mysqli_connect_error();
}
//**************************************************************************


// Comprueba que existan todas las variables que se envían desde Javascript
//**************************************************************************
if(isset($_REQUEST['nick']) && isset($_REQUEST['pas']))
{
	$nick = $_REQUEST['nick'];
	
	$pas = $_REQUEST['pas'];
}
//**************************************************************************

$busqueda = "SELECT * 
			 FROM clientes
			 WHERE clientes.nick = '". $nick ."' AND clientes.pas = '". $pas ."'"; //
			 
$buscar_cliente = mysqli_query($conexion, $busqueda);

$registros = mysqli_num_rows($buscar_cliente);


if($registros == 0)
{
	echo "El cliente o la contrasena son incorrectos";
}
else
{
	$sentencia = "DELETE 
				  FROM clientes
				  WHERE clientes.nick = '". $nick ."'";
				  
	$borrar_cliente = mysqli_query($conexion, $sentencia);		
	
	echo "Se ha dado de baja correctamente";	  	
}
?>