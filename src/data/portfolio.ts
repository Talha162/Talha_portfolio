// Single source of truth for all portfolio content.
// Facts are sourced from Muhammad Talha's CV. Fields explicitly marked
// "Replace with actual content" are placeholders — nothing here is fabricated.

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface Profile {
  name: string;
  firstName: string;
  titles: string[];
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
  summary: string;
  availability: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0-100, illustrative proficiency
}

export interface SkillGroup {
  id: string;
  title: string;
  icon: string;
  skills: SkillItem[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  highlights: string[];
  tags: string[];
}

export interface ProjectLinks {
  github?: string;
  live?: string;
  store?: string;
  figma?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  period: string;
  company?: string;
  image: string;
  images?: string[];
  links: ProjectLinks;
  detail?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  year: string;
}

export interface LanguageItem {
  name: string;
  level: number;
  placeholder?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const nav: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const socials: SocialLink[] = [
  { label: "GitHub", url: "https://github.com/Talha162", icon: "Github" },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/muhammad-talha-42b1ab315/",
    icon: "Linkedin",
  },
  {
    label: "Upwork",
    url: "https://www.upwork.com/freelancers/~01cc31ee0bf4539212",
    icon: "Briefcase",
  },
  {
    label: "Fiverr",
    url: "https://www.fiverr.com/s/pdDljXY",
    icon: "ShoppingBag",
  },
  { label: "Email", url: "mailto:talha.cusit.pk@gmail.com", icon: "Mail" },
];

export const profile: Profile = {
  name: "Muhammad Talha",
  firstName: "Talha",
  titles: [
    "Flutter Developer & Mobile App Developer",
    "Mobile App Architect",
    "Cross-Platform Engineer",
  ],
  location: "Islamabad, Pakistan",
  email: "talha.cusit.pk@gmail.com",
  phone: "(+92) 302-5232179",
  linkedin: "https://www.linkedin.com/in/muhammad-talha-42b1ab315/",
  github: "https://github.com/Talha162",
  resumeUrl: "/Talha_CV.pdf",
  summary:
    "Flutter Developer with 3+ years of experience and 18+ cross-platform Android and iOS apps worked on across food delivery, healthcare, fintech, and construction domains, with multiple apps published on the Play Store and App Store. Specialized in scalable mobile architecture (Clean Architecture, Riverpod/GetX), real-time and offline-first systems, and payment integrations (Stripe, RevenueCat, Easypaisa). Proven track record integrating AI features (OpenAI, Gemini), Google Maps, and native SDKs, with end-to-end ownership from architecture to store release.",
  availability: "Available for new opportunities",
};

export const aboutSpecialties: string[] = [
  "Clean Architecture & scalable mobile app design",
  "Real-time & offline-first systems",
  "Payment gateway integrations (Stripe, RevenueCat, Easypaisa, JazzCash)",
  "AI feature integration (OpenAI, Gemini)",
  "Google Maps & native SDK integration",
  "End-to-end release ownership: store submission to production",
];

export const stats: StatItem[] = [
  { id: "experience", label: "Years Experience", value: 3, suffix: "+" },
  { id: "projects", label: "Projects Completed", value: 22, suffix: "+" },
  { id: "apps", label: "Apps Published", value: 8, suffix: "+" },
  { id: "companies", label: "Companies Worked", value: 2, suffix: "" },
];

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    title: "Languages",
    icon: "Code2",
    skills: [
      { name: "Dart", level: 96 },
      { name: "JavaScript", level: 75 },
      { name: "Python", level: 65 },
      { name: "C++", level: 55 },
      { name: "C#", level: 50 },
    ],
  },
  {
    id: "mobile",
    title: "Mobile Development",
    icon: "Smartphone",
    skills: [
      { name: "Flutter", level: 96 },
      { name: "Clean Architecture", level: 90 },
      { name: "MVVM / MVC", level: 88 },
      { name: "Feature-First Architecture", level: 85 },
      { name: "Play Store / App Store Deployment", level: 90 },
    ],
  },
  {
    id: "state",
    title: "State Management",
    icon: "GitBranch",
    skills: [
      { name: "Bloc", level: 85 },
      { name: "Riverpod", level: 88 },
      { name: "GetX", level: 90 },
      { name: "Provider", level: 82 },
    ],
  },
  {
    id: "backend",
    title: "Firebase & Supabase",
    icon: "Flame",
    skills: [
      { name: "Firebase Auth / Firestore", level: 92 },
      { name: "Realtime Database / Storage", level: 88 },
      { name: "Cloud Functions / FCM", level: 85 },
      { name: "Supabase (Auth, Postgres, RLS)", level: 80 },
      { name: "ML Kit", level: 70 },
    ],
  },
  {
    id: "apis",
    title: "Backend & APIs",
    icon: "Server",
    skills: [
      { name: "REST APIs", level: 92 },
      { name: "GraphQL APIs", level: 70 },
      { name: "FastAPI", level: 60 },
      { name: "Backend Integration", level: 88 },
    ],
  },
  {
    id: "integrations",
    title: "Features & Integrations",
    icon: "Puzzle",
    skills: [
      { name: "Google Maps Integration", level: 90 },
      { name: "Stripe / Easypaisa / JazzCash", level: 85 },
      { name: "OpenAI / Gemini API", level: 82 },
      { name: "Push Notifications & Chat", level: 88 },
      { name: "Offline-First Workflows", level: 84 },
    ],
  },
  {
    id: "tools",
    title: "Tools & CI/CD",
    icon: "Wrench",
    skills: [
      { name: "Git / GitHub", level: 92 },
      { name: "GitHub Actions (CI/CD)", level: 85 },
      { name: "Codemagic / Bitrise / Fastlane", level: 78 },
      { name: "Postman / Swagger", level: 85 },
    ],
  },
  {
    id: "deployment",
    title: "Deployment",
    icon: "Rocket",
    skills: [
      { name: "Google Play Console", level: 90 },
      { name: "App Store Connect", level: 86 },
      { name: "TestFlight", level: 86 },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: "infinity",
    role: "Flutter Developer",
    company: "Infinity Softwares Company",
    location: "Islamabad",
    period: "Sep 2025 — Present",
    type: "Full-time",
    highlights: [
      "Lead development and maintenance of production Flutter apps for Android and iOS using Clean Architecture across multiple client products.",
      "Architected real-time chat, push notifications, Google Maps, Stripe/RevenueCat payments, PDF annotation (PDFTron), and offline-first sync features.",
      "Integrated AI-powered features (OpenAI and Gemini APIs) including diagnostic summaries and in-app assistants, reducing manual workflows for end users.",
      "Own the full release pipeline: CI/CD (GitHub Actions), TestFlight beta cycles, Play Console and App Store Connect submissions.",
      "Collaborate with designers, backend engineers, and QA in agile sprints, reviewing code and mentoring junior developers.",
    ],
    tags: [
      "Flutter",
      "Clean Architecture",
      "Stripe",
      "RevenueCat",
      "PDFTron",
      "OpenAI",
      "Gemini",
      "CI/CD",
    ],
  },
  {
    id: "nexum",
    role: "Flutter Developer",
    company: "Nexum Technologies",
    location: "Peshawar",
    period: "Feb 2023 — Sep 2025",
    type: "Full-time",
    highlights: [
      "Delivered 8+ cross-platform Flutter applications across food delivery, education, fintech, and management domains, from requirements to store release.",
      "Built real-time order tracking with Google Maps and live location sharing for two production food-delivery platforms.",
      "Implemented secure authentication, role-based access control, Stripe payments, and Firebase Cloud Functions for production apps.",
    ],
    tags: [
      "Flutter",
      "Firebase",
      "Google Maps",
      "Stripe",
      "Cloud Functions",
      "RBAC",
    ],
  },
];

