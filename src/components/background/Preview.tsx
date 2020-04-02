import * as React from 'react';
import { observer } from 'mobx-react';
import styles from './background.module.scss';
import { imgPreview } from './default.config';

type TPreview = {
  image: string;
}

@observer
class Preview extends React.Component<TPreview> {
  render() {
    const { image } = this.props;
    return <div className={styles.preview}>
      <img className={styles.img} src={ image ? image : imgPreview } />
      <div className='_blink'></div>
    </div>
  }
}

export default Preview;