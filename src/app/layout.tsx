import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/pages/app.sidebar'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Blog Website - Notion',
  description: 'Blog website using notion as CMS',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SidebarProvider className='text-[#8027c9]'>
          <AppSidebar />
          <main className='w-full'>
            <SidebarTrigger className='' />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  )
}
