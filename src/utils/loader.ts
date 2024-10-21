import { redirect } from 'react-router-dom'

export const loader = () => {
  if (!sessionStorage.getItem('tokenId')) return redirect('/demo/create-nft')
  else return () => {}
}
