import React from "react";
import { useSelector } from "react-redux";
import { formatPrice } from "../utils/common";

function Bill() {
  const customerBill = useSelector((state) => state.customer.HotToc);

  return (
    <>
      {customerBill.map((customer) => (
        <div className="container" key={customer.id}>
          <div className="creator">
            <p>
              Người tạo: <span>{customer.name}</span>
            </p>
          </div>
          <div className="bill__customer">
            <div className="bill__left">
              {customer.name} - {customer.service}
            </div>
            <div className="bill__right">{customer.Gia}</div>
          </div>
          <div className="bill__total">
            <div className="bill__left">Tổng thanh toán:</div>
            <div className="bill__right">{formatPrice(customer.Gia)}</div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Bill;
