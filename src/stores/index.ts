import { useStaticRendering } from 'mobx-react';
import boxShadow from './boxShadow';
import textShadow from './textShadow';
import transformStore from './Transform';
import border from './border';
import background from './background';
import preview from './preview';

const isServer = typeof window === 'undefined'
// eslint-disable-next-line react-hooks/rules-of-hooks
useStaticRendering(isServer)

export {
  boxShadow,
  textShadow,
  transformStore,
  border,
  background,
  preview,
}
