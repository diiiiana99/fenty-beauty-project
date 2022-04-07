import React from 'react';
import './About.scss'

function Title ({title, setActiveIndex, index}) {
    return(
<div className='titles-container'
onMouseEnter={() => setActiveIndex(index)}
onMouseLeave={() => setActiveIndex(-1)}

>
    
    <div className='titles-list'>
    <h3 className='title'>
        <span>{title}</span>
    </h3>
    </div>
</div>
    )
};
export default Title;