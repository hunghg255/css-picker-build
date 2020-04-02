export interface ILayerItem {
  id: string;
  title: string;
}
export interface ILayer {
  currentId: string;
  layer: Array<ILayerItem>;
  addLayer: () => void;
  deleteLayer: (index: number) => void;
  selectLayer: (index: number) => void;
  hoverLayer: (index: number, hide?: boolean) => void;
  setLayer: (layer: any[]) => void;
};
