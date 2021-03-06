import React, { Component } from "react";
import RowContainer from "./RowContainer.js";
import TileScaleAnimations from "./TileScaleAnimations.js";

class FlexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialPosition: true
    };
  }
  prepareHtml = () => {
    let rowArray = new Array(this.props.rows).fill().map((item, index) => {
      return (
        <RowContainer
          animationIndex={this.state.animationIndex}
          masterClickHandler={this.masterClickHandler}
          rowNumber={index}
          rowAmount={this.props.rows}
          amountOfOutterTiles={this.props.columns}
          colors={['transparent', 'transparent', 'transparent']}
          initialPosition = {this.state.initialPosition}
        />
      );
    });
    return rowArray;
  };
  
  masterClickHandler = id => {
    if (this.state.initialPosition) {
     TileScaleAnimations.opacity("face", .2, 0, 0.25);
      this.setState({ animationIndex: id, initialPosition:false });
    } else {
     TileScaleAnimations.opacity("face", 0.2, 1, 0);
        this.setState({ animationIndex: 100, initialPosition:true });
    }
  };

  render() {
    const { height, width, paddingTop, paddingLeft } = this.props;
    return (
      <div
        style={{
          position: "absolute",
          height: height,
          width: width,
          margin: "",
          paddingLeft: paddingLeft,
          paddingTop: paddingTop,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          overflow: "visible"
        }}
      >
        {this.prepareHtml(this.props.rows, this.props.columns)}
      </div>
    );
  }
}

export default FlexContainer;
