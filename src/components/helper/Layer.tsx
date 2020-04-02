import * as React from 'react';
import {
  Button,
  Icon,
} from '@shopify/polaris';
import {
  DeleteMinor,
  DragHandleMinor,
  EditMinor,
} from '@shopify/polaris-icons';
import { observer } from 'mobx-react';
import { ReactSortable } from "react-sortablejs";

import styles from './layer.module.scss';
import {
  ILayerItem,
  ILayer,
} from '../../types/Layer';

@observer
class Layer extends React.Component<ILayer> {
  render() {
    const {
      currentId,
      layer,
      addLayer,
      deleteLayer,
      selectLayer,
      hoverLayer,
      setLayer,
    } = this.props;
    return <>
      <Button onClick={() => addLayer()}>
        Add Layer
      </Button>
      <br />
      <br />
      <ul className={styles.wrap}>
        <ReactSortable
          list={layer}
          setList={(newLayer: ILayerItem[]) => setLayer(newLayer)}
        >
          { layer.map((item, index) => {
            const _className:string = item.id === currentId ? styles.current : styles.layer;

            return <li
              className={_className}
              key={index}
              onClick={() => selectLayer(index)}
              onMouseEnter={() => hoverLayer(index)}
              onMouseLeave={() => hoverLayer(index, true)}
            >
              <span className={styles.drag}><Icon source={DragHandleMinor} /></span>
              {item.title}

              <span className={styles.edit}><Icon source={EditMinor} /></span>
              <span
                className={styles.del}
                onClick={() => deleteLayer(index)}
              ><Icon source={DeleteMinor} /></span>
            </li>
          }) }
        </ReactSortable>
      </ul>
    </>
  }
}

export default Layer;
