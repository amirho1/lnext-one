import type { Metadata, Viewport } from 'next'
import { Vazirmatn } from 'next/font/google'
import { SiteHeader, SiteFooter } from '@/components/site-shell'
import './globals.css'
const vazirmatn = Vazirmatn({ subsets: ['arabic','latin'], variable: '--font-persian', display: 'swap' })
export const metadata: Metadata = { title: { default: 'آل‌نکست | آینده را تجربه کن', template: '%s | آل‌نکست' }, description: 'آل‌نکست، طراح و برگزارکننده رویدادها و تجربه‌های یادگیری برای آینده تحصیلی و شغلی دانش‌آموزان.' }
export const viewport: Viewport = { themeColor: '#10120f', colorScheme: 'dark' }
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="fa" dir="rtl" className={vazirmatn.variable}><body><a href="#main-content" className="skip-link">رفتن به محتوای اصلی</a><SiteHeader/><main id="main-content">{children}</main><SiteFooter/></body></html> }
