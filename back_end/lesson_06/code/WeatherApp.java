package de.ait.javalessons.consultation;

import java.util.List;
import java.util.stream.Collectors;

public class WeatherApp {
    public static void main(String[] args) {
        //System.out.println(filterByTemperature(WeatherTestData.getWeatherList()));
        System.out.println(findByTemperatureMoreTemp(WeatherTestData.getWeatherList(), 25));
    }

    //Задание 1: Фильтрация данных по температуре
    // 1. Найти все записи (Weather), у которых температура опускается ниже нуля.
    // 2. Вывести результат в удобном для вас формате (например, список или строку).
    public static List<Weather> filterByTemperature(List<Weather> weatherList) {
        return weatherList.stream()
                .filter(weather -> weather.getTemperature() < 0)
                .collect(Collectors.toList());
    }

    /*
    Задание 2: Проверка условий и нахождение максимума
    Состоит из двух частей: 1. Определить,
    есть ли хотя бы один город с температурой
    выше определённого порога (например, 25 градусов).
     */
    public static boolean findByTemperatureMoreTemp(List<Weather> weatherList, int temperature) {
        return weatherList.stream()
                .anyMatch(weather -> weather.getTemperature() > temperature);
    }
}
