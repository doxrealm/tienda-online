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
        <script> document.getElementById("divSubMenu").style.display = "none"; </script>
    <!-- InstanceEndEditable -->
    </div>
    
    
    
    <!-- div que muestra el resultado de cada opcion elegida -->
    
    <div id="divContenedor">
    <!-- InstanceBeginEditable name="regionEditDivContenido" -->
        
        <!-- div de diferentes  opciones de contacto con la tienda -->
        
        <!-- Opcion 1 -->
        
        <div id="divOpcionContacto1">   
         	
            <div id="divOpcionContacto1Titulo" class="divTitulo"> <span class="spanTitulo"> Dirección postal </span> </div>
            	
            
            <!-- Mapa fisico con la ubicación de la empresa -->
            
			<iframe id="mapaUbicacion" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2990.6422099438983!2d2.1996789999999997!3d41.44698449999999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4bcec3b320811%3A0xc2f733befcd92827!2sCarrer+de+Clariana%2C+22!5e0!3m2!1ses!2ses!4v1398267727601" ></iframe>          
            
            
            <p id="pDireccionContacto">
            	Jamones de España e hijos S.A. <br />
                Calle Clariana 22 <br />
                08030 Barcelona, Barcelona <br />
                España
            </p>    
        </div>  
         

        <!-- Opcion 2 -->
        
        <div id="divOpcionContacto2">
            
            <div id="divOpcionContacto2Titulo" class="divTitulo"> <span class="spanTitulo"> Acceso telefónico </span> </div>
            
            <p id="pTelContacto" class="pContactoNumeros"> Teléfonos 902 148 800 // 902 149 200 </p>
            
            <p id="pFaxContacto" class="pContactoNumeros"> Fax: 931 899 010 </p>
  		</div>
            
        
        <!-- Opcion 3 -->
        
        <div id="divOpcionContacto3">    
            
            <div id="divOpcionContacto3Titulo" class="divTitulo"> <span class="spanTitulo"> Correo electrónico </span> </div>
        
            <p id="pCorreoContacto"> jamonespanol@espana.es </p>
        </div>
    <!-- InstanceEndEditable -->
    </div>
</div>
</body>
<!-- InstanceEnd --></html>
