import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>

        <div className={styles.author}>
          <img src="https://tse4.mm.bing.net/th/id/OIG3.W31wnCL197Wh0uhg5cYY?pid=ImgGn" />
          <div className={styles.authorInfo}>
            <strong>Diego Fernandes</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title='26 de Maio às 13:20' dateTime="2024/05/26 13:20:30">Publicado há 1h</time>

      </header>

      <div className={styles.content}>

        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 <a href=''>jane.design/doctorcare</a></p>
        <p><a href=''>#novoprojeto </a>
        <a href=''>#nlw </a>
        <a href=''>#rocketseat</a>
        </p>

      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder='Deixe um comentário'
        />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
    </article>
  )
}