import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatShow from '../CatShow'

Enzyme.configure({ adapter: new Adapter() })

it('CatShow renders content', () => {
	const catShow = shallow(<CatShow cat={[]} />)
	expect(catShow.find('h1').text()).toEqual('Cat Show')
})
