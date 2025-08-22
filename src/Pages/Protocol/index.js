import React, { useEffect } from 'react'
import masker from '../../Img/masker.png'
import cucitangan from '../../Img/cucitangan.png'
import jagajarak from '../../Img/jagajarak.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Protocol() {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
        </>
    )
}