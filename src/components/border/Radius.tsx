import React from 'react';
import { observer } from 'mobx-react';
import { RangeSlider, FormLayout } from '@shopify/polaris';
import { TClassBorder } from '../../types/Border';

const Radius: React.FC<TClassBorder> = ({ borderState }) => {
  const {
    tleft,
    tright,
    bleft,
    bright,
    allCorners,
    setBLeft,
    setBRight,
    setTLeft,
    setTRight,
    setALlCorners,
  } = borderState;
  return (
    <>
      <label>Border Radius</label>
      <FormLayout>
        <RangeSlider
          label="All corners"
          value={allCorners}
          onChange={(value) => setALlCorners(value as number)}
          min={1}
          max={200}
          output
        />
        <RangeSlider
          label="Top left"
          value={tleft}
          onChange={(value) => setTLeft(value as number)}
          min={1}
          max={200}
          output
        />
        <RangeSlider
          label="Top right"
          value={tright}
          onChange={(value) => setTRight(value as number)}
          min={1}
          max={200}
          output
        />
        <RangeSlider
          label="Bottom right"
          value={bright}
          onChange={(value) => setBRight(value as number)}
          min={1}
          max={200}
          output
        />
        <RangeSlider
          label="Bottom Left"
          value={bleft}
          onChange={(value) => setBLeft(value as number)}
          min={1}
          max={200}
          output
        />
      </FormLayout>
    </>
  )
}

export default observer(Radius);
