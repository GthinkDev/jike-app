import { FC, memo, ReactNode } from "react";
import React from "react";

interface IProps {
  children: ReactNode;
}

const Layout: FC<IProps> = (props) => {
  const { children } = props;

  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default memo(Layout);
