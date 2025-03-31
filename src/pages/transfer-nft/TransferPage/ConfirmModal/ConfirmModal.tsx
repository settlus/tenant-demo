import { useState } from 'react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'

import { transferNFT } from '../../../../apis/api'
import TransferImage from '../../../../public/png/transfer.png'
import TransferDoneImage from '../../../../public/png/transfer_done.png'
import errorSvg from '../../../../public/svg/error.svg'
import loadingSpinner from '../../../../public/svg/loading.svg'
import retrySvg from '../../../../public/svg/retry.svg'
import BasicButton from '../../../../shared/Button/BasicButton'
import Modal from '../../../../shared/Modal/Modal'
import { formatNum } from '../../../../utils/util'

type PropType = {
  handleClose: () => void
  open: boolean
  offer: any
}

export default function ConfirmModal({ open, offer }: PropType): React.ReactElement {
  const navigate = useNavigate()
  const [isComplete, setIsComplete] = useState(false)
  const [isError, setIsError] = useState(false)
  const [hash, setHash] = useState(null)
  const { mutate, isLoading } = useMutation(() => transferNFT(), {
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
    <Modal open={open} className='w-[700px] p-[50px] rounded-[20px]'>
      {!isComplete && !isError && (
        <div className='flex flex-col items-center'>
          <img src={TransferImage} className='w-[60px] h-[60px] mb-4' />
          <div className='w-[600px] h-[185px] gap-[15px]'>
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
          {isLoading ? (
            <img className='m-0 w-[75px] h-[75px]' src={loadingSpinner} />
          ) : (
            <BasicButton
              handleClick={handleConfirm}
              className={`w-[120px] h-[50px] mt-10 bg-[#1ABF5D] text-white font-bold`}
            >
              Confirm
            </BasicButton>
          )}
        </div>
      )}
      {!isComplete && isError && (
        <div className='flex flex-col items-center gap-[20px]'>
          <p className='text-[24px] font-semibold'>Error</p>
          <img src={errorSvg} />
          <p className='text-xl text-center font-normal'>
            There was an error processing transaction.
            <br />
            Please try again.
          </p>
          <button
            onClick={!isLoading ? handleConfirm : undefined}
            className={isLoading ? 'bg-[#1555b5]' : 'flex flex-row items-center gap-2'}
          >
            {isLoading ? (
              'Loading...'
            ) : (
              <>
                <img src={retrySvg} />
                <BasicButton className='font-bold w-[190px] h-[50px] border border-[#DFE4EA] bg-transparent'>Retry</BasicButton>
              </>
            )}
          </button>
        </div>
      )}
      {isComplete && (
        <div className='flex flex-col'>
          <div className='flex flex-col h-[155px] gap-[20px] items-center'>
            <img className='w-[60px] h-[60px] m-0' src={TransferDoneImage} />
            <div className='flex flex-col gap-[15px]'>
              <p className='text-[24px] font-semibold'>Complete</p>
              <p className='text-xl font-normal'>NFT has been successfully transferred to Joy.</p>
            </div>
          </div>
          <div className='flex flex-row gap-[18px] justify-center font-bold mt-10'>
            <BasicButton className='font-bold w-[190px] h-[50px] border border-[#DFE4EA] bg-transparent'>
              <a
                href={`https://sepolia.settlus.network/tx/${hash}`}
                target='_blank'
                className='text-[#111928]'
              >
                View on Settlus Scan
              </a>
            </BasicButton>
            <BasicButton
              handleClick={() => {
                navigate('/complete')
              }}
              className='w-[190px] h-[50px] bg-[#1ABF5D] text-white'
            >
              Complete
            </BasicButton>
          </div>
        </div>
      )}
    </Modal>
  )
}
