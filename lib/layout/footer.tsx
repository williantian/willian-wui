import React, {HTMLAttributes} from 'react';
import {scopedClassMaker} from "../dialog/classes";
const sc = scopedClassMaker('wui-layout');

interface Props extends HTMLAttributes<HTMLElement>{

}
const Footer:React.FunctionComponent<Props> = (props)=>{
  const {className, ...rest} = props;
  return (
    <div className={sc('footer',{extra:className})} {...rest}>footer</div>
  )
};
export default Footer