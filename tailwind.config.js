module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-teal': 'var(--primary-teal)',
        'primary-dark-brown': 'var(--primary-dark-brown)',
        'primary-medium-brown': 'var(--primary-medium-brown)',
        'primary-light-brown': 'var(--primary-light-brown)',
      },
    },
  },
  plugins: [],
};
