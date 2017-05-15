package org.CarRental.service;

import org.CarRental.model.Customer;
import org.CarRental.model.CustomerDTO;

import java.util.List;
import java.util.SplittableRandom;

/**
 * Created by intelcan on 13.05.17.
 */
public interface CustomerService {

    List<Customer> getAllCustomer();

    List<CustomerDTO> getAllCustomerDTO();

    Customer getCustomerById(Long id);

    CustomerDTO getCustomerDTOById(Long id);

    Customer loadCustomerByIdentityCard(String identityCard);

    Customer createCustomer(Customer customer);

    void deleteCustomer(Long id);
}
