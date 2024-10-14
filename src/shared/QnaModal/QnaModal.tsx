import Modal from '../Modal/Modal'
import BasicButton from '../Button/BasicButton'

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

export default function QnaModal({ open, handleClose }: PropType): React.ReactElement {
  return (
    <>
      <Modal open={open} className='min-h-[70vh] w-[60vw] flex bg-transparent rounded-[20px] p-0'>
        <div className='h-full flex flex-col relative overflow-visible'>
          <div className='h-full overflow-auto bg-white rounded-[20px] p-12 gap-2 text-left flex flex-col'>
            {QNA.map((item) => (
              <div key={item.question}>
                <h3 className='font-bold text-2xl'>{'🙋🏼 ' + item.question}</h3>
                <p className='mb-4 text-lg'>{'\u2003→ 💁🏼‍' + item.answer}</p>
              </div>
            ))}
            <div className='flex items-center justify-center gap-4 pt-4'>
              <BasicButton filled={false}>
                <a
                  className='mt-auto'
                  href='https://settlus.org/docs/whitepaper.pdf'
                  target='_blank'
                >
                  Go to Settlus Whitepaper
                </a>
              </BasicButton>
              <BasicButton filled={true} handleClick={handleClose} className='w-[150px]'>
                <p>Close</p>
              </BasicButton>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}
