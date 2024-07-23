# Usar una imagen base con OpenJDK
FROM openjdk:17-jdk-alpine

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar el archivo JAR generado por Maven o Gradle al contenedor
COPY target/*.jar app.jar

# Exponer el puerto en el que la aplicación JHipster escucha
EXPOSE 8080

# Comando para ejecutar la aplicación
ENTRYPOINT ["java", "-jar", "/app/app.jar"]

