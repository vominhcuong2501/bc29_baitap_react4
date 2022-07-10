import React, { Component } from "react";

export default class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      if (ghe.hang === "") {
        return <span>{ghe.soGhe}</span>;
      }
      let cssGheDaDat = "";
      let disable = false;

      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disable = true;
      }

      return (
        <button
          onClick={() => {
            alert("1");
          }}
          key={index}
          disabled={disable}
          className={`ghe ${cssGheDaDat}`}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };
  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return <div>{this.renderRowNumber()}</div>;
    } else {
      return (
        <div>
          {" "}
          {this.props.hangGhe.hang}
          {this.renderGhe()}
        </div>
      );
    }
  };
  renderRowNumber = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      return (
        <button key={index} className="rowNumber">{ghe.soGhe}</button>
      )
    })
  };
  render() {
    return (
      <div
        style={{
          marginTop: "10px",
          marginLeft: "100px",
          fontWeight: "bold",
          fontSize: "30px",
        }}
        className={"text-left text-warning"}
      >
        {this.renderHangGhe()}
      </div>
    );
  }
}

