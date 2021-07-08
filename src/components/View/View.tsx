import React from 'react'
import styles from './View.module.scss'
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

  return (
    <div className={styles.view}>
      <h3>{title} items. (9)</h3>

      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.object}>1</div>
        </div>

        {shapes.map((shapeObject) =>
          shapeObject.selected
            ? colors.map((colorObject) =>
                colorObject.selected ? (
                  <div key={`${shapeObject.shape} ${colorObject.color}`}>
                    <div className={`${shapeObject.shape} ${colorObject.color} item`} />
                  </div>
                ) : null,
              )
            : null,
        )}
      </div>
    </div>
  )
}

const mapStateToProps = (state: ApplicationState) => ({
  colors: state.filter.colors,
  shapes: state.filter.shapes,
});

export default connect(mapStateToProps)(View);
