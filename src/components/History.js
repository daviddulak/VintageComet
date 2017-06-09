import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
export default class History extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
	}

	componentDidMount() {
		window.ga('send', 'pageview', '/history');
	}

	render() {
		const store = this.store;
		return (
			<div className="page history">
				<header>
					<div className="hero-unit">
						<h1>History</h1>
					</div>
					<div className="hero-subunit">
						<h4>
							A story of one 1953 Comet Trailer
						</h4>
					</div>
					<div className="background"></div>
				</header>
				<main>
					<section className="centered-with-image">
						<div className="inner">
							<h3>Wichita, Kansas</h3>
							<p>
								From what I can find, Comet Trailer Company opened just after the end of WW2 around 1947.  
								Wichita known as the "Air capital of the world" was building B-29 bombers for the war and 
								I can only imagine that all that manufacturing capability was the reason many camper companies 
								came into existence during the next years.  Comet Trailer seems to have started as a small family 
								business building campers from high grade aluminum excess.  Around 1956 Comet moved to Coffeyville, 
								Kansas with a much larger facility and started producing at a much higher rate.  They built trailers 
								until 1981 when economics caused the company to shutter it's doors.

								Comet campers built between 1947 and 1956 are extremely rare.  Very few were made, and very few survived 
								since they were wood framed and many fell victim to water damage. 
							</p>
						</div>
					</section>

					<section className="gallery">
						<div className="inner">
							<div className="image image-01"></div>
						</div>
					</section>

					<section className="side-by-side">
						<div className="inner">
							<div className="content">
								<h3>Faith & Family</h3>
								<p>
									My Grandmother and Grandfather purchased this trailer from a friend in the mid-sixties 
									from friends for the express purpose of taking their four girls to a family church camp
									at the Nolanville encampment.  The camp dated back to the 1890's and continued for over 100 years.  
									I had to ask my Grandmother how they managed to sleep 6 in a 12ft camper, especially since 
									Granddad was 6ft 4in and not a small man.  Apparently Granddad slept in a cot outside and one girl had 
									to sleep on the floor.  They camped in it for a few years but had to eventually retire it due to 
									roof leaks.  Sometime around 1978 it was permanently parked in the barn at the family ranch and 
									became storage for linens.  When the whole extended family came to the ranch it was also used for 
									extra sleeping arrangements.
									
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
