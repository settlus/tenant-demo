type LayoutProp = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProp): React.ReactElement {
  return <div className='m-auto flex flex-col gap-[2vh]'>{children}</div>
}
