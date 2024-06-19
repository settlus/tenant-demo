
declare namespace Module {
  let OVDR_FilePath: string
  let initDone: boolean
  let canvas: HTMLCanvasElement

  type OVDR_ThumbnailType = 'main' | 'top' | 'bottom' | 'left' | 'right' | 'front' | 'back'

  type UploadedFileType = {
    file: undefined | File
    url: string
  }

  let OVDR_Thumbnails: {
    [key in OVDR_ThumbnailType]: UploadedFileType
  }

  function UE4_resizeCanvas(): void
  function OVDR_SelectTemplate(templateName: string): Promise<string, Error>
  function OVDR_ApplyPNG(imagePath: string, templateName: string): Promise<string, Error>
  function OVDR_CaptureThumbnail(templateName: string): Promise<string, Error>
  function OVDR_Restore(templateName: string): Promise<string, Error>
  function OVDR_ResetAvatar(): Promise<string, Error>
  function OVDR_ApplyCustomize(customizeType: number): Promise<string, Error>
  function init(): Promise<string, Error>
}