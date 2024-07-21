package com.mycompany.myapp.domain;

import static com.mycompany.myapp.domain.CategoryTestSamples.getCategoryRandomSampleGenerator;
import static com.mycompany.myapp.domain.ProductTestSamples.getProductRandomSampleGenerator;
import static com.mycompany.myapp.domain.ProductTestSamples.getProductSample1;
import static com.mycompany.myapp.domain.ProductTestSamples.getProductSample2;
import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;

import com.mycompany.myapp.web.rest.TestUtil;
import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class ProductTest {

    private Product product;

    //Test de unidad
    @BeforeEach
    public void init() {
        product = new Product();
        product.setTitle("producto ejemplo");
        product.setKeywords("ejemplo,producto");
        product.setDescription("esta es la descripcion del producto ejemplo");
        product.setRating(5);
        product.setDateAdded(LocalDate.now());
        product.setDateModified(LocalDate.now());
    }

    //Verifica que los atributos del objeto Product se establecieron correctamente.
    @Test
    public void testProductAttributes() {
        assertEquals("producto ejemplo", product.getTitle());
        assertEquals("ejemplo,producto", product.getKeywords());
        assertEquals("esta es la descripcion del producto ejemplo", product.getDescription());
        assertEquals(5, product.getRating());
        assertEquals(LocalDate.now(), product.getDateAdded());
        assertEquals(LocalDate.now(), product.getDateModified());
    }

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Product.class);
        Product product1 = getProductSample1();
        Product product2 = new Product();
        assertThat(product1).isNotEqualTo(product2);

        product2.setId(product1.getId());
        assertThat(product1).isEqualTo(product2);

        product2 = getProductSample2();
        assertThat(product1).isNotEqualTo(product2);
    }

    @Test
    void categoryTest() {
        Product product = getProductRandomSampleGenerator();
        Category categoryBack = getCategoryRandomSampleGenerator();

        product.addCategory(categoryBack);
        assertThat(product.getCategories()).containsOnly(categoryBack);
        assertThat(categoryBack.getProducts()).containsOnly(product);

        product.removeCategory(categoryBack);
        assertThat(product.getCategories()).doesNotContain(categoryBack);
        assertThat(categoryBack.getProducts()).doesNotContain(product);

        product.categories(new HashSet<>(Set.of(categoryBack)));
        assertThat(product.getCategories()).containsOnly(categoryBack);
        assertThat(categoryBack.getProducts()).containsOnly(product);

        product.setCategories(new HashSet<>());
        assertThat(product.getCategories()).doesNotContain(categoryBack);
        assertThat(categoryBack.getProducts()).doesNotContain(product);
    }
}
