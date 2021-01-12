import React, { Component, Fragment } from 'react'
import { RiArrowUpCircleLine } from 'react-icons/ri'

class Footer extends Component {
	render() {
		return (
			<Fragment>
				<footer className='mt-auto'>
					<div className='arrow-container'>
						<a href='#top'>
							<RiArrowUpCircleLine className='up-arrow' />
						</a>
					</div>

					<div style={{ textAlign: 'center' }}>
						<p>Alejandro & Amanda | &#169; 2021</p>
					</div>
				</footer>
			</Fragment>
		)
	}
}

export default Footer
