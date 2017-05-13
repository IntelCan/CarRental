package org.CarRental.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * Created by intelcan on 13.05.17.
 */
@Entity(name = "car")
public class Car {

    @Getter
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private Long id;

    @Getter @Setter
    private String mark;

    @Getter @Setter
    private String model;

    @Getter @Setter
    private String rate;

    @Getter @Setter
    private Double price;

    @Getter @Setter
    private Boolean isRented;

}
