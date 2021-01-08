import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatEdit from '../CatEdit'

Enzyme.configure({ adapter: new Adapter() })

it('CatEdit renders content', () => {
	const catEdit = shallow(<CatEdit />)
	expect(catEdit.find('h1').text()).toEqual('Cat Edit')
})
