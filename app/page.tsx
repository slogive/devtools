import styles from './home.module.scss';
import Section from './section';

export default function Home(): JSX.Element {
  return (
    <main className={styles.main}>
      <header>
        <nav></nav>
      </header>

      <h1>Validator</h1>

      <Section />

      <footer></footer>
    </main>
  );
}
