import Footer from "../components/Footer/Footer";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      {/* <IndexPage /> */}
      <main>{children}</main>
      <Footer />
    </>
  );
}
