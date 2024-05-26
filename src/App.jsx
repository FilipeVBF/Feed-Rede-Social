import { Post } from "./Post";
import { Header } from "./components/Header";
import './styles.css'

export function App() {
  return (
    <>
      <Header />
      <Post 
        author='Diego Fernandes' 
        content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vero iure blanditiis necessitatibus, nemo cum maiores, ea similique nam at magnam! Quidem vel amet, deserunt placeat sequi molestiae vitae cum.'
      />
      <Post 
        author='Gabriel Buzzi' 
        content='Um novo post muito legal.'
      />
    </>
  )
}
