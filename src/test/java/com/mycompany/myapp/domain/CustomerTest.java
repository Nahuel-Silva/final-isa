package com.mycompany.myapp.domain;

import static com.mycompany.myapp.domain.AddressTestSamples.*;
import static com.mycompany.myapp.domain.CustomerTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;

import com.mycompany.myapp.web.rest.TestUtil;
import java.util.HashSet;
import java.util.Set;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class CustomerTest {

    private Customer customer;

    @BeforeEach
    public void init() {
        customer = new Customer();
        customer.setFirstName("Pedro");
        customer.setLastName("Picapiedra");
        customer.setEmail("Pedro@gmail.com");
        customer.setTelephone("5555555");
    }

    @Test
    public void testCustomerAttributes() {
        assertEquals("Pedro", customer.getFirstName());
        assertEquals("Picapiedra", customer.getLastName());
        assertEquals("Pedro@gmail.com", customer.getEmail());
        assertEquals("5555555", customer.getTelephone());
    }

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Customer.class);
        Customer customer1 = getCustomerSample1();
        Customer customer2 = new Customer();
        assertThat(customer1).isNotEqualTo(customer2);

        customer2.setId(customer1.getId());
        assertThat(customer1).isEqualTo(customer2);

        customer2 = getCustomerSample2();
        assertThat(customer1).isNotEqualTo(customer2);
    }

    @Test
    void addressTest() {
        Customer customer = getCustomerRandomSampleGenerator();
        Address addressBack = getAddressRandomSampleGenerator();

        customer.addAddress(addressBack);
        assertThat(customer.getAddresses()).containsOnly(addressBack);
        assertThat(addressBack.getCustomer()).isEqualTo(customer);

        customer.removeAddress(addressBack);
        assertThat(customer.getAddresses()).doesNotContain(addressBack);
        assertThat(addressBack.getCustomer()).isNull();

        customer.addresses(new HashSet<>(Set.of(addressBack)));
        assertThat(customer.getAddresses()).containsOnly(addressBack);
        assertThat(addressBack.getCustomer()).isEqualTo(customer);

        customer.setAddresses(new HashSet<>());
        assertThat(customer.getAddresses()).doesNotContain(addressBack);
        assertThat(addressBack.getCustomer()).isNull();
    }
}
