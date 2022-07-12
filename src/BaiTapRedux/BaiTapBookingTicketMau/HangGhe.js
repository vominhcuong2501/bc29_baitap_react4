import React, { Component } from "react";
import {connect} from 'react-redux'
import { datGheAction } from "../../Redux/actions/BaiTapBookingActions";

class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      if (ghe.hang === "") {
        return <span>{ghe.soGhe}</span>;
      }

      // xét ghế đã được đặt
      let cssGheDaDat = "";
      let disable = false;
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disable = true;
      }

      // xét ghế đang đặt
      let cssGheDangDat = "";
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe);
      if(indexGheDangDat !== -1) {
        cssGheDangDat = "gheDangChon"
      }
      
      return (
        <button
          onClick={() => {
            this.props.datGhe(ghe)
          }}
          key={index}
          disabled={disable}
          className={`ghe ${cssGheDaDat} ${cssGheDangDat}`}
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
const mapDispatchToProps = dispatch => {
  return{
    datGhe: (ghe) => {
      dispatch(datGheAction(ghe))
    }
  }
}
export default connect(state => ({...state.BaiTapBookingReducer}), mapDispatchToProps)(HangGhe)