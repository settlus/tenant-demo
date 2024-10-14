import { useRef, useEffect, useState } from 'react'
import resetIcon from '../../../../../public/svg/retry.svg'
import pencilIcon from '../../../../../public/png/pencil.png'
import BaseTitle from '../../../../../shared/Card/Title'
import BasicButton from '../../../../../shared/Button/BasicButton'
import BaseCard from '../../../../../shared/Card/BaseCard'

const COLORS = [
  '#000000',
  '#FFFFFF',
  '#FF0000',
  '#0000FF',
  '#33FF00',
  '#00FFF0',
  '#ECFF9F',
  '#FFA9CD',
  '#B2FF9F',
  '#9EE8F2',

  '#989898',
  '#B1E4C9',
  '#536EA2',
  '#9700A4',
  '#E87A61',
  '#00396E',
  '#425447',
  '#C3003A',
  '#D7BDBD',
  '#FFF385',
]

type propType = {
  handleFile: (file: string) => void
}

export default function Canvas({ handleFile }: propType): React.ReactElement {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null)
  const [isPainting, setIsPainting] = useState(false)
  const [stroke, setStroke] = useState({ color: '#000000', size: 6 })
  const [bgColor, setBgColor] = useState('#FFFFFF')

  function handleStroke(options: { color?: string; size?: number }) {
    setStroke((prev) => {
      const updated = { ...prev }
      if (options.color) updated.color = options.color
      if (options.size) updated.size = options.size
      return updated
    })
  }

  function handleBgColor(color: string) {
    setBgColor(color)
  }

  function resetCanvas() {
    if (canvasRef && canvasRef.current && ctx) {
      ctx.fillStyle = bgColor
      ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height)
    }
  }

  function handleSave() {
    if (ctx && canvasRef.current) {
      const tempCanvas = document.createElement('canvas')
      const tempCtx = tempCanvas.getContext('2d')
      const SIZE = 512

      if (!tempCtx) return

      tempCanvas.width = SIZE
      tempCanvas.height = SIZE

      tempCtx.drawImage(canvasRef.current, 130, 120)

      ctx.clearRect(0, 0, SIZE, SIZE)
      ctx.fillStyle = bgColor
      ctx.fillRect(0, 0, SIZE, SIZE)

      const newWidth = SIZE / 3.5
      const newHeight = SIZE / 3.5

      ctx.drawImage(
        tempCanvas,
        0,
        0,
        tempCanvas.width,
        tempCanvas.height,
        0,
        0,
        newWidth,
        newHeight
      )

      const dataURL = canvasRef.current.toDataURL('image/png')
      handleFile(dataURL)

      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
    }
  }

  function startPainting() {
    setIsPainting(true)
    console.log(isPainting)
  }

  function stopPainting() {
    setIsPainting(false)
  }

  function onMouseMove(e: MouseEvent) {
    const x = e.offsetX
    const y = e.offsetY

    if (ctx && canvasRef && canvasRef.current) {
      if (!isPainting) {
        ctx.beginPath()
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
        ctx.stroke()
      }
    }
  }

  useEffect(() => {
    if (canvasRef && canvasRef.current) {
      setCtx(canvasRef.current?.getContext('2d'))

      canvasRef.current.addEventListener('mousemove', onMouseMove)
      canvasRef.current.addEventListener('mousedown', startPainting)
      canvasRef.current.addEventListener('mouseup', stopPainting)
      canvasRef.current.addEventListener('mouseleave', stopPainting)

      return () => {
        canvasRef.current?.removeEventListener('mousemove', onMouseMove)
        canvasRef.current?.removeEventListener('mousedown', startPainting)
        canvasRef.current?.removeEventListener('mouseup', stopPainting)
        canvasRef.current?.removeEventListener('mouseleave', stopPainting)
      }
    }
  }, [isPainting, ctx])

  useEffect(() => {
    if (canvasRef && canvasRef.current) {
      canvasRef.current.width = 280
      canvasRef.current.height = 280

      const initialCtx = canvasRef.current.getContext('2d')
      if (initialCtx) {
        initialCtx.lineWidth = stroke.size
        initialCtx.strokeStyle = stroke.color
      }
    }
  }, [canvasRef])

  useEffect(() => {
    if (ctx) {
      ctx.strokeStyle = stroke.color
      ctx.lineWidth = stroke.size
    }
  }, [stroke])

  return (
    <div className='flex flex-col gap-[10px]'>
      <BaseCard className='flex flex-col px-[16px] py-[20px] h-[150px] bg-[#fff] gap-[20px]'>
        <BaseTitle name='Choose T-shirt color' />
        <div className={`grid grid-rows-2 grid-cols-10 gap-[8px]`}>
          {COLORS.map((item) => (
            <li
              key={item}
              className={`list-none w-[30px] h-[30px] cursor-pointer rounded-full border border-[rgb(123,123,123)] ${
                bgColor === item ? 'border-[5px] border-[#3E72F8]' : ''
              }`}
              style={{ backgroundColor: item }}
              onClick={() => handleBgColor(item)}
            />
          ))}
        </div>
      </BaseCard>
      <BaseCard className='flex flex-col px-[16px] py-[20px] bg-[#fff] gap-[20px]'>
        <BaseTitle name='Draw your design' />
        <div className='flex flex-row mb-4 gap-[10px] h-[240px] justify-center'>
          <canvas
            className='rounded-[0.3rem] cursor-crosshair w-[240px] h-[240px] border border-[rgb(228,228,228)]'
            ref={canvasRef}
            style={{ backgroundColor: bgColor }}
          />
          <div className='flex flex-row gap-4 h-[240px]'>
            <div className='flex flex-col h-full gap-3 items-center'>
              <img className='m-0 h-[20px] w-[20px]' src={pencilIcon} />
              <span className='flex flex-col bg-white border border-[rgb(196,196,196)] rounded-xl p-2 items-center gap-2'>
                <input
                  id='size'
                  aria-orientation='vertical'
                  type='range'
                  min='1.0'
                  max='52.0'
                  step='1.0'
                  defaultValue='6.0'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleStroke({
                      size: Number(e.target.value),
                    })
                  }
                  className='w-[16px] h-[150px] writing-mode-vertical-lr apperance-auto'
                  style={{
                    writingMode: 'vertical-lr',
                    direction: 'rtl',
                  }}
                />
              </span>
              <img
                src={resetIcon}
                className='w-[25px] h-[25px] m-auto p-[0.1rem] bg-[#9e9e9e] rounded-full'
                onClick={resetCanvas}
              />
            </div>
            <div className={`grid grid-rows-10 grid-cols-2 gap-[5px] mb-auto`}>
              {COLORS.map((item) => (
                <li
                  key={item}
                  className={`list-none w-[20px] h-[20px] cursor-pointer rounded-full border border-[rgb(123,123,123)] ${
                    stroke.color === item ? 'border-[3px] border-[#3E72F8]' : ''
                  }`}
                  style={{ backgroundColor: item }}
                  onClick={() => handleStroke({ color: item })}
                />
              ))}
            </div>
          </div>
        </div>
        <BasicButton
          filled={false}
          className='w-[200px] m-auto justify-center'
          handleClick={handleSave}
        >
          Finish Drawing
        </BasicButton>
      </BaseCard>
    </div>
  )
}
