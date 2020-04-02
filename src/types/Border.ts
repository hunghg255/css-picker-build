import border from '../stores/border'

export interface IBorder {
  id: string;
  width: number;
  style: string;
  color: string;
  position: IPosition;
}

export interface IBorderRadius {
  tleft: number;
  tright: number;
  bleft: number;
  bright: number;
}

export interface IPosition {
  title: string,
  borderType: string,
}

export type TClassBorder = {
  borderState: typeof border;
}
