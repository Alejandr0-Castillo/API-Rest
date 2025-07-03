# API REST de Gestión de Tareas (To-Do List)

## ¿Qué hace esta API?
Esta API permite a los usuarios gestionar proyectos y tareas. Los usuarios pueden registrarse, iniciar sesión y, una vez autenticados, pueden crear, consultar, actualizar y eliminar proyectos y las tareas asociadas a ellos.

## Recursos principales
- **Usuarios**: Registro y autenticación de usuarios.
- **Proyectos**: Agrupadores de tareas (crear, ver, actualizar, eliminar).
- **Tareas**: Tareas específicas dentro de un proyecto (crear, ver, actualizar, eliminar).

## Relaciones entre colecciones
- Cada **tarea** está asociada a un **proyecto** (campo `proyectoId`) y al **usuario** que la creó (campo `usuarioId`).
- Un **usuario** puede tener varios proyectos y varias tareas.
- Un **proyecto** puede tener varias tareas.

## Ejemplos de uso de rutas principales

### Usuarios
- Registro: `POST /api/v1/users/register`
  ```json
  {
    "username": "ejemplo",
    "password": "123456"
  }
  ```
- Login: `POST /api/v1/users/login`
  ```json
  {
    "username": "ejemplo",
    "password": "123456"
  }
  ```

### Proyectos
- Listar proyectos: `GET /api/v1/proyectos`
- Crear proyecto (requiere token): `POST /api/v1/proyectos`
  ```json
  {
    "nombre": "Proyecto de la API",
    "descripcion": "Desarrollar la nueva API de tareas"
  }
  ```

### Tareas
- Listar tareas: `GET /api/v1/tareas`
- Listar tareas de un proyecto: `GET /api/v1/tareas?proyectoId=<id_del_proyecto>`
- Crear tarea (requiere token): `POST /api/v1/tareas`
  ```json
  {
    "proyectoId": "<id_del_proyecto>",
    "descripcion": "Definir los modelos de la base de datos"
  }
  ```

> **Nota:** Para las rutas protegidas, se debe enviar el token JWT en el header `Authorization: Bearer <token>`.
