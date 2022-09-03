export interface Color {
  hex: string;
  displayName: string;
  code: string;
}

export const Colors = {
  DarkGrey: {
    code: 'dark-grey',
    displayName: 'Gris Oscuro',
    hex: '#333333',
  },
  Green: {
    code: 'green',
    displayName: 'Verde',
    hex: '#2aca7a',
  },
  LightBlue: {
    code: 'light-blue',
    displayName: 'Azul Claro',
    hex: '#3badda',
  },
  Pink: {
    code: 'pink',
    displayName: 'Rosa',
    hex: '#e649d6',
  },
  Purple: {
    code: 'purple',
    displayName: 'Morado',
    hex: '#5e00ea',
  },
  Orange: {
    code: 'orange',
    displayName: 'Naranja',
    hex: '#e2622b',
  },
  White: {
    code: 'white',
    displayName: 'Blanco',
    hex: '#ffffff',
  },
  Yellow: {
    code: 'yellow',
    displayName: 'Amarillo',
    hex: '#e6d349',
  },
} as const;
