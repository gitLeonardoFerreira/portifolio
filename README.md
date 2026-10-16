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
- A ilustração interativa da abertura foi preparada para receber fotografias reais de Leonardo após a seleção e otimização das poses. Ela funciona sem fotografias enquanto essa etapa não é concluída.

## Publicação

O projeto pode ser importado na Vercel como aplicação Vite. `vercel.json` encaminha as rotas dos estudos de caso para o aplicativo React. A publicação deve ocorrer depois da revisão do conteúdo e dos recursos visuais.
