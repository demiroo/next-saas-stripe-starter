import { PlansRow, SubscriptionPlan } from "types";
import { env } from "@/env.mjs";

export const pricingData: SubscriptionPlan[] = [
  {
    title: "Basis",
    description: "Für Kleinunternehmen",
    benefits: [
      "5-seitige responsive Website",
      "Grundlegende SEO-Optimierung",
      "1 Blogbeitrag pro Monat",
      "Social-Media-Einrichtung",
      "Monatlicher Leistungsbericht",
      "Basis-Hosting inklusive",
      "SSL-Zertifikat",
      "1 .de-Domain inklusive",
    ],
    limitations: [
      "Begrenzte Design-Überarbeitungen",
      "Nur E-Mail-Support",
      "Keine E-Commerce-Funktionalität",
      "Keine Übersetzungen",
    ],
    prices: {
      monthly: 99,
      yearly: 1068, // 10% Rabatt für jährliche Zahlung
    },
    stripeIds: {
      monthly: null,
      yearly: null,
    },
  },
  {
    title: "Professional",
    description: "Für wachsende Unternehmen",
    benefits: [
      "10-seitige responsive Website",
      "Erweiterte SEO-Optimierung",
      "4 Blogbeiträge pro Monat",
      "Social-Media-Management",
      "Google Ads Kampagnen-Setup",
      "Wöchentliche Leistungsberichte",
      "2 Stunden Beratung pro Monat",
      "Premium-Hosting inklusive",
      "Wildcard SSL-Zertifikat",
      "2 Domains (.de und .com) inklusive",
      "Übersetzung in eine zusätzliche Sprache",
    ],
    limitations: [
      "Bis zu 3 Design-Überarbeitungen",
      "Basis-E-Commerce-Funktionalität (bis zu 50 Produkte)",
    ],
    prices: {
      monthly: 199,
      yearly: 2148, // 10% Rabatt für jährliche Zahlung
    },
    stripeIds: {
      monthly: env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PLAN_ID,
      yearly: env.NEXT_PUBLIC_STRIPE_PRO_YEARLY_PLAN_ID,
    },
  },
  {
    title: "Enterprise",
    description: "Für große Unternehmen",
    benefits: [
      "Individuelle Website mit unbegrenzten Seiten",
      "Umfassende SEO-Strategie",
      "8 Blogbeiträge pro Monat",
      "Vollständiges Social-Media-Management",
      "Erweiterte Google Ads Kampagnen",
      "Individuelles Reporting-Dashboard",
      "10 Stunden Beratung pro Monat",
      "Dedizierter Kundenbetreuer",
      "Enterprise-Hosting mit garantierter Uptime",
      "Extended Validation (EV) SSL-Zertifikat",
      "Bis zu 5 Domains inklusive",
      "Übersetzung in bis zu 3 zusätzliche Sprachen",
    ],
    limitations: [],
    prices: {
      monthly: 249,
      yearly: 2988, // 10% Rabatt für jährliche Zahlung
    },
    stripeIds: {
      monthly: env.NEXT_PUBLIC_STRIPE_BUSINESS_MONTHLY_PLAN_ID,
      yearly: env.NEXT_PUBLIC_STRIPE_BUSINESS_YEARLY_PLAN_ID,
    },
  },
];

export const plansColumns = [
  "basis",
  "professional",
  "enterprise",
] as const;

export const comparePlans: PlansRow[] = [
  {
    feature: "Responsive Webdesign",
    basis: "5 Seiten",
    professional: "10 Seiten",
    enterprise: "Unbegrenzt",
    tooltip: "Alle Pläne beinhalten mobilfreundliche, responsive Designs.",
  },
  {
    feature: "SEO-Optimierung",
    basis: "Grundlegend",
    professional: "Erweitert",
    enterprise: "Umfassend",
    tooltip: "SEO-Dienstleistungen verbessern sich mit höheren Tarifstufen.",
  },
  {
    feature: "Blogbeiträge",
    basis: "1/Monat",
    professional: "4/Monat",
    enterprise: "8/Monat",
    tooltip: "Regelmäßige Blogbeiträge helfen, SEO zu verbessern und Besucher zu binden.",
  },
  {
    feature: "Social-Media-Management",
    basis: "Nur Einrichtung",
    professional: "Basis-Management",
    enterprise: "Vollständiges Management",
    tooltip: "Höhere Pläne beinhalten umfassendere Social-Media-Dienste.",
  },
  {
    feature: "Google Ads",
    basis: null,
    professional: "Kampagnen-Setup",
    enterprise: "Erweiterte Kampagnen",
    tooltip: "Google Ads-Dienste sind in den Professional- und Enterprise-Plänen verfügbar.",
  },
  {
    feature: "Leistungsberichte",
    basis: "Monatlich",
    professional: "Wöchentlich",
    enterprise: "Individuelles Dashboard",
    tooltip: "Alle Pläne beinhalten Leistungsberichte, wobei Häufigkeit und Detail in höheren Stufen zunehmen.",
  },
  {
    feature: "Beratungsstunden",
    basis: null,
    professional: "2 Stunden/Monat",
    enterprise: "10 Stunden/Monat",
    tooltip: "Professional- und Enterprise-Pläne beinhalten monatliche Beratungsstunden.",
  },
  {
    feature: "E-Commerce-Funktionalität",
    basis: null,
    professional: "Bis zu 50 Produkte",
    enterprise: "Unbegrenzte Produkte",
    tooltip: "E-Commerce-Funktionen sind in den Professional- und Enterprise-Plänen verfügbar.",
  },
  {
    feature: "Hosting",
    basis: "Basis",
    professional: "Premium",
    enterprise: "Enterprise-Grad",
    tooltip: "Alle Pläne beinhalten Hosting, wobei höhere Stufen bessere Leistung und Sicherheit bieten.",
  },
  {
    feature: "SSL-Zertifikat",
    basis: "Standard",
    professional: "Wildcard",
    enterprise: "Extended Validation (EV)",
    tooltip: "Alle Pläne beinhalten SSL-Zertifikate für sichere Verbindungen.",
  },
  {
    feature: "Domains inklusive",
    basis: "1 (.de)",
    professional: "2 (.de und .com)",
    enterprise: "Bis zu 5",
    tooltip: "Höhere Pläne bieten mehr inklusive Domains für Ihre Online-Präsenz.",
  },
  {
    feature: "Übersetzungen",
    basis: null,
    professional: "1 zusätzliche Sprache",
    enterprise: "Bis zu 3 zusätzliche Sprachen",
    tooltip: "Mehrsprachige Website-Optionen sind in höheren Plänen verfügbar.",
  },
  {
    feature: "Support",
    basis: "E-Mail",
    professional: "E-Mail & Chat",
    enterprise: "24/7 Priorität",
    tooltip: "Support-Optionen verbessern sich mit höheren Tarifstufen.",
  },
  {
    feature: "Design-Überarbeitungen",
    basis: "Begrenzt",
    professional: "Bis zu 3",
    enterprise: "Unbegrenzt",
    tooltip: "Die Anzahl der Design-Überarbeitungsrunden steigt mit der Planebene.",
  },
];