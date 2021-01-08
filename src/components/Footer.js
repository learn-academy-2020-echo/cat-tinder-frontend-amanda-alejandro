import React, { Component, Fragment } from 'react'
import { RiArrowUpCircleLine, RiCopyrightLine } from 'react-icons/ri'

class Footer extends Component {
	render() {
		return (
			<Fragment>
				<div className='arrow-container'>
					<a href='#top'>
						<RiArrowUpCircleLine className='up-arrow' />
					</a>
				</div>

				<div style={{ textAlign: 'center' }}>
					<p>
						{' '}
						<span id='team-footer'>Alejandro & Amanda | </span>
						<RiCopyrightLine /> 2021
					</p>
				</div>
			</Fragment>
		)
	}
}

export default Footer
