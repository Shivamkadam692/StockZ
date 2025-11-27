import React from 'react';


function Pricing() {
    return ( 

      <div className="container mt-5 mb-5" >
         <div className="row">
     
         <div className="col-4">
            

            <h1 className='mb-4'>Unbeatable pricing</h1>
           
            <p className='mb-2'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
      <div className=''>
                <a href='#' className=' 'style={{textDecoration:"none"}}>Explore Our Product</a>
              
                </div>

      
        </div>
        <div className='col-2'></div>
        
                <div className="col-6 mb-5">

                    <div className='row'>

                           <div className=' text-center col p-5 ml-2' style={{border:"solid black 2px", borderRadius:"10px"}}>

                        <h1>0</h1>
                        <p>Account Opening Fee</p>

                    </div>
                       <div  className=' text-center col p-5 ' style={{border:"solid black 2px", borderRadius:"10px"}}>

                        <h1>20</h1>
                        <p>Account Opening Fee</p>

                    </div>



                    </div>
                  
              
        </div>
        </div>
        
        </div>
     );
}


export default Pricing;