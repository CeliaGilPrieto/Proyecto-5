#  Blog de recetas

##  Blog de Recetas Saludables

##### Tabla de contenido:
- [Proyecto](#Proyecto)
- [Diseño en términos generales](#Diseño-en-términos-generales)
- [Estructura y diseño Desktop](#Estructura-y-diseño-Desktop)
- [Estructura y diseño Modal emergente](#Estructura-y-diseño-Modal-emergente)
- [Desarrollo según tecnologías utilizadas](#Desarrollo-según-tecnologías-utilizadas)
- [Pilas](#Pilas)
- [Como instalar este proyecto](#Como-instalar-este-proyecto)
- [Metodología](#Metodología)
## Proyecto

<p>Este es un proyecto de un blog de recetas. El cual permite visualizar el contenido del blog a toda persona que ingrese en él, y de una manera más privada, permite a un administrador mediante usuario y contraseña modificar, añadir o eliminar las entradas del blog a su antojo.</p>

## Diseño en términos generales

<p>
El diseño del blog se presenta como una pagina web a la cual puedes acceder y ver todo el contenido del blog que un administrador subio previamente a este. A continuación se describe el diseño de la página en términos generales:
</p>

#### 1- Header:
<ul><li>En la parte superior de la página se encuentra el encabezado que contiene el titulo del blog y dos botones titulados "blog" el cual nos permite volver a la pantalla principal del blog siempre que queramos. Y en segundo lugar tenemos el boton de "adm" el cual permite a la persona autorizada mediante usuario y contraseña acceder a las entradas actuales del blog para asi poder editar, eliminar y añadir entradas..</li></ul>

#### 2- Button Blog :
<ul><li>Este apartado nos permite mendiante un click acceder a una single page, la cual contiene las entradas actuales que contiene el blog.</li></ul>


#### 3- Button Adm:
<ul><li>Este apartado permite a la persona propietaria del blog acceder mediante usuario y contraseña a una single page la cual bajo usuario y contraseña previa permitara al administrador dek blog acceder a otra página en la cual se encontrarian las entradas al blog actuales y tres botones de "subir entrada", "eliminar entrada" y "editar entrada".</li></ul>


#### 4- Pie de página (Footer):
<ul><li>En la parte inferior de la página, se encuentra el pie de página.
</li>
<li>El pie de página muestra información de derechos de autor y enlaces a páginas adicionales, como  "Todos los derechos reservados", "Aviso legal", "Política de privacidad" y "Términos y condiciones".</li></ul>

###### Estructura y diseño Desktop
:computer:

<p float="left">
< width="768px" />
</p>

###### Estructura y diseño Móvil
:iphone:

<p float="left">
  < width="375px"/> 
</p>


## Desarrollo según tecnologías utilizadas

#### HTML
<p>Aquí se encuentran elementos como encabezados, cuerpo y footer. Algunos elementos importantes incluyen:</p>

<ul><li> Un encabezado (header) que contiene un tittle con un un menú de navegación. </li>
<li> Un div container con las recetas que contiene el blog. </li>
<li> Y por último un footer. </li></ul>
 
#### CSS
<p>Aquí se aplican estilos a los elementos HTML, como colores de fondo, tipografías, márgenes y dimensiones. Algunas características importantes del CSS incluyen:</p>
  
- Estilos para el encabezado (header).
- Estilos para el blog, como colores de fondo, bordes y espaciado.
- Estilos para los botones. de "adm" y "blog".
  
#### JavaScript
Aquí se definen las funciones que se utilizan en respuesta a eventos, como que al presionar el boton de "Adm" se cambie de pantalla a una donde se situa el login del blog para el administrador. Algunas características importantes del JavaScript incluyen:

- Funciones para al ingresar correctamente usuario y contraseña te permita acceder a la parte de administrar entradas.
- Una función para al ingresar incorrectamente usuario y contraseña te salte un aviso.
 
<p>En general, este proyecto de blog permite a los usuarios ver las entradas al blog en todo momento, a la vez que permite a un administrador acceder a  las entradas del blog cuando quiera mediante un login previo, donde puede eliminar, añadir o editar entradas del blog. El código proporcionado implementa la interfaz de usuario y la lógica básica necesaria para hacerlo funcionar.</p>

## Pilas
:wrench:

#### Tecnologías:
<p float="left">
  <img src="https://i.postimg.cc/Ss8w8q2R/html5.jpg" alt="" width="50px" />
  
  <img src="https://i.postimg.cc/rpd6V5qS/css.png" alt="" width="40px" /> 
  
  <img src="https://i.postimg.cc/3wzsdWwz/javascript.png" alt="" width="50px" />
</p>

#### Herramientas:

<p float="left">
  <img src="https://i.postimg.cc/8PJNP8wF/figma-vector-logo.png" alt="" width="70px" />
  
  <img src="https://i.postimg.cc/FH0v3jMN/Git-logo-svg.png" alt="" width="70px" /> 
  
  <img src="https://i.postimg.cc/VLx1J7HK/github.png" alt="" width="70px" />
  
  <img src="https://i.postimg.cc/X7363DvF/trello.png" alt="" width="70px" />
  
  <img src="https://i.postimg.cc/KYF2N1bL/visualstudio-code-ar21.png" alt="" width="70px" />
</p>

## Miembros del grupo

- Celia Prieto  https://github.com/CeliaGilPrieto / Desarrolladora y Scrull Master

## Como instalar este proyecto

<ol>
<li>Abre la terminal en tu ordenador.</li>
<li>Navega hasta el directorio donde deseas clonar el repositorio utilizando el comando cd directorio . Por ejemplo, si deseas clonarlo en el directorio "Documentos", puedes escribir cd Documentos.</li>
<li>Ahora estás en el directorio adecuado. Puedes proceder a clonar el repositorio ejecutando el siguiente comando:
git clone https://github.com/CeliaGilPrieto/Proyecto5.git
Esto creará una copia local del repositorio en tu ordenador.</li>
<li>Una vez que se complete la descarga, puedes ingresar al directorio del repositorio utilizando el comando cd Proyecto 5.

Ahora tienes el repositorio clonado en tu ordenador y puedes acceder a todos los archivos y directorios del proyecto.</li>
</ol>

## Metodología

<ul>
<li>Metodologia agil con scrum</li>
<li>Programacion en pareja: Se utilizó un solo ordenador para probar los codigos y generar mayor alcance y aporte en la lógica</li>
<li>Diseño y estructura en pareja: Donde cada uno con su ordenador realizó el diseño y estructura de la pagina</li>
<li>Creación de ramas: Se utilizo 2 ramas para gestionar el flujo de trabajo:

- Master (o main): Esta rama contiene el código estable y en producción.
- Develop: Esta rama es donde se integran todas las características y se realizan las pruebas previas a la producción.</li>
<li>Revisión y resolución de conflictos: Durante el proceso se sugerieron comentarios y cambios.</li>
<li>Liberación: Cuando se ha alcanzado un conjunto de características significativas o se ha completado una versión estable, se realizan las pruebas finales y se solucionan los últimos problemas antes de fusionar los cambios en la rama master (o main).</li>
</ul>

<p>
¡Disfruta de tu navegación en mi blog de recetas saludables!
</p>
