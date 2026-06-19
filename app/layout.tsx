import type { Metadata } from 'next'

import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'
import { Provider } from '@/components/ui/provider'
import './globals.css'

import { Box, Flex } from '@chakra-ui/react'

export const metadata: Metadata = {
  title: 'Brave Hearts',
  description: 'Magical world of Everwhisper Forest',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>
          <Flex direction="column" minH="100vh">
            <Header />

            <Box as="main" flex="1">
              {children}
            </Box>
            
            <Footer />
          </Flex>
        </Provider>
      </body>
    </html>
  )
}