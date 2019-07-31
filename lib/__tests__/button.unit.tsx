//import * as renderer from 'react-test-renderer'
//import * as React from 'react'
//import Button from '../button'

//describe('button', () => {
//it('是个div', () => {
 //   const json = renderer.create(<Button />).toJSON()
    //const json = renderer.create(React.createElement('div',null,'hi')).toJSON()
    //不引入Button就能正常运行         ????????  bug ????未解决
///    expect(json).toMatchSnapshot()
//})
//})


describe('我的第一个测试用例',()=>{
    it('1等于1',()=>{
        expect(1).toEqual(1)
    })
})