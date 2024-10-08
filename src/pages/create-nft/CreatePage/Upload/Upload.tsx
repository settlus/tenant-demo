import AvatarPreview from '../../../../shared/AvatarPreview/AvatarPreview';
import Canvas from './Canvas/Canvas';

type PropType={
  file: string,
  handleFile: (file: string)=>void,
  sample: number,
  handleSample: (value?:number)=>void,
  useSample: boolean,
  handleUseSample: (value:boolean)=>void,
}

export default function Upload({file, handleFile}: PropType):React.ReactElement{  

  return <div className="w-[60rem] h-[23rem] max-w-[50rem] max-h-[23rem] grid grid-cols-[18rem_20rem] grid-rows-[55%_30%_10%] p-[0_4vw] gap-y-[0.5rem] gap-x-[1rem] justify-center items-center">
    <div className="col-start-1 col-end-2 row-start-1 row-end-4 border-[1rem] rounded-[1rem]">
      <AvatarPreview uploadedFile={file} selectedTemplateMeshName='DefaultWear001F'/>
    </div>
    <div className="col-start-2 col-end-2 row-start-1 row-end-4">
      <Canvas handleFile={handleFile}/>
    </div>
  </div>
}