import './GalleryStyle.css'
import React, { Component } from 'react'
import Navbar from '../Navbar/navbar'



export default class Gallery extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isNavbar: null
    }
  }
  
  toggleNavbar = () => {
    if(this.state.isNavbar === null) {
      this.setState({
        isNavbar: true
      })  
    }
    else {
      this.setState({
        isNavbar: this.state.isNavbar ? false : true
      })
    }
  }

render(){
    return(
    <>
     <Navbar closeNav={this.toggleNavbar} navState={this.state.isNavbar}/>
        <h1 className='gallerytxt'>Gallery</h1>
 
        <article class="gallery">
  <img src="https://assets.codepen.io/1506195/unsplash-music-0.avif" alt="guitar player at concert" />
  <blockquote class="quote spacer">
    <span>Without music, life would be a mistake.</span>
    <cite>&mdash;Friedrich Nietzsche</cite>
  </blockquote>
  <img src="https://assets.codepen.io/1506195/unsplash-music-1.avif" alt="duo singing" />
  <img src="https://assets.codepen.io/1506195/unsplash-music-2.avif" alt="crowd cheering" />
  <img src="https://assets.codepen.io/1506195/unsplash-music-3.avif" alt="singer performing" />
  <img src="https://assets.codepen.io/1506195/unsplash-music-4.avif" alt="singer fistbumping crowd" />
  <div class="spacer"></div>
  <img src="https://assets.codepen.io/1506195/unsplash-music-5.avif" alt="crowd cheering" />
  <img src="https://assets.codepen.io/1506195/unsplash-music-6.avif" alt="crowd in a concert" />
  <img src="https://assets.codepen.io/1506195/unsplash-music-7.avif" alt="woman singing" />
  <div class="spacer"></div>
  <div class="spacer"></div>
  <img src="https://assets.codepen.io/1506195/unsplash-music-13.avif" alt="Person playing a cello" />
  <img src="https://assets.codepen.io/1506195/unsplash-music-11.avif" alt="Kiss playing" />
  <img src="https://assets.codepen.io/1506195/unsplash-music-9.avif" alt="young man singing" />
  <div class="spacer"></div>
  <img src="https://assets.codepen.io/1506195/unsplash-music-10.avif" alt="woman singing" />
  <img src="https://assets.codepen.io/1506195/unsplash-music-12.avif" alt="man playing drums" />
</article>
        </>
    )
}
}