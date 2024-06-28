export default function manifest() {
  return {
    name: 'QuantumShadow',
    short_name: 'QuantumShadow',
    description: 'Win this game by Hacking your way to freedom',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}