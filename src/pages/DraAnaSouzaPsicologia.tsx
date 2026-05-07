import React, { useState } from "react";
import "./dra-ana-souza-psicologia.css";

const DraAnaSouzaPsicologia: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="dra-root">
      <nav className="dra-nav">
        <div className="dra-nav-inner">
          <div className="dra-nav-logo">Dra. Ana Souza</div>
          <button
            className="dra-nav-toggle"
            type="button"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            ☰
          </button>
          <div className={`dra-nav-links ${menuOpen ? "is-open" : ""}`}>
            <a href="#servicos" onClick={closeMenu}>
              Serviços
            </a>
            <a href="#processo" onClick={closeMenu}>
              Como funciona
            </a>
            <a href="#depoimentos" onClick={closeMenu}>
              Depoimentos
            </a>
            <button className="dra-nav-cta dra-nav-cta-mobile" type="button">
              Agendar consulta
            </button>
          </div>
          <button className="dra-nav-cta dra-nav-cta-desktop" type="button">
            Agendar consulta
          </button>
        </div>
      </nav>

      <section className="dra-hero">
        <div className="dra-hero-content">
          <span className="dra-hero-tag">Psicóloga Clínica · CRP 00/00000</span>
          <h1>
            Cuidar da sua <em>mente</em> é o maior investimento que existe
          </h1>
          <p className="dra-hero-desc">
            Atendimento psicológico individual presencial e online. Um espaço
            seguro para você se reconectar consigo mesmo e construir a vida que
            merece.
          </p>
          <div className="dra-hero-btns">
            <a href="#servicos" className="dra-btn-primary">
              Quero começar
            </a>
            <a href="#processo" className="dra-btn-ghost">
              Como funciona
            </a>
          </div>
        </div>

        <div className="dra-hero-visual">
          <div className="dra-img-wrap">
            <div className="dra-img-placeholder">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80"
                alt="Psicóloga em consultório"
              />
            </div>
          </div>
          <div className="dra-hero-badge">
            <div className="dra-badge-num">8+</div>
            <div className="dra-badge-text">
              anos de
              <br />
              experiência
            </div>
          </div>
        </div>
      </section>

      <div className="dra-stats">
        <div className="dra-stat">
          <div className="dra-stat-num">600+</div>
          <div className="dra-stat-label">Pacientes atendidos</div>
        </div>
        <div className="dra-stat">
          <div className="dra-stat-num">98%</div>
          <div className="dra-stat-label">Satisfação</div>
        </div>
        <div className="dra-stat">
          <div className="dra-stat-num">8 anos</div>
          <div className="dra-stat-label">De experiência clínica</div>
        </div>
      </div>

      <section className="dra-services" id="servicos">
        <div className="dra-section-header">
          <span className="dra-section-tag">Especialidades</span>
          <h2 className="dra-section-title">Como posso te ajudar</h2>
        </div>

        <div className="dra-services-grid">
          <div className="dra-service-card">
            <div className="dra-service-icon">🍿</div>
            <h3>Terapia Individual</h3>
            <p>
              Sessões personalizadas para ansiedade, depressão, autoconhecimento
              e desenvolvimento pessoal. Abordagem Cognitivo-Comportamental.
            </p>
            <div className="dra-service-price">
              R$180 <span>/ sessão</span>
            </div>
          </div>

          <div className="dra-service-card">
            <div className="dra-service-icon">💋</div>
            <h3>Atendimento Online</h3>
            <p>
              Todo o cuidado e sigilo da terapia presencial, no conforto e
              privacidade da sua casa. Disponível em qualquer lugar do Brasil.
            </p>
            <div className="dra-service-price">
              R$150 <span>/ sessão</span>
            </div>
          </div>

          <div className="dra-service-card">
            <div className="dra-service-icon">🧾</div>
            <h3>Avaliação Psicológica</h3>
            <p>
              Avaliação completa para diagnóstico de TDAH, ansiedade, depressão
              e outros transtornos. Laudos e relatórios.
            </p>
            <div className="dra-service-price">
              R$800 <span>/ processo</span>
            </div>
          </div>
        </div>
      </section>

      <section className="dra-process" id="processo">
        <div className="dra-section-header">
          <span className="dra-section-tag">Processo</span>
          <h2 className="dra-section-title">Como funciona</h2>
        </div>

        <div className="dra-process-steps">
          <div className="dra-step">
            <div className="dra-step-num">1</div>
            <h4>Primeiro contato</h4>
            <p>
              Envie uma mensagem e vamos agendar uma conversa inicial gratuita
              de 20 min.
            </p>
          </div>

          <div className="dra-step">
            <div className="dra-step-num">2</div>
            <h4>Sessão de acolhimento</h4>
            <p>
              Entendemos suas necessidades e definimos os objetivos do processo
              terapêutico.
            </p>
          </div>

          <div className="dra-step">
            <div className="dra-step-num">3</div>
            <h4>Processo terapêutico</h4>
            <p>
              Sessões semanais ou quinzenais com acompanhamento contínuo e
              personalizado.
            </p>
          </div>

          <div className="dra-step">
            <div className="dra-step-num">4</div>
            <h4>Transformação</h4>
            <p>
              Ferramentas reais para lidar com os desafios e construir bem-estar
              duradouro.
            </p>
          </div>
        </div>
      </section>

      <section className="dra-testimonials" id="depoimentos">
        <div className="dra-section-header">
          <span className="dra-section-tag">Depoimentos</span>
          <h2 className="dra-section-title">O que dizem os pacientes</h2>
        </div>

        <div className="dra-testimonials-grid">
          <div className="dra-testimonial">
            <div className="dra-stars">★★★★★</div>
            <p className="dra-testimonial-quote">
              “A terapia com a Dra. Ana mudou minha vida. Aprendi a lidar com
              minha ansiedade de formas que não imaginava possíveis. Recomendo
              de coração.”
            </p>
            <div className="dra-testimonial-author">
              <div className="dra-author-avatar dra-avatar-img">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80"
                  alt=""
                />
              </div>
              <div>
                <div className="dra-author-name">Mariana L.</div>
                <div className="dra-author-role">Paciente há 2 anos</div>
              </div>
            </div>
          </div>

          <div className="dra-testimonial">
            <div className="dra-stars">★★★★★</div>
            <p className="dra-testimonial-quote">
              “Profissional extremamente competente e empática. O ambiente
              virtual não diminui em nada a qualidade do atendimento. Me sinto
              seguro em cada sessão.”
            </p>
            <div className="dra-testimonial-author">
              <div className="dra-author-avatar dra-avatar-img">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
                  alt=""
                />
              </div>
              <div>
                <div className="dra-author-name">Carlos M.</div>
                <div className="dra-author-role">Atendimento online</div>
              </div>
            </div>
          </div>

          <div className="dra-testimonial">
            <div className="dra-stars">★★★★★</div>
            <p className="dra-testimonial-quote">
              “Fiz a avaliação para TDAH e foi um processo cuidadoso e
              humanizado. O laudo foi fundamental para conseguir o tratamento
              certo.”
            </p>
            <div className="dra-testimonial-author">
              <div className="dra-author-avatar dra-avatar-img">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
                  alt=""
                />
              </div>
              <div>
                <div className="dra-author-name">Fernanda R.</div>
                <div className="dra-author-role">Avaliação psicológica</div>
              </div>
            </div>
          </div>

          <div className="dra-testimonial">
            <div className="dra-stars">★★★★★</div>
            <p className="dra-testimonial-quote">
              “Cheguei muito resistente à terapia. Hoje não consigo imaginar
              minha vida sem esse processo de autoconhecimento que a Dra. Ana me
              proporcionou.”
            </p>
            <div className="dra-testimonial-author">
              <div className="dra-author-avatar dra-avatar-img">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80"
                  alt=""
                />
              </div>
              <div>
                <div className="dra-author-name">Rafael S.</div>
                <div className="dra-author-role">Paciente há 1 ano</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dra-cta-section">
        <h2>
          Pronto para dar o <em>primeiro passo?</em>
        </h2>
        <p>
          Agende uma conversa inicial gratuita. Sem compromisso, sem julgamento
          — só você e o seu bem-estar.
        </p>
        <div className="dra-cta-form">
          <input type="email" placeholder="Seu melhor e-mail" />
          <button className="dra-btn-primary" type="button">
            Agendar agora
          </button>
        </div>
      </section>

      <footer className="dra-footer">
        <div className="dra-footer-logo">Dra. Ana Souza</div>
        <p>© 2025 · CRP 00/00000 · Todos os direitos reservados</p>
      </footer>
    </div>
  );
};

export default DraAnaSouzaPsicologia;
