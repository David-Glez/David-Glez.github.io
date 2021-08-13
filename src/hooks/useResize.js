import {useLayoutEffect, useState} from 'react'

const useResize = () => {
    const [size, setSize] = useState([0, 0]);

    useLayoutEffect(() => {

        const updateSize = () => {
            setSize([window.innerWidth, window.innerHeight]);
        }
        
        window.addEventListener('resize', updateSize);

        updateSize();

        
        return () => {
            window.removeEventListener('resize', updateSize);
            //document.body.style.width = size[0];
            
        }
    }, []);

    return size;
}

export default useResize;