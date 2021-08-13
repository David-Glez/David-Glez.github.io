import { useLayoutEffect, useState } from "react";

const useScroll = () => {

    const [size, setSize] = useState([0, 0])

    useLayoutEffect(() => {
        window.onscroll = () => {
            const height = document.getElementById('header-main').clientHeight
            const scrollValue = window.scrollY

            const item = document.getElementById('navegation')

            if((scrollValue > height * .20) && (scrollValue < height) && (window.outerWidth > 768)){
                item.style.opacity = 0
            }else{
                if(scrollValue < height * .20){
                    item.classList.remove('opaque')
                    item.style.opacity = 1
                }else{
                    item.classList.add('opaque')
                    item.style.opacity = 1
                }
            }

        }
    }, [])
}

export default useScroll;