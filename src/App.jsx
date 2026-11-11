function App() {
  return (
    <>
      <header>
        <div className="container">
          <h1>Felipe Rafael Niendicker</h1>
          <p>Estudante de Sistemas de Informação - UMC</p>
        </div>
      </header>

      <nav>
        <div className="container">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#tecnologias">Tecnologias</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </div>
      </nav>

      <main className="container">
        <section id="inicio">
          <h2>Olá, eu sou Felipe Rafael Niendicker</h2>
          <p>
            Sou estudante de Sistemas de Informação na UMC e trabalho com
            desenvolvimento de sites e sistemas. Tenho interesse em programação
            web, Java e banco de dados.
          </p>
        </section>

        <section id="sobre">
          <h2>Sobre mim</h2>
          <p>
            Estou cursando Sistemas de Informação na Universidade de Mogi das
            Cruzes (UMC). Durante o curso, aprendi sobre programação, bancos
            de dados, desenvolvimento web, segurança e integração de sistemas.
            Também desenvolvo projetos para praticar esses conhecimentos.
          </p>
        </section>

        <section id="tecnologias">
          <h2>Tecnologias</h2>
          <p><strong>Linguagens:</strong> Java, JavaScript, Python, HTML, CSS e SQL.</p>
          <p><strong>Frameworks:</strong> React, Vite e Spring Boot.</p>
          <p><strong>Bancos de dados:</strong> MySQL e MongoDB.</p>
          <p><strong>Ferramentas:</strong> Git, GitHub, VS Code e IntelliJ IDEA.</p>
        </section>

        <section id="projetos">
          <h2>Projetos</h2>
          <div className="projeto">
            <h3>GAEA - Gestão de Estágios Acadêmicos</h3>
            <p>Projeto acadêmico para acompanhar processos de estágio, desenvolvido com React, Spring Boot e MySQL.</p>
            <a className="botao" href="https://github.com/felipeniendicker/GAEA-PFC" target="_blank" rel="noreferrer">Ver no GitHub</a>
          </div>
          <div className="projeto">
            <h3>Saraiva Motos</h3>
            <p>Sistema de gestão para oficina e loja de peças, com controle de produtos, vendas e clientes.</p>
          </div>
          <div className="projeto">
            <h3>FRN Finance</h3>
            <p>Aplicação para organizar finanças pessoais, contas, despesas, dívidas e metas.</p>
            <a className="botao" href="https://github.com/felipeniendicker/frn-finance" target="_blank" rel="noreferrer">Ver no GitHub</a>
          </div>
          <div className="projeto">
            <h3>Sistema de Controle de Produtos</h3>
            <p>Projeto desenvolvido para praticar cadastro, consulta, alteração e exclusão de produtos.</p>
            <a className="botao" href="https://github.com/felipeniendicker/Sistema-Controle-Produtos-python" target="_blank" rel="noreferrer">Ver no GitHub</a>
          </div>
        </section>

        <section id="contato" className="contato">
          <h2>Contato</h2>
          <p>GitHub: <a href="https://github.com/felipeniendicker" target="_blank" rel="noreferrer">github.com/felipeniendicker</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/felipe-rafael-niendicker-9847902a7/" target="_blank" rel="noreferrer">Meu perfil no LinkedIn</a></p>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>Desenvolvido por Felipe Rafael Niendicker - 2026</p>
        </div>
      </footer>
    </>
  )
}

export default App
