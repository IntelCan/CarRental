package org.CarRental.model.dto;

import lombok.Getter;
import lombok.Setter;

/**
 * Created by intelcan on 15.05.17.
 */
public class CustomerDTO {

    @Getter @Setter
    private Long id;

    @Getter @Setter
    private String name;

    @Getter @Setter
    private String surname;

    @Getter @Setter
    private String identityCard;

    public CustomerDTO(Long id, String name, String surname, String identityCard) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.identityCard = identityCard;
    }
}
