import { createSelector } from '@reduxjs/toolkit';

const cartItemsSelector = state => state.customer;

export const QuantityCustomer = createSelector(
    cartItemsSelector,
    customer => customer.reduce((count, customer) => count + customer.quantity, 0)
);

export const TotalCustomer = createSelector(
    cartItemsSelector,
    customer => customer.reduce((total, customer) => total + (customer.Gia), 0)
);
