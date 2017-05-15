package org.CarRental.service;

import org.CarRental.model.Rental;

import java.util.List;

/**
 * Created by intelcan on 14.05.17.
 */
public interface RentalService {

    List<Rental> getAllRental();

    Rental getRentalById(Long id);

    Rental createRental(Rental rental);

    void deleteRental(Long id);
}
