import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post({ author, publishedAt, content}) {
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  return (
    <article className={styles.post}>
      <header>

        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />         
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>

      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p>{line.content}</p>
          } else if (line.type === 'link') {
            return <p>{line.emoji}<a href="">{line.content}</a></p>
          }
        })}
        
        <p>
          <a href=''>#novoprojeto </a>
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

      <div className={styles.commentList}>
        <Comment 
          src='https://tse2.mm.bing.net/th/id/OIG4.yGTLXsHgaKW37ynPSnZM?pid=ImgGn'
          content='Muito bom Devon, parabéns!! 👏👏'
          applaud='20'
        />
        <Comment 
          src='https://tse1.mm.bing.net/th/id/OIG1.SkN4YzDnyHhTtAo6XOmb?pid=ImgGn'
          content='Maravilhoso Devon, parabéns!! 👏👏'
          applaud='50'
        />
        <Comment 
           src='https://tse1.mm.bing.net/th/id/OIG2.a3N4sbGFfFJQ1Ga0inSk?pid=ImgGn'
           content='Ficou excelente Devon, parabéns!! 👏👏'
           applaud='10'
        />
        <Comment 
           src='https://tse2.mm.bing.net/th/id/OIG4.bLwzM0SDUxXuOMJGWsqO?pid=ImgGn'
           content='Ficou show Devon, parabéns!! 👏👏'
           applaud='20'
        />
      </div>
    </article>
  )
}