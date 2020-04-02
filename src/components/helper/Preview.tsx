import React, { ReactNode } from 'react';
import { observer } from 'mobx-react';
import ColorPicker from './ColorPicker';
import { preview } from '../../stores';
import styles from './preview.module.scss';

type Props = {
  children: ReactNode;
  type: string;
}

@observer
class Preview extends React.Component<Props> {
  render() {
    const { type } = this.props;
    const {
      backgroundColor,
      boxColor,
      textColor,
      setBackgroundColor,
      setBoxColor,
      setTextColor,
    } = preview;
    let isBox = true;
    if (type === 'text') {
      isBox = false;
    }
    return (
    <div className="Polaris-Card">
      <style jsx>
        {`
          .Polaris-Card__Header {position: relative; padding-bottom: 2rem}
          .previewarea {background: ${backgroundColor}; padding: 40px}
        `}
      </style>
      <style jsx global>
        {`
          .preview-box {background: ${boxColor}}
          .preview-text {color: ${textColor}}
        `}
      </style>
      <div className="Polaris-Card__Header">
        <h2 className="Polaris-Heading">Preview</h2>
        <div className={styles.colorpicker}>
          <ColorPicker color={backgroundColor} setColor={setBackgroundColor} />
          {isBox ? (
            <ColorPicker color={boxColor} setColor={setBoxColor} />
          ) : (
            <ColorPicker color={textColor} setColor={setTextColor} />
          )}
        </div>
      </div>

      <div className="Polaris-Card__Section previewarea">
        {this.props.children}
      </div>
    </div>
    )}
};

export default Preview;
