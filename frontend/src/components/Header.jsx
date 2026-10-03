import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/img/logo.svg'

const Header = () => {
    const [showSearch, setShowSearch] = useState(false);
  return (
    <header className="header">
		<div className="header__wrap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="header__content">
							{/* <!-- header logo --> */}
							<Link to="/" className="header__logo">
								<img src={Logo} alt="logo" />
							</Link>
							{/* <!-- end header logo --> */}

							{/* <!-- header nav --> */}
							<ul className="header__nav">
								<li className="header__nav-item">
									<Link className="dropdown-toggle header__nav-link" to="/">Home</Link>
								</li>
								<li className="header__nav-item">
									<Link to="/about" className="header__nav-link">About</Link>
								</li>

								{/* <!-- dropdown --> */}
								<li className="header__nav-item">
									<a className="dropdown-toggle header__nav-link" href="#" role="button" id="dropdownMenuCatalog" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Catalog</a>

									<ul className="dropdown-menu header__dropdown-menu" aria-labelledby="dropdownMenuCatalog">
										<li><a href="catalog1.html">Catalog Grid</a></li>
										<li><a href="catalog2.html">Catalog List</a></li>
										<li><a href="details1.html">Details Movie</a></li>
										<li><a href="details2.html">Details TV Series</a></li>
									</ul>
								</li>
								{/* <!-- end dropdown --> */}

								<li className="header__nav-item">
									<a href="pricing.html" className="header__nav-link">Pricing Plan</a>
								</li>

								<li className="header__nav-item">
									<a href="faq.html" className="header__nav-link">Help</a>
								</li>

								{/* <!-- dropdown --> */}
								<li className="dropdown header__nav-item">
									<a className="dropdown-toggle header__nav-link header__nav-link--more" href="#" role="button" id="dropdownMenuMore" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="icon ion-ios-more"></i></a>

									<ul className="dropdown-menu header__dropdown-menu" aria-labelledby="dropdownMenuMore">
										<li><a href="about.html">About</a></li>
										<li><a href="signin.html">Sign In</a></li>
										<li><a href="signup.html">Sign Up</a></li>
										<li><a href="404.html">404 Page</a></li>
									</ul>
								</li>
								{/* <!-- end dropdown --> */}
							</ul>
							{/* <!-- end header nav --> */}

							{/* <!-- header auth --> */}
							<div className="header__auth">
								<button className={`header__search-btn ${ showSearch ? 'active' : ''}`} type="button" onClick={() => setShowSearch(!showSearch)}>
									<i className="icon ion-ios-search"></i>
								</button>

								<a href="signin.html" className="header__sign-in">
									<i className="icon ion-ios-log-in"></i>
									<span>sign in</span>
								</a>
							</div>
							{/* <!-- end header auth --> */}

							{/* <!-- header menu btn --> */}
							<button className="header__btn" type="button">
								<span></span>
								<span></span>
								<span></span>
							</button>
							{/* <!-- end header menu btn --> */}
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* <!-- header search --> */}
		<form action="#" className={`header__search ${ showSearch ? 'header__search--active' : ''}`}>
			<div className="container"> 
				<div className="row">
					<div className="col-12">
						<div className="header__search-content">
							<input type="text" placeholder="Search for a movie, TV Series that you are looking for" />

							<button type="button">search</button>
						</div>
					</div>
				</div>
			</div>
		</form>
		{/* <!-- end header search --> */}
	</header>
  )
}

export default Header