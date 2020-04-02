import TransformStore from '../stores/Transform';

export interface ITransform {
  scale: number;
  rotate: number;
  translateX: number;
  translateY: number;
  skewX: number;
  skewY: number;
  transformOriginX: number;
  transformOriginY: number;
  setScale: (value: number) => void;
  setRotate: (value: number) => void;
  setTranslateX: (value: number) => void;
  setTranslateY: (value: number) => void;
  setSkewX: (value: number) => void;
  setSkewY: (value: number) => void;
  setTransformOriginX: (value: number) => void;
  setTransformOriginY: (value: number) => void;
  setDefaultValue: () => void;
}

export type TTransform = {
  transformStore: typeof TransformStore;
};
