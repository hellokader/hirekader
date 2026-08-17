import Link from "next/link";
import Image from "next/image";
import { Calendar, Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { routes } from "@/lib/routes";

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
            <Link href={routes.contact} aria-label="Email">
              <Mail />
            </Link>
            <Link href={routes.contact} aria-label="WhatsApp">
              <MessageCircle />
            </Link>
            <Link href={routes.contact} aria-label="Book a call">
              <Calendar />
            </Link>
          </div>
        </div>
        <div className="foot-grid">
          <div className="foot-col">
            <h5>Start here</h5>
            <Link href={routes.audit}>Get a free audit</Link>
            <Link href={routes.contact}>Book a call</Link>
            <Link href={routes.faq}>FAQ</Link>
          </div>
          <div className="foot-col">
            <h5>What I do</h5>
            <Link href={routes.service("google-ads")}>Google Ads management</Link>
            <Link href={routes.service("local-services-ads")}>Local Services Ads</Link>
            <Link href={routes.service("call-form-tracking")}>Call & form tracking</Link>
            <Link href={routes.service("landing-page-fixes")}>Landing page fixes</Link>
          </div>
          <div className="foot-col">
            <h5>Service areas</h5>
            <Link href={routes.contact}>United States</Link>
            <Link href={routes.contact}>United Kingdom</Link>
            <Link href={routes.contact}>Australia</Link>
          </div>
          <div className="foot-col">
            <h5>For agencies</h5>
            <Link href={routes.audit}>White-label Google Ads partner</Link>
            <Link href={routes.blog}>Writing</Link>
            <Link href={routes.about}>About me</Link>
          </div>
        </div>
        <div className="foot-bottom">© 2026 Abdul Kader, Google Ads for home service businesses. All rights reserved.</div>
      </div>
    </footer>
  );
}
