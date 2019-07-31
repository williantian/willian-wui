import renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../icon'
import { mount } from 'enzyme'

describe('icon', () => {
    it('icon', () => {
        const json = renderer.create(<Icon name='alipay' />).toJSON()
        expect(json).toMatchSnapshot()
    })
    it('onClick', () => {
        const fn = jest.fn()
        const component = mount(<Icon name="alipay" onClick={fn} />)   //mount作用是把元素放到一个假象的页面中 实际上这个页面不存在
        component.find('svg').simulate('click') //simulate是模仿某个事件 参数是事件名
        expect(fn).toBeCalled() //期待fn被调用
    })
})