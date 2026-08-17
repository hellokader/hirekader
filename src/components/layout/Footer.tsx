import Link from "next/link";
import Image from "next/image";
import { Calendar, Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer id="call" className="site-footer">
      <div className="wrap">
        <div className="foot-top">
          <div>
            <Image className="foot-logo" src="/images/logo-6aad0831d946.png" alt="Hire Kader" width={147} height={38} />
            <p className="foot-blurb">
              I run Google Ads for home service businesses in the US, UK and Australia, built around booked jobs, not clicks.
              One person, no account managers.
            </p>
          </div>
          <div className="foot-social">
            <a href={siteConfig.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn">
              in
            </a>
            <Link href="/#call" aria-label="Email">
              <Mail />
            </Link>
            <Link href="/#call" aria-label="WhatsApp">
              <MessageCircle />
            </Link>
            <Link href="/#call" aria-label="Book a call">
              <Calendar />
            </Link>
          </div>
        </div>
        <div className="foot-grid">
          <div className="foot-col">
            <h5>Start here</h5>
            <Link href="/#audit">Get a free audit</Link>
            <Link href="/#call">Book a call</Link>
            <Link href="/#faq">FAQ</Link>
          </div>
          <div className="foot-col">
            <h5>What I do</h5>
            <Link href="/#services">Google Ads management</Link>
            <Link href="/#services">Local Services Ads</Link>
            <Link href="/#services">Call & form tracking</Link>
            <Link href="/#services">Landing page fixes</Link>
          </div>
          <div className="foot-col">
            <h5>Service areas</h5>
            <Link href="/#audit">United States</Link>
            <Link href="/#audit">United Kingdom</Link>
            <Link href="/#audit">Australia</Link>
          </div>
          <div className="foot-col">
            <h5>For agencies</h5>
            <Link href="/#audit">White-label Google Ads partner</Link>
            <Link href="/blog">Writing</Link>
            <Link href="/#about">About me</Link>
          </div>
        </div>
        <div className="foot-bottom">© 2026 Abdul Kader, Google Ads for home service businesses. All rights reserved.</div>
      </div>
    </footer>
  );
}
