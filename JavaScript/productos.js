//*************************************************************************************************************************************************************
//  PRODUCTOS - MUESTRA PRODUCTOS Y FILTRA, SELECCIONA OPCION  DEL MENU EN LA WEB Y COMPRA 
//*************************************************************************************************************************************************************



// OPCION PRODUCTOS DE LA WEB
//*************************************************************************************************************************************************************
function opcion_productos()
{
	var divInicialProd = document.getElementById("divInicialProd");
	var divFiltrarProd = document.getElementById("divFiltrarProd");
	var divListaProd = document.getElementById("divListaProd");
	var divCarrito = document.getElementById("divCarrito");
	
	
	divInicialProd.style.display = "none";
	
	divFiltrarProd.style.display = "block";
		
	divListaProd.style.display = "block";
	
	divCarrito.style.display = "none";
}
//*************************************************************************************************************************************************************


// OPCION CARRITO DE LA WEB
//*************************************************************************************************************************************************************
function opcion_carrito()
{
	var divInicialProd = document.getElementById("divInicialProd");
	var divFiltrarProd = document.getElementById("divFiltrarProd");
	var divListaProd = document.getElementById("divListaProd");
	var divCarrito = document.getElementById("divCarrito");
	
	
	divInicialProd.style.display = "none";
	
	divFiltrarProd.style.display = "none";
		
	divListaProd.style.display = "none";
	
	divCarrito.style.display = "block";
}
//*************************************************************************************************************************************************************
//*************************************************************************************************************************************************************
//*************************************************************************************************************************************************************
//*************************************************************************************************************************************************************
//*************************************************************************************************************************************************************


// ENVIA EMBUTIDOS A HTML 
//*************************************************************************************************************************************************************
function solicitar_embutidos()
{
	iniciar();
	
	http_request.onreadystatechange = recibe_embutidos;
	
	http_request.open("POST", "http://localhost/TiendaOnline/PHP/listaProductosXML.php", true);
	
	http_request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	
	http_request.send();
}
//*************************************************************************************************************************************************************



// RECIBE EMBUTIDOS DE XML
//*************************************************************************************************************************************************************
function recibe_embutidos()
{
	if(http_request.readyState == 4 && http_request.status == 200)
	{
		var datosXML = http_request.responseXML;
		var listaDeEmbutidos = datosXML.getElementsByTagName("embutido");
		var selectEmbutidos = document.getElementById("selectEmbutidos"); 
		var i;
		var option;
		
		if(listaDeEmbutidos.length != selectEmbutidos.options.length - 1)
		{
			option = document.createElement("option");
			
			option.text = "";
			
			option.value = "";
			
			selectEmbutidos.add(option, null);
		
			
			for(i = 0; i < listaDeEmbutidos.length; i++)
			{
				option = document.createElement("option");
				
				option.text = listaDeEmbutidos[i].childNodes[1].firstChild.nodeValue;
				
				option.value = listaDeEmbutidos[i].childNodes[1].firstChild.nodeValue;
				
				selectEmbutidos.add(option, null); 
			}
		}
	}
}
//*************************************************************************************************************************************************************
//*************************************************************************************************************************************************************
//*************************************************************************************************************************************************************
//*************************************************************************************************************************************************************
//*************************************************************************************************************************************************************



// ENVIA TIPOS A HTML 
//*************************************************************************************************************************************************************
function solicitar_tipos()
{
	iniciar();
	
	http_request.onreadystatechange = recibe_tipos;
	
	http_request.open("POST", "http://localhost/TiendaOnline/PHP/listaProductosXML.php", true);
	
	http_request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	
	http_request.send();	
}
//*************************************************************************************************************************************************************



