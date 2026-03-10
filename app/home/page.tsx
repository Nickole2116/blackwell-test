'use client'

import Image from "next/image";
import Header from "./layout/Header";
import Body from "./layout/Body";
import Footer from "./layout/Footer";
import { useState } from "react"
import RegisterPopup from "../components/popup/RegisterPopup";


export default function HomePage() {
  const [open, setOpen] = useState(false)
  return (

    <>
      {/** Header */}
      <Header setOpenRegister={setOpen} />


      {/** Content */}
      <Body />


      {/** Footer */}
      <Footer />

      <RegisterPopup open={open} onClose={() => setOpen(false)} />

    </>
  );
}
