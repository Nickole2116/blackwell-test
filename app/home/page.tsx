'use client'

import Image from "next/image";
import Header from "./layout/Header";
import Body from "./layout/Body";
import Footer from "./layout/Footer";
import { useState } from "react"
import Popup from "@/app/components/shared/Popup"
import Button from "@/app/components/shared/Button"


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

      <Popup open={open} onClose={() => setOpen(false)} size="lg">

            <h2 className="text-2xl font-bold mb-4">
            Welcome
            </h2>

            <p className="text-gray-600">
            This is a reusable popup component.
            </p>

            <div className="mt-6 flex gap-3">
            <Button onClick={() => setOpen(false)}>
                Close
            </Button>
            </div>

      </Popup>
    </>
  );
}
