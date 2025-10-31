import Image from 'next/image'
import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function Sliders() {
    return (
        <>

            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className="flex justify-center">
                        <img
                            src="/Screenshot 2025-10-23 000653.png"
                            width={400}
                            height={500}
                            alt='1'
                        />
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex justify-center">
                        <img
                            src="/Screenshot 2025-10-23 000733.png"
                            width={400}
                            height={500}
                            alt='1'
                        />
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex justify-center">
                        <img
                            src="/Screenshot 2025-10-23 000930.png"
                            width={400}
                            height={500}
                            alt='1'

                        />
                    </div>


                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex justify-center">
                        <img
                            src="/Screenshot 2025-10-23 001007.png"
                            width={400}
                            height={500}
                            alt='1'

                        />
                    </div>


                </SwiperSlide>
            </Swiper>
        </>
    )
}
