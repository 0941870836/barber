import { Button } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { QuantityCustomer, TotalCustomer } from "../customers/selector";

export default function Total() {
  const Total = useSelector(TotalCustomer);
  const Quantity = useSelector(QuantityCustomer);

  return (
    <section className="bill__cart">
      <div className="total__service">{Total} VND</div>
      <Button className="btn__green">XUẤT HÓA ĐƠN [{Quantity}]</Button>
    </section>
  );
}
