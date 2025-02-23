package de.ait.javalessons.consultation;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class WeatherAppTest {

    private List<Weather> weatherTestList = Arrays.asList(
            new Weather("New York", 10.5, false),
            new Weather("Los Angeles", 18.2, false),
            new Weather("Chicago", -2.0, true),
            new Weather("Houston", 25.0, false),
            new Weather("Miami", 30.5, true),
            new Weather("Paris", 12.0, false),
            new Weather("London", -7.5, true),
            new Weather("Berlin", 3.0, true),
            new Weather("Sydney", 22.3, false),
            new Weather("Tokyo", 15.6, true)
    );

    private WeatherApp weatherApp;

    private List<Weather> weatherSocondTestList = Arrays.asList(
    );

    @BeforeEach
    void setUp() {
        //Average
        weatherApp = new WeatherApp();
    }


    @Test
    void testFilterByTemperatureTwoWasFound() {

        //Act
        List<Weather> resultList = weatherApp.filterByTemperature(weatherTestList);

        //Assert
        assertEquals(2, resultList.size());
        assertEquals("Chicago", resultList.get(0).getCity());
        assertEquals("London", resultList.get(1).getCity());
    }

    @Test
    void testFilterByTemperatureWasNotFound() {

        //Act
        List<Weather> resultList = weatherApp.filterByTemperature(weatherSocondTestList);

        //Assert
        assertTrue(resultList.isEmpty());

    }

    @Test
    void testFindByTemperatureMoreTempSuccess() {

        //Act
        boolean result = weatherApp.findByTemperatureMoreTemp(weatherTestList, 30);

        //Assert
        assertTrue(result);
    }

    @Test
    void testFindByTemperatureMoreTempNotSuccess() {

        //Act
        boolean result = weatherApp.findByTemperatureMoreTemp(weatherTestList, 50);

        //Assert
        assertFalse(result);
    }


}
