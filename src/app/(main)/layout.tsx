"use client";

import { FC, memo, ReactNode } from "react";
import React from "react";
import { Provider } from "react-redux";

import store from "@/store";

interface IProps {
  children: ReactNode;
}

const Layout: FC<IProps> = (props) => {
  const { children } = props;

  return (
    <div>
      <Provider store={store}>{children}</Provider>
    </div>
  );
};

export default memo(Layout);
