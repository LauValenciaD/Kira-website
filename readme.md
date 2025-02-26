# Documentación del Proyecto - Tienda Online Kira

## Versión final. Cambios añadidos

- 4 páginas de diferentes productos.
- página de catálogo con todos los artículos y filtros de precios, tallas, etc.
- Página "Nosotros" y "Aviso legal".
- Log in de usuario con formulario.
- Barra de cookies en el index.
- Mejora de accesibilidad en el index.
- Página de carrito con disintos artículos.

## Descripción las páginas entregadas

Se ha realizado la página de Inicio con varios carruseles mostrando los productos y la página de Producto, que muestra información detallada sobre el artículo elegido y permite ver las fotos en grande (interactivo), además de seleccionar la cantidad y talla.
Las páginas utilizan el framework **Bootstrap** para el diseño responsive y el plugin **Slick** para los carruseles de imágenes.
Ambas cuentan con un header, con un desplegable sobre las categorías y barra de búsqueda, y un footer con la información de la tienda y la newsletter.

## Tecnologías Utilizadas

- **HTML**: Estructura básica del sitio web.
- **CSS**: Estilos proprios.
- **JQuery**: Funcionalidades interactivas, como la configuración personaliza del carrusel y el ampliar la foto del artículo en la página del producto.
- **Bootstrap**: Para el diseño responsive y funciones especiales, como el acordeón y el menú colapse.
- **Slick**: Para crear carruseles de imágenes.
- **Font Awesome**: Para los iconos.

## Estructura del Proyecto

La estructura del proyecto está organizada de la siguiente manera:
Los html index y producto, y la carpeta assets.
Esta carpeta contiene:

- La carpeta css: archivos de Bootstrap, Font Awesome, Slick y los css de estilos propios (styles y styles-responsive).
- La caperta img: imagenes del proyecto.
- La carpeta js: archivos de Bootstrap, Slick y el jQuery propio.
- La carpeta webfonts: fuentes de Font Awesome, Slick y la fuente usada Poppins (aunque en el proyecto se han importado directamente desde Google).

## Funcionalidades Implementadas

### 1. **Carrusel de Productos**

- Se utiliza **Slick** para crear un carrusel de productos en la página principal.
- Las flechas de navegación están personalizadas mediante CSS.
- El carrusel está diseñado para ser responsive y se adapta a diferentes tamaños de pantalla.
- El **autoplay** está activado para que el carrusel avance automáticamente.

### 2. **Acordeón de Descripción de Productos**

- Se utiliza el componente **Accordion** de **Bootstrap** para mostrar la descripción del producto de manera plegable.

### 3. **Galería de Imágenes del Producto**

- Se han añadido miniaturas de productos a la izquierda de la imagen principal.
- Al hacer clic en una miniatura, la imagen principal se actualiza dinámicamente.

### 4. **Header con Menú de Navegación**

- Se ha implementado un **header** con un **navbar** utilizando **Bootstrap**. El menú incluye enlaces a diferentes categorías de productos como "NUEVO", "ROPA", "COLECCIONES" y "ACCESORIOS".
- El **logo** de la tienda es clickeable y redirige a la página de inicio.
- El menú de navegación se adapta automáticamente para dispositivos móviles mediante el botón de menú que aparece en móviles, que despliega el menú cuando se hace clic.
- En el menú **ROPA** y **COLECCIONES** se incluyen submenús desplegables para categorías específicas que se despliegan al pasar el ratón por encima.

### 5. **Barra de Búsqueda**

- En la versión de escritorio, la barra de búsqueda se encuentra visible en la parte superior del menú y permite a los usuarios buscar productos directamente.
- En la versión móvil, la barra de búsqueda está oculta inicialmente y se puede abrir a través de un modal al hacer clic en el icono de búsqueda.

### 6. **Carrusel de Imágenes principal de Inicio**

- Se ha implementado un **carrusel** utilizando **Bootstrap** para mostrar promociones y productos destacados en la página principal..
- El carrusel es responsive y **cambia las imágenes dependiendo del tamaño de la pantalla** (versión móvil y versión de escritorio).
- El carrusel tiene controles de navegación (flechitas) para que los usuarios puedan avanzar o retroceder entre los elementos.

### 7. **Botones de talla y de cantidad de Producto**

- En la página de producto, al hacer click en los botones de tallas, se les marca con un outline usando **JQuery**, desmarcando el resto. También al hacer clic en los botnes de + y - cambia el número de la cantidad.

## Justificación de las Herramientas Utilizadas

- **Bootstrap**: Se eligió Bootstrap porque proporciona un diseño responsive que asegura que el sitio web se vea bien en dispositivos móviles, tabletas y escritorios. Además, incluye muchas funcionalidades que son perfectas para una web moderna (desplegables, modal, carruseles, etc.)
- **Slick**: Se eligió Slick para implementar el carrusel debido a que es mucho más personalizable que Bootstrap.
- **Font Awesome**: Se usó Font Awesome para agregar iconos a la interfaz, como las flechas del carrusel y botones interactivos.

## Recursos Utilizados

Las imágenes utilizadas en el proyecto provienen de los siguientes sitios:

- **Freepik**: [https://www.freepik.com/](https://www.freepik.com/)
- **Stradivarius**: [https://www.stradivarius.com/](https://www.stradivarius.com/)
- **Rinascimento**: [https://www.rinascimento.com/es-es/](https://www.rinascimento.com/es-es/)

El plugin del carrusel:

- **Slick**: [https://kenwheeler.github.io/slick/](https://kenwheeler.github.io/slick/)

## Pasos Seguidos para el Desarrollo

- Se creó la estructura HTML para las páginas principales.
- Se integraron los componentes de Bootstrap, como el acordeón y el carrusel.
- Se aplicaron los estilos personalizados utilizando CSS.
- Se añadió el carrusel de productos con Slick.
- Se probaron las funcionalidades en diferentes dispositivos y navegadores para asegurar que las páginas sean responsive y funcionales.
- Corrección de errores.

## Archivos y Recursos Adicionales

- **Imágenes**: [Ver carpeta de imágenes](./assets/img/)
- **Fuentes**: [Ver carpeta de fuentes](./assets/webfonts/)
- **Archivos CSS**: [Ver carpeta](./assets/css/)
- **Archivo JS**: [Ver carpeta](./assets/js/)

### Autoría: Laura Valencia Díaz
