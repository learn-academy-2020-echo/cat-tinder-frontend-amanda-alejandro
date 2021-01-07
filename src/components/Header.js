import React, { Component, Fragment } from 'react'
import { Navbar, Nav, NavLink } from 'reactstrap'

class Header extends Component {
	render() {
		return (
			<Fragment>
				<Navbar bg='light' variant='light'>
					{/* <Navbar.Brand href='#home'>Navbar</Navbar.Brand> */}
					<Nav className='mr-auto'>
						<NavLink href='#home'>Home</NavLink>
						<NavLink href='#features'>Login</NavLink>
						<NavLink href='#pricing'>Sign Up</NavLink>
					</Nav>
				</Navbar>
			</Fragment>
		)
	}
}

export default Header
