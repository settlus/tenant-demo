import AvatarPreview from "../../../../shared/AvatarPreview/AvatarPreview"
import Live from "./Live/Live"
import CostumeList from "./CostumeList/CostumeList"
import styles from './CostumeShop.module.scss'
import Detail from "./Detail/Detail"

import { useContext } from "react"
import { ShopContext } from "../../../../store/costumeshop_context"

export default function CostumeShop(){
  const {selected, items} = useContext(ShopContext);

  return <div className={styles.main}>
    <h3>Avatar Costume Shop</h3>
    <div className={styles.contents}>
      <Live />
      <AvatarPreview uploadedFile={items[selected].templatePng} selectedTemplateMeshName={items[selected].meshName}/>
      <CostumeList />
      <Detail />
  </div>
  </div>
}