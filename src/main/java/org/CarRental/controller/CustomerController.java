package org.CarRental.controller;

import com.sun.org.apache.regexp.internal.RE;
import org.CarRental.model.Customer;
import org.CarRental.model.CustomerDTO;
import org.CarRental.service.CustomerService;
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
@RequestMapping("/api/customer")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @RequestMapping( value ="/all", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Customer>> getCustomers(){
        List<Customer> customers = customerService.getAllCustomer();
        return new ResponseEntity<>(customers, HttpStatus.OK);
    }

    @RequestMapping(value="/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Customer> getCustomerById(@PathVariable("id") Long id){
        Customer customer = customerService.getCustomerById(id);
        return new ResponseEntity<>(customer, HttpStatus.OK);
    }

    @RequestMapping(value="/ic/{identityCard}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Customer> loadCustomerByIdentityCard(@PathVariable("identityCard") String identityCard ){
        Customer customer = customerService.loadCustomerByIdentityCard(identityCard);
        return new ResponseEntity<>(customer,HttpStatus.OK);
    }


    @RequestMapping(value ="/create", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Customer> createCustomer(@RequestBody Customer customer){
        Customer createdCustomer = customerService.createCustomer(customer);
        return new ResponseEntity<>(createdCustomer, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity deleteCustomer(@PathVariable("id") Long id){
        customerService.deleteCustomer(id);
        return new ResponseEntity(HttpStatus.OK);
    }

    @RequestMapping(value = "/dto/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<CustomerDTO> getCustomerDTOById(@PathVariable("id") Long id) {
        CustomerDTO customerDTO = customerService.getCustomerDTOById(id);
        return new ResponseEntity<>(customerDTO, HttpStatus.OK);
    }
    @RequestMapping( value ="/dto/all", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<CustomerDTO>> getCustomersDTO(){
        List<CustomerDTO> customersDTO = customerService.getAllCustomerDTO();
        return new ResponseEntity<>(customersDTO, HttpStatus.OK);
    }




}
