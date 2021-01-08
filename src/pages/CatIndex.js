import React, { Component, Fragment } from 'react'

class CatIndex extends Component {
	render() {
		return (
			<Fragment>
				<h1>Cat Index</h1>
				{this.props.cats.map((cat, index) => {
					return (
						<div key={index}>
							<a href={`/catshow/${cat.id}`}>
								{' '}
								<p>{cat.name}</p>
							</a>
						</div>
					)
				})}
			</Fragment>
		)
	}
}

export default CatIndex
