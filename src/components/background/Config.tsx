import * as React from 'react';
import { RangeSlider, Checkbox } from '@shopify/polaris';
import { observer } from 'mobx-react';

interface IConfig {
  opacity: number;
  changeOpacity: (value:number) => void;
  animation: boolean;
  changeAnimation: (value: boolean) => void;
}

@observer
class Config extends React.Component<IConfig> {
  render() {
    const { 
      opacity, 
      changeOpacity,
      animation,
      changeAnimation,
    } = this.props;
    return <>
      <RangeSlider 
        label="Opacity texture"
        value={opacity}
        onChange={(value) => changeOpacity(value as number)}
        min={0}
        max={100}
        output
      />

      <Checkbox
        label="Animation texture?"
        checked={animation}
        onChange={(value) => changeAnimation(value)}
      />
    </>
  }
}

export default Config;