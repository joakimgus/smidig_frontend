import React from 'react';
import ItemImg from "../images/Image 2.png";

const SlideTwo = () => {
    return(
        <div className={'slide-container'} id={'slide-two'}>
            <img src={ItemImg} alt={'museumsartifakt'}/>
            <div className={'text-container'}>
                <h2 className={"slide-title"}>Mobilt minimuseum</h2>
                <p className={'slide-info'}><span>&#8212;</span> Få opplevelsen levert på døra, rett fra kilden</p>
            </div>
        </div>
    )
}

export default SlideTwo;