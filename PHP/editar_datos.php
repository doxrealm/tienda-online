<?php
//*******************************************************************************************************************************
// EDITAR DATOS CLIENTE
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
if(isset($_REQUEST['nick']) )
{
	$nick = $_REQUEST['nick'];
	
	$pas = $_REQUEST['pas'];
}
//**************************************************************************

?>