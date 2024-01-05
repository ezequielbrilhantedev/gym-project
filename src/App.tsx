import styles from './App.module.css';
import ImageWomanLogin from './assets/images/woman-login.svg';

function App() {
  return (
    <>
      <div className={styles.wrapper}>
        <main>
          <div>
            <img
              className={styles.imageWomanLogin}
              src={ImageWomanLogin}
              alt=""
            />
          </div>

          <section className={styles.sectionForm}>
            <form>
              <input type="email" name="" id="" />
              <input type="password" name="" id="" />
            </form>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
