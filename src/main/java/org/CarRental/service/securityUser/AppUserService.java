package org.CarRental.service.securityUser;

import org.CarRental.model.AppUser;

public interface AppUserService {

    AppUser loadUserByUsername(String username);

    long post(AppUser appUser);

    AppUser get (long id);

    AppUser patch (AppUser appUser);

    boolean delete(long id);
}