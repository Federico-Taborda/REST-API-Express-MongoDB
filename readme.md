# REST API

REST API de practica con Node y MongoDB.

Practicando con Express y Mongoose.

La API permite:

|Consulta|Parametros|Endpoint|
|-----------|-----------|-----------|
|Crear usuarios con nombre, email y contraseña|name, email, password|/api/user/|
|Actualizar un usuario|name, email, password|/api/user/username|
|Consultar todos los usuarios creados|none|/api/users|
|Consultar usuario por nombre especifico|username|/api/user/username|
|Eliminar un usuario|username|/api/user/username|