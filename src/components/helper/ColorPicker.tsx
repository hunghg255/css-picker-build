import * as React from 'react';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import {
  SketchPicker,
} from 'react-color';

import styles from './colorPicker.module.scss';

interface IColorPicker {
  color: string;
  setColor: (setColor: string) => void;
}

@observer
class ColorPicker extends React.Component<IColorPicker> {
  @observable displayColorPicker: boolean = false;

  changeDisplay = () => {
    const { displayColorPicker } = this;
    this.displayColorPicker = !displayColorPicker;
  };

  render() {
    const { color, setColor } = this.props;
    const { displayColorPicker } = this;
    return (
      <>
        <div
          className={styles.currentColor}
          onClick={this.changeDisplay}
        >
          <span style={{ backgroundColor: color }} />
        </div>
        {displayColorPicker ? (
          <div className={styles.popover}>
            <div
              className={styles.cover}
              onClick={this.changeDisplay}
            />
            <SketchPicker
              color={color!}
              onChange={({ hex }) => setColor(hex)}
            />
          </div>
        ) : null }
      </>
    );
  }
}

export default ColorPicker;
