import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author='Diego Fernandes' 
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vero iure blanditiis necessitatibus, nemo cum maiores, ea similique nam at magnam! Quidem vel amet, deserunt placeat sequi molestiae vitae cum.'
          />
          <Post 
            author='Gabriel Buzzi' 
            content='Um novo post muito legal.'
          />
        </main>
      </div>
    </>
  )
}
