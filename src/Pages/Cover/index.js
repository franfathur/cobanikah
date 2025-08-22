import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useMemo } from 'react'
import { nama_pasangan } from '../../Constants/global'
import hiasan1 from '../../Img/hiasan-1.png'
import kelopak from '../../Img/kelopak.png' // ✅ Import gambar kelopak

export default function Cover({ transformUp, onClick }) {
    const fairyDust = useMemo(() =>
        [...Array(20)].map(() => ({
            size: Math.random() * 5 + 3,
            duration: Math.random() * 15 + 10,
            delay: Math.random() * 10,
            top: Math.random() * 100,
            left: Math.random() * 100,
            rand: Math.random() + 0.1,
        })), []
    )

    const petals = useMemo(() =>
        [...Array(15)].map(() => ({
            duration: Math.random() * 15 + 10,
            delay: Math.random() * 10,
            rand: Math.random() + 0.1,
            size: Math.random() * 20 + 20,
        })), []
    )

    return (
        <>
            <style>
                {`
                @keyframes gradient-animation {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }

                @keyframes fall {
                    0% {
                        transform: translateY(-100px) translateX(calc(var(--rand) * 300px)) rotate(0deg);
                        opacity: 0;
                    }
                    10% { opacity: 1; }
                    100% {
                        transform: translateY(110vh) translateX(calc(var(--rand) * 300px)) rotate(720deg);
                        opacity: 0;
                    }
                }

                @keyframes heartbeat {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                    100% { transform: scale(1); }
                }

                @keyframes fairy-sparkle {
                    0% { transform: translate(0, 0) scale(0.5); opacity: 0; }
                    50% { opacity: 0.8; }
                    100% { transform: translate(calc(var(--rand) * 100vw), calc(var(--rand) * 100vh)) scale(0.5); opacity: 0; }
                }

                @keyframes fly-in {
                    0% {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .fly-in {
                    animation: fly-in 1s ease-out forwards;
                }

                .fairy-dust {
                    position: absolute;
                    border-radius: 50%;
                    background: #fff;
                    will-change: transform, opacity;
                    animation: fairy-sparkle ease-in-out infinite;
                }

                .petal {
                    position: absolute;
                    will-change: transform, opacity;
                    animation: fall linear infinite;
                }
                `}
            </style>

            <div
                className={`fixed w-full h-full z-20 duration-700`}
                style={{
                    background: 'linear-gradient(-45deg, #E0F7FA, #B3E5FC, #BBDEFB)',
                    backgroundSize: '400% 400%',
                    animation: 'gradient-animation 15s ease infinite',
                    transform: transformUp ? 'translateY(-700px)' : 'none',
                    opacity: transformUp ? 0 : 1,
                }}
            >
                {/* Fairy Dust */}
                <div className="absolute w-full h-full overflow-hidden pointer-events-none">
                    {fairyDust.map((fd, i) => (
                        <div
                            key={i}
                            className="fairy-dust"
                            style={{
                                width: `${fd.size}px`,
                                height: `${fd.size}px`,
                                animationDuration: `${fd.duration}s`,
                                animationDelay: `${fd.delay}s`,
                                top: `${fd.top}%`,
                                left: `${fd.left}%`,
                                '--rand': fd.rand,
                            }}
                        />
                    ))}
                </div>

                {/* Petals */}
                <div className="absolute w-full h-full overflow-hidden pointer-events-none">
                    {petals.map((p, i) => (
                        <img
                            key={i}
                            src={kelopak}
                            alt="kelopak"
                            className="petal"
                            style={{
                                width: `${p.size}px`,
                                height: 'auto',
                                left: `${Math.random() * 100}%`,
                                top: `-${p.size}px`,
                                '--rand': p.rand,
                                animationDuration: `${p.duration}s`,
                                animationDelay: `${p.delay}s`,
                            }}
                        />
                    ))}
                </div>

                {/* Konten */}
                <div className='absolute w-full h-full'>
                    <div className='absolute top-1/4 left-0 right-0'>
                        <div className='text-center fly-in'>
                            <div className='flex justify-center mb-8'>
                                <img src={hiasan1} alt='hiasan1' className='w-[100px]' />
                            </div>
                            <div className='text-[#004d40] custom-font-2 font-semibold text-5xl mb-4'>
                                {nama_pasangan}
                            </div>
                            <div className='text-[#004d40] font-bold text-lg mb-4'>
                                Kpd Bpk/Ibu/Saudara/i
                            </div>
                            <p className='text-[#004d40] text-sm md:text-lg mb-3 lg:mx-96 md:mx-32 mx-8'>
                                Tanpa Mengurangi Rasa Hormat, Kami Mengundang Anda Untuk Berhadir Di Acara Ngunduh Mantu Kami.
                            </p>
                            <button
                                type="button"
                                onClick={onClick}
                                className="text-white text-md bg-[#428BAFFF] hover:bg-[#5695B5FF] font-bold rounded-xl px-5 py-3.5 mr-2 mb-2"
                                style={{ animation: 'heartbeat 1.5s ease-in-out infinite' }}
                            >
                                <FontAwesomeIcon icon={faEnvelopeOpen} /> Buka Undangan
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
