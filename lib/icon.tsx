import React from 'react';
import './importIcons';
import './icon.scss';

interface IconProps {
    name: string ;
    onClick: React.MouseEventHandler<SVGElement>
     // 如果index.tsx函数声明出为React.MouseEventHandler<SVGElement> 则此不能写成React.MouseEventHandler<SVGElement> 否则会提示有冲突
     //同理如果index.tsx函数声明出为React.MouseEventHandler 则只能写作React.MouseEventHandler<SVGElement> 不能相同
}
// Icon:React.FunctionComponent<IconProps> 添加name属性到props
const Icon: React.FunctionComponent<IconProps> = (props)=>{
    return (
        <svg className = 'wui-icon' onClick = {props.onClick}>
            <use xlinkHref={`#${props.name}`} />
        </svg>
    )
}
export default Icon ;