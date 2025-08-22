import React, { useEffect, useState } from 'react'
import FsLightbox from "fslightbox-react"
import hiasan2 from '../../Img/hiasan-2.png'

// Gallery images
import gallery1 from '../../Img/compress/gallery-1.webp'
import gallery2 from '../../Img/compress/gallery-2.webp'
import gallery3 from '../../Img/compress/gallery-3.webp'
import gallery4 from '../../Img/compress/gallery-4.webp'
import gallery5 from '../../Img/compress/gallery-5.webp'
import gallery6 from '../../Img/compress/gallery-6.webp'
import gallery8 from '../../Img/compress/gallery-8.webp'

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Gallery() {
    const [toggler, setToggler] = useState(false);
    const [gallerySlide, setGallerySlide] = useState(1);

    const bukaGallery = (param) => {
        setGallerySlide(param)
        setToggler(!toggler)
    }

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <FsLightbox
                toggler={toggler}
                sources={[
                    gallery1,
                    gallery2,
                    gallery3,
                    gallery4,
                    gallery5,
                    gallery6,
                    gallery8,
                ]}
                slide={gallerySlide}
            />

            {/* Hilangkan margin atas bawah */}
            <div className='m-0 bg-[#413327]'>
                <div className='px-8 py-12'>
                    <div className='flex justify-center mb-4'>
                        <img
                            data-aos="fade-up"
                            src={hiasan2}
                            alt='hiasan1'
                            className='w-[80px]'
                        />
                    </div>
                    <h1
                        data-aos="fade-up"
                        className='text-center text-white custom-font-2 md:text-6xl text-4xl mb-8'
                    >
                        Moment Bahagia
                    </h1>

                    <div id="gallery" className='flex justify-center lg:mx-72'>
                        <div className='grid grid-cols-2 gap-4'>

                            <div
                                className='w-auto hover:scale-105 hover:cursor-pointer duration-300'
                                onClick={() => bukaGallery(1)}
                            >
                                <img data-aos="fade-up" src={gallery1} loading="lazy" alt="gallery1" className='rounded-xl' />
                            </div>

                            <div
                                className='w-auto hover:scale-105 hover:cursor-pointer duration-300'
                                onClick={() => bukaGallery(2)}
                            >
                                <img data-aos="fade-up" src={gallery2} loading="lazy" alt="gallery2" className='rounded-xl' />
                            </div>

                            <div
                                className='w-auto col-span-2 hover:scale-105 hover:cursor-pointer duration-300'
                                onClick={() => bukaGallery(3)}
                            >
                                <img data-aos="fade-up" src={gallery3} loading="lazy" alt="gallery3" className='rounded-xl' />
                            </div>

                            <div
                                className='w-auto hover:scale-105 hover:cursor-pointer duration-300'
                                onClick={() => bukaGallery(4)}
                            >
                                <img data-aos="fade-up" src={gallery4} loading="lazy" alt="gallery4" className='rounded-xl' />
                            </div>

                            <div
                                className='w-auto hover:scale-105 hover:cursor-pointer duration-300'
                                onClick={() => bukaGallery(5)}
                            >
                                <img data-aos="fade-up" src={gallery5} loading="lazy" alt="gallery5" className='rounded-xl' />
                            </div>

                            <div
                                className='w-auto col-span-2 hover:scale-105 hover:cursor-pointer duration-300'
                                onClick={() => bukaGallery(6)}
                            >
                                <img data-aos="fade-up" src={gallery6} loading="lazy" alt="gallery6" className='rounded-xl' />
                            </div>

                            <div
                                className='w-auto col-span-2 hover:scale-105 hover:cursor-pointer duration-300'
                                onClick={() => bukaGallery(7)}
                            >
                                <img data-aos="fade-up" src={gallery8} loading="lazy" alt="gallery8" className='rounded-xl' />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
