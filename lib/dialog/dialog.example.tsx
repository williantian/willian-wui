import React, {useState} from 'react';
import Dialog, {alert, confirm, modal} from "./dialog";
import Button from '../button/button';

export default function () {
  const [x, setX] = useState(false)
  const openModal = ()=>{
    const close = modal(<h1>content
      <button onClick={()=> close()}>close</button> 
    </h1>)
  } //使用 modal return的API*/
    //函数是延迟执行 必须写在函数中
    //用户可以自己传需要的button
  return (
    <div>
      <Button onClick={() => setX(!x)}>click</Button>
      <Dialog visible={x} buttons={
        [
          <Button onClick={() => setX(false)}>ok</Button>,
          <Button onClick={() => setX(false)}>cancel</Button>
        ]
      } onClose={() => {setX(false)}}>
        <strong>content</strong>
      </Dialog>
      <Button onClick={() => alert('content')}>alert</Button>
      <Button onClick={() => confirm('content', () => {
        console.log('你点击了yes')
      }, () => {
        console.log('你点击了no')
      })}>confirm
      </Button>
      <Button onClick={openModal}>modal</Button>
    </div>
  )
}