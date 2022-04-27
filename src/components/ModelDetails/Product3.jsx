import React, {useRef, useEffect} from 'react'
import useOnScreen from '../../hooks/useOnScreen'
import './Product3.scss'

export default function Product3 ({ title, description, index, updateImage }) {

    const ref=useRef(null);
    const onScreen = useOnScreen(ref);

    useEffect (() => {
        if(onScreen) {
            updateImage(index);
        }

    }, [onScreen, index])
 
  return (
    <div ref={ref} className='product-slide'>
      <h3 className='makeup-title2'>
        {title}
      </h3>
      <p className='make-up-desc2'>
        {description}

      </p>
        
    </div>
  )
}