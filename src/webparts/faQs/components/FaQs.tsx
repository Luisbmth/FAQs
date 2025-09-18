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
      question: 'Esqueci minha senha, como redefinir?',
      answer: 'Clique em "Esqueci minha senha" na página de login. Informe seu CPF ou e-mail cadastrado e você receberá um link para redefinir sua senha. Por questões de segurança, o link é válido por 1 hora. Caso não receba o e-mail, verifique sua pasta de spam ou entre em contato conosco. O DTI também atende solicitações de redefinição de senha de e-mail e de rede.'
    },
    {
      question: 'Quais documentos preciso para me cadastrar?',
      answer: 'Para cadastro completo no portal, você precisará de: CPF, documento de identidade com foto, comprovante de residência atualizado e e-mail pessoal. Alguns serviços específicos podem requerer documentação adicional, que será solicitada durante o processo.'
    },
    {
      question: 'Como emitir segunda via de IPTU?',
      answer: 'Acesse sua conta no portal, vá até a seção "Serviços Tributários" e selecione "IPTU". Lá você poderá visualizar e emitir a segunda via do boleto, além de consultar débitos e condições de pagamento. O documento estará disponível para download em formato PDF.'
    },
    {
      question: 'Meus dados estão protegidos no portal?',
      answer: 'Sim, utilizamos protocolos de segurança avançados e criptografia SSL para proteger todas as informações. Seguimos rigorosamente a Lei Geral de Proteção de Dados (LGPD) e realizamos auditorias regulares de segurança. Seus dados são utilizados exclusivamente para prestação de serviços municipais.'
    },
    {
      question: 'Como agendar atendimento presencial?',
      answer: 'Através do portal, na seção "Agendamento", você pode selecionar o serviço desejado, a unidade de atendimento e o horário disponível. Você receberá um comprovante por e-mail com QR Code para apresentação no local. Chegue com 10 minutos de antecedência.'
    }
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
