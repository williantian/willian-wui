import React, {ReactElement} from 'react';
import {scopedClassMaker} from "../dialog/classes";
import './layout.scss';
import Aside from "./aside";

const sc = scopedClassMaker('wui-layout');

interface Props extends React.HTMLAttributes<HTMLElement>{
   children: ReactElement | Array<ReactElement>
}
const Layout: React.FunctionComponent<Props> = (props) => {
  let hasAside = false;
  const {className, ...rest} = props;
  (props.children as Array<ReactElement>).length &&
  (props.children as Array<ReactElement>).map(node=> {

    console.log(node);
    if(node.type === Aside){
      hasAside = true
    }
  });
  return (
    <div className={sc('', {extra: [className, hasAside && 'hasAside'].join(' ')})} {...rest}>{props.children}</div>
  )
};
export default Layout