import {useState} from 'react';
import styles from './Dashboard.module.scss';
import Header from './Header/Header';
import Menu from './Menu/Menu';
import Content from './Content/Content';

export default function Dashboard(){
  const [type,setType]=useState<string>('on-chain');

  function handleClick(type: string){
    if(type==='on') setType('on-chain');
    else setType('off-chain');
    
  }
 
  return <div className={styles.board}>
    <Header />
    <Menu handleClick={handleClick}/>

    {type==='on-chain' && <Content />}
    {type==='off-chain' && <Content />}

  </div>
}