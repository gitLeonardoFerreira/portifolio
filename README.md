# Portfólio de Leonardo Barbosa

Portfólio em português feito com React, JavaScript, Vite e Tailwind CSS. A página inicial apresenta Leonardo e três projetos; cada projeto tem um estudo de caso próprio.

## Desenvolvimento

Requer Node.js 20.19+ ou 22.12+ e npm.

```bash
npm ci
npm run dev
```

Abra o endereço informado pelo Vite. Para validar antes de publicar:

```bash
npm run lint
npm run format:check
npm test
npm run build
npm run preview
```

## Conteúdo

- Edite os estudos de caso em `src/data/projects.js`.
- O número e a mensagem do WhatsApp ficam em `src/lib/contact.js`.
- O currículo disponível para download fica em `public/Leonardo_Barbosa_Curriculo.pdf`.
- Os retratos da seção Sobre ficam em `public/portraits/`, e a ordem das poses fica em `src/data/portraits.js`. O retrato gira automaticamente enquanto a cena Sobre está ativa e também pode ser trocado pelo botão.
- Na página principal, o scroll e o toque controlam uma câmera fixa com nove cenas: abertura, três projetos individuais, duas cenas Sobre, trajetória e duas cenas de contato. As nuvens atravessam o cenário e cada conteúdo se aproxima antes de dar lugar ao próximo. Os controles inferiores e o menu permitem saltar entre as cenas. As páginas de detalhes mantêm a leitura convencional, com uma transição de entrada. Quem prefere movimento reduzido vê a estrutura vertical tradicional.

## Publicação

O GitHub Pages publica automaticamente a branch `main` pelo fluxo `.github/workflows/pages.yml`. A compilação usa a base `/portifolio/` e rotas com `#`, permitindo abrir os estudos de caso na prévia pública. Para conferir localmente:

```bash
GITHUB_PAGES=true npm run build
GITHUB_PAGES=true npm run preview
```

O projeto também pode ser importado na Vercel como aplicação Vite. Nesse caso, `vercel.json` encaminha as rotas dos estudos de caso para o aplicativo React.
