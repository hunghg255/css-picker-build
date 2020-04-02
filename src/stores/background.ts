import { observable, action } from 'mobx';
import axios from 'axios';
import { TFile } from '../components/background/Upload';
import { 
  htmlContent, 
  cssContent
} from '../components/background/templateHTML';
import { 
  globalCssBackground,
  renderHTML,
} from '../helpers/background';
class Background {
  @observable isLoading: boolean;
  @observable error?: Error[];
  @observable imagePreview: string;
  @observable texture: string;
  @observable opacity:number;
  @observable animation:boolean;

  constructor() {
    this.isLoading = false;
    this.imagePreview = '';
    this.texture = '';
    this.opacity = 25;
    this.animation = true;
  }

  @action.bound
  async uploadFile(arg: TFile, isTexture: boolean = false) {
    this.isLoading = true;
    const { acceptedFiles } = arg;
    try {
      const formData = new FormData();
      formData.append("img", acceptedFiles[0]); /** Upload single file */
      const { data }: { data:string } = await axios.post('/upload-file', formData);
      if (isTexture) {
        this.texture = data;
      } else {
        this.imagePreview = data;
      }
      this.isLoading = false;
    } catch (error) {
      this.isLoading = true;
      this.error?.push(new Error(error));
    }
  }

  @action.bound
  changeOpacity(value: number) {
    this.opacity = value;
  }

  @action.bound
  setTemplateTexture(value:string) {
    this.texture = value;
  }

  @action.bound
  changeAnimation(value:boolean) {
    this.animation = value;
  }

  @action.bound
  async downloadCode() {
    try {
      this.isLoading = true;
      const { texture, opacity, animation, imagePreview } = this;
      const html:string = htmlContent(imagePreview);
      const cssState:any = globalCssBackground() + renderHTML(texture, opacity, animation); /** Concat with properties */
      const _res = await axios.post('/create-template-file', {
        html,
        css: cssContent + cssState,
        imagePreview,
        texture,
      });
      this.isLoading = false;
      window.location.replace(_res.data as string);
    } catch (error) {
      this.error?.push(new Error(error));
    }
  }
}                                                                                                                                          

const background = new Background();

export default background;