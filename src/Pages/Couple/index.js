import React, { useEffect } from 'react'
import hiasan1 from '../../Img/hiasan-1.png'
import pria from '../../Img/compress/pria.webp'
import wanita from '../../Img/compress/wanita.webp'
import bg1 from '../../Img/bg1.jpg'
import bgm1 from '../../Img/bgm1.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Couple() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <style>
        {`
          /* Background responsif */
          .couple-section {
            background-image: url(${bgm1});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            width: 100%;
            position: relative;
          }

          @media (min-width: 768px) {
            .couple-section {
              background-image: url(${bg1});
            }
          }

          /* Overlay transparan */
          .couple-overlay {
            position: absolute;
            inset: 0;
            background: rgba(255, 255, 255, 0.7); /* Putih susu transparan */
          }
        `}
      </style>

      {/* SECTION COUPLE */}
      <div className="couple-section flex flex-col justify-center items-center py-16 relative">
        {/* overlay */}
        <div className="couple-overlay"></div>

        {/* konten */}
        <div className="w-full max-w-5xl px-6 md:px-12 lg:px-24 relative z-10">
          <div className='flex justify-center mb-8'>
            <img src={hiasan1} alt='hiasan1' className='w-[80px]' data-aos="fade-up" />
          </div>

          <h1 className='text-center text-3xl font-semibold arial mb-2 text-[#413327]' data-aos="fade-up">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْمِ
          </h1>
          <p className='text-center arial text-[#413327] font-bold mb-2' data-aos="fade-up">
            Assalamualaikum Wr Wb
          </p>
          <p className='text-center arial text-[#413327] text-sm mb-8' data-aos="fade-up">
            Maha suci Allah SWT yang telah menciptakan makhluk-Nya berpasang-pasangan.
            Tanpa mengurangi rasa hormat, dengan ini kami bermaksud mengundang Bapak/Ibu/Saudara/i
            untuk hadir pada acara Ngunduh Mantu kami :
          </p>

          {/* grid mempelai */}
          <div id="mempelai" className='grid md:grid-cols-2 grid-cols-1 gap-12'>
            <div>
              <center>
                <img src={pria} alt='mempelai-pria' data-aos="fade-up" loading="lazy" className='w-[300px] md:w-[350px]' />
              </center>
              <h1 data-aos="fade-up" className='text-center custom-font-3 md:text-2xl text-lg text-[#413327] font-bold mb-4'>
                Mempelai Pria
              </h1>
              <h1 data-aos="fade-up" className='text-center custom-font-2 lg:text-5xl text-4xl text-[#413327] font-bold mb-2'>
                Leo Dwi Kurniawan
              </h1>
              <p data-aos="fade-up" className='text-[#413327] font-semibold text-center md:text-base text-sm'>
                Putra Kedua dari <br /> Bapak Sugiman & Ibu Sri Purwati
              </p>
            </div>
            <div>
              <center>
                <img src={wanita} alt='mempelai-wanita' data-aos="fade-up" loading="lazy" className='w-[300px] md:w-[350px]' />
              </center>
              <h1 data-aos="fade-up" className='text-center custom-font-3 md:text-2xl text-lg text-[#413327] font-bold mb-4'>
                Mempelai Wanita
              </h1>
              <h1 data-aos="fade-up" className='text-center custom-font-2 lg:text-5xl text-4xl text-[#413327] font-bold mb-2'>
                Nur Roisyatul Afifah
              </h1>
              <p data-aos="fade-up" className='text-[#413327] font-semibold text-center md:text-base text-sm'>
                Putri Kedua dari <br /> Bapak Ahmad Cholil Sa'roni & Ibu Siti Halimatus Sa'diah
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION DOA */}
      <div className='bg-[#413327] flex justify-center'>
        <div className='py-16 w-full max-w-5xl px-6 md:px-12 lg:px-24'>
          <p data-aos="fade-up" className='text-center md:text-3xl text-2xl font-semibold arial mb-8 text-white'>
            وَمِنْ كُلِّ شَيْءٍ خَلَقْنَا زَوْجَيْنِ لَعَلَّكُمْ تَذَكَّرُونَ
          </p>
          <p data-aos="fade-up" className='text-center md:text-base text-sm font-semibold italic arial mb-2 text-white'>
            " Dan segala sesuatu Kami ciptakan berpasang-pasangan agar kamu mengingat (kebesaran Allah). "
          </p>
          <p data-aos="fade-up" className='text-center text-white font-bold italic'>( QS. Az-Zariyat ayat 49 )</p>
        </div>
      </div>
    </>
  )
}
