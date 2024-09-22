/* eslint-disable @typescript-eslint/naming-convention */
import type { Config } from 'tailwindcss'

const config: Config = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: {
        DEFAULT: '#f9f9f8',
        smoke: '#f5f5f5',
        real: '#ffffff',
        50: 'rgba(249, 249, 248, 0.5)',
        30: 'rgba(249, 249, 248, 0.3)',
      },
      black: {
        DEFAULT: '#1f1323',
        70: 'rgba(31, 19, 35, 0.7)',
        50: 'rgba(31, 19, 35, 0.5)',
        30: 'rgba(31, 19, 35, 0.3)',
        20: 'rgba(31, 19, 35, 0.2)',
        10: 'rgba(31, 19, 35, 0.1)',
        real: '#000000',
      },
      blue: {
        DEFAULT: '#364ccE',
        dark: '#353089',
      },
      pink: {
        DEFAULT: '#d59bae',
        dark: '#9e7284',
      },
      gray: {
        platinum: '#dcdcdc',
        antiflash: '#ebebeb',
      },
      blackout: 'rgba(17, 17, 17, 0.4)',
    },
    extend: {
      screens: {
        '3xl': '1600px',
      },
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif'],
        arial: ['Arial', 'sans-serif'],
        verdana: ['Verdana', 'sans-serif'],
      },
      fontSize: {
        28: ['1.75rem', '2rem'],
      },
      width: {
        constructorSidebar: '500px',
        constructorSidebarLine: '94px',
      },
      padding: {
        constructorSidebarContentX: '32px',
      },
      spacing: {
        4.5: '1.125rem',
        13: '3.25rem',
        15: '3.75rem',
        18: '4.5rem',
        19: '4.75rem',
        25: '6.25rem',
        28: '7rem',
        27.5: '6.875rem',
        42: '10.5rem',
        45: '11.25rem',
      },
      letterSpacing: {
        '02': '0.02em',
      },
      boxShadow: {
        header: '0px 1px 4px 0px rgba(0, 0, 0, 0.25)',
        constructorСard: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        cardСontrol: '2px 2px 4px 0px #364CCE',
      },
      borderRadius: {
        '10': '10px',
        '20': '20px',
        '40': '40px',
        '2.5xl': '20px',
      },
      zIndex: {
        100: '100',
      },
      transitionDuration: {
        400: '400ms',
      },
      scale: {
        135: '135%',
      },
    },
  },
  plugins: [],
}

export default config
