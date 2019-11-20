import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import ThingContext from '../../contexts/ThingContext'
import { Section } from '../../components/Utils/Utils'
import './LoginPage.css'

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  static contextType = ThingContext

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    this.context.handleLogIn();
    history.push(destination)
  }

  render() {

    const mustLogIn = this.context.mustLogInState

    return (
      <Section className='LoginPage'>
        {mustLogIn === true 
        ? <p className="mustLogIn">You must log in to see this page</p>
        : null
        }
        <h2>Login</h2>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />

      </Section>
    )
  }
}