export const education: EducationItem[] = [
  {
    id: "mscs",
    degree: "MS in Computer Science (MSCS)",
    institution: "National University of Computer & Emerging Sciences (FAST-NUCES)",
    location: "Islamabad",
    period: "2025 — Present",
  },
  {
    id: "bscs",
    degree: "BS in Computer Science",
    institution: "City University of Science & IT",
    location: "Peshawar",
    period: "2021 — 2025",
  },
];

export const certifications: CertificationItem[] = [
  {
    id: "meta-android",
    name: "Meta Android Developer Professional Certificate",
    issuer: "Coursera",
    year: "2023",
  },
  {
    id: "flutter-bootcamp",
    name: "The Complete Flutter Development Bootcamp with Dart",
    issuer: "Udemy",
    year: "2023",
  },
  {
    id: "google-flutter",
    name: "Google Flutter Development Certification",
    issuer: "Google",
    year: "2023",
  },
  {
    id: "python-ds",
    name: "Python for Data Science, AI & Development",
    issuer: "Coursera",
    year: "2022",
  },
  {
    id: "web-dev",
    name: "HTML, CSS, and Javascript for Web Developers",
    issuer: "Coursera",
    year: "2022",
  },
];

export const languages: LanguageItem[] = [
  { name: "Urdu (Native)", level: 100 },
  { name: "Pashto (Native / Mother Tongue)", level: 100 },
  { name: "English (Professional)", level: 85 },
];

