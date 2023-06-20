import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListGroup from 'react-bootstrap/ListGroup';

function App() {
  return (
   <div>
          <header>
        <h1>O Feminicídio</h1>
      </header>

      <main>
        <section>
          <h2>O que é o feminicídio?</h2>
          <p>
            O feminicídio é o assassinato de mulheres por razões de gênero. É uma forma extrema de violência de gênero que ocorre em diferentes contextos sociais e culturais.
          </p>
        </section>

        <section>
          <h4>De acordo com a tabela que registra os casos de Feminicídio em São Paulo, vamos divulgar alguns dados para vocês terem noção de como o feminicídio deve ser combatido e que está em um nível alarmante e que não pode ser ignorado!!</h4>
        </section>

<section>
  <div>
  </div>
</section>
        <section>
          <h4>Confira abaixo algumas estatísticas preocupantes:</h4>
        <ListGroup as="ul">
      <ListGroup.Item as="li" active>
      Ano com mais vítimas:
      </ListGroup.Item>
      <ListGroup.Item as="li">São Paulo - 232</ListGroup.Item>
      <ListGroup.Item as="li" active>
      Municipio com mais vítimas:
      </ListGroup.Item>
      <ListGroup.Item as="li">2022 - 195 vítimas</ListGroup.Item>
      <ListGroup.Item as="li" active>
      Cor da pele das vítimas:
      </ListGroup.Item>
      <ListGroup.Item as="li">Brancas - 606</ListGroup.Item>
      <ListGroup.Item as="li">São Paulo - 232</ListGroup.Item>
      <ListGroup.Item as="li">São Paulo - 232</ListGroup.Item>
      <ListGroup.Item as="li" active>
      Departamento com mais vítimas:
      </ListGroup.Item>
      <ListGroup.Item as="li">DECAP(SP) - 232</ListGroup.Item>
      <ListGroup.Item as="li" active>
      Tipo de local:
      </ListGroup.Item>
      <ListGroup.Item as="li">Residência - 703</ListGroup.Item>
      <ListGroup.Item as="li">Via pública - 227</ListGroup.Item>
    </ListGroup>
        </section>

        <section>
          <h3>Medidas para combater o Feminicídio</h3>
          <ul>
            <li>
              1 - Educação e conscientização: Promova a conscientização sobre o feminicídio por meio de programas educacionais, campanhas de mídia e eventos para informar a sociedade sobre a gravidade e as causas dessa forma de violência de gênero.
            </li>
            <li>
              2 -  Fortalecimento das leis e políticas: Trabalhe para fortalecer as leis e políticas relacionadas ao feminicídio, garantindo a devida punição dos agressores. Lute por legislações mais rigorosas e pela implementação efetiva das existentes.
            </li>
            <li>
              3 - Capacitação da aplicação da lei: Proporcione treinamentos adequados para as autoridades policiais, agentes judiciários e profissionais de saúde, a fim de identificar e responder adequadamente aos casos de feminicídio. Isso inclui aprimorar a coleta de evidências, a proteção das vítimas e a investigação dos casos.
            </li>
            <li>
              4 - Apoio às vítimas: Estabeleça e promova serviços de apoio adequados para as vítimas de violência de gênero, incluindo abrigos seguros, linhas diretas de emergência, aconselhamento psicológico e assistência jurídica. Garanta o acesso fácil a esses recursos e apoie organizações e iniciativas que ofereçam suporte às vítimas.
            </li>
            <li>
              5 - Empoderamento feminino: Incentive o empoderamento das mulheres, promovendo a igualdade de gênero, a autonomia econômica, a educação e a participação das mulheres em todos os setores da sociedade. Isso pode ser feito por meio de programas de capacitação, políticas de inclusão e promoção de oportunidades iguais para mulheres.
            </li>
            <li>
              6 - Desconstrução de estereótipos de gênero: Trabalhe para desconstruir estereótipos de gênero que perpetuam a desigualdade e a violência contra as mulheres. Eduque sobre a importância do respeito mútuo, consentimento e relacionamentos saudáveis.
            </li>
            <li>
              7 - Engajamento da comunidade: Incentive a participação da comunidade no combate ao feminicídio. Promova o diálogo, eventos comunitários e parcerias entre organizações, escolas, empresas e líderes comunitários para criar um ambiente seguro e solidário para as mulheres.
            </li>
            <li>
              8 - Monitoramento e pesquisa: Realize estudos e pesquisas contínuas sobre o feminicídio para compreender melhor suas causas, identificar padrões e orientar as políticas e medidas de prevenção.
            </li>
            <li>
              9 - Redes de apoio e colaboração: Colabore com organizações, grupos ativistas e iniciativas locais, nacionais e internacionais que trabalhem na prevenção do feminicídio. Juntos, podemos fortalecer os esforços e ampliar o impacto na luta contra a violência de gênero.
            </li>
            <li>
              10 - Não seja omisso: Não fique em silêncio diante do feminicídio. Encoraje as pessoas a denunciar casos de violência de gênero, apoiar as vítimas e defender os direitos das mulheres. Todos nós temos um papel a desempenhar na construção de uma sociedade.
            </li>
          </ul>
        </section>
      </main>

      <footer>
        <h5>Vidas importam: Diga NÃO ao feminicídio e SIM à valorização da mulher.</h5>
      </footer>
   </div>
  )
}

export default App