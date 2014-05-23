<?php
	session_start();
?>


<!doctype html>
<html><!-- InstanceBegin template="/Templates/plantillaTiendaOnline.dwt" codeOutsideHTMLIsLocked="false" -->

<!-- Cabecera de la web -->

<head>
    <meta charset="ISO-8859-1">
    <meta name="description" content="Venta Online de jamones y embutidos">
	<meta name="keywords" content="HTML, CSS, JavaScript, PHP, Ajax, XML">
	<meta name="author" content="Victor Serna Fernandez">
    
	<!-- InstanceBeginEditable name="doctitle" -->
    	<title> Embutidos Online </title>
    <!-- InstanceEndEditable -->
    
    
    <link  rel="stylesheet" type="text/css" href= "../Estilos/estiloTiendaOnline.css">
    
	<script type="text/javascript" src="../JavaScript/md5.js"></script>   
    <script type="text/javascript" src="../JavaScript/funcionesGenerales.js" ></script>
    <script type="text/javascript" src="../JavaScript/productos.js" ></script>
	<script type="text/javascript" src="../JavaScript/clientes.js"></script>
	<script type="text/javascript" src="../JavaScript/municipios&provincias.js"></script>
    

	<!-- InstanceBeginEditable name="head" -->
    	
    <!-- InstanceEndEditable -->
</head>


<body onLoad="IniciarSecuencia()">

<!-- div que engloba todo el contenido de la web -->

