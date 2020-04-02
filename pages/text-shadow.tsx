import * as React from 'react';
import {
  Page,
  Layout,
  Card
} from '@shopify/polaris';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';

import TextShadow from '../src/components/text-shadow/TextShadow';
import { textShadow } from '../src/stores';
import EmbedCode from '../src/components/helper/EmbedCode';
import Preview from '../src/components/helper/Preview';
// import Template from '../src/components/box-shadow/Template';

@observer
class App extends React.Component {
  render() {
    const { renderTextCss, cssLayerCurrent } = textShadow;
    const finalCSS = {...renderTextCss, ...toJS(cssLayerCurrent)};
    return (
    <Page>
      <Layout>
          <Layout.Section oneHalf>
            <Card title="Text-Shadow CSS Generator">
              <TextShadow textShadow={textShadow} />
            </Card>

          </Layout.Section>
          <Layout.Section oneHalf>
            <Preview type="text">
              <div className="preview-text" style={finalCSS}>Hello SC</div>
            </Preview>

            <EmbedCode>
              text-shadow: {renderTextCss.textShadow};
            </EmbedCode>
            <Card title="Templates">
              <Card.Section>
                {/* <Template shadow={store.shadow} /> */}
              </Card.Section>
            </Card>
          </Layout.Section>
      </Layout>
    </Page>
    )
  }
}

export default App;
