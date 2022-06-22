import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductFormDialogComponent } from './components/product-form-dialog/product-form-dialog.component';
import { Product } from './models/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  products: Product[] = []

  constructor(
    private dialog: MatDialog
  ) {}

  openProductFormDialog() {
    const dialogRef = this.dialog.open(ProductFormDialogComponent)
    dialogRef.afterClosed().subscribe(
      value => {
        if (value) {
          this.products.push(value)
        }
      }
    )
  }
}
