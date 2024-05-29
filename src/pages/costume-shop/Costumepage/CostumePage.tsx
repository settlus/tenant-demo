import { useContext, useEffect } from "react"
import Instruction from "../../../shared/Instruction/Instruction"
import CostumeShop from "./CostumeShop/CostumeShop"
import { ShopContext } from "../../../store/costumeshop_context"
import nftIcon from '../../../public/images/NftLicense.png'
import styles from './CostumePage.module.scss'
import Navigation from "../../../shared/Navigation/Navigation"
import { useNavigate } from 'react-router-dom';

const TITLES = [
  'Welcome to the Avatar Costume Shop!',
  'What’s so special? These costumes are NFT licensed!',
  'Take a peak at the creator’s revenue!',
]

export default function CostumePage(){
  const {step, setStep, items, selected} = useContext(ShopContext);
  const selectedItem = items[selected];
  const navigate = useNavigate();

  const handleNav = ()=>{
    if(step===2) navigate('/demo/create-nft'); 
    else setStep(prev=>prev+1);
  }
  

  return <div>
    <div className={styles.instruction}>
      <Instruction title={TITLES[step]} style={styles.detail}>
        {step===0 && <p>People who want to decorate avatars in the metaverse buy avatar costumes created by our creators. You can see the online users’ real-time shopping activities on the “Live” section.</p>}
        {step===1 && <div className={styles.text}>
            <p><img src={nftIcon} alt='license' /> mark shows that the costumes are minted as NFTs. The NFT guarantees the ownership of a creator's costumes, and copies of costumes can be sold as items without quantity limit on the off-chain Avatar Costume Shop. Click your favorite costume to see the detail!</p>      
          </div>}
        {step===2 && <p>This costume’s creator earned ${selectedItem.price*selectedItem.quantity} for item sales and now consider selling NFT for ${selectedItem.offerValue} on the NFT Marketplace. Once the NFT is sold, the new owner will earn profits from the item sales. That’s why NFT licensing is attractive.</p> }
      </Instruction>
      <Navigation handleClick={handleNav}/>
    </div>

    <CostumeShop />
  </div>
}