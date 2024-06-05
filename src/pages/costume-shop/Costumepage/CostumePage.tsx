import { useContext, useEffect, useState } from "react"
import Instruction from "../../../shared/Instruction/Instruction"
import CostumeShop from "./CostumeShop/CostumeShop"
import { ShopContext, ITEM_ARR } from "../../../store/costumeshop_context"
import nftIcon from '../../../public/images/NftLicense.png'
import styles from './CostumePage.module.scss'
import Navigation from "../../../shared/Navigation/Navigation"
import { useNavigate, useLocation } from 'react-router-dom';
import { getItem } from "../../../apis/api";
import userProfile from '../../../public/svg/userProfile/userProfile.svg';
import { formatNum } from "../../../utils/util"

const TITLES = [
  'Welcome to the Avatar Costume Shop!',
  'What’s so special? These costumes are NFT licensed!',
  'Take a peak at the creator’s revenue!',
]

export default function CostumePage(){
  const {step, setStep, items, setItems, selected, setSelected} = useContext(ShopContext);
  const [isAfterItemCreated, setIsAfterItemCreated] = useState(false);
  const selectedItem = items[selected];
  const navigate = useNavigate();
  const location = useLocation();

  const handleNav = ()=>{
    if(step===2){
      sessionStorage.setItem('mission','1');
      navigate('/demo/create-nft'); 
    }
    else setStep(prev=>prev+1);
  }

  useEffect(()=>{
    const path = location.pathname.split('/')
    if(path[path.length-1]==='new-item'){
      const handleData = async ()=>{
        const sessionData = await getItem();
        console.log(sessionData);
        setItems(prev=>{
          return [{
            thumbnailPng: sessionData.thumbnail,
            meshName: 'DefaultWear001F',
            templatePng: sessionData.template,
            title: sessionData.name, 
            price: sessionData.price, 
            creator: sessionData.nickname, 
            creatorProfilePng: userProfile, 
            quantity: 0,
            offerValue: 0,
            userCreated: true,
          }, ...prev];
        });
        setIsAfterItemCreated(true);
      }
      
      handleData();
    }

    return ()=>{
      setSelected(0);
      setItems(ITEM_ARR);

    }

  },[]);
  

  return <div>
    <div className={styles.instruction}>
      <Instruction title={!isAfterItemCreated ? TITLES[step]: 'Congratulations! Your item is listed for sale.'} style={styles.detail}>
        { !isAfterItemCreated ? <>
          {step===0 && <p>People who want to decorate avatars in the metaverse buy avatar costumes created by our creators. You can see the online users’ real-time shopping activities on the “Live” section.</p>}
          {step===1 && <div className={styles.text}>
              <p><img src={nftIcon} alt='license' /> mark shows that the costumes are minted as NFTs. The NFT guarantees the ownership of a creator's costumes, and copies of costumes can be sold as items without quantity limit on the off-chain Avatar Costume Shop. Click your favorite costume to see the detail!</p>      
            </div>}
          {step===2 && <p>This costume’s creator earned {formatNum(selectedItem.price*selectedItem.quantity)} for item sales and now consider selling NFT for {formatNum(selectedItem.offerValue)} on the NFT Marketplace. Once the NFT is sold, the new owner will earn profits from the item sales. That’s why NFT licensing is attractive.</p>}
          <Navigation handleClick={handleNav}/>
        </>: 
          <p>Now, you are one of the creators in the Avatar Costume Shop. Look at the “Live” section. Users are buying your item.
          Click the “Go to my dashboard” button to manage your sales.</p>
        }
      </Instruction>
    </div>

    <CostumeShop />
  </div>
}