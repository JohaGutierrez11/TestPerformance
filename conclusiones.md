# Conclusiones del ejercicio

1. Se logró simular un volumen de carga con 50 usuarios virtuales durante 30 segundos, logrando más de 20 transacciones por segundo (TPS).
2. Todos los usuarios fueron leídos desde un archivo CSV y utilizados aleatoriamente.
3. Se respetó el límite de 1.5s en el 95% de las respuestas, y la tasa de error fue menor al 3%.
4. La API de prueba respondió correctamente, evidenciando buena capacidad para manejar múltiples inicios de sesión en paralelo.
5. Se utilizó K6 por su simpleza, velocidad y capacidad de integración en pipelines de CI/CD.
