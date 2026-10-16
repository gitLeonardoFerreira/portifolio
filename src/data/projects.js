export const projects = [
  {
    slug: 'rastro',
    number: '01',
    title: 'Rastro',
    eyebrow: 'PRODUTO WEB · PROJETO PRINCIPAL',
    summary:
      'Cada solicitação precisa de um responsável, um próximo passo e uma resposta confirmada.',
    description:
      'Uma aplicação para equipes acompanharem pedidos do registro à confirmação da solução, sem perder o contexto das decisões.',
    tags: ['React', 'FastAPI', 'PostgreSQL'],
    color: 'cyan',
    status: 'Versão local funcional',
    repository: 'https://github.com/gitLeonardoFerreira/rastro',
    problem:
      'Em uma equipe, pedidos podem se perder em conversas. Quem solicitou não sabe quem assumiu; quem recebeu pode não conhecer o contexto; e uma solução pode ser marcada como concluída antes da confirmação de quem pediu.',
    solution:
      'O Rastro registra a solicitação, o encaminhamento, o aceite, o andamento, a solução e a confirmação final. O histórico preserva quem fez cada mudança e permite reabrir um pedido se o problema continuar.',
    decisions: [
      {
        title: 'Papéis claros',
        text: 'Solicitante, responsável e administrador têm ações distintas. A API também verifica as permissões, além da interface.',
      },
      {
        title: 'Estados com significado',
        text: 'Encaminhar, assumir e confirmar a resolução são etapas separadas para evitar conclusões prematuras.',
      },
      {
        title: 'Integridade e segurança',
        text: 'O projeto documenta senhas com Argon2, sessão em cookie HttpOnly, proteção CSRF e transações para manter estado e histórico consistentes.',
      },
    ],
    journey: ['Registrar', 'Encaminhar', 'Assumir', 'Resolver', 'Confirmar'],
    learning:
      'Desenhar um fluxo confiável exige pensar nas transições, nas permissões e no que acontece quando duas pessoas agem ao mesmo tempo.',
    note: 'A versão pública usa TypeScript no frontend e funciona localmente. Ainda não há uma demonstração hospedada.',
  },
  {
    slug: 'smart-file-organizer',
    number: '02',
    title: 'Smart File Organizer',
    eyebrow: 'AUTOMAÇÃO · PYTHON',
    summary: 'Uma pasta caótica vira um sistema de regras simples, revisáveis e reutilizáveis.',
    description:
      'Ferramenta de linha de comando que organiza arquivos por extensão ou palavra-chave conforme regras definidas em YAML.',
    tags: ['Python', 'CLI', 'YAML'],
    color: 'mint',
    status: 'Código público',
    repository: 'https://github.com/gitLeonardoFerreira/smart-file-organizer',
    problem:
      'Downloads, documentos e imagens se acumulam em uma mesma pasta. Organizar manualmente toma tempo e mover arquivos sem conferir as regras pode gerar novos problemas.',
    solution:
      'A ferramenta lê regras em YAML, identifica arquivos por extensão ou palavra-chave e os encaminha para as pastas configuradas. O modo dry-run mostra o plano antes de mover qualquer arquivo.',
    decisions: [
      {
        title: 'Configuração fora do código',
        text: 'As regras ficam em YAML para que novos tipos de arquivo possam ser adicionados sem alterar a lógica principal.',
      },
      {
        title: 'Prévia antes da ação',
        text: 'O modo dry-run permite verificar o destino previsto para cada arquivo antes da execução.',
      },
      {
        title: 'Módulos pequenos',
        text: 'Carregamento, seleção de regras e operações de arquivo são responsabilidades separadas, facilitando manutenção e testes.',
      },
    ],
    journey: ['Ler regras', 'Analisar', 'Simular', 'Organizar'],
    learning:
      'Automação útil precisa ser previsível: mostrar o que vai acontecer é tão importante quanto executar a tarefa.',
    note: 'Projeto de linha de comando. O código e as instruções de uso estão no GitHub.',
  },
  {
    slug: 'calculo-de-frete',
    number: '03',
    title: 'Cálculo de Frete',
    eyebrow: 'LABORATÓRIO · APLICAÇÃO WEB',
    summary: 'Um exercício de integração entre interface, requisição HTTP e regra de negócio.',
    description:
      'Aplicação de aprendizado com formulário em React e uma API Express que calcula o valor do frete a partir da distância e do transporte.',
    tags: ['React', 'Express', 'Tailwind'],
    color: 'blue',
    status: 'Projeto de aprendizado',
    repository: 'https://github.com/gitLeonardoFerreira/calculo-de-frete',
    problem:
      'Transformar uma regra de preço em uma experiência utilizável envolve mais do que fazer a conta: é preciso coletar dados, enviar a solicitação e apresentar o resultado ou um erro.',
    solution:
      'A interface recebe distância e tipo de transporte e envia uma requisição para a API. O servidor aplica um preço por quilômetro e um reajuste para distâncias acima de 50 km.',
    decisions: [
      {
        title: 'Responsabilidades separadas',
        text: 'O React cuida do formulário e do retorno visual; a API Express concentra a regra do cálculo.',
      },
      {
        title: 'Estados de interface',
        text: 'O formulário apresenta carregamento, resultado e erro de maneira distinta.',
      },
      {
        title: 'Próxima iteração',
        text: 'O projeto ainda receberá correções e refinamentos antes de ter uma demonstração pública.',
      },
    ],
    journey: ['Informar', 'Enviar', 'Calcular', 'Exibir'],
    learning:
      'Conectar interface e servidor tornou visível a importância de alinhar contratos de dados, opções do formulário e respostas da API.',
    note: 'O código está público. Não há demonstração hospedada vinculada a este portfólio.',
  },
]

export function findProject(slug) {
  return projects.find((project) => project.slug === slug)
}