// RECIBE TIPOS DE XML
//*************************************************************************************************************************************************************
function recibe_tipos()
{
	if(http_request.readyState == 4 && http_request.status == 200)
	{
		var datosXML = http_request.responseXML;
		var listaDeEmbutidos = datosXML.getElementsByTagName("embutido");
		var selectEmbutidos =  document.getElementById("selectEmbutidos");
		var embutido = selectEmbutidos.options[selectEmbutidos.selectedIndex].value;
		var selectTipos = document.getElementById("selectTipos");
		var i;
		var j;
		var k;

		for(i = 0; i < listaDeEmbutidos.length; i++)
		{
			if(listaDeEmbutidos[i].childNodes[1].firstChild.nodeValue == embutido)
			{
				borrar_options(selectTipos);
				
				if(listaDeEmbutidos[i].childNodes[2].childNodes.length != selectTipos.options.length - 1)
				{
					option = document.createElement("option");
			
					option.text = "";
					
					option.value = "";
			
					selectTipos.add(option, null);
					
					
					for (j = 0; j < listaDeEmbutidos[i].childNodes[2].childNodes.length; j++)
					{
						option = document.createElement("option");
				
						option.text = listaDeEmbutidos[i].childNodes[2].childNodes[j].childNodes[1].firstChild.nodeValue;
						
						option.value = listaDeEmbutidos[i].childNodes[2].childNodes[j].childNodes[1].firstChild.nodeValue;
				
						selectTipos.add(option, null); 
					}
				}
			}
		}
		
	}
}
//*************************************************************************************************************************************************************
//*************************************************************************************************************************************************************
//*************************************************************************************************************************************************************
//*************************************************************************************************************************************************************



// ENVIA PRODUCTOS A HTML 
//*************************************************************************************************************************************************************

function solicitar_productos()
{
	iniciar();

	http_request.onreadystatechange = recibe_productos;
	
	http_request.open("POST", "http://localhost/TiendaOnline/PHP/listaProductosXML.php", true);
	
	http_request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	
	http_request.send(); 
} 
//*************************************************************************************************************************************************************



// RECIBE PRODUCTOS DE XML y CREA DIVS PARA MOSTRAR PRODUCTOS
//*************************************************************************************************************************************************************

function recibe_productos()
{
	if(http_request.readyState == 4 && http_request.status == 200)
	{
		var datosXML = http_request.responseXML;
		var listaDeEmbutidos = datosXML.getElementsByTagName("embutido");
		var divInicial = document.getElementById("divInicialProd");
		var divListaProd = document.getElementById("divListaProd");
		var divMostrarProd = document.getElementById("divMostrarProd");
		var selectEmbutidos =  document.getElementById("selectEmbutidos");
		var embutido = selectEmbutidos.options[selectEmbutidos.selectedIndex].value;
		var selectTipos = document.getElementById("selectTipos");
		var tipo = selectTipos.options[selectTipos.selectedIndex].value;
		var i;
		var j;
		var k;
		
		
		divInicial.style.display = "none";
		
		divListaProd.style.display = "block";
		
		divMostrarProd.innerHTML = "";
		
		if(embutido != "")
		{
			for(i = 0; i < listaDeEmbutidos.length; i++) 
			{
				if(listaDeEmbutidos[i].childNodes[1].firstChild.nodeValue == embutido)
				{	
					if(tipo != "")
					{
						for(j = 0; j < listaDeEmbutidos[i].childNodes[2].childNodes.length; j++)
						{	
							if(listaDeEmbutidos[i].childNodes[2].childNodes[j].childNodes[1].firstChild.nodeValue == tipo)
							{
								for(k = 0; k < listaDeEmbutidos[i].childNodes[2].childNodes[j].childNodes[2].childNodes.length; k++)
								{
									crear_divProducto(listaDeEmbutidos, i, j, k); 
								}
							}
						}
					}
					else
					{
						for(j = 0; j < listaDeEmbutidos[i].childNodes[2].childNodes.length; j++)
				 			for(k = 0; k < listaDeEmbutidos[i].childNodes[2].childNodes[j].childNodes[2].childNodes.length; k++)
								crear_divProducto(listaDeEmbutidos, i, j, k);
					}
				}
			}
		}
		else
		{
			for(i = 0; i < listaDeEmbutidos.length; i++)
				 for(j = 0; j < listaDeEmbutidos[i].childNodes[2].childNodes.length; j++)
				 	for(k = 0; k < listaDeEmbutidos[i].childNodes[2].childNodes[j].childNodes[2].childNodes.length; k++)
						crear_divProducto(listaDeEmbutidos, i, j, k);
		}
	}
}
//*************************************************************************************************************************************************************



