package org.CarRental.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

/**
 * Created by intelcan on 13.05.17.
 */
@Entity(name = "customer")
public class Customer {

    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Getter @Setter
    private String name;

    @Getter @Setter
    private String surname;

    @Getter @Setter
    private Short age;

    @Getter @Setter
    @Column(name = "identity_card")
    private String identityCard;

    @Getter @Setter
    @Column(name = "driver_license")
    private String driverLicense;

    @Getter @Setter
    private String phone;



}
