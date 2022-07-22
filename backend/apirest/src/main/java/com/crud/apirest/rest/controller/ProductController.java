package com.crud.apirest.rest.controller;

import com.crud.apirest.domain.entity.Product;
import com.crud.apirest.domain.repository.Products;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {

    @Autowired
    private Products productsRepository;

    @GetMapping
    public List<Product> getAll(){
        return productsRepository.findAll();
    }

    @GetMapping("{id}")
    public Product getProductById(@PathVariable Integer id){
        return productsRepository
                .findById(id)
                .orElseThrow(() ->
                        new ResponseStatusException(HttpStatus.NOT_FOUND,
                                "Produto não encontrado"));
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Product save (@RequestBody Product product) {
        return productsRepository.save(product);
    }

    @PutMapping("{id}")
    public void update(@PathVariable Integer id, @RequestBody Product product){
        productsRepository
                .findById(id)
                .map(existingProduct -> {
                  product.setId(existingProduct.getId());
                  productsRepository.save(product);
                  return existingProduct;
                }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
                        "Produto não encontrado"));
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Integer id){
        productsRepository.deleteById(id);
    }
}