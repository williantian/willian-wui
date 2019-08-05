import React, {Fragment, ReactElement, ReactNode} from "react";
import ReactDOM from 'react-dom';
import './dialog.scss';
import Icon from '../icon/icon'
import {scopedClassMaker} from "./classes";

interface Props {
  visible: boolean;
  buttons?: Array<ReactElement>
  onClose: React.MouseEventHandler;
  closeOnClickMask?: boolean; //设置遮罩层点击是否关闭对话框
}
const scopedClass = scopedClassMaker('wui-dialog');
const sc = scopedClass
const Dialog: React.FunctionComponent<Props> = (props) => {
  const onClickClose: React.MouseEventHandler = (e) => {
    props.onClose(e);
  }
  const onClickMask: React.MouseEventHandler = (e) => {
    if (props.closeOnClickMask) {props.onClose(e)}
  }
  const x = props.visible ?
    <Fragment>
      <div className={sc('mask')} onClick={onClickMask}></div>
      <div className={sc()}>
        <div className={sc('close')} onClick={onClickClose}>
          <Icon name='close'/>
        </div>
        <header className={sc('header')}>提示</header>
        <main className={sc('main')}>{props.children}</main>
        {props.buttons && props.buttons.length > 0 &&
        <footer className={sc('footer')}>
          {props.buttons && props.buttons.map((button, index) =>
            React.cloneElement(button, {key: index})
          )}
        </footer>
        }
      </div>
    </Fragment> :
    null
  //map设置数组的key  这个方法只要渲染了就会复制 会有性能的损失
  return (
    ReactDOM.createPortal(x, document.body)
    /*这个传送门API 可以把React元素渲染到指定的地方*/
  )
};
Dialog.defaultProps = {
  closeOnClickMask: false
};
const modal = (content: string | ReactNode, buttons?: any,afterClose?:()=>void) => {
  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
  }
  const component = <Dialog visible={true}
                            buttons={buttons}
                            onClose={()=>{onClose(); afterClose && afterClose()}}>{content}</Dialog>
  const div = document.createElement('div')
  document.body.appendChild(div)
  ReactDOM.render(component, div)
  return onClose
};
const alert = (content: string) => {
  const buttons = [<button onClick={()=>close()}>ok</button>]
  const close = modal(content,buttons)
};
const confirm = (content: string, yes?: () => void, no?: () => void) => {
  const buttons = [
    <button onClick={() => {onYes()}}>yes</button>,
    <button onClick={() => {onNo()}}>no</button>
  ]
  const close = modal(content, buttons, no)
  const onYes = () => {
    close()
    yes && yes()
  }
  const onNo = () => {
    close()
    no && no()
  }
};
export {alert, confirm, modal}
export default Dialog