import { FaGithub, FaLinkedin } from 'react-icons/fa'
import React from 'react';

const certificados = [
  {
    nome: "Formação Android Developer",
    instituicao: "Digital Innovation One",
    horas: "67h",
    imagem: "/certificados/thumb-android-img.jpg", // Miniatura do certificado
    link: "/certificados/android.pdf" // Link para o PDF original
  },
  {
    nome: "Domine a IA com Prompting Responsável",
    instituicao: "Santander Open Academy",
    horas: "8h",
    imagem: "/certificados/thumb-prompting.jpg",
    link: "/certificados/prompting.pdf"
  },
  {
    nome: "Fundamentos de Inteligência Artificial",
    instituicao: "Digital Innovation One",
    horas: "10h",
    imagem: "/certificados/thumb-ia-dio.jpg",
    link: "/certificados/formacao-ia-dio.pdf"
  },
  
];

const meusProjetos = [
  {
    titulo: "Análise Financeira",
    subtitulo: "Projeto de controle de finanças pessoais",
    descricao: "Sistema de análise financeira pessoal desenvolvido em Python, que permite visualizar gastos e movimentações a partir de planilhas do Excel. O projeto gera gráficos mensais, comparações entre períodos e simulações de gastos, utilizando Pandas para análise de dados, Matplotlib para visualização gráfica e CustomTkinter para uma interface gráfica simples e funcional.",
    tecnologias: ["Python", "Pandas", "Matplotlib", "Custom TKinter"],
    linkGithub: "https://github.com/JoseVitor0/ProjetoAnaliseFinanceira.git",
    tipo: "Pessoal",
    destaque: true
  },
  {
    titulo: "Organizador de arquivos",
    subtitulo: "Sistema automático de organização de arquivos em Python",
    descricao: "Este sistema funciona de forma simples, sua funcionalidade é organização de arquivos em pastas, oferecendo diferentes formas de organização (tamanho, natureza, nome e tipo de arquivos).",
    tecnologias: ["Python"],
    linkGithub: "https://github.com/JoseVitor0/Organizador-de-Arquivos-Python.git",
    tipo: "Business"
  },
  {
    titulo: "Sistema de Gestão de Veículos e Motores",
    subtitulo: "Aplicativo Android para cadastro e gerenciamento de veículos",
    descricao: "Aplicativo Android desenvolvido como trabalho final da disciplina de Desenvolvimento Android. O sistema permite realizar login de usuários, cadastrar motores, cadastrar veículos vinculados a esses motores, editar e finalizar a produção dos carros, além de visualizar os veículos já concluídos. Todo o fluxo foi pensado para ser simples, organizado e fácil de entender.",
    tecnologias: ["Android Studio", "Java", "Kotlin", "Banco de Dados Relacional"],
    linkGithub: "https://github.com/JoseVitor0/Projeto-Final-Android",
    tipo: "Acadêmico",
    destaque: true
  },
  {
    titulo: "Análise de Acidentes de Trânsito no Brasil",
    subtitulo: "Análise exploratória de dados de acidentes (2018–2022)",
    descricao: "Projeto de análise exploratória de dados utilizando informações oficiais da Polícia Rodoviária Federal (PRF), obtidas via Kaggle, referentes aos anos de 2018 a 2022. O objetivo é identificar padrões e comportamentos relacionados aos acidentes de trânsito, analisando fatores como período do dia, consumo de álcool, estados com maior número de ocorrências e condições climáticas associadas a acidentes fatais.",
    tecnologias: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    linkGithub: "https://github.com/JoseVitor0/Analise-Dados-PRF.git",
    tipo: "Acadêmico"
  },
  {
    titulo: "Predição de Consumo de Combustível",
    subtitulo: "Aplicação web com Machine Learning para previsão de MPG",
    descricao: "Aplicação web desenvolvida em Flask que utiliza algoritmos de Machine Learning para prever o consumo de combustível (MPG) de veículos com base no peso do carro, utilizando o dataset clássico Auto MPG. O sistema permite que o usuário escolha entre diferentes modelos de regressão, treine os modelos automaticamente e visualize métricas de desempenho e gráficos comparando valores reais e preditos.",
    tecnologias: ["Python", "Flask", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    linkGithub: "https://github.com/JoseVitor0/Projeto-machine-learning-flask.git",
    tipo: "Educacional"
  },
  {
    titulo: "Interpretador de Assembly MIPS",
    subtitulo: "Simulador educacional de instruções MIPS em linguagem C",
    descricao: "Projeto desenvolvido para a disciplina de Arquiteturas de Sistemas Computacionais com o objetivo de simular a execução de um subconjunto de instruções da arquitetura MIPS. O interpretador permite ao usuário inserir comandos via terminal e acompanhar a modificação dos registradores, o controle de fluxo com instruções de branch e jump, e a atualização do Program Counter (PC), auxiliando na compreensão do funcionamento interno de uma arquitetura baseada em registradores.",
    tecnologias: ["C", "GCC", "Terminal"],
    linkGithub: "https://github.com/JoseVitor0/Trabalho-Arquiteturas-Sistemas-Computacionais.git",
    tipo: "Acadêmico"
  },
  {
    titulo: "Algoritmos de Visão Computacional",
    subtitulo: "Estudo didático de detecção de bordas e pontos-chave",
    descricao: "Projeto educacional desenvolvido em sala de aula com foco no aprendizado dos conceitos fundamentais de Visão Computacional. A implementação utiliza códigos simples e didáticos para compreender o funcionamento básico de algoritmos de detecção de bordas e pontos-chave, permitindo visualizar os resultados gerados nas imagens e comparar o comportamento de cada método, sem foco em otimização ou aplicações avançadas.",
    tecnologias: ["Python", "OpenCV", "NumPy"],
    linkGithub: "https://github.com/JoseVitor0/deteccao-cantos.git",
    tipo: "Acadêmico"
  },
  {
    titulo: "Controle de Estoque Android",
    subtitulo: "Aplicativo Android em Kotlin com Jetpack Compose",
    descricao: "Aplicativo Android desenvolvido em Kotlin com Jetpack Compose como parte de uma avaliação da disciplina de Desenvolvimento Android. O app simula um controle simples de estoque, permitindo o cadastro de produtos, visualização dos itens cadastrados, acesso aos detalhes individuais e exibição de estatísticas gerais do estoque, utilizando navegação entre telas com Navigation Compose.",
    tecnologias: ["Kotlin", "Jetpack Compose", "Navigation Compose", "Material 3", "Gson"],
    linkGithub: "https://github.com/JoseVitor0/ProvaAndroid20-09.git",
    tipo: "Acadêmico",
    destaque: true
  },
  {
    titulo: "Tumblr Clone - Messi Edition",
    subtitulo: "Rede social simplificada desenvolvida em Flask",
    descricao: "Projeto de rede social simplificada desenvolvido em Flask com o objetivo de praticar conceitos fundamentais de back-end, autenticação de usuários e manipulação de banco de dados. A aplicação conta com sistema de login e registro, feed de postagens, perfil de usuário, upload de imagens e gerenciamento de posts. O projeto foi desenvolvido de forma descontraída durante os estudos iniciais de desenvolvimento web, com uma interface simples e temática inspirada no jogador Lionel Messi.",
    tecnologias: ["Python", "Flask", "SQLite", "SQLAlchemy", "WTForms", "Bcrypt"],
    linkGithub: "https://github.com/JoseVitor0/Trabalho-rede-social-python.git",
    tipo: "Pessoal"
  },
];

export default function App() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-purple-800/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="bg-[#0f0f0f] text-gray-200 min-h-screen font-sans">
        <header className="sticky top-0 z-50 flex justify-between items-center p-6 border-b border-gray-700 bg-[#0f0f0f]/80 backdrop-blur-md">
          <h1 className="text-xl font-bold">José Vitor | Desenvolvedor Junior</h1>
          <nav className="space-x-6 hidden md:block">
            <a href="#sobre" className="hover:text-purple-400 transition-colors">Sobre</a>
            <a href="#projetos" className="hover:text-purple-400 transition-colors">Projetos</a>
            <a href="#contato" className="hover:text-purple-400 transition-colors">Contato</a>
            <a
              href="/cv-jose-vitor.pdf"
              download
              className="ml-4 bg-purple-600 px-4 py-2 rounded hover:bg-purple-700 transition-all shadow-lg shadow-purple-500/20"
            >
              Download CV
            </a>
          </nav>
        </header>

        <section className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start text-center md:text-left py-24 px-6 gap-10 max-w-6xl mx-auto">

          <div className="flex-1 flex justify-center md:justify-start">
            <img
              src="/profpicture.jpg"
              alt="Foto de perfil de José Vitor"
              className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full border-4 border-purple-600 shadow-[0_0_30px_rgba(147,51,234,0.3)]"
            />
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Transformando ideias em <span className="text-purple-500">software</span>
            </h2>
            <p className="text-lg text-gray-400 mb-6">
              Desenvolvedor focado em soluções criativas e funcionais.
            </p>

            <a
              href="#projetos"
              className="self-start flex-none w-auto bg-purple-600 px-4 py-2 rounded hover:bg-purple-700 text-base"
            >
              Ver Projetos
            </a>
          </div>


        </section>

        {/* Sobre mim & Skills */}
        <section id="sobre" className="px-6 py-16 max-w-6xl mx-auto border-t border-gray-800">
          <div className="flex flex-col md:flex-row gap-12">

            <div className="flex-1">
              <h3 className="text-3xl font-bold mb-8 text-purple-400">Sobre mim</h3>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  Me chamo <span className="text-white font-semibold">José Vitor Gonçalves</span>, tenho 21 anos e sou natural de Curitiba - PR.
                  Sou formado em <span className="text-purple-300 font-medium">Ciência da Computação</span> pela Universidade Positivo (UP).
                </p>
                <p>
                  Sou uma pessoa analítica e observadora. Costumo prestar atenção nos detalhes, entender como as coisas funcionam e pensar antes de agir.
                  Isso me ajuda a encontrar soluções mais eficientes, melhorar processos e evoluir constantemente, tanto no lado pessoal quanto profissional.
                </p>
                <p>
                  Minha aptidão com tecnologia começou cedo, resolvendo bugs no Windows e aprendendo sobre hardwares por conta própria.
                  Isso me despertou o interesse para ingressar no curso de Ciência da computação, buscando entender como isso pode ser usado profissionalmente.
                  Durante a graduação, adquiri e aprofundei meus conhecimentos em áreas fundamentais como compiladores, algoritmos, desenvolvimento de softwares e aplicativos e IA.
                </p>
                <p>
                  Atualmente, atuo como <span className="text-purple-300 font-medium">Auxiliar de Suporte TI</span> na JBM Usinagem, onde aplico meus conhecimentos em infraestrutura e redes.
                  Meu foco atualmente é direcionar meu desenvolvimento profissional para áreas como desenvolvimento de software, análise de sistemas e engenharia de dados, buscando oportunidades de nível júnior que me permitam aplicar,
                   aprofundar e expandir meus conhecimentos em programação, dados e soluções tecnológicas na prática.
                </p>
              </div>
            </div>

            <div className="flex-1 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-xl">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Habilidades Técnicas
              </h4>

              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Linguagens & Frameworks</p>
                  <div className="flex flex-wrap gap-2">
                    {["Java", "Python", "HTML", "CSS", "JavaScript", "React", "Node.js", "SQL", "Kotlin", "C", "Flask", "Android Studio"].map(skill => (
                      <span key={skill} className="px-3 py-1.5 bg-[#252525] text-purple-300 text-sm rounded-lg border border-gray-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Fundamentos CS</p>
                  <div className="flex flex-wrap gap-2">
                    {["Compiladores", "Algoritmos", "Estrutura de Dados", "Redes", "IA"].map(skill => (
                      <span key={skill} className="px-3 py-1.5 bg-purple-900/20 text-purple-400 text-sm rounded-lg border border-purple-900/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Infraestrutura</p>
                  <div className="flex flex-wrap gap-2">
                    {["Hardware", "Suporte Técnico", "Manutenção", "Sistemas Operacionais"].map(skill => (
                      <span key={skill} className="px-3 py-1.5 bg-gray-800 text-gray-300 text-sm rounded-lg border border-gray-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="mb-6">
            <h4 className="text-xl font-semibold text-purple-300 mb-2">Trajetória Profissional</h4>
            <ul className="list-disc list-inside text-gray-400 space-y-4">
              <li>
                <span className="font-bold text-gray-200">Jovem Aprendiz | Curso Positivo</span>
                <p className="ml-4 text-gray-400 text-sm">
                  Período: 03/07/23 - 16/12/2024 <br />
                  Atendimento a pais e alunos; Entrega de materiais; Digitalização de documentos; Organização e controle de materiais
                </p>
              </li>
              <li>
                <span className="font-bold text-gray-200">Auxiliar de suporte TI | JBM Usinagem</span>
                <p className="ml-4 text-gray-400 text-sm">
                  Período: 24/02/2025 - atual <br />
                  Suporte técnico em hardware, software e redes, solucionando problemas e garantindo a manutenção de equipamentos.
                  Atendimento a usuários, abertura de chamados e realocação de computadores.
                  Atuação conforme políticas de qualidade, meio ambiente e segurança, com foco na prevenção de riscos operacionais.
                </p>
              </li>
            </ul>
          </div>
        </section>


        <section id="certificados" className="px-6 py-16 max-w-6xl mx-auto">
          <h4 className="text-2xl font-bold text-purple-400 mb-8">Cursos e Certificados</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificados.map((cert, index) => (
              <div key={index} className="bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500 transition-all group shadow-2xl">

                <div className="h-64 bg-gray-800 overflow-hidden border-b border-gray-800">
                  <img
                    src={cert.imagem}
                    alt={cert.nome}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <h5 className="text-xl font-bold text-white mb-2">{cert.nome}</h5>
                  <p className="text-gray-400 font-medium">{cert.instituicao}</p>
                  <p className="text-sm text-purple-400 mb-6">{cert.horas} de carga horária</p>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition-colors"
                  >
                    Visualizar Documento
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>


        <section id="projetos" className="px-6 py-20 bg-[#141414]">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <h3 className="text-3xl font-bold text-purple-400 mb-1">
                  Projetos em Destaque
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  (⭐ Projetos principais)
                </p>
                <p className="text-gray-400">
                  Uma seleção dos meus principais trabalhos acadêmicos e técnicos.
                </p>
              </div>
              <a
                href="https://github.com/JoseVitor0"
                target="_blank"
                className="text-purple-400 hover:text-purple-300 font-medium flex items-center gap-2 border-b border-purple-400/30 pb-1"
              >
                Ver todos no GitHub <FaGithub />
              </a>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {meusProjetos.map((proj, i) => (
                <div
                  key={i}
                  className={`
                    rounded-2xl p-8 flex flex-col shadow-lg transition-all group
                    ${proj.destaque
                      ? "bg-[#1e1e1e] border-2 border-purple-500 shadow-purple-500/20"
                      : "bg-[#1e1e1e] border border-gray-800 hover:border-purple-500/50"
                    }
                  `}
                >
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-purple-500 bg-purple-500/10 px-3 py-1 rounded-full">
                      {proj.tipo}
                    </span>

                    {proj.destaque && (
                      <span className="text-purple-400 text-lg" title="Projeto principal">
                        ⭐
                      </span>
                    )}
                  </div>

                  <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                    {proj.titulo}
                  </h4>
                  <p className="text-sm text-purple-300/70 mb-4 font-medium">{proj.subtitulo}</p>

                  <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                    {proj.descricao}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {proj.tecnologias.map(tech => (
                      <span key={tech} className="text-[10px] font-bold bg-[#2a2a2a] text-gray-300 px-2 py-1 rounded uppercase">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={proj.linkGithub}
                    target="_blank"
                    className="flex items-center justify-center gap-2 w-full bg-[#2a2a2a] hover:bg-purple-600 text-white font-bold py-3 rounded-xl transition-all"
                  >
                    <FaGithub /> Acessar Projeto
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="px-6 py-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-purple-400">Contato</h3>
          <p className="mb-4 text-gray-300">Você pode me encontrar nas redes abaixo:</p>
          <div className="flex space-x-6 text-2xl">
            <a href="https://github.com/JoseVitor0" target="_blank" className="hover:text-purple-400">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/jose-vitor-goncalves0202/" target="_blank" className="hover:text-purple-400">
              <FaLinkedin />
            </a>
            <p>
              Entre em contato comigo pelo e-mail:
              <a href="mailto:vitor.jose1906@gmail.com">vitor.jose1906@gmail.com</a>
            </p>
          </div>
        </section>

        <footer className="text-center py-6 border-t border-gray-700 text-gray-500">
          © {new Date().getFullYear()} José Vitor. Todos os direitos reservados.
        </footer>
      </div >
    </>
  )

}
