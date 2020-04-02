import React, { Component } from 'react'
import { observer } from 'mobx-react';
import { Page, Layout, Card, FormLayout, Button } from '@shopify/polaris';
import { background } from '../src/stores';
import Upload from '../src/components/background/Upload';
import Preview from '../src/components/background/Preview';
import Config from '../src/components/background/Config';
import Template from '../src/components/background/template';
import { 
  globalCssBackground,
  bgHtml,
} from '../src/helpers/background';

@observer
class Background extends Component {
  render() {
    const imgTexture = globalCssBackground() + bgHtml();
    return (
      <Page>
        <Layout>
            <style>
              { imgTexture }
            </style>
            <Layout.Section oneHalf>
              <Card title="Image with overlay texture">
                <Card.Section>
                  <FormLayout>
                    <Upload
                      isLoading={background.isLoading}
                      handleImagesDrop={background.uploadFile}
                    />
                    <Config
                      opacity={background.opacity}
                      changeOpacity={background.changeOpacity}
                      animation={background.animation}
                      changeAnimation={background.changeAnimation}
                    />
                    <Template
                      setBackground={background.setTemplateTexture}
                    />
                  </FormLayout>
                </Card.Section>
              </Card>
            </Layout.Section>
            <Layout.Section oneHalf>
                <Preview image={background.imagePreview} />
                <Button 
                  primary
                  onClick={background.downloadCode}
                  loading={background.isLoading}
                >
                  Get link
                </Button>
            </Layout.Section>
        </Layout>
      </Page>
    )
  }
}

export default Background;
