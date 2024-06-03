import styles from './DashboardPage.module.scss';
import Dashboard from '../../../shared/Dashboard/Dashboard';
import Instruction from '../../../shared/Instruction/Instruction';

export default function Main(){
  return <div className={styles.main}>
    <Instruction title='🎉 Congratulations on your first revenue!'>
    As more users buy your item, sales revenue increases and so does the value of your NFT.
    Look! You’ve received an offer from a NFT collector. 
    </Instruction>
    <Dashboard />
  </div>
}