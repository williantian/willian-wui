import React from 'react';
import {scopedClassMaker} from "../dialog/classes";
const sc = scopedClassMaker('wui-layout');
const Aside: React.FunctionComponent = () => {
  return (
    <div className={sc('aside')}>Aside</div>
  )
};
export default Aside