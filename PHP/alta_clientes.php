<?php

//*******************************************************************************************************************************
//  INSERTAR CLIENTES
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
if(isset($_REQUEST['nick']) && isset($_REQUEST['pas']) && isset($_REQUEST['nif']) && isset($_REQUEST['nombre']) && isset($_REQUEST['apellidos']) && isset($_REQUEST['provincia']) && isset($_REQUEST['municipio']) && isset($_REQUEST['cp']) && isset($_REQUEST['direccion']) && isset($_REQUEST['email']) && isset($_REQUEST['telefono']))
{
	$nick = $_REQUEST['nick'];
	$pas = $_REQUEST['pas'];
	$nif = $_REQUEST['nif'];
	$nombre = $_REQUEST['nombre'];
	$apellidos = $_REQUEST['apellidos'];
	$provincia = $_REQUEST['provincia'];
	$municipio = $_REQUEST['municipio'];
	$cp = $_REQUEST['cp'];
	$direccion = $_REQUEST['direccion'];
	$email = $_REQUEST['email'];
	$telefono = $_REQUEST['telefono'];
}	
//**************************************************************************


$busqueda = "SELECT clientes.nif, clientes.nick, clientes.nombre, clientes.apellidos, clientes.email
			 FROM clientes
			 WHERE clientes.nif = '". $nif ."' OR clientes.nick = '". $nick ."' OR (clientes.nombre = '". $nombre. "' AND clientes.apellidos = '". $apellidos ."') OR clientes.email = '". $email ."'";
		 


$buscar_cliente = mysqli_query($conexion, $busqueda);

$registros = mysqli_num_rows($buscar_cliente);




if ($registros == 0)
{
	$insertar = "INSERT INTO clientes (nick, pas, nif, nombre, apellidos, provincia, municipio, cp, direccion, telefono, email) VALUES 
				('". utf8_decode($nick) ."', '". $pas ."', '". $nif ."', '". utf8_decode($nombre) ."', '". utf8_decode($apellidos) ."', '". utf8_decode($provincia) ."', '". utf8_decode($municipio) ."', ". $cp .", '". utf8_decode($direccion) ."', ".$telefono .", '". $email ."')";

	$insertar_cliente = mysqli_query($conexion, $insertar);
	
	echo "Se ha registrado correctamente";
}
else
{
	echo "Este cliente ya existe";
}

?>