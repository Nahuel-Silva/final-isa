package com.mycompany.myapp.domain;

import static org.assertj.core.api.Assertions.assertThat;

public class ProductAsserts {

    /**
     * Asserts that the entity has all properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertProductAllPropertiesEquals(Product expected, Product actual) {
        assertProductAutoGeneratedPropertiesEquals(expected, actual);
        assertProductAllUpdatablePropertiesEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all updatable properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertProductAllUpdatablePropertiesEquals(Product expected, Product actual) {
        assertProductUpdatableFieldsEquals(expected, actual);
        assertProductUpdatableRelationshipsEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all the auto generated properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertProductAutoGeneratedPropertiesEquals(Product expected, Product actual) {
        assertThat(expected)
            .as("Verify Product auto generated properties")
            .satisfies(e -> assertThat(e.getId()).as("check id").isEqualTo(actual.getId()));
    }

    /**
     * Asserts that the entity has all the updatable fields set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertProductUpdatableFieldsEquals(Product expected, Product actual) {
        assertThat(expected)
            .as("Verify Product relevant properties")
            .satisfies(e -> assertThat(e.getTitle()).as("check title").isEqualTo(actual.getTitle()))
            .satisfies(e -> assertThat(e.getKeywords()).as("check keywords").isEqualTo(actual.getKeywords()))
            .satisfies(e -> assertThat(e.getDescription()).as("check description").isEqualTo(actual.getDescription()))
            .satisfies(e -> assertThat(e.getRating()).as("check rating").isEqualTo(actual.getRating()))
            .satisfies(e -> assertThat(e.getDateAdded()).as("check dateAdded").isEqualTo(actual.getDateAdded()))
            .satisfies(e -> assertThat(e.getDateModified()).as("check dateModified").isEqualTo(actual.getDateModified()));
    }

    /**
     * Asserts that the entity has all the updatable relationships set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertProductUpdatableRelationshipsEquals(Product expected, Product actual) {
        assertThat(expected)
            .as("Verify Product relationships")
            .satisfies(e -> assertThat(e.getCategories()).as("check categories").isEqualTo(actual.getCategories()));
    }
}
