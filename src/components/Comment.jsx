import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment (props) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={props.src} />
      
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <time title='26 de Maio às 14:35' dateTime="2024/05/26 14:35:40">Cerca de 1h atrás</time>
            </div>
            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>{props.content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp /> 
            Aplaudir <span>{props.applaud}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}

{/* <img src="https://tse2.mm.bing.net/th/id/OIG4.bLwzM0SDUxXuOMJGWsqO?pid=ImgGn" />
<img src="https://tse1.mm.bing.net/th/id/OIG1.SkN4YzDnyHhTtAo6XOmb?pid=ImgGn" />
<img src="https://tse1.mm.bing.net/th/id/OIG2.a3N4sbGFfFJQ1Ga0inSk?pid=ImgGn" /> */}