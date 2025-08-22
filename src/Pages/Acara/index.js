import React, { useEffect } from 'react'
import hiasan1 from '../../Img/hiasan-1.png'
import bgNgunduh from '../../Img/compress/cover-resepsi.webp'
import bg12 from '../../Img/bg12.png'
import jth from '../../Img/jth.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocation } from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Acara() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <style>
        {`
          .acara-section {
            position: relative;
            background-image: url(${bg12});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            overflow: hidden;
          }

          .falling {
            position: absolute;
            top: -100px;
            animation: fall linear infinite;
            opacity: 0.9;
          }

          @keyframes fall {
            0% {
              transform: translateY(0) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: translateY(110vh) rotate(360deg);
              opacity: 0;
            }
          }
        `}
      </style>

      <div className="acara-section py-16">
        {/* Falling Images */}
        {[...Array(12)].map((_, i) => (
          <img
            key={i}
            src={jth}
            alt="jatuh"
            className="falling"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${30 + Math.random() * 30}px`,
              animationDuration: `${5 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}

        <div className='flex justify-center mb-8'>
          <img src={hiasan1} data-aos="fade-up" alt='hiasan1' className='w-[80px]' />
        </div>
        <h1 data-aos="fade-up" className='text-center text-4xl font-semibold custom-font-3 mx-4 mb-16 text-[#004d40]'>
          Waktu & Lokasi <br /> Acara
        </h1>

        {/* Ngunduh Mantu */}
        <div className='flex justify-center mb-8 mx-4'>
          <div
            id="acara"
            className='rounded-2xl relative overflow-hidden'
            style={{
              backgroundImage: `url(${bgNgunduh})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
            <div className='absolute inset-0 bg-black/50'></div>
            <div className='relative py-16 px-8'>
              <h1 className='text-white font-bold text-5xl custom-font-2 mb-4 text-center'>Ngunduh Mantu</h1>
              <center><div className='w-24 rounded-lg h-1 bg-white mb-4'></div></center>
              <h1 className='text-white text-center font-normal arial mb-8'>
                Selasa <br /> 26 Agustus 2025 <br /> PUKUL 10.00 WIB - SELESAI
              </h1>
              <center><div className='w-24 rounded-lg h-1 bg-white mb-4'></div></center>
              <h1 className='text-center text-white mb-8'>
                <b>• Kediaman Mempelai Pria •</b> <br />
                Timur RSUD SLG, Jl. Semeru, Desa Tugurejo, <br />
                Kec. Ngasem, Kab. Kediri
              </h1>
            </div>
          </div>
        </div>

        {/* Peta Lokasi */}
        <center>
          <div data-aos="fade-up" className='max-w-4xl mx-6 rounded-xl'>
            <div className="mapouter mb-8">
              <div className="gmap_canvas">
                <iframe
                  title='maps'
                  className="gmap_iframe rounded-xl shadow-lg"
                  width="100%"
                  height="400px"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?q=-7.8221954,112.0603008&z=17&output=embed">
                </iframe>
              </div>
            </div>
            <center>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/maps?q=-7.8221954,112.0603008"
                className="text-white text-md bg-[#004d40] hover:bg-[#31261d] font-bold rounded-xl px-5 py-3.5 mr-2 mb-2"
              >
                <FontAwesomeIcon icon={faMapLocation} /> Lihat Lokasi
              </a>
            </center>
          </div>
        </center>
      </div>
    </>
  )
}
