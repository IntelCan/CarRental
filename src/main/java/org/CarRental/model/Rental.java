package org.CarRental.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by intelcan on 14.05.17.
 */
@Entity
@Data
@Table(name = "rental")
public class Rental {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int idCustomer;

    private int idCar;

    private Date rentalDate;

    private int timeRent;



}
