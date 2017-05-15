package org.CarRental.repository;

import org.CarRental.model.Rental;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by intelcan on 14.05.17.
 */
@Repository
public interface RentalRepository extends JpaRepository<Rental,Long>{

}
