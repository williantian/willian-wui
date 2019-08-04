import React, {Fragment} from "react";
import './dialog.scss';
import Icon from '../icon/icon'
import {scopedClassMaker} from "./classes";

interface Props {
  visible: boolean;
}
const scopedClass = scopedClassMaker('wui-dialog');
const sc = scopedClass
const Dialog: React.FunctionComponent<Props> = (props) => {
  return (
    props.visible ?
      <Fragment>
        <div className={sc('mask')}></div>
        <div className={sc()}>
          <div className={sc('close')}>
            <Icon name='close'/>
          </div>
          <header className={sc('header')}>提示</header>
          <main className={sc('main')}>{props.children}</main>
          <footer className={sc('footer')}>
            <button>ok</button>
            <button>cancel</button>
          </footer>
        </div>
      </Fragment> :
      null
  )
}
export default Dialog