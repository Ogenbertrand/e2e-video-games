FROM openjdk:17-jdk-slim AS builder
WORKDIR /app

COPY build.gradle gradlew settings.gradle ./
COPY gradle/ gradle/
COPY src/ src/

RUN chmod +x gradlew
RUN ./gradlew clean build

FROM openjdk:17-jdk-slim
WORKDIR /app

COPY --from=builder /app/build/libs/*.jar /app/app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/app/app.jar"]
