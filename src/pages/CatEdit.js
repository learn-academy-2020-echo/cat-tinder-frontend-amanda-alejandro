import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap'

class CatEdit extends Component {
	constructor(props) {
		super(props)
		this.state = {
			form: {
				name: this.props.cat.name,
				age: this.props.cat.age,
				enjoys: this.props.cat.enjoys,
				image: this.props.cat.image,
			},
			submitted: false,
		}
	}

	handleChange = (e) => {
		let { form } = this.state
		form[e.target.name] = e.target.value
		this.setState({ form: form })
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.updateCat(this.state.form, this.props.cat.id)
		this.setState({ submitted: true })
	}

	render() {
		return (
			<Fragment>
				<Container>
					<h2>Edit This Cat</h2>
					<Form>
						<FormGroup>
							<Label>Name</Label>
							<Input
								type='text'
								name='name'
								onChange={this.handleChange}
								value={this.state.form.name}
							/>
						</FormGroup>

						<FormGroup>
							<Label>Age</Label>
							<Input
								type='number'
								name='age'
								onChange={this.handleChange}
								value={this.state.form.age}
							/>
						</FormGroup>

						<FormGroup>
							<Label>Enjoys</Label>
							<Input
								type='text'
								name='enjoys'
								onChange={this.handleChange}
								value={this.state.form.enjoys}
							/>
						</FormGroup>
						<FormGroup>
							<Label>Image</Label>
							<Input
								type='text'
								name='image'
								onChange={this.handleChange}
								value={this.state.form.image}
							/>
						</FormGroup>
						<Button variant='primary' name='submit' onClick={this.handleSubmit}>
							Edit This Cat
						</Button>
					</Form>

					{this.state.submitted && (
						<Redirect to={`/catshow/${this.props.cat.id}`} />
					)}
				</Container>
			</Fragment>
		)
	}
}

export default CatEdit
