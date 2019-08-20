import Highlight, {defaultProps} from "prism-react-renderer";
import * as React from "react";
import {useState} from "react";
import './demo.scss';
import Icon from "./lib/icon/icon";

interface Props {
  code: string;
}
const Demo: React.FunctionComponent<Props> = (props) => {
  const [codeVisible, setCodeVisible] = useState(false);
  const [name,setName] = useState("icon-open");
  const [content,setContent] = useState("查看代码");
  const code = (
    <Highlight {...defaultProps} code={props.code} language="jsx">
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className} style={style}>
                {tokens.map((line, i) => (
                  <div {...getLineProps({line, key: i})}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({token, key})} />
                    ))}
                  </div>
                ))}
              </pre>
      )}
    </Highlight>
  );
  return (
    <div>
      <span>按钮</span>
      <div className="example-demo">{props.children}</div>
      <div className="example-iconContainer">
        <h6 className="example-iconContainer-span">{content}</h6>
        <Icon name={name} className="example-iconContainer-icon" onClick={() => {
          setCodeVisible(!codeVisible);
          if(name === "icon-open") {
            setName("icon-close");
            if(content === "查看代码"){
              setContent("收起代码")
            }
          }else {
            setName("icon-open");
            if(content === "收起代码"){
              setContent("查看代码")
            }
          }
        }} />
      </div>
      <div>
        {codeVisible && code}
      </div>

    </div>
  )
};
export default Demo;