import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import LazyRoute from "lazy-route";
import DevTools from "mobx-react-devtools";

import TopBar from "./ui/TopBar";

@inject("store")
@observer
export default class App extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
	}
	componentDidMount() {
		this.authenticate();
	}
	authenticate(e) {
		if (e) e.preventDefault();
		this.store.appState.authenticate();
	}
	render() {
		const {
			authenticated,
			authenticating,
			timeToRefresh,
			refreshToken,
			testval
		} = this.store.appState;
		return (
			<div className="wrapper">
				{/*<DevTools />*/}
				<TopBar />

				<Route
					exact
					path="/"
					render={props => (
						<LazyRoute {...props} component={import("./Home")} />
					)}
				/>
				<Route
					exact
					path="/history"
					render={props => (
						<LazyRoute {...props} component={import("./History")} />
					)}
				/>
				<Route
					exact
					path="/restoration"
					render={props => (
						<LazyRoute {...props} component={import("./Restoration")} />
					)}
				/>
				<Route
					exact
					path="/travel"
					render={props => (
						<LazyRoute {...props} component={import("./Travel")} />
					)}
				/>

				<footer>
					{/*<div className="social">
						<h4>Follow the conversation</h4>

					</div>
					<div className="share">
						<h4>Share your stories</h4>
						<p></p>
						<button className="contact">Email us</button>
					</div>*/}
					<div className="fineprint">
						© 2016 Clementine the Camper. All Rights Reserved.
					</div>
				</footer>
			</div>
		);
	}
}
