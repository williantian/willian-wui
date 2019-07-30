import React from 'react';
import './importIcons'

interface IconProps {
    name: string 
}
// Icon:React.FunctionComponent<IconProps> 添加name属性到props
const Icon:React.FunctionComponent<IconProps> = (props)=>{
    return (
        <span>
            <svg>
                <use xlinkHref={`#${props.name}`}></use>
            </svg>
        </span>
    )
}
export default Icon ;