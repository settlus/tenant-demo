import Modal from '../../../../shared/Modal/Modal'
import TransferImage from '../../../../public/png/transfer.png'
import TransferDoneImage from '../../../../public/png/transfer_done.png'
import styles from './ConfirmModal.module.scss'
import { transferNFT } from '../../../../apis/api'
import { useNavigate } from 'react-router-dom'
import { useMutation } from 'react-query'
import { formatNum } from '../../../../utils/util'
import { useState } from 'react'
import CheckImg from '../../../../public/svg/Check.svg'
import retrySvg from '../../../../public/svg/retry.svg'
import errorSvg from '../../../../public/svg/error.svg'
import BasicButton from '../../../../shared/Button/BasicButton'
import BaseCard from '../../../../shared/Card/BaseCard'

type PropType = {
  handleClose: () => void
  open: boolean
  offer: any
}

export default function ConfirmModal({ open, handleClose, offer }: PropType): React.ReactElement {
  const navigate = useNavigate()
  const [isComplete, setIsComplete] = useState(false)
  const [isError, setIsError] = useState(false)
  const [hash, setHash] = useState(null)
  const { mutate, isLoading, isSuccess } = useMutation(() => transferNFT(), {
    onSuccess: (hash) => {
      sessionStorage.setItem('mission', '5')
      setIsComplete(true)
      setHash(hash)
    },
    onError: () => {
      setIsError(true)
    },
  })

  async function handleConfirm() {
    mutate()
  }

  return (
    <Modal
      open={open}
      handleClose={isLoading || isSuccess ? undefined : handleClose}
      style='w-[700px] p-[50px] rounded-[20px]'
    >
        {!isComplete && !isError && (
          <div className="h-[452px]">
            <img src={TransferImage} className="w-[60px] h-[60px]" />
            <div className="w-[600px] h-[185px] gap-[15px]">
              <p className='text-[24px] font-semibold'>Confirm</p>
              <p className='text-xl text-center font-normal'>
                Once transferred, profits from NFT-licensed item will be vested to the new owner.
                <br />
                <br />
                You will receive {formatNum(offer.offerPrice)} to your account.
                <br />
                (In demo, no payment will be received.)
              </p>
            </div>
            <BasicButton
              handleClick={!isLoading ? handleConfirm : undefined}
              filled={isLoading ? false : true}
              className={`w-[120px] h-[50px] mt-10 font-bold`}
            >
              {isLoading ? 'Loading...' : 'Confirm'}
            </BasicButton>
          </div>
        )}
        {!isComplete && isError && (
          <>
            <h2>Error</h2>
            <img src={errorSvg} />
            <p>
              There was an error processing transaction.
              <br />
              Please try again.
            </p>
            <button
              onClick={!isLoading ? handleConfirm : undefined}
              className={isLoading ? styles.loading : styles.retryBtn}
            >
              {isLoading ? (
                'Loading...'
              ) : (
                <>
                  <img src={retrySvg} />
                  <p>Retry</p>
                </>
              )}
            </button>
            {/* <button onClick={handleConfirm} className={styles.retryBtn}><img src={retrySvg} /><p>Retry</p></button> */}
          </>
        )}
        {isComplete && (
          <div className="flex flex-col h-[340px]">
            <div className='flex flex-col h-[155px] gap-[20px] items-center'>
              <img className="w-[60px] h-[60px] m-0" src={TransferDoneImage} />
              <div className='flex flex-col gap-[15px]'>
                <p className='text-[24px] font-semibold'>Complete</p>
                <p className='text-xl font-normal'>NFT has been successfully transferred to Joy.</p>
              </div>
            </div>
            <div className='flex flex-row gap-[18px] justify-center font-bold mt-10'>
              <BasicButton className='w-[190px] h-[50px]' filled={false}>
                <a
                  href={`https://${import.meta.env.VITE_CHAIN_TYPE}net.settlus.network/tx/${hash}`}
                  target='_blank'
                >
                  View on Settlus Scan
                </a>
              </BasicButton>
              <BasicButton
                handleClick={() => {
                  navigate('/complete')
                }}
                filled={true}
                className='w-[190px] h-[50px]'
              >
                Complete
              </BasicButton>
            </div>
          </div>
        )}
    </Modal>
  )
}
