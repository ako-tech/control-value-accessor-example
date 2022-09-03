import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ColorData } from './color-data.interface';

@Component({
  selector: 'ako-color-selector',
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ColorSelectorComponent),
      multi: true,
    },
  ],
})
export class ColorSelectorComponent implements ControlValueAccessor {
  @Input() options: ColorData[] = [];

  colorSelected: ColorData | null = null;
  isDisabled = false;
  onChangeCb?: (color: ColorData) => void;
  onTouchedCb?: () => void;

  constructor() {}

  selectColor(color: ColorData): void {
    this.colorSelected = color;

    this.onChangeCb?.(color);
  }

  writeValue(color: ColorData): void {
    this.colorSelected = color;
  }
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }
}
