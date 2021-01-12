import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
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
class CatShow extends Component {
	render() {
		const { cat } = this.props
		return (
			<Fragment>
				<Container>
					<Row>
						<Col>
							<h1 className='title'>Meet {cat.name.toUpperCase(0)}</h1>
						</Col>
					</Row>
					<Row>
						<Col>
							<Card>
								<CardImg top src={cat.image} alt={cat.name} />
								<CardBody>
									<CardTitle tag='h5'>
										{cat.name} enjoys {cat.enjoys}
									</CardTitle>
									<Link to='/catindex'>
										<Button className='button' variant='primary'>
											Go Back To Cats
										</Button>
									</Link>{' '}
									<Link to={`/catedit/${cat.id}`}>
										<Button className='button' variant='primary'>
											Edit This Cat
										</Button>
									</Link>{' '}
									<Link to='#'>
										<Button className='button' variant='primary'>
											Delete This Cat
										</Button>
									</Link>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</Container>
			</Fragment>
		)
	}
}

export default CatShow
