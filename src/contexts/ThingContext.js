import React, { Component } from 'react'

export const nullThing = {
  author: {},
  tags: [],
}

const ThingContext = React.createContext({
  thing: nullThing,
  reviews: [],
  error: null,
  mustLogIn: false,
  setError: () => {},
  clearError: () => { },
  setThing: () => {},
  clearThing: () => {},
  setReviews: () => {},
  addReview: () => {},
})

export default ThingContext

export class ThingProvider extends Component {
  state = {
    thing: nullThing,
    error: null,
  };

  mustLogIn = () => {
    this.setState({
      mustLogIn: true
    })
  }

  handleLogIn = () => {
    this.setState({
      mustLogIn: false
    })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setThing = thing => {
    this.setState({ thing })
  }

  setReviews = reviews => {
    this.setState({ reviews })
  }

  clearThing = () => {
    this.setThing(nullThing)
    this.setReviews([])
  }

  addReview = review => {
    this.setReviews([
      ...this.state.reviews,
      review
    ])
  }

  render() {
    const value = {
      thing: this.state.thing,
      reviews: this.state.reviews,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setThing: this.setThing,
      setReviews: this.setReviews,
      clearThing: this.clearThing,
      addReview: this.addReview,
      mustLogIn: this.mustLogIn,
      mustLogInState: this.state.mustLogIn,
      handleLogIn: this.handleLogIn
    }
    return (
      <ThingContext.Provider value={value}>
        {this.props.children}
      </ThingContext.Provider>
    )
  }
}
