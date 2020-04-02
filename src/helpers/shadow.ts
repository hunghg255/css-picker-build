import { toJS } from 'mobx';
import { IBoxLayer } from '../types/BoxShadow';
export const uuid = ():string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

export function hexToRgbA(hex:string, opacity: number):string{
  let c: any;
  if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
      c= hex.substring(1).split('');
      if(c.length== 3){
          c= [c[0], c[0], c[1], c[1], c[2], c[2]];
      }
      c= '0x'+c.join('');
      return 'rgba('+[(c>>16)&255, (c>>8)&255, c&255].join(',')+`,${opacity / 100})`;
  }
  throw new Error('Bad Hex ' + hex);
}


export function calLayler(id: string, objUpdate: Partial<IBoxLayer>, layer: any[]):IBoxLayer[] {
  const layerJS = toJS(layer);
  for (const [index, item] of layerJS.entries()) {
    if (id === item.id) {
      layerJS[index] = {...layer[index], ...objUpdate};
    }
    delete layerJS[index].layer;
  }
  return layerJS;
}