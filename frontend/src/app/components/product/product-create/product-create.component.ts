import { Product } from './../product.model';
import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null!
  }

  constructor(private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {

  }

  createProduct(): void {
      this.productService.create(this.product).subscribe(() => {
        this.productService.showMessage(`O produto ${this.product.name} foi criado com sucesso`);
        this.router.navigate(['/products'])
      })
  }

  cancel(): void {
    this.router.navigate(['/products'])
}


}

// https://youtu.be/ut3Ht8vxmDw?list=PLdPPE0hUkt0rPyAkdhHIIquKbwrGUkvw3 parei aqui
