import styles from './Thumbnail.module.scss'
import nftIcon from '../../../../../public/images/NftLicense.png'

type propType = {
  style?: string
  onClick?: () => void
  thumbnail: string
  selected?: boolean
  isNew?: boolean
}

export default function Thumbnail({ style, thumbnail, onClick, selected, isNew }: propType) {
  return (
    <div
      className={`${styles.main} ${style ? style : ''} ${selected ? styles.selected : ''}`}
      onClick={onClick}
    >
      {isNew && <div className={styles.new}>New</div>}
      <img className={styles.nft} src={nftIcon} />
      <img className={styles.item} src={thumbnail} />
    </div>
  )
}
