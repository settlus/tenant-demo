import Modal from '../../../../shared/Modal/Modal.tsx'
import checkSvg from '../../../../public/svg/Check.svg'
import docSvg from '../../../../public/svg/Doc.svg'
import styles from './SubmitModal.module.scss'
import loadingSpinner from '../../../../public/svg/loading.svg'
import errorSvg from '../../../../public/svg/error.svg'
import retrySvg from '../../../../public/svg/retry.svg'
import { SubmitModalContentBox } from './SubmitModalContentBox.tsx'

type PropType = {
  step: number
  open: boolean
  handleClose: () => void
  handleStep: (step?: number) => void
}

export default function SubmitModal({
  step,
  open,
  handleClose,
  handleStep,
}: PropType): React.ReactElement {
  const isLoaded = typeof window !== 'undefined' && typeof window.Module !== 'undefined'

  function handleClick() {
    handleClose()
    if (step === 2.5) {
      handleStep(0)
    } else handleStep()
  }

  return (
    <>
      {step > 0 && step < 3 && (
        <Modal
          open={open}
          handleClose={step >= 2 ? handleClick : undefined}
          style='w-[700px] h-[404px] items-center justify-center rounded-[20px]'
        >
          {step === 1 && (
            <SubmitModalContentBox title='Processing...'>
              <div className='flex flex-row justify-between items-center my-8 mx-auto w-[80%]'>
                <img
                  className='w-[200px] h-[200px]'
                  src={isLoaded ? Module.OVDR_Thumbnails?.main.url : ''}
                />
                <img src={loadingSpinner} />
                <div className={styles.nftDoc}>
                  <img src={docSvg} />
                  <h3>NFT</h3>
                </div>
              </div>
            </SubmitModalContentBox>
          )}
          {step === 2 && (
            <SubmitModalContentBox title='NFT Minted' titleDeco={checkSvg}>
              <img src={checkSvg} />
              <div
                className='bg-[#fff]'
                onClick={() =>
                  window.open(
                    `http://${import.meta.env.VITE_CHAIN_TYPE}net.settlus.network/nft/${import.meta.env.VITE_CONTRACT_ADDR}/${BigInt(sessionStorage.getItem('tokenId') || '0x0')}`,
                    '_blank'
                  )
                }
              >
                <img
                  className='m-auto h-[200px] w-[200px]'
                  src={isLoaded ? Module.OVDR_Thumbnails?.main.url : ''}
                />
              </div>
            </SubmitModalContentBox>
          )}
          {step === 2.5 && (
            <SubmitModalContentBox title='Error' className='gap-3'>
              <div className={styles.error}>
                <img className={styles.errorImg} src={errorSvg} />
                <p>Error has occurred while minting NFT. Please retry.</p>
                <button className={'rounded-lg'} onClick={() => handleStep(1)}>
                  <img src={retrySvg} />
                  <p>Retry</p>
                </button>
              </div>
            </SubmitModalContentBox>
          )}
        </Modal>
      )}
    </>
  )
}
