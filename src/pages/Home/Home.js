import styles from './Home.module.css';
import Navbar from '../../components/Navbar/Navbar';
import Chart from '../../components/Home/Chart';
import Income from '../../components/Home/Income';
import Goal from '../../components/Home/Goal';
import Expense from '../../components/Home/Expense';

const Home = ({ user }) => {

    const date = new Date();
    const n = date.toDateString();
    const t = date.toLocaleDateString();


  return (
    <main className={styles.container}>
      <Navbar/>
      <h1>hello, {user ? user.name : 'friend'}</h1>
      <h1>Today is {t}</h1>
      <Goal />
      <Income />
      <Expense />
      <Chart />
    </main>
  )
}

export default Home