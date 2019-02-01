import React from 'react'
import { mount, configure } from 'enzyme'
import CardComponent from '../Card'
import Adapter from 'enzyme-adapter-react-16'
import cardFixture from './fixtures/card.js'

configure({adapter: new Adapter()});
describe('Card component', () => {
  const show = cardFixture()
  it('Should have expected structure', () => {
    const wrapper = mount(<CardComponent {...show} />)
    expect(wrapper.find('span').exists()).toBe(true)
    expect(wrapper.find('img').exists()).toBe(true)
    expect(wrapper.find('img').props().src).toBe('./img/logo-7.png')
  })
})
