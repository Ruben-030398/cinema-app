import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';
import { useDiscover } from "@/entities/discover-movies/model";

const BREAKPOINTS = {
  lg: 1200,
  md: 900,
  sm: 600,
  xl: 1536,
  xs: 0
}

export function DiscoverCarousel() {
  const { data } = useDiscover();

  return (
    <div className="w-full items-center justify-center flex my-2 px-0 mb-5 sm:mb-10 md:pb-24">
      <Swiper
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          [BREAKPOINTS.xl]: {
            slidesPerView: 1.3,
            slidesPerGroup: 1,
          },
          [BREAKPOINTS.lg]: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          [BREAKPOINTS.md]: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          [BREAKPOINTS.sm]: {
            slidesPerView: 1.5,
            slidesPerGroup: 1,
          },
          [BREAKPOINTS.xs]: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
        }}
        spaceBetween={10}
        slidesPerView={3}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          data?.results.map(slide => {
            return (
              <SwiperSlide key={slide.id}>
                <div className="md:rounded-lg sm:rounded-3xl overflow-hidden shadow-2xl relative">
                  <img className="max-h-[80%]" src={`${import.meta.env.VITE_APP_ASSETS_ENDPOINT}/original${slide.backdrop_path}`} />
                  <div className="w-full h-full absolute top-0 left-0 flex-col flex p-6 md:p-4 items-start justify-end">
                    <span className="text-lg md:text-2xl font-medium">{slide.title}</span>
                    <span className="bg-slate-50 bg-opacity-40 px-2 py-1 rounded-md text-md font-medium">{slide.vote_average.toFixed(1)}</span>
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>

  )
}
