# appointment-booking

## DESARROLLADO POR: Mauricio Gomez

Este proyecto es una solución de agendamiento de turnos para que los clientes de varios comercios puedan reservar con anticipación un espacio de atención en un servicio específico que presta cada comercio.

## INSTALACIÓN BASE DE DATOS

Para instalar la base de datos es necesario utilizar SQL Server. En el archivo `Database/ScriptTables.sql` se encuentra el script de creación de tablas. En el archivo `src/constants/constants.ts` se encuentran las credenciales de acceso a la base de datos, las cuales es necesario cambiar por las configuradas en la base de datos local.

## INSTALACIÓN DEL API

Una vez se ha configurado correctamente la base de datos, es necesario ejecutar el comando `npm install` y posteriormente `npm run start` para correr los servicios. En el endpoint `http://localhost:7532/turnos/generar-turnos` se encuentra la funcionalidad para generar turnos, los parámetros son:

- `fechaInicio`
- `fechaFin`
- `idServicio`

## PRUEBAS UNITARIAS

Para correr las pruebas unitarias del controlador y el servicio es necesario ejecutar el comando `ng test`.

## SWAGGER

Para ingresar a Swagger y consultar la documentación del API, se puede ingresar a `http://localhost:7532/api/`.

## VERSIONES:

- SQL Server 2019.
- NodeJS v18.15.0
- NestJS 9.0.0
