import styles from './Home.module.css';

const Home = ({ user }) => {

    const date = new Date();
    const n = date.toDateString();
    const t = date.toLocaleDateString();


  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
      <h1>Today is {t}</h1>
    </main>
  )
}

export default Home