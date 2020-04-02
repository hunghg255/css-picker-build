import * as React from 'react';

interface IProps {
  buttonText: string;
  descText: string;
}

const fakeDropZone: React.FC<IProps> = (props) => {
  return (
    <div className="Polaris-DropZone-FileUpload">
      <div className="Polaris-Stack Polaris-Stack--vertical">
        <div className="Polaris-Stack__Item">
          <img className="Polaris-DropZone-FileUpload__Image Polaris-DropZone-FileUpload--sizeExtraLarge" src="https://cdn.xopify.com/xo-gallery/assets/img/dropzone.svg" alt="" />
        </div>
        <div className="Polaris-Stack__Item">
        <div className="Polaris-DropZone-FileUpload__Button">{props.buttonText}</div>
        </div>
        <div className="Polaris-Stack__Item"><span className="Polaris-TextStyle--variationSubdued">{props.descText}</span></div>
      </div>
    </div>);
};

export default fakeDropZone;
