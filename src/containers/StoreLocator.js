import React, { useState } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Map from '../components/Map';

const StoreLocator = () => {
    const locations = ['Portland','Astoria',''];
    const [showPortland,setShowPortland] = useState(false);
    const [showAstoria, setShowAstoria] = useState(false);

    return (
     <div>
         <Header />
         <div style={{display:'flex'}}>

            {locations.map(location=>{
            return <Button key={location} location={location} 
            setShowAstoria={setShowAstoria} setShowPortland={setShowPortland}
            showAstoria={showAstoria} showPortland={showPortland}/>
            })}

         </div>
         <Map showPortland={showPortland} showAstoria={showAstoria}/>
     </div>
 )
}

export default StoreLocator;