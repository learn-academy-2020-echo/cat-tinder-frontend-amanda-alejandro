import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from '../Footer'

Enzyme.configure({ adapter: new Adapter() })

it('Footer has a span with an ID of team-footer', () => {
	const footer = shallow(<Footer />)
	expect(footer.find('#team-footer').text()).toEqual('Alejandro & Amanda')
})
