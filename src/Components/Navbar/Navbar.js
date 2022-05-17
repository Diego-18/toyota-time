import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
	return (
		<nav className="navbar cstm-navbar fixed-top navbar-expand-lg navbar-light">
			<div className="container-fluid">
				<img
					src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c4a3.png"
					alt="logo-toyota"
					width="100"
					height="50"
				/>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link
								className="nav-link lines"
								aria-current="page"
								activeClass="active"
								to="Home"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link lines"
								activeClass="active"
								to="Historia"
								spy={true}
								smooth={true}
								offset={-90}
								duration={500}
							>
								Historia
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link lines"
								activeClass="active"
								to="LandCruiser"
								spy={true}
								smooth={true}
								offset={-90}
								duration={500}
							>
								Land Cruiser
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="nav-link lines"
								activeClass="active"
								to="Corolla"
								spy={true}
								smooth={true}
								offset={-90}
								duration={500}
							>
								Corolla
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
