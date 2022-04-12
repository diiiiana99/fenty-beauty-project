import React from 'react';
import './MakeupSection.scss'

function Title ({title, setActiveIndex, index}) {
    return(
<div className='titles-container'
onMouseEnter={() => setActiveIndex(index)}
onMouseLeave={() => setActiveIndex(-1)}

>
    
    <div className='text-list'>
    <h3 className='about-title'>
        <span className='title'>{title}</span>
    </h3>
    </div>

</div>
    )
};
export default Title;