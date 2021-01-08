import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

class CatShow extends Component {
	render() {
		const { cat } = this.props
		return (
			<Fragment>
				<div>
					<h1>Cat Show</h1>
					<p>{cat.name}</p>
					<p>{cat.age}</p>
					<p>{cat.enjoys}</p>
				</div>
				<Link to='/catindex'>
					<Button variant='primary'>Go Back To Cats</Button>
				</Link>
			</Fragment>
		)
	}
}

export default CatShow
