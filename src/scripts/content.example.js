// base settings variables
app_domain = 'https://actionholding.com.br';
firebase_app_id = '';
facebook_app_id = '';

content = {
  brand: {
    name: 'Landing Fire',
    icon: 'ion-ionic'
  },
  banner: {
    main_value: 'Main Value Proposition',
    second_value: 'Second Value proposition',
    video: 'https://www.youtube.com/embed/c5B9tyWD0V8',
    bullets: [
      'bullet',
      'bullet2'
    ],
    call_to_action: {
      icon: 'ion-heart',
      text: 'Call to Action'
    }
  },

  partners: {
    title: 'Partners or customers title',
    description: 'Partners or customers description, how awesome they are',
    brands: [
      'anjos.png',
      'asteps.png',
      'criatec.png',
      'sebrae.png'
    ]
  },

  showroom: {
    title: 'Showroom Title',
    subtitle: 'Main value for it showroom cases/features',
    samples: [
      {
        color: 'black',
        icon: 'icon-uber',
        title: 'Perfeito para Uber das coisas',
        call_to_action: {
          icon: '',
          color: '',
          text: 'quero meu uber'
        },
        description: '<strong>Ações padrão</strong>: cadastro e login condutor e passageiro <br> <strong>Ações customizadas</strong>: marcar ponto de encontro' +
        '<div class="small_margin_top small_margin_bottom line"><div class="left"></div><span>OU</span><div class="right"></div></div>' +
        '<strong>Ações customizadas</strong>: visualizar localização passageiro, condutor e vice-versa em tempo-real' +
        '<br><strong>Avaliado em</strong> <span class="teal-text">US$ 68 bilhões</span>'
      },
      {
        color: 'green',
        icon: 'ion-social-whatsapp-outline',
        title: 'Perfeito para comunicação',
        call_to_action: {
          icon: '',
          color: 'success',
          text: 'quero meu whatsapp'
        },
        description: '<strong>Ações padrão</strong>: cadastro e login (sem verificação via SMS) <br> <strong>Ação customizada</strong>: mensagens de texto instantâneas' +
        '<div class="small_margin_top small_margin_bottom line"><div class="left"></div><span>OU</span><div class="right"></div></div>' +
        '<strong>Ações customizadas</strong>: gerenciar grupos e contatos ou ainda envio de arquivos em tempo-real' +
        '<br><strong>Avaliado em</strong> <span class="teal-text">US$ 19 bilhões</span>'
      },
      {
        color: 'blue',
        icon: 'ion-social-twitter-outline',
        title: 'Perfeito para redes sociais',
        call_to_action: {
          icon: '',
          color: 'info',
          text: 'quero meu twitter'
        },
        description: '<strong>Ações padrão</strong>: cadastro e login (via facebook, gplus, twitter...) <br> <strong>Ação customizada</strong>: time-line simples (como no antigo twitter)' +
        '<div class="small_margin_top small_margin_bottom line"><div class="left"></div><span>OU</span><div class="right"></div></div>' +
        '<strong>Ações customizadas</strong>: gerenciar grupos e relacionamentos complexos como no GooglePlus' +
        '<br><strong>Avaliado em</strong> <span class="teal-text">US$ 10 bilhões</span>'
      }
    ]
  },

  objections: {
    title: 'Objection Title',
    subtitle: 'Objection SubTitle',

    // COMPLEMENTARY to the existing solution || UNIQUELY different
    comparison: {
      ourName: 'Your HighConcept',
      competitorName: 'Competitor HighConcept',
      points: [
        {
          competitor: 'Their disadvantage',
          us: 'Our advantage'
        },
        {
          competitor: 'Their disadvantage',
          us: 'Our advantage'
        },
        {
          competitor: 'Você recebe a melhor negociação no mesmo dia. Total comodidade e agilidade',
          us: 'Você recebe a melhor negociação no mesmo dia. Total comodidade e agilidade'
        },
        {
          competitor: 'Você recebe a melhor negociação no mesmo dia. Total comodidade e agilidade',
          us: 'Você recebe a melhor negociação no mesmo dia. Total comodidade e agilidade'
        }
      ]
    },

    // 1. you understand and empathize with their objection
    // 2. Offer new information (or discounts) that makes it easy for them to move forward
    // 3. Get their commitment
    friend_formula: {

    }
  },

  guest_post: {
    title: 'palavras de quem entende do assunto',
    call_to_action: {
      icon: 'icon-action-holding',
      text: 'LANCE MINHA IDEIA'
    },
    guests: [
      {
        name: 'Cassio Spina',
        role: 'Investidor Anjo e fundador da Anjos do Brasil',
        summary: 'Somente após atingir o estágio de Protótipo você terá chances reais de conseguir investimento de anjos.' +
        ' Nenhum investidor profissional entra no estágio da ideia. ' +
        'A fase ideal para receber investimento é quando está dando os primeiros passos para vender seu produto.' +
        ' O investidor lhe ajudará com dinheiro e experiência.',
        video: 'https://www.youtube.com/embed/e6J10EHbN6Q?list=PLjIhqe5hH3aRUXAGtrq2qj3qpmjHUtumW'
      }
    ]
  },

  social_proof: {
    title: 'e com a palavra, os consumidores'
  }
};
