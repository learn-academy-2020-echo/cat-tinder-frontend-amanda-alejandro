import React, { Component, Fragment } from 'react'
import {
	Container,
	Row,
	Col,
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	Button,
} from 'reactstrap'
import { Link } from 'react-router-dom'
// import cats from '../mockCats'

class CatIndex extends Component {
	render() {
		// console.log(this.props.cats)
		const { cats } = this.props
		return (
			<Fragment>
				<Container>
					<Row>
						<Col>
							<h1 className='title'>Meet The Cats</h1>
						</Col>
					</Row>
					<Row>
						{cats.map((cat, index) => {
							return (
								<Col xs='4'>
									<Card style={{ marginBottom: '15px' }}>
										<CardImg top src={cat.image} alt={cat.name} />
										<CardBody className='col text-center'>
											{/* <CardTitle tag='h5'>{cat.name}</CardTitle> */}
											{/* <CardText>{cat.enjoys}</CardText> */}
											<Link to={`/catshow/${cat.id}`}>
												<Button className='button' variant='primary'>
													{' '}
													<p key={index}>Meet {cat.name}</p>
												</Button>{' '}
											</Link>
										</CardBody>
									</Card>
								</Col>
							)
						})}
					</Row>
				</Container>
			</Fragment>
		)
	}
}

export default CatIndex
