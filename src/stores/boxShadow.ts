import { CSSProperties } from 'react';
import {
  observable,
  action,
  toJS,
  computed
} from 'mobx';
import {
  uuid,
  hexToRgbA,
  calLayler,
} from '../helpers/shadow';

import {
  IBoxShadow,
  IBoxLayer,
} from '../types/BoxShadow';
import { ILayerItem } from '../types/Layer';

class BoxShadow implements IBoxShadow {
  @observable id: string;
  @observable shiftRight: number;
  @observable shiftDown: number;
  @observable spread: number;
  @observable blur: number;
  @observable opacity: number;
  @observable inset: boolean;
  @observable color: string;
  @observable layer: IBoxLayer[];
  @observable cssLayerCurrent?: CSSProperties;
    constructor() {
    this.id = uuid();
    this.shiftRight = 0;
    this.shiftDown = 0;
    this.blur = 5;
    this.spread = 3;
    this.opacity = 20;
    this.inset = false;
    this.color = '#000000';
    this.layer = [
      { /** First Layer is a element of constructor */
        id: this.id,
        shiftRight: this.shiftRight,
        shiftDown: this.shiftDown,
        blur: this.blur,
        spread: this.spread,
        opacity: this.opacity,
        inset: this.inset,
        color: this.color,
      }
    ];

  }

  @computed get
  getNewLayer():(ILayerItem & IBoxLayer)[] {
    const layerJS = toJS(this.layer) as any[];
    return layerJS.map((item) => {
      const {
        shiftRight,
        shiftDown,
        blur,
        spread,
        inset,
        color,
        opacity,
      } = item;
      const isInset:string = inset ? 'inset ' : '';
      const RGBAColor = hexToRgbA(color, opacity);
      return ({
        id: item.id,
        title: `${isInset}${shiftRight}px ${shiftDown}px ${blur}px ${spread}px ${RGBAColor}`,
        shiftRight,
        shiftDown,
        spread,
        blur,
        opacity,
        inset,
        color,
      });
    });
  }

  @action
  hoverLayer = (index: number, hide: boolean = false) => {
    const { renderBoxCss } = this;
    if (hide) {
      this.cssLayerCurrent = {};
      return;
    } else {
      const arrCssBox = renderBoxCss.boxShadow?.replace(/^.*:/,'').replace(/;.*$/,'').split(/,(?![^\(]*\))/);
      const resultBoxShadow = arrCssBox![index];
      let currentBoxShadow = resultBoxShadow?.split(' ')!;
      currentBoxShadow[2] = '25px';
      currentBoxShadow[3] = '-25px';
      const itemCss:string = currentBoxShadow.join(' ');
      arrCssBox?.splice(index, 1, itemCss);
      this.cssLayerCurrent = {
        boxShadow: arrCssBox!.join(','),
        zIndex: 999,
      }
      return;
    }
  }

  @action
  addLayer = (): void => {
    const newLayer: IBoxLayer = {
      id: uuid(),
      shiftRight: 0,
      shiftDown: 0,
      blur: 5,
      spread: 3,
      opacity: 20,
      inset: false,
      color: '#000000'
    };
    this.layer = this.layer.concat(newLayer);
  }

  @action
  changeLayer = (layer:IBoxLayer[]) => {
    this.layer = layer.reverse();
  }

  @action
  selectLayer = (index:number): void => {
    const layerJS = toJS(this.layer) as any[];
    const currentLayer: { [x: string]: any; } = layerJS[index];
    const self: { [x: string]: any; } = this;
    for (const key in currentLayer) {
      if (currentLayer.hasOwnProperty(key)) {
        self[key] = currentLayer[key];
      }
    }
  }

  @action
  deleteLayer = (index: number):void => {
    const layerJS = toJS(this.layer) as any[];
    if (layerJS.length < 2) return;
    layerJS.splice(index, 1);
    this.layer = layerJS;
    this.selectLayer(index - 1);
  }

  @computed get
  renderBoxCss():CSSProperties {
    let css = '';
    toJS(this.layer).forEach((item, index) => {
      const { shiftRight, shiftDown, blur, spread, opacity, inset, color } = item;
      const isInset = inset ? ' inset' : '';
      const _color = hexToRgbA(color, opacity);
      css += `${_color} ${shiftRight}px ${shiftDown}px ${blur}px ${spread}px${isInset}`;
      if (index !== this.layer.length - 1) {
        css += ',';
      }
    });
    return {
      boxShadow: css,
    };
  }

  @action
  setLayer = (layer: (ILayerItem & IBoxLayer)[]): void => {
    const jsLayer = toJS(layer);
    this.layer = jsLayer.map((item) => {
      delete item.title;
      return item;
    });
  }

  @action
  setShiftRight = (ShiftRight: number): void => {
    const { id, layer } = this;
    this.layer = calLayler(
      id,
      {
        shiftRight: ShiftRight
      },
      layer
    )
    this.shiftRight = ShiftRight;
  }

  @action
  setShiftDown = (ShiftDown: number): void => {
    const { id, layer } = this;
    this.layer = calLayler(
      id,
      {
        shiftDown: ShiftDown
      },
      layer
    )
    this.shiftDown = ShiftDown;
  }

  @action
  setSpread = (Spread: number): void => {
    const { id, layer } = this;
    this.layer = calLayler(
      id,
      {
        spread: Spread
      },
      layer
    )
    this.spread = Spread;
  }

  @action
  setBlur = (Blur: number): void => {
    const { id, layer } = this;
    this.layer = calLayler(
      id,
      {
        blur: Blur
      },
      layer
    )
    this.blur = Blur;
  }

  @action
  setOpacity = (Opacity: number): void => {
    const { id, layer } = this;
    this.layer = calLayler(
      id,
      {
        opacity: Opacity
      },
      layer
    )
    this.opacity = Opacity;
  }

  @action
  setInset = (Inset: boolean): void => {
    const { id, layer } = this;
    this.layer = calLayler(
      id,
      {
        inset: Inset
      },
      layer
    )
    this.inset = Inset;
  }

  @action
  setColor = (Color: string): void => {
    const { id, layer } = this;
    this.layer = calLayler(
      id,
      {
        color: Color
      },
      layer
    )
    this.color = Color;
  }
}
const shadow = new BoxShadow();
const TBoxShadow = typeof BoxShadow;

export default shadow;
export { BoxShadow, TBoxShadow }