export const services: ServiceItem[] = [
  {
    id: "mobile-apps",
    title: "Mobile Application Development",
    description:
      "End-to-end Android and iOS app development — architecture, UI, and store-ready release, for general mobile products as well as Flutter-specific builds.",
    icon: "Smartphone",
  },
  {
    id: "flutter-dev",
    title: "Flutter App Development",
    description:
      "Cross-platform Flutter development using Clean Architecture and modern state management (Riverpod, GetX, Bloc, Provider).",
    icon: "Code2",
  },
  {
    id: "backend-integration",
    title: "Firebase / Supabase Backend Integration",
    description:
      "Authentication, real-time data, storage, and serverless functions wired into production-ready mobile apps.",
    icon: "Database",
  },
  {
    id: "payments",
    title: "Payment Gateway Integration",
    description:
      "Stripe, RevenueCat, Easypaisa, and JazzCash integrations for subscriptions, one-off payments, and in-app purchases.",
    icon: "CreditCard",
  },
  {
    id: "ai-features",
    title: "AI Feature Integration",
    description:
      "OpenAI and Gemini-powered in-app assistants, diagnostic summaries, and intelligent workflows.",
    icon: "Sparkles",
  },
  {
    id: "release-management",
    title: "App Store / Play Store Release Management",
    description:
      "Full release pipeline ownership — CI/CD, TestFlight betas, and store submissions on Play Console and App Store Connect.",
    icon: "Rocket",
  },
];

