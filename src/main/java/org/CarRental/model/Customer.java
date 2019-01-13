package org.CarRental.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.CarRental.model.dto.CustomerDTO;
import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

/**
 * Created by intelcan on 13.05.17.
 */
@Data
@Entity(name = "customer")
@NoArgsConstructor
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty
    private String name;

    @NotEmpty
    private String surname;

    private Short age;

    @NotEmpty
    @Column(name = "identity_card")
    private String identityCard;

    @NotNull
    @Column(name = "driver_license")
    private String driverLicense;

    @Size(min = 9, max = 11)
    private String phone;

    public Customer(CustomerDTO customerDTO) {

        this.id = customerDTO.getId();
        this.name = customerDTO.getName();
        this.surname = customerDTO.getSurname();
        this.identityCard = customerDTO.getIdentityCard();
    }

}
