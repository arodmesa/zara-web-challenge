# Zara Web Challenge

## Instalación 📦

[Instalar nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)

```bash
# instalar version correcta de node node v21.3.0
$ nvm install

# npm se usa como administrador de paquetes

# instalar dependencias
$ npm install

# Crear: .env.local y .env.test, copiando del archivo .env.development1, es necesario rellenar los siguientes campos
# MARVEL_PUBLIC_KEY MARVEL_PRIVATE_KEY y TIME_STAMP. Los dos primeros son las strings brindadas por Marvel API para
# acceder a la API. Estas se obtienen con el registro en su web https://developer.marvel.com/documentation/getting_started
# En cuanto a la TIME_STAMP, es una string cualquiera necesaria para realizar las peticiones a la API usando un hash con md5
# En el caso del .env.test usado como entorno para los test realizados con vitest, se debe utilizar NODE_ENV=test
$  cp .env.development1 .env.local
$  cp .env.development1 .env.test

# Para arrancar la web en modo desarrollo
$ npm run dev
```

Abre en tu navegador una pestaña con [http://localhost:3000](http://localhost:3000) para ver el resultado.

## GIT 🤖

Utilizado para un desarrollo más fácil, seguro y organizado.

## Formateado 📝

Formateado de código con [Prettier](https://prettier.io/)

```bash
# formatear todos los archivos
$ npm run format
```

## Linter 📝

Linter de código con [EsLint](https://eslint.org/)

```bash
# lint de todos los archivos
$ npm run eslint
```

## Styling 🎨

- CSS como base de estilos

## State management ⚛️

- ContextAPI de React

## Extensiones de VS Code recomendadas 🛠

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [Spanish Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker-spanish)

# Estáticos

```bash
# build estático
$ npm run build

```

## Sumario del proyecto:

Para este proyecto se usó NextJS como framework the React, utilizando App Router facilitando así el uso de SSR.
El proyecto utiliza Typescript lo que permite la reducción de posibles errores en el código y facilita el trabajo si varias personas trabajan a la vez en él.
Para la creación y diseños de componentes de React se utilizó storybook, una herramienta muy útil y que facilita su aislamiento y y visualizarlos en diferentes estados, así como su documentación de forma automática.

El proyecto consta de una pantalla principal, la cual muestra dos variantes la por defecto con los primeros 50 personajes q envía la api y la de los personajes marcados por el usuario como favoritos.
Para acceder a los personajes favoritos se usa el searchParam favorites=active permitiendo que tanto si se recarga la página como
si se comparte la url, se pueda acceder a dicho espacio de la web. La información relevante de los personajes marcados como favoritos es almacenada en un contexto "FavoriteContext" para acceder con mayor velocidad a la misma. Dicho contexto almacena
también el número de elementos en dicha lista. A esta información tienen potencialmente acceso todos los componentes de la web, dado que se usa en varios de la misma, con el uso del contexto se evita así el "prop drilling". Dado que es un estado medianamente complejo, se maneja su actualización utilizando un reducer.
En la pantalla principal existe además un buscador que realiza la búsqueda de acuerdo al nombre del personaje y empleando el método startsWith disponible en la api de marvel. Si se está ubicado en favoritos el buscador retornará solo los personajes
cacheados como favoritos que cumplan la condición (busca solo dentro de los favoritos pues parecía el comportamiento más lógico que debía tener), por el contrario si se está en la vista por defecto realizará la petición a la api para la búsqueda de las coincidencias.
Es importante destacar que el buscador espera a que pase un tiempo de 600ms para hacer la petición tanto de personajes favoritos como a la api, dado que al no existir botón de buscar se optó por esta alternativa para impedir exceso de peticiones.
De forma similar al caso de favoritos, la búsqueda de personajes provoca un cambio en en searchParams de search = 'nombre'
esto permite al igual que en el caso anterior que al recargar la página o compartir la url se mantenga la misma vista.
Al utilizarse este parámetro en varios componentes y ser necesario para el correcto funcionamiento de la página que se pudiera
modificar el valor del input, se decidió utilizar un context para manejar el valor del input InputSearchContext.
Todas las imágenes utilizadas en la web emplean el componente Image de Next configurado vía props para su correcto optimizado en función del tamaño de la imagen y la resolución del dispositivo. Además, cada tarjeta de personaje tiene acceso para modificar la lista de favoritos ya sea para agregar o eliminar el personaje que representa.
La segunda pantalla de la web es para los detalles del personaje. Se tiene acceso también para modificar la lista de favoritos ya sea para agregar o eliminar al personaje correspondiente. La navegación a esta página se realiza mediante las rutas dinámicas de Next "/character/[id]". De esta forma se usa el id de cada personaje en la api para solicitar los detalles del mismo así. De este modo tanto recargar la página como compartir la url lleva siempre al mismo sitio.
Ambas pantallas cumplen todos los requerimientos dados en la tarea.
También se agregaron páginas de manejo de error en caso de error de la página en sí o de las peticiones de los distintos fetch. Existe una página de error para capturar errores globales también de acuerdo a las directivas de next. Es de destacar que para la obtención de los datos de los distintos fetch fueron utilizados, además de las funciones correspondientes, componentes de React de tipo asíncrono aprovechando las bondades de NextJS.
Para los estilos de la web se empleó CSS puro con algunas variables de CSS en los casos necesarios. Además se agregó la font family utilizada en el diseño de figma Roboto-Condensed.
Se empleó prettier y eslint para tener un estándar de formato definido. La configuración del prettier está en su archivo
.prettierrc.js. En el caso del eslint se utilizaron mayoritariamente las propuestas de @vercel/style-guide así como diversas opciones para garantizar un desarrollo más robusto y estandarizado como por ejemplo tener unas convenciones de nombrado para archivos y carpetas dentro del proyecto.
Para el testing de la aplicación se empleó cypress para realizar pruebas end to end a la web, y para las pruebas unitarias fue empleado vitest.
Dentro de la configuración de Next fueron habilitadas las opciones para servir los assets concatenados y minimizados en el modo de producción (production).
Se tuvo en cuenta la correcta accesibilidad de la web.
