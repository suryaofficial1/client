import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// Importing styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useFetch from "../../../hooks/useFetch";
import Card from "./card";

// import { SliderProducts } from "../../data/products";
import './shoeslide.css'
import { useMediaQuery } from "react-responsive";

const Shoeslide = () => {

  const { data, loading, error } = useFetch(
    `/products?populate=*`
  );

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 500px)' })

  if (isTabletOrMobile) {
    return (
      <>
        <div className="top" style={{ textAlign: "center" }}>
          {/* <h1 style={{ paddingBottom: "20px" }}>Shoes</h1> */}
          <h1 style={{ paddingBottom: "20px", fontWeight: "600" }}>Shoes</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Quis ipsum.</p>
       
        {/* <div style={{width:"80%"}}>
          <cenetr> */}

         
        <Swiper
          modules={[Pagination, Navigation]}
          className="mySwiper"
          navigation={true}
          loopFillGroupWithBlank={true}
          slidesPerView={1}
          spaceBetween={40}
          slidesPerGroup={1}
          pagination={true}
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
        {/* </cenetr>
        </div> */}
         </div>
      </>
    )
  }
  return (
    <div className="shoe-container">
      <div className="top" style={{ textAlign: "center" }}>
        <h1 style={{ paddingBottom: "20px", fontWeight: "700" }}>Shoes</h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Quis ipsum.</p>
      </div>
      <Swiper
        modules={[Pagination, Navigation]}
        className="mySwiper"
        navigation={true}
        loopFillGroupWithBlank={true}
        slidesPerView={5}
        spaceBetween={40}
        slidesPerGroup={1}
        pagination={true}
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

export default Shoeslide;
