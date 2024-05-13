import styles from './UserModal.module.scss';

export default function UserModal(){
  return <div className={styles.modal}>
      <h3>USER MODE</h3>
      <div className={styles.main}>
        <button>{'<'}</button>
        <div className={styles.card}>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Lake_mapourika_NZ.jpeg/1280px-Lake_mapourika_NZ.jpeg'/>
          <button>BUY</button>
        </div>
        <button>{'>'}</button>
      </div>
      <p>On the Avatar Costume Shop, your NFT-licensed item is listed as shown above. 
        Click to buy the item.</p>
  </div>
}