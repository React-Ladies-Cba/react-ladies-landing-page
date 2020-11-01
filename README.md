# react-ladies-landing-page

Sitio oficial de la comunidad React Ladies

## Deploy status

[![Netlify Status](https://api.netlify.com/api/v1/badges/c9f59991-8656-4c7e-a2f8-0498cca87e38/deploy-status)](https://app.netlify.com/sites/quizzical-leavitt-6245b6/deploys)

## Configuración inicial

Crear archivo .env en el root del proyecto (donde esta el package.json).

Dentro del archivo .env colocar las variables de entorno que están en .env.template y completarlas con los valores necesarios (en este caso los que nos provee firebase).

```
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_DATABASE_URL=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
REACT_APP_FIREBASE_MEASUREMENT_ID=
REACT_APP_BBB_URL=
REACT_APP_MANDRILL_API_KEY=
```

## Iniciar proyecto

En el directorio del proyecto, ejecutar:

## `yarn`

Este comando instala todas las dependencias del proyecto.

## `yarn start`

Levanta la app en modo dev.
Usá http://localhost:3000 para ver la app en el navegador.
