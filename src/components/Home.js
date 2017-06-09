import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
export default class Home extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
	}

	componentDidMount() {
		window.ga('send', 'pageview', '/');
	}

	render() {
		const store = this.store;
		return (
			<div className="page home">
				<header>
					<div className="hero-unit">
						<h1>Clementine</h1>
					</div>
					<div className="hero-subunit">
						<h4>
							A story of one 1953 Comet Trailer
						</h4>
					</div>
					<div className="background"></div>
				</header>
				<main>
					<section className="centered-with-image about">
						<div className="inner">
							<h3>Comet Trailer</h3>
							<p>
								As far as we know this camper is one of only a few surviving Comet 
								trailers built in the early post war days of Comet Trailer Company.
								We are excited to share what we know about this little 
								piece of history, where it has been and where it is going.
							</p>
						</div>
					</section>

					<section className="gallery">
						<div className="inner">
							<div className="image image-01"></div>
						</div>
					</section>

					<section className="side-by-side design">
						<div className="inner">
							<div className="content">
								<h3>Restoration & Design</h3>
								<p>
									The purpose for this family heirloom has always been about family and faith.  
									My Grandmother and Grandfather purchased this trailer from a friend in the mid-sixties 
									for the express purpose of taking their four girls to a family church camp.
									So the choices we made during restoration were to keep things as original as possible, 
									while updating and adding modern conveniences to make it enjoyable for many years to come.
									So while the exterior and floor plan look almost perfectly original we did remove the 
									original "ice" box, propane cook top, and water tank and replaced them with a refrigerator, 
									induction cook top, and direct plumbing.
								</p>
							</div>
							<div className="image"></div>
						</div>
					</section>
				</main>
			</div>
		);
	}
}
