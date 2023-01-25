import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Importing styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useFetch from "../../../hooks/useFetch";
import Card from "./Ncard";

// import { SliderProducts } from "../../data/products";
import { useMediaQuery } from "react-responsive";
import './Slider.css';



const Shoeslider = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 500px)' })
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id][$eq]=${1}`
  );


  if (isTabletOrMobile) {
    return (
      <>
        {/* <div className="top" style={{ textAlign: "center", width: "60%", justifyContent:"center"}}>
            <h1 style={{ paddingBottom: "20px", fontSize: "35px", paddingTop:"40px", fontWeight: "700" }}>Trending outfit of the week</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Quis ipsum.</p>
          </div> */}
        <div className="top" style={{ textAlign: "center" }}>
          <h1  class="trendingHeading" style={{ paddingBottom: "20px", fontWeight: "700", paddingTop: "60px" }}>Trending Outfit <br />of the week</h1>

          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Quis ipsum suspendisse.</p> */}
        </div>
        <Swiper
          modules={[Navigation]}
          className="mySwiper"
          navigation={true}
          loopFillGroupWithBlank={true}
          slidesPerView={1}
          spaceBetween={40}
          slidesPerGroup={1}
          loop={true}
        >
          {error
            ? "Something went wrong!"
            : loading
              ? "loading"
              :
              <>
                {data?.map((item, i) =>
                  <SwiperSlide>
                    <Card item={item} key={item.id} isTabletOrMobile={isTabletOrMobile} />
                  </SwiperSlide>
                )}

              </>
          }
        </Swiper>
      </>
    )
  }
  return (

    <div className="s-container">
      <div className="top" style={{ textAlign: "center" }}>
        <h1 style={{ paddingBottom: "20px", fontWeight: "700", paddingTop: "60px" }}>Trending outfit of the week</h1>
      </div>

      <Swiper
        modules={[Pagination, Navigation]}
        navigation={true}
        loopFillGroupWithBlank={true}
        slidesPerView={3}
        loop={true}
      >
        {error
          ? "Something went wrong!"
          : loading
            ? "loading"
            :
            <>
              {data?.map((item, i) =>
                <SwiperSlide>
                  <Card item={item} key={item.id} />
                </SwiperSlide>
              )}
            </>
        }
      </Swiper>
    </div>
  );
};

export default Shoeslider;
