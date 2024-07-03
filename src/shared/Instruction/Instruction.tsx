import styles from './Instruction.module.scss';
import {ReactTyped} from 'react-typed';

type PropType = {
  title: string,
  typeWriter: string,
  onComplete?: ()=>void,
  style?: string,
}

export default function Instruction({title, style, typeWriter, onComplete}: PropType): React.ReactElement{
    return <div className={`${styles.instruction} ${style}`}>
      <h2>{title}</h2>
      <ReactTyped
        strings={[typeWriter]}
        typeSpeed={0.000000001}
        onComplete={onComplete || function (){}}
      />
    </div>
}