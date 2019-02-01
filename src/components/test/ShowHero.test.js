import React from 'react'
import { mount, configure } from 'enzyme'
import ShowHeroComponent from '../ShowHero'
import Adapter from 'enzyme-adapter-react-16'
import cardFixture from './fixtures/card.js'

configure({adapter: new Adapter()});
describe('ShowHero component', () => {
  const show = cardFixture()
  it('Should have expected structure', () => {
    const wrapper = mount(<ShowHeroComponent {...show} />)
    expect(wrapper.find('i').exists()).toBe(true)
    expect(wrapper.find('img').exists()).toBe(true)
    expect(wrapper.find('img').props().src).toBe('./img/home-and-away.jpg')
  })
})
