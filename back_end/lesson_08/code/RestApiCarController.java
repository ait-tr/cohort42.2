package de.ait.javalessons.controller;

import de.ait.javalessons.model.Car;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Slf4j // Аннотация Lombok для автоматического создания логгера
@RestController // Аннотация Spring, указывающая, что этот класс является REST-контроллером
@RequestMapping("/cars") // Базовый путь для всех методов в этом контроллере
public class RestApiCarController {

    // Список для хранения автомобилей
    private List<Car> carList = new ArrayList<>();

    // Конструктор класса, инициализирующий список автомобилей
    public RestApiCarController() {
        carList.addAll(
                List.of(
                        new Car("1", "BMW M1"),
                        new Car("2", "Audi A8"),
                        new Car("3", "Kia Spartage"),
                        new Car("4", "Volvo 960")
                ));
    }

    /**
     * Метод для получения всех автомобилей.
     * GET-запрос на /cars
     *
     * @return список всех автомобилей
     */
    @GetMapping
    Iterable<Car> getCars() {
        return carList;
    }

    /**
     * Метод для получения автомобиля по его ID.
     * GET-запрос на /cars/{id}
     *
     * @param id идентификатор автомобиля
     * @return Optional, содержащий автомобиль, если он найден, иначе пустой Optional
     */
    @GetMapping("/{id}")
    Optional<Car> getCarById(@PathVariable String id) {
        for (Car car : carList) {
            if (car.getId().equals(id)) {
                return Optional.of(car);
            }
        }
        return Optional.empty();
    }

    /**
     * Метод для добавления нового автомобиля.
     * POST-запрос на /cars
     *
     * @param car объект автомобиля, переданный в теле запроса
     * @return добавленный автомобиль
     */
    @PostMapping
    Car postCar(@RequestBody Car car) {
        carList.add(car);
        return car;
    }

    /**
     * Метод для обновления существующего автомобиля по его ID.
     * PUT-запрос на /cars/{id}
     *
     * @param id  идентификатор автомобиля, который нужно обновить
     * @param car объект автомобиля с новыми данными
     * @return ResponseEntity с обновлённым автомобилем и статусом OK, если автомобиль найден,
     *         или с новым автомобилем и статусом CREATED, если автомобиль не найден
     */
    @PutMapping("/{id}")
    ResponseEntity<Car> putCar(@PathVariable String id, @RequestBody Car car) {
        int index = -1;
        for (Car carToFind : carList) {
            if (carToFind.getId().equals(id)) {
                index = carList.indexOf(carToFind);
                carList.set(index, car);
            }
        }

        return (index == -1) ?
                new ResponseEntity<>(postCar(car), HttpStatus.CREATED) :
                new ResponseEntity<>(car, HttpStatus.OK);
    }

    /**
     * Метод для удаления автомобиля по его ID.
     * DELETE-запрос на /cars/{id}
     *
     * @param id идентификатор автомобиля, который нужно удалить
     */
    @DeleteMapping("/{id}")
    void deleteCar(@PathVariable String id) {
        carList.removeIf(car -> car.getId().equals(id));
    }
}