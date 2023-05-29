package com.example.database;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/weather")
public class MainController {
    @Value("${openweathermap.apikey}")
    private String apiKey;

    @GetMapping("/current")
    public ResponseEntity<?> getCurrentWeatherData(@RequestParam("lat") double lat, @RequestParam("lon") double lon) {
        String url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey
                + "&units=metric";
        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(url, String.class);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/daily")
    public ResponseEntity<?> getDailyWeatherData(@RequestParam("lat") double lat, @RequestParam("lon") double lon) {
        String url = "https://pro.openweathermap.org/data/2.5/forecast/daily?lat=" + lat + "&lon=" + lon
                + "&cont=6&appid=" + apiKey + "&units=metric";
        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(url, String.class);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/hourly")
    public ResponseEntity<?> getHourlyWeatherData(@RequestParam("lat") double lat, @RequestParam("lon") double lon) {
        String url = "https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=" + lat + "&lon=" + lon
                + "&appid=" + apiKey + "&cnt=24&units=metric";
        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(url, String.class);
        return ResponseEntity.ok(result);
    }
}