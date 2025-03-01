# Proyecto Astro con Autenticación

Este proyecto es una aplicación web construida con Astro, que incluye un sistema de autenticación de usuarios con roles (administrador y usuario).

## Tecnologías Utilizadas

- **Astro:** Un framework web para construir sitios web rápidos con Islands Architecture.
- **Tailwind CSS:** Un framework de CSS para un diseño rápido y responsivo.
- **bcryptjs:** Para el cifrado seguro de contraseñas.
- **cookie:** Para manejar cookies de autenticación.
- **SQLite:** Base de datos para almacenar información de usuarios.
- **Node.js:** Entorno de ejecución para el renderizado del lado del servidor (SSR).

## Características

- **Registro de usuarios:** Los usuarios pueden registrarse con un nombre de usuario, contraseña y rol (usuario o administrador).
- **Inicio de sesión:** Los usuarios pueden iniciar sesión con su nombre de usuario y contraseña.
- **Autenticación basada en roles:** Los usuarios con el rol de administrador tienen acceso a páginas protegidas.
- **Renderizado del lado del servidor (SSR):** Para un mejor rendimiento y SEO.
- **Página protegida:** Solo accesible para administradores.
- **Manejo de errores:** Se muestran mensajes de error en pantalla para facilitar la depuración.
- **Estilos con Tailwind CSS:** Interfaz de usuario moderna y responsiva.

## Configuración

1.  **Clona el repositorio:**

    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd <NOMBRE_DEL_PROYECTO>
    ```

2.  **Instala las dependencias:**

    ```bash
    npm install
    ```

    o

    ```bash
    yarn install
    ```

3.  **Configura la base de datos:**

    - Asegúrate de tener SQLite instalado.
    - Crea un archivo de base de datos (`db.sqlite`) en la carpeta `src/utils/`.
    - Ejecuta las migraciones de la base de datos (si las tienes).

4.  **Inicia el servidor de desarrollo:**

    ```bash
    npm run dev
    ```

    o

    ```bash
    yarn dev
    ```

5.  **Construye para producción:**

    ```bash
    npm run build
    ```

    o

    ```bash
    yarn build
    ```

6.  **Inicia el servidor en producción (con Node.js):**

    ```bash
    node dist/server/entry.mjs
    ```

## Despliegue

Este proyecto se puede desplegar en:

- **Netlify:** Configura el adaptador de Netlify y conecta tu repositorio de Git.
- **Vercel:** Configura el adaptador de Vercel y conecta tu repositorio de Git.
- **Servidor Node.js:** Utiliza el adaptador de Node.js y despliega la carpeta `dist`.

## Información Importante

- **Variables de entorno:** Si utilizas variables de entorno, asegúrate de configurarlas correctamente en tu entorno de desarrollo y producción.
- **Seguridad:** En un entorno de producción, utiliza variables de entorno para almacenar contraseñas y otros datos sensibles.
- **Base de datos:** Asegúrate de que la base de datos esté configurada correctamente y que las migraciones estén actualizadas.

## Próximas Mejoras

- Agregar pruebas unitarias y de integración.
- Implementar
