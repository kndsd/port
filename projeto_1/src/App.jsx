import heroImg from './assets/20240827_155126.jpg'
import './App.css'

function App() {
  return (
    <>
      <section id="center">
        <div className="hero">
         <img src={heroImg} className="base" width="170" height="179" alt="Foto de Kaue Natanael" /> 
        </div>
        <div>
          <h1>Kaue Natanael dos Santos Dias</h1> 
          <p>
            Estudante de Desenvolvimento de Sistemas, buscando uma oportunidade de emprego como desenvolvedor júnior.
          </p>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <h2>Minhas Habilidades</h2>
          <p>Tecnologias que estudo e domino:</p>
          <ul>
            <li>HTML5 & CSS3</li>
            <li>JavaScript</li>
            <li>React.js & Vite</li>
            <li>Git & GitHub</li>
          </ul>

          <br />
          <h2>Meus Projetos</h2>
          <p>Alguns dos trabalhos que desenvolvi no curso:</p>
          <ul>
            <li>
              <a href="https://https://github.com/kndsd/programacao_app/tree/1-aula="_blank" rel="noreferrer">
                📁 Projeto  - Sistema de Cadastro
              </a>
            </li>
          </ul>
        </div>

        <div id="social">
          <h2>Contato</h2>
          <p>Vamos nos conectar? Escolha um canal abaixo:</p>
          <ul>
            <li>
              <a href="https://github.com/kndsd" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/kau%C3%AA-natanael-79587a303/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:kauenatanael000@gmail.com">
                E-mail (kauenatanael000@gmail.com)
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
