import React, { FunctionComponent, ReactNode } from 'react';
import {
  Card,
} from '@shopify/polaris';

type Props = {
  children: ReactNode
}

const EmbedCode:FunctionComponent<Props> = (props) => (
  <Card title="CSS code">
    <Card.Section>
      <pre><code>{props.children}</code></pre>
    </Card.Section>
  </Card>
);

export default EmbedCode;
