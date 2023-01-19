import React from 'react';
import img1 from '../../../images/mask-group3@2x.png'
import img2 from '../../../images/mask-group4@2x.png'
import img3 from '../../../images/mask-group5@2x.png'
import img4 from '../../../images/mask-group6@2x.png'
import img5 from '../../../images/mask-group7@2x.png'
import img6 from '../../../images/mask-group8@2x.png'
import img7 from '../../../images/mask-group9@2x.png'
import img8 from '../../../images/mask-group10@2x.png'
import img9 from '../../../images/4-3@2x.png'

import './Imagegallery.css';

const Imagegallery = ()=>{

    return(
        <div className='container'>
            <div className="row">
                
                {/* <div className="s-container"> */}
                <div className="top" style={{ textAlign: "center"}}>
                <h1 style={{ paddingBottom: "20px", fontWeight: "700", paddingTop: "60px" }}>Category Fashion</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Quis ipsum suspendisse.</p>
                </div>
                <div className='col-md-6 m-p' >
                    <img src={img1} style={{width: '100%'}} />    
                </div>

                <div className='col-md-6'>

                    <div className='row'>
                        <div className='col-md-6' style={{paddingBottom:'5%'}}>
                            <img src={img2} style={{width: '100%'}} />    
                        </div>
                        <div className='col-md-6' style={{paddingBottom:'5%'}}>
                            <img src={img3} style={{width: '100%'}} />    
                        </div>
                        <div className='col-md-6' style={{paddingBottom:'5%'}}>
                            <img src={img4} style={{width: '100%'}} />    
                        </div>
                        <div className='col-md-6' style={{paddingBottom:'5%'}}>
                            <img src={img5} style={{width: '100%'}} />    
                        </div>
                    </div>

                </div>

                <div className='col-md-3 m-p'>
                    <img src={img6} style={{width: '100%'}} />    

                </div>
                <div className='col-md-3 m-p'>
                    <img src={img7} style={{width: '100%'}} />  
                </div>
                <div className='col-md-3 m-p'>
                    <img src={img8} style={{width: '100%'}} />  
                </div>
                <div className='col-md-3 m-p'>
                    <img src={img9} style={{width: '100%'}} />  
                </div>


            </div>
        </div>
    );
}

export default Imagegallery;