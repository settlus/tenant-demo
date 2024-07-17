import styles from './Canvas.module.scss'
import { useRef, useEffect, useState } from 'react'
import resetIcon from '../../../../../public/svg/retry.svg'
import strokeIcon from '../../../../../public/svg/stroke.svg'

const COLORS = [
  "#000000",
  "#FF0000",
  "#47752A",
  "#0000FF",
  "#d4b807",
  "#800080",
  "#B5651D",
  "#FFFFFF",
] 

type propType = {
  handleFile: (file: string)=>void,
}

export default function Canvas({handleFile}: propType):React.ReactElement{
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null)
  const [isPainting, setIsPainting] = useState(false)
  const [stroke, setStroke] = useState({color: '#000000', size: 6})
  const [bgColor, setBgColor] = useState('#FFFFFF')

  function handleStroke(options: {color?: string, size?:number}){
    setStroke(prev=>{
      const updated = {...prev}
      if(options.color) updated.color = options.color
      if(options.size) updated.size = options.size
      return updated
    })
  }

  function handleBgColor(color: string){
    setBgColor(color)
  }


  function resetCanvas(){
    if(canvasRef && canvasRef.current && ctx){
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  }

  function handleSave(){
    if(ctx && canvasRef.current){
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

      ctx.drawImage(tempCanvas, 0, 0, tempCanvas.width, tempCanvas.height, 0, 0, newWidth, newHeight);

      const dataURL = canvasRef.current.toDataURL('image/png')
      handleFile(dataURL)

      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
    }
  }

  function startPainting(){
    setIsPainting(true)
    console.log(isPainting)
  }

  function stopPainting(){
    setIsPainting(false)
  }

  function onMouseMove(e: MouseEvent){
    const x = e.offsetX
    const y = e.offsetY

    if(ctx && canvasRef && canvasRef.current){
      if(!isPainting) {
        ctx.beginPath()
        ctx.moveTo(x,y)
      }else{
        ctx.lineTo(x,y)
        ctx.stroke()
      }
    }
  }

  useEffect(()=>{
    if(canvasRef && canvasRef.current){
      setCtx(canvasRef.current?.getContext("2d"))

      canvasRef.current.addEventListener("mousemove",onMouseMove)
      canvasRef.current.addEventListener("mousedown",startPainting)
      canvasRef.current.addEventListener("mouseup",stopPainting)
      canvasRef.current.addEventListener("mouseleave",stopPainting)
      
      return ()=>{
        canvasRef.current?.removeEventListener("mousemove",onMouseMove)
        canvasRef.current?.removeEventListener("mousedown",startPainting)
        canvasRef.current?.removeEventListener("mouseup",stopPainting)
        canvasRef.current?.removeEventListener("mouseleave",stopPainting)
      }
    }

  },[isPainting, ctx])

  useEffect(()=>{
    if(canvasRef && canvasRef.current){
      canvasRef.current.width = 280
      canvasRef.current.height = 280

      const initialCtx = canvasRef.current.getContext('2d')
      if(initialCtx){
        initialCtx.lineWidth = stroke.size
        initialCtx.strokeStyle = stroke.color
      }
    }
  },[canvasRef])

  useEffect(()=>{
    if(ctx){
      ctx.strokeStyle =  stroke.color
      ctx.lineWidth = stroke.size
    }
  },[stroke])

  return <div className={styles.main}>
    <div className={styles.tshirt}>
      <h3>Choose T-shirt color</h3>
      <div className={styles.colors}>
          {COLORS.map((item)=><li key={item} className={bgColor===item ? styles.active : ''} style={{backgroundColor:item}} onClick={()=>handleBgColor(item)} />)}
      </div>
    </div>
    <div className={styles.canvas}>
      <h3>Draw your design</h3>
      <div className={styles.canvasContainer}>
      <canvas ref={canvasRef} style={{backgroundColor: bgColor}}/> 
      <div className={styles.tools}>
        <div className={styles.strokeType}>
          <span>
            <img src={strokeIcon}/>
            <input id="size" type="range" min="1.0" max="52.0" step="1.0" defaultValue="6.0" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>handleStroke({size:Number(e.target.value)})}/>
          </span>
          <img src={resetIcon} className={styles.reset} onClick={resetCanvas} />
        </div>
        <div className={styles.colors}>
          {COLORS.map((item)=><li key={item} className={stroke.color===item ? styles.active : ''} style={{backgroundColor:item}} onClick={()=>handleStroke({color: item})} />)}
        </div>
      </div>
    </div>
    </div>
    <div className={styles.control}>
        <button onClick={handleSave}>Finish Drawing</button>
    </div>
  </div>
}