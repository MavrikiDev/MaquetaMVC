# MaquetaMVC
Esta es una estructura básica siguiendo el patrón Model-View-Controller que incluye un login con redirección hacia una página principal, privilegios de usuario para entregar una vista según el nivel de acceso que tenga el usuario.


# Estructura general.
La estructura se desglosa de la siguiente manera.
El directorio raíz del documento contiene, por supuesto, el archivo index.php, el fichero de configuración .htaccess y los directorios que componen los distintos componentes del patrón MVC, con carpetas homónimas. La regla general de nombre de los módulos es:

nombreDeseado_componente.php

Por ejemplo, para la vista de administración de usuarios que se procesa en los tres componentes, los nombres correspondientes a cada uno son:

  usuario-modelo.php #Nombre del ḿódulo en el componente Modelo.
  usuario-view.php #Nombre del módulo en el componente de Vista.
  usuario-controlador.php #Nombre del módulo en el componente Controlador.
  usuario-ajax #Se sigue la misma lógica en el caso de ajax.

# Módulos, métodos y otras lógicas.
-Descripción del funcionamiento de métodos, seguimiento de los mismos en módulos y lógicas de funcionamiento-.
