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
  }
})
