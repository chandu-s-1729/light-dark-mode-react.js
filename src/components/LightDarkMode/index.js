// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    darkMode: true,
  }

  onChangeToMode = () => {
    this.setState(prevState => ({darkMode: !prevState.darkMode}))
  }

  render() {
    const {darkMode} = this.state
    const className = darkMode ? 'dark-mode' : 'light-mode'

    return (
      <div className="main-container">
        <div className={`dark-light-container ${className}`}>
          <h1 className="heading"> Click To Change Mode </h1>
          <button
            onClick={this.onChangeToMode}
            className="mode-change-btn"
            type="button"
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
