import React from 'react';
import s from './Background.module.css'
import pic from '../../assets/Vectors.png';

const Background = () => {
    return (<>
            <>
                <img className={s.img} src={pic} alt="pic" width="100%"/>
            </>
        </>

    );
}

export default Background;