import renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../icon'

describe('icon',()=>{
    it('icon',()=>{
       const json = renderer.create(<Icon name= 'alipay'/>).toJSON() 
        expect(json).toMatchSnapshot()
    })
})