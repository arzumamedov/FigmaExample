import { A11y, Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Slider.css';
import RIGHT_VECTOR from '../../assets/svgs/right_vector.svg'
import HEART from '../../assets/svgs/heart.svg';

const Slider = ({ slidesData }) => {
    const extendedSlidesData = [...slidesData, ...slidesData, ...slidesData];

    return (
        <Swiper
            className='swiper'
            modules={[Navigation, Keyboard, Pagination, Autoplay, A11y]}
            navigation={{
                prevEl: '.swiper-button-prev-custom',
                nextEl: '.swiper-button-next-custom',
            }}
            keyboard={{ enabled: true }}
            slidesPerView={4}
            loop={true}
            spaceBetween={30}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {extendedSlidesData.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className='img-1'>
                        <img className='image' src={item.img} alt="" />
                        <div className='heartBg'>
                            <img src={HEART} alt="" />
                        </div>
                        <p className='name'>{item.name}</p>
                        <div className='calendarContainer'>
                            <img className='calendar' src={item.firstsvg} alt="" />
                            <p className='date'>{item.date}</p>
                        </div>
                        <div className='checkContainer'>
                            <img src={item.secondsvg} alt="" />
                            <p className='checkNumber'>{item.check}</p>
                        </div>
                        <div className='ticketContainer'>
                            <img src={item.thirdsvg} alt="" />
                            <p className='price'>${item.price}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
            <div className="swiper-button-next-custom">
                <div className='nextIn'>
                    <img src={RIGHT_VECTOR} alt="Previous" />
                </div>
            </div>
        </Swiper>
    );
};

export default Slider;
