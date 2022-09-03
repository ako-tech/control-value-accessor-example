import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { Color, Product } from './model';

type OrderForm = FormGroup<{
  quantity: FormControl<number>;
  color: FormControl<Color>;
}>;

@Component({
  selector: 'ako-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;

  orderForm!: OrderForm;

  colorSelectedDisplayName$!: Observable<string>;
  imageColoredSrc$!: Observable<string>;

  constructor(private fb: NonNullableFormBuilder) {}

  ngOnInit(): void {
    if (!this.product) {
      throw Error('ProductComponent:ngOnInit -- the product info is required');
    }

    const defaultColor = this.product.colors[0];
    this.initForm(defaultColor);
  }

  private initForm(defaultColor: Color): void {
    this.orderForm = this.fb.group({
      quantity: [1, Validators.required],
      color: [defaultColor, Validators.required],
    });

    this.initFormDependantObservables(defaultColor);
  }

  private initFormDependantObservables(defaultColor: Color): void {
    const baseImgSrc = 'assets/images/products';
    const colorSelected$ = this.orderForm.controls.color.valueChanges.pipe(
      startWith(defaultColor)
    );

    this.colorSelectedDisplayName$ = colorSelected$.pipe(
      map((color) => color.displayName)
    );

    this.imageColoredSrc$ = colorSelected$.pipe(
      map(
        (color) =>
          `${baseImgSrc}/${this.product.id}/${this.product.id}-${color.code}.jpg`
      )
    );
  }

  toggleDisabled(): void {
    const control = this.orderForm;
    control.disabled ? control.enable() : control.disable();
  }
}
