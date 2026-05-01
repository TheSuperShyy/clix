export type Testimonial = {
  id: number;
  name: string;
  role: string;
  videoSrc?: string;
  posterSrc?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "בן דהן",
    role: "בעל עסק",
    videoSrc: encodeURI("/testimonials/בן דהן.MP4"),
  },
  {
    id: 2,
    name: "נועם טובי",
    role: "מנהל חברה",
    videoSrc: encodeURI("/testimonials/נועם טובי.MP4"),
  },
  {
    id: 3,
    name: "אסף פרץ",
    role: "יזם",
    videoSrc: encodeURI("/testimonials/אסף פרץ .MP4"),
  },
  {
    id: 4,
    name: "אדיר פרץ",
    role: "בעל עסק",
    videoSrc: encodeURI("/testimonials/אדיר פרץ.MP4"),
  },
];
