import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import Carousel from "./ui/Carousel";
import {Helmet} from "react-helmet";

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
				<Helmet>
					<title>Vintage 1953 Comet Trailer Restoration</title>
					<meta name="description" content="A story of the restoration process of our vintage camper." />
				</Helmet>
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


					<section className="history">
						<div className="inner">
							
							<div className="label-point">
								Restoration
							</div>

							<div className="timeline-item first left-item">
								<div className="item-inner">
									<Carousel>
										<div className="image image-exterior-before"></div>
										<div className="image image-exterior-before-1"></div>
										<div className="image image-exterior-before-2"></div>
									</Carousel>
									<div className="content">
										<div className="title">
											Exterior Before
										</div>
										<div className="description">
											The exterior had a rough look at the beginning.  It had been 
											painted with galvanized paint and tar was used to prevent leaks.
										</div>
									</div>
								</div>
							</div>

							<div className="timeline-item right-item">
								<div className="item-inner">
									<Carousel>
										<div className="image image-interior-before"></div>
										<div className="image image-interior-before-1"></div>
									</Carousel>
									<div className="content">
										<div className="title">
											Interior Before
										</div>
										<div className="description">
											The interior had evidence of leaks rotting around the windows and roof.
										</div>
									</div>
								</div>
							</div>

							<div className="timeline-item left-item">
								<div className="item-inner">
									<Carousel>
										<div className="image image-road-ready"></div>
										<div className="image image-road-ready-1"></div>
										<div className="image image-road-ready-2"></div>
									</Carousel>
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

							<div className="timeline-item right-item">
								<div className="item-inner">
									<Carousel>
										<div className="image image-tear-down"></div>
										<div className="image image-tear-down-1"></div>
										<div className="image image-tear-down-2"></div>
									</Carousel>
									<div className="content">
										<div className="title">
											Tear Down
										</div>
										<div className="description">
											The floor was intact, but the walls in the lower corners 
											and all the roof cross beams had major rot so we tore the tariler down to the base.
										</div>
									</div>
								</div>
							</div>

							<div className="timeline-item left-item">
								<div className="item-inner">
									<Carousel>
										<div className="image image-foundation"></div>
										<div className="image image-foundation-1"></div>
									</Carousel>
									<div className="content">
										<div className="title">
											Foundation
										</div>
										<div className="description">
											We took the bare trailer to a company that sand blasted the entire trailer and 
											coated it with epoxy paint.  
										</div>
									</div>
								</div>
							</div>

							<div className="timeline-item right-item">
								<div className="item-inner">
									<Carousel>
										<div className="image image-reinforce"></div>
										<div className="image image-reinforce-1"></div>
									</Carousel>
									<div className="content">
										<div className="title">
											Reinforce
										</div>
										<div className="description">
											We reinforced the walls plywood blocks.
										</div>
									</div>
								</div>
							</div>

							<div className="timeline-item left-item">
								<div className="item-inner">
									<Carousel>
										<div className="image image-wheelwell"></div>
										<div className="image image-wheelwell-1"></div>
										<div className="image image-wheelwell-2"></div>
									</Carousel>
									<div className="content">
										<div className="title">
											Wheel Well
										</div>
										<div className="description">
											We also rebuilt the wheel wells to gain a few more inches of 
											storage.  We used a farm barrel to create a protective barrier over the wood.
										</div>
									</div>
								</div>
							</div>

							<div className="timeline-item right-item">
								<div className="item-inner">
									<Carousel>
										<div className="image image-wall-rebuild"></div>
										<div className="image image-wall-rebuild-1"></div>
										<div className="image image-wall-rebuild-2"></div>
									</Carousel>
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

							<div className="timeline-item left-item">
								<div className="item-inner">
									<Carousel>
										<div className="image image-roof-rebuild"></div>
										<div className="image image-roof-rebuild-1"></div>
										<div className="image image-roof-rebuild-2"></div>
										<div className="image image-roof-rebuild-3"></div>
									</Carousel>
									<div className="content">
										<div className="title">
											Roof Rebuild
										</div>
										<div className="description">
											After reattaching the walls and installing the cross beams, we had to bend the new 
											plywood over the curve.
										</div>
									</div>
								</div>
							</div>

							<div className="timeline-item right-item">
								<div className="item-inner">
									<Carousel>
										<div className="image image-cabinets"></div>
										<div className="image image-cabinets-1"></div>
										<div className="image image-cabinets-2"></div>
									</Carousel>
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

							<div className="timeline-item left-item">
								<div className="item-inner">
									<Carousel>
										<div className="image image-interior-paint"></div>
										<div className="image image-interior-paint-1"></div>
									</Carousel>
									<div className="content">
										<div className="title">
											Interior Paint
										</div>
										<div className="description">
											Since rot is our biggest enemy we over did it with layers of protection.
											And of course we finished it off with a beautiful selection of colors.
										</div>
									</div>
								</div>
							</div>

							<div className="timeline-item right-item">
								<div className="item-inner">
									<Carousel>
										<div className="image image-electrical"></div>
										<div className="image image-electrical-1"></div>
										<div className="image image-electrical-2"></div>
									</Carousel>
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

							<div className="timeline-item left-item">
								<div className="item-inner">
									<Carousel>
										<div className="image image-flooring"></div>
										<div className="image image-flooring-1"></div>
										<div className="image image-flooring-2"></div>
									</Carousel>
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

							<div className="timeline-item right-item">
								<div className="item-inner">
									<Carousel>
										<div className="image image-windows"></div>
										<div className="image image-windows-1"></div>
									</Carousel>
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

							<div className="timeline-item left-item">
								<div className="item-inner">
									<Carousel>
										<div className="image image-counter-tops"></div>
										<div className="image image-counter-tops-1"></div>
									</Carousel>
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

							<div className="timeline-item right-item">
								<div className="item-inner">
									<Carousel>
										<div className="image image-insulation"></div>
										<div className="image image-insulation-1"></div>
									</Carousel>
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

							<div className="timeline-item left-item">
								<div className="item-inner">
									<Carousel>
										<div className="image image-tounge-box"></div>
										<div className="image image-tounge-box-1"></div>
										<div className="image image-tounge-box-2"></div>
									</Carousel>
									<div className="content">
										<div className="title">
											Storage Box
										</div>
										<div className="description">
											Originally we wanted to build a box on the tounge as a housing for the AC, but sadly it did 
											not have enough ventilation for the AC to function properly.  As a result, we converted it to storage.
										</div>
									</div>
								</div>
							</div>

							<div className="timeline-item right-item">
								<div className="item-inner">
									<Carousel>
										<div className="image image-storage"></div>
										<div className="image image-storage-1"></div>
									</Carousel>
									<div className="content">
										<div className="title">
											Storage
										</div>
										<div className="description">
											We used the 12v DC circuits and pressure switches to light each of the storage areas with LED tape lighting.
										</div>
									</div>
								</div>
							</div>

							<div className="timeline-item left-item">
								<div className="item-inner">
									<Carousel>
										<div className="image image-polish"></div>
										<div className="image image-polish-1"></div>
									</Carousel>
									<div className="content">
										<div className="title">
											Polish
										</div>
										<div className="description">
											To polish, we had to strip away the galvanized paint, sand with high grit and polish with a cotton cutting wheel. 
											We started the process ourselves and then decided to pay to have it done.
										</div>
									</div>
								</div>
							</div>

							<div className="timeline-item right-item">
								<div className="item-inner">
									<Carousel>
										<div className="image image-details"></div>
										<div className="image image-details-1"></div>
										<div className="image image-details-2"></div>
										<div className="image image-details-3"></div>
										<div className="image image-details-4"></div>
									</Carousel>
									<div className="content">
										<div className="title">
											Details
										</div>
										<div className="description">
											We refurbished the original lighting and my mom sewed new curtains for the windows.
										</div>
									</div>
								</div>
							</div>

							<div className="timeline-item left-item">
								<div className="item-inner">
									<Carousel>
										<div className="image image-door"></div>
										<div className="image image-door-1"></div>
										<div className="image image-door-2"></div>
										<div className="image image-door-3"></div>
									</Carousel>
									<div className="content">
										<div className="title">
											Door Rebuild
										</div>
										<div className="description">
											The front door had to be completely rebuilt because of all the rot.
										</div>
									</div>
								</div>
							</div>

							<div className="timeline-item right-item">
								<div className="item-inner">
									<Carousel>
										<div className="image image-taillights"></div>
										<div className="image image-taillights-1"></div>
										<div className="image image-taillights-2"></div>
									</Carousel>
									<div className="content">
										<div className="title">
											Tail Lights
										</div>
										<div className="description">
											We refurbished the original tail lights and used LED replacement bulbs.
										</div>
									</div>
								</div>
							</div>

							<div className="timeline-item left-item">
								<div className="item-inner">
									<Carousel>
										<div className="image image-testrun"></div>
										<div className="image image-testrun-1"></div>
									</Carousel>
									<div className="content">
										<div className="title">
											Test Run
										</div>
										<div className="description">
											To test everything out we went over to Mckinney Falls state park which is only a few 
											miles from the house
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
