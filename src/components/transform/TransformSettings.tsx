import React, { Component } from 'react';
import { observer } from 'mobx-react';

import {
  Card,
  Button,
  FormLayout,
  RangeSlider,
} from '@shopify/polaris';

import { TTransform } from '../../types/Transform';

@observer
class TransformSettings extends Component<TTransform> {
  render() {
    const { transformStore } = this.props;
    const {
      scale,
      rotate,
      translateX,
      translateY,
      skewX,
      skewY,
      transformOriginX,
      transformOriginY,
      setScale,
      setRotate,
      setTranslateX,
      setTranslateY,
      setSkewX,
      setSkewY,
      setTransformOriginX,
      setTransformOriginY,
      setDefaultValue,
    } = transformStore;
    return (
      <>
        <Card.Section>
          <FormLayout>
            <RangeSlider
              label='Scale (x)'
              value={scale}
              onChange={(value) => setScale(value as number)}
              min={0}
              max={2}
              step={0.1}
              output
            />

            <RangeSlider
              label='Rotate (deg)'
              value={rotate}
              onChange={(value) => setRotate(value as number)}
              min={0}
              max={360}
              output
            />

            <RangeSlider
              label='TranslateX (px)'
              value={translateX}
              onChange={(value) => setTranslateX(value as number)}
              min={-100}
              max={100}
              output
            />

            <RangeSlider
              label='TranslateY (px)'
              value={translateY}
              onChange={(value) => setTranslateY(value as number)}
              min={-100}
              max={100}
              output
            />

            <RangeSlider
              label='SkewX (deg)'
              value={skewX}
              onChange={(value) => setSkewX(value as number)}
              min={-90}
              max={90}
              output
            />

            <RangeSlider
              label='SkewY (deg)'
              value={skewY}
              onChange={(value) => setSkewY(value as number)}
              min={-90}
              max={90}
              output
            />

            <RangeSlider
              label='Transform origin X (%)'
              value={transformOriginX}
              onChange={(value) => setTransformOriginX(value as number)}
              min={-50}
              max={150}
              output
            />

            <RangeSlider
              label='Transform origin Y (%)'
              value={transformOriginY}
              onChange={(value) => setTransformOriginY(value as number)}
              min={-50}
              max={150}
              output
            />
          </FormLayout>
        </Card.Section>
        <Card.Section>
          <Button onClick={setDefaultValue}>Reset default</Button>
        </Card.Section>
      </>
    )
  }
};

export default TransformSettings;
