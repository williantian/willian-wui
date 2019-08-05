import React, {HTMLAttributes} from 'react';
import {scopedClassMaker} from "../dialog/classes";

const sc = scopedClassMaker('wui-layout');

interface Props extends HTMLAttributes<HTMLElement>{

}
const Header: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props;
  return (
    <div className={sc('header', {extra: className})} {...rest}>header</div>
  )
};
export default Header