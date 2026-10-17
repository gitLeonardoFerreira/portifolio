# Prompt consolidado da versão publicada

> **Nota de procedência:** este texto foi escrito **depois** da implementação para reunir as decisões finais em uma instrução reutilizável. Ele não foi enviado integralmente como um único prompt durante o desenvolvimento. Para ver os pedidos históricos, leia os três arquivos anteriores.

---

Atue como diretor de arte, designer de interação e engenheiro frontend sênior. Trabalhe no repositório `gitLeonardoFerreira/portifolio` para criar ou evoluir o portfólio de Leonardo Barbosa. Preserve os dados confirmados e o que já funciona; trate o código atual como fonte para rotas, projetos, retratos e contato. Tome decisões normais de implementação, valide no navegador e só declare concluído o que foi testado.

## Objetivo e posicionamento

Crie um portfólio em português, pessoal e criativo, que ajude recrutadores a entender rapidamente quem é Leonardo, o que construiu e como entrar em contato. Use “Leonardo Barbosa” como nome principal e “léo” como assinatura visual. Ele estuda Engenharia de Software na FIAP, mora em São Paulo, procura estágio e trabalha sua base em backend Python, aplicações web e IA. Cloud security é uma direção de estudo, não experiência profissional consolidada. Não invente empregos, impacto, métricas, certificações, funcionalidades ou tecnologias.

Use React com JavaScript, Vite e Tailwind CSS como base do projeto. Organize os dados dos projetos em arquivos editáveis. Publique a prévia no GitHub Pages com rotas que funcionem no caminho `/portifolio/`; mantenha o projeto compatível com uma futura publicação na Vercel.

## Conteúdo e arquitetura

- A página inicial deve apresentar abertura, Rastro, Smart File Organizer, Cálculo de Frete, Sobre, trajetória e contato. Cada projeto tem também uma página própria de estudo de caso, com problema, solução, funcionamento, decisões técnicas, aprendizado e link para o código.
- Dê **uma parada visual própria para cada projeto** na página inicial. Agrupe textos que pertencem ao mesmo assunto para que possam ser lidos sem pressa.
- Consulte os repositórios públicos dos projetos antes de afirmar detalhes técnicos. Rastro não deve ser descrito como JavaScript no frontend enquanto a migração de TypeScript não acontecer. Cálculo de Frete pode ser destacado como aprendizado, sem anunciar demo corrigida se ela ainda não foi verificada.
- Ofereça o currículo para download. Use apenas as fotografias reais fornecidas por Leonardo. Na seção Sobre, as fotos devem trocar de pose durante um giro curto, acionável por botão e adequado ao toque; mantenha a terceira pose descontraída escolhida depois da primeira prévia.
- O formulário de contato coleta nome, empresa opcional e mensagem e abre o WhatsApp com o texto preenchido para revisão e envio. Mantenha e-mail, LinkedIn e GitHub como alternativas. Nunca mostre confirmação de envio dentro do site antes da pessoa concluir a conversa no WhatsApp.

## Direção visual

Crie uma identidade original de céu azul-claro, nuvens brancas desenhadas e detalhes de cartoon. Use tipografia expressiva, textos centralizados quando isso melhorar a composição, espaço em branco e hierarquia fácil de ler. A abertura deve aproveitar a nuvem como elemento central sem poluir a tela; a marca “léo” não tem ponto. A localização exibida é “São Paulo”.

Use [PX PUSH](https://pxpush.com/) como principal referência de atitude visual, resposta ao mouse e apresentação lúdica dos projetos. Use [Arun NM](https://www.arunnm.com/) como referência de tipografia e divisão em capítulos, sem vídeos em primeira pessoa, piscadas ou navegação lenta. Use [Dungyov](https://www.dungyov.com/) como referência para a sensação de profundidade no scroll. Reinterprete esses elementos para Leonardo; não copie layout, código, imagens, cores ou marcas dos sites.

## Navegação em voo pela página inteira

A página inicial deve funcionar como uma viagem pelo céu. **A câmera permanece no mesmo enquadramento visível** enquanto wheel, trackpad, toque ou controles avançam e recuam entre as cenas. Ao avançar, o conteúdo atual se aproxima, passa pelo observador e abre espaço para o próximo, que surge à distância. Nuvens e atmosfera reforçam a percepção de deslocamento. Mantenha esse comportamento desde a abertura **até a última cena de contato**, não apenas em uma transição inicial.

Organize o percurso em nove paradas legíveis: abertura; Rastro; Smart File Organizer; Cálculo de Frete; apresentação Sobre com retratos; história e formação; trajetória; convite para contato; formulário e links. Cada parada deve ter tempo de leitura natural; o movimento acompanha o controle do visitante. Não use vídeos de fundo, piscadas ou efeitos que escondam o conteúdo. Links do menu e controles de próxima/anterior devem levar à parada correta. O usuário deve conseguir voltar de um estudo de caso à cena de projeto correspondente.

As páginas de detalhes dos projetos podem manter rolagem convencional. Ao entrar nelas pela página inicial, use uma transição curta que pareça continuar o voo. No celular, preserve a ideia de profundidade e ajuste tamanho, ritmo e layout para leitura confortável. Respeite `prefers-reduced-motion` com uma alternativa estável, acessível e plenamente navegável.

## Qualidade e entrega

Use HTML semântico, rótulos claros, foco visível, navegação por teclado, texto alternativo útil, contraste suficiente e controles que funcionem com mouse e toque. Evite bibliotecas ou mídias pesadas. Confira sobreposição, cortes, rolagem horizontal e legibilidade em desktop e celular, inclusive nas cenas finais.

Antes de publicar, execute lint, checagem de formatação, testes e build; abra a versão local em navegador e confira todas as cenas, menu, páginas de projeto, retorno, currículo e contato. Verifique erros de JavaScript e a versão com movimento reduzido. Publique no GitHub Pages, confirme a execução do fluxo de publicação e abra o endereço público. Apresente o link, o que foi alterado, as verificações concluídas e as limitações reais.
