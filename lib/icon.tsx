import React from 'react';
import './importIcons';
import './icon.scss';

interface IconProps {
    name: string ,
    onClick: ()=>void
}

// Icon:React.FunctionComponent<IconProps> 添加name属性到props
const Icon:React.FunctionComponent<IconProps> = (props)=>{
    return (
        <svg className = 'icon' onClick = {props.onClick}>
            <use xlinkHref={`#${props.name}`}></use>
        </svg>
    )
}
export default Icon ;