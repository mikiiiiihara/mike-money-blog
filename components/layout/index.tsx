import React, { ReactElement } from "react";
import { Header } from "../header";
import { Footer } from "../footer";
import { Profile } from "../profile";

type Props = {
  children: ReactElement;
};

const LayoutComponent: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Profile />
      <Footer />
    </>
  );
};

LayoutComponent.displayName = "Layout";
export const Layout = React.memo(LayoutComponent);
