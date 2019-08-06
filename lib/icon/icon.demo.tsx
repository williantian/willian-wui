import Demo from "../../demo";
import IconExample from "./icon.example";
import * as React from "react";

const IconDemo:React.FunctionComponent = ()=>{
  return (
    <Demo code={require('!!raw-loader!./icon.example.tsx').default}>
      <IconExample/>
    </Demo>
  );
};
export default IconDemo;