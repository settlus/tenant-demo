import CostumePage from "./CostumePage"
import { useEffect, useContext } from "react"
import { getItem } from "../../../apis/api"
import { ShopContext } from "../../../store/costumeshop_context"
import userProfile from '../../../public/svg/userProfile/userProfile.svg';

export default function NewItemPage(){
  const {setStep, setItems} = useContext(ShopContext);

  useEffect(()=>{
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

      setStep(3);
    }
    
    handleData();
 
  },[])


  return <CostumePage isAfterItemCreated={true}/>
}