import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './avatar.dot.png'

class Bio extends React.Component {
  render() {
    return (
      <figure>
        <a className="site-profile" href="https://github.com/learning">
          <img src={profilePic} alt={`Learning`}/>
          <figcaption>Learning</figcaption>
        </a>
      </figure>
    )
  }
}

export default Bio
