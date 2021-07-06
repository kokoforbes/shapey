
export interface ShapeInterface {
  shape: string;
  selected: boolean;
}

export interface ColorInterface {
  color: string;
  selected: boolean;
}

export const newShapeData: ShapeInterface[] = [
  {
    shape: 'oval',
    selected: true,
  },
  {
    shape: 'round',
    selected: true,
  },
  {
    shape: 'triangle',
    selected: true,
  },
  
  {
    shape: 'square',
    selected: true,
  },
  {
    shape: 'rectangle',
    selected: true,
  },
];

export const newColorData: ColorInterface[] = [
  {
    color: 'red',
    selected: true,
  },
  {
    color: 'blue',
    selected: true,
  },
  {
    color: 'green',
    selected: true,
  },
  {
    color: 'yellow',
    selected: true,
  },
  {
    color: 'lightblue',
    selected: true,
  },
  {
    color: 'grey',
    selected: true,
  },
];
