import type { Metadata } from 'next'
import { Provider } from '@/components/ui/provider'

export const metadata: Metadata = {
  title: 'My App',
  description: '',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}