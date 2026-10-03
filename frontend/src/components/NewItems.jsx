import React from 'react'
import Cover from '../assets/img/covers/cover.jpg'
import Cover2 from '../assets/img/covers/cover2.jpg'
import Cover3 from '../assets/img/covers/cover3.jpg'
import Cover4 from '../assets/img/covers/cover4.jpg'
import Cover5 from '../assets/img/covers/cover5.jpg'
import Cover6 from '../assets/img/covers/cover6.jpg'
import CardCover from './CardCover'


const NewItems = () => {
  return (
    <section className="content">
		<div className="content__head">
			<div className="container">
				<div className="row">
					<div className="col-12">
						{/* <!-- content title --> */}
						<h2 className="content__title">New items</h2>
						{/* <!-- end content title --> */}

						{/* <!-- content tabs nav --> */}
						<ul className="nav nav-tabs content__tabs" id="content__tabs" role="tablist">
							<li className="nav-item">
								<a className="nav-link active" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">NEW RELEASES</a>
							</li>

							<li className="nav-item">
								<a className="nav-link" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">MOVIES</a>
							</li>

							<li className="nav-item">
								<a className="nav-link" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false">TV SERIES</a>
							</li>

							<li className="nav-item">
								<a className="nav-link" data-toggle="tab" href="#tab-4" role="tab" aria-controls="tab-4" aria-selected="false">CARTOONS</a>
							</li>
						</ul>
						{/* <!-- end content tabs nav --> */}

						{/* <!-- content mobile tabs nav --> */}
						<div className="content__mobile-tabs" id="content__mobile-tabs">
							<div className="content__mobile-tabs-btn dropdown-toggle" role="navigation" id="mobile-tabs" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<input type="button" value="New items" />
								<span></span>
							</div>

							<div className="content__mobile-tabs-menu dropdown-menu" aria-labelledby="mobile-tabs">
								<ul className="nav nav-tabs" role="tablist">
									<li className="nav-item"><a className="nav-link active" id="1-tab" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">NEW RELEASES</a></li>

									<li className="nav-item"><a className="nav-link" id="2-tab" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false">MOVIES</a></li>

									<li className="nav-item"><a className="nav-link" id="3-tab" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false">TV SERIES</a></li>

									<li className="nav-item"><a className="nav-link" id="4-tab" data-toggle="tab" href="#tab-4" role="tab" aria-controls="tab-4" aria-selected="false">CARTOONS</a></li>
								</ul>
							</div>
						</div>
						{/* <!-- end content mobile tabs nav --> */}
					</div>
				</div>
			</div>
		</div>

		<div className="container">
			{/* <!-- content tabs --> */}
			<div className="tab-content" id="myTabContent">
				<div className="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="1-tab">
					<div className="row">
						{/* <!-- card --> */}
						<div className="col-6 col-sm-12 col-lg-6">
							<div className="card card--list">
								<div className="row">
									<div className="col-12 col-sm-4">
										<div className="card__cover">
											<img src={Cover} alt="" />
											<a href="#" className="card__play">
												<i className="icon ion-ios-play"></i>
											</a>
										</div>
									</div>

									<div className="col-12 col-sm-8">
										<div className="card__content">
											<h3 className="card__title"><a href="#">I Dream in Another Language</a></h3>
											<span className="card__category">
												<a href="#">Action</a>
												<a href="#">Triler</a>
											</span>

											<div className="card__wrap">
												<span className="card__rate"><i className="icon ion-ios-star"></i>8.4</span>

												<ul className="card__list">
													<li>HD</li>
													<li>16+</li>
												</ul>
											</div>

											<div className="card__description">
												<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- end card --> */}

						{/* <!-- card --> */}
						<div className="col-6 col-sm-12 col-lg-6">
							<div className="card card--list">
								<div className="row">
									<div className="col-12 col-sm-4">
										<div className="card__cover">
											<img src={Cover2} alt="" />
											<a href="#" className="card__play">
												<i className="icon ion-ios-play"></i>
											</a>
										</div>
									</div>

									<div className="col-12 col-sm-8">
										<div className="card__content">
											<h3 className="card__title"><a href="#">Benched</a></h3>
											<span className="card__category">
												<a href="#">Comedy</a>
											</span>

											<div className="card__wrap">
												<span className="card__rate"><i className="icon ion-ios-star"></i>7.1</span>

												<ul className="card__list">
													<li>HD</li>
													<li>16+</li>
												</ul>
											</div>

											<div className="card__description">
												<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- end card --> */}

						{/* <!-- card --> */}
						<div className="col-6 col-sm-12 col-lg-6">
							<div className="card card--list">
								<div className="row">
									<div className="col-12 col-sm-4">
										<div className="card__cover">
											<img src={Cover3} alt="" />
											<a href="#" className="card__play">
												<i className="icon ion-ios-play"></i>
											</a>
										</div>
									</div>

									<div className="col-12 col-sm-8">
										<div className="card__content">
											<h3 className="card__title"><a href="#">Whitney</a></h3>
											<span className="card__category">
												<a href="#">Romance</a>
												<a href="#">Drama</a>
												<a href="#">Music</a>
											</span>

											<div className="card__wrap">
												<span className="card__rate"><i className="icon ion-ios-star"></i>6.3</span>

												<ul className="card__list">
													<li>HD</li>
													<li>16+</li>
												</ul>
											</div>

											<div className="card__description">
												<p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- end card --> */}

						{/* <!-- card --> */}
						<div className="col-6 col-sm-12 col-lg-6">
							<div className="card card--list">
								<div className="row">
									<div className="col-12 col-sm-4">
										<div className="card__cover">
											<img src={Cover4} alt="" />
											<a href="#" className="card__play">
												<i className="icon ion-ios-play"></i>
											</a>
										</div>
									</div>

									<div className="col-12 col-sm-8">
										<div className="card__content">
											<h3 className="card__title"><a href="#">Blindspotting</a></h3>
											<span className="card__category">
												<a href="#">Comedy</a>
												<a href="#">Drama</a>
											</span>

											<div className="card__wrap">
												<span className="card__rate"><i className="icon ion-ios-star"></i>7.9</span>

												<ul className="card__list">
													<li>HD</li>
													<li>16+</li>
												</ul>
											</div>

											<div className="card__description">
												<p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- end card --> */}

						{/* <!-- card --> */}
						<div className="col-6 col-sm-12 col-lg-6">
							<div className="card card--list">
								<div className="row">
									<div className="col-12 col-sm-4">
										<div className="card__cover">
											<img src={Cover5} alt="" />
											<a href="#" className="card__play">
												<i className="icon ion-ios-play"></i>
											</a>
										</div>
									</div>

									<div className="col-12 col-sm-8">
										<div className="card__content">
											<h3 className="card__title"><a href="#">I Dream in Another Language</a></h3>
											<span className="card__category">
												<a href="#">Action</a>
												<a href="#">Triler</a>
											</span>

											<div className="card__wrap">
												<span className="card__rate"><i className="icon ion-ios-star"></i>8.4</span>

												<ul className="card__list">
													<li>HD</li>
													<li>16+</li>
												</ul>
											</div>

											<div className="card__description">
												<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- end card --> */}

						{/* <!-- card --> */}
						<div className="col-6 col-sm-12 col-lg-6">
							<div className="card card--list">
								<div className="row">
									<div className="col-12 col-sm-4">
										<div className="card__cover">
											<img src={Cover6} alt="" />
											<a href="#" className="card__play">
												<i className="icon ion-ios-play"></i>
											</a>
										</div>
									</div>

									<div className="col-12 col-sm-8">
										<div className="card__content">
											<h3 className="card__title"><a href="#">Benched</a></h3>
											<span className="card__category">
												<a href="#">Comedy</a>
											</span>

											<div className="card__wrap">
												<span className="card__rate"><i className="icon ion-ios-star"></i>7.1</span>

												<ul className="card__list">
													<li>HD</li>
													<li>16+</li>
												</ul>
											</div>

											<div className="card__description">
												<p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- end card --> */}
					</div>
				</div>

				<div className="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="2-tab">
					<div className="row">
						{/* <!-- card --> */}
						<div className="col-6 col-sm-4 col-lg-3 col-xl-2">
							<div className="card">
                                <CardCover 
                                    image={Cover}
                                    title="I Dream in Another Language"
                                    rate="8.4"
                                    category={["Action", "Triler"]}
                                />
							</div>
						</div>
						{/* <!-- end card --> */}

						{/* <!-- card --> */}
						<div className="col-6 col-sm-4 col-lg-3 col-xl-2">
							<div className="card">
                                <CardCover 
                                    image={Cover3}
                                    title="Whitney"
                                    rate="6.3"
                                    category={["Romance", "Drama", "Music"]}
                                />
							</div>
						</div>
						{/* <!-- end card --> */}

						{/* <!-- card --> */}
						<div className="col-6 col-sm-4 col-lg-3 col-xl-2">
							<div className="card">
                                <CardCover 
                                    image={Cover4}
                                    title="Blindspotting"
                                    rate="7.9"
                                    category={["Comedy", "Drama", "Music"]}
                                />
							</div>
						</div>
						{/* <!-- end card --> */}
						
					</div>
				</div>

				<div className="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="3-tab">
					<div className="row">
                        {/* <!-- card --> */}
						<div className="col-6 col-sm-4 col-lg-3 col-xl-2">
							<div className="card">
                                <CardCover 
                                    image={Cover3}
                                    title="I Dream in Another Language"
                                    rate="8.4"
                                    category={["Action", "Triler"]}
                                />
							</div>
						</div>
						{/* <!-- end card --> */}

                        {/* <!-- card --> */}
						<div className="col-6 col-sm-4 col-lg-3 col-xl-2">
							<div className="card">
                                <CardCover 
                                    image={Cover3}
                                    title="I Dream in Another Language"
                                    rate="8.4"
                                    category={["Action", "Triler"]}
                                />
							</div>
						</div>
						{/* <!-- end card --> */}

                        {/* <!-- card --> */}
						<div className="col-6 col-sm-4 col-lg-3 col-xl-2">
							<div className="card">
                                <CardCover 
                                    image={Cover3}
                                    title="I Dream in Another Language"
                                    rate="8.4"
                                    category={["Action", "Triler"]}
                                />
							</div>
						</div>
						{/* <!-- end card --> */}

					</div>
				</div>

				<div className="tab-pane fade" id="tab-4" role="tabpanel" aria-labelledby="4-tab">
					<div className="row">
						{/* <!-- card --> */}
						<div className="col-6 col-sm-4 col-lg-3 col-xl-2">
							<div className="card">
                                <CardCover 
                                    image={Cover5}
                                    title="I Dream in Another Language"
                                    rate="8.4"
                                    category={["Action", "Triler"]}
                                />
							</div>
						</div>
						{/* <!-- end card --> */}

                        {/* <!-- card --> */}
						<div className="col-6 col-sm-4 col-lg-3 col-xl-2">
							<div className="card">
                                <CardCover 
                                    image={Cover3}
                                    title="I Dream in Another Language"
                                    rate="8.4"
                                    category={["Action", "Triler"]}
                                />
							</div>
						</div>
						{/* <!-- end card --> */}

                        {/* <!-- card --> */}
						<div className="col-6 col-sm-4 col-lg-3 col-xl-2">
							<div className="card">
                                <CardCover 
                                    image={Cover2}
                                    title="I Dream in Another Language"
                                    rate="8.4"
                                    category={["Action", "Triler"]}
                                />
							</div>
						</div>
						{/* <!-- end card --> */}
					</div>
				</div>
			</div>
			{/* <!-- end content tabs --> */}
		</div>
	</section>
  )
}

export default NewItems