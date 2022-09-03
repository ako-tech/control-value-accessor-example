import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ColorSelectorModule } from '../color-selector/color-selector.module';

@NgModule({
  declarations: [ProductComponent],
  imports: [CommonModule, ReactiveFormsModule, ColorSelectorModule],
  exports: [ProductComponent],
})
export class ProductsModule {}
