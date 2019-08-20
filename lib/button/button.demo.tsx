import Demo from "../../demo";
import ButtonExample from "./button.example";
import * as React from "react";

const ButtonDemo:React.FunctionComponent = ()=>{
  return (
    <Demo code={require('!!raw-loader!./button.example.tsx').default}>
      <ButtonExample/>
    </Demo>
  );
};
export default ButtonDemo;