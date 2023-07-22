import { Inter, Roboto_Mono, Source_Sans_3, Oswald } from 'next/font/google'

export const sourceSans3 = Source_Sans_3({ 
    weight: '400', 
    subsets: ['latin'], 
    variable: '--font-source-sans-3'
  })

  export const oswald = Oswald({ 
    weight: '400', 
    variable: '--font-oswald',
    subsets: ['latin'],
  })

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})
 
export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
})