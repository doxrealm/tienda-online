<?php
	
//*******************************************************************************************************************************
//  XML de productos
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


  
$sentencia = "SELECT embutidos.id_embutido AS embId, tipos.id_tipo AS tipId, productos.id_producto AS prodId, embutidos.nombre AS embutido, tipos.nombre AS tipo, productos.nombre AS producto, productos.descripcion, productos.imagen, productos.precio, productos.stock
				  FROM embutidos 
				  INNER JOIN tipos 
				  ON embutidos.id_embutido = tipos.id_embutido
				  INNER JOIN productos
				  ON tipos.id_tipo = productos.id_tipo
				  ORDER BY embutidos.id_embutido, tipos.id_tipo, productos.id_producto ASC";
				  

$resultado = mysqli_query($conexion, $sentencia);		


$cadenaEmb = "";
$cadenaTipo = "";
$cadenaProd = "";


echo "<inventario>";

while(($fila = mysqli_fetch_object($resultado)) != NULL)
{
	if($fila->embutido != $cadenaEmb)
	{
		if ($cadenaEmb != "")
		{
							echo "</prod>";
						
						echo "</productos>";
			
					echo "</tp>";
			
				echo "</tipos>";
			
			echo "</embutido>";	
		}
		
		echo "<embutido>";
		
			echo "<idEmb>". $fila->embId ."</idEmb>";
			
			echo "<nombreEmb>". $fila->embutido ."</nombreEmb>";
			
			echo "<tipos>";
			
				echo "<tp>";
			
					echo "<idTipo>". $fila->tipId ."</idTipo>";
					
					echo "<nombreTipo>". $fila->tipo ."</nombreTipo>";
				
					echo "<productos>";
					
						echo "<prod>";
	}
	else
	{
		if($fila->tipo != $cadenaTipo)
		{
						echo "</prod>";
						
					echo "</productos>";
				
				echo "</tp>";
			
				echo "<tp>";
			
					echo "<idTipo>". $fila->tipId ."</idTipo>";
					
					echo "<nombreTipo>". $fila->tipo ."</nombreTipo>";
				
					echo "<productos>";
					
						echo "<prod>";
		}
		else
		{
			if($fila->producto != $cadenaProd)
			{
						echo "</prod>";
				
						echo "<prod>";
			}
		}
	}
							echo "<idProd>". $fila->prodId ."</idProd>";
							
							echo "<nombreProd>". $fila->producto ."</nombreProd>";
							
							echo "<descripcion>". $fila->descripcion ."</descripcion>";
							
							echo "<imagen>". $fila->imagen ."</imagen>";
							
							echo "<precio>". $fila->precio ."</precio>";
							
							echo "<stock>". $fila->stock ."</stock>";
	
	$cadenaProd = $fila->producto;
	
	$cadenaTipo = $fila->tipo;
	
	$cadenaEmb = $fila->embutido;
}

						echo "</prod>";
					
					echo "</productos>";
			
				echo "</tp>";

			echo "</tipos>";
			
		echo "</embutido>";

	echo "</inventario>";	  

?>