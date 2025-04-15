"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import banner1 from "@/public/assets/banner1.png";

const Banner = () => {
  return (
    <>
      <style jsx global>{`
        .swiper-pagination {
          bottom: 20px !important;
        }
        .swiper-pagination-bullet {
          width: 16px;
          height: 16px;
          background: #e4e6ec;
          opacity: 0.5;
          margin: 0 6px;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #101828;
          transform: scale(1.5);
          opacity: 1;
        }
        .swiper-pagination-bullet-main {
          transform: scale(2);
          background-color: #101828;
        }
        .swiper-pagination-bullet-prev,
        .swiper-pagination-bullet-next {
          transform: scale(1.4);
          background-color: #e4e6ec;
          opacity: 0.6;
        }
      `}</style>

      <div className="vw-100">
        <Swiper
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          className="mySwiper vw-100 "
          modules={[Pagination]}
          style={{ height: "640px" }}
        >
          {[1, 2, 3].map((slide, i) => (
            <SwiperSlide key={i}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "640px",
                }}
              >
                <Image
                  src={banner1}
                  alt={`Banner ${i + 1}`}
                  fill
                  style={{ objectFit: "cover", paddingBottom: "50px" }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
