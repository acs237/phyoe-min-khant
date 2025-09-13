import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Keyboard, Mousewheel } from 'swiper/modules';
import PortfolioCard from './PortfolioCard';
import { portfolios, type PortfolioCardProps } from '../assets/content/portfolio';
import './portfolio-card-style.css'

const PortfolioCarousel = () => {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        navigation={true}
        slidesPerView={'auto'}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2.5,
          slideShadows: true,
        }}
        mousewheel={true}
        keyboard
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation, Keyboard, Mousewheel]}
        className="mySwiper"
      >
        
        {portfolios.slice(0, 6).reverse().map((portfolio: PortfolioCardProps) => (  // Always ensures six cards are displayed
            <SwiperSlide style={{ width: "300px", height: "450px"  }}>
                <PortfolioCard {...portfolio} />
            </SwiperSlide>
        ))}
        
      </Swiper>
    </>
  );
}

export default PortfolioCarousel;