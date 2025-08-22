import React, { useEffect } from 'react';

// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Protocol() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
        </>
    );
}
