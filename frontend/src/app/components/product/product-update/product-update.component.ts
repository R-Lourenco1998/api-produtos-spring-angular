import { Product } from './../product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css'],
})
export class ProductUpdateComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  product: Product = {
    name: '',
    price: null!,
  };
  // https://youtu.be/lU6UoAhaLbY?list=PLdPPE0hUkt0rPyAkdhHIIquKbwrGUkvw3&t=289 parei aqui

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(id!).subscribe((product) => {
      this.product = product;
    });
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage(`O produto ${this.product.name} foi atualizado com sucesso`);
      this.router.navigate(['/products']);
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}

//https://www.youtube.com/watch?v=QrOsR6s_-Mc&list=PLdPPE0hUkt0rPyAkdhHIIquKbwrGUkvw3&index=26
