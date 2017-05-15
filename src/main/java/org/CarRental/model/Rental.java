package org.CarRental.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by intelcan on 14.05.17.
 */
@Entity
@Table(name = "rental")
public class Rental {

    @Getter
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Getter @Setter
    private int idCustomer;

    @Getter @Setter
    private int idCar;

    @Getter @Setter
    private Date rentalDate;

    @Getter @Setter
    private int timeRent;
    // / time in hours



}
