# Informe de Práctica Individual - Integración Continua

## 1. Descripción del Proyecto y Pipeline

Para esta práctica individual se desarrolló una **API CRUD (Create, Read, Update, Delete)** para la gestión de tareas (To-Do list) utilizando **Node.js** y el framework **Express**. La aplicación cuenta con un conjunto de pruebas de integración desarrolladas con **Jest** y **Supertest**, las cuales validan el correcto funcionamiento de todos los endpoints.

El pipeline de Integración Continua (CI) configurado en GitHub Actions automatiza los siguientes procesos en cada `push` o `pull_request` hacia la rama `main`:
1. **Checkout** del código.
2. **Setup** del entorno (Node.js v20).
3. **Instalación** de dependencias (`npm ci`).
4. **Linting** estático de código con ESLint.
5. **Ejecución de pruebas** unitarias e integrales.
6. **Generación y guardado** del reporte de cobertura de código como artefacto.

## 2. Evidencias y Capturas de Pantalla

### 2.1. Historial de ejecuciones en la pestaña Actions
A continuación se muestra el historial de los workflows ejecutados, demostrando que el pipeline corre automáticamente en cada actualización del repositorio.
**[INSERTAR CAPTURA DE PANTALLA: Historial de Actions con los checks en verde]**

### 2.2. Workflow exitoso con reporte de cobertura
Detalle de un job exitoso donde se observa la ejecución de todos los pasos, incluyendo el análisis estático y la generación del reporte de cobertura (guardado como artefacto descargable).
**[INSERTAR CAPTURA DE PANTALLA: Detalle del workflow exitoso (la que me enviaste de los checks verdes)]**

### 2.3. Workflow fallido (prueba intencional)
Para validar que el pipeline detiene la integración ante errores, se forzó un fallo intencional (rompiendo una prueba o introduciendo un error de linting). Como se observa, el workflow se marca en rojo (❌) y el proceso se detiene.
**[INSERTAR CAPTURA DE PANTALLA: Detalle de un workflow en rojo. (Si no lo hiciste, puedes subir un cambio con error, ver el rojo, capturarlo, y luego corregirlo)]**

### 2.4. Configuración de la regla de protección de rama
Se configuró la protección en la rama `main` exigiendo que el check `build-and-test` pase obligatoriamente antes de permitir un merge. En la captura se observa cómo GitHub bloquea el botón de merge mientras el CI está en progreso.
**[INSERTAR CAPTURA DE PANTALLA: Configuración de Branch protection rule]**
**[INSERTAR CAPTURA DE PANTALLA: Pull Request bloqueada esperando el CI]**

## 3. Conclusiones y Reflexión

La implementación de Integración Continua mediante GitHub Actions en este proyecto demostró ser una herramienta fundamental para garantizar la calidad del software. 

*   **Detección temprana de errores:** El pipeline atrapa errores de sintaxis, malas prácticas de código (linting) y fallos lógicos (pruebas unitarias) antes de que el código llegue a la rama principal.
*   **Cobertura de código:** La generación del reporte de cobertura permite identificar qué partes de la lógica de negocio no están siendo probadas, incentivando la mejora continua de las pruebas.
*   **Flujo de trabajo seguro:** La protección de rama junto con las Pull Requests garantiza que ningún código roto se integre al proyecto, incluso si se trabaja en equipo, actuando como una barrera de seguridad automatizada.