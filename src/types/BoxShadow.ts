import BoxShadow from '../stores/boxShadow';

interface IboxLayerGlobal {
  shiftRight: number;
  shiftDown: number;
  spread: number;
  blur: number;
  opacity: number;
  inset: boolean;
  color: string;
}

export type IBoxShadow = {
  id: string;
} & Partial<IboxLayerGlobal>;

export type IBoxLayer = {
  id: string;
} & IboxLayerGlobal;

export type TBoxShadow = {
  shadow: typeof BoxShadow;
};
