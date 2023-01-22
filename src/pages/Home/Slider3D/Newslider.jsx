import { useMediaQuery } from "react-responsive";
import SwiperCore, { EffectCoverflow, Navigation, Pagination } from "swiper/core";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import useFetch from "../../../hooks/useFetch";
import SliderCard from "./SliderCard";
import "./Styles.css";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);



 function Newslider() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 500px)' })
    const { data, loading, error } = useFetch(
        `/products?populate=*`
      );
  return (<>
      <center>
    <div style={{width: "80%"}}>
      <Swiper
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={5}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 900,
          modifier: 1,
        //   slideShadows: true
        }}
        // pagination={{
        //   clickable: true
        // }}
        // className="mySwiper"
      >
        
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : 
          <>
            {data?.map((item, i) => 
            <SwiperSlide>
                <SliderCard item={item} key={item.id} isTabletOrMobile={isTabletOrMobile}/>
            </SwiperSlide>
            )}
            
          </>
          }
      </Swiper>
    </div>
      </center>
    </>
  );
}
export default Newslider;
