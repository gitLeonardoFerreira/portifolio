# Prompt original de implementação

Transcrição integral do arquivo `Texto colado.txt` que Leonardo enviou para iniciar o desenvolvimento. Este prompt descreve a **primeira versão planejada**; as mudanças posteriores estão em [03-refinamentos.md](03-refinamentos.md).

---

Atue como diretor de arte, designer de experiência e engenheiro frontend sênior. Crie um portfólio pessoal original para Leonardo Barbosa, voltado a recrutadores de estágios em engenharia de software, backend Python e aplicações com IA. Cloud security é sua direção de especialização e seu interesse de estudo; não o apresente como profissional experiente nessa área.

Trabalhe no checkout existente do repositório gitLeonardoFerreira/portifolio em /workspace/portifolio. Desenvolva o projeto com React, JavaScript, Vite e Tailwind CSS, para futura publicação na Vercel. Tome decisões normais de implementação de forma autônoma, explique as decisões relevantes e valide o resultado antes de apresentá-lo. Não publique o site antes da revisão final do usuário.

IDENTIDADE E CONTEÚDO

Use “Leonardo Barbosa” como nome principal. “Léo” pode aparecer como assinatura ou detalhe visual. Leonardo mora em São Paulo, cursa o 2º semestre de Engenharia de Software na FIAP, tem conclusão prevista em 2029 e procura estágio, inclusive remoto. Seu foco atual é backend Python, engenharia de software e aplicações com IA. Seu interesse por cloud security vem da combinação de computação em nuvem, segurança digital e vontade de entender e resolver problemas de proteção de sistemas. Escreva em português, com voz pessoal, criativa e clara. Não invente experiência, resultados, certificações ou tecnologias.

O portfólio deve mostrar primeiro o que Leonardo construiu. Use três projetos em destaque:

1. Rastro — estudo de caso principal. Aplicação para acompanhar solicitações, responsabilidades, próximos passos e confirmação da solução. Baseie as funcionalidades e decisões técnicas no README e no código públicos do repositório gitLeonardoFerreira/rastro. Destaque React, FastAPI e PostgreSQL; explique papéis, histórico, fluxo de atendimento e as decisões de segurança documentadas. A versão pública atual usa TypeScript no frontend e funciona localmente; não anuncie uma demo hospedada nem descreva o frontend como JavaScript até a migração ocorrer.

2. Smart File Organizer — ferramenta de linha de comando em Python que organiza arquivos por extensão ou palavra-chave com regras YAML. Destaque a arquitetura modular e o modo dry-run, que permite revisar as mudanças antes de mover arquivos. Consulte o repositório gitLeonardoFerreira/smart-file-organizer para conferir os detalhes.

3. Cálculo de Frete — projeto de aprendizado com formulário em React e API Express. Apresente-o como parte da evolução técnica de Leonardo. Inclua-o nos destaques, como o usuário pediu, mas não atribua a ele roteamento de páginas React nem anuncie uma demo funcional antes da correção dos problemas existentes no projeto. Consulte o código público antes de escrever o estudo de caso.

Cada projeto deve responder, em linguagem simples: qual era o problema, o que Leonardo construiu, como funciona, quais decisões técnicas importam, o que aprendeu e onde consultar o código. Não crie métricas de impacto para esses projetos. Links de demonstração só devem aparecer quando a demonstração existir e tiver sido testada.

O currículo fornecido pelo usuário deve ficar disponível para download na versão final. A trajetória profissional anterior pode aparecer brevemente para mostrar coordenação, organização e responsabilidade por entregas, sem desviar o foco dos projetos de software.

DIREÇÃO VISUAL

Crie uma identidade chamada “céu em camadas”: clareza editorial, tipografia expressiva e atmosfera de nuvem, infraestrutura e sistemas conectados. A nuvem deve conduzir a experiência entre seções e ajudar a contar a trajetória de Leonardo. Use como ponto de partida azul profundo #101B2B, texto claro #EAF0F2 e ciano #6BD5D7. Mantenha contraste forte e evite um visual apagado ou uma paleta dominada por cinza.

As referências são arunnm.com, pxpush.com e dungyov.com. Aproveite a força tipográfica e a ideia de capítulos do primeiro; as respostas ao mouse e os cards que deslizam e se sobrepõem do segundo; a composição espacial e a relação entre céu e conteúdo do terceiro. Crie uma interpretação original. Não copie layouts, imagens, marcas ou animações.

Use rolagem vertical normal. Transições devem acompanhar o movimento do usuário sem prender, atrasar ou substituir o scroll. Evite vídeos em primeira pessoa, efeitos de piscar e animações longas. Cards podem parecer suspensos no céu, mas precisam parar em posições legíveis. O conteúdo deve ser compreensível mesmo sem animações.

HERO COM FOTOS

Planeje um retrato interativo de Leonardo integrado à abertura: a cada etapa de um giro curto, uma pose diferente aparece. O giro deve ser controlável pelo usuário e ter alternativa por toque no celular. Use somente fotografias reais fornecidas por Leonardo. Antes de finalizar o efeito, avalie enquadramento, iluminação e consistência das poses. Se as fotos não permitirem uma rotação convincente, use uma sequência elegante de retratos em vez de simular um corpo 3D. Enquanto as fotos não estiverem disponíveis em formato acessível, mantenha um espaço visual abstrato coerente com o céu; não gere um rosto substituto.

ESTRUTURA E INTERAÇÃO

Crie uma página inicial com abertura, apresentação, projetos, trajetória/competências e contato. Cada projeto em destaque deve ter uma página própria de estudo de caso. Mantenha navegação simples, com indicação clara da seção atual e retorno fácil à página inicial. Em telas pequenas, reorganize os cards e simplifique as animações sem perder o conceito.

O contato principal será um formulário curto que abre uma conversa no WhatsApp com a mensagem preenchida. Use o número informado no currículo, no formato internacional adequado para wa.me. Campos sugeridos: nome, empresa e mensagem. Valide os campos e codifique o texto da URL corretamente. Deixe o e-mail leomurilobarbosa@gmail.com como alternativa. Inclua links para linkedin.com/in/leonardo-barbosa-102615- e github.com/gitLeonardoFerreira. Não apresente o formulário como envio concluído no próprio site: o usuário termina o envio no WhatsApp.

REQUISITOS DE QUALIDADE

Use HTML semântico, navegação por teclado, foco visível, rótulos claros, contraste acessível e textos alternativos úteis. Respeite prefers-reduced-motion. Interações acionadas por hover precisam funcionar também por toque e teclado. Otimize imagens e fontes; evite bibliotecas pesadas e vídeos de fundo. Organize os dados dos projetos em arquivos fáceis de editar. Configure metadados em português e rotas compatíveis com a Vercel.

Antes de entregar, execute build e lint, abra o site localmente e teste a navegação principal, as páginas de projetos, o currículo, os links externos e a mensagem gerada para o WhatsApp. Confira desktop e celular, erros no console e comportamento com movimento reduzido. Corrija os problemas encontrados. Apresente o resultado com os comandos executados, as verificações que passaram e qualquer limitação real. Não declare como testado algo que não foi verificado.
