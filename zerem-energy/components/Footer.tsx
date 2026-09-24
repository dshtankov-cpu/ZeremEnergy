import { Logo } from '@/components/Header';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-main">
          <div><a href="/" aria-label="Zerem Energy home"><Logo dark /></a><p>Generator rental and complete power solutions across Israel.</p></div>
          <div><h4>Services</h4><a href="/solutions">All Solutions</a><a href="/services/generator-rental">Generator Rental</a><a href="/services/temporary-power">Temporary Power</a><a href="/solutions#gas-hybrid">Gas & Hybrid Power</a><a href="/solutions#epc-om">EPC & O&amp;M</a></div>
          <div><h4>Company</h4><a href="/#about">About Zerem</a><a href="/#industries">Industries</a><a href="/#faq">FAQ</a><a href="/#contact">Project enquiries</a></div>
          <div><h4>Contact</h4><a href="mailto:hello@zerem-energy.example">hello@zerem-energy.example</a><a href="tel:+97230000000">+972 3 000 0000</a><p>Tel Aviv-Yafo, Israel</p></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Zerem Energy. All rights reserved.</span><span>Industrial generator rental · Israel</span><a href="#">Back to top ↑</a></div>
      </div>
    </footer>
  );
}
