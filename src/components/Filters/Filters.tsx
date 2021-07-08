import React from "react";
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ColorInterface, ShapeInterface } from '../../data';
import { toggleColor, toggleShape } from '../../state/filter/filter.actions';
import { ApplicationState } from '../../state/root.reducer';
import styles from "./Filters.module.scss";



interface FiltersProps {
  colors: ColorInterface[];
  shapes: ShapeInterface[];
  toggleColorAction: (color: string) => void;
  toggleShapeAction: (shape: string) => void;
}

const Filters = (props: FiltersProps) => {

  const { colors, shapes, toggleColorAction, toggleShapeAction } = props;

  const colorToggle = (color: string) => {
    toggleColorAction(color);
  };

  const shapeToggle = (shape: string) => {
    toggleShapeAction(shape);
  };


  return (
    <div className='filters'>
      <h2>Filters</h2>

      <section className={styles.shapes}>
        <h4 className='text-blue'>Shapes</h4>

        <div className='row'>
          {shapes.map((shapeObject) => (
            <button
              type="button"
              className={shapeObject.selected ? 'active' : ''}
              key={shapeObject.shape}
              onClick={() => shapeToggle(shapeObject.shape)}
            >
              {shapeObject.shape}
            </button>
          ))}
        </div>
      </section>

      <section className={styles.colors}>
        <h4 className='text-blue'>Colors</h4>
        <div className='row'>
          <div className={styles.circle}></div>
          {colors.map((colorObject) => (
            <span
              role="button"
              tabIndex={0}
              aria-label="color"
              key={colorObject.color}
              className={`${colorObject.selected ? 'active' : ''} ${colorObject.color}`}
              onKeyDown={() => colorToggle(colorObject.color)}
              onClick={() => colorToggle(colorObject.color)}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = (state: ApplicationState) => ({
  colors: state.filter.colors,
  shapes: state.filter.shapes,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleColorAction: (color: string) => dispatch(toggleColor(color)),
  toggleShapeAction: (shape: string) => dispatch(toggleShape(shape)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
