# K6 - Prueba de carga login

## Requisitos

- K6 versión: 1.1.0
- SO: Windows 10 

## Estructura
- script/login_test.js → Script principal
- data/users.csv → Usuarios a testear
- resultados/reporte.json → Reporte generado

## Pasos de ejecución

1. Instalar K6: https://k6.io/docs/getting-started/installation/
2. Clonar este repositorio
3. Desde terminal:
   cd script
   k6 run --summary-export=./results/report.json script/login_test.js

El script usa usuarios parametrizados desde CSV y evalúa:
- Tiempo de respuesta < 1.5s (p95)
- Error rate < 3%
