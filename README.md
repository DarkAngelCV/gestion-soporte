# Sistema de Gestión de Soporte Técnico

## 1. De qué trata mi proyecto?

Mi proyecto consiste en crear un sistema web para gestionar solicitudes de soporte técnico.

La idea es poder registrar los problemas que tienen los usuarios, guardar su información y después poder revisarlos, modificarlos o eliminarlos.

Por ejemplo, si una persona tiene un problema con su computador, impresora o algún programa, se puede crear un ticket para dejar registrado el problema y su prioridad.

Toda esta información se guarda en una base de datos MySQL, por lo que los registros siguen estando disponibles aunque se cierre o reinicie la aplicación.

## 2. Tecnologías que utilicé

Para desarrollar este proyecto utilicé las siguientes tecnologías:

- **Angular 22:** lo utilicé para crear la parte visual de la aplicación.
- **Node.js:** lo utilicé para ejecutar el servidor.
- **Express:** lo utilicé para crear las rutas que permiten trabajar con los tickets.
- **MySQL:** lo utilicé para guardar la información.
- **HTML y CSS:** los utilicé para crear y darle diseño a la página.
- **TypeScript y JavaScript:** los utilicé para programar las funciones del sistema.

## 3. Qué permite hacer mi sistema?

El sistema permite realizar las siguientes acciones:

- Crear nuevos tickets de soporte.
- Ver todos los tickets registrados.
- Editar la información de un ticket.
- Eliminar tickets solicitando una confirmación.
- Seleccionar la categoría del problema.
- Asignar una prioridad alta, media o baja.
- Cambiar el estado del ticket.
- Evitar que se guarden tickets con campos obligatorios vacíos.
- Guardar la información en MySQL para no perderla al reiniciar el sistema.

También agregué colores para identificar más fácilmente las prioridades y los estados de cada ticket.

## 4. Organización de mi proyecto

Organicé el proyecto de la siguiente manera:

- `src/`: contiene los archivos principales de Angular.
- `src/app/pages/tickets/`: contiene la página donde se muestran y administran los tickets.
- `src/app/services/`: contiene el servicio que conecta Angular con el backend.
- `backend/`: contiene el servidor y la conexión con MySQL.
- `backend/server.js`: contiene las rutas para crear, consultar, editar y eliminar tickets.
- `backend/db.js`: contiene la configuración de conexión a la base de datos.

## 5. Configuración de la base de datos

Para guardar la información utilicé MySQL.

Primero creé una base de datos llamada `gestion_soporte` y después creé una tabla llamada `tickets`, donde se almacenan los siguientes datos:

- ID del ticket.
- Asunto.
- Solicitante.
- Descripción.
- Categoría.
- Prioridad.
- Estado.
- Fecha de registro.

Para crear la base de datos y la tabla se debe ejecutar el siguiente código en MySQL:

```sql
CREATE DATABASE gestion_soporte;
USE gestion_soporte;

CREATE TABLE tickets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    asunto VARCHAR(150) NOT NULL,
    solicitante VARCHAR(100) NOT NULL,
    descripcion TEXT NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    prioridad VARCHAR(20) NOT NULL,
    estado VARCHAR(30) NOT NULL DEFAULT 'Pendiente',
    fechaRegistro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 6. Cómo ejecutar el proyecto?

Para ejecutar el sistema se deben iniciar dos servidores.

### Primero: iniciar el backend

Entrar a la carpeta `backend` desde la terminal y ejecutar:

```bash
npm install
```

Después configurar el archivo `.env` con los datos de conexión a MySQL.

Luego iniciar el servidor con:

```bash
node server.js
```

El backend funciona en `http://localhost:3000`.

### Segundo: iniciar el frontend

Desde la carpeta principal del proyecto ejecutar:

```bash
npm install
ng serve -o
```

La aplicación se abrirá en `http://localhost:4200`.

Es necesario tener ambos servidores funcionando para poder utilizar el sistema correctamente.

## 7. Pruebas que realicé

Durante el desarrollo fui probando las diferentes funciones para comprobar que trabajaran correctamente.

Las pruebas que realicé fueron:

- Comprobar que el servidor iniciara correctamente.
- Comprobar la conexión con MySQL.
- Crear tickets nuevos.
- Consultar los tickets registrados.
- Editar tickets existentes.
- Eliminar tickets.
- Comprobar que no se puedan guardar formularios vacíos.
- Reiniciar la página y comprobar que los tickets siguieran apareciendo.
- Reiniciar el backend y comprobar que los datos continuaran guardados.

## 8. Datos del estudiante

Nombre: Cristian Vasquez

Carrera: Ingeniería en Informática.

Institución: Instituto Profesional Virginio Gómez.

Asignatura: Electivo Angular.

## 9. Uso de inteligencia artificial

Durante el desarrollo de este proyecto utilicé **ChatGPT** como herramienta de apoyo para resolver dudas, comprender conceptos y recibir orientación durante la programación.

La utilicé principalmente para:

- Comprender cómo funciona Angular y cómo organizar sus componentes.
- Recibir ayuda para desarrollar y revisar el código TypeScript y HTML.
- Comprender la creación de rutas y operaciones CRUD utilizando Node.js y Express.
- Resolver dudas sobre la conexión entre el backend y la base de datos MySQL.
- Identificar y corregir errores durante el desarrollo.
- Mejorar la documentación y organización del archivo README.

Los ejemplos de código y las sugerencias recibidas fueron revisados y adaptados al funcionamiento de mi proyecto. También realicé modificaciones en los archivos para integrar las diferentes partes del sistema.

Para verificar el funcionamiento, realicé pruebas creando, consultando, editando y eliminando tickets. Además, comprobé las validaciones de los formularios, la conexión con MySQL y la persistencia de los registros después de reiniciar el backend y actualizar la página.

La inteligencia artificial fue utilizada como apoyo para el aprendizaje y desarrollo del proyecto, mientras que la configuración, adaptación del código y comprobación de las funciones se realizaron durante el trabajo práctico.
