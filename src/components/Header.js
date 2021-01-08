import React, { Component, Fragment } from 'react'
import { Navbar, Nav, NavLink } from 'reactstrap'

class Header extends Component {
	render() {
		return (
			<Fragment>
				<Navbar id='top' className='nav-bar' bg='light' variant='light'>
					<Nav className='ml-auto'>
						<NavLink className='header-link' href='/'>
							Home
						</NavLink>
						<NavLink className='header-link' href='/catindex'>
							Meet the Cats
						</NavLink>
						<NavLink className='header-link' href='/catnew'>
							Add a Cat
						</NavLink>
					</Nav>
				</Navbar>
			</Fragment>
		)
	}
}

export default Header
