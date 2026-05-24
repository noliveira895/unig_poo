export default function App() {
  return (
    <div className="container">
      <header>
        <h1>Plataforma de Eventos Geek & Cultura Digital</h1>
        <p>
          Projeto acadêmico em Java demonstrando os pilares da
          Programação Orientada a Objetos.
        </p>
      </header>

      <section className="card">
        <h2>Conceitos de POO Aplicados</h2>

        <ul>
          <li><strong>Encapsulamento:</strong> atributos privados com getters e setters.</li>
          <li><strong>Herança:</strong> Participante herda de Usuario.</li>
          <li><strong>Polimorfismo:</strong> sobrescrita do método exibirDados().</li>
          <li><strong>Abstração:</strong> classe abstrata Usuario.</li>
          <li><strong>Interface:</strong> implementação da interface Exibivel.</li>
          <li><strong>Sobrecarga:</strong> métodos de cadastro com diferentes parâmetros.</li>
        </ul>
      </section>

      <section className="card">
        <h2>Estrutura do Projeto</h2>

        <pre>
{`src/
├── Exibivel.java
├── Usuario.java
├── Evento.java
├── Atividade.java
├── Participante.java
└── Main.java`}
        </pre>
      </section>

      <section className="card">
        <h2>Relacionamentos</h2>

        <ul>
          <li>Participante extends Usuario</li>
          <li>Participante implements Exibivel</li>
          <li>Evento possui Atividades</li>
          <li>Participante participa de Atividades</li>
        </ul>
      </section>

      <section className="card">
        <h2>Objetivo do Sistema</h2>

        <p>
          O sistema foi desenvolvido para organizar participantes de eventos geek,
          permitindo o cadastro em atividades como campeonatos de jogos,
          concursos de cosplay e palestras de tecnologia.
        </p>
      </section>
    </div>
  )
}
