import { Reducer } from 'redux';
import { ColorInterface, newColorData, newShapeData, ShapeInterface } from '../../data';

export interface FilterStateInterface {
  colors: ColorInterface[];
  shapes: ShapeInterface[];
}

const initialState: FilterStateInterface = {
  colors: newColorData,
  shapes: newShapeData,
};

const filterReducer: Reducer<FilterStateInterface> = (state = initialState, action) => {
  switch (action.type) {
    case 'toggleColor': {
      const currentColors = [...state.colors];
      const numberOfUnselecteds = state.colors.filter((color) => color.selected).length;
      const selectedColorCurrentState = currentColors.find((color) => color.color === action.payload);

      if (selectedColorCurrentState) {
        if (numberOfUnselecteds === 1 && selectedColorCurrentState.selected) {
          currentColors.forEach((color) => {
            // eslint-disable-next-line no-param-reassign
            color.selected = true;
          });
          return {
            ...state,
            colors: currentColors,
          };
        }
        selectedColorCurrentState.selected = !selectedColorCurrentState.selected;
        return {
          ...state,
          colors: currentColors,
        };
      }
      return {
        ...state,
      };
    }
    case 'toggleShape': {
      const currentShapes = [...state.shapes];
      const numberOfUnselecteds = state.shapes.filter((shape) => shape.selected).length;
      const selectedShapeCurrentState = currentShapes.find((shape) => shape.shape === action.payload);

      if (selectedShapeCurrentState) {
        if (numberOfUnselecteds === 1 && selectedShapeCurrentState.selected) {
          currentShapes.forEach((shape) => {
            // eslint-disable-next-line no-param-reassign
            shape.selected = true;
          });
          return {
            ...state,
            shapes: currentShapes,
          };
        }
        selectedShapeCurrentState.selected = !selectedShapeCurrentState?.selected;
        return {
          ...state,
          shapes: currentShapes,
        };
      }
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default filterReducer;