package org.CarRental.service.car;

import org.CarRental.model.Car;
import org.CarRental.model.Customer;

import java.util.List;

/**
 * Created by intelcan on 13.05.17.
 */
public interface CarService {

    List<Car> getAllCar();

    Car getCarById(Long id);

    Car createCar(Car car);

    Car updateCar(Car car);

    void deleteCar(Long id);
}
