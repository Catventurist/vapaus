export default defineAppConfig({
  ui: {
    colors: {
      primary: 'purple',
      neutral: 'neutral'
    }
  },
  theme: {
    radius: 0.25,
    blackAsPrimary: false
  },
  global: {
    picture: {
      dark: '/cat.png',
      light: '/cat.png',
      alt: 'Catventurist'
    },
    meetingLink: 'https://t.me/catventurists',
    email: 'catventurist@gmail.com',
    available: true
  },
  footer: {
    credits: `@Catventurist ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-telegram',
      'to': 'https://t.me/catventurists',
      'target': '_blank',
      'aria-label': 'Telegram'
    }, {
      'icon': 'i-simple-icons-hive-blockchain',
      'to': 'https://ecency.com/@catventurist',
      'target': '_blank',
      'aria-label': 'Ecency'
    }, {
      'icon': 'i-simple-icons-gitlab',
      'to': 'https://gitlab.com/catventurist',
      'target': '_blank',
      'aria-label': 'Gitlab'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/Catventurist',
      'target': '_blank',
      'aria-label': 'GitHub'
    }]
  }
})
