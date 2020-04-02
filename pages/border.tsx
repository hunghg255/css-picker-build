import React from 'react';
import { observer } from 'mobx-react';
import { ResizableBox } from 'react-resizable';
import { border } from '../src/stores';

import {
  Page,
  Layout,
  Card
} from '@shopify/polaris'; 
import Config from '../src/components/border/Config';
import EmbedCode from '../src/components/helper/EmbedCode';
import Preview from '../src/components/helper/Preview';
import { genReactCss } from '../src/helpers/border';


const Border: React.FC = () => {
  const { borderComputed, BorderRadius } = border;
  const keyNormalCss:string = Object.keys(borderComputed)[0];
  const valueNormalCss: string = Object.values(borderComputed)[0];
  const normallCss = `${keyNormalCss}: ${valueNormalCss}`;
  const radiusCss = `border-radius: ${BorderRadius.borderRadius}`;

  const reactCss = genReactCss(keyNormalCss, valueNormalCss)
  const finalCss = { ...reactCss, ...BorderRadius }

  return (
    <Page>
      <Layout>
          <Layout.Section oneHalf>
            <Card title="Config custom border">
              <Config borderState={border} />
            </Card>
          </Layout.Section>
          <Layout.Section oneHalf>
            <Preview type="box">
              <ResizableBox
                width={200}
                height={200}
                minConstraints={[100, 100]}
                maxConstraints={[300, 300]}
              >
                <div className="preview-box" style={finalCss} />
              </ResizableBox>
            </Preview>

            <EmbedCode>
              {normallCss}{'\n'}
              {radiusCss}
            </EmbedCode>
          </Layout.Section>
      </Layout>
    </Page>
  )
}

export default observer(Border);
