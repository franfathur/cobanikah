import { faGift, faMoneyBill1 } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import ModalAmplop from '../../Components/modalAmplop';
import ModalKado from '../../Components/modalKado';
import hiasan1 from '../../Img/hiasan-1.png'
import db from '../../Constants/firebase'
import { collection, addDoc, query, onSnapshot, serverTimestamp, orderBy } from 'firebase/firestore';
import moment from 'moment/moment';
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'moment/locale/id'
import Swal from 'sweetalert2';

moment.locale('id')

export default function Reservasi() {
    const [visibleAmplop, setVisibleAmplop] = useState(false);
    const [visibleKado, setVisibleKado] = useState(false);
    const [ucapan, setUcapan] = useState([]);
    const [formNama, setFormNama] = useState("");
    const [formPesan, setFormPesan] = useState("");
    const [formKonfirmasi, setFormKonfirmasi] = useState(''); // State baru untuk konfirmasi ucapan
    const [btnLoader, setBtnLoader] = useState(false);

    const [rsvpNama, setRsvpNama] = useState('');
    const [rsvpTamu, setRsvpTamu] = useState('');
    const [rsvpPesan, setRsvpPesan] = useState('');
    const [rsvpKonfir, setRsvpKonfir] = useState('');

    const openAmplop = () => setVisibleAmplop(true);
    const closeAmplop = () => setVisibleAmplop(false);
    const openKado = () => setVisibleKado(true);
    const closeKado = () => setVisibleKado(false);

    const reservasi = () => {
        if (rsvpNama === '') {
            Swal.fire({ text: 'Isi Nama!', icon: 'warning', confirmButtonColor: '#413327', confirmButtonText: 'OKE' })
        } else if (rsvpTamu === '') {
            Swal.fire({ text: 'Isi Jumlah Tamu!', icon: 'warning', confirmButtonColor: '#413327', confirmButtonText: 'OKE' })
        } else if (rsvpPesan === '') {
            Swal.fire({ text: 'Isi Pesan!', icon: 'warning', confirmButtonColor: '#413327', confirmButtonText: 'OKE' })
        } else if (rsvpKonfir === '') {
            Swal.fire({ text: 'Pilih Konfirmasi!', icon: 'warning', confirmButtonColor: '#413327', confirmButtonText: 'OKE' })
        } else {
            window.open(
                `https://api.whatsapp.com/send?phone=6285606021464&text=Hai%20Leo%20%26%20Afifah%2C%20saya%20*${rsvpNama}*%20ingin%20konfirmasi%20kehadiran%20bahwa%20*${rsvpKonfir}*%20bersama%20*${rsvpTamu}*%20orang.%20Saya%20ucapkan%3A%0A*${rsvpPesan}*.%20Terima%20kasih.`,
                "_blank"
            );
        }
    }

    const addUcapan = async () => {
        if (formNama !== '' && formPesan !== '' && formKonfirmasi !== '') {
            setBtnLoader(true);
            const storeUcapan = collection(db, 'ucapan')
            await addDoc(storeUcapan, {
                created: serverTimestamp(),
                nama: formNama,
                pesan: formPesan,
                konfirmasi: formKonfirmasi, // Tambahkan data konfirmasi
            });
            setFormNama('');
            setFormPesan('');
            setFormKonfirmasi(''); // Reset state konfirmasi
            setBtnLoader(false);
            Swal.fire({ text: 'Ucapan berhasil dikirim!', icon: 'success', confirmButtonColor: '#413327', confirmButtonText: 'OKE' })
        } else {
            Swal.fire({ text: 'Isi Nama, Pesan & Konfirmasi!', icon: 'warning', confirmButtonColor: '#413327', confirmButtonText: 'OKE' })
        }
    }

    const [expiryTime] = useState("26 Aug 2025 10:00:00");
    const [countdownTime, setCountdownTime] = useState({
        countdownDays: '',
        countdownHours: '',
        countdownMinutes: '',
        countdownSeconds: ''
    });

    const countdownTimer = () => {
        const timeInterval = setInterval(() => {
            const countdownDateTime = new Date(expiryTime).getTime();
            const currentTime = new Date().getTime();
            const remainingDayTime = countdownDateTime - currentTime;

            const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
            const totalHours = Math.floor((remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const totalMinutes = Math.floor((remainingDayTime % (1000 * 60 * 60)) / (1000 * 60));
            const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);

            const runningCountdownTime = {
                countdownDays: totalDays,
                countdownHours: totalHours,
                countdownMinutes: totalMinutes,
                countdownSeconds: totalSeconds
            }

            setCountdownTime(runningCountdownTime);

            if (remainingDayTime < 0) {
                clearInterval(timeInterval);
            }
        }, 1000);
    }

    useEffect(() => {
        const Fetchdata = async () => {
            const q = query(collection(db, 'ucapan'), orderBy('created', 'desc'))
            onSnapshot(q, (querySnapshot) => {
                setUcapan(querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            })
        }
        Fetchdata();
        countdownTimer();
        AOS.init();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div id="gift" className='my-16'>
                <div className='flex justify-center mb-8'>
                    <img src={hiasan1} data-aos="fade-up" alt='hiasan1' className='w-[80px]' />
                </div>
                <h1 data-aos="fade-up" className='text-center text-2xl font-semibold custom-font-3 mx-4 text-[#413327]'>Menuju Waktu Acara</h1>
                <h1 data-aos="fade-up" className='text-center text-4xl font-semibold custom-font-3 mx-4 mb-8 text-[#413327]'>Pernikahan Kami</h1>
                <div data-aos="fade-up" className='flex justify-center gap-4 mb-8'>
                    <div className='rounded-xl md:w-[200px] w-[80px] py-6 bg-[#413327] text-center custom-font-3 text-white'>
                        <h1 className='md:text-5xl text-xl font-bold'>{countdownTime.countdownDays}</h1>
                        <p className='md:text-lg text-xs font-semibold'>Hari</p>
                    </div>
                    <div className='rounded-xl md:w-[200px] w-[80px] py-6 bg-[#413327] text-center custom-font-3 text-white'>
                        <h1 className='md:text-5xl text-xl font-bold '>{countdownTime.countdownHours}</h1>
                        <p className='md:text-lg text-xs font-semibold'>Jam</p>
                    </div>
                    <div className='rounded-xl md:w-[200px] w-[80px] py-6 bg-[#413327] text-center custom-font-3 text-white'>
                        <h1 className='md:text-5xl text-xl font-bold '>{countdownTime.countdownMinutes}</h1>
                        <p className='md:text-lg text-xs font-semibold'>Menit</p>
                    </div>
                    <div className='rounded-xl md:w-[200px] w-[80px] py-6 bg-[#413327] text-center custom-font-3 text-white'>
                        <h1 className='md:text-5xl text-xl font-bold '>{countdownTime.countdownSeconds}</h1>
                        <p className='md:text-lg text-xs font-semibold'>Detik</p>
                    </div>
                </div>
                <div data-aos="fade-up" className='flex justify-center'>
                    <button type="button" onClick={() => openAmplop()} className="text-white shadow-lg text-md bg-[#413327] hover:bg-[#31261d] font-bold rounded-xl px-5 py-3.5 mr-2 mb-2">
                        <FontAwesomeIcon icon={faMoneyBill1} /> Amplop
                    </button>
                    <button type="button" onClick={() => openKado()} className="text-white shadow-lg text-md bg-[#413327] hover:bg-[#31261d] font-bold rounded-xl px-5 py-3.5 mr-2 mb-2">
                        <FontAwesomeIcon icon={faGift} /> Kirim Kado
                    </button>
                </div>
            </div>

            {/* Konfirmasi Kehadiran */}
            <div className='mt-16 bg-[#413327] py-8'>
                <h1 data-aos="fade-up" className='text-center text-white text-3xl font-semibold custom-font-3 mx-4 mb-4'>Konfirmasi Kehadiran</h1>
                <div data-aos="fade-up" className='max-w-lg mx-auto mb-16'>
                    <div className='mx-4'>
                        <input value={rsvpNama} onChange={(e) => setRsvpNama(e.target.value)} type="text" autoComplete='off' className="bg-gray-50 text-[#413327] border border-gray-300 font-bold text-sm rounded-lg block w-full p-2.5 mb-2" placeholder="Isi Nama" />
                        <input type="text" value={rsvpTamu} onChange={(e) => setRsvpTamu(e.target.value)} autoComplete='off' className="bg-gray-50 text-[#413327] border border-gray-300 font-bold text-sm rounded-lg block w-full p-2.5 mb-2" placeholder="Jumlah Tamu" />
                        <textarea rows="4" value={rsvpPesan} onChange={(e) => setRsvpPesan(e.target.value)} className="block p-2.5 w-full text-sm text-[#413327] font-bold bg-gray-50 rounded-lg border border-gray-300 mb-2" placeholder="Pesan Ucapan"></textarea>
                        <label className='text-left font-semibold text-white'>Konfirmasi</label>
                        <div className="flex items-center mt-2" onClick={() => setRsvpKonfir('Iya, Saya Akan Datang')}>
                            <input type="radio" name="default-radio" className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500" />
                            <label className="ml-2 text-sm font-medium text-white">Iya, Saya Akan Datang</label>
                        </div>
                        <div className="flex items-center mt-2 mb-4" onClick={() => setRsvpKonfir('Maaf, Saya Tidak Bisa Datang')}>
                            <input type="radio" name="default-radio" className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500" />
                            <label className="ml-2 text-sm font-medium text-white">Maaf, Saya Tidak Bisa Datang</label>
                        </div>
                        <button onClick={reservasi} className='py-3 bg-green-600 rounded-full w-full mb-4 text-white hover:bg-green-700'>
                            Reservasi via Whatsapp
                        </button>
                    </div>
                </div>

                {/* Kirim Ucapan */}
                <h1 data-aos="fade-up" className='text-center text-white text-2xl font-semibold custom-font-3 mx-4'>Kirim Pesan</h1>
                <h1 data-aos="fade-up" className='text-center text-white md:text-4xl text-2xl font-semibold custom-font-3 mx-4 mb-4'>Untuk Kedua Mempelai</h1>
                <div data-aos="fade-up" className='max-w-lg mx-auto mb-16'>
                    <div className='mx-4'>
                        <input autoComplete='off' type="text" value={formNama} onChange={(e) => setFormNama(e.target.value)} className="bg-gray-50 text-[#413327] border border-gray-300 font-bold text-sm rounded-lg block w-full p-2.5 mb-2" placeholder="Isi Nama" />
                        <textarea autoComplete='off' rows="4" value={formPesan} onChange={(e) => setFormPesan(e.target.value)} className="block p-2.5 w-full text-sm text-[#413327] font-bold bg-gray-50 rounded-lg border border-gray-300 mb-2" placeholder="Pesan"></textarea>

                        {/* Kolom Konfirmasi Kehadiran yang baru */}
                        <label className='text-left font-semibold text-white'>Konfirmasi Kehadiran</label>
                        <div className="flex items-center mt-2">
                            <input
                                type="radio"
                                name="konfirmasi-hadir"
                                value="Hadir"
                                checked={formKonfirmasi === 'Hadir'}
                                onChange={(e) => setFormKonfirmasi(e.target.value)}
                                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500"
                            />
                            <label className="ml-2 text-sm font-medium text-white">Hadir</label>
                        </div>
                        <div className="flex items-center mt-2 mb-4">
                            <input
                                type="radio"
                                name="konfirmasi-hadir"
                                value="Tidak Hadir"
                                checked={formKonfirmasi === 'Tidak Hadir'}
                                onChange={(e) => setFormKonfirmasi(e.target.value)}
                                className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500"
                            />
                            <label className="ml-2 text-sm font-medium text-white">Tidak Hadir</label>
                        </div>

                        <div className='flex justify-between '>
                            {
                                btnLoader === false ?
                                    <button onClick={addUcapan} className='py-3 px-4 bg-green-600 rounded-xl mb-4 text-white hover:bg-green-700'>
                                        Kirim Ucapan
                                    </button> :
                                    <button disabled className='py-3 px-4 rounded-xl mb-4 text-white bg-green-700'>
                                        <svg aria-hidden="true" role="status" className="inline mr-2 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591..." fill="#E5E7EB" />
                                        </svg>
                                        Memuat...
                                    </button>
                            }
                            <h1 className='custom-font-4 text-white mt-2'>{ucapan.length} Pesan</h1>
                        </div>

                        <div className='max-h-[500px] overflow-auto px-2'>
                            {ucapan.map((ucap) => (
                                <div key={ucap.id} className='rounded-3xl rounded-bl-none bg-white p-4 custom-font-4 mb-4'>
                                    <h1 className='text-[#413327] font-bold text-sm'>{ucap.data.nama}</h1>
                                    <p className='text-gray-500/75 font-semibold text-xs mb-2'>
                                        {ucap.data.created ? moment(ucap.data.created.toDate()).fromNow() : 'baru saja'}
                                    </p>
                                    <p className='text-xs text-gray-600 font-semibold'>{ucap.data.pesan}</p>
                                    {/* Tampilkan konfirmasi kehadiran */}
                                    <p className='text-xs text-gray-600 font-semibold'>
                                        Konfirmasi: {ucap.data.konfirmasi}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <ModalAmplop visible={visibleAmplop} onClose={closeAmplop} />
            <ModalKado visible={visibleKado} onClose={closeKado} />
        </>
    )
}
