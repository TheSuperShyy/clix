import {
  Phone,
  MessageSquare,
  Truck,
  Stethoscope,
  Clapperboard,
  Cable,
  type LucideIcon,
} from "lucide-react";

export type FeatureItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const FEATURES: FeatureItem[] = [
  {
    title: "סוכני קול AI",
    description:
      "בוטים קוליים שיחתיים שעונים לטלפון ויוזמים שיחות במעל 30 שפות, בקצב שיחה אנושי לחלוטין.",
    icon: Phone,
  },
  {
    title: "בוטים לסינון לידים",
    description:
      "סוכנים ב-WhatsApp וב-Instagram שמסננים לידים נכנסים, ומתאמים ביומן רק את אלה שעברו סינון.",
    icon: MessageSquare,
  },
  {
    title: "אוטומציה ללוגיסטיקה",
    description:
      "איסוף חשבוניות מהמייל, סנכרון מסלולים יומי והתאמת קילומטראז' — ללא מגע יד אדם.",
    icon: Truck,
  },
  {
    title: "קליטת מטופלים בבריאות וטיפולים",
    description:
      "ניהול פניות וסוכני קליטה ששואלים את שאלות ההמשך הנכונות ומנתבים מקרים לפי דחיפות.",
    icon: Stethoscope,
  },
  {
    title: "מפעל תוכן",
    description:
      "תהליכים אוטומטיים שהופכים רעיון אחד לפוסטים יומיים ב-LinkedIn, Facebook ו-Instagram.",
    icon: Clapperboard,
  },
  {
    title: "אינטגרציות מותאמות",
    description:
      "Salesforce, HubSpot, Monday, ClickUp, Slack — וגם גשרי API לכלים שבדרך כלל לא יודעים לתקשר עם AI.",
    icon: Cable,
  },
];
