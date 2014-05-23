//*************************************************************************************************************************************************************
//  CLIENTES - ALTA, BAJA, EDITAR DATOS Y RECORDAR CONTRASEÑA
//*************************************************************************************************************************************************************


// ALTA - COMPRUEBA QUE LOS CAMPOS SEAN CORRECTOS , QUE NO ESTÉN VACIOS ANTES DE ENVIAR, NI QUE HAYA DUPLICADOS
//*************************************************************************************************************************************************************


// ALTA - ENVIA DATOS DEL FORMULARIO - COMPRUEBA LOS DATOS ANTES DE ENVIAR
//*************************************************************************************************************************************************************
function insertar_cliente()
{
	var nick = document.getElementById("inputTextNick").value; //  document.formNuevoUser.inputTextNick.value  
	var pas = document.getElementById("inputTextPas").value;
	var nif = document.getElementById("inputTextNIF").value;
	var nombre = document.getElementById("inputTextNombre").value;
	var apellidos = document.getElementById("inputTextApellidos").value;
	var selectProvincias = document.getElementById("selectProvincias");
	var provincia = selectProvincias.options[selectProvincias.selectedIndex].value;
	var selectMunicipios = document.getElementById("selectMunicipios");
	var municipio = selectMunicipios.options[selectMunicipios.selectedIndex].value;
	var cp = document.getElementById("inputNumCP").value;
	var direccion = document.getElementById("inputTextDirec").value;
	var email = document.getElementById("inputEmail").value;
	var telefono = document.getElementById("inputTel").value;
	
	var labelErrNick = document.getElementById("labelErrNick");
	var labelErrPas = document.getElementById("labelErrPas");
	var labelErrNIF = document.getElementById("labelErrNIF");
	var labelErrNombre = document.getElementById("labelErrNombre");
	var labelErrApellidos = document.getElementById("labelErrApellidos");
	var labelErrProvincia = document.getElementById("labelErrProvincia");
	var labelErrMunicipio = document.getElementById("labelErrMunicipio");
	var labelErrCP = document.getElementById("labelErrCP");
	var labelErrDireccion = document.getElementById("labelErrDireccion");
	var labelErrEmail = document.getElementById("labelErrEmail");
	var labelErrTelefono = document.getElementById("labelErrTelefono");


	if(nickname(nick, labelErrNick)) 
	{ 
		if(passw0rd(pas, labelErrPas))
		{ 
			pas = hex_md5(pas);
			
			if(dni(nif, labelErrNIF))
			{	 
				if(nom(nombre, labelErrNombre))
				{
					if(ape(apellidos, labelErrApellidos))
					{
						if(provincia != "")
						{
							if(municipio != "")
							{
								if(codigo_postal(cp, labelErrCP))
								{
									if(direccion != "")
									{
										labelErrDireccion.innerHTML = "";
										
										if(emilio(email, labelErrEmail))
										{
											if(tel(telefono, labelErrTelefono))
											{
												enviar_datos(nick, pas, nif, nombre, apellidos, provincia, municipio, cp, direccion, email, telefono);
											}
										}
									}
									else
									{
										labelErrDireccion.innerHTML = "Debe introducir su direcci&oacute;n correctamente";
									}
								}
							}
							else
							{
								labelErrMunicipio.innerHTML = "Debe introducir su municipio";
							}
						}
						else
						{
							labelErrProvincia.innerHTML = "Debe introducir su provincia";
	}	}	}	}	}	}	 
}
//*************************************************************************************************************************************************************


// ALTA - ENVIAR FORMULARIO
//*************************************************************************************************************************************************************
function enviar_datos(nick, pas, nif, nombre, apellidos, provincia, municipio, cp, direccion, email, telefono)
{
	iniciar();
			
	http_request.onreadystatechange = recibe_respuesta_alta;
			
	http_request.open("POST", "http://localhost/TiendaOnline/PHP/alta_clientes.php", true);
			
	http_request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			
	http_request.send("nick=" + nick +"&pas=" + pas + "&nif=" + nif + "&nombre=" + nombre + "&apellidos=" + apellidos + "&provincia=" + provincia + "&municipio=" + municipio + "&cp=" + cp + "&direccion=" + direccion + "&email=" + email + "&telefono=" + telefono);
}
//*************************************************************************************************************************************************************

	
//  ALTA - RESPUESTA DEL SERVIDOR AL INSERTAR UN CLIENTE EN LA BD
//*************************************************************************************************************************************************************
function recibe_respuesta_alta()
{	
	if(http_request.readyState == 4 && http_request.status == 200)
	{	
		var respuestaPHP = http_request.responseText;
		
		alert(respuestaPHP); 
	}
}
//*************************************************************************************************************************************************************
//*************************************************************************************************************************************************************
//*************************************************************************************************************************************************************
//*************************************************************************************************************************************************************
//*************************************************************************************************************************************************************
//*************************************************************************************************************************************************************



// OPCION RECORDAR CONTRASEÑA - ENVIA CREDENCIALES A USUARIO SI ESTÁ EN LA BD
//*************************************************************************************************************************************************************


