package de.ait.javalessons.homework5;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class GeoApp {

    private static List<String> countries = Arrays.asList("Germany", "France", "Brazil", "Argentina", "Canada", "China", "Australia", "India");
    private static List<String> cities = Arrays.asList("Oslo", "Berlin", "Buenos Aires", "Paris", "Los Angeles", "New York", "London", "Beijing");
    private static List<String> rivers = Arrays.asList("Amazon", "Nile", "Yangtze", "Mississippi", "Danube", "Main", "Ganges");
    private static List<String> continents = Arrays.asList("Europe", "Asia", "Africa", "Australia", "Antarctica", "South America", "North America");
    private static List<String> countriesNew = Arrays.asList("Mexico", "Sweden", "Brazil", "USA", "Canada", "France", "Norway");


    public static void main(String[] args) {
        List<String> resultCountriesWithC = countries.stream()
                .filter(c -> c.startsWith("C"))
                .collect(Collectors.toList());
        System.out.println(resultCountriesWithC);

        List<String> resultCitiesMore6Letters = cities.stream()
                .filter(c -> c.length() > 6)
                .collect(Collectors.toList());
        System.out.println(resultCitiesMore6Letters);

        List<String> riverResult = rivers.stream()
                .filter(river -> river.length() % 2 == 0)
                .collect(Collectors.toList());
        System.out.println(riverResult);

        List<String> resultContinentsMore7Letters = continents.stream()
                .filter(continent -> continent.length() > 7)
                .collect(Collectors.toList());
        System.out.println(resultContinentsMore7Letters);

        List<String> resultCountries6Letters = countriesNew.stream()
                .filter(country -> country.trim().length() == 6)
                .collect(Collectors.toList());
        System.out.println(resultCountries6Letters);


        List<String> countriesContainingTheLetterA = countriesNew.stream()
                .filter(country -> country.toLowerCase().contains("a")).collect(Collectors.toList());
        System.out.println(countriesContainingTheLetterA);


        List<String> citiesWhoseNamesEndWithO = cities.stream()
                .filter(city -> city.endsWith("o")).collect(Collectors.toList());
        System.out.println(citiesWhoseNamesEndWithO);

        List<String> riversWhoseNamesContainMoreThan7Letters = rivers.stream()
                .filter(river -> river.length() > 7)
                .collect(Collectors.toList());
        System.out.println(riversWhoseNamesContainMoreThan7Letters);

        List<String> continentsWhoseNamesStartWithA = continents.stream()
                .filter(continent -> continent.startsWith("A"))
                .collect(Collectors.toList());
        System.out.println(continentsWhoseNamesStartWithA);


    }
}
