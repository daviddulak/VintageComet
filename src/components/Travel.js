import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
export default class Travel extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
	}

	componentDidMount() {
		window.ga('send', 'pageview', '/travel');
	}

	render() {
		const store = this.store;
		return (
			<div className="page travel">
				<header>
					<div className="hero-unit">
						<h1>Travel</h1>
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
							<h3>On the Road Again</h3>
							<p>
								It has been awesome getting this little trailer back on the road.
								We get lots of people taking photos, and coming to ask advice 
								for their restoration projects. And what better way to get closer 
								as a family than to live in 80 square feet for a few weeks.
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
								<h3>Travel</h3>
								<p>
									So far we have gone on 4 trips totalling around 1900 miles.  
									We have gone to McKinney Falls State Park, the family ranch, 
									Arkansas and Missouri in the fall, and the Smokey mountains 
									in the spring.
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
