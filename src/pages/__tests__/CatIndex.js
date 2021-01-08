import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatIndex from '../CatIndex'

Enzyme.configure({ adapter: new Adapter() })

it('CatIndex has a title class', () => {
	const catIndex = shallow(<CatIndex cats={[]} />)
	expect(catIndex.find('h1').text()).toEqual('Cat Index')
})
