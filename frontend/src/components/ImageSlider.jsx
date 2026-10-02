import React from 'react'
import Cover from '../assets/img/covers/cover.jpg'
import Cover2 from '../assets/img/covers/cover2.jpg'
import Cover3 from '../assets/img/covers/cover3.jpg'
import Cover4 from '../assets/img/covers/cover4.jpg'


const ImageSlider = () => {
  return (
    <section className="home home--bg">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<h1 className="home__title"><b>NEW ITEMS</b> OF THIS SEASON</h1>

					<button className="home__nav home__nav--prev" type="button">
						<i className="icon ion-ios-arrow-round-back"></i>
					</button>
					<button className="home__nav home__nav--next" type="button">
						<i className="icon ion-ios-arrow-round-forward"></i>
					</button>
				</div>

				<div className="col-12">
					<div className="owl-carousel home__carousel">
						<div className="item">
							{/* <!-- card --> */}
							<div className="card card--big">
								<div className="card__cover">
									<img src={Cover} alt="" />
									<a href="#" className="card__play">
										<i className="icon ion-ios-play"></i>
									</a>
								</div>
								<div className="card__content">
									<h3 className="card__title"><a href="#">I Dream in Another Language</a></h3>
									<span className="card__category">
										<a href="#">Action</a>
										<a href="#">Triler</a>
									</span>
									<span className="card__rate"><i className="icon ion-ios-star"></i>8.4</span>
								</div>
							</div>
							{/* <!-- end card --> */}
						</div>

						<div className="item">
							{/* <!-- card --> */}
							<div className="card card--big">
								<div className="card__cover">
									<img src={Cover2} alt="" />
									<a href="#" className="card__play">
										<i className="icon ion-ios-play"></i>
									</a>
								</div>
								<div className="card__content">
									<h3 className="card__title"><a href="#">Benched</a></h3>
									<span className="card__category">
										<a href="#">Comedy</a>
									</span>
									<span className="card__rate"><i className="icon ion-ios-star"></i>7.1</span>
								</div>
							</div>
							{/* <!-- end card --> */}
						</div>

						<div className="item">
							{/* <!-- card --> */}
							<div className="card card--big">
								<div className="card__cover">
									<img src={Cover3} alt="" />
									<a href="#" className="card__play">
										<i className="icon ion-ios-play"></i>
									</a>
								</div>
								<div className="card__content">
									<h3 className="card__title"><a href="#">Whitney</a></h3>
									<span className="card__category">
										<a href="#">Romance</a>
										<a href="#">Drama</a>
									</span>
									<span className="card__rate"><i className="icon ion-ios-star"></i>6.3</span>
								</div>
							</div>
							{/* <!-- end card --> */}
						</div>

						<div className="item">
							{/* <!-- card --> */}
							<div className="card card--big">
								<div className="card__cover">
									<img src={Cover4} alt="" />
									<a href="#" className="card__play">
										<i className="icon ion-ios-play"></i>
									</a>
								</div>
								<div className="card__content">
									<h3 className="card__title"><a href="#">Blindspotting</a></h3>
									<span className="card__category">
										<a href="#">Comedy</a>
										<a href="#">Drama</a>
									</span>
									<span className="card__rate"><i className="icon ion-ios-star"></i>7.9</span>
								</div>
							</div>
							{/* <!-- end card --> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  )
}

export default ImageSlider