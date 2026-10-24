'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ArrowUpLeft, ArrowUpRight, Menu, X } from 'lucide-react'

const links = [['/', 'خانه'], ['/events', 'رویدادها'], ['/about', 'درباره آل‌نکست'], ['/collaborate', 'همکاری با ما']]
export function Brand() { return <Link href="/" className="brand" aria-label="آل‌نکست، صفحه اصلی"><span className="brand-symbol" aria-hidden="true"><ArrowUpRight size={45} strokeWidth={3}/></span><span>آل‌نکست<small dir="ltr">ALLNEXT</small></span></Link> }
export function SiteHeader() {
 const [open, setOpen] = useState(false); const path = usePathname()
 return <header className="site-header"><div className="container header-inner"><Brand/><nav aria-label="ناوبری اصلی" className={open ? 'navigation is-open' : 'navigation'}>{links.map(([href, label]) => <Link key={href} href={href} aria-current={path === href ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</Link>)}</nav><Link className="contact-link" href="/contact">بیایید گفت‌وگو کنیم <ArrowUpLeft size={17}/></Link><button className="menu-toggle" aria-label={open ? 'بستن منو' : 'باز کردن منو'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button></div></header>
}
export function SiteFooter() { return <footer className="container site-footer"><div><Brand/><p>تجربه‌های تازه، برای آینده‌های متفاوت.</p></div><div className="footer-links"><Link href="/contact">تماس با ما</Link><Link href="/privacy">حریم خصوصی</Link><Link href="/terms">شرایط استفاده</Link></div><small>آل‌نکست © ۱۴۰۵ <span dir="ltr">DESIGNED FOR WHAT’S NEXT ↗</span></small></footer> }
