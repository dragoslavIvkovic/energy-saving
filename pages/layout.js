import Footer from "../components/Footer/Footer";
 

 
export default function Layout({ children } ) {
  return (
    <>
      {/* <IndexPage /> */}
      <main>{children}</main>
      <Footer />
    </>
  );
}
