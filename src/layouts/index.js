import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'

import 'prismjs/themes/prism-solarizedlight.css'
import '../styles/code.css'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header = (
      <header className="site-header">
        <h1>
          <Link to={'/'}>
            Learning-in-itself
          </Link>
        </h1>
      </header>
    )
    return (
      <Container>
        {header}
        {children()}
      </Container>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
