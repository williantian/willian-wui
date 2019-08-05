import React, {ReactElement} from 'react';
import {scopedClassMaker} from "../dialog/classes";
import './layout.scss';
import Aside from "./aside";

const sc = scopedClassMaker('wui-layout');
interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | Array<ReactElement>
}
const Layout: React.FunctionComponent<Props> = (props) => {
  const {className, ...rest} = props;
  const childrenAsArray = (props.children as Array<ReactElement>);
  const hasAside = childrenAsArray.length &&
    childrenAsArray.reduce((result, node) => {
      return result || node.type === Aside
    }, false);
  return (
    <div className={sc('', {extra: [className, hasAside && 'hasAside'].join(' ')})} {...rest}>{props.children}</div>
  );
};
export default Layout