import TextShadow from '../stores/textShadow';

export interface ITextShadow {
  id: string;
  shiftRight?: number;
  shiftDown?: number;
  blur?: number;
  opacity?: number;
  color?: string;
}

export interface ITextLayer {
  id: string;
  shiftRight: number;
  shiftDown: number;
  blur: number;
  opacity: number;
  color: string;
}

export type TTextShadow = {
  textShadow: typeof TextShadow;
};
