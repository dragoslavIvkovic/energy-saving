/* eslint-disable react/prop-types */
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
