import { Component, Input } from '@angular/core';
import { ColorData } from './color-data.interface';

@Component({
  selector: 'ako-color-selector',
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.scss'],
})
export class ColorSelectorComponent {
  @Input() options: ColorData[] = [];

  colorSelected: ColorData | null = null;

  constructor() {}

  selectColor(color: ColorData): void {
    this.colorSelected = color;
  }
}
