import * as React from 'react';
import { observer } from 'mobx-react';

import {
  TBoxShadow,
  IBoxLayer,
} from '../../types/BoxShadow';

import {
  uuid,
} from '../../helpers/shadow';

const template1:IBoxLayer[] = [
  {
    shiftDown: 25,
    shiftRight: 25,
    blur: 0,
    spread: 0,
    color: '#E1EEFF',
    opacity: 100,
    inset: false,
    id: uuid(),
  },
  {
    shiftDown: 20,
    shiftRight: 20,
    blur: 0,
    spread: 0,
    color: '#CAE6FF',
    opacity: 100,
    inset: false,
    id: uuid(),
  },
  {
    shiftDown: 15,
    shiftRight: 15,
    blur: 0,
    spread: 0,
    color: '#A1D8FF',
    opacity: 100,
    inset: false,
    id: uuid(),
  },
  {
    shiftDown: 10,
    shiftRight: 10,
    blur: 0,
    spread: 0,
    color: '#5FB8FF',
    opacity: 100,
    inset: false,
    id: uuid(),
  },
  {
    shiftDown: 5,
    shiftRight: 5,
    blur: 0,
    spread: 0,
    color: '#289FED',
    opacity: 100,
    inset: false,
    id: uuid(),
  }
]

const template2:IBoxLayer[] = [
  {
    shiftDown: 0,
    shiftRight: -18,
    blur: 40,
    spread: 0,
    color: '#ff0000',
    opacity: 100,
    inset: false,
    id: uuid(),
  },
  {
    shiftDown: 0,
    shiftRight: -10,
    blur: 20,
    spread: 0,
    color: '#ff8000',
    opacity: 100,
    inset: false,
    id: uuid(),
  },
  {
    shiftDown: 0,
    shiftRight: -2,
    blur: 10,
    spread: 0,
    color: '#ff0',
    opacity: 100,
    inset: false,
    id: uuid(),
  },
  {
    shiftDown: 0,
    shiftRight: -1,
    blur: 4,
    spread: 0,
    color: '#fff',
    opacity: 100,
    inset: false,
    id: uuid(),
  },
]
/** All template */
const allTemplate = [template1, template2]; 

@observer
class Template extends React.Component<TBoxShadow> {
  render() {
    const { shadow } = this.props;
    const { changeLayer } = shadow;
    return <div className="template">
      { allTemplate.map((template, index) => <div
        key={index}
        onClick={() => changeLayer(template)}
        className={`template__global template__${index + 1}`}
      />) }
    </div>
  }
}

export default Template;
