package org.CarRental.controller;

import org.CarRental.model.Car;
import org.CarRental.service.car.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by intelcan on 13.05.17.
 */
@RestController
@RequestMapping("/api/car")
public class CarController {

    @Autowired
    private CarService carService;

    @RequestMapping( value ="/all", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Car>> getCars(){
        List<Car> cars = carService.getAllCar();
        return new ResponseEntity<>(cars, HttpStatus.OK);
    }

    @RequestMapping(value="/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Car> getCarById(@PathVariable("id") Long id){
        Car car= carService.getCarById(id);
        return new ResponseEntity<>(car, HttpStatus.OK);
    }

    @RequestMapping(value ="/create", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Car> createCar(@RequestBody Car car){
        Car createdCar = carService.createCar(car);
        return new ResponseEntity<>(createdCar, HttpStatus.CREATED);
    }

    @RequestMapping(value="/{id}",method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Car> updateCar(@RequestBody Car car){
        Car updatedCar = carService.updateCar(car);
        return new ResponseEntity<>(updatedCar,HttpStatus.OK);
    }

    @RequestMapping(value="/rent/{id}",method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Car> rentCar(@RequestBody Car car){
        car.setIsRented(true);
        Car updatedCar = carService.updateCar(car);
        return new ResponseEntity<>(updatedCar,HttpStatus.OK);
    }

    @RequestMapping(value="/return/{id}",method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Car> returnCar(@RequestBody Car car){
        car.setIsRented(false);
        Car updatedCar = carService.updateCar(car);
        return new ResponseEntity<>(updatedCar,HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity deleteCar(@PathVariable("id") Long id){
        carService.deleteCar(id);
        return new ResponseEntity(HttpStatus.OK);
    }


}
