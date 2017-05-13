package org.CarRental.service;

import org.CarRental.model.Customer;
import org.CarRental.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.NoResultException;
import java.util.List;

/**
 * Created by intelcan on 13.05.17.
 */
@Service
public class CustomerServiceImpl implements CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public List<Customer> getAllCustomer() {
        List<Customer> customers = customerRepository.findAll();
        return customers;
    }

    @Override
    public Customer getCustomerById(Long id) {
        Customer customer = customerRepository.findOne(id);
        return customer;
    }

    @Override
    public Customer createCustomer(Customer customer) {
        customerRepository.save(customer);
        return customer;
    }

    @Override
    public void deleteCustomer(Long id) throws NoResultException {
        Customer foundCustomer = customerRepository.findOne(id);
        if(foundCustomer == null){
            throw new NoResultException("Can't delete customer because doesn't exist.");
        }

        customerRepository.delete(id);

    }
}