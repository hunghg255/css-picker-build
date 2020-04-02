import React, { Component } from 'react'
import { observer } from 'mobx-react';
import {
  Card,
  FormLayout,
  RangeSlider,
} from '@shopify/polaris';
import {
  TTextShadow
} from '../../types/TextShadow';
import ColorPicker from '../helper/ColorPicker';
// import Layer from '../text-shadow/Layer';
import Layer from '../helper/Layer';

@observer
class TextShadow extends Component<TTextShadow> {
  render() {
    const { textShadow } = this.props;
    const {
      shiftRight,
      setShiftRight,
      shiftDown,
      setShiftDown,
      blur,
      setBlur,
      opacity,
      setOpacity,
    } = textShadow;
    return (
      <>
        <Card.Section>
          <FormLayout>
            <RangeSlider
              label="Shift right"
              value={shiftRight!}
              onChange={(value) => setShiftRight(value as number)}
              min={-50}
              max={50}
              output
            />

            <RangeSlider
              label="Shift down"
              value={shiftDown!}
              onChange={(value) => setShiftDown(value as number)}
              min={-50}
              max={50}
              output
            />

            <RangeSlider
              label="Blur"
              value={blur!}
              onChange={(value) => setBlur(value as number)}
              output
            />

            <RangeSlider
              label="Opacity"
              value={opacity!}
              onChange={(value) => setOpacity(value as number)}
              output
            />

            <ColorPicker color={textShadow.color} setColor={textShadow.setColor} />
          </FormLayout>
        </Card.Section>
        <Card.Section>
          <Layer
            currentId={textShadow.id}
            addLayer={textShadow.addLayer}
            deleteLayer={textShadow.deleteLayer}
            selectLayer={textShadow.selectLayer}
            hoverLayer={textShadow.hoverLayer}
            layer={textShadow.getNewLayer}
            setLayer={textShadow.setLayer}
          />
        </Card.Section>
      </>
    )
  }
}

export default TextShadow;
