import * as React from 'react';
import {
  DropZone
} from '@shopify/polaris';
import { observer } from 'mobx-react';
import DropzoneFake from '../helper/DropzoneFake';
import styles from './background.module.scss';
interface IUpload {
  isLoading: boolean;
  handleImagesDrop: (arg: TFile, isTexture?: boolean) => void;
}

export type TFile = {
  files: File[], 
  acceptedFiles: File[], 
  rejectedFiles: File[] 
}

@observer
class Upload extends React.Component<IUpload> {
  render() {
    const { isLoading, handleImagesDrop } = this.props;
    return <div className={styles.flex}>
      <div className={styles._dropzone}>
        <DropZone
          label="Image Preview"
          id="Dropzone"
          disabled={isLoading}
          accept="image/jpeg, image/jpg, image/pjpeg, image/png, image/gif"
          type="image"
          onDrop={(files, acceptedFiles, rejectedFiles) => handleImagesDrop({ files, acceptedFiles, rejectedFiles })}
        >
          <DropzoneFake buttonText="Add images" descText="or drop images here to upload" />
        </DropZone>
      </div>

      <div className={styles._dropzone}>
        <DropZone
          label="Texture Upload"
          id="Dropzone1"
          disabled={isLoading}
          accept="image/jpeg, image/jpg, image/pjpeg, image/png, image/gif"
          type="image"
          onDrop={(files, acceptedFiles, rejectedFiles) => handleImagesDrop({ files, acceptedFiles, rejectedFiles }, true)}
        >
          <DropzoneFake buttonText="Add images" descText="or drop images here to upload" />
        </DropZone>
      </div>
    </div>
  }
}

export default Upload;