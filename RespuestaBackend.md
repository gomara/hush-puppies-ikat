## Respuesta Backend

Se decidió usar una arquitecura de microservicios, asi cada uno puede ser escalado de forma independiente lo que permite que el sistema sea más robusto y tolerante a fallos.

### Microservicios

#### Servicio de usuarios
-   **Funcionalidades**:
    -   Se encarga de la autenticación de los usuarios, (registro, login, logout) usando JWT.
    -   Se encarga del almacenamiento de los datos de los usuarios (nombre, apellido, email, contraseña, etc).
    -   Se encarga de la gestión de los roles de los usuarios (conductor o solicitante).

- **Tecnologías**:
    -   **Lenguaje**: NodeJS (Typescript)
    -   **Framework**: Express
    -   **Base de datos**:  MongoDB, Mongoose como ODM
    -   **Autenticación**: JWT
    -   **Despliegue**: Docker

#### Servicio de servicios de transporte
-   **Funcionalidades**:
    -  Se encarga del manejo de solicitudes y asignación de conductores dentro de un rango especificado.
    - Gestión del estado del servicio de transporte (pendiente, en curso, finalizado, cancelado).

- **Tecnologías**: 
    -   **Lenguaje**: NodeJS (Typescript)
    -   **Framework**: Express
    -   **Base de datos**:  MongoDB, Mongoose como ODM
    -   **Comunicación entre microservicios**: HTTP/REST
    -   **Despliegue**: Docker

#### Servicio de Conductores
-  **Funcionalidades**:
    -   Se encarga de la recepción y emisión constante de la ubicación (coordernadas) de los conductores.
    -  Se encarga de la gestión de los estados de los conductores (activo dispoible, activo ocupado, o inactivo).

- **Tecnologías**:
    -   **Lenguaje**: NodeJS (Typescript)
    -   **Framework**: Express
    -   **Base de datos**:  MongoDB, Mongoose como ODM
    -   **Comunicación entre microservicios**: HTTP/REST
    -   **Comunicación en tiempo real**: WebSockets para la emisión de la ubicación de los conductores.
    -   **Despliegue**: Docker

#### Servicio de notificaciones
-   **Funcionalidades**:
    -   Se encarga de la emisión de notificaciones (eventos provenientes de los otros microservicios como la asignacion de conductes, cancelacion, finalización , etc) a los usuarios solicitantes y conductores.
    -  Se utilizaran colas de mensajes para la entrega de forma asincrona de las notificaciones.

- **Tecnologías**:
    - **Lenguaje**: NodeJS (Typescript)
    - **Framework**: Express
    - **Colas de mensajes**: SQS de AWS
    - **Comunicación entre microservicios**: HTTP/REST
    - **Base de datos**:  MongoDB, Mongoose como ODM en caso de ser necesario guardar las notificaciones.
    - **Despliegue**: Docker


#### Evitar doble asignación de conductores
Para evitar la doble asignación de conductores se puede hacer lo siguiente:
-   Un cliente solicita un servicio de trasporte, esta solicitud llega al mirco servicio de servicios de transporte.
-   El microsevicio primero verifica la disponibilidad de conductores dentro de un rango especificado.
-   Si hay conductores disponibles, se les envia la notificación a los conductores disponibles a través del microservicio de notificaciones.
- Supongamos que varios conductores aceptan al mismo tiempo, en este caso se envian multiples solicitud de asignación de conductores al microservicio de servicios de transporte. La asignación del servicio se maneja de manera atómica utilizando transacciones de MongoDB, lo que garantiza que solo un conductor sea asignado al servicio de transporte.
- Además de lo anterior se plantea un bloqueo temporal del servicio, por ejemplo usando Redis, esto quedaria de la siguiente forma:
    -  Al recibir una solicitud de un servicio en el Servicio de servicios de transporte, se genera una clave unica para el servicio y se almacena en Redis.
    - Se notifica a los conductores disponibles a través del microservicio de notificaciones.
    - Al recibir una solicitud de confirmación de un conductor, se intenta adquirir el bloqueo del servicio, si se logra adquirir el bloqueo, se asigna el conductor al servicio,  si no se logra adquirir el bloqueo, se envia una notificación al conductor de que el servicio ya fue asignado a otro conductor.
    - El bloqueo del servicio se libera cuando el servicio es finalizado o cancelado.
#### Nuevo modulo web para mostrar estado de los conductores
Para implementar el nuevo modulo web para mostrar el estado de los conductores se puede hacer lo siguiente:
-   El cliente (conductor) envia su ubicación (coordenadas) al microservicio de conductores a traves de un websocket a intervalos de tiempo regulares.
-   El microservicio de conductores almacena la ubicación del conductor en la base de datos y actualiza la ultima vez que se recibio la ubicación del conductor.
- Cuando un cliente se desconecta del websocket este emite un evento de "disconnect" y el microservicio de conductores cambia el estado del conductor a inactivo.
- El servicio de conductores además verifica periodicamente si la ultima vez que se recibio la ubicación del conductor es mayor a un tiempo especificado, si es asi, se cambia el estado del conductor a inactivo.
- El nuevo modulo web se subscribe a los eventos de actualización de estado de los conductores y muestra el estado de los conductores en tiempo real junto con su ubicación en un mapa.

Para el modulo web se puede usar ReactJS y para el mapa se puede usar la libreria de mapas de Google Maps junto con Socket.io para la comunicación en tiempo real con el microservicio de conductores. Tambien se puede usar GraphQL para la comunicación entre el modulo web y el microservicio de conductores.

#### Esquema
![Esquema](/public/Esquema.png)
