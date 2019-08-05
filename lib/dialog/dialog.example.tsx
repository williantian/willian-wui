import React, {useState} from 'react';
import Dialog from "./dialog";

export default function (){
  const [x,setX] = useState(false)

  return (
    <div>
      <button onClick = {()=>setX(!x)}>click</button>
      <Dialog visible = {x} buttons = {
        [
          <button onClick={()=>setX(false)}>ok</button>,
          <button onClick={()=>setX(false)}>cancel</button>
        ]
      } onClose = {()=> {setX(false)}}>
        <strong>hi</strong>
      </Dialog>
    </div>
  )
}