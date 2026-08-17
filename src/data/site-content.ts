import {
  AlertTriangle,
  BarChart3,
  Calendar,
  Clock,
  Filter,
  Info,
  Link as LinkIcon,
  Mail,
  MapPin,
  MessageCircle,
  MousePointerClick,
  PhoneCall,
  Search,
  Settings2,
  Target
} from "lucide-react";
import { routes } from "@/lib/routes";

export const navItems = [
  { label: "Portfolio", href: routes.portfolio },
  { label: "Services", href: routes.services },
  { label: "About", href: routes.about },
  { label: "Blog", href: routes.blog }
];

export const trades = [
  "Plumbing",
  "HVAC",
  "Roofing",
  "Electrical",
  "Pest control",
  "Cleaning",
  "Landscaping",
  "Garage doors",
  "Restoration"
];

export const methodSteps = [
  {
    title: "Structure by service and area",
    body: "Campaigns are separated around the jobs you actually want and the places you actually serve."
  },
  {
    title: "Cut the searches that waste money",
    body: "Search terms are reviewed every week so budget stops leaking into price shoppers and wrong-fit work."
  },
  {
    title: "Track every call and form",
    body: "Phone calls, forms and WhatsApp leads are measured against real conversations, not button clicks."
  },
  {
    title: "Optimize against booked jobs",
    body: "Spend moves toward the searches, services and areas that turn into revenue."
  }
];

export const processSteps = [
  {
    number: "01",
    title: "Free audit",
    body: "I go through your account, or your competitors' ads if you're not running any yet, and send back what's working, what's wasting money and what I'd change first.",
    time: "Back in 48 hours"
  },
  {
    number: "02",
    title: "Build and launch",
    body: "Campaigns structured by service and area, tracking installed, landing pages checked before a dollar of new spend goes live.",
    time: "1-2 weeks"
  },
  {
    number: "03",
    title: "Weekly optimization",
    body: "Every week I look at booked jobs, not clicks, and adjust. You get a plain-English update, not a PDF.",
    time: "Ongoing"
  }
];

export const faqGroups = [
  {
    title: "Money & commitment",
    items: [
      ["What does it cost?", "Management is a flat monthly fee agreed after your free audit. No percentage of spend, so my fee doesn't go up just because your budget does. You'll know the number before you commit to anything."],
      ["What ad budget do I need?", "It depends on your trade and how competitive your city is. Most home service accounts need enough spend to buy a meaningful number of clicks per week, and your free audit gives you a real number for your area instead of a guess."],
      ["Is there a contract?", "No long-term contract. Month to month, cancel with 30 days' notice. If the work isn't paying for itself, you shouldn't be locked in."],
      ["Who owns the ad account?", "You do. It's built in your own Google Ads account under your billing, and the tracking lives in your GA4 and GTM."],
      ["Do you guarantee a number of leads?", "No, and be careful with anyone who does. What I commit to is the process: tracking installed before spend, weekly optimization against booked jobs, and honest reporting."]
    ]
  },
  {
    title: "Results & timing",
    items: [
      ["How fast do I see calls?", "Most accounts start getting calls within the first 1-2 weeks of going live. The first 30-60 days are where cost per lead usually drops as wasteful searches get cut."],
      ["My last agency reported great numbers but the phone didn't ring. Why?", "Usually because conversions were counting the wrong things: duplicate form fills, spam submissions, short calls and button clicks."],
      ["I get a lot of tyre-kickers. Can ads fix that?", "Yes. That's usually a targeting and messaging problem, not a lead volume problem."],
      ["My work is seasonal. Does that break this?", "No. Budgets shift with demand: heavier in peak months, leaner off-season with the campaigns that still convert kept running."],
      ["What about competitors clicking my ads?", "Google filters most invalid clicks automatically. Beyond that, I monitor for unusual patterns and exclude sources that look wrong."]
    ]
  },
  {
    title: "How we work together",
    items: [
      ["Do I need a website first?", "You need somewhere for the click to land. A full site rebuild isn't required; often a single fast, phone-first landing page works better."],
      ["Should I run Local Services Ads or Search Ads?", "Usually both, for different jobs. The mix depends on your trade and market."],
      ["How do you track calls without annoying my customers?", "A tracking number forwards straight to your existing line. Nothing changes for the caller or your team."],
      ["You're not in my country, how does that work?", "I work US, UK and Australian hours on a set schedule and respond within one business day."],
      ["How often will I hear from you?", "A short plain-English update every week, plus a call whenever you want one."],
      ["Why you instead of an agency?", "No account manager layer. I build, run and optimize your account myself, every week."]
    ]
  }
];

export const categories = ["All", "Google Ads", "Tracking", "Local SEO", "Landing pages"];

export const categoryToSlug = (category: string) => category.toLowerCase().replace(/\s+/g, "-");

export const blogPosts = [
  {
    slug: "why-your-leads-are-lying-to-you",
    title: "Why your Google Ads “leads” are lying to you",
    shortTitle: "Why your “leads” are lying to you",
    excerpt: "The gap between reported leads and booked jobs, and how to close it.",
    description:
      "Reported conversions and booked jobs are rarely the same number. Here is how the gap opens up in home service accounts, and the tracking rebuild that closes it.",
    category: "Tracking",
    date: "2026-07-02",
    displayDate: "Jul 02, 2026",
    updated: "2026-07-14",
    readTime: "7 min read",
    icon: PhoneCall
  },
  {
    slug: "searches-i-block-on-every-trade-account",
    title: "The searches I block on every trade account",
    shortTitle: "The searches I block on every trade account",
    excerpt: "They look relevant. They burn budget anyway.",
    description: "Search terms that quietly waste spend in home service Google Ads accounts.",
    category: "Google Ads",
    date: "2026-06-14",
    displayDate: "Jun 14, 2026",
    updated: null,
    readTime: "5 min read",
    icon: Filter,
    draftOnly: true
  },
  {
    slug: "what-a-missed-call-actually-costs-you",
    title: "What a missed call actually costs you",
    shortTitle: "What a missed call actually costs you",
    excerpt: "A simple way to put a number on the tracking you don't have yet.",
    description: "How missed calls quietly change the economics of a home service ad account.",
    category: "Landing pages",
    date: "2026-05-28",
    displayDate: "May 28, 2026",
    updated: null,
    readTime: "4 min read",
    icon: MousePointerClick,
    draftOnly: true
  },
  {
    slug: "service-area-targeting-that-doesnt-waste-half-your-budget",
    title: "Service area targeting that doesn't waste half your budget",
    shortTitle: "Service area targeting that doesn't waste half your budget",
    excerpt: "Radius targeting is the default. It's rarely the right one.",
    description: "A practical note on location targeting for local home service campaigns.",
    category: "Local SEO",
    date: "2026-05-09",
    displayDate: "May 09, 2026",
    updated: null,
    readTime: "5 min read",
    icon: MapPin,
    draftOnly: true
  }
];

export const articleSections = [
  { id: "gap", title: "The gap nobody shows you" },
  { id: "counts", title: "What gets counted as a lead" },
  { id: "audit", title: "Auditing your own conversions" },
  { id: "rebuild", title: "The rebuild, step by step" },
  { id: "after", title: "What changes after" }
];

export const icons = {
  AlertTriangle,
  BarChart3,
  Calendar,
  Clock,
  Info,
  LinkIcon,
  Mail,
  MessageCircle,
  PhoneCall,
  Search,
  Settings2,
  Target
};
