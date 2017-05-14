package org.CarRental.repository;

import org.CarRental.model.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by intelcan on 13.05.17.
 */
@Repository
public interface CarRepository extends JpaRepository<Car, Long> {

}
