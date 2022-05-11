import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Product() {
  const customerList = useSelector((state) => state.customer);
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
  };

  return (
    <>
      <div className="product__all">
        <div className="product__all__1">
          <div className="flex__product">
            <div className="product__1">
              <div className="product__left">
                <h4>volca</h4>
                <span>50.000 VND</span>
              </div>
            </div>
            <div className="product__right">
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
          <div className="total__service">{total} VND</div>
          <Button className="btn__green">XUẤT HÓA ĐƠN [{qty}]</Button>
        </div>
      </div>
    </>
  );
}
