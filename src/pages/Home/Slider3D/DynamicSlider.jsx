import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Carousel from "react-spring-3d-carousel";
import { SwiperSlide } from "swiper/react";
import Card from "../../../components/Card/Card";

const DynamicSlider = ()=>{

    const [users, setUsers] = useState([]);

    const f = async () => {
        const res = await fetch("https://amrit-dawani.onrender.com/api/products?populate=*");
        const json = await res.json();
        console.log("----------json.data-------",json.data)
        setUsers(json.data);

    };
    console.log("----------users-------",users)
    React.useEffect(() => {
        f();
    }, []);
   
    var result = users.map(user => ({ key: user.id, content: <img src={user?.attributes?.img?.data?.attributes?.url} alt="1" /> }));
    

    return (
        <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
            
            <Carousel
                slides={result}
                showNavigation='true'
            >
            </Carousel>
            {/* {users?.map((item, i) => 
            <SwiperSlide>
                <Card item={item} key={item.id} isTabletOrMobile={isTabletOrMobile}/>
            </SwiperSlide>)} */}
        </div>

      );

}

export default DynamicSlider;