// CREA DIV PARA MOSTRAR PRODUCTO
//*************************************************************************************************************************************************************

function crear_divProducto(listaDeEmbutidos, i, j, k)
{
	var divProducto = document.createElement("div");
	
	var divNombreProducto = document.createElement("div");
	var spanNombreProducto = document.createElement("span");
	var nombreProducto = "";
	
	var divImagenProducto = document.createElement("div");
	var imgImagenProducto = document.createElement("img");
	
	var divDescripcionProducto = document.createElement("div");
	var pDescripcionProducto = document.createElement("p");
	var descripcionProducto = "";
	
	var divPrecioProducto = document.createElement("div");
	var spanPrecioProducto = document.createElement("span");
	var precioProducto = "";
	
	var buttonComprar = document.createElement("input");
	


	// Atributos de divProducto 	
	// ********************************************************
		divProducto.id = "divProducto" + i + j + k;
	
		divProducto.className = "divProducto";
	// ********************************************************

	// Atributos de spanNombreProducto y divNombreProducto
	// ********************************************************
		spanNombreProducto.id = "spanNombreProducto" + i + j + k;
		
		spanNombreProducto.className = "spanNombreProducto";	
		
		divNombreProducto.id = "divNombreProducto" + i + j + k;
		
		divNombreProducto.className = "divNombreProducto"; 
	// ********************************************************

	// Atributos de divImagenProd e imgImagenProd
	// ********************************************************
		divImagenProducto.id = "divImagenProducto" + i + j + k;
		
		divImagenProducto.className = "divImagenProducto";
		
		imgImagenProducto.id = "imgImagenProducto" + i + j + k;

		imgImagenProducto.className = "imgImagenProducto";
	// ********************************************************* 
	
	// Atributos de divDescripcionProducto y pDescripcionProducto
	// ********************************************************
		divDescripcionProducto.id = "divDescripcionProducto" + i + j + k;
		
		divDescripcionProducto.className = "divDescripcionProducto";
		
		pDescripcionProducto.id = "pDescripcionProducto" + i + j + k;
		
		pDescripcionProducto.className = "pDescripcionProducto";
	// ********************************************************
	
	// Atributos de divPrecioProducto y spanPrecioProducto
	// ********************************************************
		divPrecioProducto.id = "divPrecioProducto" + i + j + k;
		
		divPrecioProducto.className = "divPrecioProducto";
		
		spanPrecioProducto.id = "spanPrecioProducto" + i + j + k;
		
		spanPrecioProducto.className = "spanPrecioProducto";
	// ********************************************************
	
	// Atributos de buttonComprar
	// ********************************************************
		buttonComprar.type = "button";
		
		buttonComprar.id = "buttonComprar" + i + j + k;

		buttonComprar.className = "buttonComprar";

		buttonComprar.value = "A\u00f1adir al Carrito";
		
		buttonComprar.onclick = function(){detalle_carrito(listaDeEmbutidos, i, j, k)};
	// ********************************************************
		
	
	// Titulo de divProducto 
	// ********************************************************
		nombreProducto = listaDeEmbutidos[i].childNodes[2].childNodes[j].childNodes[2].childNodes[k].childNodes[1].firstChild.nodeValue;
		
		spanNombreProducto = document.createTextNode(nombreProducto);
		
		divNombreProducto.appendChild(spanNombreProducto);
		
		divProducto.appendChild(divNombreProducto);
	// ********************************************************
	
	// Imagen de divImagenProducto 
	// ********************************************************
		imgImagenProducto.setAttribute("src", listaDeEmbutidos[i].childNodes[2].childNodes[j].childNodes[2].childNodes[k].childNodes[3].firstChild.nodeValue);
		divImagenProducto.appendChild(imgImagenProducto);
		
		divProducto.appendChild(divImagenProducto);
	// ********************************************************	

	// Descripcion de divDescripcionProducto
	// ********************************************************	
		descripcionProducto = listaDeEmbutidos[i].childNodes[2].childNodes[j].childNodes[2].childNodes[k].childNodes[2].firstChild.nodeValue;
		
		pDescripcionProducto = document.createTextNode(descripcionProducto);	
		
		divDescripcionProducto.appendChild(pDescripcionProducto);
		
		divProducto.appendChild(divDescripcionProducto);
	// ********************************************************
	
	// Precio de divPrecioProducto
	// ********************************************************
		precioProducto = "PRECIO :   " + listaDeEmbutidos[i].childNodes[2].childNodes[j].childNodes[2].childNodes[k].childNodes[4].firstChild.nodeValue + " \u20ac";
		
		spanPrecioProducto = document.createTextNode(precioProducto);
		
		divPrecioProducto.appendChild(spanPrecioProducto);
		
		divProducto.appendChild(divPrecioProducto);
	// ********************************************************
	
	
	// inclusion de buttonComprar en divProducto
	// ********************************************************	
		divPrecioProducto.appendChild(buttonComprar);
	// ********************************************************
	
		
	// inclusion de divProducto en la web
	// ********************************************************
		divMostrarProd.appendChild(divProducto);
	// ********************************************************					

}
//*************************************************************************************************************************************************************
//*************************************************************************************************************************************************************
//*************************************************************************************************************************************************************
//*************************************************************************************************************************************************************
//*************************************************************************************************************************************************************

