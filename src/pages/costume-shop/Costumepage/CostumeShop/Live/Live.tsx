import styles from './Live.module.scss';
import Thumbnail from '../Thumbnail/Thumbnail';
import LiveIcon from '../../../../../public/images/live.gif';
import { useContext, useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';
import { ShopContext } from '../../../../../store/costumeshop_context';

const LIST = [
  {user: 1, thumbnail: 4,},
  {user: 2, thumbnail: 1,},
  {user: 3, thumbnail: 1,},
  {user: 2, thumbnail: 6,},
  {user: 3, thumbnail: 8,},
  {user: 1, thumbnail: 2,},
  {user: 1, thumbnail: 11,},
  {user: 4, thumbnail: 5,},
  {user: 1, thumbnail: 7,},
  {user: 1, thumbnail: 6,},
  {user: 4, thumbnail: 9,},
]

export default function Live(){
  const {items, setItems, step} = useContext(ShopContext);
  const [liveList, setLiveList] = useState(LIST);
  const location = useLocation();

  const addToList = async(user: number, thumbnail: number)=>{
    const delay = Math.random()*1000+500;
    await new Promise(resolve=>setTimeout(resolve, delay));
    setItems(prevList=>{
      const updated=[...prevList];
      updated[thumbnail].quantity=prevList[thumbnail].quantity+1;

      return updated;
    })
    setLiveList(prevList=> [{user: user, thumbnail: thumbnail},...prevList]);
  }

  useEffect(()=>{
    const addLive = async()=>{
      await addToList(2,2);
      await addToList(3,2);
      await addToList(4,10);
      await addToList(2,8);
    }

    const addUserLive = async()=>{
      await addToList(1,0);
      await addToList(5,0);
      await addToList(4,0);
      await addToList(2,0);
      await addToList(6,0);
      await addToList(9,0);
      await addToList(5,0);
    }

    const path = location.pathname.split('/')
    if(path[path.length-1]==='new-item') addUserLive();
    else addLive();
  },[])

  return <div className={`${styles.main} ${step===0 ? styles.active : ''}`}>
    <div className={styles.title}>
      <img src={LiveIcon} />
      <h3>Live</h3>
    </div>
    <ul>
      {liveList.map((item,index)=><li key={`${item.user}-${item.thumbnail}-${index}`} className={`${index===0 ? styles.first : styles.remaining}`}>
        <p>User {item.user} bought</p>
        <Thumbnail style={styles.thumbnail} thumbnail={items[item.thumbnail].thumbnailPng}/>
      </li>)}
    </ul>
</div>
}