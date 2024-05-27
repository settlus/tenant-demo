import styles from './Thumbnail.module.scss';
import nftIcon from '../../../../../public/images/NftLicense.png';

type propType={
  style?: string, 
}

export default function Thumbnail({style}: propType){
  return <div className={`${styles.main} ${style ? style : ''}`}>
    <img className={styles.nft} src={nftIcon} />
    <img className={styles.item} src={'https://s3-alpha-sig.figma.com/img/ed0d/ca88/c92516e3b73ee2230950075d9001ec79?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=De2Ol4nPaFbaJ8RSh6DL9h1jhL6IAXv1kTY~ZnreIR6MeqCqEMR0WzcupJtCl9iesxpwQuHMyT53AdjiYhUXczPkTCMJw35mcdWDY896NOSNl4XW4pMWrfmfEI4~kyBMtCqkipLUWmMC1pW~BzrXgsm0bJd3RWGd4HHMPiEs~iweFfv6Wx7Tz-uP5cSIX8zBjstSHIjIblutEZQRNm1~gn87eAkX3O7XRfOMTZePiL5KokO8K4NotbSfy0fW0i2HzGb8h~FXNccZxpQzEG5VTlJvBuzBAqL~wIyzPEqr3GjzqnMTQ29-xKDOsown2Uzv7OdQsiliv2r4GJ4pmodjew__'} />
  </div>
}