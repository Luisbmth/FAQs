import * as React from 'react';
import { useEffect, useState } from 'react';
import styles from './FaQs.module.scss';

export interface IFaQsProps {}

const FaQs: React.FC<IFaQsProps> = () => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const faqQuestions = document.querySelectorAll(`.${styles['faq-question']}`);
    faqQuestions.forEach(question => {
      question.addEventListener('click', () => {
        const item = question.parentElement;
        item?.classList.toggle(styles.active);
      });
    });

    return () => {
      faqQuestions.forEach(question => {
        question.removeEventListener('click', () => {});
      });
    };
  }, []);

  const faqData = [
    {
      question: 'Para quais tipos de solicitações poderei abrir chamados para o dti no e-niteroi?',
      answer: <>O DTI é responsável pelo parque tecnológico, portanto será possível abrir chamado para quaisquer solicitações referentes a rede e internet, computadores, impressoras, softwares, entre outros. Caso queira saber mais sobre os serviços do DTI, acesse o catálogo de serviços, disponivel em: <a href="https://fmeniteroi.sharepoint.com/:w:/r/sites/DepartamentodeTecnologiadaInformao-Educacao/_layouts/15/doc2.aspx?sourcedoc=%7BA1D72198-F169-4C12-8A43-7E9F77D3B11D%7D&file=Catalogo%20de%20Servi%C3%A7os%20de%20TI%20%20consolidado%20II.docx&action=default&mobileredirect=true&DefaultItemOpen=1&ct=1758217490959&wdOrigin=OFFICECOM-WEB.MAIN.REC&cid=8a03f350-c940-4827-a5d0-65948c8622b2&wdPreviousSessionSrc=HarmonyWeb&wdPreviousSession=25384cc8-c19c-49d1-a26e-b94635c9f74c" target="_blank" rel="noreferrer">catálogo de serviços DTI</a>.</>
    },
    {
      question: 'O que acontece quando a internet da escola cai?',
      answer: 'Pedimos que aguarde até 24 horas para que o serviço seja restabelecido. Se, após esse prazo, a conexão ainda não voltar, entre em contato com o DTI para que possamos acionar a empresa responsável e agilizar a solução.'




    },
    {
      question: 'Esqueci a senha do e-mail institucional. O que devo fazer para recuperar?',
      answer: 'Hoje existem duas formas de recuperar a senha do e-mail institucional: a primeira é pelo E-Niterói, onde você abre um chamado para solicitar a redefinição, e a segunda é enviando um e-mail para o DTI no endereço dti@educacao.niteroi.rj.gov.br, para abertura de chamado.' 
    },
    
  ];

  return (
    <div className={styles['faq-container']}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <div className={styles['faq-header']}>
        <div className={styles['header-icon']}><i className="fas fa-headset"></i></div>
        <div className={styles['header-text']}>
          <h1>Central de Ajuda</h1>
          <p>Suporte técnico e soluções para serviços digitais</p>
        </div>
        <div className={styles['department-name']}>
          Departamento de Tecnologia
        </div>
      </div>

      <div className={styles['faq-list']}>
        <div className={styles['search-box']}>
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Pesquisar perguntas..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>

        {faqData
          .filter(item =>
            item.question.toLowerCase().includes(searchTerm) ||
            item.answer.toString().toLowerCase().includes(searchTerm)
          )
          .map((item, index) => (
            <div key={index} className={styles['faq-item']}>
              <div className={styles['faq-question']}>
                <span>{item.question}</span>
                <span className={styles.arrow}>▼</span>
              </div>
              <div className={styles['faq-answer']}>{item.answer}</div>
            </div>
          ))}

        <div className={styles['contact-support']}>
          <h3>Não encontrou o que precisava?</h3>
          <p>Entre em contato com nossa equipe de suporte técnico para assistência personalizada</p>
          <div className={styles['email-alternative']}>
            Envie um e-mail diretamente para: <a href="mailto:dti@educacao.niteroi.rj.gov.br">dti@educacao.niteroi.rj.gov.br</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaQs;
