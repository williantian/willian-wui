import React from 'react';
import {scopedClassMaker} from "../dialog/classes";
import './layout.scss';

const sc = scopedClassMaker('wui-layout');

interface Props extends React.HTMLAttributes<HTMLElement>{

}
const Layout: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props;
  console.log(props.children);
  return (
    <div className={[sc('', {extra: className})].join(' ')} {...rest}>{props.children}</div>
  )
};
export default Layout