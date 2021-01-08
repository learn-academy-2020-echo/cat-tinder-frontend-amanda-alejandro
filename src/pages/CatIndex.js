import React, {Component, Fragment} from 'react'

class CatIndex extends Component {
  render() {
    return (
      <Fragment>
      <h1>CatIndex</h1>
      {this.props.cats.map((cat, index) => {
        return(
          <a href={`/catshow/${cat.id}`}>
          {' '}
          <p key={index}>{cat.name}</p>
          </a>
        )
      })}
      </Fragment>
    )
  }
}

export default CatIndex
