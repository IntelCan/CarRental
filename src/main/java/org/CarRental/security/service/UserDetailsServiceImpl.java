package org.CarRental.security.service;


import org.CarRental.model.AppUser;
import org.CarRental.security.model.SpringSecurityUser;
import org.CarRental.service.securityUser.AppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service(value = "userDetailsService")
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private AppUserService appUserService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
         AppUser userAccount = this.appUserService.loadUserByUsername(username);

        if (userAccount == null) {
            throw new UsernameNotFoundException(String.format("No appUser found with username '%s'.", username));
        } else {
            return new SpringSecurityUser(
                    userAccount.getId(),
                    userAccount.getUsername(),
                    userAccount.getPassword(),
                    null,
                    null,
                    AuthorityUtils.commaSeparatedStringToAuthorityList(userAccount.getAuthorities())
            );
        }
    }

}
