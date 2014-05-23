<?php
//*******************************************************************************************************************************
// INICIO SESIÓN CLIENTES
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
			 WHERE clientes.nick = '". $nick ."' AND clientes.pas = '". $pas ."'"; 
	
			 
$buscar_cliente = mysqli_query($conexion, $busqueda);


$registro = mysqli_num_rows($buscar_cliente);

$datos = "";					

if($registro == 0)
{
	echo "0";
}
else
{
	while(($fila =  mysqli_fetch_object($buscar_cliente)) != NULL)
	{
		if($fila->nick == $nick)
		{
			session_start();
			
			
		//	if(!isset($_SESSION['nick']) && !isset($_SESSION['pas']) && !isset($_SESSION['nif']) && !isset($_SESSION['provincia']) && !isset($_SESSION['municipio']) && !isset($_SESSION['cp']) && !isset($_SESSION['direccion']) && !isset($_SESSION['telefono']) && !isset($_SESSION['email']))
		//	{
				$_SESSION['nick'] = $fila->nick;
				
				$_SESSION['pas'] = $fila->pas;
				
				$_SESSION['nif'] = $fila->nif;
				
				$_SESSION['provincia'] = $fila->provincia;
				
				$_SESSION['municipio'] = $fila->municipio;
				
				$_SESSION['cp'] = $fila->cp;
				
				$_SESSION['direccion'] = $fila->direccion;
				
				$_SESSION['telefono'] = $fila->telefono;
				
				$_SESSION['email'] = $fila->email;
				
				$_SESSION['conectado'] = true;
				
				echo "1";
			//}
		}
	}
}
?>