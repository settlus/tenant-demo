import styles from './QnaBanner.module.scss';

export default function QnaBanner(){
  return <div className={styles.qna}>
    <ul>
      <li>
        <h3>🙋🏼‍️ What is the relationship between NFT and Item?</h3>
        <p> &nbsp;→ 💁🏼‍♀ ️ Item is the copy of a digital asset. Simply, it’s the printmaking in arts. 
        You can think of NFT as a proof of a digital asset’s ownership. In NFT marketplace, you generate the revenue by selling the ownership of your digital creation. 
        To generate more revenue from NFT, sell the digital copy of your assets on off-chain Avatar Costume Shop. 
        You can earn profits from selling items until you sell your NFT on NFT marketplace.</p>
      </li>
      <li>
        <h3>🙋🏼‍️ Is item price different from NFT price?</h3>
        <p> &nbsp;→ 💁🏼‍♀ ️ Yes! Item price is the price for the costume selling on the Avatar Costume Shop.
        NFT price is the price for the original digital asset selling on the NFT Marketplace. 
        </p>
      </li>
    </ul>

  </div>
}