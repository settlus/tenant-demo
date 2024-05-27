import styles from './Live.module.scss';
import Thumbnail from '../Thumbnail/Thumbnail';
import { useContext } from 'react';
import { ShopContext } from '../../../../../store/costumeshop_context';

const LIST = [
  {user: 1, thumbnail: 4,},
  {user: 2, thumbnail: 1,},
  {user: 3, thumbnail: 1,},
  {user: 2, thumbnail: 6,},
  {user: 3, thumbnail: 8,},
  {user: 1, thumbnail: 0,},
  {user: 1, thumbnail: 11,},
  {user: 4, thumbnail: 5,},
  {user: 1, thumbnail: 7,},
  {user: 1, thumbnail: 6,},
  {user: 4, thumbnail: 9,},
]

export default function Live(){
  const {items} = useContext(ShopContext);

  return <div className={styles.main}>
    <h3>Live</h3>
    <ul>
      {LIST.map((item,index)=><li key={index}>
        <p>User {item.user} bought</p>
        <Thumbnail style={styles.thumbnail} thumbnail={items[item.thumbnail].thumbnailPng}/>
      </li>)}
    </ul>
</div>
}