# Prompts e decisões do portfólio

Esta pasta documenta os pedidos que mais influenciaram a criação do portfólio de Leonardo Barbosa. Ela foi organizada para apresentar o processo à professora e permitir distinguir **o que foi pedido na época** da **versão que acabou publicada**.

| Arquivo | Conteúdo | Origem |
| --- | --- | --- |
| [01-ideacao.md](01-ideacao.md) | Objetivo inicial, posicionamento e referências visuais | Trechos da conversa original fornecida por Leonardo |
| [02-prompt-de-implementacao.md](02-prompt-de-implementacao.md) | Briefing completo da primeira implementação | Texto do prompt original enviado por Leonardo |
| [03-refinamentos.md](03-refinamentos.md) | Pedidos que mudaram o design, as fotos e a navegação | Trechos das mensagens posteriores de Leonardo |
| [04-prompt-consolidado.md](04-prompt-consolidado.md) | Especificação que reúne os requisitos da versão atual | Síntese escrita depois da implementação; **não é uma transcrição de mensagem enviada** |

## Como ler a evolução

O projeto começou como um portfólio editorial com tema de nuvem, React, JavaScript, Vite e Tailwind CSS. O primeiro prompt de implementação propunha paleta escura, rolagem vertical comum, fotos na abertura e publicação futura na Vercel. Leonardo testou a prévia e mudou essas decisões: preferiu céu azul-claro com nuvens brancas, levou as fotos para a seção Sobre, escolheu [PX PUSH](https://pxpush.com/) como referência visual principal e pediu que o scroll avançasse como um voo contínuo inspirado em [Dungyov](https://www.dungyov.com/). A publicação de prévia passou a ser feita no GitHub Pages.

As referências são inspiração de comportamento, tipografia e composição, não instruções para copiar marcas, imagens ou código. As descrições dos projetos foram conferidas e ajustadas durante o desenvolvimento; ideias preliminares sobre projetos que não entraram na versão final não devem ser tratadas como conteúdo publicado.

## Resultado verificável

- Código: [gitLeonardoFerreira/portifolio](https://github.com/gitLeonardoFerreira/portifolio)
- Prévia publicada: [Portfólio de Leonardo Barbosa](https://gitleonardoferreira.github.io/portifolio/)
- Primeira implementação: commit `d28d207`
- Identidade clara e integração das fotos: commit `0f89dcf`
- Voo por toda a página inicial: commit `045c3f0`

O site atual tem nove cenas na página inicial: abertura, três projetos, duas cenas Sobre, trajetória e duas cenas de contato. Cada projeto possui uma página de detalhes. A experiência mantém uma alternativa de rolagem convencional para quem prefere movimento reduzido.
