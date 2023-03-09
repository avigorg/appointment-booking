-- creacion de tablas
CREATE TABLE Comercios (
    id_comercio INT IDENTITY(1,1) PRIMARY KEY,
    nom_comercio VARCHAR(50) NOT NULL,
    aforo_comercio INT NOT NULL
);

CREATE TABLE Servicios (
  id_servicio INT IDENTITY(1,1) PRIMARY KEY,
  id_comercio INT NOT NULL,
  nom_servicio VARCHAR(50) NOT NULL,
  hora_apertura TIME NOT NULL,
  hora_cierre TIME NOT NULL,
  duracion INT NOT NULL,
  FOREIGN KEY (id_comercio) REFERENCES Comercios(id_comercio)
);

CREATE TABLE Turnos (
  id_turno INT IDENTITY(1,1) PRIMARY KEY,
  id_servicio INT NOT NULL,
  fecha_turno DATE NOT NULL,
  hora_inicio TIME NOT NULL,
  hora_fin TIME NOT NULL,
  estado VARCHAR(10) NOT NULL,
  FOREIGN KEY (id_servicio) REFERENCES Servicios(id_servicio)
);

-- procedimiento almacenado para generar turnos
CREATE PROCEDURE generarTurnos
    @fechaInicio date,
    @fechaFin date,
    @idServicio int
AS
BEGIN
    DECLARE @horaApertura time
    DECLARE @horaCierre time
    DECLARE @duracion int

    SELECT @horaApertura = hora_apertura, @horaCierre = hora_cierre, @duracion = duracion 
    FROM servicios 
    WHERE id_servicio = @idServicio

    DECLARE @fechaActual date = @fechaInicio
    DECLARE @horaActual time = @horaApertura
    DECLARE @horaFin time

    WHILE (@fechaActual <= @fechaFin AND @horaActual < @horaCierre)
    BEGIN
        SET @horaFin = DATEADD(minute, @duracion, @horaActual)

        INSERT INTO turnos (id_servicio, fecha_turno, hora_inicio, hora_fin, estado)
        VALUES (@idServicio, @fechaActual, @horaActual, @horaFin, 'disponible')

        SET @horaActual = DATEADD(minute, @duracion, @horaActual)

        IF (@horaActual >= @horaCierre)
        BEGIN
            SET @horaActual = @horaApertura
            SET @fechaActual = DATEADD(day, 1, @fechaActual)
        END
    END

    SELECT * FROM turnos WHERE id_servicio = @idServicio AND fecha_turno BETWEEN @fechaInicio AND @fechaFin
END


-- Insertar data de prueba en comercios
INSERT INTO [dbo].[Comercios] ([nom_comercio], [aforo_comercio])
VALUES 
('Comercio 1', 50),
('Comercio 2', 30),
('Comercio 3', 40),
('Comercio 4', 20),
('Comercio 5', 10),
('Comercio 6', 25),
('Comercio 7', 35),
('Comercio 8', 45),
('Comercio 9', 15),
('Comercio 10', 55);


-- Insertar data de prueba en comercio
INSERT INTO Servicios (id_comercio, nom_servicio, hora_apertura, hora_cierre, duracion)
VALUES (1, 'Servicio 1', '08:00:00', '18:00:00', 120);

INSERT INTO Servicios (id_comercio, nom_servicio, hora_apertura, hora_cierre, duracion)
VALUES (1, 'Servicio 2', '08:30:00', '17:30:00', 90);

INSERT INTO Servicios (id_comercio, nom_servicio, hora_apertura, hora_cierre, duracion)
VALUES (2, 'Servicio 3', '09:00:00', '17:00:00', 60);

INSERT INTO Servicios (id_comercio, nom_servicio, hora_apertura, hora_cierre, duracion)
VALUES (2, 'Servicio 4', '10:00:00', '16:00:00', 180);

INSERT INTO Servicios (id_comercio, nom_servicio, hora_apertura, hora_cierre, duracion)
VALUES (3, 'Servicio 5', '08:15:00', '17:45:00', 75);


-- Llamada de prueba al procedimiento almacenado
DECLARE @idServicio INT = 22
DECLARE @fechaInicio DATE = '2023-03-15'
DECLARE @fechaFin DATE = '2023-03-20'

EXEC generarTurnos @fechaInicio, @fechaFin, @idServicio