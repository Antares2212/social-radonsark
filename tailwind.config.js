/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./app/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      animation: {
        'timer': 'timer 10s linear',
        'notification': 'notification 1s ease-in',
        'notification-out': 'notification-out .6s ease-out',
      },
      keyframes: {
        'notification': {
          '0%': { transform: 'translateX(100%)' },
          '70%': { transform: 'translateX(-10%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'notification-out': {
          '0%': { transform: 'translateX(0)' },
          '30%': { transform: 'translateX(-10%)' },
          '100%': { transform: 'translateX(110%)' },
        },
        'timer': {
          '0%': { width: '100%' },
          '100%': { width: '0' },
        },
      },
    },
    screens: {
      xl: "1440px",
      lg: "1024px",
      md: "640px",
      sm: "375px",
      xs: "320px"
    },
    colors: {
      // Main Colors
      "text": "#FFFFFF",
      "buttons": "#E27D60",
      "items": "#41B3A3",
      "background": "#85CDCA",
      "highlight": "#E8A87C",
      "subtext": "#C38D9E",

      // Notification Colors
      "error": "#ff0000",
      "error-100": "#E1000024",
      "error-500": "#E1000082",
      "error-700": "#E10000C2",

      "info": "#00fff6",
      "info-100": "#00FFF640",
      "info-500": "#00FFF68C",
      "info-700": "#00FFF6CF",

      "warning": "#ff7900",
      "warning-100": "#FF790030",
      "warning-500": "#FF790087",
      "warning-700": "#FF7900C7",

      "success": "#04E100",
      "success-100": "#04E10017",
      "success-500": "#04E10096",
      "success-700": "#04E100BD",
    },
  },
  plugins: [],
}

