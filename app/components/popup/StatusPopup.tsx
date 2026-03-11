'use client'

import Popup from "@/app/components/shared/Popup"
import Button from "@/app/components/shared/Button"

type StatusPopupProps = {
  open: boolean,
  onClose: () => void,
  msg: String
}

export default function StatusPopup({
  open,
  onClose,
  msg = 'Welcome to Blackwell Global'
}: StatusPopupProps) {

  
  const handleClose = () => {
    onClose()
  }

  return (
    <Popup open={open} onClose={onClose} size="sm">

      <h2 className="text-2xl font-bold mb-6">
        Messenge
      </h2>

      <div className="message-box">
        {msg}
      </div>


      <div className="col-span-2 mt-5 text-center">
        <Button onClick={handleClose} variant="gradient">
          Close
        </Button>
      </div>

    </Popup>
  )
}