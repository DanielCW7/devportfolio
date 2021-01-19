import React from 'react'

class Top extends React.Component {
  constructor() {
    super()
    this.scroll = this.scroll.bind(this)
  }

  scroll() {
    document.documentElement.scrollTop = 0;
  }

  render() {
  return (
    <div onClick={this.scroll} id='toTopContainer'>
      <div id='toTop'>
        &uarr;
      </div>
    </div>
  )
}
}

export default Top
