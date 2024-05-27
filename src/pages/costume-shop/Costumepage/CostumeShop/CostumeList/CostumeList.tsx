import Thumbnail from "../Thumbnail/Thumbnail"
import styles from './CostumeList.module.scss'

export default function CostumeList(){
  return <div className={styles.main}>
  <h3>Costume lists</h3>
  <ul>
    <li><Thumbnail /></li>
    <li><Thumbnail /></li>
    <li><Thumbnail /></li>
    <li><Thumbnail /></li>
    <li><Thumbnail /></li>
    <li><Thumbnail /></li>
    <li><Thumbnail /></li>
    <li><Thumbnail /></li>
    <li><Thumbnail /></li>
    <li><Thumbnail /></li>
    <li><Thumbnail /></li>
    <li><Thumbnail /></li>
  </ul>
</div>
}