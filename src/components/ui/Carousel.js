import React, { Component } from "react";

export default class Carousel extends Component {
	constructor(props) {
		super(props);

    this.state = {
      index: 0
    };

	}

  componentDidMount() {
    var childCount = this.props.children.length || 1;
    if (childCount > 1) {
      console.log(childCount);
      setInterval(() => {
        this.setState((prevState, props) => {
          var nextState = prevState.index + 1;
          if (nextState >= childCount) {
            nextState = 0;
          }
          return {index: nextState};
        });
      }, 6000 );
    }
	}

	render() {
		return (
			<div data-index={this.state.index} className="carousel-inner">
				{this.props.children}
			</div>
		);
	}
}
