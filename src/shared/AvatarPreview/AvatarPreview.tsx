// import clsx from 'clsx'
// import { useAtom } from 'jotai'
// import Image from 'next/image'
// import Script from 'next/script'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

// import { isUnrealErrorAtom } from '@shared/store'
// import { Button } from '@shared/ui/button'

import styles from './AvatarPreview.module.scss'

type Props = {
  small?: boolean
  selectedTemplateMeshName?: string
  uploadedFile: string | null
  onUploadReady?: () => void
  handleIsLoading?: (value: boolean) => void
}

declare global {
  interface Window {
    Module: any;
  }
}

// TODO: 비즈니스 로직 분리 및 구조 리팩토링 필요. 토나온다.
const AvatarPreview = ({
  small = false,
  selectedTemplateMeshName,
  uploadedFile,
  onUploadReady,
  handleIsLoading,
}: Props) => {
  const isLoaded = useMemo(
    () => typeof window !== 'undefined' && typeof window.Module !== 'undefined',
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [window.Module],
  )

  const mainAreaRef = useRef<HTMLDivElement>(null)
  const [isUnrealError, setIsUnrealError] = useState(false)//useAtom(isUnrealErrorAtom)

  const [isJQueryLoaded, setJQueryLoaded] = useState(false)
  const [isUnrealLoaded, setUnrealLoaded] = useState(false)
  const [isCanvasLoaded, setCanvasLoaded] = useState(false)
  const [bodyType, setBodyType] = useState(1)

  const handleLoadJquery = useCallback(async () => {
    console.log('load jquery');
    try{
      const unloadedScript = document.querySelector('script[src="/lib/jquery-2.1.3.min.js"]')
      if (unloadedScript) {
        unloadedScript.parentNode?.removeChild(unloadedScript)
      }

      const jquery = document.createElement('script')
      jquery.src = '/lib/jquery-2.1.3.min.js'
      jquery.setAttribute('data-nscript', 'lazyOnload')
      document.body.appendChild(jquery)

      jquery.onload = () => {
        setJQueryLoaded(true)
      }

    }catch(e){
      console.log(e);
    }
    
  }, [])

  const handleLoadScript = useCallback(async () =>{
    try{
      const unloadedScript = document.querySelector('script[src="/lib/unreal/OVDRClothWeb-HTML5-Shipping.UE4.js"]')
      if (unloadedScript) {
        unloadedScript.parentNode?.removeChild(unloadedScript)
      }

      const script = document.createElement('script')
      script.src = '/lib/unreal/OVDRClothWeb-HTML5-Shipping.UE4.js'
      script.setAttribute('data-nscript', 'lazyOnload')

      script.onload = async () => {
        try {
          handleLoadTemplate()
        } catch (e) {
          setIsUnrealError(true)
          console.error(e)
        }
      }

      document.body.appendChild(script)


    }catch(e){
      console.log(e);
    }
  }, [])

  const handleLoadTemplate = useCallback(async () => {

    try {
      Module.OVDR_FilePath = '/lib/unreal/'
      setIsUnrealError(false)
      await Module.init()
      setUnrealLoaded(true)
      onUploadReady && onUploadReady()
    } catch (e) {
      setIsUnrealError(true)
      console.error(e)
    }
  }, [onUploadReady])

  const handleAddCanvas = useCallback(async () => {
    setCanvasLoaded(true)
    mainAreaRef.current?.appendChild(Module.canvas)
    Module.UE4_resizeCanvas && Module.UE4_resizeCanvas()
    onUploadReady && onUploadReady()
  }, [onUploadReady])

  const handleResetAvatar = useCallback(async () => {
    try {
      Module.OVDR_ResetAvatar && (await Module.OVDR_ResetAvatar())
    } catch (e) {
      setIsUnrealError(true)
      console.error(e)
    }
  }, [])

  const handleSelectTemplate = useCallback(async (meshName: string) => {
    try {
      handleIsLoading && handleIsLoading(true)
      Module.OVDR_SelectTemplate && (await Module.OVDR_SelectTemplate(meshName))
    } catch (e) {
      setIsUnrealError(true)
      console.error(e)
    }
    handleIsLoading && handleIsLoading(false)
  }, [])

  const handleApplyPng = useCallback(async (file: string, meshName: string) => {
    console.log('executed');
    try {
      handleIsLoading && handleIsLoading(true)
      Module.OVDR_ApplyPNG && (await Module.OVDR_ApplyPNG(file, meshName))
      Module.OVDR_CaptureThumbnail && (await Module.OVDR_CaptureThumbnail(meshName))
    } catch (e) {
      setIsUnrealError(true)
      console.error(e)
    }
    handleIsLoading && handleIsLoading(false)
  }, [])

  const handleChangeBody = useCallback(async (beforeType: number) => {
    const nextBodyType = beforeType === 11 ? 1 : beforeType + 1
    try {
      handleIsLoading && handleIsLoading(true)
      Module.OVDR_ApplyCustomize && (await Module.OVDR_ApplyCustomize(nextBodyType))
      setBodyType(nextBodyType)
    } catch (e) {
      setIsUnrealError(true)
      console.error(e)
    }
    handleIsLoading && handleIsLoading(false)
  }, [])


  useEffect(() => {
    if (!isLoaded) handleLoadJquery()
  }, [isLoaded, handleLoadJquery])

  useEffect(()=>{
    if(!isLoaded) handleLoadScript()
  }, [])

  // unmount 시, 2d template 초기화
  useEffect(() => {
    return () => {
      handleResetAvatar()
    }
  }, [handleResetAvatar])

  // 이미 한 번 그렸을 시(initDone), 이미 만든 DOM(Module.canvas) append + resize
  useEffect(() => {
    if (isLoaded && !isUnrealLoaded && Module?.initDone) {
      handleAddCanvas()
    }
  }, [isLoaded, isUnrealLoaded, handleAddCanvas])

  // (init 시에) selectedTemplate / uploadedFile 있을 경우 셋팅
  // selectedTemplate / uploadedFile 값이 바뀔 경우 재셋팅
  useEffect(() => {
      if (isLoaded && (isUnrealLoaded || isCanvasLoaded) && selectedTemplateMeshName) {
        handleSelectTemplate(selectedTemplateMeshName)
      }
    
  }, [isLoaded, isUnrealLoaded, isCanvasLoaded, selectedTemplateMeshName, handleSelectTemplate])

  useEffect(() => {
    const resetAndApply = async()=>{
      if (
        isLoaded &&
        (isUnrealLoaded || isCanvasLoaded) &&
        selectedTemplateMeshName &&
        uploadedFile
      ) {
        // handleResetAvatar()
        //   .then(()=>handleApplyPng(uploadedFile, selectedTemplateMeshName))
        handleResetAvatar()
          .then(()=>handleSelectTemplate(selectedTemplateMeshName))
          .then(()=>handleApplyPng(uploadedFile, selectedTemplateMeshName))
      }

    }

    resetAndApply();
  }, [
    isLoaded,
    isUnrealLoaded,
    isCanvasLoaded,
    selectedTemplateMeshName,
    uploadedFile,
    handleApplyPng,
  ])

  return (
      <div className={styles.avatarPreview}>
        {isUnrealError ? (
            <></>
          // <div className={styles.errorBox}>
          //   {`Oops! An unknown error has occurred.\nPlease reload the page.`}
          //   {/* <Button
          //     style={styles.refereshButton}
          //     onClick={() => {
          //       window.location.reload()
          //     }}
          //   >
          //     Reload
          //   </Button> */}
          // </div>
        ) : (
          !isUnrealLoaded &&
          !isCanvasLoaded && (
            <p>Loading...</p>
            // <Image
            //   className={styles.loadingSpin}
            //   src='/images/common/loading.gif'
            //   width={100}
            //   height={100}
            //   alt='loading'
            // />
          )
        )}
        <div
          ref={mainAreaRef}
          className='wrapper'
          id='mainarea'
          style={{ position: 'relative', minWidth: small ? 258 : 240, height: 320}}
        >
          <canvas id='canvas' className='emscripten' style={{ display: 'none', height: 350, minWidth: 245}}/> 
        </div>
        <div className={styles.buttonBox} id='buttonarea'>
          <button className={styles.bodyChange} onClick={() => handleChangeBody(bodyType)}>
            {`Body type ${bodyType}`}
          </button>
        </div>
      </div>
  )
}
export default AvatarPreview
