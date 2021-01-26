import React from 'react'

class Top extends React.Component {
  constructor() {
    super()
    this.scroll = this.scroll.bind(this)
    // this.top = this.top.bind(this)
  }

  // top() {
  //   const top = document.getElementById('toTopContainer');
  //   // if (top.offsetTop) {}
  //   console.log(top)
  // }

  scroll() {
    document.documentElement.scrollTop = 0;
  }

  render() {

  return (
    document.addEventListener('scroll', function() {
    const offSet = window.pageYOffset
    const footer = document.getElementById('toTopContainer')
    if(offSet > 400) {
      footer.style.display = ''
    } else {
      footer.style.display = 'none'
    }
      // console.log(top.offsetTop);
    }),

    <div onClick={this.scroll} id='toTopContainer'>
      <div id='toTop'>
        &uarr;
      </div>
    </div>
  )
}
}

export default Top
