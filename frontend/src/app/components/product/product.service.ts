import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private SnackBar: MatSnackBar) { }


  ShowMessage(msg: string){
    this.SnackBar.open(msg, "X",{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ['grenn-snackBar']
    })
  }
}