var total_filas = 0;
var matriz = new Array();

//	AÑADIR ELEMENTO A TABLA DE COMPRA	
//*************************************************************************************************************************************************************
function detalle_carrito(listaDeEmbutidos, i, j, k)
{
	var fila_compra = new Array(3);
	
	var x;
	var u;
	var tbody = document.getElementById("tbodyTablaCompra");
	var elementoFila;
	var encontrado = false;	
	
	
	fila_compra[0] = 1; // Cantidad
	fila_compra[1] = listaDeEmbutidos[i].childNodes[2].childNodes[j].childNodes[2].childNodes[k].childNodes[1].firstChild.nodeValue; // Producto
	fila_compra[2] = listaDeEmbutidos[i].childNodes[2].childNodes[j].childNodes[2].childNodes[k].childNodes[4].firstChild.nodeValue; // Precio
	
	
	x=0;
	while (x<total_filas && !encontrado)
	{
		if (matriz[x][1] == fila_compra[1])
		{
			encontrado = true;
		}
		else
		{
			x++;
		}
	}
	
	if (encontrado)
	{
		matriz[x][0]++;
	}
	else
	{
		matriz[total_filas] = fila_compra;
	
		total_filas++;
	}
	
	
	
	tbodyTablaCompra.innerHTML = "";
	
	x=0;
	while(x < total_filas)
	{
		var filaXProducto = document.createElement("tr");
		
		
		for(u = 0; u < 3; u++)
		{
			elementoFila = document.createElement("td");
	
			elementoFila.innerHTML = matriz[x][u];
	
			filaXProducto.appendChild(elementoFila);
		}
		
		tbodyTablaCompra.appendChild(filaXProducto);
		
		x++;
	}
}
//*************************************************************************************************************************************************************
//*************************************************************************************************************************************************************
//*************************************************************************************************************************************************************
//*************************************************************************************************************************************************************
//*************************************************************************************************************************************************************


//	ENVIA COMPRA A SERVIDOR	
//*************************************************************************************************************************************************************
solicitar_compra()
{
	iniciar();
	
	http_request.onreadystatechange = "";
	
	http_request.open("POST", "localhost/TiendaOnline/PHP/");
	
	http_request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	
	http_request.send();	

}
//*************************************************************************************************************************************************************
