// import { CSSProperties } from 'react';
import {
  observable,
  action,
  // observe,
  // toJS,
  // autorun,
  computed
} from 'mobx';

import { ITransform } from '../types/Transform';

class Transform implements ITransform {
  @observable scale: number;
  @observable rotate: number;
  @observable translateX: number;
  @observable translateY: number;
  @observable skewX: number;
  @observable skewY: number;
  @observable transformOriginX: number;
  @observable transformOriginY: number;

  constructor() {
    this.scale = 1;
    this.rotate = 0;
    this.translateX = 0;
    this.translateY = 0;
    this.skewX = 0;
    this.skewY = 0;
    this.transformOriginX = 50;
    this.transformOriginY = 50;
  }

  @action
  setScale = (value: number) => {
    this.scale = value;
  }

  @action
  setRotate = (value: number) => {
    this.rotate = value;
  }

  @action
  setTranslateX = (value: number) => {
    this.translateX = value;
  }

  @action
  setTranslateY = (value: number) => {
    this.translateY = value;
  }

  @action
  setSkewX = (value: number) => {
    this.skewX = value;
  }

  @action
  setSkewY = (value: number) => {
    this.skewY = value;
  }

  @action
  setTransformOriginX = (value: number) => {
    this.transformOriginX = value;
  }

  @action
  setTransformOriginY = (value: number) => {
    this.transformOriginY = value;
  }

  @action
  setDefaultValue = () => {
    this.scale = 1;
    this.rotate = 0;
    this.translateX = 0;
    this.translateY = 0;
    this.skewX = 0;
    this.skewY = 0;
    this.transformOriginX = 50;
    this.transformOriginY = 50;
  }

  @computed get
    renderCss(): { [x: string]: string } {
    const { scale, rotate, translateX, translateY, skewX, skewY } = this;
    let cssTransform = '';
    let cssScale = scale !== 1 ? `scale(${scale})` : '';
    let cssRotate = rotate ? `rotate(${rotate}deg)` : '';
    let cssTranslate = translateX || translateY ? `translate(${translateX}px,${translateY}px)` : '';
    let cssSkew = skewX || skewY ? `skew(${skewX}deg,${skewY}deg)` : '';
    cssTransform = cssScale + cssRotate + cssTranslate + cssSkew;

    let cssTransformOrigin = '';
    const { transformOriginX, transformOriginY } = this;
    cssTransformOrigin = transformOriginX !== 50 ||
      transformOriginY !== 50 ? `${transformOriginX + '%'} ${transformOriginY + '%'}` : '';

    return {
      transform: cssTransform,
      transformOrigin: cssTransformOrigin,
    };
  }

}
const transformStore = new Transform();

export default transformStore;
