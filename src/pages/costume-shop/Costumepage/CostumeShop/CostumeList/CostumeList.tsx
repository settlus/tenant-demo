import { useContext } from "react"
import Thumbnail from "../Thumbnail/Thumbnail"
import styles from './CostumeList.module.scss'
import { ShopContext } from "../../../../../store/costumeshop_context"

export default function CostumeList(){
  const {items, setSelected, selected} = useContext(ShopContext);

  function handleClick(value: number){
    setSelected(value);
  }

  return <div className={styles.main}>
  <h3>Costume lists</h3>
  <ul>
    {items.map((item, index)=><li key={item.title}><Thumbnail thumbnail={item.thumbnailPng} onClick={()=>{handleClick(index)}} selected={selected===index ? true : false}/></li>)}
  </ul>
</div>
}