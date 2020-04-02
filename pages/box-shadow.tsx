import * as React from 'react';
import {
  Page,
  Layout,
  Card
} from '@shopify/polaris';
import { observer } from 'mobx-react';
import { toJS } from 'mobx';
import { ResizableBox } from 'react-resizable';

import BoxShadow from '../src/components/box-shadow/BoxShadow';
import { boxShadow } from '../src/stores';
import EmbedCode from '../src/components/helper/EmbedCode';
import Preview from '../src/components/helper/Preview';
import Template from '../src/components/box-shadow/Template';

@observer
class App extends React.Component {
  render() {
    const { renderBoxCss, cssLayerCurrent } = boxShadow;
    const finalCSS = {...renderBoxCss, ...toJS(cssLayerCurrent)};
    return (
    <Page>
      <Layout>
        <Layout.Section oneHalf>
          <Card title="Box-Shadow CSS Generator">
            <BoxShadow shadow={boxShadow} />
          </Card>
        </Layout.Section>
        <Layout.Section oneHalf>
          <Preview type="box">
            <ResizableBox
              width={200}
              height={200}
              minConstraints={[100, 100]}
              maxConstraints={[300, 300]}>
              <div className="preview-box" style={finalCSS} />
            </ResizableBox>
          </Preview>

          <EmbedCode>
            box-shadow: {renderBoxCss.boxShadow};
          </EmbedCode>

          <Card title="Template">
            <Card.Section>
              <Template shadow={boxShadow} />
            </Card.Section>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
    )
  }
}

export default App;
