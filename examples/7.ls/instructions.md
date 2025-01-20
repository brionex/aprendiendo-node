# Ejercicio

Crear un comando personalizado `ls` que muestre información detallada de los archivos y directorios contenidos en la ruta especificada como argumento.

## Requisitos

1. El comando debe listar los archivos y directorios en el mismo orden en que se encuentran en la ruta.
2. Debe mostrar el tamaño de cada archivo y directorio expresado en **MB (megabytes)**, incluyendo el texto `MB` en cada línea junto al tamaño.
3. Debe indicar si cada entrada es:
   - Un archivo regular.
   - Un directorio.
   - Un enlace simbólico.
4. Debe incluir las siguientes fechas para cada elemento:
   - Fecha de creación.
   - Fecha de última modificación.

## Ejemplo de salida

```plaintext
> ls <directorio>

name        size        type            created             modified
file.txt    0.12 MB     regular         2023-01-01 12:00:00 2023-01-02 14:00:00
folder      3.45 MB     directory       2023-01-01 12:00:00 2023-01-02 14:00:00
link.txt    0.01 MB     symbolic link   2023-01-01 12:00:00 2023-01-02 14:00:00
bigfile.zip 152.67 MB   regular         2023-01-01 12:00:00 2023-01-02 14:00:00
```
