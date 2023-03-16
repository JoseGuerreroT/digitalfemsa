#digitalfemsa
Este proyecto es una prueba técnica para el desarrollo de una aplicación móvil en React Native para la empresa FEMSA.


####Funcionalidades completadas
En este proyecto, se han implementado las siguientes funcionalidades:


- Se han implementado test unitarios con un alto coverage.
- Se ha diseñado una arquitectura de dominios para una mejor organización del código.

#### Funcionalidades pendientes
Aunque el proyecto ya cuenta con varias funcionalidades implementadas, se considera que puede mejorar aún más incorporando las siguientes funcionalidades que, por razones de tiempo, quedaron de baja prioridad durante el desarrollo de esta prueba técnica:

- Agregar un useTheme context para el manejo del tema del proyecto. Esto permitiría a los usuarios cambiar el tema de la aplicación de forma sencilla y rápida, sin necesidad de modificar cada componente por separado.

- Agregar un PointsProvider context para el filtro de los puntos. Actualmente, el filtro se maneja dentro del componente Points, pero esto podría generar problemas de escalabilidad y rendimiento a medida que la aplicación crece. Al agregar un proveedor específico para este propósito, se garantiza que solo los componentes que necesitan acceder a la lista filtrada de puntos la obtengan, evitando así la sobrecarga innecesaria de componentes no relacionados con esta funcionalidad.

> *Aunque estas funcionalidades no están implementadas en el proyecto actual, podrían ser valiosas adiciones en el futuro para mejorar la experiencia del usuario y facilitar el mantenimiento del código.*

##Instalación
Clona el repositorio usando **git clone** o descarga el archivo .zip.
En la carpeta raíz del proyecto, ejecuta el comando npm install / yarn install para instalar las dependencias.
Ejecuta el comando npm start para iniciar la aplicación.
Estructura de archivos
El proyecto sigue la siguiente estructura de archivos:

css



    digitalfemsa/
    ├── src/
    │   ├── components/
    │   ├── screens/
    │   ├── contexts/
    │   ├── domains/
    │   ├── navigation/
    │   └── ...
    ├── App.js
    ├── package.json
    └── ...
**Tecnologías utilizadas**
- React Native
- React Navigation
- Jest (para testing)
- useSWR de vercel (manejo de api y cache)

