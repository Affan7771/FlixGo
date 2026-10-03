import React from 'react'
import CardCover from './CardCover'
import Cover from '../assets/img/covers/cover.jpg'
import BackgroundImg from '../assets/img/section/section.jpg'

const ExpectedPremiere = () => {
  return (
	<section className="section section--bg" data-bg={BackgroundImg} style={{backgroundImage: `url(${BackgroundImg})`, backgroundPosition: 'center center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
		<div className="container">
			<div className="row">
				{/* <!-- section title --> */}
				<div className="col-12">
					<h2 className="section__title">Expected premiere</h2>
				</div>
				{/* <!-- end section title --> */}

				{/* <!-- card --> */}
				<div className="col-6 col-sm-4 col-lg-3 col-xl-2">
					<div className="card">
                        <CardCover 
                            image={Cover}
                            title="I Dream in Another Language"
                            category={["Action, Triler"]}
                            rate="8.4"
                        />
					</div>
				</div>
				{/* <!-- end card --> */}

				{/* <!-- card --> */}
				<div className="col-6 col-sm-4 col-lg-3 col-xl-2">
					<div className="card">
                        <CardCover 
                            image={Cover}
                            title="I Dream in Another Language"
                            category={["Action, Triler"]}
                            rate="8.4"
                        />
					</div>
				</div>
				{/* <!-- end card --> */}

				{/* <!-- card --> */}
				<div className="col-6 col-sm-4 col-lg-3 col-xl-2">
					<div className="card">
                        <CardCover 
                            image={Cover}
                            title="I Dream in Another Language"
                            category={["Action, Triler"]}
                            rate="8.4"
                        />
					</div>
				</div>
				{/* <!-- end card --> */}

				{/* <!-- section btn --> */}
				<div className="col-12">
					<a href="#" className="section__btn">Show more</a>
				</div>
				{/* <!-- end section btn --> */}
			</div>
		</div>
	</section>
  )
}

export default ExpectedPremiere