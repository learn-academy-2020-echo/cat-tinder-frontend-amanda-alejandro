import React, { Component, Fragment } from 'react'
import { Navbar, Nav, NavLink } from 'reactstrap'

class Header extends Component {
	render() {
		return (
			<Fragment>
				<Navbar className='nav-bar' bg='light' variant='light'>
					{/* <Navbar.Brand href='#home'>Navbar</Navbar.Brand> */}
					<Nav className='mr-auto'>
						<NavLink href='/'>Home</NavLink>
						<NavLink href='/catindex'>Meet the Cats</NavLink>
						<NavLink href='/catnew'>Add a Cat</NavLink>
					</Nav>
				</Navbar>
			</Fragment>
		)
	}
}

export default Header
