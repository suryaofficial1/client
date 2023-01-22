import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";

const DynamicSlider = ()=>{
    // const [users, setUsers] = useState([]);
     const [offsetRadius, setOffsetRadius] = useState(2);
    // const { data, loading, error } = useFetch(
    //     `/products?populate=*`
    //   );

    const [users, setUsers] = useState([]);

    const f = async () => {
        const res = await fetch("https://amrit-dawani.onrender.com/api/products?populate=*");
        const json = await res.json();
        setUsers(json.data);

    }; 
       
    React.useEffect(() => {
        f();
    }, []);
   
    var result = users.length > 0 ? users?.map(user => ({ key: user.id, content: <img src={user?.attributes?.img?.data?.attributes?.url} alt="1" /> })):'';

    return (
        <div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
            
            <Carousel
                slides={result}
                showNavigation='true'
                offsetRadius={offsetRadius}
                // animationConfig={config}
            >
            </Carousel>
        </div>

      );

}

export default DynamicSlider;