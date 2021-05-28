CREATE TRIGGER[dbo].[PeliculaInsertada]
ON[dbo].[PELICULA]
FOR INSERT
AS
DECLARE
@QUERY varchar(500),
@ID VARCHAR(50),
@NOMBRE VARCHAR(70),
@DIRECTOR VARCHAR(70),
@FECHA_HORA VARCHAR(70),
@CLASIFICACION VARCHAR(20),
@PRECIO VARCHAR(5)
SET @ID = (select id_pelicula from inserted)
SET @NOMBRE = (select nombre from inserted)
SET @DIRECTOR = (select director from inserted)
SET @FECHA_HORA = (select fecha_estreno from inserted)
SET @CLASIFICACION = (select clasificacion from inserted)
SET @PRECIO = (select precio_unitario from inserted)
SET @QUERY =(CONCAT('INSERT INTO PELICULA VALUES(', @ID, ', ', @NOMBRE, ', ', @DIRECTOR, ', ', @FECHA_HORA, ', ', @CLASIFICACION, ', '''))
INSERT BITACORA(HOST, USUARIO, ACTIVIDAD, CONSULTA, FECHA_HORA, TABLA_AFECTADA) VALUES 
(@@SERVERNAME, SUSER_NAME(), 'Insert', @QUERY, GETDATE(), 'EMPLEADO')
