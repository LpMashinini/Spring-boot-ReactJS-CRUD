FROM eclipse-temurin:21.0.8_9-jdk-jammy AS builder
WORKDIR /Backend

COPY .mvn/ .mvn
COPY mvnw pom.xml ./
RUN chmod +x ./mvnw
RUN ./mvnw dependency:go-offline

COPY src ./src
RUN ./mvnw clean package -DskipTests

FROM eclipse-temurin:21.0.8_9-jre-jammy AS final
WORKDIR /Backend
EXPOSE 8080

COPY --from=builder /Backend/target/*.jar SpringBoot-backend.jar

ENTRYPOINT ["java", "-jar", "SpringBoot-backend.jar"]