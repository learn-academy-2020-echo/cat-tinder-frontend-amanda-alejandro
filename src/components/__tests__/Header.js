import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from '../Header'

Enzyme.configure({ adapter: new Adapter() })

it('Header has a nav-bar class', () => {
	const header = shallow(<Header />)
	let node = header.find('Navbar')
	expect(node.hasClass('nav-bar')).toBeTruthy()
})
