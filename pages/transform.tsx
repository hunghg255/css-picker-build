import React from 'react';
import {
  Page,
  Card,
  Layout,
} from '@shopify/polaris';
import { ResizableBox } from 'react-resizable';
import { observer } from 'mobx-react';

import * as store from '../src/stores';

import TransformSettings from '../src/components/transform/TransformSettings';
// import TransformPreview from '../src/components/transform/TransformPreview';
import EmbedCode from '../src/components/helper/EmbedCode';
import Preview from '../src/components/helper/Preview';
import styles from '../src/components/helper/preview.module.scss';

@observer
class Transform extends React.Component {
  render() {
    const { transformStore } = store;
    const {
      renderCss,
      transformOriginX,
      transformOriginY,
    } = transformStore;

    const stylePositionOrigin: React.CSSProperties = {
      left: transformOriginX + '%',
      top: transformOriginY + '%',
    }

    return <Page>
      <Layout>
        <Layout.Section oneHalf>
          <Card title='Transform CSS Generator'>
            <TransformSettings transformStore={store.transformStore} />
          </Card>
        </Layout.Section>
        <Layout.Section oneHalf>
          {/* <Card title='Preview'>
            <TransformPreview transformStore={store.transformStore} />
          </Card> */}
          <Preview type="box">
            <ResizableBox
              width={200}
              height={200}
              minConstraints={[100, 100]}
              maxConstraints={[300, 300]}
            >
              <div className={styles.transformWrap}>
                <div className={`${styles.transformPreviewBox} preview-box`} style={renderCss}>
                  Preview text
                </div>
                <div className={styles.positionOrigin} style={stylePositionOrigin} />
              </div>
            </ResizableBox>
          </Preview>
          <EmbedCode>
            transform: {`${renderCss.transform || 'none'};\n`}
            transform-origin: {`${renderCss.transformOrigin || 'none'};`}
          </EmbedCode>
        </Layout.Section>
      </Layout>
    </Page>
  }
}

export default Transform;
