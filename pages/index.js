import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useAuth } from '../lib/auth';

export default function Home() {
  const auth = useAuth();
  return (
    <div className={styles.container}>
      <button onClick={(e) => auth.signinWithGithub()}>Sign In</button>
      <div>{auth?.user}</div>
    </div>
  );
}
