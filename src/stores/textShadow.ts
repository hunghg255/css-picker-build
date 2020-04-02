import { CSSProperties } from 'react';
import {
  toJS,
  computed,
  action,
} from 'mobx';

import {
  IBoxShadow,
  IBoxLayer,
} from '../types/BoxShadow';
import { ILayerItem } from '../types/Layer';
import {
  hexToRgbA,
} from '../helpers/shadow';
import { BoxShadow } from './boxShadow';

class TextShadow extends BoxShadow implements IBoxShadow {
  constructor() {
    super();
  }

  @computed get /** @override */
  renderTextCss():CSSProperties {
    let css = '';
    toJS(this.layer).forEach((item, index) => {
      const { shiftRight, shiftDown, blur, opacity, color } = item;
      const _color = hexToRgbA(color, opacity);
      css += ` ${_color} ${shiftRight}px ${shiftDown}px ${blur}px`;
      if (index !== this.layer.length - 1) {
        css += ',';
      }
    });
    return {
      textShadow: css,
    };
  }

  @computed get /** @override */
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
      const RGBAColor = hexToRgbA(color, opacity);
      return ({
        id: item.id,
        title: ` ${RGBAColor} ${shiftRight}px ${shiftDown}px ${blur}px`,
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

  @action /** @override */
  hoverLayer = (index: number, hide: boolean = false) => {
    const { renderBoxCss } = this;
    if (hide) {
      this.cssLayerCurrent = {};
      return;
    } else {
      let arrCssBox = renderBoxCss.boxShadow?.replace(/^.*:/,'').replace(/;.*$/,'').split(/,(?![^\(]*\))/);
      arrCssBox = arrCssBox?.map((item) => {
        const _item = item.split(' ');
        _item.length = 5;
        return _item.join(' ');
      })
      const resultBoxShadow = arrCssBox![index];
      let currentBoxShadow = resultBoxShadow?.split(' ')!;
      currentBoxShadow[2] = '25px';
      currentBoxShadow[3] = '-25px';
      const itemCss:string = currentBoxShadow.join(' ');
      arrCssBox?.splice(index, 1, itemCss);
      this.cssLayerCurrent = {
        textShadow: arrCssBox!.join(','),
        zIndex: 999,
      }
      return;
    }
  }
}
const textShadow = new TextShadow();

export default textShadow;
