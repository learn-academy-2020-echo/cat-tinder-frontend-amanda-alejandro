import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from '../NotFound'

Enzyme.configure({ adapter: new Adapter() })

it('NotFound renders content', () => {
	const notFound = shallow(<NotFound />)
	expect(notFound.find('p').text()).toEqual('Something went wrong!')
})
