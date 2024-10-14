type LayoutProp = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProp): React.ReactElement {
  return <div className='flex flex-col m-auto gap-[2vh]'>{children}</div>
}
