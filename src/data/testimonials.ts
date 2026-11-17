export interface Testimonial {
  name: string;
  company: string;
  rating: number;
  review: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Deepak Rajpoot",
    company: "Uday Clinic",
    rating: 5,
    review:
      "Lexical rebuilt our scheduling system in under two months and it just works. Our dispatchers stopped double-booking technicians within the first week, and the weekly staging updates meant we always knew what to expect.",
  },
  {
    name: "Deepansh Gupta",
    company: "Ganga Amrit Milk Factory",
    rating: 5,
    review:
      "We went from five separate spreadsheets to one dashboard that all our stores actually use. The team was responsive throughout and explained every technical decision in terms we could understand.",
  },
  {
    name: "Pradeep Singh",
    company: "Csc Center",
    rating: 5,
    review:
      "Our new storefront loads noticeably faster and converts better than our old templated site. They handled the migration carefully so we didn't lose any SEO ranking, which we were genuinely worried about.",
  },

  
];
