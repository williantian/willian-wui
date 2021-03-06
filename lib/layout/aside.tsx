import React, {HTMLAttributes} from 'react';
import {scopedClassMaker} from "../helpers/classes";
const sc = scopedClassMaker('wui-layout');
interface Props extends HTMLAttributes<HTMLElement>{

}
const Aside: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props;
  return (
    <div className={sc('aside', {extra: className})} {...rest}>
      {props.children}</div>
  )
};
export default Aside