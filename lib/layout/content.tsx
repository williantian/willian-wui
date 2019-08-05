import React, {HTMLAttributes} from 'react';
import {scopedClassMaker} from "../helpers/classes";
const sc = scopedClassMaker('wui-layout');

interface Props extends HTMLAttributes<HTMLElement>{

}

const Content:React.FunctionComponent<Props> = (props)=>{
  const {className, ...rest} = props;
  return (
    <div className={sc('content', {extra:className})} {...rest}>content</div>
  )
};
export default Content