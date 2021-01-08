import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Button } from 'reactstrap'

import bgImage from '../assets/cat2.jpg'

class NotFound extends Component {
	// handleReturn

	render() {
		return (
			<Jumbotron
				className='jumbo-img'
				style={{
					backgroundImage: `url(${bgImage})`,
				}}
			>
				<h1>404 Error</h1>
				<p>Something went wrong!</p>
				<Link to='/'>
					<Button variant='primary'>Go Back</Button>
				</Link>
			</Jumbotron>
		)
	}
}

export default NotFound
