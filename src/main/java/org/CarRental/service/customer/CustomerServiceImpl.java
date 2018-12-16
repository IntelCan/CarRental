package org.CarRental.service.customer;

import org.CarRental.model.Customer;
import org.CarRental.model.dto.CustomerDTO;
import org.CarRental.repository.CustomerRepository;
import org.CarRental.service.customer.CustomerService;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.NoResultException;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by intelcan on 13.05.17.
 */
@Service
public class CustomerServiceImpl implements CustomerService {


    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public List<Customer> getAllCustomer() {
        List<Customer> customers = customerRepository.findAll();
        return customers;
    }

    @Override
    public List<CustomerDTO> getAllCustomerDTO() {
        List<Customer> customers = customerRepository.findAll();
        List<CustomerDTO> customerDTOS = new ArrayList<>();
        for(Customer item: customers){
            CustomerDTO customerDTO = new CustomerDTO(
                    item.getId(),
                    item.getName(),
                    item.getSurname(),
                    item.getIdentityCard()
            );
            customerDTOS.add(customerDTO);
        }
        return customerDTOS;
    }

    @Override
    public Customer getCustomerById(Long id) {
        Customer customer = customerRepository.findOne(id);
        return customer;
    }

    @Override
    public CustomerDTO getCustomerDTOById(Long id) {
        Customer customer = customerRepository.findOne(id);
        CustomerDTO customerDTO = new CustomerDTO(
                customer.getId(),
                customer.getName(),
                customer.getSurname(),
                customer.getIdentityCard()
        );
        return customerDTO;
    }

    @Override
    @Transactional
    public Customer loadCustomerByIdentityCard(String identityCard) {
        return (Customer) sessionFactory.getCurrentSession()
                .createCriteria(Customer.class)
                .add(Restrictions.eq("identityCard", identityCard))
                .uniqueResult();
    }

    @Override
    public Customer createCustomer(Customer customer) {
        customerRepository.save(customer);
        return customer;
    }

    @Override
    public void deleteCustomer(Long id) throws NoResultException {
        Customer foundCustomer = customerRepository.findOne(id);
        if(foundCustomer == null)
            throw new NoResultException("Can't delete customer because doesn't exist.");


        customerRepository.delete(id);

    }
}
