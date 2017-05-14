package org.CarRental.service;

import org.CarRental.model.Rental;
import org.CarRental.repository.RentalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.NoResultException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

/**
 * Created by intelcan on 14.05.17.
 */
@Service
public class RentalServiceImpl implements RentalService {

    @Autowired
    private RentalRepository rentalRepository;

    @Override
    public List<Rental> getAllRental() {
        List<Rental> rentals = rentalRepository.findAll();
        return rentals;
    }

    @Override
    public Rental getRentalById(Long id) {
        Rental rental = rentalRepository.findOne(id);
        return null;
    }

    @Override
    public Rental createRental(Rental rental) {
        Date date = new Date();
        rental.setRentalDate(date);
        rentalRepository.save(rental);
        return rental;
    }

    @Override
    public void deleteRental(Long id) throws NoResultException {
        Rental foundRental = rentalRepository.findOne(id);
        if(foundRental == null)
            throw new NoResultException("Can't delete rental because doesn't exist.");


        rentalRepository.delete(id);

    }
}