// ENVIA EMAIL - SOLICITA Y ENVÍA FUNCION ACCION ENVIAR
//*************************************************************************************************************************************************************
function enviar_email()
{
	var email = document.getElementById("inputRecEmail").value;
	var labelErrEmail = document.getElementById("labelErrRecEmail");
	
	
	if(emilio(email, labelErrEmail))
	{
		iniciar();
		
		http_request.onreadystatechange = respuesta_enviar;
		
		http_request.open("POST", "http://localhost/TiendaOnline/PHP/enviar_email.php", true);
		
		http_request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		
		http_request.send("email=" + email);
		
	}
}	
//*************************************************************************************************************************************************************	


// ENVIA EMAIL - INFORMA EL ESTADO DEL ENVIO
//*************************************************************************************************************************************************************
function respuesta_enviar()
{
	if(http_request.readyState == 4 && http_request.status == 200)
	{
		var respuestaPHP = http_request.responseText;
		
		alert(respuestaPHP);
	}
}	
//*************************************************************************************************************************************************************
//*************************************************************************************************************************************************************
//*************************************************************************************************************************************************************
//*************************************************************************************************************************************************************
//*************************************************************************************************************************************************************



// BORRAR CLIENTES - ELIMINA CLIENTE DE LA BD
//*************************************************************************************************************************************************************


// BORRAR CLIENTES - SOLICITA Y ENVÍA BAJA DE CLIENTES
//*************************************************************************************************************************************************************
function borrar_cliente()
{
	var nick = document.getElementById("inputTextBajaNick").value;
	var labelErrBajaNick = document.getElementById("labelErrBajaNick");
	var pas = document.getElementById("inputTextBajaPas").value;
	var labelErrBajaPas = document.getElementById("labelErrBajaPas");	
	var confirmacion;
	
	
	confirmacion = confirm("\u00bfEst\u00e1 usted seguro?");
	
	 
	
	if(nickname(nick, labelErrBajaNick))
	{
		if(passw0rd(pas, labelErrBajaPas))
		{
			if(confirmacion)
			{
				pas = hex_md5(pas);
				
				iniciar();
				
				http_request.onreadystatechange = respuesta_baja;
				
				http_request.open("POST", "http://localhost/TiendaOnline/PHP/borrar_clientes.php", true);
				
				http_request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
				
				http_request.send("nick=" + nick + "&pas=" + pas);
			}
		}
	}
}
//*************************************************************************************************************************************************************


// BORRAR CLIENTES - RESPUESTA DEL SERVIDOR AL BORRAR CLIENTE
//*************************************************************************************************************************************************************
function respuesta_baja()
{
	if(http_request.readyState == 4 && http_request.status == 200)
	{
		var respuestaPHP = http_request.responseText;
		
		alert(respuestaPHP);
	}
}
//*************************************************************************************************************************************************************
//*************************************************************************************************************************************************************
//*************************************************************************************************************************************************************
//*************************************************************************************************************************************************************
//*************************************************************************************************************************************************************


//	INICIO SESIÓN - SOLICITA Y ENVÍA SESIÓN
//*************************************************************************************************************************************************************
function solicita_sesion()
{
	var nick = document.getElementById("inpTextNickLogin").value;
	var pas = document.getElementById("inpTextPasLogin").value;
	
	var errNick = document.getElementById("labelLoginNickErr");
	var errPas = document.getElementById("labelLoginPasErr");
	
	if(nickname(nick, errNick))
	{
		if(passw0rd(pas, errPas))
		{
			pas = hex_md5(pas);
			
			iniciar();
			
			http_request.onreadystatechange = recibe_sesion;
			
			http_request.open("POST", "http://localhost/TiendaOnline/PHP/inicio_sesion.php", true);
			
			http_request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			
			http_request.send("nick=" + nick + "&pas=" + pas);
		}
	}
}
//*************************************************************************************************************************************************************
//var divNombreSesion;
//var divInicioSesion;
//var divRegistroUser;

//	INICIO SESIÓN - RESPUESTA SERVIDOR
//*************************************************************************************************************************************************************
function recibe_sesion()
{
	if(http_request.readyState == 4 && http_request.status == 200)
	{
		var datosPHP = http_request.responseText;
		
		
		var divNombreSesion = document.getElementById("divNombreSesion");
		var divInicioSesion = document.getElementById("divInicioSesion");
		var divRegistroUser = document.getElementById("divRegistroUser");
		
		if(datosPHP == "0")
		{
			alert("El usuario y/o la contrase\u00f1a son incorrectos");
		}
		else
		{
			alert("Se ha registrado correctamente");
			
			divInicioSesion.style.display = "none";
		
			divRegistroUser.style.display = "none";
		
			divNombreSesion.style.display = "inline-block";
		}
	}
}
//*************************************************************************************************************************************************************
//*************************************************************************************************************************************************************
//*************************************************************************************************************************************************************
//*************************************************************************************************************************************************************
//*************************************************************************************************************************************************************
