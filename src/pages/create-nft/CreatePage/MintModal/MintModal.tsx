import errorSvg from '../../../../public/svg/error.svg'
import loadingSpinner from '../../../../public/svg/loading.svg'
import MintedSvg from '../../../../public/svg/minted.svg'
import retrySvg from '../../../../public/svg/retry.svg'
import BasicButton from '../../../../shared/Button/BasicButton.tsx'
import Modal from '../../../../shared/Modal/Modal.tsx'

type PropType = {
  step: number
  open: boolean
  handleClose: () => void
  handleStep: (step?: number) => void
}

export default function MintModal({
  step,
  open,
  handleClose,
  handleStep,
}: PropType): React.ReactElement {
  const isLoaded = typeof window !== 'undefined' && typeof window.Module !== 'undefined'

  function handleDone() {
    handleClose()
    if (step === 2.5) {
      handleStep(0)
    } else handleStep()
  }

  return (
    <>
      {step > 0 && step < 3 && (
        <Modal open={open} className='w-[700px] rounded-[20px] items-center p-[50px]'>
          {step === 1 && (
            <div className='flex flex-col w-[500px] items-center gap-[40px]'>
              <div>
                <p className='font-manrope text-2xl font-bold whitespace-nowrap'>
                  Minting your digital asset as an NFT...
                </p>
              </div>
              <div className='flex flex-col items-center gap-[10px]'>
                <img
                  className='w-[200px] h-[200px]'
                  src={isLoaded ? Module.OVDR_Thumbnails?.main.url : ''}
                />
                <img className='m-0 w-[75px] h-[75px]' src={loadingSpinner} />
              </div>
            </div>
          )}
          {step === 2 && (
            <div className='flex flex-col items-center gap-[40px]'>
              <div className='flex flex-col w-[200px] h-[274px] gap-[40px] items-center'>
                <div className='flex flex-row h-[34px] gap-[16px] items-center'>
                  <img src={MintedSvg} className='w-[24px] h-[24px]' />
                  <p className='font-manrope text-2xl font-bold flex flex-col justify-end h-full'>
                    NFT Minted
                  </p>
                </div>
                <img
                  className='m-auto h-[200px] w-[200px]'
                  src={isLoaded ? Module.OVDR_Thumbnails?.main.url : ''}
                />
              </div>
              <div className='flex flex-row gap-[10px]'>
                <BasicButton
                  className='font-bold w-[190px] h-[50px] border border-[#DFE4EA] bg-transparent'
                  handleClick={() =>
                    window.open(
                      `http://${import.meta.env.VITE_CHAIN_TYPE}net.settlus.network/nft/${import.meta.env.VITE_CONTRACT_ADDR}/${BigInt(sessionStorage.getItem('tokenId') || '0x0')}`,
                      '_blank'
                    )
                  }
                >
                  <p className='text-[#111928]'>Detail</p>
                </BasicButton>
                <BasicButton
                  handleClick={handleDone}
                  className='w-[190px] h-[50px] font-bold bg-[#1ABF5D] text-white'
                >
                  Done
                </BasicButton>
              </div>
            </div>
          )}
          {step === 2.5 && (
            <div>
              <div className='flex flex-col gap-6 items-center'>
                <img className='h-[4rem] w-[4rem]' src={errorSvg} />
                <p>Error has occurred while minting NFT. Please retry.</p>
                <button className={'rounded-lg'} onClick={() => handleStep(1)}>
                  <img src={retrySvg} />
                  <p>Retry</p>
                </button>
              </div>
            </div>
          )}
        </Modal>
      )}
    </>
  )
}
