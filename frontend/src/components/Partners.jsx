import React from 'react'
import ThemeForest from '../assets/img/partners/themeforest-light-background.png'
import AudioJungle from '../assets/img/partners/audiojungle-light-background.png'
import CodeCanyon from '../assets/img/partners/codecanyon-light-background.png'
import PhotoDune from '../assets/img/partners/photodune-light-background.png'
import ActiveDen from '../assets/img/partners/activeden-light-background.png'
import ThreeDocean from '../assets/img/partners/3docean-light-background.png'

const Partners = () => {
  return (
    <section className="section">
		<div className="container">
			<div className="row">
				{/* <!-- section title --> */}
				<div className="col-12">
					<h2 className="section__title section__title--no-margin">Our Partners</h2>
				</div>
				{/* <!-- end section title --> */}

				{/* <!-- section text --> */}
				<div className="col-12">
					<p className="section__text section__text--last-with-margin">It is a long <b>established</b> fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
				</div>
				{/* <!-- end section text --> */}

				{/* <!-- partner --> */}
				<div className="col-6 col-sm-4 col-md-3 col-lg-2">
					<a href="#" className="partner">
						<img src={ThemeForest} alt="" className="partner__img" />
					</a>
				</div>
				{/* <!-- end partner --> */}

				{/* <!-- partner --> */}
				<div className="col-6 col-sm-4 col-md-3 col-lg-2">
					<a href="#" className="partner">
						<img src={AudioJungle} alt="" className="partner__img" />
					</a>
				</div>
				{/* <!-- end partner --> */}

				{/* <!-- partner --> */}
				<div className="col-6 col-sm-4 col-md-3 col-lg-2">
					<a href="#" className="partner">
						<img src={CodeCanyon} alt="" className="partner__img" />
					</a>
				</div>
				{/* <!-- end partner --> */}

				{/* <!-- partner --> */}
				<div className="col-6 col-sm-4 col-md-3 col-lg-2">
					<a href="#" className="partner">
						<img src={PhotoDune} alt="" className="partner__img" />
					</a>
				</div>
				{/* <!-- end partner --> */}

				{/* <!-- partner --> */}
				<div className="col-6 col-sm-4 col-md-3 col-lg-2">
					<a href="#" className="partner">
						<img src={ActiveDen} alt="" className="partner__img" />
					</a>
				</div>
				{/* <!-- end partner --> */}

				{/* <!-- partner --> */}
				<div className="col-6 col-sm-4 col-md-3 col-lg-2">
					<a href="#" className="partner">
						<img src={ThreeDocean} alt="" className="partner__img" />
					</a>
				</div>
				{/* <!-- end partner --> */}
			</div>
		</div>
	</section>
  )
}

export default Partners