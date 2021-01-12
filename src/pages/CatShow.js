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
					<img src={cat.image} alt={cat.name} />
					<p>{cat.name}</p>
					<p>{cat.age}</p>
					<p>{cat.enjoys}</p>
				</div>
				<Link to='/catindex'>
					<Button variant='primary'>Go Back To Cats</Button>
				</Link>{' '}
				<Link to={`/catedit/${cat.id}`}>
					<Button variant='primary'>Edit This Cat</Button>
				</Link>{' '}
				<Link to='#'>
					<Button variant='primary'>Delete This Cat</Button>
				</Link>
			</Fragment>
		)
	}
}

export default CatShow
