import BasicButton from '../../../../../shared/Button/BasicButton'
import Modal from '../../../../../shared/Modal/Modal'

type QnaModalProps = {
  open: boolean
  handleClose: () => void
}

export default function QnaModal({ open, handleClose }: QnaModalProps): React.ReactElement {
  return (
    <Modal
      open={open}
      handleClose={handleClose}
      style='w-[700px] h-[497px] items-center justify-center rounded-[20px]'
    >
      <div className='flex flex-col text-left gap-[40px] px-[50px] items-center'>
        <div className='gap-[8px]'>
          <p className='text-2xl font-[Manrope] font-bold'>
            What is the relationship between NFT and Item?
          </p>
          <p className='text-lg font-medium font-[Manrope]'>
            {' '}
            Item is the copy of a digital asset. Simply, it’s the printmaking in arts. You can think
            of NFT as a proof of a digital asset’s ownership. In NFT marketplace, you generate the
            revenue by selling the ownership of your digital creation. To generate more revenue from
            NFT, sell the digital copy of your assets on off-chain Avatar Costume Shop. You can earn
            profits from selling items until you sell your NFT on NFT marketplace.
          </p>
        </div>
        <div className='gap-[8px'>
          <p className='text-2xl font-[Manrope] font-bold'>
            Is item price different from NFT price?
          </p>
          <p className='text-lg font-medium font-[Manrope]'>
            {' '}
            Yes! Item price is the price for the costume selling on the Avatar Costume Shop. NFT
            price is the price for the original digital asset selling on the NFT Marketplace.
          </p>
        </div>
        <BasicButton filled={true} handleClick={handleClose} className='w-[150px]'>
          Close{' '}
        </BasicButton>
      </div>
    </Modal>
  )
}
