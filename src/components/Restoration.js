import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
export default class Restoration extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
	}

	componentDidMount() {
		window.ga('send', 'pageview', '/restoration');
	}

	render() {
		const store = this.store;
		return (
			<div className="page restoration">
				<header>
					<div className="hero-unit">
						<h1>Restoration</h1>
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
							<h3>Restore turns to Rebuild</h3>
							<p>
								In the summer of 2013 Grandmother gifted us the trailer and the restoration began.  
								We originally planned to simply get it road ready and take it to a guy in Johnson city 
								who was know for vintage restoration.  So we got on his waiting list and started cleaning 
								up the wheels, getting new tires and repacking the bearings.  We took it to him in early 2014 with 
								his promise to complete the project in 3 months.  Sadly, 6 months later he had only spent 3 hours and was 
								furious with us for asking him how much longer it would take.

								So with encouragement from a coworker we decided to take the project on ourselves.  After tearing into the 
								walls and seeing the rot, we knew we needed to replace a lot of structural wood.  I found some photos online of 
								a similar style camper rebuild and we quickly realized a full rebuild would be the only way.
							</p>
						</div>
					</section>

					{/*<section className="gallery">
						<div className="inner">
							<div className="image image-01"></div>
						</div>
					</section>

					<section className="side-by-side">
						<div className="inner">
							<div className="content">
								<h3>Back to square one</h3>
								<p>
									Our restoration project became a complete rebuild.  The water damage was mostly focused 
									on the ceiling and the lower corners where the walls meet the floor.  We decided the best 
									route was to remove all the aluminum and remove the walls.  We took the trailer structure 
									and floor to a shop that sand blasted it and enamel coated.
								</p>
							</div>
							<div className="image"></div>
						</div>
					</section>*/}


					<section className="history">
						<div className="inner">
							
							<div className="label-point">
								Restoration
							</div>

							<div className="timeline-item item-01 left-item road-ready">
								<div className="item-inner">
									<div className="image"></div>
									<div className="content">
										<div className="title">
											Getting Road Ready
										</div>
										<div className="description">
											The first thing we needed to do is pack bearings and get new tires.
										</div>
									</div>
								</div>
							</div>

							<div className="timeline-item right-item tear-down">
								<div className="item-inner">
									<div className="image"></div>
									<div className="content">
										<div className="title">
											Tear Down
										</div>
										<div className="description">
											The floor was intact, but the walls in the lower corners 
											and all the roof cross beams had major rot.
										</div>
									</div>
								</div>
							</div>

							<div className="timeline-item left-item foundation">
								<div className="item-inner">
									<div className="image"></div>
									<div className="content">
										<div className="title">
											Foundation
										</div>
										<div className="description">
											We took the bare trailer to a company that sand blasted the entire trailer and 
											coated it with epoxy paint.  We also rebuilt the wheel wells to gain a few more inches of 
											storage.  We used a farm barrel to create a protective barrier over the wood.
										</div>
									</div>
								</div>
							</div>

							<div className="timeline-item right-item wall-rebuild">
								<div className="item-inner">
									<div className="image"></div>
									<div className="content">
										<div className="title">
											Wall Rebuild
										</div>
										<div className="description">
											We made a stand to prop up the walls while we reinforced them and gave them a 
											new layer of plywood.
										</div>
									</div>
								</div>
							</div>

							<div className="timeline-item left-item roof-rebuild">
								<div className="item-inner">
									<div className="image"></div>
									<div className="content">
										<div className="title">
											Roof Rebuild
										</div>
										<div className="description">
											After reattaching the walls and installing the cross beams, we had to bend the 
											plywood over the curve.
										</div>
									</div>
								</div>
							</div>

							<div className="timeline-item right-item cabinets">
								<div className="item-inner">
									<div className="image"></div>
									<div className="content">
										<div className="title">
											Cabinets
										</div>
										<div className="description">
											The original cabinets were built with pressed metal joints and we rebuilt 
											all the cabinetry with Craig-Jig assembly.
										</div>
									</div>
								</div>
							</div>

							<div className="timeline-item left-item interior-paint">
								<div className="item-inner">
									<div className="image"></div>
									<div className="content">
										<div className="title">
											Interior Paint
										</div>
										<div className="description">
											Since rot is our biggest enemy we over did it with layers of protection.
										</div>
									</div>
								</div>
							</div>

							<div className="timeline-item right-item electrical">
								<div className="item-inner">
									<div className="image"></div>
									<div className="content">
										<div className="title">
											Electrical
										</div>
										<div className="description">
											We decided to go full electric and remove the propane cook top.  There are both 
											DC and AC circuits and all lighting is LED for efficiency.
										</div>
									</div>
								</div>
							</div>

							<div className="timeline-item left-item flooring">
								<div className="item-inner">
									<div className="image"></div>
									<div className="content">
										<div className="title">
											Flooring
										</div>
										<div className="description">
											We had a good stack of cypress wood that was from a water tower that was originally on my great grandfathers 
											land back in 1920.  I milled the wood down into half inch planks and used it as the flooring.
										</div>
									</div>
								</div>
							</div>

							<div className="timeline-item right-item windows">
								<div className="item-inner">
									<div className="image"></div>
									<div className="content">
										<div className="title">
											Windows
										</div>
										<div className="description">
											A good friend and coworker took on the process of refurbishing the windows.  They were disassembled, 
											polished, and the glass replaced.
										</div>
									</div>
								</div>
							</div>

							<div className="timeline-item left-item counter-tops">
								<div className="item-inner">
									<div className="image"></div>
									<div className="content">
										<div className="title">
											Counter Tops
										</div>
										<div className="description">
											Amy's favorite wood is Walnut, so we incorporated 1.5in thick Walnut counter tops.  We under mount the 
											original sink and use the sink cutout as a cutting board or sink cover.
										</div>
									</div>
								</div>
							</div>

							<div className="timeline-item right-item insulation">
								<div className="item-inner">
									<div className="image"></div>
									<div className="content">
										<div className="title">
											Insulation
										</div>
										<div className="description">
											The camper didn't originally have insulation other than a moisture barrier.  So we added 
											two layers of 0.75in foam board insulation and a moisture barrier wrap over the whole trailer. 
										</div>
									</div>
								</div>
							</div>

						</div>
					</section>


				</main>
			</div>
		);
	}
}
