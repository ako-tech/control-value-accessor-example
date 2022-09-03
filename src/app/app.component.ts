import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Product } from './products/model';
import { Colors } from './products/model/color';

const demoProduct: Product = {
  id: 'cap',
  name: 'Gorra de Béisbol',
  description: `Gorra de béisbol confeccionada 100% en algodón, muy cómoda y elegante.\nAmplia variedad de colores disponibles.`,
  price: 45,
  colors: [
    Colors.White,
    Colors.DarkGrey,
    Colors.Green,
    Colors.LightBlue,
    Colors.Orange,
    Colors.Pink,
    Colors.Yellow,
  ],
};

@Component({
  selector: 'ako-root',
  template: `<ako-product [product]="product"></ako-product>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  product: Product = demoProduct;
}
