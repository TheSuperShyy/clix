import {
  ShieldCheck,
  Code2,
  Link2,
  MessageCircleOff,
  TrendingUp,
  Cpu,
} from "lucide-react";
import type { BenefitItem } from "@/components/benefits-carousel";

export const BENEFITS: BenefitItem[] = [
  {
    title: "ישירות מהמהנדסים",
    description:
      "בלי שכבת ביניים של סוכנויות. אתם עובדים מול האנשים שכותבים את הקוד ולוקחים אחריות על התוצאה.",
    impact: "החלטות מתקבלות בשעות, לא בשבועות.",
    icon: ShieldCheck,
  },
  {
    title: "קוד מותאם אישית, לא תבניות",
    description:
      "אנחנו לא מחברים תבניות No-Code בתקווה שזה יעבוד. כל מערכת נבנית מאפס סביב תהליך העבודה שלכם.",
    impact: "אין תקרות כשצריך להתרחב.",
    icon: Code2,
  },
  {
    title: "אינטגרציות לעומק",
    description:
      "אנחנו מתחברים ל-Salesforce, HubSpot, Monday, WhatsApp ולמערכות לגאסי שמעולם לא קיבלו API.",
    impact: "המערכות הקיימות שלכם נעשות חכמות יותר, לא מוחלפות.",
    icon: Link2,
  },
  {
    title: "בלי בולשיט",
    description:
      "אנחנו מספקים מערכות, לא מצגות. אם פרויקט לא מחזיר את ההשקעה — נגיד לכם לפני שמתחילים.",
    impact: "אפס ריטיינרים מבוזבזים.",
    icon: MessageCircleOff,
  },
  {
    title: "ROI במרכז",
    description:
      "כל פרויקט נמדד בשעות שנחסכו, בטעויות שנמנעו ובהכנסות שנוצרו — מדידה חודשית, ללא מסכים.",
    impact: "החזר ההשקעה רואים על החשבונית.",
    icon: TrendingUp,
  },
  {
    title: "באים מ-8200",
    description:
      "המייסדים והמהנדסים הם בוגרי יחידה 8200 והטכניון. חשיבה מערכתית ושכל ישר זה חלק מה-DNA.",
    impact: "קפדנות של מערכות קריטיות, מהירות של סטארטאפ.",
    icon: Cpu,
  },
];
