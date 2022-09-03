import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorSelectorComponent } from './color-selector.component';

@NgModule({
  declarations: [ColorSelectorComponent],
  imports: [CommonModule],
  exports: [ColorSelectorComponent],
})
export class ColorSelectorModule {}
