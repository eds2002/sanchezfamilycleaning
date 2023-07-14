import Header from '@/modules/shared/components/Header'
import '.././styles/globals.css'
import Footer from '@/modules/shared/components/Footer'
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
