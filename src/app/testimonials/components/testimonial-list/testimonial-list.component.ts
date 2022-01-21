import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { identifyTestimonial, Testimonial } from 'src/app/models';

@Component({
  selector: 'lbk-testimonials-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './testimonial-list.component.html',
  styleUrls: ['./testimonial-list.component.scss'],
})
export class TestimonialsListComponent {
  @Input()
  testimonials!: Testimonial[];
  identifyTestimonial = identifyTestimonial;

  position(index: number) {
    switch (index) {
      case 0:
        return 'zero';
      case 1:
        return 'one';
      case 2:
        return 'two';
      case 3:
        return 'three';
      default:
        return 'four';
    }
  }
}
