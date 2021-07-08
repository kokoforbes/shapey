import React from 'react'
import './View.scss'
import { connect } from 'react-redux';
import { ColorInterface, ShapeInterface } from '../../data';
import useItemLabel from '../../utils/title';
import { ApplicationState } from '../../state/root.reducer';


interface FiltersProps {
  colors: ColorInterface[];
  shapes: ShapeInterface[];
}

const View = (props: FiltersProps) => {

  const { colors, shapes } = props;
  const title = useItemLabel(colors, shapes);
  const length = selectedLength(colors, shapes)

  return (
    <div className='view'>
      <h3>{title} items. ({length})</h3>

      <div className='cards'>
        {shapes.map((shapeObject) =>
          shapeObject.selected
            ? colors.map((colorObject) =>
                colorObject.selected ? (
                  <div key={`${shapeObject.shape} ${colorObject.color}`} className='card'>
                    <div className={`${shapeObject.shape} ${colorObject.color} object`} />
                  </div>
                ) : null,
              )
            : null,
        )}
      </div>
    </div>
  )
}

const selectedLength = (colors: ColorInterface[], shapes: ShapeInterface[]) => {
  const selectedColors = colors.filter((color) => color.selected);
  const selectedShapes = shapes.filter((shape) => shape.selected);
  return selectedColors.length * selectedShapes.length
}


const mapStateToProps = (state: ApplicationState) => ({
  colors: state.filter.colors,
  shapes: state.filter.shapes,
});

export default connect(mapStateToProps)(View);
