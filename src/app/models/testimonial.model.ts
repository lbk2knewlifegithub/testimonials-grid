import { Option } from './option.model';

export interface Testimonial {
  name: string;
  image: string;
  title: string;
  content: string;
  option?: Option;
}

export const identifyTestimonial = (
  index: number,
  testimonial: Testimonial
) => {
  return testimonial.name;
};
