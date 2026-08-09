#Build
FROM maven:3.9.6-eclipse-temurin-21 AS build

WORKDIR /Backend
COPY . .
RUN mvn clean package -DskipTests

#Runtime
FROM eclipse-temurin:21-jre

WORKDIR /Backend
COPY --from=build /Backend/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]

