import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { QuantityCustomer, TotalCustomer } from "../customers/selector";
import { formatPrice } from "../utils/common";

export default function Service() {
  const customerList = useSelector((state) => state.customer.HotToc);
  const [color, setColor] = useState(customerList);

  const [total, setTotal] = useState(0);

  const [qty, setQty] = useState(0);

  const handleCustomerClick = (customer) => {
    const newCustomer = color.map((val) => {
      if (val.id === customer.id) {
        return { ...val, TrangThai: !val.TrangThai };
      } else {
        return val;
      }
    });
    setColor(newCustomer);
    setQty(
      customer.TrangThai
        ? newCustomer.reduce((count, customer) => count - customer.quantity, 0)
        : newCustomer.reduce((count, customer) => count + customer.quantity, 0)
    );
    console.log(newCustomer);
    setTotal(customer.TrangThai ? customer.Gia - customer.Gia : customer.Gia);

    // localStorage.setItem("customer", JSON.stringify(customer));
  };

  return (
    <>
      <div className="service__all">
        <div className="service__all__1">
          <div className="flex__service">
            <div className="service__1">
              <div className="service__left">
                <h3>Hớt tóc</h3>
                <span>60.000 VND</span>
              </div>
            </div>
            <div className="service__right">
              <div className="list__customers">
                {color.map((customer) => (
                  <Button
                    className={"content " + customer.TrangThai}
                    key={customer.id}
                    style={{
                      backgroundColor: customer.TrangThai
                        ? "#FE7A15"
                        : "#9b89d6",
                    }}
                    onClick={() => handleCustomerClick(customer)}
                  >
                    <div className="text-center">
                      <h4>
                        <Typography variant="body2">{customer.name}</Typography>
                      </h4>
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="bill__cart">
          <div className="total__service">{formatPrice(total)}</div>
          <NavLink className="btn__green" to="/bill">
            XUẤT HÓA ĐƠN [{qty}]
          </NavLink>
        </div>
      </div>
    </>
  );
}
