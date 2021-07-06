/* eslint-disable no-console */
import { ColorInterface, ShapeInterface } from '../data';

const useItemLabel = (colors: ColorInterface[], shapes: ShapeInterface[]) => {
  const selectedColors = colors.filter((color) => color.selected);
  const selectedShapes = shapes.filter((shape) => shape.selected);

  if (selectedColors.length === colors.length && selectedShapes.length === shapes.length) {
    return 'All';
  }

  // One shape and one color
  if (selectedShapes.length === 1 && selectedColors.length === 1) {
    return `${selectedShapes[0].shape} ${selectedColors[0].color}`;
  }

  // one shape and all colors
  if (selectedColors.length === colors.length && selectedShapes.length === 1) {
    return `All ${selectedShapes[0].shape}`;
  }

  // one color and all shapes
  if (selectedColors.length === 1 && selectedShapes.length === shapes.length) {
    return `All ${selectedColors[0].color}`;
  }

  // multiple shapes and one color
  if (selectedShapes.length > 1 && selectedShapes.length < shapes.length && selectedColors.length === 1) {
    return `Multiple ${selectedColors[0].color}`;
  }

  // multiple colors and one shape
  if (selectedColors.length > 1 && selectedColors.length < colors.length && selectedShapes.length === 1) {
    return `Multiple ${selectedShapes[0].shape}`;
  }
  return 'Multiple';
};

export default useItemLabel;