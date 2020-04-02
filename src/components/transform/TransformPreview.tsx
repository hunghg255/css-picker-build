import React, { Component, CSSProperties } from 'react';
import { observer } from 'mobx-react';

import {
  Card,
} from '@shopify/polaris';
import styles from './transform.module.scss';
import { TTransform } from '../../types/Transform';
import EmbedCode from '../helper/EmbedCode';

@observer
class Preview extends Component<TTransform> {
  render() {
    const { transformStore } = this.props;
    const {
      renderCss,
      transformOriginX,
      transformOriginY,
    } = transformStore;

    const stylePositionOrigin: CSSProperties = {
      left: transformOriginX + '%',
      top: transformOriginY + '%',
    }

    return (
      <>
        <Card.Section>
          <div className={styles.wrap}>
            <div className={styles.itemWrap}>
              <div className={styles.item} style={renderCss}>Preview</div>
              <div className={styles.positionOrigin} style={stylePositionOrigin}></div>
            </div>
          </div>
        </Card.Section>
        <EmbedCode>
          transform: {`${renderCss.transform || 'none'};\n`}
          transform-origin: {`${renderCss.transformOrigin || 'none'};`}
        </EmbedCode>
      </>
    )
  }
};

export default Preview;
