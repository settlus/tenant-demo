import styles from './Live.module.scss';
import Thumbnail from '../Thumbnail/Thumbnail';

const LIST = [
  {user: 1, thumbnail: '',},
  {user: 2, thumbnail: '',},
  {user: 3, thumbnail: '',},
  {user: 2, thumbnail: '',},
  {user: 3, thumbnail: '',},
  {user: 1, thumbnail: '',},
  {user: 1, thumbnail: '',},
  {user: 4, thumbnail: '',},
  {user: 1, thumbnail: '',},
  {user: 1, thumbnail: '',},
  {user: 4, thumbnail: '',},
]

export default function Live(){
  return <div className={styles.main}>
    <h3>Live</h3>
    <ul>
      {LIST.map((item,index)=><li key={index}>
        <p>User {item.user} bought</p>
        <Thumbnail style={styles.thumbnail}/>
      </li>)}
    </ul>
</div>
}