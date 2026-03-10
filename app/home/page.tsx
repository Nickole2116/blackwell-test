'use client'

import Image from "next/image";
import Header from "./layout/Header";
import Body from "./layout/Body";
import Footer from "./layout/Footer";
import { useState } from "react"
import RegisterPopup from "../components/popup/RegisterPopup";
import LoginPopup from "../components/popup/LoginPopup";
import LanguagePopup from "../components/popup/LanguagePopup";


export default function HomePage() {
  const [openRegister, setOpenRegister] = useState(false)
  const [openLogin, setOpenLogin] = useState(false)
  const [openLanguage, setOpenLanguage] = useState(false)
  return (

    <>
      {/** Header */}
      <Header setOpenRegister={setOpenRegister} setOpenLogin={setOpenLogin} setOpenLanguage={setOpenLanguage} />


      {/** Content */}
      <Body />


      {/** Footer */}
      <Footer />

      <RegisterPopup open={openRegister} onClose={() => setOpenRegister(false)} />
      <LoginPopup open={openLogin} onClose={() => setOpenLogin(false)} />
      <LanguagePopup open={openLanguage} onClose={() => setOpenLanguage(false)} />

    </>
  );
}
