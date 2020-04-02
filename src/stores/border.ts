import React from 'react';
import { IPosition, IBorderRadius } from '../types/Border';
import { uuid } from '../helpers/shadow';
import { observable, action, computed } from 'mobx';
class Border implements IBorderRadius {
  @observable id: string;
  @observable width: number;
  @observable style: string;
  @observable color: string;
  @observable position: IPosition;
  @observable tleft: number;
  @observable tright: number;
  @observable bleft: number;
  @observable bright: number;
  @observable allCorners: number;

  constructor() {
    this.id = uuid();
    this.width = 5;
    this.style = 'solid';
    this.color = '#1C6EA4';
    this.position = {
      title: "ALL",
      borderType: "border",
    };
    this.allCorners = 0;
    this.tleft = 0;
    this.tright = 0;
    this.bleft = 0;
    this.bright = 0;
  }

  @action
  reset = () => {
    this.width = 5;
    this.style = 'solid';
    this.color = '#1C6EA4';
    this.position = {
      title: "ALL",
      borderType: "border",
    };
    this.allCorners = 0;
    this.tleft = 0;
    this.tright = 0;
    this.bleft = 0;
    this.bright = 0;
  }

  @action
  setWidth = (width: number): void => {
    this.width = width;
  }

  @action
  setStyle = (style: string): void => {
    this.style = style;
  }
  @action
  setPosition = (position: IPosition): void => {
    this.position = position;
  }
  @action
  setColor = (color: string) => {
    this.color = color;
  }

  @action
  setALlCorners = (radius: number) => {
    this.allCorners = this.tleft = this.tright = this.bleft = this.bright = radius;
  }
  @action
  setTLeft = (tleft: number):void => {
    this.tleft = tleft;
  }
  setTRight = (tright: number):void => {
    this.tright = tright;
  }
  @action
  setBLeft = (bleft: number): void => {
    this.bleft = bleft;
  }
  @action
  setBRight = (bright: number): void => {
    this.bright = bright;
  }

  @computed get borderComputed (): React.CSSProperties {
    return {
      [this.position.borderType]: `${this.width}px ${this.style} ${this.color}`,
    }
  }

  @computed get BorderRadius (): React.CSSProperties {
    return {
      borderRadius: `${this.tleft}px ${this.tright}px ${this.bright}px ${this.bleft}px`
    }
  }
}

const border = new Border();
export default border;

export const defaultPos: IPosition[] = [
  {
    title: 'All',
    borderType: 'border'
  },
  {
    title: 'Top',
    borderType: 'border-top',
  },
  {
    title: 'Right',
    borderType: 'border-right',
  },
  {
    title: 'Bottom',
    borderType: 'border-bottom',
  },
  {
    title: 'Left',
    borderType: 'border-left',
  },
];

export const defaultStyle: string[] = [
  'solid',
  'dotted',
  'dashed',
  'double',
  'groove',
  'ridge',
  'inset',
  'outset',
]
