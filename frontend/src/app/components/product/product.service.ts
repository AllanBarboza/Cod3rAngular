import { Product } from './product.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:3001/products'
  constructor(private SnackBar: MatSnackBar, private http: HttpClient) { }


  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product)
  }
  ShowMessage(msg: string) {
    this.SnackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ['grenn-snackBar']
    })
  }

}
