## 4. Práctica Individual - Laboratorio 5.2

### 4.1. Descripción del Pipeline
Para la práctica individual se extendió el pipeline de CD del proyecto CRUD (desarrollado en el Laboratorio 5.1). Se implementaron dos mejoras clave:
1.  **Separación de entornos:** Uso de GitHub Environments (`staging` y `production`) para gestionar el despliegue de forma controlada.
2.  **Seguridad:** Integración del escáner de vulnerabilidades **Trivy** para analizar la imagen Docker antes de desplegarla.

### 4.2. Configuración de GitHub Environments
Se crearon los entornos `staging` y `production` en la configuración del repositorio. El job de `deploy` fue modificado para apuntar al entorno `production`, lo que permite en el futuro agregar reglas de protección (como requerir aprobación manual antes de desplegar).

**[INSERTAR CAPTURA DE PANTALLA AQUÍ: Configuración de los Environments en GitHub]**

### 4.3. Escaneo de Vulnerabilidades con Trivy
Se agregó el paso `aquasecurity/trivy-action` al workflow. Este paso analiza la imagen Docker recién construida en busca de vulnerabilidades críticas o altas (CVEs) en el sistema operativo y en las librerías de Node.js.

**[INSERTAR CAPTURA DE PANTALLA AQUÍ: Pestaña Actions mostrando el paso "Escaneo de vulnerabilidades" ejecutándose]**

**[INSERTAR CAPTURA DE PANTALLA AQUÍ: Detalle del log de Trivy mostrando la tabla con las vulnerabilidades detectadas, o el mensaje de que no se encontraron fallos críticos]**

### 4.4. Evidencias del Despliegue Final
El pipeline finalizó exitosamente, desplegando la imagen segura en la instancia EC2. La aplicación se encuentra operativa y accesible vía HTTP.

**[INSERTAR CAPTURA DE PANTALLA AQUÍ: Navegador mostrando la URL de la IP de EC2 con el endpoint /health funcionando]**

### 4.5. Reflexión sobre el uso de Contenedores y CD
El uso de contenedores Docker junto con un Despliegue Continuo (CD) transforma radicalmente la forma de entregar software. Docker garantiza que la aplicación se ejecute exactamente igual en cualquier entorno, eliminando el clásico problema de "en mi máquina sí funciona". 

Por otro lado, el CD automatiza el despliegue reduciendo el error humano. La incorporación del escaneo de vulnerabilidades (Trivy) añade una capa de seguridad esencial, asegurando que no se desplieguen imágenes con fallos críticos conocidos. En conjunto, estas prácticas agilizan el desarrollo y garantizan la estabilidad y seguridad del servicio.