import type { Metadata } from 'next'
import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'
import { Provider } from '@/components/ui/provider'

export const metadata: Metadata = {
  title: 'Brave Hearts',
  description: 'Magical world of Everwhisper Forest',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  )
}