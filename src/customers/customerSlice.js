const { createSlice } = require('@reduxjs/toolkit');

const customerSlice = createSlice({
    name: 'customers',
    initialState: {
        HotToc:
            [
                { id: 1, name: "Nguyen Van A", TrangThai: false, Gia: 60000, quantity: 1, service: "Hớt tóc" },
                { id: 2, name: "Nguyen Van B", TrangThai: false, Gia: 60000, quantity: 1, service: "Hớt tóc" },
                { id: 3, name: "Nguyen Van C", TrangThai: false, Gia: 60000, quantity: 1, service: "Hớt tóc" },
                { id: 4, name: "Nguyen Van D", TrangThai: false, Gia: 60000, quantity: 1, service: "Hớt tóc" },
            ],
    },
    reducers: {}
})

const { actions, reducer } = customerSlice;
export const { } = actions;
export default reducer;