export const projects: Project[] = [
  {
    id: "manifesto",
    title: "Manifesto MD",
    description:
      "Clinical reference and decision support app built for healthcare professionals. Features Firebase Auth, Firestore, Storage, and push notifications. Integrated AI-assisted diagnostic summaries and subscription workflows with RevenueCat. Managed full release cycle through Google Play Console, TestFlight, and App Store Connect.",
    tech: ["Flutter", "Firebase", "RevenueCat", "AI Diagnostics", "Push Notifications"],
    period: "Nov 2025 - Present",
    company: "Infinity Softwares",
    image: "/images/project-manifesto.png",
    links: {
      store:
        "https://play.google.com/store/apps/details?id=com.raitime.manifestomd&pcampaignid=web_share",
    },
    detail:
      "Notable technical detail: AI-assisted diagnostic summaries are layered on top of a Firebase-backed clinical reference dataset, with RevenueCat managing subscription entitlements across platforms.",
  },
  {
    id: "chassis",
    title: "Chassis Doctor",
    description:
      "Motorsport setup diagnostics app that helps drivers and engineers analyse chassis behaviour. Built on Supabase with Gemini AI-powered setup recommendations and PDF report generation. Bundled with a structured setup learning hub of courses and TestFlight-based testing cycles.",
    tech: ["Flutter", "Supabase", "Gemini AI", "PDF Reports", "Learning Hub"],
    period: "Oct 2025 - Present",
    company: "Infinity Softwares",
    image: "/images/project-chassis.png",
    links: {
      store: "https://apps.apple.com/us/app/chassis-doctor/id6752336932",
      figma:
        "https://www.figma.com/design/yV6nTZizB8HmBqFA7g05HI/Motorsport?node-id=0-1&p=f&t=Tc0YSu0BilCdPCFn-0",
    },
    detail:
      "Notable technical detail: Gemini AI analyses chassis setup inputs to generate recommendations and exportable PDF reports, paired with a course-based learning hub for driver education.",
  },
  {
    id: "docusite",
    title: "DocuSite",
    description:
      "Cloud-synced field documentation system for construction teams, built around the native PDFTron SDK for PDF annotation, markup, and structured report generation. Uses GetX state management with role-based access, push notifications, and TestFlight distribution for iOS.",
    tech: ["Flutter", "GetX", "PDFTron SDK", "Cloud Sync", "Push Notifications"],
    period: "Sep 2025 - Dec 2025",
    company: "Infinity Softwares",
    image: "/images/project-docusite.png",
    links: {
      figma:
        "https://www.figma.com/design/wClnvm5cCURaJeIMNQnWPG/DocuSite?node-id=1-3&p=f&t=eTYQ2ni1JkAzAyvr-0",
    },
    detail:
      "Notable technical detail: native PDFTron SDK integration enables in-field PDF markup and annotation with cloud sync so reports stay consistent across role-based user types.",
  },
  {
    id: "committee",
    title: "Committee App",
    description:
      "Monthly savings committee management system with fully separated admin and member workflows. Admins create committees, assign payout orders, and track payments via Stripe and Firebase Cloud Functions. Members receive real-time push notifications for payment reminders and payout confirmations.",
    tech: ["Flutter", "Firebase", "Stripe", "Cloud Functions", "Push Notifications"],
    period: "Jun 2024 - Jul 2025",
    company: "Nexum Technologies",
    image: "/images/project-committee.png",
    images: [
      "/images/project-committee.png",
      "/images/projects/committee/splash.png",
      "/images/projects/committee/login.png",
      "/images/projects/committee/signup.png",
      "/images/projects/committee/home.png",
      "/images/projects/committee/admin_auth.png",
      "/images/projects/committee/admin_committees_screen.png",
      "/images/projects/committee/admin_creating_committee.png",
      "/images/projects/committee/admin_committees_details.png",
      "/images/projects/committee/admin_selecting members_for_payout_order.png",
      "/images/projects/committee/committee_details page.png",
      "/images/projects/committee/payment_screen.png",
      "/images/projects/committee/notification_screen.png",
      "/images/projects/committee/notification_setup.png",
      "/images/projects/committee/menu_widget.png",
      "/images/projects/committee/profile1.png",
      "/images/projects/committee/profile2.png",
      "/images/projects/committee/about_us.png",
    ],
    links: {},
    detail:
      "Notable technical detail: payout order assignment and Stripe-backed payment tracking are fully separated between admin and member roles, with Cloud Functions driving real-time reminder notifications.",
  },
  {
    id: "farmer",
    title: "Greek Farmer Market",
    description:
      "Dual-role marketplace connecting Greek consumers with local farm producers, supporting in-app browsing, ordering, and Stripe-powered checkout. Built with GetX and flutter_map for producer discovery, REST APIs for catalogue and orders, and get_storage for lightweight local persistence.",
    tech: ["Flutter", "GetX", "Stripe", "flutter_map", "REST APIs"],
    period: "2023 - 2024",
    image: "/images/project-farmer.png",
    links: {
      store:
        "https://play.google.com/store/apps/details?id=com.greekfarmersmarket.app&pcampaignid=web_share",
      figma:
        "https://www.figma.com/design/OXedVCPQzCUEI0GN96DWAt/farmer?node-id=0-1&p=f&t=FDgzXZepIqJSHWIr-0",
    },
    detail:
      "Notable technical detail: flutter_map drives producer discovery for a dual-role (consumer/producer) marketplace, with Stripe handling checkout and get_storage for local persistence.",
  },
  {
    id: "cricket",
    title: "Ball-by-Ball Cricket Scoring",
    description:
      "Real-time cricket scoring app supporting full match and tournament management. Built with Flutter, Firebase, and GetX following MVC architecture. Features live ball-by-ball scoring, scorecard views, player and team stats, group chat, push notifications, and an AI chatbot for cricket rules — developed as a final year project.",
    tech: ["Flutter", "Firebase", "GetX", "MVC", "AI Chatbot", "Real-Time"],
    period: "Aug 2024 - Jul 2025",
    image: "/images/project-cricket.png",
    images: [
      "/images/project-cricket.png",
      "/images/projects/cricket/splash.png",
      "/images/projects/cricket/login.png",
      "/images/projects/cricket/home.png",
      "/images/projects/cricket/matches page.png",
      "/images/projects/cricket/ongoing match 2.png",
      "/images/projects/cricket/completed match scorecard.png",
      "/images/projects/cricket/tournament batting performers.png",
      "/images/projects/cricket/my tournaments page.png",
      "/images/projects/cricket/chatbot.png",
      "/images/projects/cricket/profile.png",
    ],
    links: {},
    detail:
      "Notable technical detail: live ball-by-ball scoring syncs in real time across match and tournament views, with an AI chatbot layered in for rules queries during play.",
  },
  {
    id: "afghflavor",
    title: "AfghanFlavor",
    description:
      "Full-featured food delivery platform with real-time order tracking via Google Maps. Implements separate customer, rider, and restaurant-facing flows using Firebase and MVC architecture. Customers browse restaurants, place orders, and track delivery live; riders receive optimised routes; restaurants manage menus and incoming orders.",
    tech: ["Flutter", "Firebase", "Google Maps", "MVC", "Real-Time Tracking"],
    period: "Mar 2023 - Sep 2024",
    company: "Nexum Technologies",
    image: "/images/project-afghflavor.png",
    images: [
      "/images/project-afghflavor.png",
      "/images/projects/afghflavor/unnamed.webp",
      "/images/projects/afghflavor/unnamed (1).webp",
      "/images/projects/afghflavor/unnamed (2).webp",
      "/images/projects/afghflavor/unnamed (3).webp",
      "/images/projects/afghflavor/unnamed (4).webp",
      "/images/projects/afghflavor/unnamed (5).webp",
      "/images/projects/afghflavor/unnamed (6).webp",
      "/images/projects/afghflavor/unnamed (7).webp",
      "/images/projects/afghflavor/unnamed (8).webp",
      "/images/projects/afghflavor/unnamed (9).webp",
    ],
    links: {
      store:
        "https://play.google.com/store/apps/details?id=com.afghanflavors.app&pcampaignid=web_share",
    },
    detail:
      "Notable technical detail: three distinct app flows (customer, rider, restaurant) share a Firebase backend, with Google Maps driving live delivery tracking and route guidance.",
  },
  {
    id: "durshalta",
    title: "Durshalta",
    description:
      "Multi-vendor food and service delivery app published on both iOS and Android. Built with Firebase, MVC, and Google Maps for live location sharing between customers and riders. Features dual customer/rider interfaces, real-time order management, push notifications, and photo-based delivery verification.",
    tech: ["Flutter", "Firebase", "Google Maps", "MVC", "iOS & Android"],
    period: "Mar 2023 - Sep 2024",
    company: "Nexum Technologies",
    image: "/images/project-durshalta.png",
    images: [
      "/images/project-durshalta.png",
      "/images/projects/durshalta/300x650bb.webp",
      "/images/projects/durshalta/300x650bb (1).webp",
      "/images/projects/durshalta/300x650bb (2).webp",
      "/images/projects/durshalta/300x650bb (3).webp",
      "/images/projects/durshalta/300x650bb (4).webp",
      "/images/projects/durshalta/300x650bb (5).webp",
      "/images/projects/durshalta/300x650bb (6).webp",
    ],
    links: { store: "https://apps.apple.com/pk/app/durshalta/id6503061159" },
    detail:
      "Notable technical detail: photo-based delivery verification and live location sharing run over the same Google Maps integration used for dual customer/rider order flows.",
  },
  {
    id: "amz",
    title: "AMZ Language Learning",
    description:
      "Structured language learning app with lesson-based content, video lessons, and interactive quizzes. Integrates REST APIs for dynamic content delivery and tracks learner progress. Clean, intuitive UI designed to keep learners engaged through a progressive curriculum.",
    tech: ["Flutter", "REST APIs", "Video Lessons", "Quiz Engine"],
    period: "May 2025 - Jul 2025",
    company: "Nexum Technologies",
    image: "/images/project-amz.png",
    links: {
      figma:
        "https://www.figma.com/design/6ty8ERmhAsDaYz2ir4tpRB/AMZ-App?node-id=0-1&p=f&t=e3kK9rDaB5fMPryL-0",
    },
    detail:
      "Notable technical detail: progress tracking is layered across a lesson/quiz curriculum backed by REST content delivery, keeping the learning path dynamic without app updates.",
  },
  {
    id: "vantage",
    title: "VANE",
    description:
      "AI-powered social media content creation and scheduling SaaS that coordinates multi-platform posts from a single content calendar. Includes OTP-based auth, post analytics, and a 15-screen MVP scope built with Riverpod and GoRouter on a Feature-First architecture.",
    tech: ["Flutter", "Riverpod", "GoRouter", "Feature-First", "REST APIs"],
    period: "Feb 2025 - Apr 2025",
    image: "/images/project-vantage.png",
    links: {},
    detail:
      "Notable technical detail: a single content calendar coordinates multi-platform post scheduling, with Riverpod and GoRouter structuring the 15-screen MVP on a Feature-First architecture.",
  },
  {
    id: "kinvo",
    title: "Kinvo",
    description:
      "Date-and-discover app with card-based swipe discovery, real-time chat, video calls, and selectable discovery modes. Built across 31 screens on a Feature-First architecture with Riverpod state management.",
    tech: ["Flutter", "Riverpod", "Feature-First", "Real-Time Chat", "Video Calls"],
    period: "Oct 2024 - Feb 2025",
    image: "/images/project-kinvo.png",
    links: {},
    detail:
      "Notable technical detail: swipe-based discovery, real-time chat, and video calls are unified across 31 screens under a single Feature-First, Riverpod-driven architecture.",
  },
  {
    id: "makeithappen",
    title: "Make It Happen",
    description:
      "Mentorship and event platform spanning 47 screens with multi-step onboarding, event discovery and booking via payment webview, mentorship session scheduling, and lesson-based learning paths. Released on both iOS and Android with REST-backed content and Lottie-driven UI.",
    tech: ["Flutter", "GetX", "REST APIs", "Lottie", "Payment Webview"],
    period: "Aug 2024 - Jan 2025",
    image: "/images/project-makeithappen.png",
    links: {},
    detail:
      "Notable technical detail: event booking runs through a payment webview while mentorship scheduling and learning paths share the same REST-backed content layer across 47 screens.",
  },
  {
    id: "seshbuilder",
    title: "Sesh Builder",
    description:
      "Sports session and match scheduling app that lets users host or join local matches. Players create profiles, browse nearby sessions, and manage their created and joined matches. Designed for casual sports communities looking to organise informal games quickly.",
    tech: ["Flutter", "Firebase", "GetX", "Location Services"],
    period: "2023 - 2024",
    image: "/images/project-seshbuilder.png",
    images: [
      "/images/project-seshbuilder.png",
      "/images/projects/seshbuilder/splash.png",
      "/images/projects/seshbuilder/signin.png",
      "/images/projects/seshbuilder/signup.png",
      "/images/projects/seshbuilder/home.png",
      "/images/projects/seshbuilder/host match.png",
      "/images/projects/seshbuilder/join match.png",
      "/images/projects/seshbuilder/your created matches.png",
      "/images/projects/seshbuilder/your joined matches.png",
      "/images/projects/seshbuilder/profile.png",
    ],
    links: {
      figma:
        "https://www.figma.com/design/ylDjVuu9ynmopqg45aHdIn/Sports-App?node-id=0-1&p=f&t=5GYItniPg7q7x0Oh-0",
    },
    detail:
      "Notable technical detail: location services power nearby-session discovery, while a lightweight hosting/joining flow keeps casual match organisation frictionless.",
  },
  {
    id: "asthma",
    title: "Asthma Weather Alert App",
    description:
      "Health utility app that monitors weather conditions and issues personalised asthma risk alerts. Integrates a weather API to display 6-day forecasts and correlates environmental factors (pollen, humidity, air quality) with asthma risk levels. Includes an AI chatbot for symptom guidance, profile management, and admin panel.",
    tech: ["Flutter", "Firebase", "Weather API", "AI Chatbot", "Push Notifications"],
    period: "2023 - 2024",
    image: "/images/project-asthma.png",
    images: [
      "/images/project-asthma.png",
      "/images/projects/asthma/splash.png",
      "/images/projects/asthma/login.png",
      "/images/projects/asthma/home.png",
      "/images/projects/asthma/6 days forcast.png",
      "/images/projects/asthma/weather report.png",
      "/images/projects/asthma/notifications.png",
      "/images/projects/asthma/chatboat.png",
      "/images/projects/asthma/profile.png",
      "/images/projects/asthma/admin.png",
    ],
    links: {},
    detail:
      "Notable technical detail: environmental factors (pollen, humidity, air quality) are correlated against weather API forecasts to compute personalised asthma risk alerts.",
  },
  {
    id: "gamegrid",
    title: "Game Grid",
    description:
      "Gaming discovery app that lets users browse, explore, and review games across categories. Features detailed game pages with PC/console specs, player reviews, and statistical analysis. Users can search by genre, view community ratings, and maintain their personal game library.",
    tech: ["Flutter", "REST APIs", "Firebase", "GetX"],
    period: "2023 - 2024",
    image: "/images/project-gamegrid.png",
    images: [
      "/images/project-gamegrid.png",
      "/images/projects/gamegrid/splash.png",
      "/images/projects/gamegrid/login.png",
      "/images/projects/gamegrid/signup.png",
      "/images/projects/gamegrid/home.png",
      "/images/projects/gamegrid/games in one category.png",
      "/images/projects/gamegrid/single game info.png",
      "/images/projects/gamegrid/PC specs.png",
      "/images/projects/gamegrid/player reviews.png",
      "/images/projects/gamegrid/statistical analysis.png",
      "/images/projects/gamegrid/menue.png",
      "/images/projects/gamegrid/fogot pass.png",
      "/images/projects/gamegrid/about us.png",
    ],
    links: {},
    detail:
      "Notable technical detail: genre search, community ratings, and a personal game library are all layered on top of a REST-backed game catalogue with Firebase-driven user data.",
  },
  {
    id: "dryneedling",
    title: "Dry Needling Reference",
    description:
      "Medical reference app designed for physiotherapists and dry needling practitioners. Provides a structured anatomical guide organised by body regions and muscles, with detailed muscle descriptions and dry needling point references. Includes an AI chatbot for clinical queries and secure login for practitioners.",
    tech: ["Flutter", "Firebase", "AI Chatbot", "Medical Reference"],
    period: "2023 - 2024",
    image: "/images/project-dryneedling.png",
    images: [
      "/images/project-dryneedling.png",
      "/images/projects/dryneedling/login.png",
      "/images/projects/dryneedling/home.png",
      "/images/projects/dryneedling/regions.png",
      "/images/projects/dryneedling/muscles in a region.png",
      "/images/projects/dryneedling/muscle detail.png",
      "/images/projects/dryneedling/chatboat.png",
    ],
    links: {},
    detail:
      "Notable technical detail: an anatomical guide organised by body region feeds a dry needling point reference, paired with an AI chatbot for clinical query support.",
  },
  {
    id: "onlynoodle",
    title: "Only Noodle",
    description:
      "UI prototype for a noodle-focused food ordering experience with a clean, appetising visual language. Customers browse a curated menu, customise orders, and move through a streamlined checkout flow, with Syncfusion charts visualising menu insights.",
    tech: ["Flutter", "GetX", "REST APIs", "Syncfusion Charts"],
    period: "2023 - 2024",
    image: "/images/project-onlynoodle.png",
    links: {
      figma:
        "https://www.figma.com/design/jnEEnEKAxRzliUOOZqpLBg/Only-Noodle?node-id=1-3&p=f&t=6WqBudJJkEhMMZs7-0",
    },
    detail:
      "Notable technical detail: Syncfusion charts surface menu insights alongside a streamlined browse-customise-checkout flow.",
  },
  {
    id: "passionport",
    title: "Passionport",
    description:
      "Social networking app connecting people through shared passions, featuring peer-to-peer video calls via the HMS SDK and real-time chat over Socket.io. Users build interest-based profiles, edit media in-app, and interact through activity feeds and direct messaging.",
    tech: ["Flutter", "HMS SDK", "Socket.io", "Video Calls", "Media Editing"],
    period: "2023 - 2024",
    image: "/images/project-passionport.png",
    links: {
      figma:
        "https://www.figma.com/design/7NqyGoXTfJlcNmzy1NBA3H/Social-App?node-id=56-2432&p=f&t=rSMNv4ynYwNpoQkD-0",
    },
    detail:
      "Notable technical detail: peer-to-peer video calls run on the HMS SDK while real-time chat is handled separately over Socket.io, unified by interest-based profiles.",
  },
  {
    id: "ussoccer",
    title: "Sports App",
    description:
      "Player-centric sports app covering team rosters, match scheduling, and personalised player profiles. Built with Flutter and Provider as a UI-fidelity prototype focused on screen-flow validation and clean player/match interactions.",
    tech: ["Flutter", "Provider", "Player Stats", "Match Scheduling"],
    period: "2023 - 2024",
    image: "/images/project-ussoccer.png",
    links: {
      figma:
        "https://www.figma.com/design/N3NFyQDYdLsmlgGNS4IgIB/edwardb-project?node-id=4-2&p=f&t=lPPpJPiRZimKeHx2-0",
    },
    detail:
      "Notable technical detail: built as a UI-fidelity prototype validating screen flow between team rosters, match scheduling, and player profile interactions.",
  },
  {
    id: "retroflyy",
    title: "RetroFlyy",
    description:
      "UI mockup for a retro-inspired travel discovery experience. Showcases destination browsing, curated travel packages, and a booking flow rendered from hardcoded data — designed primarily as a design-fidelity prototype.",
    tech: ["Flutter", "GetX", "Google Fonts", "UI Prototype"],
    period: "2023 - 2024",
    image: "/images/project-retroflyy.png",
    links: {
      figma:
        "https://www.figma.com/design/ZCfLV3eragEeI2oPPryr3B/RetroFlyy?node-id=0-1&p=f&t=GSoo3akPkxg1CCVY-0",
    },
    detail:
      "Notable technical detail: a design-fidelity prototype rendering destination browsing and booking flows from hardcoded data, focused purely on visual polish.",
  },
  {
    id: "fleetmgmt",
    title: "Fleet Management App",
    description:
      "Vehicle fleet tracking and management solution for logistics companies with real-time GPS tracking, route optimisation, and trip history. Features on-device OCR for driver document verification via Firebase ML Kit and Google ML Kit, with role-based access for fleet managers, dispatchers, and drivers.",
    tech: ["Flutter", "Firebase", "Google Maps", "ML Kit OCR", "Role-Based Access"],
    period: "2023 - 2024",
    image: "/images/project-fleetmgmt.png",
    links: {
      figma:
        "https://www.figma.com/design/C9NgjBIwlOluV0tcPk0Ykf/Fleet-Management-App?node-id=0-1&p=f&t=Jbi7E0t9j7uVPyxK-0",
    },
    detail:
      "Notable technical detail: on-device OCR (Firebase ML Kit + Google ML Kit) verifies driver documents, layered under role-based access for managers, dispatchers, and drivers.",
  },
  {
    id: "educationalapp",
    title: "Educational Platform",
    description:
      "E-learning platform app with structured courses, video lessons, quizzes, and learner progress tracking. Students can enrol in courses, watch video content, complete module quizzes, and track their learning journey. Instructors can manage course content through an admin interface.",
    tech: ["Flutter", "Firebase", "REST APIs", "Video Streaming", "E-Learning"],
    period: "2023 - 2024",
    image: "/images/project-educationalapp.png",
    links: {
      figma:
        "https://www.figma.com/design/NyGcFld64xEas1DXHgNorA/Educational-App?node-id=0-1&p=f&t=2iiBJyr5TD6UBK6G-0",
    },
    detail:
      "Notable technical detail: an instructor-facing admin interface manages the same course/quiz content model that drives the student enrolment and progress-tracking experience.",
  },
];
