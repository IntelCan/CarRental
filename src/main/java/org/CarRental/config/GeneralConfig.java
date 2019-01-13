package org.CarRental.config;

import org.CarRental.model.AppUser;
import org.CarRental.model.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.orm.hibernate4.LocalSessionFactoryBean;

import javax.sql.DataSource;

/**
 * Created by intelcan on 14.05.17.
 */
@Configuration
public class GeneralConfig {
    @Autowired
    private DataSource dataSource;

    @Bean(name = "sessionFactory")
    public LocalSessionFactoryBean hibernate5SessionFactoryBean(){
        LocalSessionFactoryBean localSessionFactoryBean = new LocalSessionFactoryBean();
        localSessionFactoryBean.setDataSource(dataSource);
        localSessionFactoryBean.setAnnotatedClasses(
                Customer.class,
                AppUser.class
        );

        return localSessionFactoryBean;
    }
}
