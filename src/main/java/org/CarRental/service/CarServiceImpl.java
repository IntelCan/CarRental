package org.CarRental.service;

import org.CarRental.model.Car;
import org.CarRental.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.NoResultException;
import java.util.List;

/**
 * Created by intelcan on 13.05.17.
 */
@Service
public class CarServiceImpl implements CarService {

    @Autowired
    CarRepository carRepository;

    @Override
    public List<Car> getAllCar() {
        Car car = new Car();
        
        List<Car> cars = carRepository.findAll();
        return cars;
    }

    @Override
    public Car getCarById(Long id) {
        Car car = carRepository.findOne(id);
        return car;
    }

    @Override
    public Car createCar(Car car) {
        carRepository.save(car);
        return car;
    }

    @Override
    public Car updateCar(Car car) throws NoResultException {
        Car foundCar = carRepository.findOne(car.getId());
        if(foundCar == null)
            throw new NoResultException("Can't update car because doesn't exist");
        carRepository.save(car);
        return car;
    }

    @Override
    public void deleteCar(Long id) throws NoResultException {
        Car foundCar = carRepository.findOne(id);
        if(foundCar == null)
            throw new NoResultException("Can't delete car because doesn't exist");
        carRepository.delete(id);

    }
}
