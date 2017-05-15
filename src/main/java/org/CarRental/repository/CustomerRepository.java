package org.CarRental.repository;

import org.CarRental.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by intelcan on 13.05.17.
 */
@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {

    Customer findByIdentityCard(String identityCard);

}
