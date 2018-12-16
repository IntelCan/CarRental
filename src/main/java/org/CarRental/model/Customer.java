package org.CarRental.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.CarRental.model.dto.CustomerDTO;

import javax.persistence.*;

/**
 * Created by intelcan on 13.05.17.
 */
@Data
@Entity(name = "customer")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String surname;

    private Short age;

    @Column(name = "identity_card")
    private String identityCard;

    @Column(name = "driver_license")
    private String driverLicense;

    private String phone;

    public Customer(){}

    public Customer(CustomerDTO customerDTO){
        this.id = customerDTO.getId();
        this.name = customerDTO.getName();
        this.surname = customerDTO.getSurname();
        this.identityCard = customerDTO.getIdentityCard();
    }

}
