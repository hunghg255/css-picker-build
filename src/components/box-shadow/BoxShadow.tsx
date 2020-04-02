import React, { Component } from 'react'
import { observer } from 'mobx-react';

import {
  Card,
  FormLayout,
  RangeSlider,
  Checkbox,
} from '@shopify/polaris';
import {
  TBoxShadow,
} from '../../types/BoxShadow';
import ColorPicker from '../helper/ColorPicker';
import Layer from '../helper/Layer';

@observer
class BoxShadow extends Component<TBoxShadow> {
  render() {
    const { shadow } = this.props;
    const {
      shiftRight,
      setShiftRight,
      shiftDown,
      setShiftDown,
      spread,
      setSpread,
      blur,
      setBlur,
      opacity,
      setOpacity,
      inset,
      setInset,
    } = shadow;

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
              label="Spread"
              value={spread!}
              onChange={(value) => setSpread(value as number)}
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

            <Checkbox
              label="Inset"
              checked={inset}
              onChange={(value) => setInset(value as boolean)}
            />
            <ColorPicker color={shadow.color} setColor={shadow.setColor} />
          </FormLayout>
        </Card.Section>
        <Card.Section>
          <Layer
            currentId={shadow.id}
            addLayer={shadow.addLayer}
            deleteLayer={shadow.deleteLayer}
            selectLayer={shadow.selectLayer}
            hoverLayer={shadow.hoverLayer}
            layer={shadow.getNewLayer}
            setLayer={shadow.setLayer}
          />
        </Card.Section>
      </>
    )
  }
}

export default BoxShadow;
