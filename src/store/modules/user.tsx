"use client";

// 和用户相关的状态管理
import { createSlice } from "@reduxjs/toolkit";

const userStore = createSlice({
  name: "user",
  initialState: {
    token: "", // token
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});

// 解构 actions 函数
const { setToken } = userStore.actions;

// 获取 reducer 函数
const userReducer = userStore.reducer;

export { setToken };
export default userReducer;
