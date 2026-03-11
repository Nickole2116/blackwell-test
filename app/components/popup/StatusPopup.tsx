'use client'

import Popup from "@/app/components/shared/Popup"
import Button from "@/app/components/shared/Button"
import { useI18n } from '@/context/I18nContext'

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
  const { t } = useI18n()

  
  const handleClose = () => {
    onClose()
  }

  return (
    <Popup open={open} onClose={onClose} size="sm">

      <h2 className="text-2xl font-bold mb-6">
        {t('land.message')}
      </h2>

      <div className="message-box">
        {msg}
      </div>


      <div className="col-span-2 mt-5 text-center">
        <Button onClick={handleClose} variant="gradient">
          {t('land.close')}
        </Button>
      </div>

    </Popup>
  )
}