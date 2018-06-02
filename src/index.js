import React from 'react'
import { render } from 'react-dom'

import './index.css'
import avatar from './avatar.png'

const App = props => (
  <div className="hero-container">
    <img src={avatar} />
    <p>Heroes Never Die</p>

    <small className="hero-source">
      <a href="https://www.iconfinder.com/icons/1380745/comic_hero_superhero_superman_icon">
        source avatar
      </a>
    </small>
  </div>
)

render(
	<App />,
	document.getElementById('root')
)