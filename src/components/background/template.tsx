import * as React from 'react';
import { observer } from 'mobx-react';
import styles from './background.module.scss';
import { pathTexture, bgTexture } from './default.config';
interface ITemplate {
  setBackground: (value:string) => void;
}

@observer
class Template extends React.Component<ITemplate> {
  render() {
    const { setBackground } = this.props;
    return <div className={styles.template}>
      { bgTexture.map((item, index) => <img 
        className={styles.t__item}
        key={index} 
        src={pathTexture + item} 
        onClick={setBackground.bind(this, pathTexture + item)}
      />) }
    </div>
  }
}

export default Template;