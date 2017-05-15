package org.CarRental.controller;

import org.CarRental.model.Rental;
import org.CarRental.service.RentalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by intelcan on 14.05.17.
 */
@RestController
@RequestMapping("/api/rental")
public class RentalController {

    @Autowired
    private RentalService rentalService;

    @RequestMapping( value ="/all", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Rental>> getRentals(){
        List<Rental> rentals = rentalService.getAllRental();
        return new ResponseEntity<>(rentals, HttpStatus.OK);
    }

    @RequestMapping(value="/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Rental> getRentalById(@PathVariable("id") Long id){
        Rental rental= rentalService.getRentalById(id);
        return new ResponseEntity<>(rental, HttpStatus.OK);
    }

    @RequestMapping(value ="/create", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Rental> createRental(@RequestBody Rental rental){
        Rental createdRental = rentalService.createRental(rental);
        return new ResponseEntity<>(createdRental, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity deleteRental(@PathVariable("id") Long id){
        rentalService.deleteRental(id);
        return new ResponseEntity(HttpStatus.OK);
    }


}
