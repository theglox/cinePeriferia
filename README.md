1. Clonar el repositorio desde GitHub:
Abre una terminal en tu computadora.
Utiliza el comando git clone seguido de la URL del repositorio de GitHub.
por ejemplo: 
  git clone https://github.com/theglox/cinePeriferia.git
Navegar al directorio del proyecto:
Utiliza el comando cd para moverte al directorio recién clonado.
Por ejemplo:
  cd https://github.com/theglox/cinePeriferia.git
Instalar las dependencias:
Ejecuta el comando npm install o yarn para instalar las dependencias del proyecto.
Por ejemplo:
  npm install
Ejecutar la aplicación:
Una vez que se completen las instalaciones de las dependencias, puedes ejecutar el proyecto. Utiliza el siguiente comando:

npm run dev
Esto iniciará el servidor de desarrollo.


para poder hacer uso de la api que carga las peliculas se debe:
1. ingresar a API: https://www.themoviedb.org/ em settings copiar el apikey suministrado por la pagina
2. Cambiar el apiKey dentro de la carpeta de api/apiConfig 
