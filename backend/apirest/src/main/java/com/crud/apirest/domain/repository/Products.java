package com.crud.apirest.domain.repository;

import com.crud.apirest.domain.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Products extends JpaRepository<Product, Integer> {
}