<div id="divTotal">
    
    <!-- div Cabecera de la web -->
    
    <div id="divCabecera">
        
        <!-- div donde se muestra logotipo de la web -->
        
        <div id="divLogo">
        	<a href="index.php"> <img id="imgLogo" src="../ImagenesWeb/jamesp.jpg" /> </a>
        </div>
    </div>    	
  
    
    
    <!-- div que muestra las opciones de la web -->
    
    <div id="divMenu">

    	<!-- Opciones de menu -->
        
        <div class="divOpciones">
        
            <div class="divOpcionMenu"> <a class="aMenu" href="productos.html"> productos </a> </div> 
            
             <div class="divOpcionMenu"> <a class="aMenu" href="contacto.php"> contacto </a> </div> 
            
             <div class="divOpcionMenu"> <a class="aMenu" href="registrate.php"> reg&iacute;strate </a> </div> 
            
             <div class="divOpcionMenu"> <a class="aMenu" href="perfil.php"> perfil </a> </div> 
        </div>
        

    	
        <!-- div de inicio de sesion y mosrtar nombre de cliente registrado -->
        
        <div id="divLogIn">
        	
            <!-- inicio de sesion -->
            
            <div id="divInicioSesion" class="divSesion"> <a href= "#" onClick= "menu_inicio()"> Iniciar sesi&oacute;n </a> </div>
            
            
            <!-- nombre de cliente -->
            
            <div id="divNombreSesion" class="divSesion"> <a id="aNombreSesion" href= "#" onClick="menu_sesion()"><!-- InstanceBeginEditable name="EditRegion5" --> <?php  echo $_SESSION['nick'];  ?> <!-- InstanceEndEditable --> </a> </div>
        </div>
        
       
        
        <!-- div para registrarse en la web -->
        
        <div id="divRegistroUser">
        
            <br />
            
            <!-- formulario para registro en la web -->
            
            <form id="formLoginUser" method="post">
                
                <label> Cliente </label> <input type="text" id="inpTextNickLogin" maxlength="15" size="15"/>
                
                <label id="labelLoginNickErr" class="labelLoginErr"> </label>
                
                <br /><br />
                
                <label> Password </label> <input type="password" id="inpTextPasLogin" maxlength="15" size="15"/>
                
                <label id="labelLoginPasErr" class="labelLoginErr"> </label>
                
                <br /><br />
                
                <input type="button" id="buttonLogin" class="button" value="Entrar" onClick="solicita_sesion()"/>
            </form>
            
        	<a class="aLogIn" href="recordar_contrasena.php"> He olvidado la contrase&ntilde;a </a>
            
            <span> o </span>
            
            <a class="aLogIn" href="registrate.php"> Soy nuevo </a>
        </div>
        
        
        
        <!-- div para menu sesion cliente -->
        
        <div id="divMenuSesion"> 
        
            <a class="aMenuSesion" href="productos.html"> Comprar </a>
      	
            <br />
            
            <a class="aMenuSesion" href="perfil.php"> Editar Perfil </a>
            
            <br />
            
            <a class="aMenuSesion" href="baja.php"> Baja </a>
            
            <br />
            
            <a class="aMenuSesion" href="../PHP/cerrar_sesion.php" > Cerrar Sesi&oacute;n </a>
        </div>
    </div>
    
    
    
    <!-- div que muestra las opciones  de la opción principal elegida de la web -->
    
    <div id="divSubMenu">  
    <!-- InstanceBeginEditable name="regionEditDivSubMenu" -->		 
    
		<div id="divOpcionesSubMenuRegistro" class="divOpciones">
        
			<div id="divOpcionRegAlta" class="divOpcionMenu"> <a id="aOpcionRegAlta" href="registrate.php"> alta </a> </div> 
         
            <div id="divOpcionRegRec" class="divOpcionMenu" > <a id="aOpcionRegRec" href="recordar_contrasena.php" > recordar contraseña </a> </div>
		</div>
        
    <!-- InstanceEndEditable -->
    </div>
    
    
    
    <!-- div que muestra el resultado de cada opcion elegida -->
    
    <div id="divContenedor">
    <!-- InstanceBeginEditable name="regionEditDivContenido" -->
    
    <!-- div para nuevo usuario que no está registrado -->
    
    <div id="divNuevoUser">

         <div id="divTituloNuevoUser" class="divTitulo"> <span class="spanTitulo"> Nuevo Usuario </span> </div>
        
        <br />
        
        <!-- div  para formulario de registro de nuevo usuario -->
        
        <div id="divFormNuevoUser" class="divregistrate">
           
            <!-- Formulario nuevo registro -->
            
            <form id="formNuevoUser" method="post">
				
                <label> NickName </label> 
                
                <input type="text" id="inputTextNick" size="20" maxlength="20"/>
                
                <label id="labelErrNick"></label>
                
                <br /><br />
                                
                <label> Password </label> 
                
                <input type="password" id="inputTextPas" size="20" maxlength="20"/>
                
                <label id="labelErrPas"></label>
                
                <br /><br />
                
                <label> NIF </label> 
                
                <input type="text" id="inputTextNIF" size="9" maxlength="9"/>
                
                <label id="labelErrNIF"></label>
                
                <br /><br />
                
                <label> Nombre </label> 
                
                <input type="text" id="inputTextNombre" size="20" maxlength="50"/>
                
                <label id="labelErrNombre"></label>
                
                <br /><br />
                
                <label> Apellidos </label> 
                
                <input type="text" id="inputTextApellidos" size="50" maxlength="50"/>
                
                <label id="labelErrApellidos"></label>
                
                <br /><br />
                
                <label> Provincia </label> 
                
                <select id="selectProvincias" onFocus="solicitar_provincias(selectProvincias)" > </select>
                
                <label id="labelErrProvincia"></label>
                
                <br /><br />
                
                <label> Poblaci&oacute;n </label> 
                
                <select id="selectMunicipios" onFocus="solicitar_municipios(selectProvincias, selectMunicipios)"> </select>
                
                <label id="labelErrMunicipio"></label>
               
                <br /><br />
                
                <label> C.P. </label> 
                
                <input type="text" id="inputNumCP" size="5" maxlength="5"/>
                
                <label id="labelErrCP"></label>
                
                <br /><br />
                
                <label> Direcci&oacute;n </label> 
                
                <input type="text" id="inputTextDirec" size="70" maxlength="70"/> 
                
                <label id="labelErrDireccion"></label>
               
                <br /><br />
                
                <label> E-mail </label> 
                
                <input type="email" id="inputEmail" size="50" maxlength="50"/>
                
                <label id="labelErrEmail"></label>
                
                <br /><br />
                
                <label> Tel&eacute;fono </label> 
                
                <input type="tel" id="inputTel" size="9" maxlength="9"/>
                
                <label id="labelErrTelefono"></label>
                
                <br /><br />
                
                <input type="button" id="buttonFormAlta"  class="button" value="Aceptar" onClick="insertar_cliente()" />
           </form>
        </div>
        	
        <br /><br />
    </div>
    <!-- InstanceEndEditable -->
    </div>
</div>
</body>
<!-- InstanceEnd --></html>
