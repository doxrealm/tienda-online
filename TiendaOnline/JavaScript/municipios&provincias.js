//*************************************************************************************************************************************************************
//  PROVINCIAS Y MUNICIPIOS DE ESPAÑA
//*************************************************************************************************************************************************************


// ENVIA LOS DATOS A HTML - SELECTPROVINCIASFORM
//*************************************************************************************************************************************************************

function solicitar_provincias(selectProvincias)
{
	iniciar();
	
	http_request.onreadystatechange = function(){ recibe_provincias(selectProvincias) };
	
	http_request.open("POST", "http://localhost/TiendaOnline/PHP/listaProvincias&MunicipiosXML.php", true);
	
	http_request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	
	http_request.send();
}
//*************************************************************************************************************************************************************




// RECIBE PROVINCIAS DE XML y CREA OPCIONES PARA SELECTPROVINCIASFORM
//*************************************************************************************************************************************************************

function recibe_provincias(selectProvincias)
{
	if(http_request.readyState == 4 && http_request.status == 200)
	{
		var datosXML = http_request.responseXML;
		var listaDeProvincias = datosXML.getElementsByTagName("provincia");
		var i;
		var option;
		
		//selectProvincias = document.getElementById("selectProvincias");
		
		// Rellena opciones de selectProvincias
		
		if(listaDeProvincias.length != selectProvincias.options.length - 1)
		{
			option = document.createElement("option");
			
			option.text = "";
			
			option.value ="";
			
			selectProvincias.add(option, null);
			
			
			
			for(i = 0; i < listaDeProvincias.length; i++)
			{
				option = document.createElement("option");
				
				option.text = listaDeProvincias[i].childNodes[1].firstChild.nodeValue;
				
				option.value = listaDeProvincias[i].childNodes[1].firstChild.nodeValue;
				
				selectProvincias.add(option, null); 
			}
		}
	}
}
//*************************************************************************************************************************************************************
//*************************************************************************************************************************************************************
//*************************************************************************************************************************************************************
//*************************************************************************************************************************************************************
//*************************************************************************************************************************************************************




// ENVIA LOS DATOS A HTML - SELECTMUNICIPIOSFORM
//*************************************************************************************************************************************************************

function solicitar_municipios(selectProvincias, selectMunicipios)
{
	iniciar();
	
	http_request.onreadystatechange = function(){ recibe_municipios(selectProvincias, selectMunicipios) };
	
	http_request.open("POST", "http://localhost/TiendaOnline/PHP/listaProvincias&MunicipiosXML.php", true);
	
	http_request.send();
}
//*************************************************************************************************************************************************************





// RECIBE MUNICIPIOS SEGÚN PROVINCIA ELEGIDA EN SELECTPROVINCIASFORM Y  CREA LAS OPCIONES PARA SELECTMUNICIPIOSFORM
//*************************************************************************************************************************************************************

function recibe_municipios(selectProvincias, selectMunicipios)
{
	if(http_request.readyState == 4 && http_request.status == 200)
	{
		var datosXML = http_request.responseXML;
		var listaDeProvincias = datosXML.getElementsByTagName("provincia");
		var provincia =  selectProvincias.options[selectProvincias.selectedIndex].value;
		var i;
		var j;
		var k;
		var option;
		
		
		for(i = 0; i < listaDeProvincias.length; i++)
		{
			if(listaDeProvincias[i].childNodes[1].firstChild.nodeValue == provincia)
			{
				borrar_options(selectMunicipios);

				if(listaDeProvincias[i].childNodes[2].childNodes.length != selectMunicipios.options.length - 1)
				{
					option = document.createElement("option");
			
					option.text = "";
					
					option.value = "";
			
					selectMunicipios.add(option, null);
					
					
					for (j = 0; j < listaDeProvincias[i].childNodes[2].childNodes.length; j++)
					{
						option = document.createElement("option");
				
						option.text = listaDeProvincias[i].childNodes[2].childNodes[j].firstChild.nodeValue;
						
						option.value = listaDeProvincias[i].childNodes[2].childNodes[j].firstChild.nodeValue;
				
						selectMunicipios.add(option, null); 
					}
				}
			}
		}
	}
}
//*************************************************************************************************************************************************************


				
			