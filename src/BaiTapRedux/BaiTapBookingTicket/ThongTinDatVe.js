import React, { Component } from "react";
import { connect, Connect } from "react-redux";
import { huyGheAction } from "../../Redux/actions/BaiTapBookingActions";

class ThongTinDatVe extends Component {
  render() {
    return (
      <div>
        <h3 className="text-info text-center">Thông tin đặt vé</h3>
        <div className="mb-3" style={{ fontSize: "20px" }}>
          <button className="gheDuocChon"></button> <span>Ghế được đặt</span>
          <br />
          <button className="gheDangChon my-1"></button>{" "}
          <span>Ghế được đặt</span>
          <br />
          <button className="gheTrong"></button> <span>Ghế được đặt</span>
          <br />
        </div>
        <table className="table" border={2}>
          <thead>
            <tr className="text-light" style={{ fontSize: "25px" }}>
              <th>Ghế</th>
              <th>Giá tiền</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.danhSachGheDangDat.map((gheDangDat, index) => {
              return (
                <tr key={index} className="text-warning">
                  <td>{gheDangDat.soGhe}</td>
                  <td>{gheDangDat.gia}</td>
                  <td>
                    <button
                      onClick={() =>
                        this.props.dispatch(huyGheAction(gheDangDat.soGhe))
                      }
                      className="btn text-danger p-0"
                      style={{ fontSize: 20 }}
                    >
                      X
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="text-light">
              <td>Tổng tiền</td>
              <td>
                {this.props.danhSachGheDangDat
                  .reduce((tongTien, gheDangDat) => {
                    return (tongTien += gheDangDat.gia);
                  }, 0)
                  .toLocaleString()}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
export default connect((state) => ({ ...state.BaiTapBookingReducer }))(
  ThongTinDatVe
);
