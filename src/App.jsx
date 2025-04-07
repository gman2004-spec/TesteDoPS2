import style from './App.module.css'
import { Menu } from './components/Menu'

function App() {


  return (
    <>
     <Menu option1='sessão 01' option2='sessão 02' option3='sessão 03'/>
     <main>
      <section id='s1'>
        <h2>sessao 1</h2>
      </section>
      <section id='s2'> 
        <h2>sessao 3</h2>
      </section>
      <section id='s3'>
        <h2>sessao 3</h2>
      </section>
     </main>
    </>
  )
}

export default App
