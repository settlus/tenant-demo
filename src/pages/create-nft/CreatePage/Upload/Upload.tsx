import AvatarPreview from '../../../../shared/AvatarPreview/AvatarPreview'
import Canvas from './Canvas/Canvas'

type PropType = {
  file: string
  handleFile: (file: string) => void
  sample: number
  handleSample: (value?: number) => void
  useSample: boolean
  handleUseSample: (value: boolean) => void
}

export default function Upload({ file, handleFile }: PropType): React.ReactElement {
  return (
    <div className='flex flex-row gap-[10px]'>
      <AvatarPreview uploadedFile={file} selectedTemplateMeshName='DefaultWear001F' />
      <Canvas handleFile={handleFile} />
    </div>
  )
}
