import Image from "next/image";
import Header from "./layout/Header";
import Body from "./layout/Body";
import Footer from "./layout/Footer";

export default function HomePage() {
  return (

    <>
      {/** Header */}
      <Header />


      {/** Content */}
      <Body />


      {/** Footer */}
      <Footer />
    </>
  );
}
