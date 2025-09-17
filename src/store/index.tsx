"use client";

import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./modules/user";

// 组装 redux 子模块 + 导出 store 实例
const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
