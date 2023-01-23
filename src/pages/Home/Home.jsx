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
import Newslider from './Slider3D/Newslider'
import { Hidden } from '@mui/material'
import DynamicSlider from './Slider3D/DynamicSlider'

const Home = () => {
  return (
    <div className='home'>
      <Heading text="Amrit Dawani"/>
     
      {/* <FeaturedProducts type="featured"/> */}
      {/* <Categories/> */}
      <Hidden only="xs">
        <Newslider />
      </Hidden>
      <Hidden smUp>
        <DynamicSlider />
      </Hidden>
      <Slider/>
      <Shoeslide />
      {/* <FeaturedProducts type="trending"/> */}
      <TrendingSlide/>
  {/* <Example/>  */}
  

   {/* <DynamicSlider />  */}
      {/* <Contact/> */}
      <Imagegallery />
    </div>
  )
}

export default Home