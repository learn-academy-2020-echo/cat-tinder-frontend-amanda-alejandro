import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Button } from 'reactstrap'
import bgImage from '../assets/cat2.jpg'





class NotFound extends Component {

// handleReturn


  render() {
    return (
      <Jumbotron
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
        }}
      >
        <h1 style={{ color: 'white' }}>404 Error</h1>
        <p>
          Something went wrong!
        </p>
        <Button><Link to='/'>Go Back</Link></Button>
      </Jumbotron>
    )
  }
}

export default NotFound
