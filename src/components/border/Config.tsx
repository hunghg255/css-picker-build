import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { Card, RangeSlider, FormLayout, Button } from '@shopify/polaris';
import { IPosition, TClassBorder } from '../../types/Border';
import ColorPicker from '../helper/ColorPicker';
import { defaultPos, defaultStyle } from '../../stores/border';
import styles from './border.module.scss';
import BorderRadius from './Radius';

const Config: React.FC<TClassBorder> = ({ borderState }) => {
  const {
    width,
    style,
    color,
    setColor,
    setPosition,
    setStyle,
    setWidth,
    reset,
  } = borderState;
  const [optionPos, setOptionPos] = useState<number>(0);
  const [optionStyle, setOptionStyle] = useState<number>(0);

  const handlePos = (index: number, borderObject: IPosition) => {
    setOptionPos(index);
    setPosition(borderObject)
  }

  const handleStyle = (index: number, style: string) => {
    setOptionStyle(index);
    setStyle(style)
  }

  const {
    buttonOption,
    active1,
    inlineWrapper,

  } = styles;

  return (
    <>
      <Card.Section>
        <FormLayout>
          <RangeSlider
            label="Width"
            value={width}
            onChange={(value) => setWidth(value as number)}
            min={1}
            max={30}
            output
          />
          <label>Color</label>
          <ColorPicker color={color} setColor={setColor} />
          <label>Style</label>
          <div className={inlineWrapper}>
            {defaultStyle.map((style, index) => { /** Không nên kiểu className={..1 đống tính toán} */
                const active:string = optionStyle === index ? active1 : '';
                const classBorder:string = `${buttonOption} ${active}`;
                const styleBorder:React.CSSProperties = {
                  border: `5px ${style} ${color}`
                };
                return <div
                  key={index}
                  className={classBorder}
                  style={styleBorder}
                  onClick={() => handleStyle(index, style)}
                >
                <p>{style}</p>
              </div>
              })}
          </div>
          <label>Position</label>
          <div className={inlineWrapper}>
            {defaultPos.map((borderObject: IPosition, index) => {
              const { title, borderType } = borderObject;
              const idPos:string = `btn-${index}`;
              const stylePosition:string = `
                #${idPos} {
                  ${borderType}: 5px ${style} ${color}
                }`;
              const active:string = optionPos === index ? active1 : '';
              const classPos = `${buttonOption} ${active}`;

              return (
                <React.Fragment key={index}>
                  <style>{stylePosition}</style>
                  <div
                    key={index}
                    id={idPos}
                    className={classPos}
                    onClick={() => handlePos(index, borderObject)}
                  >
                    {title}
                  </div>
                </React.Fragment>
              )
            })}
          </div>
          <BorderRadius borderState={borderState} />
          <Button onClick={() => reset()}>Reset</Button>
        </FormLayout>
      </Card.Section>
    </>
  )
}

export default (observer(Config));
