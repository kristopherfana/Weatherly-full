# 🌤️Weatherly

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.

## 📋Description

This is a weather web application built using Angular, Spring Boot, Typescript, Java, HTML, CSS, and OpenWeatherMap API. The application allows users to search for weather information for any location around the world.

## ✨Features

- Search for weather information by location
- View the current weather condition, temperature, humidity, wind speed, and direction
- View a 5-day weather forecast for the searched location
- Toggle between Celsius and Fahrenheit units

## 👨🏽‍💻Installation

1. Clone the repository to your local machine

   ```
   git clone https://github.com/kristopherfana/Weatherly.git
   ````

2. Navigate to the project directory

   ```
   cd Weatherly
   ````

3. Install the required dependencies for the Angular frontend

   ```
   cd Frontend
   npm install
   ````

4. Build the Angular frontend

   ```
   ng build
   ````

5. Install the required dependencies for the Spring Boot backend

   ```
   cd ../backend
   ./mvnw clean package
   ````

6. Start the Spring Boot backend server

   ```
   java -jar target/{backend-jar-name}.jar
   ````

7. Open your browser and navigate to `http://localhost:4200/`

The application should now be up and running. Note that you'll need to have Node.js and Java installed on your system in order to complete these steps.

## 🔧Configuration

To use the OpenWeatherMap API, you need to obtain an API key. Follow the instructions below to get your API key:

1. Go to the [OpenWeatherMap website](https://openweathermap.org/) and sign up for a free account.
2. Once you have signed up, go to your account dashboard and copy your API key.
3. In the `backend/src/main/resources` directory, create a `application.properties` file.
4. Add the following line to the file:

   ```
   openweathermap.api.key=YOUR_API_KEY_HERE
   ````

   Replace `YOUR_API_KEY_HERE` with your actual API key.

5. Save the `application.properties` file.

## 👏🏽Credits

This project was built using the following technologies:

- [Angular](https://angular.io/)
- [Spring Boot](https://spring.io/projects/spring-boot)
- [OpenWeatherMap API](https://openweathermap.org/api)
- Typescript
- Java
- HTML
- CSS


