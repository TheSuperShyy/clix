export type ImpactMetric = {
  value: string;
  caption: string;
  highlight?: boolean;
};

export const IMPACT: ImpactMetric[] = [
  {
    value: "0",
    caption: "לידים שאבדו בגלל מענה איטי או משימה שנשכחה",
  },
  {
    value: "24/7",
    caption: "כיסוי — לילות, סופי שבוע וחגים. הסוכנים שלכם לא ישנים.",
  },
  {
    value: "30+",
    caption:
      "שפות בקצב שיחה אנושי — מערכת אחת לצוותים גלובליים.",
    highlight: true,
  },
  {
    value: "10,000+",
    caption: "שעות שנחסכות בחודש בכל הפרויקטים הפעילים שלנו.",
  },
];
