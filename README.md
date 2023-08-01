FRONTEND GESTIÓN DE USUARIOS REALIZADO EN ANGULAR CON MATERIAL UI

CORE.-

Creado modulo core para incluir los servicios y componentes que necesitan ser accesibles desde cualquier sección de la web.

Componente Header con modelo para mostrar menú en todas las páginas

    SERVICES.-

    Servicio de autenticación de usuario con llamada a endpoint 'login' y 'is-authenticated' en backend, además de gestionar el logout.

    User.service:
    Comunicación con el servicio UserApiService para manejo de las diferentes peticiones (registro, consulta de usuarios, consulta de usuario por id, actualización de usuario, borrado de usuario).

    UserAPIService:
    Peticiones a la API para la gestión del CRUD de usuarios.

PAGES.-

Home:
Página donde se muestra el listado de usuarios. Para ello se ha creado un componente 'user' en el que se mostrará Nombre, Apellidos y un botón 'Ver' para acceder a los detalles de este.

Login:
Página con formulario de acceso a la web.

Signup:
Página con formulario de registro de usuario. Se reutiliza el componente form de la carpeta shared.

User-detail:
Página donde se muestra la información de cada usuario y da opción a eliminarlo (llamada a la función correspondiente de user.service), o actualizarlo (navegamos a la página user-edit)-

User-edit:
Página con formulario donde se muestran los datos del usuario. Se reutiliza el componente form de la carpeta shared.

SHARED > COMPONENTS > FORM:

Componente para reutilizar en el formulario de registro y en la edición de la información del usuario.

Se han creado estilos básicos con scss para el centrado de los componentes y sus elementos.

Se ha instalado Material UI para comenzar con el diseño del frontend.