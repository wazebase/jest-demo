import React from 'react';

const Button = ({...props}) => {

    const changeState = () => {
        if(props.location==='Portland') {
            props.setShowPortland(true);
            props.setShowAstoria(false);
        }
        else if(props.location==='Astoria') {
            props.setShowPortland(false);
            props.setShowAstoria(true);
        }
        else {
            props.setShowPortland(false);
            props.setShowAstoria(false);
        }
        return 1;
    }

    return (
<div>

    <button className='location-button' onClick={()=>changeState()}>{props.location?props.location:'All locations'}</button>
</div>
    )
}

export default Button;