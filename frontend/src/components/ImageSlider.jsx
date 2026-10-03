import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import Cover from '../assets/img/covers/cover.jpg';
import Cover2 from '../assets/img/covers/cover2.jpg';
import Cover3 from '../assets/img/covers/cover3.jpg';
import Cover4 from '../assets/img/covers/cover4.jpg';
import CardCover from './CardCover';

const ImageSlider = () => {
	return (
		<section className="home home--bg">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<h1 className="home__title">
							<b>NEW ITEMS</b> OF THIS SEASON
						</h1>

						{/* Custom navigation buttons – same classes as before */}
						<button
							className="home__nav home__nav--prev"
							type="button"
						>
							<i className="icon ion-ios-arrow-round-back"></i>
						</button>

						<button
							className="home__nav home__nav--next"
							type="button"
						>
							<i className="icon ion-ios-arrow-round-forward"></i>
						</button>
					</div>

					<div className="col-12">
						<Swiper
							modules={[Navigation]}
							spaceBetween={30}
							loop={true}
							speed={600}
							allowTouchMove={false}          // same as mouseDrag/touchDrag: false
							navigation={{
								prevEl: '.home__nav--prev',
								nextEl: '.home__nav--next',
							}}
							breakpoints={{
								0: { slidesPerView: 2 },
								576: { slidesPerView: 2 },
								768: { slidesPerView: 3 },
								992: { slidesPerView: 4 },
								1200: { slidesPerView: 4 },
							}}
							className="home__carousel"
						>
							{/* Slide 1 */}
							<SwiperSlide>
								<div className="card card--big">
									<CardCover
										image={Cover}
										title="I Dream in Another Language"
										rate="7.8"
										category={["Action", "Thriller"]}
									/>
								</div>
							</SwiperSlide>

							{/* Slide 2 */}
							<SwiperSlide>
								<div className="card card--big">
									<CardCover
										image={Cover2}
										title="Benched"
										rate="7.1"
										category={["Comedy"]}
									/>
								</div>
							</SwiperSlide>

							{/* Slide 3 */}
							<SwiperSlide>
								<div className="card card--big">
									<CardCover
										image={Cover3}
										title="Whitney"
										rate="6.3"
										category={["Romance", "Drama"]}
									/>
								</div>
							</SwiperSlide>

							{/* Slide 4 */}
							<SwiperSlide>
								<div className="card card--big">
									<CardCover
										image={Cover4}
										title="Blindspotting"
										rate="7.9"
										category={["Comedy", "Drama"]}
									/>
								</div>
							</SwiperSlide>

							{/* Slide 5 */}
							<SwiperSlide>
								<div className="card card--big">
									<CardCover
										image={Cover}
										title="I Dream in Another Language"
										rate="8.4"
										category={["Action", "Thriller"]}
									/>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ImageSlider;