'use client';
import { useState } from 'react';
import Image from 'next/image';
export function Logo({ dark = false }: { dark?: boolean }) {
  return <span className="brand-logo"><Image src={dark ? '/brand/zerem-dark.png' : '/brand/zerem-white.png'} alt="Zerem Energy" width={1536} height={1024} sizes="320px" loading={dark ? 'lazy' : 'eager'} /></span>;
}
const links = [['Solutions','/solutions'],['Industries','/industries'],['Equipment','/#equipment'],['About','/#about']];
export default function Header(){ const [open,setOpen]=useState(false); return <header className="header"><div className="container header-inner"><a href="/" aria-label="Zerem Energy home"><Logo/></a><nav aria-label="Main navigation" className="desktop-nav">{links.map(([name,href])=><a key={href} href={href}>{name}</a>)}</nav><a href="/#contact" className="button small header-quote">Request a Quote <span>↗</span></a><button className="menu-toggle" aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open} aria-controls="mobile-nav" onClick={()=>setOpen(!open)}>{open?'✕':'☰'}</button></div>{open&&<nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation" onKeyDown={e=>{if(e.key==='Escape')setOpen(false)}}>{[...links,['Request a Quote','/#contact']].map(([name,href])=><a key={href} href={href} onClick={()=>setOpen(false)}>{name}<span>↗</span></a>)}</nav>}</header>}
