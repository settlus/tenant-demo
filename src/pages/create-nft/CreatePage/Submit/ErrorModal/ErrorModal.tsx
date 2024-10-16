import InvalidErrorImg from '../../../../../public/svg/invalid_input_error.svg'
import BasicButton from '../../../../../shared/Button/BasicButton'
import Modal from '../../../../../shared/Modal/Modal'

type ErrorModalProps = {
  open: boolean
  handleClose: () => void
}

export default function QnaModal({ open, handleClose }: ErrorModalProps): React.ReactElement {
  return (
    <Modal
      open={open}
      // handleClose={isLoading || isSuccess ? undefined : handleClose}
      className='w-[700px] p-[50px] rounded-[20px]'
    >
      <div className='flex flex-col'>
        <div className='flex flex-col h-[155px] gap-[20px] items-center'>
          <img className='w-[60px] h-[60px] m-0' src={InvalidErrorImg} />
          <div className='flex flex-col gap-[15px]'>
            <p className='text-[24px] font-semibold'>Please enter valid input</p>
          </div>
        </div>
        <div className='m-auto font-bold mt-10'>
          <BasicButton
            className='w-[190px] h-[50px] bg-[#E10E0E]'
            filled={false}
            handleClick={handleClose}
          >
            Close
          </BasicButton>
        </div>
      </div>
    </Modal>
  )
}
