import styles from "./Gallery.module.css";
import { images } from "./Images-data";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination, EffectCoverflow } from "swiper";

export default function Gallery() {
	const pag = {
		pagination: {
			el: ".swiper-pagination",
			type: "bullet",
		},
	};

	return (
		<>
			<div className={styles["main-container"]}>
				<div className={styles["inner-container"]}>
					<Swiper
						modules={[EffectCoverflow, Navigation, Pagination]}
						effect={"coverflow"}
						slidesPerView={"auto"}
						grabCursor={true}
						centeredSlides={true}
						pagination={{ pag, clickable: true }}
						navigation={{ clickable: true }}
						coverflowEffect={{
							rotate: 0,
							stretch: 0,
							depth: 100,
							modifier: 1,
						}}
						id={styles["swiper-container"]}
					>
						{images.map((image) => {
							return (
								<SwiperSlide className={styles["swiper-slide"]} id={styles["swiper-slide"]} key={image.id}>
									<img className={styles["images"]} src={image.img} alt="images" />
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
			</div>
		</>
	);
}
