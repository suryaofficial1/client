import React from 'react'
// import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'
// import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Slider from '../../components/Slider/Slider'
import TrendingSlide from './TrendingSlider/Shoeslider'
import Shoeslide from './Shoeslider/Shoeslide'
import Heading from './Heading/Heading'
// import Example from './Slider3D/Example'
import Imagegallery from './ImageGallery/Imagegallery'
import "./Home.scss"
// import DynamicSlider from './Slider3D/DynamicSlider'

const Home = () => {
  return (
    <div className='home'>
      <Heading text="Amrit Dawani"/>
      <Slider/>
      {/* <FeaturedProducts type="featured"/> */}
      {/* <Categories/> */}
      {/* <FeaturedProducts type="trending"/> */}
      <Shoeslide />
      <TrendingSlide/>
  {/* <Example/>  */}
  {/* <DynamicSlider /> */}
      {/* <Contact/> */}
      <Imagegallery />
    </div>
  )
}

export default Home