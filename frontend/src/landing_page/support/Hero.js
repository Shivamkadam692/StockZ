import React from 'react';


function Hero() {
    return ( 

        <div className="container mb-5 p-5">
            <div className='row text-center' >

                <img src="media/images/homeHero.png" alt="Hero Img" className="mb-5" />
                <h1>Invest in Everything</h1>
                <p>Buy stocks, crypto, ETFs, and more, all in one app.</p>
                <button className=' p-2 btn btn-primary fs-5  ' style={{width:"20%" , margin: "auto", }}>Signup</button>
           
        </div>
        </div>
     );
}


export default Hero;