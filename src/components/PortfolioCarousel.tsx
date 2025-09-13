import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import PortfolioCard from './PortfolioCard';
import { portfolios, type PortfolioCardProps } from '../assets/content/portfolio';
import './style.css'

const PortfolioCarousel = () => {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        navigation={true}
        slidesPerView={'auto'}
        // loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2.5,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        
        {portfolios.slice(0, 6).reverse().map((portfolio: PortfolioCardProps) => (  // Always ensures six cards are displayed
            <SwiperSlide style={{ width: "300px", height: "470px"  }}>
                <PortfolioCard {...portfolio} />
            </SwiperSlide>
        ))}
        
      </Swiper>
    </>
  );
}

export default PortfolioCarousel;