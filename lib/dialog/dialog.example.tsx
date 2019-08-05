import React, {useState} from 'react';
import Dialog, {alert, confirm, modal} from "./dialog";

export default function () {
  const [x, setX] = useState(false)
  const openModal = ()=>{
    const close = modal(<h1>你好    
      <button onClick={()=> close()}>close</button> 
    </h1>)
  } //使用 modal return的API*/
    //函数是延迟执行 必须写在函数中
    //用户可以自己传需要的button
  return (
    <div>
      <button onClick={() => setX(!x)}>click</button>
      <Dialog visible={x} buttons={
        [
          <button onClick={() => setX(false)}>ok</button>,
          <button onClick={() => setX(false)}>cancel</button>
        ]
      } onClose={() => {setX(false)}}>
        <strong>hi</strong>
      </Dialog>
      <button onClick={() => alert('1')}>alert</button>
      <button onClick={() => confirm('1', () => {
        console.log('你点击了yes')
      }, () => {
        console.log('你点击了no')
      })}>confirm
      </button>
      <button onClick={openModal}>modal</button>
    </div>
  )
}