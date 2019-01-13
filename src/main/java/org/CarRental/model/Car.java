package org.CarRental.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

/**
 * Created by intelcan on 13.05.17.
 */

@Data
@Entity(name = "car")
public class Car {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    @NotNull
    private String mark;

    @NotNull
    private String model;

    @NotNull
    private String rate;

    @NotNull
    private Double price;

    @Column(name = "is_rented")
    private Boolean isRented;

}
