##  hush-puppies-ikat- Cristobal Gomara

En este proyecto se implementó una la vista Producto de hush-puppies utilizando Next.js, Prisma y PostgreSQL.
El proyecto se encuentra hosteado en Vercel y se puede acceder a él en el siguiente [link](https://hush-puppies-ikat.vercel.app/).

## Tecnologías Utilizadas

- [**Next.js:**](https://nextjs.org/) Framework de React para construir aplicaciones web.
- [**Prisma:**](https://www.prisma.io/) ORM (Object-Relational Mapping) para interactuar con la base de datos.
- [**PostgreSQL:**](https://www.postgresql.org/) Base de datos relacional utilizada, hosteada en Vercel.
- [**Tailwind CSS:**](https://tailwindcss.com/docs/installation) Framework de utilidad de CSS para el diseño y estilizado.
- [**Zustand:**](https://zustand-demo.pmnd.rs/) Librería para el manejo de estado en React.
- [**Shadcn:**](https://pnpm.io/) Componentes accesibles de libre uso.
- [**Husky:**](https://typicode.github.io/husky/) Utilidad para ejecutar scripts pre-commit y pre-push.
- [**Commitlint:**](https://commitlint.js.org/#/) Herramienta para verificar que los mensajes de commit sigan un formato específico.
- [**ESLint:** ](https://eslint.org/) Linter para JavaScript y TypeScript.
- [**Prettier:** ](https://prettier.io/) Formateador de código para mantener un estilo consistente.


## Instalación

En este proyecto se utilizó una base de datos PostgreSQL hosteada en Vercel, por lo que no es necesario instalarla localmente. <br>
Sin embargo, si se quiere correr el proyecto localmente, es necesario crear un archivo `.env` en la raíz del proyecto con las siguientes variables de entorno: (los valores seran enviados via correo electronico)

``` plaintext
POSTGRES_URL="..."
POSTGRES_PRISMA_URL="..."
POSTGRES_URL_NON_POOLING="..."
POSTGRES_USER="..."
POSTGRES_HOST="..."
POSTGRES_PASSWORD="..."
POSTGRES_DATABASE="..."
NODE_ENV="development"

````
Dado que el proyecto utiliza [pnpm](https://pnpm.io/) como manejador de paquetes, es necesario instalarlo antes de poder ejecutar el proyecto. Para ello, se puede utilizar el siguiente comando:


``` bash
$ pnpm install
$ pnpm dev
``` 
Ahora, si se quiere probar con una base de datos propia de PostgreSQL, Vercel permite crear una base de datos gratuita. Una vez creada hay que reemplazar las variables de entorno en el archivo `.env` con los valores correspondientes.

Si se decidio por utilizar una base de datos propia, es necesario correr las migraciones para crear las tablas necesarias. Para ello, se puede utilizar el siguiente comando:
    
``` bash
$ npx prisma db push
```
Luego se dejo en el archivo `src/app/api/route` un endpoint comentado para poder cargar los datos de prueba en la base de datos. Descomentar el endpoint, agregar las dependencias necesarias y ejecutar el endpoint para cargar los datos.


## Consideraciones y alcances

El catálogo de zapatos se encuentra cargado en una base de datos PostgreSQL hosteada en Vercel. Para acceder a ella, se utilizó Prisma como ORM.

La vista princial se encuentra en la ruta `/` y muestra el primer zapato del catálogo la primera vez. 

Es posible escoger la talla del zapato, y al hacer click en el botón `Añadir al carrito`, se agrega el zapato al carrito de compras. Al hacer click en el botón `Carrito`, se muestra el detalle del carrito de compras.

Cabe destacar que el carrito de compras se encuentra implementado utilizando Zustand, una librería para el manejo de estado en React. <br> 
Está manejado el caso de que se agreguen dos veces el mismo zapato al carrito, ya sea con la misma talla o con tallas distintas. En el primer caso, se agrupa al zapato correspondiente y aumenta la cantidad del zapato en el carrito, y en el segundo caso, se agrega el zapato nuevo al carrito con la nueva talla.
También se puede eliminar un zapato del carrito, y al hacerlo, se actualiza el estado del carrito.

Mas abajo se muestran los zapatos disponibles en el catálogo, en dos secciones. Cabe destacar que al tener pocos zapatos en el catálogo, se muestran la primera mitad de los zapatos en la sección `Completa tu look` y la segunda mitad en la sección `Productos recomendados`.

Al hacer click en un zapato de alguna de las secciones, se cambia el zapato seleccionado y se actualiza la vista (En producto real generalmente se cambia la url para mostrar el producto seleccionado, pero en este caso se optó por no hacerlo para mantener la simplicidad del proyecto).
<br>
Dentro de la sección `Completa tu look`, se puede hacer click en el botón `Agregar al carrito` para agregar el zapato seleccionado al carrito de compras y seleccionar la talla.

Se utilizó Tailwind CSS para el diseño y estilizado de la página. Se utilizó la librería Shadcn para algunos componentes, me tome la libertad de cambiar algunos estilos, como tamaño de fuente, colores, etc.
