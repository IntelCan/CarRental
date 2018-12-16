package org.CarRental.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

/**
 * Created by intelcan on 13.05.17.
 */

@Data
@Entity(name = "car")
public class Car {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    private String mark;

    private String model;

    private String rate;

    private Double price;

    @Column(name = "is_rented")
    private Boolean isRented;

}
