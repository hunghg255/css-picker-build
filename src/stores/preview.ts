import { observable, action } from 'mobx';
import { IPreview } from '../types/Preview';

class Preview implements IPreview {
  @observable backgroundColor: string;
  @observable boxColor: string;
  @observable textColor: string;

  constructor() {
    this.backgroundColor = '#ffffff';
    this.boxColor = '#3d9df6';
    this.textColor = '#3d9df6';
  }

  @action.bound
  setBackgroundColor(value:string) {
    this.backgroundColor = value;
  }

  @action.bound
  setBoxColor(value:string) {
    this.boxColor = value;
  }

  @action.bound
  setTextColor(value:string) {
    this.textColor = value;
  }

}

const preview = new Preview();

export default preview;
