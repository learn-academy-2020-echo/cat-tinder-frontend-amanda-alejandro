import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatNew from '../CatNew'

Enzyme.configure({ adapter: new Adapter() })

it('CatNew renders content', () => {
	const catNew = shallow(<CatNew />)
	expect(catNew.find('h1').text()).toEqual('Cat New')
})
