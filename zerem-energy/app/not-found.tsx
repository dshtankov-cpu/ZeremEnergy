import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function NotFound() {
  return <>
    <Header />
    <main className="not-found-page">
      <div className="container not-found-inner">
        <p className="eyebrow">404 / PAGE NOT FOUND</p>
        <h1>This page is<br /><em>not connected.</em></h1>
        <p>The address may have changed, or the page may no longer exist. Return to Zerem Energy to explore our power solutions.</p>
        <a className="button" href="/">Return to homepage <span>↗</span></a>
      </div>
    </main>
    <Footer />
  </>;
}
