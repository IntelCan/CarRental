package org.CarRental.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

/**
 * Created by intelcan on 13.05.17.
 */
@Entity(name = "car")
public class Car {

    @Getter
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
    @Column(name = "is_rented")
    private Boolean isRented;

}
