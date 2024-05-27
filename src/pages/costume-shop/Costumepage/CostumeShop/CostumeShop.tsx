import AvatarPreview from "../../../../shared/AvatarPreview/AvatarPreview"
import Live from "./Live/Live"
import CostumeList from "./CostumeList/CostumeList"
import styles from './CostumeShop.module.scss'
import Detail from "./Detail/Detail"

export default function CostumeShop(){
  return <div className={styles.main}>
    <h3>Avatar Costume Shop</h3>
    <div className={styles.contents}>
      <Live />
      <AvatarPreview uploadedFile=''/>
      <CostumeList />
      <Detail />

  </div>
  </div>
}