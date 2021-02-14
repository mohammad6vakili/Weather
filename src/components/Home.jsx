import React from 'react';
import Fade from 'react-reveal';
import Zoom from 'react-reveal';

const Home=()=>{

    return(
       
        <div className="home-wrapper">
            
            <Zoom>
            <div className='home-anim'> 
                <i id='home-cloud' className="fa fa-cloud"></i>
                <i id='water-one' className="fa fa-tint"></i>
                <i id='water-two' className="fa fa-tint"></i>
                <i id='water-three' className="fa fa-tint"></i>
                <i id='water-four' className="fa fa-tint"></i>
                <i id='water-five' className="fa fa-tint"></i>
                <i id='water-six' className="fa fa-tint"></i>
                <i id='water-seven' className="fa fa-tint"></i>
                <i id='water-eight' className="fa fa-tint"></i>
            </div>
            </Zoom>
            <Fade bottom>
            <div>
            <div className='home-title'>Online Weather</div>
                <div className='home-des'>
                <p style={{fontSize:18+'px',textAlign:'center'}}>online weather and optional forecast </p>
                <p style={{fontSize:16+'px',textAlign:'center'}}>save your favorite city on the watchlist</p>
            </div>
            </div>
              </Fade>
        </div>
      
    )
}
export default Home;