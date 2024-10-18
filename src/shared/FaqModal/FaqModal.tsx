import BasicButton from '../Button/BasicButton'
import Modal from '../Modal/Modal'

const QNA = [
  {
    question: 'What is the relationship between NFT and Item?',
    answer:
      'Item is the copy of a digital asset. Simply, it’s the printmaking in arts. You can think of NFT as a proof of a digital asset’s ownership. In the NFT marketplace, you generate the revenue by giving out the ownership of your digital creation. To generate more revenue from NFT, sell the digital copy of your assets and earn profits without giving out the ownership of the creation.',
  },
  {
    question: 'Is item price different from NFT price?',
    answer:
      'Yes! Item price is the price for the costume selling on the Avatar Costume Shop. NFT price is the price for the original digital asset selling on the NFT Marketplace.',
  },
  {
    question: 'What happens when you sell your NFT?',
    answer:
      'The copyright still remains with the creator(you). Only the revenue from selling the NFT licensed costume will be vested to new NFT holder.',
  },
  {
    question: 'What happens when the user cancels the transactions of a purchased item?',
    answer:
      'User can cancel the transaction within 7 days of the purchase day. Thus, Settlus records the transaction after the cancellation period.',
  },
]

type PropType = {
  open: boolean
  handleClose: () => void
}

export default function FaqModal({ open, handleClose }: PropType): React.ReactElement {
  return (
    <>
      <Modal open={open} className='w-[700px] rounded-[20px] bg-white items-center p-[50px]'>
        <div className='flex flex-col text-left font-manrope'>
          {QNA.map((item) => (
            <div key={item.question} className='flex flex-col gap-[8px]'>
              <h3 className='font-bold text-2xl'>{item.question}</h3>
              <p className='mb-4 text-lg'>{item.answer}</p>
            </div>
          ))}
          <div className='flex items-center justify-center gap-4 pt-4 font-bold'>
            <BasicButton filled={false}>
              <a className='mt-auto' href='https://settlus.org/docs/whitepaper.pdf' target='_blank'>
                Settlus Whitepaper
              </a>
            </BasicButton>
            <BasicButton filled={true} handleClick={handleClose} className='w-[150px]'>
              <p>Close</p>
            </BasicButton>
          </div>
        </div>
      </Modal>
    </>
  )
}
