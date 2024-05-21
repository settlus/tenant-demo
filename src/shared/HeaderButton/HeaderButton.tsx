import styles from './HeaderButton.module.scss';

type PropType = {
  icon: string,
  name: string,
  handleClick?: ()=>void,
}

export default function HeaderButton({icon, name, handleClick}: PropType): React.ReactElement{
  return <button className={styles.main} onClick={handleClick ? handleClick: ()=>{}}>
  <img src={icon} />
  <p>{name}</p>
</button>
}